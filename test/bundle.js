/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var crypt = __webpack_require__(1);
	var key = "t0ytGeQ0mEgz89ouFDP6hZ0gJE3eIUicbW55ze+Os0mwQRVTcZidJFwSCwIK0rAhSw0gRyxGY8bFcZW109";
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

	var data_raw = JSON.stringify(TestObj);
	console.log("before encryt",data_raw);

	var data_out = crypt.encrypt(data_raw,key);
	console.log("after encryt",data_out);

	var data_final = crypt.decrypt(data_out,key);
	console.log("after decrypt",data_final);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var crypto = __webpack_require__(2);
	var clearEncoding = 'utf8';
	var cipherEncoding = 'base64';
	var algorithm = 'aes-128-ecb';

	function encrypt(data,key){
	    var cipher = crypto.createCipher(algorithm, key, "");
	    var cipherChunks = [];
	    cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
	    cipherChunks.push(cipher.final(cipherEncoding));
	    return cipherChunks.join('');
	}

	function decrypt(data,key){
	    var decipher = crypto.createDecipher(algorithm, key, "");
	    var plainChunks = [];
	    plainChunks.push(decipher.update(data,cipherEncoding,clearEncoding));
	    plainChunks.push(decipher.final(clearEncoding));
	    return plainChunks.join('');
	}

	exports.encrypt = encrypt;
	exports.decrypt = decrypt;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var ebtk = __webpack_require__(3)
	var aes = __webpack_require__(10)
	var DES = __webpack_require__(47)
	var desModes = __webpack_require__(55)
	var aesModes = __webpack_require__(34)
	function createCipher (suite, password) {
	  var keyLen, ivLen
	  suite = suite.toLowerCase()
	  if (aesModes[suite]) {
	    keyLen = aesModes[suite].key
	    ivLen = aesModes[suite].iv
	  } else if (desModes[suite]) {
	    keyLen = desModes[suite].key * 8
	    ivLen = desModes[suite].iv
	  } else {
	    throw new TypeError('invalid suite type')
	  }
	  var keys = ebtk(password, false, keyLen, ivLen)
	  return createCipheriv(suite, keys.key, keys.iv)
	}
	function createDecipher (suite, password) {
	  var keyLen, ivLen
	  suite = suite.toLowerCase()
	  if (aesModes[suite]) {
	    keyLen = aesModes[suite].key
	    ivLen = aesModes[suite].iv
	  } else if (desModes[suite]) {
	    keyLen = desModes[suite].key * 8
	    ivLen = desModes[suite].iv
	  } else {
	    throw new TypeError('invalid suite type')
	  }
	  var keys = ebtk(password, false, keyLen, ivLen)
	  return createDecipheriv(suite, keys.key, keys.iv)
	}

	function createCipheriv (suite, key, iv) {
	  suite = suite.toLowerCase()
	  if (aesModes[suite]) {
	    return aes.createCipheriv(suite, key, iv)
	  } else if (desModes[suite]) {
	    return new DES({
	      key: key,
	      iv: iv,
	      mode: suite
	    })
	  } else {
	    throw new TypeError('invalid suite type')
	  }
	}
	function createDecipheriv (suite, key, iv) {
	  suite = suite.toLowerCase()
	  if (aesModes[suite]) {
	    return aes.createDecipheriv(suite, key, iv)
	  } else if (desModes[suite]) {
	    return new DES({
	      key: key,
	      iv: iv,
	      mode: suite,
	      decrypt: true
	    })
	  } else {
	    throw new TypeError('invalid suite type')
	  }
	}
	exports.createCipher = exports.Cipher = createCipher
	exports.createCipheriv = exports.Cipheriv = createCipheriv
	exports.createDecipher = exports.Decipher = createDecipher
	exports.createDecipheriv = exports.Decipheriv = createDecipheriv
	function getCiphers () {
	  return Object.keys(desModes).concat(aes.getCiphers())
	}
	exports.listCiphers = exports.getCiphers = getCiphers


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var md5 = __webpack_require__(8)
	module.exports = EVP_BytesToKey
	function EVP_BytesToKey (password, salt, keyLen, ivLen) {
	  if (!Buffer.isBuffer(password)) {
	    password = new Buffer(password, 'binary')
	  }
	  if (salt && !Buffer.isBuffer(salt)) {
	    salt = new Buffer(salt, 'binary')
	  }
	  keyLen = keyLen / 8
	  ivLen = ivLen || 0
	  var ki = 0
	  var ii = 0
	  var key = new Buffer(keyLen)
	  var iv = new Buffer(ivLen)
	  var addmd = 0
	  var md_buf
	  var i
	  var bufs = []
	  while (true) {
	    if (addmd++ > 0) {
	      bufs.push(md_buf)
	    }
	    bufs.push(password)
	    if (salt) {
	      bufs.push(salt)
	    }
	    md_buf = md5(Buffer.concat(bufs))
	    bufs = []
	    i = 0
	    if (keyLen > 0) {
	      while (true) {
	        if (keyLen === 0) {
	          break
	        }
	        if (i === md_buf.length) {
	          break
	        }
	        key[ki++] = md_buf[i]
	        keyLen--
	        i++
	      }
	    }
	    if (ivLen > 0 && i !== md_buf.length) {
	      while (true) {
	        if (ivLen === 0) {
	          break
	        }
	        if (i === md_buf.length) {
	          break
	        }
	        iv[ii++] = md_buf[i]
	        ivLen--
	        i++
	      }
	    }
	    if (keyLen === 0 && ivLen === 0) {
	      break
	    }
	  }
	  for (i = 0; i < md_buf.length; i++) {
	    md_buf[i] = 0
	  }
	  return {
	    key: key,
	    iv: iv
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(5)
	var ieee754 = __webpack_require__(6)
	var isArray = __webpack_require__(7)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation

	var rootParent = {}

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
	 *     on objects.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	function typedArraySupport () {
	  function Bar () {}
	  try {
	    var arr = new Uint8Array(1)
	    arr.foo = function () { return 42 }
	    arr.constructor = Bar
	    return arr.foo() === 42 && // typed array instances can be augmented
	        arr.constructor === Bar && // constructor can be set
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (arg) {
	  if (!(this instanceof Buffer)) {
	    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
	    if (arguments.length > 1) return new Buffer(arg, arguments[1])
	    return new Buffer(arg)
	  }

	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    this.length = 0
	    this.parent = undefined
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    return fromNumber(this, arg)
	  }

	  // Slightly less common case.
	  if (typeof arg === 'string') {
	    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
	  }

	  // Unusual.
	  return fromObject(this, arg)
	}

	function fromNumber (that, length) {
	  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < length; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

	  // Assumption: byteLength() return value is always < kMaxLength.
	  var length = byteLength(string, encoding) | 0
	  that = allocate(that, length)

	  that.write(string, encoding)
	  return that
	}

	function fromObject (that, object) {
	  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

	  if (isArray(object)) return fromArray(that, object)

	  if (object == null) {
	    throw new TypeError('must start with number, buffer, array or string')
	  }

	  if (typeof ArrayBuffer !== 'undefined') {
	    if (object.buffer instanceof ArrayBuffer) {
	      return fromTypedArray(that, object)
	    }
	    if (object instanceof ArrayBuffer) {
	      return fromArrayBuffer(that, object)
	    }
	  }

	  if (object.length) return fromArrayLike(that, object)

	  return fromJsonObject(that, object)
	}

	function fromBuffer (that, buffer) {
	  var length = checked(buffer.length) | 0
	  that = allocate(that, length)
	  buffer.copy(that, 0, 0, length)
	  return that
	}

	function fromArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Duplicate of fromArray() to keep fromArray() monomorphic.
	function fromTypedArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  // Truncating the elements is probably not what people expect from typed
	  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
	  // of the old Buffer constructor.
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    array.byteLength
	    that = Buffer._augment(new Uint8Array(array))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromTypedArray(that, new Uint8Array(array))
	  }
	  return that
	}

	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
	// Returns a zero-length buffer for inputs that don't conform to the spec.
	function fromJsonObject (that, object) {
	  var array
	  var length = 0

	  if (object.type === 'Buffer' && isArray(object.data)) {
	    array = object.data
	    length = checked(array.length) | 0
	  }
	  that = allocate(that, length)

	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	} else {
	  // pre-set for values that may exist in the future
	  Buffer.prototype.length = undefined
	  Buffer.prototype.parent = undefined
	}

	function allocate (that, length) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = Buffer._augment(new Uint8Array(length))
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that.length = length
	    that._isBuffer = true
	  }

	  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
	  if (fromPool) that.parent = rootParent

	  return that
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  var i = 0
	  var len = Math.min(x, y)
	  while (i < len) {
	    if (a[i] !== b[i]) break

	    ++i
	  }

	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

	  if (list.length === 0) {
	    return new Buffer(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }

	  var buf = new Buffer(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}

	function byteLength (string, encoding) {
	  if (typeof string !== 'string') string = '' + string

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'binary':
	      // Deprecated
	      case 'raw':
	      case 'raws':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  start = start | 0
	  end = end === undefined || end === Infinity ? this.length : end | 0

	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'binary':
	        return binarySlice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0

	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1

	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }

	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	// `get` is deprecated
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}

	// `set` is deprecated
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    var swap = encoding
	    encoding = offset
	    offset = length | 0
	    length = swap
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'binary':
	        return binaryWrite(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  if (newBuf.length) newBuf.parent = this.parent || this

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; i--) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; i++) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), targetStart)
	  }

	  return len
	}

	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length

	  if (end < start) throw new RangeError('end < start')

	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return

	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }

	  return this
	}

	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}

	// HELPER FUNCTIONS
	// ================

	var BP = Buffer.prototype

	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true

	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set

	  // deprecated
	  arr.get = BP.get
	  arr.set = BP.set

	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer

	  return arr
	}

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; i++) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	;(function (exports) {
		'use strict';

	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array

		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
		var PLUS_URL_SAFE = '-'.charCodeAt(0)
		var SLASH_URL_SAFE = '_'.charCodeAt(0)

		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS ||
			    code === PLUS_URL_SAFE)
				return 62 // '+'
			if (code === SLASH ||
			    code === SLASH_URL_SAFE)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}

		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr

			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}

			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)

			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length

			var L = 0

			function push (v) {
				arr[L++] = v
			}

			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}

			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}

			return arr
		}

		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length

			function encode (num) {
				return lookup.charAt(num)
			}

			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}

			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}

			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}

			return output
		}

		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}( false ? (this.base64js = {}) : exports))


