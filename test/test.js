var crypt = require("../");
var key = "abcdefghijklmnop";
var TestObj = [{
    "id": "56729ee4ecaeb",
    "name": "页面1",
    "data": [
      {
        "title": "列表容器",
        "name": "viewList",
        "id": 2,
        "config": {},
        "list": [
          {
            "title": "图片",
            "name": "pic",
            "config": {
              "id": "image0001",
              "url": "",
              "height": 300,
              "img": {
                "src": "/assets/Material/banner-1.jpg",
                "width": 720,
                "height": 349,
                "startWidth": 720,
                "startHeight": 349
              }
            },
            "icon": "icon-lark-pic",
            "height": 300,
            "id": 1450352878580
          },
          {
            "title": "文章列表",
            "name": "list",
            "config": {
              "items": [
                {
                  "id": "content0001",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/1/150314184020_wqdzpy.png",
                    "url": "http://api.egret-labs.org/games/www/game.php/66_10043",
                    "name": "古龙群侠传",
                    "type": "挂机放置",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "怀着戳爆屏幕的决心，在古龙武侠世界里疯狂地杀小怪吧！"
                  }
                },
                {
                  "id": "content0002",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314183545_nmasib.png",
                    "url": "http://api.egret-labs.org/games/www/game.php/1_10043",
                    "name": "少女战机",
                    "type": "飞行射击",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "玩法更多样、关卡更丰富，清新明快精美的卡通风格，为您带来激爽感觉。"
                  }
                }
              ],
              "backgroundColor": "#fefefe",
              "itemBackgroundColor": "#f7f7f7",
              "borderColor": "#e0eaf4",
              "titleColor": "#333000",
              "textColor": "#333000",
              "buttonColor": "#fefefe",
              "buttonBorderColor": "#e98c00",
              "buttonBorderSize": "3",
              "buttonTextColor": "#e98c00",
              "componentStyle": "7"
            },
            "icon": "icon-lark-news",
            "height": 344,
            "id": 1450352359891
          },
          {
            "title": "图片轮播",
            "name": "banner",
            "id": 3,
            "config": {
              "items": [
                {
                  "id": "image0001",
                  "url": "http://www.baidu.com",
                  "img": {
                    "src": "/assets/Material/banner-1.jpg",
                    "width": 720,
                    "height": 349,
                    "startWidth": 720,
                    "startHeight": 349
                  },
                  "text": "焦点图",
                  "image": {
                    "src": "/assets/Material/banner-1.jpg",
                    "width": 720,
                    "height": 349,
                    "startWidth": 720,
                    "startHeight": 349
                  }
                },
                {
                  "id": "image0002",
                  "url": "http://bbs.egret.com/portal.php",
                  "img": {
                    "src": "/assets/Material/banner-2.jpg",
                    "width": 720,
                    "height": 349,
                    "startWidth": 720,
                    "startHeight": 349
                  },
                  "text": "焦点图",
                  "image": {
                    "src": "/assets/Material/banner-2.jpg",
                    "width": 720,
                    "height": 349,
                    "startWidth": 720,
                    "startHeight": 349
                  }
                }
              ]
            },
            "icon": "/assets/icon-text.png",
            "height": 300
          },
          {
            "title": "列表",
            "name": "list",
            "id": 4,
            "config": {
              "items": [
                {
                  "id": "content0001",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/1/150314184020_wqdzpy.png",
                    "url": "http://api.egret-labs.org/games/www/game.php/66_10043",
                    "name": "古龙群侠传",
                    "type": "挂机放置",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "怀着戳爆屏幕的决心，在古龙武侠世界里疯狂地杀小怪吧！"
                  }
                },
                {
                  "id": "content0002",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314183545_nmasib.png",
                    "url": "http://api.egret-labs.org/games/www/game.php/1_10043",
                    "name": "少女战机",
                    "type": "飞行射击",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "玩法更多样、关卡更丰富，清新明快精美的卡通风格，为您带来激爽感觉。"
                  }
                },
                {
                  "id": "content0003",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314183701_ebmkwg.png",
                    "url": "http://api.egret-labs.org/games/www/game.php/22_10043",
                    "name": "愚公移山",
                    "type": "挂机放置",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "自虐到根本停不下来！丢节操到没朋友！和女神多生子孙完成愚公移山吧！"
                  }
                },
                {
                  "id": "content0004",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314185325_oltcje.png",
                    "url": "http://api.egret-labs.org/games/www/game.php/44_10043",
                    "name": "全民挂机",
                    "type": "挂机放置",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "全天自动战斗、万人激情团战等，诸多新奇玩法给你带来全新的游戏体验！"
                  }
                },
                {
                  "id": "content0005",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314185445_sgjypo.png",
                    "url": "http://api.egret-labs.org/games/www/game.php/45_10043",
                    "name": "全民宫斗",
                    "type": "角色扮演",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "开启一段段惊心动魄的后宫故事，用你的智慧在危机四伏的后宫中生存下来吧。"
                  }
                },
                {
                  "id": "content0006",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314183733_uimkls.png",
                    "url": "http://api.egret-labs.org/games/www/game.php/46_10043",
                    "name": "摩尔战记",
                    "type": "挂机放置",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "2015贺岁大电影同名正版手游，史上最激萌的屏幕终结者强势来袭！"
                  }
                },
                {
                  "id": "content0007",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314192038_zousab.jpg",
                    "url": "http://static.egret-labs.org/h5game//aoyou_games/3_V1/html5/index.html?app_id=10043&game_id=3",
                    "name": "测测你有多脸盲",
                    "type": "益智休闲",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "茫茫人海中，你的小伙伴在哪里？"
                  }
                },
                {
                  "id": "content0008",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314193042_nzatgj.jpg",
                    "url": "http://static.egret-labs.org/h5game//aoyou_games/8_V1/html5/index.html?app_id=10043&game_id=8",
                    "name": "密室逃生",
                    "type": "益智休闲",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "尼玛，活着真是不容易"
                  }
                },
                {
                  "id": "content0009",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314193418_xwbfna.jpg",
                    "url": "http://static.egret-labs.org/h5game//aoyou_games/43_V1/index.html?app_id=10043&game_id=43",
                    "name": "笑脸方块",
                    "type": "益智休闲",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "一款创新的消除类的休闲小游戏"
                  }
                },
                {
                  "id": "content0010",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314205604_xfplbt.jpg",
                    "url": "http://static.egret-labs.org/h5game/aoyou_games/1_V1/html5/index.html?app_id=10043&game_id=1",
                    "name": "钻钱眼儿",
                    "type": "跑酷竞速",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "欢快的节奏加上刺激的游戏，绝对能勾起你童年的回忆。"
                  }
                }
              ],
              "backgroundColor": "#fefefe",
              "itemBackgroundColor": "#f7f7f7",
              "borderColor": "#e0eaf4",
              "titleColor": "#333000",
              "textColor": "#333000",
              "buttonColor": "#fefefe",
              "buttonBorderColor": "#e98c00",
              "buttonBorderSize": "3",
              "buttonTextColor": "#e98c00",
              "componentStyle": "1"
            },
            "icon": "/assets/icon-text.png",
            "height": 636
          }
        ],
        "icon": "/assets/icon-text.png",
        "height": 0
      },
      {
        "title": "导航",
        "name": "tabs",
        "id": 5,
        "config": {
          "items": [
            {
              "name": "home",
              "title": "首页",
              "action": "lark://jump/page?id=56729ee4ecaeb"
            },
            {
              "name": "bbs",
              "title": "游戏列表",
              "action": "lark://jump/page?id=56729ee5039bf"
            }
          ],
          "backgroundColor": "#000000",
          "textColor": "#ffffff",
          "selectBGColor": "#000000",
          "selectTextColor": "#ffffff",
          "componentStyle": "3"
        },
        "icon": "/assets/icon-text.png",
        "height": 100
      }
    ]
  },
  {
    "id": "56729ee5039bf",
    "name": "页面2",
    "data": [
      {
        "title": "列表容器",
        "name": "viewList",
        "id": 2,
        "config": {},
        "list": [
          {
            "title": "列表",
            "name": "list",
            "id": 4,
            "config": {
              "items": [
                {
                  "id": "content0001",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/1/150314184020_wqdzpy.png",
                    "url": "http://api.egret-labs.org/games/www/game.php/66_10043",
                    "name": "古龙群侠传",
                    "type": "挂机放置",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "怀着戳爆屏幕的决心，在古龙武侠世界里疯狂地杀小怪吧！"
                  }
                },
                {
                  "id": "content0002",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314183545_nmasib.png",
                    "url": "http://api.egret-labs.org/games/www/game.php/1_10043",
                    "name": "少女战机",
                    "type": "飞行射击",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "玩法更多样、关卡更丰富，清新明快精美的卡通风格，为您带来激爽感觉。"
                  }
                },
                {
                  "id": "content0003",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314183701_ebmkwg.png",
                    "url": "http://api.egret-labs.org/games/www/game.php/22_10043",
                    "name": "愚公移山",
                    "type": "挂机放置",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "自虐到根本停不下来！丢节操到没朋友！和女神多生子孙完成愚公移山吧！"
                  }
                },
                {
                  "id": "content0004",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314185325_oltcje.png",
                    "url": "http://api.egret-labs.org/games/www/game.php/44_10043",
                    "name": "全民挂机",
                    "type": "挂机放置",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "全天自动战斗、万人激情团战等，诸多新奇玩法给你带来全新的游戏体验！"
                  }
                },
                {
                  "id": "content0005",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314185445_sgjypo.png",
                    "url": "http://api.egret-labs.org/games/www/game.php/45_10043",
                    "name": "全民宫斗",
                    "type": "角色扮演",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "开启一段段惊心动魄的后宫故事，用你的智慧在危机四伏的后宫中生存下来吧。"
                  }
                },
                {
                  "id": "content0006",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314183733_uimkls.png",
                    "url": "http://api.egret-labs.org/games/www/game.php/46_10043",
                    "name": "摩尔战记",
                    "type": "挂机放置",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "2015贺岁大电影同名正版手游，史上最激萌的屏幕终结者强势来袭！"
                  }
                },
                {
                  "id": "content0007",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314192038_zousab.jpg",
                    "url": "http://static.egret-labs.org/h5game//aoyou_games/3_V1/html5/index.html?app_id=10043&game_id=3",
                    "name": "测测你有多脸盲",
                    "type": "益智休闲",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "茫茫人海中，你的小伙伴在哪里？"
                  }
                },
                {
                  "id": "content0008",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314193042_nzatgj.jpg",
                    "url": "http://static.egret-labs.org/h5game//aoyou_games/8_V1/html5/index.html?app_id=10043&game_id=8",
                    "name": "密室逃生",
                    "type": "益智休闲",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "尼玛，活着真是不容易"
                  }
                },
                {
                  "id": "content0009",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314193418_xwbfna.jpg",
                    "url": "http://static.egret-labs.org/h5game//aoyou_games/43_V1/index.html?app_id=10043&game_id=43",
                    "name": "笑脸方块",
                    "type": "益智休闲",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "一款创新的消除类的休闲小游戏"
                  }
                },
                {
                  "id": "content0010",
                  "listInfo": {
                    "fontSize": "12",
                    "letterSpacing": 0,
                    "lineHeight": 20,
                    "textColor": "#000",
                    "textFormat": "",
                    "textAlign": "left",
                    "icon": "http://img.open.egret.com/game/gameIcon/0/150314205604_xfplbt.jpg",
                    "url": "http://static.egret-labs.org/h5game/aoyou_games/1_V1/html5/index.html?app_id=10043&game_id=1",
                    "name": "钻钱眼儿",
                    "type": "跑酷竞速",
                    "contentType": "url",
                    "buttontext": "开始",
                    "desc": "欢快的节奏加上刺激的游戏，绝对能勾起你童年的回忆。"
                  }
                }
              ],
              "backgroundColor": "#fefefe",
              "itemBackgroundColor": "#f7f7f7",
              "borderColor": "#e0eaf4",
              "titleColor": "#333000",
              "textColor": "#333000",
              "buttonColor": "#fefefe",
              "buttonBorderColor": "#e98c00",
              "buttonBorderSize": "3",
              "buttonTextColor": "#e98c00",
              "componentStyle": "1"
            },
            "icon": "/assets/icon-text.png",
            "height": 636
          }
        ],
        "icon": "/assets/icon-text.png",
        "height": 0
      },
      {
        "title": "导航",
        "name": "tabs",
        "id": 5,
        "config": {
          "items": [
            {
              "name": "home",
              "title": "首页",
              "action": "lark://jump/page?id=56729ee4ecaeb"
            },
            {
              "name": "bbs",
              "title": "游戏列表",
              "action": "lark://jump/page?id=56729ee5039bf"
            }
          ],
          "backgroundColor": "#000000",
          "textColor": "#ffffff",
          "selectBGColor": "#000000",
          "selectTextColor": "#e98c00",
          "componentStyle": "3"
        },
        "icon": "/assets/icon-text.png",
        "height": 100
      }
    ]
  }
];

TestObj={name:"Jack",game:"TOME",like:"ME"};
var data_raw = JSON.stringify(TestObj);
console.log("before encryt",data_raw);

var data_out = crypt.encryptTest(data_raw);
console.log("after encryt",data_out);

var data_final = crypt.decryptTest(data_out);
console.log("after decrypt",data_final);
console.log("after decrypt object",JSON.parse(data_final));
