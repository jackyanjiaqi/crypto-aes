var crypto = require('browserify-cipher');
var clearEncoding = 'utf8';
var cipherEncoding = 'base64';
var algorithm = 'aes-128-ecb';
var AES_KEY = "abcdefghijklmnop";
var DEBUG = false;

function encrypt(data,key){
    var cipher = crypto.createCipheriv(algorithm, key, "");
    var cipherChunks = [];
    cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
    cipherChunks.push(cipher.final(cipherEncoding));
    return cipherChunks.join('');
}

function decrypt(data,key){
    var decipher = crypto.createDecipheriv(algorithm, key, "");
    var plainChunks = [];
    plainChunks.push(decipher.update(data,cipherEncoding,clearEncoding));
    plainChunks.push(decipher.final(clearEncoding));
    return plainChunks.join('');
}

function encryptTest(data,key){
    var cipher = crypto.createCipheriv(algorithm, key?key:AES_KEY, "");
    var cipherChunks = [];
    cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
    cipherChunks.push(cipher.final(cipherEncoding));
    return safeEncodeBase64(cipherChunks.join(''));
}

function decryptTest(data,key){
    data = safePredecodeBase64(data);
    var decipher = crypto.createDecipheriv(algorithm, key?key:AES_KEY, "");
    var plainChunks = [];
    plainChunks.push(decipher.update(data,cipherEncoding,clearEncoding));
    plainChunks.push(decipher.final(clearEncoding));
    return plainChunks.join('');
}

function safeEncodeBase64(data){
    //console.log("before safeEncodeBase64",data);
    data = data.replace(/\+/g,'-');
    data = data.replace(/\//g,'_');
    data = data.replace(/=/g,'');
    return data;
}

function safePredecodeBase64(data){
    //console.log("before safePredecodeBase64",data);
    data = data.replace(/\-/g,'+');
    data = data.replace(/_/g,'/');
    var mod4 = data.length%4;
    if(mod4){
        data = data.concat("====".substr(0,mod4));
    }
    return data;
}

function jsonFilter(str){
    console.log("tickoff",str);
    var firstChar = str[0];
    var lastChar = str[str.length-1];
    if(firstChar == '{' || firstChar == '['){
        if(lastChar == ']' || lastChar == '}'){
            return {json:true,str:str};
        }else{
            //全局替换
            return {json:true,str:str.replace(new RegExp(lastChar,"g"),"")};
        }
    }else{
        return {json:false,str:str};
    }
}


//把明文加密
function requestFilter(requestData){
    //发布模式需要加密
    if(!DEBUG){
        var reqStr;
        var isGetOrPost = true;
        if(requestData) {
            if(typeof requestData == "string"){
                isGetOrPost = false;
                reqStr = fromPlainToJsonForm(requestData);
            }else{
                reqStr = JSON.stringify(requestData);
            }
        }else {
            reqStr = JSON.stringify({});
        }
        console.log("before encrypt:",reqStr);
        var encryptParam = encrypt(reqStr,AES_KEY);
        if(isGetOrPost){
            return {p:encryptParam};
        }else{
            return "p="+encryptParam;
        }
    }else{
        return requestData;
    }
}

function quoteFilter(str){
    console.log("quoteFilter",str);
    if(str.length<2){
        return {quote:false,str:str};
    }
    var firstChar = str[0];
    var lastChar = str[str.length-1];
    if(firstChar == '"' && lastChar == '"'){
        return {quote:true,str:str.substr(1,str.length-2)};
    }
    return {quote:false,str:str};
}

//解密函数
function responseFilter(data,type){
    if(!DEBUG){
        console.log('before responseFilter data:',data,'type:',type);
        if(jsonFilter(data).json){
            var jsonData = JSON.parse(data);
            if(typeof jsonData.data == 'string') {
                var decryptStr = decrypt(jsonData.data, AES_KEY);
                console.log("after decrypt:", decryptStr);
                var wrapper = jsonFilter(decryptStr);
                //data为json格式
                if(wrapper.json){
                    jsonData.data = JSON.parse(wrapper.str);
                    return JSON.stringify(jsonData);
                    //data为非json格式
                }else{
                    jsonData.data = wrapper.str;
                    return JSON.stringify(jsonData);
                }
            }
        }else{
            //去掉包裹的引号
            var wrapper = quoteFilter(data);
            data = wrapper.str;
            if(data.length>2 && data[0] == 'p' && data[1] == '='){
                var decryptStr = decrypt(data.substr(2),AES_KEY);
                //引号还原
                if(wrapper.quote){
                    decryptStr = '"'+decryptStr+'"';
                }
                console.log("after decrypt:",decryptStr);
                return decryptStr;
            }
        }
    }
    return data;
}
/**
 * 将=和&连接的form-data参数 修改成可以加密的json格式
 * @param plainStr
 */
function fromPlainToJsonForm(plainStr){
    var params = plainStr.split('&');
    var ret = {};
    for(var i in params){
        var kv = params[i].split('=');
        ret[kv[0]] = kv[1];
    }
    return JSON.stringify(ret);
}

exports.encrypt = encrypt;
exports.decrypt = decrypt;
exports.safeEncodeBase64 = safeEncodeBase64;
exports.safePredecodeBase64 = safePredecodeBase64;
exports.encryptTest = encryptTest;
exports.decryptTest = decryptTest;
exports.jsonFilter = jsonFilter;
exports.requestFilter = requestFilter;
exports.responseFilter = responseFilter;
exports.fromPlainToJsonForm = fromPlainToJsonForm;