/***/ },
/* 6 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */

	var helpers = __webpack_require__(9);

	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
	function core_md5(x, len)
	{
	  /* append padding */
	  x[len >> 5] |= 0x80 << ((len) % 32);
	  x[(((len + 64) >>> 9) << 4) + 14] = len;

	  var a =  1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d =  271733878;

	  for(var i = 0; i < x.length; i += 16)
	  {
	    var olda = a;
	    var oldb = b;
	    var oldc = c;
	    var oldd = d;

	    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
	    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
	    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
	    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
	    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
	    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
	    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
	    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
	    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
	    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
	    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
	    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
	    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
	    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
	    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
	    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

	    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
	    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
	    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
	    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
	    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
	    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
	    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
	    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
	    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
	    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
	    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
	    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
	    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
	    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
	    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
	    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

	    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
	    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
	    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
	    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
	    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
	    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
	    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
	    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
	    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
	    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
	    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
	    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
	    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
	    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
	    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
	    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

	    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
	    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
	    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
	    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
	    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
	    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
	    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
	    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
	    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
	    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
	    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
	    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
	    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
	    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
	    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
	    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

	    a = safe_add(a, olda);
	    b = safe_add(b, oldb);
	    c = safe_add(c, oldc);
	    d = safe_add(d, oldd);
	  }
	  return Array(a, b, c, d);

	}

	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t)
	{
	  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
	}
	function md5_ff(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}
	function md5_gg(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}
	function md5_hh(a, b, c, d, x, s, t)
	{
	  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5_ii(a, b, c, d, x, s, t)
	{
	  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	}

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y)
	{
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xFFFF);
	}

	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt)
	{
	  return (num << cnt) | (num >>> (32 - cnt));
	}

	module.exports = function md5(buf) {
	  return helpers.hash(buf, core_md5, 16);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';
	var intSize = 4;
	var zeroBuffer = new Buffer(intSize); zeroBuffer.fill(0);
	var chrsz = 8;

	function toArray(buf, bigEndian) {
	  if ((buf.length % intSize) !== 0) {
	    var len = buf.length + (intSize - (buf.length % intSize));
	    buf = Buffer.concat([buf, zeroBuffer], len);
	  }

	  var arr = [];
	  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
	  for (var i = 0; i < buf.length; i += intSize) {
	    arr.push(fn.call(buf, i));
	  }
	  return arr;
	}

	function toBuffer(arr, size, bigEndian) {
	  var buf = new Buffer(size);
	  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
	  for (var i = 0; i < arr.length; i++) {
	    fn.call(buf, arr[i], i * 4, true);
	  }
	  return buf;
	}

	function hash(buf, fn, hashSize, bigEndian) {
	  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
	  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
	  return toBuffer(arr, hashSize, bigEndian);
	}
	exports.hash = hash;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var ciphers = __webpack_require__(11)
	exports.createCipher = exports.Cipher = ciphers.createCipher
	exports.createCipheriv = exports.Cipheriv = ciphers.createCipheriv
	var deciphers = __webpack_require__(46)
	exports.createDecipher = exports.Decipher = deciphers.createDecipher
	exports.createDecipheriv = exports.Decipheriv = deciphers.createDecipheriv
	var modes = __webpack_require__(34)
	function getCiphers () {
	  return Object.keys(modes)
	}
	exports.listCiphers = exports.getCiphers = getCiphers


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var aes = __webpack_require__(12)
	var Transform = __webpack_require__(13)
	var inherits = __webpack_require__(32)
	var modes = __webpack_require__(34)
	var ebtk = __webpack_require__(3)
	var StreamCipher = __webpack_require__(35)
	var AuthCipher = __webpack_require__(36)
	inherits(Cipher, Transform)
	function Cipher (mode, key, iv) {
	  if (!(this instanceof Cipher)) {
	    return new Cipher(mode, key, iv)
	  }
	  Transform.call(this)
	  this._cache = new Splitter()
	  this._cipher = new aes.AES(key)
	  this._prev = new Buffer(iv.length)
	  iv.copy(this._prev)
	  this._mode = mode
	  this._autopadding = true
	}
	Cipher.prototype._update = function (data) {
	  this._cache.add(data)
	  var chunk
	  var thing
	  var out = []
	  while ((chunk = this._cache.get())) {
	    thing = this._mode.encrypt(this, chunk)
	    out.push(thing)
	  }
	  return Buffer.concat(out)
	}
	Cipher.prototype._final = function () {
	  var chunk = this._cache.flush()
	  if (this._autopadding) {
	    chunk = this._mode.encrypt(this, chunk)
	    this._cipher.scrub()
	    return chunk
	  } else if (chunk.toString('hex') !== '10101010101010101010101010101010') {
	    this._cipher.scrub()
	    throw new Error('data not multiple of block length')
	  }
	}
	Cipher.prototype.setAutoPadding = function (setTo) {
	  this._autopadding = !!setTo
	}

	function Splitter () {
	  if (!(this instanceof Splitter)) {
	    return new Splitter()
	  }
	  this.cache = new Buffer('')
	}
	Splitter.prototype.add = function (data) {
	  this.cache = Buffer.concat([this.cache, data])
	}

	Splitter.prototype.get = function () {
	  if (this.cache.length > 15) {
	    var out = this.cache.slice(0, 16)
	    this.cache = this.cache.slice(16)
	    return out
	  }
	  return null
	}
	Splitter.prototype.flush = function () {
	  var len = 16 - this.cache.length
	  var padBuff = new Buffer(len)

	  var i = -1
	  while (++i < len) {
	    padBuff.writeUInt8(len, i)
	  }
	  var out = Buffer.concat([this.cache, padBuff])
	  return out
	}
	var modelist = {
	  ECB: __webpack_require__(39),
	  CBC: __webpack_require__(40),
	  CFB: __webpack_require__(41),
	  CFB8: __webpack_require__(42),
	  CFB1: __webpack_require__(43),
	  OFB: __webpack_require__(44),
	  CTR: __webpack_require__(45),
	  GCM: __webpack_require__(45)
	}

	function createCipheriv (suite, password, iv) {
	  var config = modes[suite.toLowerCase()]
	  if (!config) {
	    throw new TypeError('invalid suite type')
	  }
	  if (typeof iv === 'string') {
	    iv = new Buffer(iv)
	  }
	  if (typeof password === 'string') {
	    password = new Buffer(password)
	  }
	  if (password.length !== config.key / 8) {
	    throw new TypeError('invalid key length ' + password.length)
	  }
	  if (iv.length !== config.iv) {
	    throw new TypeError('invalid iv length ' + iv.length)
	  }
	  if (config.type === 'stream') {
	    return new StreamCipher(modelist[config.mode], password, iv)
	  } else if (config.type === 'auth') {
	    return new AuthCipher(modelist[config.mode], password, iv)
	  }
	  return new Cipher(modelist[config.mode], password, iv)
	}
	function createCipher (suite, password) {
	  var config = modes[suite.toLowerCase()]
	  if (!config) {
	    throw new TypeError('invalid suite type')
	  }
	  var keys = ebtk(password, false, config.key, config.iv)
	  return createCipheriv(suite, keys.key, keys.iv)
	}

	exports.createCipheriv = createCipheriv
	exports.createCipher = createCipher

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// based on the aes implimentation in triple sec
	// https://github.com/keybase/triplesec

	// which is in turn based on the one from crypto-js
	// https://code.google.com/p/crypto-js/

	var uint_max = Math.pow(2, 32)
	function fixup_uint32 (x) {
	  var ret, x_pos
	  ret = x > uint_max || x < 0 ? (x_pos = Math.abs(x) % uint_max, x < 0 ? uint_max - x_pos : x_pos) : x
	  return ret
	}
	function scrub_vec (v) {
	  for (var i = 0; i < v.length; v++) {
	    v[i] = 0
	  }
	  return false
	}

	function Global () {
	  this.SBOX = []
	  this.INV_SBOX = []
	  this.SUB_MIX = [[], [], [], []]
	  this.INV_SUB_MIX = [[], [], [], []]
	  this.init()
	  this.RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36]
	}

	Global.prototype.init = function () {
	  var d, i, sx, t, x, x2, x4, x8, xi, _i
	  d = (function () {
	    var _i, _results
	    _results = []
	    for (i = _i = 0; _i < 256; i = ++_i) {
	      if (i < 128) {
	        _results.push(i << 1)
	      } else {
	        _results.push((i << 1) ^ 0x11b)
	      }
	    }
	    return _results
	  })()
	  x = 0
	  xi = 0
	  for (i = _i = 0; _i < 256; i = ++_i) {
	    sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4)
	    sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63
	    this.SBOX[x] = sx
	    this.INV_SBOX[sx] = x
	    x2 = d[x]
	    x4 = d[x2]
	    x8 = d[x4]
	    t = (d[sx] * 0x101) ^ (sx * 0x1010100)
	    this.SUB_MIX[0][x] = (t << 24) | (t >>> 8)
	    this.SUB_MIX[1][x] = (t << 16) | (t >>> 16)
	    this.SUB_MIX[2][x] = (t << 8) | (t >>> 24)
	    this.SUB_MIX[3][x] = t
	    t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100)
	    this.INV_SUB_MIX[0][sx] = (t << 24) | (t >>> 8)
	    this.INV_SUB_MIX[1][sx] = (t << 16) | (t >>> 16)
	    this.INV_SUB_MIX[2][sx] = (t << 8) | (t >>> 24)
	    this.INV_SUB_MIX[3][sx] = t
	    if (x === 0) {
	      x = xi = 1
	    } else {
	      x = x2 ^ d[d[d[x8 ^ x2]]]
	      xi ^= d[d[xi]]
	    }
	  }
	  return true
	}

	var G = new Global()

	AES.blockSize = 4 * 4

	AES.prototype.blockSize = AES.blockSize

	AES.keySize = 256 / 8

	AES.prototype.keySize = AES.keySize

	function bufferToArray (buf) {
	  var len = buf.length / 4
	  var out = new Array(len)
	  var i = -1
	  while (++i < len) {
	    out[i] = buf.readUInt32BE(i * 4)
	  }
	  return out
	}
	function AES (key) {
	  this._key = bufferToArray(key)
	  this._doReset()
	}

	AES.prototype._doReset = function () {
	  var invKsRow, keySize, keyWords, ksRow, ksRows, t
	  keyWords = this._key
	  keySize = keyWords.length
	  this._nRounds = keySize + 6
	  ksRows = (this._nRounds + 1) * 4
	  this._keySchedule = []
	  for (ksRow = 0; ksRow < ksRows; ksRow++) {
	    this._keySchedule[ksRow] = ksRow < keySize ? keyWords[ksRow] : (t = this._keySchedule[ksRow - 1], (ksRow % keySize) === 0 ? (t = (t << 8) | (t >>> 24), t = (G.SBOX[t >>> 24] << 24) | (G.SBOX[(t >>> 16) & 0xff] << 16) | (G.SBOX[(t >>> 8) & 0xff] << 8) | G.SBOX[t & 0xff], t ^= G.RCON[(ksRow / keySize) | 0] << 24) : keySize > 6 && ksRow % keySize === 4 ? t = (G.SBOX[t >>> 24] << 24) | (G.SBOX[(t >>> 16) & 0xff] << 16) | (G.SBOX[(t >>> 8) & 0xff] << 8) | G.SBOX[t & 0xff] : void 0, this._keySchedule[ksRow - keySize] ^ t)
	  }
	  this._invKeySchedule = []
	  for (invKsRow = 0; invKsRow < ksRows; invKsRow++) {
	    ksRow = ksRows - invKsRow
	    t = this._keySchedule[ksRow - (invKsRow % 4 ? 0 : 4)]
	    this._invKeySchedule[invKsRow] = invKsRow < 4 || ksRow <= 4 ? t : G.INV_SUB_MIX[0][G.SBOX[t >>> 24]] ^ G.INV_SUB_MIX[1][G.SBOX[(t >>> 16) & 0xff]] ^ G.INV_SUB_MIX[2][G.SBOX[(t >>> 8) & 0xff]] ^ G.INV_SUB_MIX[3][G.SBOX[t & 0xff]]
	  }
	  return true
	}

	AES.prototype.encryptBlock = function (M) {
	  M = bufferToArray(new Buffer(M))
	  var out = this._doCryptBlock(M, this._keySchedule, G.SUB_MIX, G.SBOX)
	  var buf = new Buffer(16)
	  buf.writeUInt32BE(out[0], 0)
	  buf.writeUInt32BE(out[1], 4)
	  buf.writeUInt32BE(out[2], 8)
	  buf.writeUInt32BE(out[3], 12)
	  return buf
	}

	AES.prototype.decryptBlock = function (M) {
	  M = bufferToArray(new Buffer(M))
	  var temp = [M[3], M[1]]
	  M[1] = temp[0]
	  M[3] = temp[1]
	  var out = this._doCryptBlock(M, this._invKeySchedule, G.INV_SUB_MIX, G.INV_SBOX)
	  var buf = new Buffer(16)
	  buf.writeUInt32BE(out[0], 0)
	  buf.writeUInt32BE(out[3], 4)
	  buf.writeUInt32BE(out[2], 8)
	  buf.writeUInt32BE(out[1], 12)
	  return buf
	}

	AES.prototype.scrub = function () {
	  scrub_vec(this._keySchedule)
	  scrub_vec(this._invKeySchedule)
	  scrub_vec(this._key)
	}

	AES.prototype._doCryptBlock = function (M, keySchedule, SUB_MIX, SBOX) {
	  var ksRow, s0, s1, s2, s3, t0, t1, t2, t3

	  s0 = M[0] ^ keySchedule[0]
	  s1 = M[1] ^ keySchedule[1]
	  s2 = M[2] ^ keySchedule[2]
	  s3 = M[3] ^ keySchedule[3]
	  ksRow = 4
	  for (var round = 1; round < this._nRounds; round++) {
	    t0 = SUB_MIX[0][s0 >>> 24] ^ SUB_MIX[1][(s1 >>> 16) & 0xff] ^ SUB_MIX[2][(s2 >>> 8) & 0xff] ^ SUB_MIX[3][s3 & 0xff] ^ keySchedule[ksRow++]
	    t1 = SUB_MIX[0][s1 >>> 24] ^ SUB_MIX[1][(s2 >>> 16) & 0xff] ^ SUB_MIX[2][(s3 >>> 8) & 0xff] ^ SUB_MIX[3][s0 & 0xff] ^ keySchedule[ksRow++]
	    t2 = SUB_MIX[0][s2 >>> 24] ^ SUB_MIX[1][(s3 >>> 16) & 0xff] ^ SUB_MIX[2][(s0 >>> 8) & 0xff] ^ SUB_MIX[3][s1 & 0xff] ^ keySchedule[ksRow++]
	    t3 = SUB_MIX[0][s3 >>> 24] ^ SUB_MIX[1][(s0 >>> 16) & 0xff] ^ SUB_MIX[2][(s1 >>> 8) & 0xff] ^ SUB_MIX[3][s2 & 0xff] ^ keySchedule[ksRow++]
	    s0 = t0
	    s1 = t1
	    s2 = t2
	    s3 = t3
	  }
	  t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++]
	  t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++]
	  t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++]
	  t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++]
	  return [
	    fixup_uint32(t0),
	    fixup_uint32(t1),
	    fixup_uint32(t2),
	    fixup_uint32(t3)
	  ]
	}

	exports.AES = AES

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var Transform = __webpack_require__(14).Transform
	var inherits = __webpack_require__(32)
	var StringDecoder = __webpack_require__(33).StringDecoder
	module.exports = CipherBase
	inherits(CipherBase, Transform)
	function CipherBase (hashMode) {
	  Transform.call(this)
	  this.hashMode = typeof hashMode === 'string'
	  if (this.hashMode) {
	    this[hashMode] = this._finalOrDigest
	  } else {
	    this.final = this._finalOrDigest
	  }
	  this._decoder = null
	  this._encoding = null
	}
	CipherBase.prototype.update = function (data, inputEnc, outputEnc) {
	  if (typeof data === 'string') {
	    data = new Buffer(data, inputEnc)
	  }
	  var outData = this._update(data)
	  if (this.hashMode) {
	    return this
	  }
	  if (outputEnc) {
	    outData = this._toString(outData, outputEnc)
	  }
	  return outData
	}

	CipherBase.prototype.setAutoPadding = function () {}

	CipherBase.prototype.getAuthTag = function () {
	  throw new Error('trying to get auth tag in unsupported state')
	}

	CipherBase.prototype.setAuthTag = function () {
	  throw new Error('trying to set auth tag in unsupported state')
	}

	CipherBase.prototype.setAAD = function () {
	  throw new Error('trying to set aad in unsupported state')
	}

	CipherBase.prototype._transform = function (data, _, next) {
	  var err
	  try {
	    if (this.hashMode) {
	      this._update(data)
	    } else {
	      this.push(this._update(data))
	    }
	  } catch (e) {
	    err = e
	  } finally {
	    next(err)
	  }
	}
	CipherBase.prototype._flush = function (done) {
	  var err
	  try {
	    this.push(this._final())
	  } catch (e) {
	    err = e
	  } finally {
	    done(err)
	  }
	}
	CipherBase.prototype._finalOrDigest = function (outputEnc) {
	  var outData = this._final() || new Buffer('')
	  if (outputEnc) {
	    outData = this._toString(outData, outputEnc, true)
	  }
	  return outData
	}

	CipherBase.prototype._toString = function (value, enc, final) {
	  if (!this._decoder) {
	    this._decoder = new StringDecoder(enc)
	    this._encoding = enc
	  }
	  if (this._encoding !== enc) {
	    throw new Error('can\'t switch encodings')
	  }
	  var out = this._decoder.write(value)
	  if (final) {
	    out += this._decoder.end()
	  }
	  return out
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Stream;

	var EE = __webpack_require__(15).EventEmitter;
	var inherits = __webpack_require__(16);

	inherits(Stream, EE);
	Stream.Readable = __webpack_require__(17);
	Stream.Writable = __webpack_require__(28);
	Stream.Duplex = __webpack_require__(29);
	Stream.Transform = __webpack_require__(30);
	Stream.PassThrough = __webpack_require__(31);

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;



	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream() {
	  EE.call(this);
	}

	Stream.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EE.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18);
	exports.Stream = __webpack_require__(14);
	exports.Readable = exports;
	exports.Writable = __webpack_require__(24);
	exports.Duplex = __webpack_require__(23);
	exports.Transform = __webpack_require__(26);
	exports.PassThrough = __webpack_require__(27);


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Readable;

	/*<replacement>*/
	var isArray = __webpack_require__(20);
	/*</replacement>*/


	/*<replacement>*/
	var Buffer = __webpack_require__(4).Buffer;
	/*</replacement>*/

	Readable.ReadableState = ReadableState;

	var EE = __webpack_require__(15).EventEmitter;

	/*<replacement>*/
	if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/

	var Stream = __webpack_require__(14);

	/*<replacement>*/
	var util = __webpack_require__(21);
	util.inherits = __webpack_require__(16);
	/*</replacement>*/

	var StringDecoder;


	/*<replacement>*/
	var debug = __webpack_require__(22);
	if (debug && debug.debuglog) {
	  debug = debug.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/


	util.inherits(Readable, Stream);

	function ReadableState(options, stream) {
	  var Duplex = __webpack_require__(23);

	  options = options || {};

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.buffer = [];
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;


	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder)
	      StringDecoder = __webpack_require__(25).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable(options) {
	  var Duplex = __webpack_require__(23);

	  if (!(this instanceof Readable))
	    return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  Stream.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function(chunk, encoding) {
	  var state = this._readableState;

	  if (util.isString(chunk) && !state.objectMode) {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = new Buffer(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function(chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (util.isNullOrUndefined(chunk)) {
	    state.reading = false;
	    if (!state.ended)
	      onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var e = new Error('stream.unshift() after end event');
	      stream.emit('error', e);
	    } else {
	      if (state.decoder && !addToFront && !encoding)
	        chunk = state.decoder.write(chunk);

	      if (!addToFront)
	        state.reading = false;

	      // if we want the data now, just emit it.
	      if (state.flowing && state.length === 0 && !state.sync) {
	        stream.emit('data', chunk);
	        stream.read(0);
	      } else {
	        // update the buffer info.
	        state.length += state.objectMode ? 1 : chunk.length;
	        if (addToFront)
	          state.buffer.unshift(chunk);
	        else
	          state.buffer.push(chunk);

	        if (state.needReadable)
	          emitReadable(stream);
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}



	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended &&
	         (state.needReadable ||
	          state.length < state.highWaterMark ||
	          state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function(enc) {
	  if (!StringDecoder)
	    StringDecoder = __webpack_require__(25).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 128MB
	var MAX_HWM = 0x800000;
	function roundUpToNextPowerOf2(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2
	    n--;
	    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
	    n++;
	  }
	  return n;
	}

	function howMuchToRead(n, state) {
	  if (state.length === 0 && state.ended)
	    return 0;

	  if (state.objectMode)
	    return n === 0 ? 0 : 1;

	  if (isNaN(n) || util.isNull(n)) {
	    // only flow one buffer at a time
	    if (state.flowing && state.buffer.length)
	      return state.buffer[0].length;
	    else
	      return state.length;
	  }

	  if (n <= 0)
	    return 0;

	  // If we're asking for more than the target buffer level,
	  // then raise the water mark.  Bump up to the next highest
	  // power of 2, to prevent increasing it excessively in tiny
	  // amounts.
	  if (n > state.highWaterMark)
	    state.highWaterMark = roundUpToNextPowerOf2(n);

	  // don't have that much.  return null, unless we've ended.
	  if (n > state.length) {
	    if (!state.ended) {
	      state.needReadable = true;
	      return 0;
	    } else
	      return state.length;
	  }

	  return n;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function(n) {
	  debug('read', n);
	  var state = this._readableState;
	  var nOrig = n;

	  if (!util.isNumber(n) || n > 0)
	    state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 &&
	      state.needReadable &&
	      (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended)
	      endReadable(this);
	    else
	      emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0)
	      endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  }

	  if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0)
	      state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	  }

	  // If _read pushed data synchronously, then `reading` will be false,
	  // and we need to re-evaluate how much data we can return to the user.
	  if (doRead && !state.reading)
	    n = howMuchToRead(nOrig, state);

	  var ret;
	  if (n > 0)
	    ret = fromList(n, state);
	  else
	    ret = null;

	  if (util.isNull(ret)) {
	    state.needReadable = true;
	    n = 0;
	  }

	  state.length -= n;

	  // If we have nothing in the buffer, then we want to know
	  // as soon as we *do* get something into the buffer.
	  if (state.length === 0 && !state.ended)
	    state.needReadable = true;

	  // If we tried to read() past the EOF, then emit end on the next tick.
	  if (nOrig !== n && state.ended && state.length === 0)
	    endReadable(this);

	  if (!util.isNull(ret))
	    this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}


	function onEofChunk(stream, state) {
	  if (state.decoder && !state.ended) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync)
	      process.nextTick(function() {
	        emitReadable_(stream);
	      });
	    else
	      emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}


	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    process.nextTick(function() {
	      maybeReadMore_(stream, state);
	    });
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended &&
	         state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;
	    else
	      len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function(n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function(dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
	              dest !== process.stdout &&
	              dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted)
	    process.nextTick(endFn);
	  else
	    src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain &&
	        (!dest._writableState || dest._writableState.needDrain))
	      ondrain();
	  }

	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    var ret = dest.write(chunk);
	    if (false === ret) {
	      debug('false write response, pause',
	            src._readableState.awaitDrain);
	      src._readableState.awaitDrain++;
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EE.listenerCount(dest, 'error') === 0)
	      dest.emit('error', er);
	  }
	  // This is a brutally ugly hack to make sure that our error handler
	  // is attached before any userland ones.  NEVER DO THIS.
	  if (!dest._events || !dest._events.error)
	    dest.on('error', onerror);
	  else if (isArray(dest._events.error))
	    dest._events.error.unshift(onerror);
	  else
	    dest._events.error = [onerror, dest._events.error];



	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function() {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain)
	      state.awaitDrain--;
	    if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}


	Readable.prototype.unpipe = function(dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0)
	    return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes)
	      return this;

	    if (!dest)
	      dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest)
	      dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var i = 0; i < len; i++)
	      dests[i].emit('unpipe', this);
	    return this;
	  }

	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1)
	    return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1)
	    state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function(ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);

	  // If listening to data, and it has not explicitly been paused,
	  // then call resume to start the flow of data on the next tick.
	  if (ev === 'data' && false !== this._readableState.flowing) {
	    this.resume();
	  }

	  if (ev === 'readable' && this.readable) {
	    var state = this._readableState;
	    if (!state.readableListening) {
	      state.readableListening = true;
	      state.emittedReadable = false;
	      state.needReadable = true;
	      if (!state.reading) {
	        var self = this;
	        process.nextTick(function() {
	          debug('readable nexttick read 0');
	          self.read(0);
	        });
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function() {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    if (!state.reading) {
	      debug('resume read 0');
	      this.read(0);
	    }
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    process.nextTick(function() {
	      resume_(stream, state);
	    });
	  }
	}

	function resume_(stream, state) {
	  state.resumeScheduled = false;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading)
	    stream.read(0);
	}

	Readable.prototype.pause = function() {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  if (state.flowing) {
	    do {
	      var chunk = stream.read();
	    } while (null !== chunk && state.flowing);
	  }
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function(stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function() {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length)
	        self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function(chunk) {
	    debug('wrapped data');
	    if (state.decoder)
	      chunk = state.decoder.write(chunk);
	    if (!chunk || !state.objectMode && !chunk.length)
	      return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
	      this[i] = function(method) { return function() {
	        return stream[method].apply(stream, arguments);
	      }}(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function(ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function(n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};



	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList(n, state) {
	  var list = state.buffer;
	  var length = state.length;
	  var stringMode = !!state.decoder;
	  var objectMode = !!state.objectMode;
	  var ret;

	  // nothing in the list, definitely empty.
	  if (list.length === 0)
	    return null;

	  if (length === 0)
	    ret = null;
	  else if (objectMode)
	    ret = list.shift();
	  else if (!n || n >= length) {
	    // read it all, truncate the array.
	    if (stringMode)
	      ret = list.join('');
	    else
	      ret = Buffer.concat(list, length);
	    list.length = 0;
	  } else {
	    // read just some of it.
	    if (n < list[0].length) {
	      // just take a part of the first list item.
	      // slice is the same for buffers and strings.
	      var buf = list[0];
	      ret = buf.slice(0, n);
	      list[0] = buf.slice(n);
	    } else if (n === list[0].length) {
	      // first list is a perfect match
	      ret = list.shift();
	    } else {
	      // complex case.
	      // we have enough to cover it, but it spans past the first buffer.
	      if (stringMode)
	        ret = '';
	      else
	        ret = new Buffer(n);

	      var c = 0;
	      for (var i = 0, l = list.length; i < l && c < n; i++) {
	        var buf = list[0];
	        var cpy = Math.min(n - c, buf.length);

	        if (stringMode)
	          ret += buf.slice(0, cpy);
	        else
	          buf.copy(ret, c, 0, cpy);

	        if (cpy < buf.length)
	          list[0] = buf.slice(cpy);
	        else
	          list.shift();

	        c += cpy;
	      }
	    }
	  }

	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0)
	    throw new Error('endReadable called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    process.nextTick(function() {
	      // Check that we didn't get one last unshift.
	      if (!state.endEmitted && state.length === 0) {
	        state.endEmitted = true;
	        stream.readable = false;
	        stream.emit('end');
	      }
	    });
	  }
	}

	function forEach (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf (xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ },
/* 19 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.

	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = Buffer.isBuffer;

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 22 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	module.exports = Duplex;

	/*<replacement>*/
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}
	/*</replacement>*/


	/*<replacement>*/
	var util = __webpack_require__(21);
	util.inherits = __webpack_require__(16);
	/*</replacement>*/

	var Readable = __webpack_require__(18);
	var Writable = __webpack_require__(24);

	util.inherits(Duplex, Readable);

	forEach(objectKeys(Writable.prototype), function(method) {
	  if (!Duplex.prototype[method])
	    Duplex.prototype[method] = Writable.prototype[method];
	});

	function Duplex(options) {
	  if (!(this instanceof Duplex))
	    return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false)
	    this.readable = false;

	  if (options && options.writable === false)
	    this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false)
	    this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended)
	    return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  process.nextTick(this.end.bind(this));
	}

	function forEach (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, cb), and it'll handle all
	// the drain event emission and buffering.

	module.exports = Writable;

	/*<replacement>*/
	var Buffer = __webpack_require__(4).Buffer;
	/*</replacement>*/

	Writable.WritableState = WritableState;


	/*<replacement>*/
	var util = __webpack_require__(21);
	util.inherits = __webpack_require__(16);
	/*</replacement>*/

	var Stream = __webpack_require__(14);

	util.inherits(Writable, Stream);

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	}

	function WritableState(options, stream) {
	  var Duplex = __webpack_require__(23);

	  options = options || {};

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function(er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.buffer = [];

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;
	}

	function Writable(options) {
	  var Duplex = __webpack_require__(23);

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex))
	    return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  Stream.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function() {
	  this.emit('error', new Error('Cannot pipe. Not readable.'));
	};


	function writeAfterEnd(stream, state, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  process.nextTick(function() {
	    cb(er);
	  });
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    var er = new TypeError('Invalid non-string/buffer chunk');
	    stream.emit('error', er);
	    process.nextTick(function() {
	      cb(er);
	    });
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function(chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  else if (!encoding)
	    encoding = state.defaultEncoding;

	  if (!util.isFunction(cb))
	    cb = function() {};

	  if (state.ended)
	    writeAfterEnd(this, state, cb);
	  else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function() {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function() {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing &&
	        !state.corked &&
	        !state.finished &&
	        !state.bufferProcessing &&
	        state.buffer.length)
	      clearBuffer(this, state);
	  }
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode &&
	      state.decodeStrings !== false &&
	      util.isString(chunk)) {
	    chunk = new Buffer(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);
	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret)
	    state.needDrain = true;

	  if (state.writing || state.corked)
	    state.buffer.push(new WriteReq(chunk, encoding, cb));
	  else
	    doWrite(stream, state, false, len, chunk, encoding, cb);

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev)
	    stream._writev(chunk, state.onwrite);
	  else
	    stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  if (sync)
	    process.nextTick(function() {
	      state.pendingcb--;
	      cb(er);
	    });
	  else {
	    state.pendingcb--;
	    cb(er);
	  }

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er)
	    onwriteError(stream, state, sync, er, cb);
	  else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(stream, state);

	    if (!finished &&
	        !state.corked &&
	        !state.bufferProcessing &&
	        state.buffer.length) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      process.nextTick(function() {
	        afterWrite(stream, state, finished, cb);
	      });
	    } else {
	      afterWrite(stream, state, finished, cb);
	    }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished)
	    onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}


	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;

	  if (stream._writev && state.buffer.length > 1) {
	    // Fast case, write everything using _writev()
	    var cbs = [];
	    for (var c = 0; c < state.buffer.length; c++)
	      cbs.push(state.buffer[c].callback);

	    // count the one we are adding, as well.
	    // TODO(isaacs) clean this up
	    state.pendingcb++;
	    doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
	      for (var i = 0; i < cbs.length; i++) {
	        state.pendingcb--;
	        cbs[i](err);
	      }
	    });

	    // Clear buffer
	    state.buffer = [];
	  } else {
	    // Slow case, write chunks one-by-one
	    for (var c = 0; c < state.buffer.length; c++) {
	      var entry = state.buffer[c];
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);

	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        c++;
	        break;
	      }
	    }

	    if (c < state.buffer.length)
	      state.buffer = state.buffer.slice(c);
	    else
	      state.buffer.length = 0;
	  }

	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function(chunk, encoding, cb) {
	  cb(new Error('not implemented'));

	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function(chunk, encoding, cb) {
	  var state = this._writableState;

	  if (util.isFunction(chunk)) {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (!util.isNullOrUndefined(chunk))
	    this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished)
	    endWritable(this, state, cb);
	};


	function needFinish(stream, state) {
	  return (state.ending &&
	          state.length === 0 &&
	          !state.finished &&
	          !state.writing);
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(stream, state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else
	      prefinish(stream, state);
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished)
	      process.nextTick(cb);
	    else
	      stream.once('finish', cb);
	  }
	  state.ended = true;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = __webpack_require__(4).Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.


	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	module.exports = Transform;

	var Duplex = __webpack_require__(23);

	/*<replacement>*/
	var util = __webpack_require__(21);
	util.inherits = __webpack_require__(16);
	/*</replacement>*/

	util.inherits(Transform, Duplex);


	function TransformState(options, stream) {
	  this.afterTransform = function(er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb)
	    return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (!util.isNullOrUndefined(data))
	    stream.push(data);

	  if (cb)
	    cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}


	function Transform(options) {
	  if (!(this instanceof Transform))
	    return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(options, this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  this.once('prefinish', function() {
	    if (util.isFunction(this._flush))
	      this._flush(function(er) {
	        done(stream, er);
	      });
	    else
	      done(stream);
	  });
	}

	Transform.prototype.push = function(chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function(chunk, encoding, cb) {
	  throw new Error('not implemented');
	};

	Transform.prototype._write = function(chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform ||
	        rs.needReadable ||
	        rs.length < rs.highWaterMark)
	      this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function(n) {
	  var ts = this._transformState;

	  if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};


	function done(stream, er) {
	  if (er)
	    return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length)
	    throw new Error('calling transform done when ws.length != 0');

	  if (ts.transforming)
	    throw new Error('calling transform done when still transforming');

	  return stream.push(null);
	}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	module.exports = PassThrough;

	var Transform = __webpack_require__(26);

	/*<replacement>*/
	var util = __webpack_require__(21);
	util.inherits = __webpack_require__(16);
	/*</replacement>*/

	util.inherits(PassThrough, Transform);

	function PassThrough(options) {
	  if (!(this instanceof PassThrough))
	    return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function(chunk, encoding, cb) {
	  cb(null, chunk);
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(24)


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(23)


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26)


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(27)


/***/ },
/* 32 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = __webpack_require__(4).Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}


/***/ },
/* 34 */
/***/ function(module, exports) {

	exports['aes-128-ecb'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 0,
	  mode: 'ECB',
	  type: 'block'
	}
	exports['aes-192-ecb'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 0,
	  mode: 'ECB',
	  type: 'block'
	}
	exports['aes-256-ecb'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 0,
	  mode: 'ECB',
	  type: 'block'
	}
	exports['aes-128-cbc'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CBC',
	  type: 'block'
	}
	exports['aes-192-cbc'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CBC',
	  type: 'block'
	}
	exports['aes-256-cbc'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CBC',
	  type: 'block'
	}
	exports['aes128'] = exports['aes-128-cbc']
	exports['aes192'] = exports['aes-192-cbc']
	exports['aes256'] = exports['aes-256-cbc']
	exports['aes-128-cfb'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CFB',
	  type: 'stream'
	}
	exports['aes-192-cfb'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CFB',
	  type: 'stream'
	}
	exports['aes-256-cfb'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CFB',
	  type: 'stream'
	}
	exports['aes-128-cfb8'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CFB8',
	  type: 'stream'
	}
	exports['aes-192-cfb8'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CFB8',
	  type: 'stream'
	}
	exports['aes-256-cfb8'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CFB8',
	  type: 'stream'
	}
	exports['aes-128-cfb1'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CFB1',
	  type: 'stream'
	}
	exports['aes-192-cfb1'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CFB1',
	  type: 'stream'
	}
	exports['aes-256-cfb1'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CFB1',
	  type: 'stream'
	}
	exports['aes-128-ofb'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'OFB',
	  type: 'stream'
	}
	exports['aes-192-ofb'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'OFB',
	  type: 'stream'
	}
	exports['aes-256-ofb'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'OFB',
	  type: 'stream'
	}
	exports['aes-128-ctr'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CTR',
	  type: 'stream'
	}
	exports['aes-192-ctr'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CTR',
	  type: 'stream'
	}
	exports['aes-256-ctr'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CTR',
	  type: 'stream'
	}
	exports['aes-128-gcm'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 12,
	  mode: 'GCM',
	  type: 'auth'
	}
	exports['aes-192-gcm'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 12,
	  mode: 'GCM',
	  type: 'auth'
	}
	exports['aes-256-gcm'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 12,
	  mode: 'GCM',
	  type: 'auth'
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var aes = __webpack_require__(12)
	var Transform = __webpack_require__(13)
	var inherits = __webpack_require__(32)

	inherits(StreamCipher, Transform)
	module.exports = StreamCipher
	function StreamCipher (mode, key, iv, decrypt) {
	  if (!(this instanceof StreamCipher)) {
	    return new StreamCipher(mode, key, iv)
	  }
	  Transform.call(this)
	  this._cipher = new aes.AES(key)
	  this._prev = new Buffer(iv.length)
	  this._cache = new Buffer('')
	  this._secCache = new Buffer('')
	  this._decrypt = decrypt
	  iv.copy(this._prev)
	  this._mode = mode
	}
	StreamCipher.prototype._update = function (chunk) {
	  return this._mode.encrypt(this, chunk, this._decrypt)
	}
	StreamCipher.prototype._final = function () {
	  this._cipher.scrub()
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var aes = __webpack_require__(12)
	var Transform = __webpack_require__(13)
	var inherits = __webpack_require__(32)
	var GHASH = __webpack_require__(37)
	var xor = __webpack_require__(38)
	inherits(StreamCipher, Transform)
	module.exports = StreamCipher

	function StreamCipher (mode, key, iv, decrypt) {
	  if (!(this instanceof StreamCipher)) {
	    return new StreamCipher(mode, key, iv)
	  }
	  Transform.call(this)
	  this._finID = Buffer.concat([iv, new Buffer([0, 0, 0, 1])])
	  iv = Buffer.concat([iv, new Buffer([0, 0, 0, 2])])
	  this._cipher = new aes.AES(key)
	  this._prev = new Buffer(iv.length)
	  this._cache = new Buffer('')
	  this._secCache = new Buffer('')
	  this._decrypt = decrypt
	  this._alen = 0
	  this._len = 0
	  iv.copy(this._prev)
	  this._mode = mode
	  var h = new Buffer(4)
	  h.fill(0)
	  this._ghash = new GHASH(this._cipher.encryptBlock(h))
	  this._authTag = null
	  this._called = false
	}
	StreamCipher.prototype._update = function (chunk) {
	  if (!this._called && this._alen) {
	    var rump = 16 - (this._alen % 16)
	    if (rump < 16) {
	      rump = new Buffer(rump)
	      rump.fill(0)
	      this._ghash.update(rump)
	    }
	  }
	  this._called = true
	  var out = this._mode.encrypt(this, chunk)
	  if (this._decrypt) {
	    this._ghash.update(chunk)
	  } else {
	    this._ghash.update(out)
	  }
	  this._len += chunk.length
	  return out
	}
	StreamCipher.prototype._final = function () {
	  if (this._decrypt && !this._authTag) {
	    throw new Error('Unsupported state or unable to authenticate data')
	  }
	  var tag = xor(this._ghash.final(this._alen * 8, this._len * 8), this._cipher.encryptBlock(this._finID))
	  if (this._decrypt) {
	    if (xorTest(tag, this._authTag)) {
	      throw new Error('Unsupported state or unable to authenticate data')
	    }
	  } else {
	    this._authTag = tag
	  }
	  this._cipher.scrub()
	}
	StreamCipher.prototype.getAuthTag = function getAuthTag () {
	  if (!this._decrypt && Buffer.isBuffer(this._authTag)) {
	    return this._authTag
	  } else {
	    throw new Error('Attempting to get auth tag in unsupported state')
	  }
	}
	StreamCipher.prototype.setAuthTag = function setAuthTag (tag) {
	  if (this._decrypt) {
	    this._authTag = tag
	  } else {
	    throw new Error('Attempting to set auth tag in unsupported state')
	  }
	}
	StreamCipher.prototype.setAAD = function setAAD (buf) {
	  if (!this._called) {
	    this._ghash.update(buf)
	    this._alen += buf.length
	  } else {
	    throw new Error('Attempting to set AAD in unsupported state')
	  }
	}
	function xorTest (a, b) {
	  var out = 0
	  if (a.length !== b.length) {
	    out++
	  }
	  var len = Math.min(a.length, b.length)
	  var i = -1
	  while (++i < len) {
	    out += (a[i] ^ b[i])
	  }
	  return out
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var zeros = new Buffer(16)
	zeros.fill(0)
	module.exports = GHASH
	function GHASH (key) {
	  this.h = key
	  this.state = new Buffer(16)
	  this.state.fill(0)
	  this.cache = new Buffer('')
	}
	// from http://bitwiseshiftleft.github.io/sjcl/doc/symbols/src/core_gcm.js.html
	// by Juho Vähä-Herttua
	GHASH.prototype.ghash = function (block) {
	  var i = -1
	  while (++i < block.length) {
	    this.state[i] ^= block[i]
	  }
	  this._multiply()
	}

	GHASH.prototype._multiply = function () {
	  var Vi = toArray(this.h)
	  var Zi = [0, 0, 0, 0]
	  var j, xi, lsb_Vi
	  var i = -1
	  while (++i < 128) {
	    xi = (this.state[~~(i / 8)] & (1 << (7 - i % 8))) !== 0
	    if (xi) {
	      // Z_i+1 = Z_i ^ V_i
	      Zi = xor(Zi, Vi)
	    }

	    // Store the value of LSB(V_i)
	    lsb_Vi = (Vi[3] & 1) !== 0

	    // V_i+1 = V_i >> 1
	    for (j = 3; j > 0; j--) {
	      Vi[j] = (Vi[j] >>> 1) | ((Vi[j - 1] & 1) << 31)
	    }
	    Vi[0] = Vi[0] >>> 1

	    // If LSB(V_i) is 1, V_i+1 = (V_i >> 1) ^ R
	    if (lsb_Vi) {
	      Vi[0] = Vi[0] ^ (0xe1 << 24)
	    }
	  }
	  this.state = fromArray(Zi)
	}
	GHASH.prototype.update = function (buf) {
	  this.cache = Buffer.concat([this.cache, buf])
	  var chunk
	  while (this.cache.length >= 16) {
	    chunk = this.cache.slice(0, 16)
	    this.cache = this.cache.slice(16)
	    this.ghash(chunk)
	  }
	}
	GHASH.prototype.final = function (abl, bl) {
	  if (this.cache.length) {
	    this.ghash(Buffer.concat([this.cache, zeros], 16))
	  }
	  this.ghash(fromArray([
	    0, abl,
	    0, bl
	  ]))
	  return this.state
	}

	function toArray (buf) {
	  return [
	    buf.readUInt32BE(0),
	    buf.readUInt32BE(4),
	    buf.readUInt32BE(8),
	    buf.readUInt32BE(12)
	  ]
	}
	function fromArray (out) {
	  out = out.map(fixup_uint32)
	  var buf = new Buffer(16)
	  buf.writeUInt32BE(out[0], 0)
	  buf.writeUInt32BE(out[1], 4)
	  buf.writeUInt32BE(out[2], 8)
	  buf.writeUInt32BE(out[3], 12)
	  return buf
	}
	var uint_max = Math.pow(2, 32)
	function fixup_uint32 (x) {
	  var ret, x_pos
	  ret = x > uint_max || x < 0 ? (x_pos = Math.abs(x) % uint_max, x < 0 ? uint_max - x_pos : x_pos) : x
	  return ret
	}
	function xor (a, b) {
	  return [
	    a[0] ^ b[0],
	    a[1] ^ b[1],
	    a[2] ^ b[2],
	    a[3] ^ b[3]
	  ]
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = function xor (a, b) {
	  var length = Math.min(a.length, b.length)
	  var buffer = new Buffer(length)

	  for (var i = 0; i < length; ++i) {
	    buffer[i] = a[i] ^ b[i]
	  }

	  return buffer
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 39 */
/***/ function(module, exports) {

	exports.encrypt = function (self, block) {
	  return self._cipher.encryptBlock(block)
	}
	exports.decrypt = function (self, block) {
	  return self._cipher.decryptBlock(block)
	}


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var xor = __webpack_require__(38)

	exports.encrypt = function (self, block) {
	  var data = xor(block, self._prev)

	  self._prev = self._cipher.encryptBlock(data)
	  return self._prev
	}

	exports.decrypt = function (self, block) {
	  var pad = self._prev

	  self._prev = block
	  var out = self._cipher.decryptBlock(block)

	  return xor(out, pad)
	}


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var xor = __webpack_require__(38)

	exports.encrypt = function (self, data, decrypt) {
	  var out = new Buffer('')
	  var len

	  while (data.length) {
	    if (self._cache.length === 0) {
	      self._cache = self._cipher.encryptBlock(self._prev)
	      self._prev = new Buffer('')
	    }

	    if (self._cache.length <= data.length) {
	      len = self._cache.length
	      out = Buffer.concat([out, encryptStart(self, data.slice(0, len), decrypt)])
	      data = data.slice(len)
	    } else {
	      out = Buffer.concat([out, encryptStart(self, data, decrypt)])
	      break
	    }
	  }

	  return out
	}
	function encryptStart (self, data, decrypt) {
	  var len = data.length
	  var out = xor(data, self._cache)
	  self._cache = self._cache.slice(len)
	  self._prev = Buffer.concat([self._prev, decrypt ? data : out])
	  return out
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {function encryptByte (self, byteParam, decrypt) {
	  var pad = self._cipher.encryptBlock(self._prev)
	  var out = pad[0] ^ byteParam
	  self._prev = Buffer.concat([self._prev.slice(1), new Buffer([decrypt ? byteParam : out])])
	  return out
	}
	exports.encrypt = function (self, chunk, decrypt) {
	  var len = chunk.length
	  var out = new Buffer(len)
	  var i = -1
	  while (++i < len) {
	    out[i] = encryptByte(self, chunk[i], decrypt)
	  }
	  return out
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {function encryptByte (self, byteParam, decrypt) {
	  var pad
	  var i = -1
	  var len = 8
	  var out = 0
	  var bit, value
	  while (++i < len) {
	    pad = self._cipher.encryptBlock(self._prev)
	    bit = (byteParam & (1 << (7 - i))) ? 0x80 : 0
	    value = pad[0] ^ bit
	    out += ((value & 0x80) >> (i % 8))
	    self._prev = shiftIn(self._prev, decrypt ? bit : value)
	  }
	  return out
	}
	exports.encrypt = function (self, chunk, decrypt) {
	  var len = chunk.length
	  var out = new Buffer(len)
	  var i = -1
	  while (++i < len) {
	    out[i] = encryptByte(self, chunk[i], decrypt)
	  }
	  return out
	}
	function shiftIn (buffer, value) {
	  var len = buffer.length
	  var i = -1
	  var out = new Buffer(buffer.length)
	  buffer = Buffer.concat([buffer, new Buffer([value])])
	  while (++i < len) {
	    out[i] = buffer[i] << 1 | buffer[i + 1] >> (7)
	  }
	  return out
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var xor = __webpack_require__(38)

	function getBlock (self) {
	  self._prev = self._cipher.encryptBlock(self._prev)
	  return self._prev
	}

	exports.encrypt = function (self, chunk) {
	  while (self._cache.length < chunk.length) {
	    self._cache = Buffer.concat([self._cache, getBlock(self)])
	  }

	  var pad = self._cache.slice(0, chunk.length)
	  self._cache = self._cache.slice(chunk.length)
	  return xor(chunk, pad)
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var xor = __webpack_require__(38)

	function incr32 (iv) {
	  var len = iv.length
	  var item
	  while (len--) {
	    item = iv.readUInt8(len)
	    if (item === 255) {
	      iv.writeUInt8(0, len)
	    } else {
	      item++
	      iv.writeUInt8(item, len)
	      break
	    }
	  }
	}

	function getBlock (self) {
	  var out = self._cipher.encryptBlock(self._prev)
	  incr32(self._prev)
	  return out
	}

	exports.encrypt = function (self, chunk) {
	  while (self._cache.length < chunk.length) {
	    self._cache = Buffer.concat([self._cache, getBlock(self)])
	  }
	  var pad = self._cache.slice(0, chunk.length)
	  self._cache = self._cache.slice(chunk.length)
	  return xor(chunk, pad)
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var aes = __webpack_require__(12)
	var Transform = __webpack_require__(13)
	var inherits = __webpack_require__(32)
	var modes = __webpack_require__(34)
	var StreamCipher = __webpack_require__(35)
	var AuthCipher = __webpack_require__(36)
	var ebtk = __webpack_require__(3)

	inherits(Decipher, Transform)
	function Decipher (mode, key, iv) {
	  if (!(this instanceof Decipher)) {
	    return new Decipher(mode, key, iv)
	  }
	  Transform.call(this)
	  this._cache = new Splitter()
	  this._last = void 0
	  this._cipher = new aes.AES(key)
	  this._prev = new Buffer(iv.length)
	  iv.copy(this._prev)
	  this._mode = mode
	  this._autopadding = true
	}
	Decipher.prototype._update = function (data) {
	  this._cache.add(data)
	  var chunk
	  var thing
	  var out = []
	  while ((chunk = this._cache.get(this._autopadding))) {
	    thing = this._mode.decrypt(this, chunk)
	    out.push(thing)
	  }
	  return Buffer.concat(out)
	}
	Decipher.prototype._final = function () {
	  var chunk = this._cache.flush()
	  if (this._autopadding) {
	    return unpad(this._mode.decrypt(this, chunk))
	  } else if (chunk) {
	    throw new Error('data not multiple of block length')
	  }
	}
	Decipher.prototype.setAutoPadding = function (setTo) {
	  this._autopadding = !!setTo
	}
	function Splitter () {
	  if (!(this instanceof Splitter)) {
	    return new Splitter()
	  }
	  this.cache = new Buffer('')
	}
	Splitter.prototype.add = function (data) {
	  this.cache = Buffer.concat([this.cache, data])
	}

	Splitter.prototype.get = function (autoPadding) {
	  var out
	  if (autoPadding) {
	    if (this.cache.length > 16) {
	      out = this.cache.slice(0, 16)
	      this.cache = this.cache.slice(16)
	      return out
	    }
	  } else {
	    if (this.cache.length >= 16) {
	      out = this.cache.slice(0, 16)
	      this.cache = this.cache.slice(16)
	      return out
	    }
	  }
	  return null
	}
	Splitter.prototype.flush = function () {
	  if (this.cache.length) {
	    return this.cache
	  }
	}
	function unpad (last) {
	  var padded = last[15]
	  var i = -1
	  while (++i < padded) {
	    if (last[(i + (16 - padded))] !== padded) {
	      throw new Error('unable to decrypt data')
	    }
	  }
	  if (padded === 16) {
	    return
	  }
	  return last.slice(0, 16 - padded)
	}

	var modelist = {
	  ECB: __webpack_require__(39),
	  CBC: __webpack_require__(40),
	  CFB: __webpack_require__(41),
	  CFB8: __webpack_require__(42),
	  CFB1: __webpack_require__(43),
	  OFB: __webpack_require__(44),
	  CTR: __webpack_require__(45),
	  GCM: __webpack_require__(45)
	}

	function createDecipheriv (suite, password, iv) {
	  var config = modes[suite.toLowerCase()]
	  if (!config) {
	    throw new TypeError('invalid suite type')
	  }
	  if (typeof iv === 'string') {
	    iv = new Buffer(iv)
	  }
	  if (typeof password === 'string') {
	    password = new Buffer(password)
	  }
	  if (password.length !== config.key / 8) {
	    throw new TypeError('invalid key length ' + password.length)
	  }
	  if (iv.length !== config.iv) {
	    throw new TypeError('invalid iv length ' + iv.length)
	  }
	  if (config.type === 'stream') {
	    return new StreamCipher(modelist[config.mode], password, iv, true)
	  } else if (config.type === 'auth') {
	    return new AuthCipher(modelist[config.mode], password, iv, true)
	  }
	  return new Decipher(modelist[config.mode], password, iv)
	}

	function createDecipher (suite, password) {
	  var config = modes[suite.toLowerCase()]
	  if (!config) {
	    throw new TypeError('invalid suite type')
	  }
	  var keys = ebtk(password, false, config.key, config.iv)
	  return createDecipheriv(suite, keys.key, keys.iv)
	}
	exports.createDecipher = createDecipher
	exports.createDecipheriv = createDecipheriv

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var CipherBase = __webpack_require__(13)
	var des = __webpack_require__(48)
	var inherits = __webpack_require__(32)

	var modes = {
	  'des-ede3-cbc': des.CBC.instantiate(des.EDE),
	  'des-ede3': des.EDE,
	  'des-ede-cbc': des.CBC.instantiate(des.EDE),
	  'des-ede': des.EDE,
	  'des-cbc': des.CBC.instantiate(des.DES),
	  'des-ecb': des.DES
	}
	modes.des = modes['des-cbc']
	modes.des3 = modes['des-ede3-cbc']
	module.exports = DES
	inherits(DES, CipherBase)
	function DES (opts) {
	  CipherBase.call(this)
	  var modeName = opts.mode.toLowerCase()
	  var mode = modes[modeName]
	  var type
	  if (opts.decrypt) {
	    type = 'decrypt'
	  } else {
	    type = 'encrypt'
	  }
	  var key = opts.key
	  if (modeName === 'des-ede' || modeName === 'des-ede-cbc') {
	    key = Buffer.concat([key, key.slice(0, 8)])
	  }
	  var iv = opts.iv
	  this._des = mode.create({
	    key: key,
	    iv: iv,
	    type: type
	  })
	}
	DES.prototype._update = function (data) {
	  return new Buffer(this._des.update(data))
	}
	DES.prototype._final = function () {
	  return new Buffer(this._des.final())
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.utils = __webpack_require__(49);
	exports.Cipher = __webpack_require__(50);
	exports.DES = __webpack_require__(52);
	exports.CBC = __webpack_require__(53);
	exports.EDE = __webpack_require__(54);


/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	exports.readUInt32BE = function readUInt32BE(bytes, off) {
	  var res =  (bytes[0 + off] << 24) |
	             (bytes[1 + off] << 16) |
	             (bytes[2 + off] << 8) |
	             bytes[3 + off];
	  return res >>> 0;
	};

	exports.writeUInt32BE = function writeUInt32BE(bytes, value, off) {
	  bytes[0 + off] = value >>> 24;
	  bytes[1 + off] = (value >>> 16) & 0xff;
	  bytes[2 + off] = (value >>> 8) & 0xff;
	  bytes[3 + off] = value & 0xff;
	};

	exports.ip = function ip(inL, inR, out, off) {
	  var outL = 0;
	  var outR = 0;

	  for (var i = 6; i >= 0; i -= 2) {
	    for (var j = 0; j <= 24; j += 8) {
	      outL <<= 1;
	      outL |= (inR >>> (j + i)) & 1;
	    }
	    for (var j = 0; j <= 24; j += 8) {
	      outL <<= 1;
	      outL |= (inL >>> (j + i)) & 1;
	    }
	  }

	  for (var i = 6; i >= 0; i -= 2) {
	    for (var j = 1; j <= 25; j += 8) {
	      outR <<= 1;
	      outR |= (inR >>> (j + i)) & 1;
	    }
	    for (var j = 1; j <= 25; j += 8) {
	      outR <<= 1;
	      outR |= (inL >>> (j + i)) & 1;
	    }
	  }

	  out[off + 0] = outL >>> 0;
	  out[off + 1] = outR >>> 0;
	};

	exports.rip = function rip(inL, inR, out, off) {
	  var outL = 0;
	  var outR = 0;

	  for (var i = 0; i < 4; i++) {
	    for (var j = 24; j >= 0; j -= 8) {
	      outL <<= 1;
	      outL |= (inR >>> (j + i)) & 1;
	      outL <<= 1;
	      outL |= (inL >>> (j + i)) & 1;
	    }
	  }
	  for (var i = 4; i < 8; i++) {
	    for (var j = 24; j >= 0; j -= 8) {
	      outR <<= 1;
	      outR |= (inR >>> (j + i)) & 1;
	      outR <<= 1;
	      outR |= (inL >>> (j + i)) & 1;
	    }
	  }

	  out[off + 0] = outL >>> 0;
	  out[off + 1] = outR >>> 0;
	};

	exports.pc1 = function pc1(inL, inR, out, off) {
	  var outL = 0;
	  var outR = 0;

	  // 7, 15, 23, 31, 39, 47, 55, 63
	  // 6, 14, 22, 30, 39, 47, 55, 63
	  // 5, 13, 21, 29, 39, 47, 55, 63
	  // 4, 12, 20, 28
	  for (var i = 7; i >= 5; i--) {
	    for (var j = 0; j <= 24; j += 8) {
	      outL <<= 1;
	      outL |= (inR >> (j + i)) & 1;
	    }
	    for (var j = 0; j <= 24; j += 8) {
	      outL <<= 1;
	      outL |= (inL >> (j + i)) & 1;
	    }
	  }
	  for (var j = 0; j <= 24; j += 8) {
	    outL <<= 1;
	    outL |= (inR >> (j + i)) & 1;
	  }

	  // 1, 9, 17, 25, 33, 41, 49, 57
	  // 2, 10, 18, 26, 34, 42, 50, 58
	  // 3, 11, 19, 27, 35, 43, 51, 59
	  // 36, 44, 52, 60
	  for (var i = 1; i <= 3; i++) {
	    for (var j = 0; j <= 24; j += 8) {
	      outR <<= 1;
	      outR |= (inR >> (j + i)) & 1;
	    }
	    for (var j = 0; j <= 24; j += 8) {
	      outR <<= 1;
	      outR |= (inL >> (j + i)) & 1;
	    }
	  }
	  for (var j = 0; j <= 24; j += 8) {
	    outR <<= 1;
	    outR |= (inL >> (j + i)) & 1;
	  }

	  out[off + 0] = outL >>> 0;
	  out[off + 1] = outR >>> 0;
	};

	exports.r28shl = function r28shl(num, shift) {
	  return ((num << shift) & 0xfffffff) | (num >>> (28 - shift));
	};

	var pc2table = [
	  // inL => outL
	  14, 11, 17, 4, 27, 23, 25, 0,
	  13, 22, 7, 18, 5, 9, 16, 24,
	  2, 20, 12, 21, 1, 8, 15, 26,

	  // inR => outR
	  15, 4, 25, 19, 9, 1, 26, 16,
	  5, 11, 23, 8, 12, 7, 17, 0,
	  22, 3, 10, 14, 6, 20, 27, 24
	];

	exports.pc2 = function pc2(inL, inR, out, off) {
	  var outL = 0;
	  var outR = 0;

	  var len = pc2table.length >>> 1;
	  for (var i = 0; i < len; i++) {
	    outL <<= 1;
	    outL |= (inL >>> pc2table[i]) & 0x1;
	  }
	  for (var i = len; i < pc2table.length; i++) {
	    outR <<= 1;
	    outR |= (inR >>> pc2table[i]) & 0x1;
	  }

	  out[off + 0] = outL >>> 0;
	  out[off + 1] = outR >>> 0;
	};

	exports.expand = function expand(r, out, off) {
	  var outL = 0;
	  var outR = 0;

	  outL = ((r & 1) << 5) | (r >>> 27);
	  for (var i = 23; i >= 15; i -= 4) {
	    outL <<= 6;
	    outL |= (r >>> i) & 0x3f;
	  }
	  for (var i = 11; i >= 3; i -= 4) {
	    outR |= (r >>> i) & 0x3f;
	    outR <<= 6;
	  }
	  outR |= ((r & 0x1f) << 1) | (r >>> 31);

	  out[off + 0] = outL >>> 0;
	  out[off + 1] = outR >>> 0;
	};

	var sTable = [
	  14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1,
	  3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8,
	  4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7,
	  15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13,

	  15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14,
	  9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5,
	  0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2,
	  5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9,

	  10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10,
	  1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1,
	  13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7,
	  11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12,

	  7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3,
	  1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9,
	  10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8,
	  15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14,

	  2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1,
	  8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6,
	  4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13,
	  15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3,

	  12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5,
	  0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8,
	  9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10,
	  7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13,

	  4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10,
	  3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6,
	  1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7,
	  10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12,

	  13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4,
	  10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2,
	  7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13,
	  0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11
	];

	exports.substitute = function substitute(inL, inR) {
	  var out = 0;
	  for (var i = 0; i < 4; i++) {
	    var b = (inL >>> (18 - i * 6)) & 0x3f;
	    var sb = sTable[i * 0x40 + b];

	    out <<= 4;
	    out |= sb;
	  }
	  for (var i = 0; i < 4; i++) {
	    var b = (inR >>> (18 - i * 6)) & 0x3f;
	    var sb = sTable[4 * 0x40 + i * 0x40 + b];

	    out <<= 4;
	    out |= sb;
	  }
	  return out >>> 0;
	};

	var permuteTable = [
	  16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22,
	  30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7
	];

	exports.permute = function permute(num) {
	  var out = 0;
	  for (var i = 0; i < permuteTable.length; i++) {
	    out <<= 1;
	    out |= (num >>> permuteTable[i]) & 0x1;
	  }
	  return out >>> 0;
	};

	exports.padSplit = function padSplit(num, size, group) {
	  var str = num.toString(2);
	  while (str.length < size)
	    str = '0' + str;

	  var out = [];
	  for (var i = 0; i < size; i += group)
	    out.push(str.slice(i, i + group));
	  return out.join(' ');
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(51);

	function Cipher(options) {
	  this.options = options;

	  this.type = this.options.type;
	  this.blockSize = 8;
	  this._init();

	  this.buffer = new Array(this.blockSize);
	  this.bufferOff = 0;
	}
	module.exports = Cipher;

	Cipher.prototype._init = function _init() {
	  // Might be overrided
	};

	Cipher.prototype.update = function update(data) {
	  if (data.length === 0)
	    return [];

	  if (this.type === 'decrypt')
	    return this._updateDecrypt(data);
	  else
	    return this._updateEncrypt(data);
	};

	Cipher.prototype._buffer = function _buffer(data, off) {
	  // Append data to buffer
	  var min = Math.min(this.buffer.length - this.bufferOff, data.length - off);
	  for (var i = 0; i < min; i++)
	    this.buffer[this.bufferOff + i] = data[off + i];
	  this.bufferOff += min;

	  // Shift next
	  return min;
	};

	Cipher.prototype._flushBuffer = function _flushBuffer(out, off) {
	  this._update(this.buffer, 0, out, off);
	  this.bufferOff = 0;
	  return this.blockSize;
	};

	Cipher.prototype._updateEncrypt = function _updateEncrypt(data) {
	  var inputOff = 0;
	  var outputOff = 0;

	  var count = ((this.bufferOff + data.length) / this.blockSize) | 0;
	  var out = new Array(count * this.blockSize);

	  if (this.bufferOff !== 0) {
	    inputOff += this._buffer(data, inputOff);

	    if (this.bufferOff === this.buffer.length)
	      outputOff += this._flushBuffer(out, outputOff);
	  }

	  // Write blocks
	  var max = data.length - ((data.length - inputOff) % this.blockSize);
	  for (; inputOff < max; inputOff += this.blockSize) {
	    this._update(data, inputOff, out, outputOff);
	    outputOff += this.blockSize;
	  }

	  // Queue rest
	  for (; inputOff < data.length; inputOff++, this.bufferOff++)
	    this.buffer[this.bufferOff] = data[inputOff];

	  return out;
	};

	Cipher.prototype._updateDecrypt = function _updateDecrypt(data) {
	  var inputOff = 0;
	  var outputOff = 0;

	  var count = Math.ceil((this.bufferOff + data.length) / this.blockSize) - 1;
	  var out = new Array(count * this.blockSize);

	  // TODO(indutny): optimize it, this is far from optimal
	  for (; count > 0; count--) {
	    inputOff += this._buffer(data, inputOff);
	    outputOff += this._flushBuffer(out, outputOff);
	  }

	  // Buffer rest of the input
	  inputOff += this._buffer(data, inputOff);

	  return out;
	};

	Cipher.prototype.final = function final(buffer) {
	  var first;
	  if (buffer)
	    first = this.update(buffer);

	  var last;
	  if (this.type === 'encrypt')
	    last = this._finalEncrypt();
	  else
	    last = this._finalDecrypt();

	  if (first)
	    return first.concat(last);
	  else
	    return last;
	};

	Cipher.prototype._pad = function _pad(buffer, off) {
	  if (off === 0)
	    return false;

	  while (off < buffer.length)
	    buffer[off++] = 0;

	  return true;
	};

	Cipher.prototype._finalEncrypt = function _finalEncrypt() {
	  if (!this._pad(this.buffer, this.bufferOff))
	    return [];

	  var out = new Array(this.blockSize);
	  this._update(this.buffer, 0, out, 0);
	  return out;
	};

	Cipher.prototype._unpad = function _unpad(buffer) {
	  return buffer;
	};

	Cipher.prototype._finalDecrypt = function _finalDecrypt() {
	  assert.equal(this.bufferOff, this.blockSize, 'Not enough data to decrypt');
	  var out = new Array(this.blockSize);
	  this._flushBuffer(out, 0);

	  return this._unpad(out);
	};


/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = assert;

	function assert(val, msg) {
	  if (!val)
	    throw new Error(msg || 'Assertion failed');
	}

	assert.equal = function assertEqual(l, r, msg) {
	  if (l != r)
	    throw new Error(msg || ('Assertion failed: ' + l + ' != ' + r));
	};


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(51);
	var inherits = __webpack_require__(32);

	var des = __webpack_require__(48);
	var utils = des.utils;
	var Cipher = des.Cipher;

	function DESState() {
	  this.tmp = new Array(2);
	  this.keys = null;
	}

	function DES(options) {
	  Cipher.call(this, options);

	  var state = new DESState();
	  this._desState = state;

	  this.deriveKeys(state, options.key);
	}
	inherits(DES, Cipher);
	module.exports = DES;

	DES.create = function create(options) {
	  return new DES(options);
	};

	var shiftTable = [
	  1, 1, 2, 2, 2, 2, 2, 2,
	  1, 2, 2, 2, 2, 2, 2, 1
	];

	DES.prototype.deriveKeys = function deriveKeys(state, key) {
	  state.keys = new Array(16 * 2);

	  assert.equal(key.length, this.blockSize, 'Invalid key length');

	  var kL = utils.readUInt32BE(key, 0);
	  var kR = utils.readUInt32BE(key, 4);

	  utils.pc1(kL, kR, state.tmp, 0);
	  kL = state.tmp[0];
	  kR = state.tmp[1];
	  for (var i = 0; i < state.keys.length; i += 2) {
	    var shift = shiftTable[i >>> 1];
	    kL = utils.r28shl(kL, shift);
	    kR = utils.r28shl(kR, shift);
	    utils.pc2(kL, kR, state.keys, i);
	  }
	};

	DES.prototype._update = function _update(inp, inOff, out, outOff) {
	  var state = this._desState;

	  var l = utils.readUInt32BE(inp, inOff);
	  var r = utils.readUInt32BE(inp, inOff + 4);

	  // Initial Permutation
	  utils.ip(l, r, state.tmp, 0);
	  l = state.tmp[0];
	  r = state.tmp[1];

	  if (this.type === 'encrypt')
	    this._encrypt(state, l, r, state.tmp, 0);
	  else
	    this._decrypt(state, l, r, state.tmp, 0);

	  l = state.tmp[0];
	  r = state.tmp[1];

	  utils.writeUInt32BE(out, l, outOff);
	  utils.writeUInt32BE(out, r, outOff + 4);
	};

	DES.prototype._pad = function _pad(buffer, off) {
	  var value = buffer.length - off;
	  for (var i = off; i < buffer.length; i++)
	    buffer[i] = value;

	  return true;
	};

	DES.prototype._unpad = function _unpad(buffer) {
	  var pad = buffer[buffer.length - 1];
	  for (var i = buffer.length - pad; i < buffer.length; i++)
	    assert.equal(buffer[i], pad);

	  return buffer.slice(0, buffer.length - pad);
	};

	DES.prototype._encrypt = function _encrypt(state, lStart, rStart, out, off) {
	  var l = lStart;
	  var r = rStart;

	  // Apply f() x16 times
	  for (var i = 0; i < state.keys.length; i += 2) {
	    var keyL = state.keys[i];
	    var keyR = state.keys[i + 1];

	    // f(r, k)
	    utils.expand(r, state.tmp, 0);

	    keyL ^= state.tmp[0];
	    keyR ^= state.tmp[1];
	    var s = utils.substitute(keyL, keyR);
	    var f = utils.permute(s);

	    var t = r;
	    r = (l ^ f) >>> 0;
	    l = t;
	  }

	  // Reverse Initial Permutation
	  utils.rip(r, l, out, off);
	};

	DES.prototype._decrypt = function _decrypt(state, lStart, rStart, out, off) {
	  var l = rStart;
	  var r = lStart;

	  // Apply f() x16 times
	  for (var i = state.keys.length - 2; i >= 0; i -= 2) {
	    var keyL = state.keys[i];
	    var keyR = state.keys[i + 1];

	    // f(r, k)
	    utils.expand(l, state.tmp, 0);

	    keyL ^= state.tmp[0];
	    keyR ^= state.tmp[1];
	    var s = utils.substitute(keyL, keyR);
	    var f = utils.permute(s);

	    var t = l;
	    l = (r ^ f) >>> 0;
	    r = t;
	  }

	  // Reverse Initial Permutation
	  utils.rip(l, r, out, off);
	};


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(51);
	var inherits = __webpack_require__(32);

	var proto = {};

	function CBCState(iv) {
	  assert.equal(iv.length, 8, 'Invalid IV length');

	  this.iv = new Array(8);
	  for (var i = 0; i < this.iv.length; i++)
	    this.iv[i] = iv[i];
	}

	function instantiate(Base) {
	  function CBC(options) {
	    Base.call(this, options);
	    this._cbcInit();
	  }
	  inherits(CBC, Base);

	  var keys = Object.keys(proto);
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    CBC.prototype[key] = proto[key];
	  }

	  CBC.create = function create(options) {
	    return new CBC(options);
	  };

	  return CBC;
	}

	exports.instantiate = instantiate;

	proto._cbcInit = function _cbcInit() {
	  var state = new CBCState(this.options.iv);
	  this._cbcState = state;
	};

	proto._update = function _update(inp, inOff, out, outOff) {
	  var state = this._cbcState;
	  var superProto = this.constructor.super_.prototype;

	  var iv = state.iv;
	  if (this.type === 'encrypt') {
	    for (var i = 0; i < this.blockSize; i++)
	      iv[i] ^= inp[inOff + i];

	    superProto._update.call(this, iv, 0, out, outOff);

	    for (var i = 0; i < this.blockSize; i++)
	      iv[i] = out[outOff + i];
	  } else {
	    superProto._update.call(this, inp, inOff, out, outOff);

	    for (var i = 0; i < this.blockSize; i++)
	      out[outOff + i] ^= iv[i];

	    for (var i = 0; i < this.blockSize; i++)
	      iv[i] = inp[inOff + i];
	  }
	};


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(51);
	var inherits = __webpack_require__(32);

	var des = __webpack_require__(48);
	var Cipher = des.Cipher;
	var DES = des.DES;

	function EDEState(type, key) {
	  assert.equal(key.length, 24, 'Invalid key length');

	  var k1 = key.slice(0, 8);
	  var k2 = key.slice(8, 16);
	  var k3 = key.slice(16, 24);

	  if (type === 'encrypt') {
	    this.ciphers = [
	      DES.create({ type: 'encrypt', key: k1 }),
	      DES.create({ type: 'decrypt', key: k2 }),
	      DES.create({ type: 'encrypt', key: k3 })
	    ];
	  } else {
	    this.ciphers = [
	      DES.create({ type: 'decrypt', key: k3 }),
	      DES.create({ type: 'encrypt', key: k2 }),
	      DES.create({ type: 'decrypt', key: k1 })
	    ];
	  }
	}

	function EDE(options) {
	  Cipher.call(this, options);

	  var state = new EDEState(this.type, this.options.key);
	  this._edeState = state;
	}
	inherits(EDE, Cipher);

	module.exports = EDE;

	EDE.create = function create(options) {
	  return new EDE(options);
	};

	EDE.prototype._update = function _update(inp, inOff, out, outOff) {
	  var state = this._edeState;

	  state.ciphers[0]._update(inp, inOff, out, outOff);
	  state.ciphers[1]._update(out, outOff, out, outOff);
	  state.ciphers[2]._update(out, outOff, out, outOff);
	};

	EDE.prototype._pad = DES.prototype._pad;
	EDE.prototype._unpad = DES.prototype._unpad;


/***/ },
/* 55 */
/***/ function(module, exports) {

	exports['des-ecb'] = {
	  key: 8,
	  iv: 0
	}
	exports['des-cbc'] = exports.des = {
	  key: 8,
	  iv: 8
	}
	exports['des-ede3-cbc'] = exports.des3 = {
	  key: 24,
	  iv: 8
	}
	exports['des-ede3'] = {
	  key: 24,
	  iv: 0
	}
	exports['des-ede-cbc'] = {
	  key: 16,
	  iv: 8
	}
	exports['des-ede'] = {
	  key: 16,
	  iv: 0
	}


/***/ }
/******/ ]);