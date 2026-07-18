var data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d = 
{
	"main": {
		"floorIds": [
			"Start"
		],
		"floorPartitions": [],
		"images": [
			"L.png",
			"S.png",
			"hero.png"
		],
		"tilesets": [],
		"animates": [
			"hand"
		],
		"bgms": [],
		"sounds": [
			
			"attack.mp3",
			"error.mp3",
			"load.mp3",
			"open_ui.mp3",
			"save.mp3"
		],
		"fonts": [],
		"nameMap": {
			"确定": "confirm.mp3",
			"取消": "cancel.mp3",
			"操作失败": "error.mp3",
			"光标移动": "cursor.mp3",
			"打开界面": "open_ui.mp3",
			"读档": "load.mp3",
			"存档": "save.mp3",
			"获得道具": "item.mp3",
			"回血": "recovery.mp3",
			"炸弹": "bomb.mp3",
			"飞行器": "centerFly.mp3",
			"开关门": "door.mp3",
			"上下楼": "floor.mp3",
			"跳跃": "jump.mp3",
			"破墙镐": "pickaxe.mp3",
			"破冰镐": "icePickaxe.mp3",
			"宝石": "gem.mp3",
			"阻激夹域": "zone.mp3",
			"穿脱装备": "equip.mp3",
			"背景音乐": "bgm.mp3",
			"攻击": "attack.mp3",
			"背景图": "bg.jpg",
			"商店": "shop.mp3",
			"领域": "zone"
		},
		"levelChoose": [
			{
				"title": "简单",
				"name": "Easy",
				"hard": 1,
				"color": [
					64,
					255,
					85,
					1
				],
				"action": [
					{
						"type": "comment",
						"text": "在这里写该难度需执行的事件"
					}
				]
			},
			{
				"title": "普通",
				"name": "Normal",
				"hard": 2,
				"color": [
					255,
					221,
					32,
					1
				],
				"action": []
			},
			{
				"title": "困难",
				"name": "Hard",
				"hard": 3,
				"color": [
					255,
					68,
					64,
					1
				],
				"action": []
			}
		],
		"equipName": [
			"装备",
			"装备",
			"装备",
			"装备",
			"装备",
			"装备"
		],
		"startBgm": null,
		"styles": {
			"startBackground": "project/images/bg.jpg",
			"startVerticalBackground": "project/images/bg.jpg",
			"startLogoStyle": "color: black",
			"startButtonsStyle": "background-color: #32369F; opacity: 0.85; color: #FFFFFF; border: #FFFFFF 2px solid; caret-color: #FFD700;",
			"statusLeftBackground": "url(project/materials/L.png) 0 0/100% 100% no-repeat",
			"statusTopBackground": "url(project/materials/S.png) repeat",
			"toolsBackground": "url(project/materials/X.png) repeat",
			"floorChangingStyle": "background-color: black; color: white",
			"statusBarColor": [
				255,
				255,
				255,
				1
			],
			"borderColor": [
				114,
				183,
				226,
				1
			],
			"selectColor": [
				255,
				215,
				0,
				1
			],
			"font": "Verdana"
		},
		"splitImages": null
	},
	"firstData": {
		"title": "真实割草之塔",
		"name": "rgcitower",
		"version": "Ver 2.8.2",
		"floorId": "Start",
		"hero": {
			"image": "hero.png",
			"animate": false,
			"name": "汐",
			"lv": 1,
			"hpmax": 9999,
			"hp": 1,
			"manamax": -1,
			"mana": 0,
			"atk": 1,
			"def": 0,
			"mdef": 0,
			"money": 0,
			"exp": 2,
			"equipment": [],
			"items": {
				"constants": {},
				"tools": {},
				"equips": {}
			},
			"loc": {
				"direction": "down",
				"x": 6,
				"y": 6
			},
			"flags": {},
			"followers": [],
			"steps": 0
		},
		"startCanvas": [
			{
				"type": "comment",
				"text": "也可以直接切换到其他楼层（比如某个开始剧情楼层）进行操作。"
			},
			{
				"type": "comment",
				"text": "在右下方自绘一个对话框进行显示选择项"
			},
			{
				"type": "comment",
				"text": "接下来会执行startText中的事件"
			},
			{
				"type": "comment",
				"text": "状态栏默认处于隐藏状态；可以使用“显示状态栏”事件进行显示。"
			}
		],
		"startText": [
			{
				"type": "comment",
				"text": "初始剧情"
			}
		],
		"shops": [
			{
				"id": "IS",
				"text": "\t[【∞】反物质潮汐]",
				"textInList": "【∞】反物质潮汐",
				"mustEnable": true,
				"disablePreview": true,
				"choices": [
					{
						"text": "2  ${0.1*flag:sh1}万",
						"need": "status:money>=1000*flag:sh1",
						"icon": "redGem",
						"condition": "1000*flag:sh1<=1e11",
						"action": [
							{
								"type": "setValue",
								"name": "item:redGem",
								"operator": "+=",
								"value": "2"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1000*flag:sh1/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh1",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "15  ${10*flag:sh2}万",
						"need": "status:money>=100000*flag:sh2",
						"icon": "redGem",
						"condition": "100000*flag:sh2<=1e11",
						"action": [
							{
								"type": "setValue",
								"name": "item:redGem",
								"operator": "+=",
								"value": "15"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "100000*flag:sh2/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh2",
								"operator": "*=",
								"value": "10"
							}
						]
					},
					{
						"text": "2  ${0.1*flag:sh3}万",
						"need": "status:money>=1000*flag:sh3",
						"icon": "blueGem",
						"condition": "1000*flag:sh3<=1e11",
						"action": [
							{
								"type": "setValue",
								"name": "item:blueGem",
								"operator": "+=",
								"value": "2"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1000*flag:sh3/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh3",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "15  ${10*flag:sh4}万",
						"need": "status:money>=100000*flag:sh4",
						"icon": "blueGem",
						"condition": "100000*flag:sh4<=1e11",
						"action": [
							{
								"type": "setValue",
								"name": "item:blueGem",
								"operator": "+=",
								"value": "15"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "100000*flag:sh4/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh4",
								"operator": "*=",
								"value": "10"
							}
						]
					},
					{
						"text": "2  ${0.15*flag:sh5}万",
						"need": "status:money>=1500*flag:sh5",
						"icon": "greenPotion",
						"condition": "1500*flag:sh5<=1e11",
						"action": [
							{
								"type": "setValue",
								"name": "item:greenPotion",
								"operator": "+=",
								"value": "2"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1500*flag:sh5/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh5",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "15  ${15*flag:sh6}万",
						"need": "status:money>=150000*flag:sh6",
						"icon": "greenPotion",
						"condition": "150000*flag:sh6<=1e11",
						"action": [
							{
								"type": "setValue",
								"name": "item:greenPotion",
								"operator": "+=",
								"value": "15"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "150000*flag:sh6/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh6",
								"operator": "*=",
								"value": "10"
							}
						]
					},
					{
						"text": "宝石效力增加10%  ${0.5*flag:sh7}万",
						"need": "status:money>=5000*flag:sh7",
						"icon": "I597",
						"condition": "5000*flag:sh7<=1e11",
						"action": [
							{
								"type": "setValue",
								"name": "item:I605",
								"operator": "+=",
								"value": "0.1"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "5000*flag:sh7/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh7",
								"operator": "*=",
								"value": "5"
							}
						]
					},
					{
						"text": "血瓶效力增加10%  ${0.5*flag:sh8}万",
						"need": "status:money>=5000*flag:sh8",
						"icon": "I840",
						"condition": "5000*flag:sh8<=1e11",
						"action": [
							{
								"type": "setValue",
								"name": "item:I607",
								"operator": "+=",
								"value": "0.1"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "5000*flag:sh8/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh8",
								"operator": "*=",
								"value": "5"
							}
						]
					},
					{
						"text": "永久升级商店  1000亿",
						"need": "status:money>=1e11",
						"icon": "I598",
						"action": [
							{
								"type": "comment",
								"text": "新商店开启"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1e11/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh1",
								"value": "1024"
							},
							{
								"type": "setValue",
								"name": "flag:sh2",
								"value": "1000"
							},
							{
								"type": "setValue",
								"name": "flag:sh3",
								"value": "1024"
							},
							{
								"type": "setValue",
								"name": "flag:sh4",
								"value": "1000"
							},
							{
								"type": "setValue",
								"name": "flag:sh5",
								"value": "1024"
							},
							{
								"type": "setValue",
								"name": "flag:sh6",
								"value": "1000"
							},
							{
								"type": "setValue",
								"name": "flag:sh7",
								"value": "125000"
							},
							{
								"type": "setValue",
								"name": "flag:sh8",
								"value": "8000"
							},
							{
								"type": "setValue",
								"name": "flag:sh9",
								"value": "8000"
							},
							{
								"type": "setValue",
								"name": "flag:sh10",
								"value": "125000"
							},
							{
								"type": "setValue",
								"name": "flag:sh11",
								"value": "125000"
							},
							"商店已升级！旧商店已关闭。\n注意：首次开启新的商店，\n倍增低于五倍的项，默认按照已购买10次的价格来计算。\n其余项默认按照已购买3次的价格来计算。",
							{
								"type": "openShop",
								"id": "IS1",
								"open": true
							},
							{
								"type": "disableShop",
								"id": "IS"
							}
						]
					}
				]
			},
			{
				"id": "IS1",
				"text": "\t[【∞】反物质潮汐]",
				"textInList": "【∞】反物质潮汐",
				"mustEnable": true,
				"disablePreview": true,
				"choices": [
					{
						"text": "1  ${parseFloat(1e6*flag:sh1).toExponential(2)}",
						"need": "status:money>=1e6*flag:sh1",
						"icon": "I576",
						"condition": "1e6*flag:sh1<=1e33",
						"action": [
							{
								"type": "setValue",
								"name": "item:I576",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1e6*flag:sh1/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh1",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "5  ${parseFloat(1e8*flag:sh2).toExponential(2)}",
						"need": "status:money>=1e8*flag:sh2",
						"icon": "I576",
						"condition": "1e8*flag:sh2<=1e33",
						"action": [
							{
								"type": "setValue",
								"name": "item:I576",
								"operator": "+=",
								"value": "5"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1e8*flag:sh2/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh2",
								"operator": "*=",
								"value": "10"
							}
						]
					},
					{
						"text": "1  ${parseFloat(1e6*flag:sh3).toExponential(2)}",
						"need": "status:money>=1e6*flag:sh3",
						"icon": "I577",
						"condition": "1e6*flag:sh3<=1e33",
						"action": [
							{
								"type": "setValue",
								"name": "item:I577",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1e6*flag:sh3/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh3",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "5  ${parseFloat(1e8*flag:sh4).toExponential(2)}",
						"need": "status:money>=1e8*flag:sh4",
						"icon": "I577",
						"condition": "1e8*flag:sh4<=1e33",
						"action": [
							{
								"type": "setValue",
								"name": "item:I577",
								"operator": "+=",
								"value": "5"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1e8*flag:sh4/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh4",
								"operator": "*=",
								"value": "10"
							}
						]
					},
					{
						"text": "1  ${parseFloat(1.5e6*flag:sh5).toExponential(2)}",
						"need": "status:money>=1.5e6*flag:sh5",
						"icon": "weakWine",
						"condition": "1.5e6*flag:sh5<=1e33",
						"action": [
							{
								"type": "setValue",
								"name": "item:weakWine",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1.5e6*flag:sh5/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh5",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "5  ${parseFloat(1.5e8*flag:sh6).toExponential(2)}",
						"need": "status:money>=1.5e8*flag:sh6",
						"icon": "weakWine",
						"condition": "1.5e8*flag:sh6<=1e33",
						"action": [
							{
								"type": "setValue",
								"name": "item:weakWine",
								"operator": "+=",
								"value": "5"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1.5e8*flag:sh6/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh6",
								"operator": "*=",
								"value": "10"
							}
						]
					},
					{
						"text": "生命翻三倍  ${parseFloat(270000000*flag:sh7).toExponential(2)}",
						"need": "status:money>=270000000*flag:sh7",
						"icon": "superPotion",
						"condition": "270000000*flag:sh7<=1e33",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "*=",
								"value": "3"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "270000000*flag:sh7/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh7",
								"operator": "*=",
								"value": "50"
							}
						]
					},
					{
						"text": "攻击*1.2  ${parseFloat(30000000*flag:sh8).toExponential(2)}",
						"need": "status:money>=30000000*flag:sh8",
						"icon": "I772",
						"condition": "30000000*flag:sh8<=1e33",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "*=",
								"value": "1.2"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "30000000*flag:sh8/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh8",
								"operator": "*=",
								"value": "20"
							}
						]
					},
					{
						"text": "防御*1.2  ${parseFloat(30000000*flag:sh9).toExponential(2)}",
						"need": "status:money>=30000000*flag:sh9",
						"icon": "I773",
						"condition": "30000000*flag:sh9<=1e33",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "*=",
								"value": "1.2"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "30000000*flag:sh9/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh9",
								"operator": "*=",
								"value": "20"
							}
						]
					},
					{
						"text": "本局反物质倍增+5%  ${parseFloat(100000000*flag:sh10).toExponential(2)}",
						"need": "status:money>=100000000*flag:sh10",
						"icon": "I832",
						"condition": "100000000*flag:sh10<=1e33",
						"action": [
							{
								"type": "setValue",
								"name": "flag:fwz",
								"operator": "+=",
								"value": "0.05"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "100000000*flag:sh10/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh10",
								"operator": "*=",
								"value": "50"
							}
						]
					},
					{
						"text": "获得维度提升数量的高阶黄宝石  ${parseFloat(500000000*flag:sh11).toExponential(2)}",
						"need": "status:money>=500000000*flag:sh11",
						"icon": "I579",
						"condition": "500000000*flag:sh11<=1e33",
						"action": [
							{
								"type": "setValue",
								"name": "item:I579",
								"operator": "+=",
								"value": "item:I729"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "500000000*flag:sh11/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh11",
								"operator": "*=",
								"value": "100"
							}
						]
					},
					{
						"text": "永久升级商店  9.22e+33",
						"need": "status:money>=9.22e33",
						"icon": "I598",
						"action": [
							{
								"type": "comment",
								"text": "新商店开启"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "9.22e33/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:sh1",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:sh2",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:sh3",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:sh4",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:sh5",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:sh6",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:sh7",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:sh8",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:sh9",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:sh10",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:sh11",
								"value": "1"
							},
							{
								"type": "disableShop",
								"id": "IS1"
							},
							{
								"type": "openShop",
								"id": "IS2",
								"open": true
							}
						]
					}
				]
			},
			{
				"id": "S",
				"text": "\t[反物质潮汐]",
				"textInList": "反物质潮汐",
				"mustEnable": true,
				"disablePreview": true,
				"choices": [
					{
						"text": "1  ${10*flag:sh1}",
						"need": "status:money>=10*flag:sh1",
						"icon": "redGem",
						"condition": "10*flag:sh1<=1e9",
						"action": [
							{
								"type": "setValue",
								"name": "item:redGem",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "10*flag:sh1"
							},
							{
								"type": "setValue",
								"name": "flag:sh1",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "10  ${1000*flag:sh2}",
						"need": "status:money>=1000*flag:sh2",
						"icon": "redGem",
						"condition": "1000*flag:sh2<=1e9",
						"action": [
							{
								"type": "setValue",
								"name": "item:redGem",
								"operator": "+=",
								"value": "10"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1000*flag:sh2"
							},
							{
								"type": "setValue",
								"name": "flag:sh2",
								"operator": "*=",
								"value": "10"
							}
						]
					},
					{
						"text": "1  ${10*flag:sh3}",
						"need": "status:money>=10*flag:sh3",
						"icon": "blueGem",
						"condition": "10*flag:sh3<=1e9",
						"action": [
							{
								"type": "setValue",
								"name": "item:blueGem",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "10*flag:sh3"
							},
							{
								"type": "setValue",
								"name": "flag:sh3",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "10  ${1000*flag:sh4}",
						"need": "status:money>=1000*flag:sh4",
						"icon": "blueGem",
						"condition": "1000*flag:sh4<=1e9",
						"action": [
							{
								"type": "setValue",
								"name": "item:blueGem",
								"operator": "+=",
								"value": "10"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1000*flag:sh4"
							},
							{
								"type": "setValue",
								"name": "flag:sh4",
								"operator": "*=",
								"value": "10"
							}
						]
					},
					{
						"text": "1  ${15*flag:sh5}",
						"need": "status:money>=15*flag:sh5",
						"icon": "greenPotion",
						"condition": "15*flag:sh5<=1e9",
						"action": [
							{
								"type": "setValue",
								"name": "item:greenPotion",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "15*flag:sh5"
							},
							{
								"type": "setValue",
								"name": "flag:sh5",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "10  ${1500*flag:sh6}",
						"need": "status:money>=1500*flag:sh6",
						"icon": "greenPotion",
						"condition": "1500*flag:sh6<=1e9",
						"action": [
							{
								"type": "setValue",
								"name": "item:greenPotion",
								"operator": "+=",
								"value": "10"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1500*flag:sh6"
							},
							{
								"type": "setValue",
								"name": "flag:sh6",
								"operator": "*=",
								"value": "10"
							}
						]
					},
					{
						"text": "宝石效力增加10%  ${500*flag:sh7}",
						"need": "status:money>=500*flag:sh7",
						"icon": "I597",
						"condition": "500*flag:sh7<=1e9",
						"action": [
							{
								"type": "setValue",
								"name": "item:I605",
								"operator": "+=",
								"value": "0.1"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "500*flag:sh7"
							},
							{
								"type": "setValue",
								"name": "flag:sh7",
								"operator": "*=",
								"value": "5"
							}
						]
					},
					{
						"text": "血瓶效力增加10%  ${500*flag:sh8}",
						"need": "status:money>=500*flag:sh8",
						"icon": "I840",
						"condition": "500*flag:sh8<=1e9",
						"action": [
							{
								"type": "setValue",
								"name": "item:I607",
								"operator": "+=",
								"value": "0.1"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "500*flag:sh8"
							},
							{
								"type": "setValue",
								"name": "flag:sh8",
								"operator": "*=",
								"value": "5"
							}
						]
					},
					{
						"text": "永久升级商店  10亿",
						"need": "status:money>=1000000000",
						"icon": "I598",
						"action": [
							{
								"type": "comment",
								"text": "新商店开启"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1000000000"
							},
							{
								"type": "setValue",
								"name": "flag:sh1",
								"value": "1024"
							},
							{
								"type": "setValue",
								"name": "flag:sh2",
								"value": "1000"
							},
							{
								"type": "setValue",
								"name": "flag:sh3",
								"value": "1024"
							},
							{
								"type": "setValue",
								"name": "flag:sh4",
								"value": "1000"
							},
							{
								"type": "setValue",
								"name": "flag:sh5",
								"value": "1024"
							},
							{
								"type": "setValue",
								"name": "flag:sh6",
								"value": "1000"
							},
							{
								"type": "setValue",
								"name": "flag:sh7",
								"value": "125000"
							},
							{
								"type": "setValue",
								"name": "flag:sh8",
								"value": "8000"
							},
							{
								"type": "setValue",
								"name": "flag:sh9",
								"value": "8000"
							},
							{
								"type": "setValue",
								"name": "flag:sh10",
								"value": "125000"
							},
							{
								"type": "setValue",
								"name": "flag:sh11",
								"value": "125000"
							},
							"商店已升级！旧商店已关闭。\n注意：首次开启新的商店，\n倍增低于五倍的项，默认按照已购买10次的价格来计算。\n其余项默认按照已购买3次的价格来计算。",
							{
								"type": "openShop",
								"id": "S1",
								"open": true
							},
							{
								"type": "disableShop",
								"id": "S"
							}
						]
					}
				]
			},
			{
				"id": "S1",
				"text": "\t[反物质潮汐]",
				"textInList": "反物质潮汐",
				"mustEnable": true,
				"disablePreview": true,
				"choices": [
					{
						"text": "2  ${1*flag:sh1}万",
						"need": "status:money>=10000*flag:sh1",
						"icon": "redGem",
						"condition": "10000*flag:sh1<=9223372036854775806",
						"action": [
							{
								"type": "setValue",
								"name": "item:redGem",
								"operator": "+=",
								"value": "2"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "10000*flag:sh1"
							},
							{
								"type": "setValue",
								"name": "flag:sh1",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "15  ${100*flag:sh2}万",
						"need": "status:money>=1000000*flag:sh2",
						"icon": "redGem",
						"condition": "1000000*flag:sh2<=9223372036854775806",
						"action": [
							{
								"type": "setValue",
								"name": "item:redGem",
								"operator": "+=",
								"value": "15"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1000000*flag:sh2"
							},
							{
								"type": "setValue",
								"name": "flag:sh2",
								"operator": "*=",
								"value": "10"
							}
						]
					},
					{
						"text": "2  ${1*flag:sh3}万",
						"need": "status:money>=10000*flag:sh3",
						"icon": "blueGem",
						"condition": "10000*flag:sh3<=9223372036854775806",
						"action": [
							{
								"type": "setValue",
								"name": "item:blueGem",
								"operator": "+=",
								"value": "2"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "10000*flag:sh3"
							},
							{
								"type": "setValue",
								"name": "flag:sh3",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "15  ${100*flag:sh4}万",
						"need": "status:money>=1000000*flag:sh4",
						"icon": "blueGem",
						"condition": "1000000*flag:sh4<=9223372036854775806",
						"action": [
							{
								"type": "setValue",
								"name": "item:blueGem",
								"operator": "+=",
								"value": "15"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1000000*flag:sh4"
							},
							{
								"type": "setValue",
								"name": "flag:sh4",
								"operator": "*=",
								"value": "10"
							}
						]
					},
					{
						"text": "2  ${1.5*flag:sh5}万",
						"need": "status:money>=15000*flag:sh5",
						"icon": "greenPotion",
						"condition": "15000*flag:sh5<=9223372036854775806",
						"action": [
							{
								"type": "setValue",
								"name": "item:greenPotion",
								"operator": "+=",
								"value": "2"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "15000*flag:sh5"
							},
							{
								"type": "setValue",
								"name": "flag:sh5",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "15  ${150*flag:sh6}万",
						"need": "status:money>=1500000*flag:sh6",
						"icon": "greenPotion",
						"condition": "1500000*flag:sh6<=9223372036854775806",
						"action": [
							{
								"type": "setValue",
								"name": "item:greenPotion",
								"operator": "+=",
								"value": "15"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1500000*flag:sh6"
							},
							{
								"type": "setValue",
								"name": "flag:sh6",
								"operator": "*=",
								"value": "10"
							}
						]
					},
					{
						"text": "生命翻倍  ${2.7*flag:sh7}亿",
						"need": "status:money>=270000000*flag:sh7",
						"icon": "superPotion",
						"condition": "270000000*flag:sh7<=9223372036854775806",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "*=",
								"value": "2"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "270000000*flag:sh7"
							},
							{
								"type": "setValue",
								"name": "flag:sh7",
								"operator": "*=",
								"value": "50"
							}
						]
					},
					{
						"text": "攻击*1.2  ${0.3*flag:sh8}亿",
						"need": "status:money>=30000000*flag:sh8",
						"icon": "I772",
						"condition": "30000000*flag:sh8<=9223372036854775806",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "*=",
								"value": "1.2"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "30000000*flag:sh8"
							},
							{
								"type": "setValue",
								"name": "flag:sh8",
								"operator": "*=",
								"value": "20"
							}
						]
					},
					{
						"text": "防御*1.2  ${0.3*flag:sh9}亿",
						"need": "status:money>=30000000*flag:sh9",
						"icon": "I773",
						"condition": "30000000*flag:sh9<=9223372036854775806",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "*=",
								"value": "1.2"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "30000000*flag:sh9"
							},
							{
								"type": "setValue",
								"name": "flag:sh9",
								"operator": "*=",
								"value": "20"
							}
						]
					},
					{
						"text": "本局反物质倍增+5%  ${1*flag:sh10}亿",
						"need": "status:money>=100000000*flag:sh10",
						"icon": "I832",
						"condition": "100000000*flag:sh10<=2e17",
						"action": [
							{
								"type": "setValue",
								"name": "flag:fwz",
								"operator": "+=",
								"value": "0.05"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "100000000*flag:sh10"
							},
							{
								"type": "setValue",
								"name": "flag:sh10",
								"operator": "*=",
								"value": "50"
							}
						]
					},
					{
						"text": "获得维度提升数量的黄宝石  ${2*flag:sh11}亿",
						"need": "status:money>=200000000*flag:sh11",
						"icon": "yellowGem",
						"condition": "200000000*flag:sh11<=2e17",
						"action": [
							{
								"type": "setValue",
								"name": "item:yellowGem",
								"operator": "+=",
								"value": "item:I729"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "200000000*flag:sh11"
							},
							{
								"type": "setValue",
								"name": "flag:sh11",
								"operator": "*=",
								"value": "50"
							}
						]
					},
					{
						"text": "永久升级商店  无限",
						"need": "status:money>=1e99",
						"icon": "I598",
						"action": [
							{
								"type": "comment",
								"text": "新商店开启"
							},
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "1e99"
							},
							{
								"type": "setValue",
								"name": "flag:sh1",
								"value": "0"
							},
							{
								"type": "setValue",
								"name": "flag:sh2",
								"value": "0"
							},
							{
								"type": "setValue",
								"name": "flag:sh3",
								"value": "0"
							},
							{
								"type": "setValue",
								"name": "flag:sh4",
								"value": "0"
							},
							{
								"type": "setValue",
								"name": "flag:sh5",
								"value": "0"
							},
							{
								"type": "setValue",
								"name": "flag:sh6",
								"value": "0"
							},
							{
								"type": "setValue",
								"name": "flag:sh7",
								"value": "0"
							},
							{
								"type": "setValue",
								"name": "flag:sh8",
								"value": "0"
							},
							{
								"type": "disableShop",
								"id": "S1"
							},
							"……居然能开这个商店吗？",
							{
								"type": "win",
								"reason": "1e99的奇迹"
							},
							{
								"type": "openShop",
								"id": "S3",
								"open": true
							}
						]
					}
				]
			},
			{
				"id": "Z",
				"text": "\t[零,N761]这里可能有一些你需要的东西……\n但需要用你的正物质来做交换。",
				"textInList": "正物质潮汐",
				"mustEnable": true,
				"disablePreview": true,
				"choices": [
					{
						"text": "初始生命+100  ${25*flag:zh1}",
						"need": "status:exp>=25*flag:zh1",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "100"
							},
							{
								"type": "setValue",
								"name": "flag:hp",
								"operator": "+=",
								"value": "100"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "25*flag:zh1"
							},
							{
								"type": "setValue",
								"name": "flag:zh1",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "初始护盾+20  ${40*flag:zh2}",
						"need": "status:exp>=40*flag:zh2",
						"action": [
							{
								"type": "setValue",
								"name": "status:mdef",
								"operator": "+=",
								"value": "20"
							},
							{
								"type": "setValue",
								"name": "flag:mdef",
								"operator": "+=",
								"value": "20"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "40*flag:zh2"
							},
							{
								"type": "setValue",
								"name": "flag:zh2",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "初始攻击+1  ${100*flag:zh3}",
						"need": "status:exp>=100*flag:zh3",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:atk",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "100*flag:zh3"
							},
							{
								"type": "setValue",
								"name": "flag:zh3",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "初始防御+1  ${100*flag:zh4}",
						"need": "status:exp>=100*flag:zh4",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:def",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "100*flag:zh4"
							},
							{
								"type": "setValue",
								"name": "flag:zh4",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "初始反物质+10（12800价格后升级）  ${200*flag:zh5}",
						"need": "status:exp>=200*flag:zh5",
						"condition": "200*flag:zh5<=6400",
						"action": [
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "+=",
								"value": "10"
							},
							{
								"type": "setValue",
								"name": "flag:anti",
								"operator": "+=",
								"value": "10"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "200*flag:zh5"
							},
							{
								"type": "setValue",
								"name": "flag:zh5",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "初始反物质+1000  ${200*flag:zh5}",
						"need": "status:exp>=200*flag:zh5",
						"condition": "200*flag:zh5>=11520",
						"action": [
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "+=",
								"value": "1000"
							},
							{
								"type": "setValue",
								"name": "flag:anti",
								"operator": "+=",
								"value": "1000"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "200*flag:zh5"
							},
							{
								"type": "setValue",
								"name": "flag:zh5",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "击败怪物获得反物质的速率+1倍  ${parseFloat(400*flag:zh6).toFixed(0)}",
						"need": "status:exp>=400*flag:zh6",
						"condition": "400*flag:zh6<=30000000",
						"action": [
							{
								"type": "setValue",
								"name": "item:coin",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "400*flag:zh6"
							},
							{
								"type": "setValue",
								"name": "flag:zh6",
								"operator": "*=",
								"value": "3"
							}
						]
					},
					{
						"text": "维度提升时，反物质倍增永久+5%  ${1000*flag:zh7}",
						"need": "status:exp>=1000*flag:zh7",
						"condition": "1000*flag:zh7<=30000000",
						"action": [
							{
								"type": "setValue",
								"name": "flag:fwz2",
								"operator": "+=",
								"value": "0.05"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "1000*flag:zh7"
							},
							{
								"type": "setValue",
								"name": "flag:zh7",
								"operator": "*=",
								"value": "10"
							}
						]
					},
					{
						"text": "将你的正物质翻倍，再扣除需求  ${10000*flag:zh8}",
						"need": "status:exp>=10000*flag:zh8",
						"condition": "10000*flag:zh8<=30000000",
						"action": [
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "*=",
								"value": "2"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "10000*flag:zh8"
							},
							{
								"type": "setValue",
								"name": "flag:zh8",
								"operator": "*=",
								"value": "50"
							}
						]
					},
					{
						"text": "永久升级商店  3000万",
						"need": "status:exp>=30000000",
						"action": [
							{
								"type": "comment",
								"text": "新商店开启"
							},
							"商店已升级！\n继续与【零】对话以解锁新的商店。",
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "30000000"
							},
							{
								"type": "setValue",
								"name": "flag:zwz",
								"value": "1"
							},
							{
								"type": "exit"
							}
						]
					}
				]
			},
			{
				"id": "IZ",
				"text": "\t[零,N761]这里可能有一些你需要的东西……\n但需要用你的正物质来做交换。",
				"textInList": "【∞】正物质潮汐",
				"mustEnable": true,
				"disablePreview": true,
				"choices": [
					{
						"text": "初始生命+100  ${25*flag:zh1}",
						"need": "status:exp>=25*flag:zh1",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "100"
							},
							{
								"type": "setValue",
								"name": "flag:hp",
								"operator": "+=",
								"value": "100"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "25*flag:zh1/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh1",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "初始护盾+20  ${40*flag:zh2}",
						"need": "status:exp>=40*flag:zh2",
						"action": [
							{
								"type": "setValue",
								"name": "status:mdef",
								"operator": "+=",
								"value": "20"
							},
							{
								"type": "setValue",
								"name": "flag:mdef",
								"operator": "+=",
								"value": "20"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "40*flag:zh2/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh2",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "初始攻击+1  ${100*flag:zh3}",
						"need": "status:exp>=100*flag:zh3",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:atk",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "100*flag:zh3/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh3",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "初始防御+1  ${100*flag:zh4}",
						"need": "status:exp>=100*flag:zh4",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:def",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "100*flag:zh4/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh4",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "初始反物质+100（12800价格后升级）  ${200*flag:zh5}",
						"need": "status:exp>=200*flag:zh5",
						"condition": "200*flag:zh5<=6400",
						"action": [
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "+=",
								"value": "100"
							},
							{
								"type": "setValue",
								"name": "flag:anti",
								"operator": "+=",
								"value": "100"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "200*flag:zh5/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh5",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "初始反物质+1万  ${200*flag:zh5}",
						"need": "status:exp>=200*flag:zh5",
						"condition": "200*flag:zh5>=11520",
						"action": [
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "+=",
								"value": "10000"
							},
							{
								"type": "setValue",
								"name": "flag:anti",
								"operator": "+=",
								"value": "10000"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "200*flag:zh5/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh5",
								"operator": "*=",
								"value": "2"
							}
						]
					},
					{
						"text": "击败怪物获得反物质的速率+1倍  ${parseFloat(400*flag:zh6).toFixed(0)}",
						"need": "status:exp>=400*flag:zh6",
						"condition": "400*flag:zh6<=30000000",
						"action": [
							{
								"type": "setValue",
								"name": "item:coin",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "400*flag:zh6/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh6",
								"operator": "*=",
								"value": "3"
							}
						]
					},
					{
						"text": "维度提升时，反物质倍增永久+5%  ${1000*flag:zh7}",
						"need": "status:exp>=1000*flag:zh7",
						"condition": "1000*flag:zh7<=30000000",
						"action": [
							{
								"type": "setValue",
								"name": "flag:fwz2",
								"operator": "+=",
								"value": "0.05"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "1000*flag:zh7/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh7",
								"operator": "*=",
								"value": "10"
							}
						]
					},
					{
						"text": "将你的正物质翻倍，再扣除需求  ${10000*flag:zh8}",
						"need": "status:exp>=10000*flag:zh8",
						"condition": "10000*flag:zh8<=30000000",
						"action": [
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "*=",
								"value": "2"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "10000*flag:zh8/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh8",
								"operator": "*=",
								"value": "50"
							}
						]
					},
					{
						"text": "永久升级商店  7.2亿",
						"need": "status:exp>=7.2e8",
						"action": [
							{
								"type": "comment",
								"text": "新商店开启"
							},
							"商店已升级！\n继续与【零】对话以解锁新的商店。",
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "720000000/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zwz",
								"value": "1"
							},
							{
								"type": "exit"
							}
						]
					},
					{
						"text": "获得一个临时的反物质星系（一次性）  3兆",
						"need": "status:exp>=1e12",
						"condition": "flag:inft>=5&&flag:zhex2==0",
						"action": [
							{
								"type": "setValue",
								"name": "item:I848",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "3e12/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zhex2",
								"value": "1"
							}
						]
					}
				]
			},
			{
				"id": "Z1",
				"text": "\t[零,N761]我似乎看到了一扇门。在那扇大门之后——那是通向『无限』的道路。",
				"textInList": "正物质潮汐",
				"mustEnable": true,
				"disablePreview": true,
				"choices": [
					{
						"text": "初始生命+1万、护盾+500  ${parseFloat(100*flag:zh1).toFixed(0)}万",
						"need": "status:exp>=1000000*flag:zh1",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "10000"
							},
							{
								"type": "setValue",
								"name": "flag:hp",
								"operator": "+=",
								"value": "10000"
							},
							{
								"type": "setValue",
								"name": "status:mdef",
								"operator": "+=",
								"value": "500"
							},
							{
								"type": "setValue",
								"name": "flag:mdef",
								"operator": "+=",
								"value": "500"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "1000000*flag:zh1"
							},
							{
								"type": "setValue",
								"name": "flag:zh1",
								"operator": "*=",
								"value": "5"
							}
						]
					},
					{
						"text": "初始攻防+10  ${parseFloat(200*flag:zh2).toFixed(0)}万",
						"need": "status:exp>=2000000*flag:zh2",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "10"
							},
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "10"
							},
							{
								"type": "setValue",
								"name": "flag:atk",
								"operator": "+=",
								"value": "10"
							},
							{
								"type": "setValue",
								"name": "flag:def",
								"operator": "+=",
								"value": "10"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "2000000*flag:zh2"
							},
							{
								"type": "setValue",
								"name": "flag:zh2",
								"operator": "*=",
								"value": "5"
							}
						]
					},
					{
						"text": "初始反物质+${parseFloat(500*flag:zh3).toFixed(0)}（变化）${parseFloat(1000*flag:zh3).toFixed(0)}万",
						"need": "status:exp>=10000000*flag:zh3",
						"condition": "10000000*flag:zh3<=5e12",
						"action": [
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "+=",
								"value": "500*flag:zh3"
							},
							{
								"type": "setValue",
								"name": "flag:anti",
								"operator": "+=",
								"value": "500*flag:zh3"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "10000000*flag:zh3"
							},
							{
								"type": "setValue",
								"name": "flag:zh3",
								"operator": "*=",
								"value": "20"
							}
						]
					},
					{
						"text": "永久宝石血瓶效力+10%  ${parseFloat(3*flag:zh4).toFixed(0)}亿",
						"need": "status:exp>=300000000*flag:zh4",
						"condition": "300000000*flag:zh4<=1e16",
						"action": [
							{
								"type": "setValue",
								"name": "item:I606",
								"operator": "+=",
								"value": "0.1"
							},
							{
								"type": "setValue",
								"name": "item:I608",
								"operator": "+=",
								"value": "0.1"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "300000000*flag:zh4"
							},
							{
								"type": "setValue",
								"name": "flag:zh4",
								"operator": "*=",
								"value": "30"
							}
						]
					},
					{
						"text": "除该项之外的价格降低为90%  ${parseFloat(8000*flag:zh5).toFixed(0)}万",
						"need": "status:exp>=80000000*flag:zh5",
						"condition": "80000000*flag:zh5<=5e12",
						"action": [
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "80000000*flag:zh5"
							},
							{
								"type": "setValue",
								"name": "flag:zh5",
								"operator": "*=",
								"value": "50"
							},
							{
								"type": "setValue",
								"name": "flag:zh1",
								"operator": "*=",
								"value": "0.9"
							},
							{
								"type": "setValue",
								"name": "flag:zh2",
								"operator": "*=",
								"value": "0.9"
							},
							{
								"type": "setValue",
								"name": "flag:zh3",
								"operator": "*=",
								"value": "0.9"
							},
							{
								"type": "setValue",
								"name": "flag:zh4",
								"operator": "*=",
								"value": "0.9"
							},
							{
								"type": "setValue",
								"name": "flag:zh6",
								"operator": "*=",
								"value": "0.9"
							},
							{
								"type": "setValue",
								"name": "flag:zh7",
								"operator": "*=",
								"value": "0.9"
							},
							{
								"type": "setValue",
								"name": "flag:zh8",
								"operator": "*=",
								"value": "0.9"
							}
						]
					},
					{
						"text": "角色受到的伤害在基础上-8%  ${parseFloat(10*flag:zh7).toFixed(0)}亿",
						"need": "status:exp>=1000000000*flag:zh7",
						"condition": "1000000000*flag:zh7<=9223372036854775806",
						"action": [
							{
								"type": "setValue",
								"name": "item:I730",
								"operator": "+=",
								"value": "0.08"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "1000000000*flag:zh7"
							},
							{
								"type": "setValue",
								"name": "flag:zh7",
								"operator": "*=",
								"value": "200"
							}
						]
					},
					{
						"text": "将你的正物质翻倍，再扣除需求  ${parseFloat(50*flag:zh6).toFixed(0)}亿",
						"need": "status:exp>=5e9*flag:zh6",
						"condition": "5e9*flag:zh6<=1e16",
						"action": [
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "*=",
								"value": "2"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "5e9*flag:zh6"
							},
							{
								"type": "setValue",
								"name": "flag:zh6",
								"operator": "*=",
								"value": "200"
							}
						]
					},
					{
						"text": "杀怪反物质*世界号^(1+购买数)  ${parseFloat(400*flag:zh8).toFixed(0)}亿",
						"need": "status:exp>=40000000000*flag:zh8",
						"condition": "40000000000*flag:zh8<=9223372036854775806",
						"action": [
							{
								"type": "setValue",
								"name": "item:I734",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "40000000000*flag:zh8"
							},
							{
								"type": "setValue",
								"name": "flag:zh8",
								"operator": "*=",
								"value": "10000"
							}
						]
					},
					{
						"text": "永久升级商店  无限",
						"need": "status:exp>=1e99",
						"action": [
							{
								"type": "comment",
								"text": "新商店开启"
							},
							"诶……？\n怎么做到的呀？",
							{
								"type": "win",
								"reason": "1e99的奇迹"
							},
							{
								"type": "exit"
							}
						]
					}
				]
			},
			{
				"id": "IZ2",
				"text": "\t[零,N761]我似乎看到了一扇门。在那扇大门之后——那是通向『无限』的道路。",
				"textInList": "【∞】正物质潮汐",
				"mustEnable": true,
				"disablePreview": true,
				"choices": [
					{
						"text": "初始生命+1万、护盾+500  ${parseFloat(1000000*flag:zh1).toExponential(2)}",
						"need": "status:exp>=1000000*flag:zh1",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "10000"
							},
							{
								"type": "setValue",
								"name": "flag:hp",
								"operator": "+=",
								"value": "10000"
							},
							{
								"type": "setValue",
								"name": "status:mdef",
								"operator": "+=",
								"value": "500"
							},
							{
								"type": "setValue",
								"name": "flag:mdef",
								"operator": "+=",
								"value": "500"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "1000000*flag:zh1/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh1",
								"operator": "*=",
								"value": "5"
							}
						]
					},
					{
						"text": "初始攻防+10  ${parseFloat(2000000*flag:zh2).toExponential(2)}",
						"need": "status:exp>=2000000*flag:zh2",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "10"
							},
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "10"
							},
							{
								"type": "setValue",
								"name": "flag:atk",
								"operator": "+=",
								"value": "10"
							},
							{
								"type": "setValue",
								"name": "flag:def",
								"operator": "+=",
								"value": "10"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "2000000*flag:zh2/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh2",
								"operator": "*=",
								"value": "5"
							}
						]
					},
					{
						"text": "初始反物质+${parseFloat(3000*flag:zh3).toExponential(2)}（变化）${parseFloat(10000000*flag:zh3).toExponential(2)}",
						"need": "status:exp>=10000000*flag:zh3",
						"condition": "10000000*flag:zh3<=5e12",
						"action": [
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "+=",
								"value": "3000*flag:zh3"
							},
							{
								"type": "setValue",
								"name": "flag:anti",
								"operator": "+=",
								"value": "3000*flag:zh3"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "10000000*flag:zh3/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh3",
								"operator": "*=",
								"value": "20"
							}
						]
					},
					{
						"text": "永久宝石血瓶效力+10%  ${parseFloat(300000000*flag:zh4).toExponential(2)}",
						"need": "status:exp>=300000000*flag:zh4",
						"condition": "300000000*flag:zh4<=1e16",
						"action": [
							{
								"type": "setValue",
								"name": "item:I606",
								"operator": "+=",
								"value": "0.1"
							},
							{
								"type": "setValue",
								"name": "item:I608",
								"operator": "+=",
								"value": "0.1"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "300000000*flag:zh4/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh4",
								"operator": "*=",
								"value": "30"
							}
						]
					},
					{
						"text": "除该项之外的价格降低为90%  ${parseFloat(80000000*flag:zh5).toExponential(2)}",
						"need": "status:exp>=80000000*flag:zh5",
						"condition": "80000000*flag:zh5<=5e12",
						"action": [
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "80000000*flag:zh5/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh5",
								"operator": "*=",
								"value": "50"
							},
							{
								"type": "setValue",
								"name": "flag:zh1",
								"operator": "*=",
								"value": "0.9"
							},
							{
								"type": "setValue",
								"name": "flag:zh2",
								"operator": "*=",
								"value": "0.9"
							},
							{
								"type": "setValue",
								"name": "flag:zh3",
								"operator": "*=",
								"value": "0.9"
							},
							{
								"type": "setValue",
								"name": "flag:zh4",
								"operator": "*=",
								"value": "0.9"
							},
							{
								"type": "setValue",
								"name": "flag:zh6",
								"operator": "*=",
								"value": "0.9"
							},
							{
								"type": "setValue",
								"name": "flag:zh7",
								"operator": "*=",
								"value": "0.9"
							},
							{
								"type": "setValue",
								"name": "flag:zh8",
								"operator": "*=",
								"value": "0.9"
							}
						]
					},
					{
						"text": "角色受到的伤害在基础上-8%  ${parseFloat(1000000000*flag:zh7).toExponential(2)}",
						"need": "status:exp>=1000000000*flag:zh7",
						"condition": "1000000000*flag:zh7<=9223372036854775806",
						"action": [
							{
								"type": "setValue",
								"name": "item:I730",
								"operator": "+=",
								"value": "0.08"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "1000000000*flag:zh7/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh7",
								"operator": "*=",
								"value": "200"
							}
						]
					},
					{
						"text": "将你的正物质翻倍，再扣除需求  ${parseFloat(5e9*flag:zh6).toExponential(2)}",
						"need": "status:exp>=5e9*flag:zh6",
						"condition": "5e9*flag:zh6<=1e16",
						"action": [
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "*=",
								"value": "2"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "5e9*flag:zh6/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh6",
								"operator": "*=",
								"value": "200"
							}
						]
					},
					{
						"text": "杀怪反物质*世界号^(1+购买数)  ${parseFloat(1e10*flag:zh8).toExponential(2)}",
						"need": "status:exp>=10000000000*flag:zh8",
						"condition": "10000000000*flag:zh8<=9223372036854775806",
						"action": [
							{
								"type": "setValue",
								"name": "item:I734",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "10000000000*flag:zh8/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zh8",
								"operator": "*=",
								"value": "10000"
							}
						]
					},
					{
						"text": "永久升级商店  9e+22",
						"need": "status:exp>=9e22",
						"action": [
							{
								"type": "comment",
								"text": "新商店开启"
							},
							{
								"type": "exit"
							}
						]
					},
					{
						"text": "立即大坍缩，星系额外+30（剩余${3-flag:zhex1}次）  4.61e+18",
						"need": "status:exp>=4.61e18",
						"condition": "flag:inft>=5&&flag:zhex1<=2",
						"action": [
							{
								"type": "setValue",
								"name": "item:I848",
								"operator": "+=",
								"value": "30"
							},
							{
								"type": "setValue",
								"name": "status:exp",
								"operator": "-=",
								"value": "4.61e18/flag:cost1"
							},
							{
								"type": "setValue",
								"name": "flag:zhex1",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "insert",
								"loc": [
									6,
									11
								],
								"floorId": "Infinity"
							},
							{
								"type": "comment",
								"text": "新商店开启"
							},
							{
								"type": "exit"
							}
						]
					}
				]
			}
		],
		"levelUp": [
			{
				"need": "0",
				"title": "新晋神",
				"action": [
					{
						"type": "comment",
						"text": "此处是初始等级，只需填写称号"
					}
				]
			},
			{
				"need": "1e308",
				"title": "地纪神",
				"clear": true,
				"action": [
					"实力：新晋神→地纪神\n增加了1攻击、1防御。\n献祭的倍率增加了。",
					{
						"type": "setValue",
						"name": "flag:shop1",
						"operator": "*=",
						"value": "3"
					},
					{
						"type": "setValue",
						"name": "status:atk",
						"operator": "+=",
						"value": "1"
					},
					{
						"type": "setValue",
						"name": "status:def",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		]
	},
	"values": {
		"lavaDamage": 100,
		"poisonDamage": 10,
		"weakValue": 20,
		"redGem": 1,
		"blueGem": 1,
		"greenGem": 10,
		"redPotion": 100,
		"bluePotion": 200,
		"yellowPotion": 400,
		"greenPotion": 800,
		"breakArmor": 0.9,
		"counterAttack": 0.1,
		"purify": 3,
		"hatred": 2,
		"animateSpeed": 300,
		"moveSpeed": 100,
		"statusCanvasRowsOnMobile": 4,
		"floorChangeTime": 0
	},
	"flags": {
		"statusBarItems": [
			"enableFloor",
			"enableLv",
			"enableMoney",
			"enableExp",
			"enableKeys"
		],
		"extendToolbar": false,
		"flyNearStair": false,
		"flyRecordPosition": true,
		"itemFirstText": false,
		"equipboxButton": false,
		"enableAddPoint": false,
		"enableNegativeDamage": false,
		"betweenAttackMax": false,
		"useLoop": false,
		"startUsingCanvas": true,
		"statusCanvas": true,
		"enableEnemyPoint": true,
		"enableGentleClick": true,
		"ignoreChangeFloor": true,
		"canGoDeadZone": false,
		"enableMoveDirectly": true,
		"enableRouteFolding": true,
		"disableShopOnDamage": false,
		"blurFg": true
	}
}