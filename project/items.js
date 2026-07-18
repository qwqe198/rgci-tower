var items_296f5d02_12fd_4166_a7c1_b5e830c9ee3a = 
{
	"yellowKey": {
		"cls": "tools",
		"name": "黄钥匙",
		"text": "即使血海之上的强者，面对能量锁也无可奈何，但这把钥匙不同。\n可以打开一扇黄门。",
		"hideInToolbox": true
	},
	"blueKey": {
		"cls": "tools",
		"name": "蓝钥匙",
		"text": "即使血海之上的强者，面对能量锁也无可奈何，但这把钥匙不同。\n可以打开一扇蓝门。",
		"hideInToolbox": true
	},
	"redKey": {
		"cls": "tools",
		"name": "红钥匙",
		"text": "即使血海之上的强者，面对能量锁也无可奈何，但这把钥匙不同。\n可以打开一扇红门。",
		"hideInToolbox": true
	},
	"redGem": {
		"cls": "items",
		"name": "初始红宝石",
		"text": "红色的晶体，可以强化自己的力量。\n攻击+${core.values.redGem * core.status.thisMap.ratio}。",
		"itemEffect": "core.status.hero.atk += Math.floor(core.values.redGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))",
		"itemEffectTip": "，攻击+${Math.floor(core.values.redGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"blueGem": {
		"cls": "items",
		"name": "初始蓝宝石",
		"text": "蓝色的晶体，可以使自己更加灵巧。\n防御+${core.values.blueGem * core.status.thisMap.ratio}。",
		"itemEffect": "core.status.hero.def += Math.floor(core.values.blueGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))",
		"itemEffectTip": "，防御+${Math.floor(core.values.blueGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"greenGem": {
		"cls": "items",
		"name": "初始绿宝石",
		"text": "绿色的晶体，可以吸收受到的伤害。\n护盾+${core.values.greenGem * core.status.thisMap.ratio}。",
		"itemEffect": "core.status.hero.mdef += Math.floor(core.values.greenGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))",
		"itemEffectTip": "，护盾+${Math.floor(core.values.greenGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"yellowGem": {
		"cls": "items",
		"name": "初始黄宝石",
		"text": "黄色的晶体，似乎非常稀有，蕴含不可思议的能量。\n角色的攻击、防御、护盾同时增加1颗宝石的数值，同时获得相当于黄色血瓶的血量。",
		"itemEffect": "core.status.hero.atk += Math.floor(core.values.redGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))\ncore.status.hero.def += Math.floor(core.values.blueGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))\ncore.status.hero.mdef += Math.floor(core.values.greenGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))\ncore.status.hero.hp += Math.floor(core.values.yellowPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"redPotion": {
		"cls": "items",
		"name": "红色补给品",
		"text": "飘散在空气中的活泼能量的具现化，能够恢复生命。\n生命+${core.values.redPotion}。",
		"itemEffect": "core.status.hero.hp += Math.floor(core.values.redPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))",
		"itemEffectTip": "，生命+${Math.floor(core.values.redPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))}",
		"useItemEffect": "core.status.hero.hp += core.values.redPotion",
		"canUseItemEffect": "true"
	},
	"bluePotion": {
		"cls": "items",
		"name": "蓝色补给品",
		"text": "飘散在空气中的活泼能量的具现化，能够恢复生命。\n生命+${core.values.bluePotion}。",
		"itemEffect": "core.status.hero.hp += Math.floor(core.values.bluePotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))",
		"itemEffectTip": "，生命+${Math.floor(core.values.bluePotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))}",
		"useItemEffect": "core.status.hero.hp += core.values.bluePotion",
		"canUseItemEffect": "true"
	},
	"yellowPotion": {
		"cls": "items",
		"name": "黄色补给品",
		"text": "飘散在空气中的活泼能量的具现化，能够恢复生命。\n生命+${core.values.yellowPotion}。",
		"itemEffect": "core.status.hero.hp += Math.floor(core.values.yellowPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))",
		"itemEffectTip": "，生命+${ Math.floor(core.values.yellowPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))}",
		"useItemEffect": "core.status.hero.hp += core.values.yellowPotion",
		"canUseItemEffect": "true"
	},
	"greenPotion": {
		"cls": "items",
		"name": "绿色补给品",
		"text": "飘散在空气中的活泼能量的具现化，能够恢复生命。\n生命+${core.values.greenPotion}。",
		"itemEffect": "core.status.hero.hp += Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))",
		"itemEffectTip": "，生命+${Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"sword0": {
		"cls": "items",
		"name": "破旧的剑",
		"text": "一把已经生锈的剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 0
			}
		},
		"itemEffect": "core.status.hero.atk += 0",
		"itemEffectTip": "，攻击+0"
	},
	"sword1": {
		"cls": "items",
		"name": "蜜罐",
		"text": "巨熊们守卫着的蜜罐，里面装的是？……普通的蜂蜜吗？\n生命+2亿，攻击、防御+5%。",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 10
			}
		},
		"itemEffect": "core.status.hero.atk *= 1.05;\ncore.status.hero.def *= 1.05;\ncore.status.hero.hp += 200000000;",
		"itemEffectTip": "，生命+2亿，攻击、防御+5%。"
	},
	"sword2": {
		"cls": "items",
		"name": "空能蜂巢",
		"text": "似乎是红海原力催动的灵器，虽然里面没有蜜蜂但还是可以产出价值不菲的蜂蜜。\n攻击、防御+8万。",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 20
			}
		},
		"itemEffect": "core.status.hero.atk += 80000;\ncore.status.hero.def += 80000;",
		"itemEffectTip": "，攻击、防御+8万。"
	},
	"sword3": {
		"cls": "items",
		"name": "骑士剑",
		"text": "一把很普通的骑士剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 40
			}
		},
		"itemEffect": "core.status.hero.atk += 40",
		"itemEffectTip": "，攻击+40"
	},
	"sword4": {
		"cls": "items",
		"name": "圣剑",
		"text": "一把很普通的圣剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 80
			}
		},
		"itemEffect": "core.status.hero.atk += 80",
		"itemEffectTip": "，攻击+80"
	},
	"sword5": {
		"cls": "items",
		"name": "神圣剑",
		"text": "一把很普通的神圣剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 160
			}
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100"
	},
	"shield0": {
		"cls": "items",
		"name": "破旧的盾",
		"text": "一个很破旧的铁盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 0
			}
		},
		"itemEffect": "core.status.hero.def += 0",
		"itemEffectTip": "，防御+0"
	},
	"shield1": {
		"cls": "items",
		"name": "铁盾",
		"text": "一个很普通的铁盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 10
			}
		},
		"itemEffect": "core.status.hero.def += 10",
		"itemEffectTip": "，防御+10"
	},
	"shield2": {
		"cls": "items",
		"name": "银盾",
		"text": "一个很普通的银盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 20
			}
		},
		"itemEffect": "core.status.hero.def += 20",
		"itemEffectTip": "，防御+20"
	},
	"shield3": {
		"cls": "items",
		"name": "骑士盾",
		"text": "一个很普通的骑士盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 40
			}
		},
		"itemEffect": "core.status.hero.def += 40",
		"itemEffectTip": "，防御+40"
	},
	"shield4": {
		"cls": "items",
		"name": "圣盾",
		"text": "一个很普通的圣盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 80
			}
		},
		"itemEffect": "core.status.hero.def += 80",
		"itemEffectTip": "，防御+80"
	},
	"shield5": {
		"cls": "items",
		"name": "神圣盾",
		"text": "一个很普通的神圣盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 100,
				"mdef": 100
			}
		},
		"itemEffect": "core.status.hero.def += 100;core.status.hero.mdef += 100",
		"itemEffectTip": "，防御+100，护盾+100"
	},
	"superPotion": {
		"cls": "tools",
		"name": "圣水",
		"itemEffect": "core.status.hero.hp *= 2",
		"itemEffectTip": "，生命值翻倍",
		"useItemEffect": "core.status.hero.hp *= 2;core.playSound('回血');",
		"canUseItemEffect": "true",
		"text": "永远不会消失的生命之水。\n使角色生命值翻倍。（直接生效）"
	},
	"book": {
		"cls": "constants",
		"name": "意念感知",
		"text": "可以查看当前楼层各对手属性。",
		"hideInToolbox": true,
		"useItemEffect": "core.ui.drawBook(0);",
		"canUseItemEffect": "true"
	},
	"fly": {
		"cls": "constants",
		"name": "楼层传送器",
		"text": "可以自由往来去过的楼层",
		"hideInReplay": true,
		"hideInToolbox": true,
		"useItemEffect": "core.ui.drawFly(core.floorIds.indexOf(core.status.floorId));",
		"canUseItemEffect": "(function () {\n\tif (core.flags.flyNearStair && !core.nearStair()) return false;\n\treturn core.status.maps[core.status.floorId].canFlyFrom;\n})();"
	},
	"coin": {
		"cls": "tools",
		"name": "获得反物质的速率",
		"text": "持有时打败对手可得双倍金币",
		"hideInToolbox": true
	},
	"freezeBadge": {
		"cls": "constants",
		"name": "冰冻徽章",
		"text": "可以将面前的熔岩变成平地",
		"useItemEffect": "(function () {\n\tvar success = false;\n\n\tvar snowFourDirections = false; // 是否多方向雪花；如果是将其改成true\n\tif (snowFourDirections) {\n\t\t// 多方向雪花\n\t\tfor (var direction in core.utils.scan) { // 多方向雪花默认四方向，如需改为八方向请将这两个scan改为scan2\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (core.getBlockId(nx, ny) == 'lava') {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\tif (core.getBlockId(core.nextX(), core.nextY()) == 'lava') {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('打开界面');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\t} else {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"cross": {
		"cls": "constants",
		"name": "十字架",
		"text": "持有后无视对手的无敌属性"
	},
	"dagger": {
		"cls": "constants",
		"name": "屠龙匕首",
		"text": "该道具尚未被定义"
	},
	"amulet": {
		"cls": "constants",
		"name": "护符",
		"text": "持有时无视负面地形"
	},
	"bigKey": {
		"cls": "tools",
		"name": "大黄门钥匙",
		"text": "可以开启当前层所有黄门",
		"itemEffect": "core.addItem('yellowKey', 1);\ncore.addItem('blueKey', 1);\ncore.addItem('redKey', 1);",
		"itemEffectTip": "，全钥匙+1",
		"useItemEffect": "(function () {\n\tvar actions = core.searchBlock(\"yellowDoor\").map(function (block) {\n\t\treturn { \"type\": \"openDoor\", \"loc\": [block.x, block.y], \"async\": true };\n\t});\n\tactions.push({ \"type\": \"waitAsync\" });\n\tactions.push({ \"type\": \"tip\", \"text\": core.material.items[itemId].name + \"使用成功\" });\n\tcore.insertAction(actions);\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.searchBlock('yellowDoor').length > 0;\n})();"
	},
	"greenKey": {
		"cls": "tools",
		"name": "永恒之匙",
		"text": "钥匙上用宇宙通用语镌刻着〖永恒〗两个小字。",
		"itemEffectTip": null,
		"itemEffect": "core.addItem('greenKey', 5000)",
		"useItemEvent": null
	},
	"steelKey": {
		"cls": "tools",
		"name": "铁门钥匙",
		"text": "可以打开一扇铁门"
	},
	"pickaxe": {
		"cls": "tools",
		"name": "破墙镐",
		"text": "可以破坏面前的小型障碍物",
		"useItemEffect": "(function () {\n\tvar canBreak = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable) return false;\n\t\treturn block.event.canBreak;\n\t};\n\n\tvar success = false;\n\tvar pickaxeFourDirections = false; // 是否多方向破；如果是将其改成true\n\tif (pickaxeFourDirections) {\n\t\t// 多方向破\n\t\tfor (var direction in core.utils.scan) { // 多方向破默认四方向，如需改成八方向请将这两个scan改为scan2\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (canBreak(nx, ny)) {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\t// 仅破当前\n\t\tif (canBreak(core.nextX(), core.nextY())) {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('破墙镐');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\t} else {\n\t\t// 无法使用\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"icePickaxe": {
		"cls": "tools",
		"name": "破冰镐",
		"text": "可以破坏勇士面前的一堵冰墙",
		"useItemEffect": "(function () {\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\tcore.insertAction({ \"type\": \"openDoor\", \"loc\": [\"core.nextX()\", \"core.nextY()\"] });\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.getBlockId(core.nextX(), core.nextY()) == 'ice';\n})();"
	},
	"bomb": {
		"cls": "tools",
		"name": "炸弹",
		"text": "可以炸掉勇士面前的对手",
		"useItemEffect": "(function () {\n\tvar bombList = []; // 炸掉的对手坐标列表\n\tvar todo = []; // 炸弹后事件\n\tvar money = 0,\n\t\texp = 0; // 炸弹获得的金币和经验\n\n\tvar canBomb = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable || block.event.cls.indexOf('enemy') != 0) return false;\n\t\tvar enemy = core.material.enemys[block.event.id];\n\t\treturn enemy && !enemy.notBomb;\n\t};\n\n\tvar bomb = function (x, y) {\n\t\tif (!canBomb(x, y)) return;\n\t\tbombList.push([x, y]);\n\t\tvar id = core.getBlockId(x, y),\n\t\t\tenemy = core.material.enemys[id];\n\t\tmoney += core.getEnemyValue(enemy, 'money', x, y) || 0;\n\t\texp += core.getEnemyValue(enemy, 'exp', x, y) || 0;\n\t\tcore.push(todo, core.floors[core.status.floorId].afterBattle[x + \",\" + y]);\n\t\tcore.push(todo, enemy.afterBattle);\n\t\tcore.removeBlock(x, y);\n\t}\n\n\t// 如果要多方向可炸，把这里的false改成true\n\tif (false) {\n\t\tvar scan = core.utils.scan; // 多方向炸时默认四方向，如果要改成八方向炸可以改成 core.utils.scan2\n\t\tfor (var direction in scan) {\n\t\t\tvar delta = scan[direction];\n\t\t\tbomb(core.getHeroLoc('x') + delta.x, core.getHeroLoc('y') + delta.y);\n\t\t}\n\t} else {\n\t\t// 仅炸当前\n\t\tbomb(core.nextX(), core.nextY());\n\t}\n\n\tif (bombList.length == 0) {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip('当前无法使用' + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\n\t// 取消这里的注释可以炸弹后获得金币和经验\n\tcore.status.hero.money += money;\n\tcore.status.hero.exp += exp;\n\n\t// 取消这里的注释可以炸弹引发战后事件\n\t// if (todo.length > 0) core.insertAction(todo);\n\n})();",
		"canUseItemEffect": "true"
	},
	"centerFly": {
		"cls": "tools",
		"name": "中心对称飞行器",
		"text": "可以飞向当前楼层中心对称的位置",
		"useItemEffect": "core.playSound('centerFly.mp3');\ncore.clearMap('hero');\ncore.setHeroLoc('x', core.bigmap.width - 1 - core.getHeroLoc('x'));\ncore.setHeroLoc('y', core.bigmap.height - 1 - core.getHeroLoc('y'));\ncore.drawHero();\ncore.drawTip(core.material.items[itemId].name + '使用成功');",
		"canUseItemEffect": "(function () {\n\tvar toX = core.bigmap.width - 1 - core.getHeroLoc('x'),\n\t\ttoY = core.bigmap.height - 1 - core.getHeroLoc('y');\n\tvar id = core.getBlockId(toX, toY);\n\treturn id == null;\n})();"
	},
	"upFly": {
		"cls": "tools",
		"name": "上楼器",
		"text": "可以飞往楼上的相同位置",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) + 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"loc\": [core.getHeroLoc('x'), core.getHeroLoc('y')], \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, null, core.status.hero.loc, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index < core.floorIds.length - 1) {\n\t\tvar toId = core.floorIds[index + 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh && core.getBlock(toX, toY, toId) == null) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();"
	},
	"downFly": {
		"cls": "tools",
		"name": "下楼器",
		"text": "可以飞往楼下的相同位置",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) - 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"loc\": [core.getHeroLoc('x'), core.getHeroLoc('y')], \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, null, core.status.hero.loc, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index > 0) {\n\t\tvar toId = core.floorIds[index - 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh && core.getBlock(toX, toY, toId) == null) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();"
	},
	"earthquake": {
		"cls": "tools",
		"name": "地震卷轴",
		"text": "可以破坏当前层的所有墙",
		"useItemEffect": "(function () {\n\tvar indexes = [];\n\tfor (var index in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[index];\n\t\tif (!block.disable && block.event.canBreak) {\n\t\t\tindexes.push(index);\n\t\t}\n\t}\n\tcore.removeBlockByIndexes(indexes);\n\tcore.redrawMap();\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.status.thisMap.blocks.filter(function (block) {\n\t\treturn !block.disable && block.event.canBreak;\n\t}).length > 0;\n})();"
	},
	"poisonWine": {
		"cls": "items",
		"name": "大红补给品",
		"text": "浓郁的活泼能量，能使伤口快速愈合。\n增加相当于16倍红血瓶的生命。",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 2",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hp += 2 * Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))",
		"itemEffectTip": "，生命+${2 * Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))}"
	},
	"weakWine": {
		"cls": "items",
		"name": "大蓝补给品",
		"text": "浓郁的活泼能量，能使伤口快速愈合。\n增加相当于16倍蓝血瓶的生命。",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 4",
		"canUseItemEffect": true,
		"itemEffect": "core.status.hero.hp += 4 * Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))",
		"itemEffectTip": "，生命+${4 * Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))}"
	},
	"curseWine": {
		"cls": "items",
		"name": "大绿补给品",
		"text": "浓郁的活泼能量，能使伤口快速愈合。\n增加相当于16倍绿血瓶的生命。",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 16",
		"canUseItemEffect": null,
		"itemEffect": "core.status.hero.hp += 16 * Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))",
		"itemEffectTip": "，生命+${16 * Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))}"
	},
	"superWine": {
		"cls": "tools",
		"name": "灵水",
		"text": "能够自己涌动的奇异活泼水源。\n使角色生命值*1.5。（直接生效）",
		"useItemEffect": "core.status.hero.hp *= 1.5;\ncore.setFlag('challenge2', 1);\ncore.playSound('回血');",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hp *= 1.5;\ncore.setFlag('challenge2', 1);",
		"itemEffectTip": "，生命值增加一半'"
	},
	"hammer": {
		"cls": "tools",
		"name": "圣锤",
		"text": "该道具尚未被定义"
	},
	"lifeWand": {
		"cls": "tools",
		"name": "生命魔杖",
		"text": "可以恢复100点生命值",
		"useItemEvent": [
			{
				"type": "comment",
				"text": "先恢复一个魔杖（因为使用道具必须消耗一个）"
			},
			{
				"type": "function",
				"function": "function(){\ncore.addItem('lifeWand', 1);\n}"
			},
			{
				"type": "playSound",
				"name": "打开界面"
			},
			{
				"type": "input",
				"text": "请输入生命魔杖使用次数：(0-${item:lifeWand})"
			},
			{
				"type": "comment",
				"text": "【接受用户输入】弹窗输入的结果将会保存在“flag:input”中\n如果需要更多帮助，请查阅帮助文档"
			},
			{
				"type": "if",
				"condition": "flag:input<=item:lifeWand",
				"true": [
					{
						"type": "setValue",
						"name": "item:lifeWand",
						"operator": "-=",
						"value": "flag:input"
					},
					{
						"type": "setValue",
						"name": "status:hp",
						"operator": "+=",
						"value": "flag:input*100"
					},
					{
						"type": "playSound",
						"name": "回血"
					},
					"成功使用${flag:input}次生命魔杖，恢复${flag:input*100}点生命。"
				],
				"false": [
					{
						"type": "playSound",
						"name": "操作失败"
					},
					"输入不合法！"
				]
			}
		],
		"canUseItemEffect": "true"
	},
	"jumpShoes": {
		"cls": "tools",
		"name": "跳跃靴",
		"text": "能跳跃到前方两格处",
		"useItemEffect": "core.playSound(\"跳跃\");\ncore.insertAction({ \"type\": \"jumpHero\", \"loc\": [core.nextX(2), core.nextY(2)] });",
		"canUseItemEffect": "(function () {\n\tvar nx = core.nextX(2),\n\t\tny = core.nextY(2);\n\treturn nx >= 0 && nx < core.bigmap.width && ny >= 0 && ny < core.bigmap.height && core.getBlockId(nx, ny) == null;\n})();"
	},
	"skill1": {
		"cls": "constants",
		"name": "技能：二倍斩",
		"text": "可以打开或关闭主动技能二倍斩",
		"hideInReplay": true,
		"useItemEffect": "(function () {\n\tvar skillValue = 1; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\n\tvar skillNeed = 5; // 技能的需求\n\tvar skillName = '二倍斩'; // 技能的名称\n\n\tif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\t\tif (core.getStatus('mana') >= skillNeed) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\t\tcore.playSound('打开界面');\n\t\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\t} else {\n\t\t\tcore.playSound('操作失败');\n\t\t\tcore.drawTip('魔力不足，无法开启技能');\n\t\t}\n\t} else { // 关闭技能\n\t\tcore.setFlag('skill', 0); // 关闭技能状态\n\t\tcore.setFlag('skillName', '无');\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"wand": {
		"cls": "items",
		"name": "新物品"
	},
	"pack": {
		"cls": "constants",
		"name": "首次无限",
		"itemEffect": null,
		"itemEffectTip": null,
		"hideInReplay": true,
		"hideInToolbox": true
	},
	"I570": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I571": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I572": {
		"cls": "items",
		"name": "大黄补给品",
		"itemEffect": "core.status.hero.hp += 8 * Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))",
		"itemEffectTip": "，生命+${8 * Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 8",
		"text": "浓郁的活泼能量，能使伤口快速愈合。\n增加相当于16倍黄血瓶的生命"
	},
	"I573": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I574": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I575": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I576": {
		"cls": "items",
		"name": "高阶红宝石",
		"itemEffect": "core.status.hero.atk += 5 * Math.floor(core.values.redGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))",
		"itemEffectTip": "，攻击+${5 * Math.floor(core.values.redGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))}",
		"text": "高阶红色晶体，可以更大化强化自己的力量。\n直接增加2倍于普通红宝石的攻击力。",
		"useItemEffect": "core.status.hero.atk += 5 * core.values.redGem"
	},
	"I577": {
		"cls": "items",
		"name": "高阶蓝宝石",
		"itemEffect": "core.status.hero.def += 5 * Math.floor(core.values.blueGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))",
		"itemEffectTip": "，防御+${5 * Math.floor(core.values.blueGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))}",
		"text": "高阶蓝色晶体，可以更大化使自己更加灵巧。\n直接增加2倍于普通蓝宝石的防御力。"
	},
	"I578": {
		"cls": "items",
		"name": "高阶绿宝石",
		"itemEffect": "core.status.hero.mdef += 5 * Math.floor(core.values.greenGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))",
		"itemEffectTip": "，护盾+${5 * core.values.greenGem * core.status.thisMap.ratio*2}",
		"text": "高阶绿色晶体，可以更大化吸收受到的伤害。\n直接增加2倍于普通绿宝石的护盾。"
	},
	"I579": {
		"cls": "items",
		"name": "高阶黄宝石",
		"itemEffectTip": "，全属性提升",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.atk += 5 * Math.floor(core.values.redGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))\ncore.status.hero.def += 5 * Math.floor(core.values.blueGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))\ncore.status.hero.mdef += 5 * Math.floor(core.values.greenGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))\ncore.status.hero.hp += 5 * Math.floor(core.values.yellowPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))",
		"text": "高阶黄色晶体，似乎非常稀有，蕴含不可思议的能量。\n直接增加2倍于普通黄宝石的全属性。"
	},
	"I580": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I581": {
		"cls": "constants",
		"name": "Rank：Easy",
		"canUseItemEffect": "true",
		"text": "伤害减免50%，血瓶效力增加30%。"
	},
	"I582": {
		"cls": "constants",
		"name": "Rank：Hard",
		"canUseItemEffect": "true",
		"text": "伤害减免10%，血瓶效力增加5%。"
	},
	"I583": {
		"cls": "constants",
		"name": "Rank：Chaos",
		"canUseItemEffect": "true",
		"text": "诶，你……选择了这个吗。"
	},
	"I584": {
		"cls": "items",
		"name": "极品红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 5",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*5}",
		"text": "极为珍贵的红色晶体，能够使体质产生不小的变化。\n直接增加5倍于普通红宝石的攻击力。"
	},
	"I585": {
		"cls": "items",
		"name": "极品蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio*5",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*5}",
		"text": "极为珍贵的蓝色晶体，能够使自身变得轻盈如燕。\n直接增加5倍于普通蓝宝石的防御力。"
	},
	"I586": {
		"cls": "items",
		"name": "极品绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio*5",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*5}",
		"text": "极为珍贵的绿色晶体，足以吸收致命的伤害。\n直接增加5倍于普通绿宝石的护盾。"
	},
	"I587": {
		"cls": "items",
		"name": "极品黄宝石",
		"itemEffect": "core.status.hero.atk += 20 * Math.floor(core.values.redGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))\ncore.status.hero.def += 20 * Math.floor(core.values.blueGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))\ncore.status.hero.mdef += 20 * Math.floor(core.values.greenGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))\ncore.status.hero.hp += 20 * Math.floor(core.values.yellowPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))",
		"text": "极为珍贵的黄色晶体，蕴含的能量甚至可以产生空间波纹。\n直接增加5倍于普通黄宝石的全属性。",
		"itemEffectTip": "，全属性提升"
	},
	"I588": {
		"cls": "constants",
		"name": "清灵Ⅰ",
		"canUseItemEffect": "true",
		"text": "初阶的战复术，能够使伤口快速愈合。\n角色造成的伤害将有8%用来恢复自身生命。（上限为1000次回复）"
	},
	"I589": {
		"cls": "constants",
		"name": "雷裁Ⅰ",
		"canUseItemEffect": "true",
		"text": "初级法师常用的魔法术式。\n角色每回合额外造成对手攻防差值1/5的雷属性伤害。"
	},
	"I590": {
		"cls": "constants",
		"name": "血雨Ⅰ",
		"canUseItemEffect": "true",
		"text": "游走在生死间的刺客惯用的招式。\n使敌人前四回合受到的伤害翻4倍，造成的伤害减为1/4。"
	},
	"I591": {
		"cls": "constants",
		"name": "琉璃灵果Ⅰ",
		"canUseItemEffect": "true",
		"text": "进阶层次的战复术，能够进行战地急救。\n战前恢复相当于对手攻防之和8倍的生命，并使每点护盾的效力提升为3倍。"
	},
	"I592": {
		"cls": "constants",
		"name": "流萤幽火",
		"canUseItemEffect": "true",
		"text": "流萤，幽火。一花一界，一叶一舟。\n每回合以50%的伤害发动三次攻击，并使对方每回合损失最大生命的千分之2，生命损失持续100回合。"
	},
	"I593": {
		"cls": "constants",
		"name": "血景",
		"canUseItemEffect": "true"
	},
	"I594": {
		"cls": "constants",
		"name": "离火Ⅰ",
		"canUseItemEffect": "true",
		"text": "火焰术士的必修课，将火属性能量凝聚起来，如臂驱使。\n携带的每把红钥匙都能提供8点火元素能量，每1点火元素能量可提供0.3%攻击力，火元素能量上限为64点。"
	},
	"I595": {
		"cls": "constants",
		"name": "蓝钥匙加成1",
		"canUseItemEffect": "true",
		"text": "水魔法师的拿手技能，控水魔法相对于火更为简单，因为空气中富含水元素。\n携带的每把蓝钥匙都能提供3点水元素能量，每1点水元素能量可提供0.2%防御力，水元素能量上限为90点。",
		"hideInToolbox": true
	},
	"I596": {
		"cls": "constants",
		"name": "预言者Ⅰ",
		"canUseItemEffect": "true",
		"text": "预言者说，在预测未知之物的时候，要做好最坏的打算。\n战前以普攻的情况预知回合数，标记为预知因子，每1点预知因子对敌人造成其生命千分之1.5的伤害，预知因子上限为200。"
	},
	"I597": {
		"cls": "constants",
		"name": "食星术Ⅰ",
		"canUseItemEffect": "true",
		"text": "黑色的巨龙隐匿在漆黑如墨的夜空中，携带着足以吞噬繁星的伟力。\n战斗中，角色三围属性提高对手生命值的百分之1。"
	},
	"I598": {
		"cls": "constants",
		"name": "朝露复命",
		"canUseItemEffect": "true"
	},
	"I599": {
		"cls": "constants",
		"name": "离开世界",
		"canUseItemEffect": "true",
		"text": "当你离开世界时，你剩余的反物质将按1:1转化为正物质。",
		"useItemEvent": [
			{
				"type": "choices",
				"text": "当你离开世界时，你剩余的反物质将按1:1转化为正物质。\n正物质可以购置你需要的各种资源，\n以让你在下一次重返世界时走得更远。\n你在这个世界中获得的加成也不复存在。\n当然，你也可以选择在此记录成绩。\n当前环绕的星系数量：\n光暗：${flag:w1}\n水火：${flag:w2}\n日夜：${flag:w3}\n时空：${flag:w4}\n正邪：${flag:w5}\n生死：${flag:w6}",
				"choices": [
					{
						"text": "离开世界",
						"action": [
							{
								"type": "if",
								"condition": "(flag:jiaocheng2==0)",
								"true": [
									"你选择了离开世界。\n检测到这是你的第一次探险——\n如果你已经完成了第三次维度提升，那么做得不错！",
									"注意，你的维度提升是不能带出世界的，\n它将会转化为反物质星系储存。\n每个世界提供的星系数，限制为你在该世界获得的最大维度提升数。",
									"因此请在获得尽可能多次提升的基础上，\n努力探索更多世界吧。",
									{
										"type": "setValue",
										"name": "flag:jiaocheng2",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "flag:zh1",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "flag:zh2",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "flag:zh3",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "flag:zh4",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "flag:zh5",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "flag:zh6",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "flag:zh7",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "flag:zh8",
										"value": "1"
									},
									{
										"type": "insert",
										"loc": [
											0,
											0
										],
										"floorId": "sample2"
									}
								],
								"false": [
									{
										"type": "insert",
										"loc": [
											0,
											0
										],
										"floorId": "sample2"
									}
								]
							}
						]
					},
					{
						"text": "记录成绩",
						"action": [
							"计分方式为：\n当前维度提升*1e16+当前永恒之匙数量*1e11+当前生命/x。\n1、2、3世界，x为1。\n4、5、6世界，x为1e3。\n（由于浮点数计算偏差，当前生命较少时，将无法计入）\n若除后生命>9223372036（92.23亿），则超出的部分不计入成绩。",
							{
								"type": "switch",
								"condition": "flag:world",
								"caseList": [
									{
										"case": "1",
										"action": [
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "/=",
												"value": "1"
											},
											{
												"type": "if",
												"condition": "(status:hp>=9223372036)",
												"true": [
													{
														"type": "setValue",
														"name": "status:hp",
														"value": "9223372036"
													}
												],
												"false": []
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "item:I729*1e16+item:greenKey*1e11"
											},
											{
												"type": "win",
												"reason": "光暗",
												"noexit": 1
											}
										]
									},
									{
										"case": "2",
										"action": [
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "/=",
												"value": "1"
											},
											{
												"type": "if",
												"condition": "(status:hp>=9223372036)",
												"true": [
													{
														"type": "setValue",
														"name": "status:hp",
														"value": "9223372036"
													}
												],
												"false": []
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "item:I729*1e16+item:greenKey*1e11"
											},
											{
												"type": "win",
												"reason": "水火",
												"noexit": 1
											}
										]
									},
									{
										"case": "3",
										"action": [
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "/=",
												"value": "1"
											},
											{
												"type": "if",
												"condition": "(status:hp>=9223372036)",
												"true": [
													{
														"type": "setValue",
														"name": "status:hp",
														"value": "9223372036"
													}
												],
												"false": []
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "item:I729*1e16+item:greenKey*1e11"
											},
											{
												"type": "win",
												"reason": "日月",
												"noexit": 1
											}
										]
									},
									{
										"case": "4",
										"action": [
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "/=",
												"value": "1e3"
											},
											{
												"type": "if",
												"condition": "(status:hp>=9223372036)",
												"true": [
													{
														"type": "setValue",
														"name": "status:hp",
														"value": "9223372036"
													}
												],
												"false": []
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "item:I729*1e16+item:greenKey*1e11"
											},
											{
												"type": "win",
												"reason": "时空",
												"noexit": 1
											}
										]
									},
									{
										"case": "5",
										"action": [
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "/=",
												"value": "1e3"
											},
											{
												"type": "if",
												"condition": "(status:hp>=9223372036)",
												"true": [
													{
														"type": "setValue",
														"name": "status:hp",
														"value": "9223372036"
													}
												],
												"false": []
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "item:I729*1e16+item:greenKey*1e11"
											},
											{
												"type": "win",
												"reason": "正邪",
												"noexit": 1
											}
										]
									},
									{
										"case": "6",
										"action": [
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "/=",
												"value": "1e3"
											},
											{
												"type": "if",
												"condition": "(status:hp>=9223372036)",
												"true": [
													{
														"type": "setValue",
														"name": "status:hp",
														"value": "9223372036"
													}
												],
												"false": []
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "item:I729*1e16+item:greenKey*1e11"
											},
											{
												"type": "win",
												"reason": "生死",
												"noexit": 1
											}
										]
									}
								]
							},
							{
								"type": "insert",
								"loc": [
									6,
									3
								],
								"floorId": "sample0"
							}
						]
					},
					{
						"text": "继续游戏",
						"action": []
					}
				]
			}
		]
	},
	"I600": {
		"cls": "constants",
		"name": "自动拾取开关",
		"canUseItemEffect": "true",
		"text": "一个奇怪的标识，好像…可以转动？",
		"useItemEvent": [
			{
				"type": "choices",
				"text": "这里是自动拾取开关！\n为了更流畅的体验，\n建议只在少数情况下关闭它。",
				"choices": [
					{
						"text": "开启自动拾取",
						"color": [
							105,
							231,
							153,
							1
						],
						"action": [
							"自动拾取已开启！",
							{
								"type": "setValue",
								"name": "flag:shiqu",
								"value": "true"
							}
						]
					},
					{
						"text": "关闭自动拾取",
						"color": [
							243,
							184,
							78,
							1
						],
						"action": [
							"自动拾取已关闭！",
							{
								"type": "setValue",
								"name": "flag:shiqu",
								"value": "false"
							}
						]
					}
				]
			}
		]
	},
	"I601": {
		"cls": "constants",
		"name": "琉璃Ⅰ",
		"canUseItemEffect": "true",
		"text": "野外生存者修习的领悟，可以提升自己的生存几率。\n对手每回合造成的伤害将有10%被吸收。"
	},
	"I602": {
		"cls": "constants",
		"name": "秘果Ⅰ",
		"canUseItemEffect": "true",
		"text": "自然精灵族的秘术，可以使身体产生一定程度的免疫能力。\n角色护盾效力增加对手攻防和的1.6倍。"
	},
	"I603": {
		"cls": "tools",
		"name": "上帝计划（God Plan）Ⅰ",
		"canUseItemEffect": "true",
		"itemEffect": null,
		"useItemEvent": [
			"字条上写着长长的说明文字：\n初次见面。\n\n不管你有没有心理准备，\n此时此刻上帝计划（God Plan）正在进行。\n\n我不知道该怎么称呼你，\r[teal]【她】\r的操纵者。\n如不介意，便直呼为\r[gray]【你】\r好啦。\n\n在本次计划当中，\n你将被允许\r[yellow]使用不包括作弊在内的一系列手段，\n达成计划所提供的目的。\r",
			"这是为轻松\r[lime]【满绿通过当前区域】\r，\n且仍然留有余力的你提供的一项难度极高的挑战。\n\n达成挑战的你，名字将被镌刻在时光的记忆里。\n\n即使是其中最简单的一项，满绿难度也足以达到\n\r[red]13级\r，在绝大多数红海魔塔之上！\n\n因此想要尝试的话，建议做好长期反复回档优化的准备，或多人合拆以交流思路！",
			"\r[gold]本区挑战目标为：不使用灵水通过该区域。\n当前区域散落的绿钥匙数量总和为36把。\r\n\n如果你\r[BlueViolet]满绿达成挑战，意味着你达到了该计划的标准，成绩为你的过关生命！\r\n\n如果你\r[#66ccff]达到挑战目标但未能满绿，同样可以提交成绩，成绩为你持有的绿钥匙数量。\r\n\n如果你\r[lime]使用了降低难度，则成绩恒为你持有的绿钥匙数量/10。\r",
			{
				"type": "setValue",
				"name": "item:I603",
				"value": "1"
			}
		],
		"text": "尽量保证你的绿钥匙数量不减少——并最终获得成为【上帝】的资格。"
	},
	"I604": {
		"cls": "items",
		"name": "永恒之匙包",
		"canUseItemEffect": "true"
	},
	"I605": {
		"cls": "tools",
		"name": "宝石效力",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"I606": {
		"cls": "tools",
		"name": "宝石效力（永久）",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"I607": {
		"cls": "tools",
		"name": "血瓶效力",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"I608": {
		"cls": "tools",
		"name": "血瓶效力（永久）",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"I609": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I610": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I611": {
		"cls": "items",
		"name": "涟铜匕首",
		"canUseItemEffect": "true",
		"text": "青铜材质的匕首，荡漾着金属色泽的涟漪。\n攻击+480000，防御-96000。",
		"equip": {
			"type": 0,
			"value": {
				"def": -96000,
				"atk": 480000
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.atk += 300000",
		"itemEffectTip": "，攻击+300000"
	},
	"I612": {
		"cls": "items",
		"name": "雾影匕首",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.atk += 900000",
		"itemEffectTip": "，攻击+900000"
	},
	"I613": {
		"cls": "items",
		"name": "奔雷匕首",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.atk += 3000000",
		"itemEffectTip": "，攻击+3000000"
	},
	"I614": {
		"cls": "items",
		"name": "镔铁剑",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.atk += 1000",
		"itemEffectTip": "，攻击+1000"
	},
	"I615": {
		"cls": "items",
		"name": "空石剑",
		"canUseItemEffect": "true",
		"text": "天然的空心石块打造的剑。\n攻击+6000。",
		"equip": {
			"type": "装备",
			"value": {
				"atk": 6000
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100"
	},
	"I616": {
		"cls": "items",
		"name": "紫纹剑",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.atk += 3000",
		"itemEffectTip": "，攻击+3000"
	},
	"I617": {
		"cls": "items",
		"name": "天青长剑",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.atk += 10000",
		"itemEffectTip": "，攻击+10000"
	},
	"I618": {
		"cls": "items",
		"name": "焚风长剑",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.atk += 30000",
		"itemEffectTip": "，攻击+30000"
	},
	"I619": {
		"cls": "items",
		"name": "超红补给品",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * 32 * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio * 32}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 32",
		"text": "极为精纯的活泼能量，甚至有起死回生的功用。\n增加相当于256倍红血瓶的生命。"
	},
	"I620": {
		"cls": "items",
		"name": "超蓝补给品",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * 64 * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio * 64}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 64",
		"text": "极为精纯的活泼能量，甚至有起死回生的功用。\n增加相当于256倍蓝血瓶的生命。"
	},
	"I621": {
		"cls": "items",
		"name": "超黄补给品",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * 128 * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio * 128}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 128",
		"text": "极为精纯的活泼能量，甚至有起死回生的功用。\n增加相当于256倍黄血瓶的生命。"
	},
	"I622": {
		"cls": "items",
		"name": "超绿补给品",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * 256 * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio * 256}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 256",
		"text": "极为精纯的活泼能量，甚至有起死回生的功用。\n增加相当于256倍绿血瓶的生命。"
	},
	"I623": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I624": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I625": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I626": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I627": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I628": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I629": {
		"cls": "tools",
		"name": "连击次数",
		"canUseItemEffect": "true"
	},
	"I630": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I631": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I632": {
		"cls": "items",
		"name": "火蝶铃",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mdef += 100000;\ncore.status.hero.hp += 2000000;",
		"itemEffectTip": "，护盾+10万，生命+200万"
	},
	"I633": {
		"cls": "items",
		"name": "天籁之铃",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mdef += 10000;\ncore.status.hero.hp += 200000;",
		"itemEffectTip": "，护盾+10000，生命+20万"
	},
	"I634": {
		"cls": "items",
		"name": "地陨之铃",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mdef += 30000;\ncore.status.hero.hp += 600000;",
		"itemEffectTip": "，护盾+30000，生命+60万"
	},
	"I635": {
		"cls": "items",
		"name": "殿堂红宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 10",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*10}",
		"text": "普通人一生难得一见的红色晶体，能够使身体如有神助，神力盖世。\n直接增加10倍于普通红宝石的攻击力。"
	},
	"I636": {
		"cls": "items",
		"name": "殿堂蓝宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 10",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*10}",
		"text": "普通人一生难得一见的蓝色晶体，能够使人的筋骨产生质的蜕变，脱胎换骨。\n直接增加10倍于普通蓝宝石的防御力。"
	},
	"I637": {
		"cls": "items",
		"name": "殿堂绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio*10",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*10}",
		"text": "普通人一生难得一见的绿色晶体，蕴含足以庇佑万物的神力。\n直接增加10倍于普通绿宝石的护盾。"
	},
	"I638": {
		"cls": "items",
		"name": "殿堂黄宝石",
		"itemEffect": "core.status.hero.atk += 100 * Math.floor(core.values.redGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))\ncore.status.hero.def += 100 * Math.floor(core.values.blueGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))\ncore.status.hero.mdef += 100 * Math.floor(core.values.greenGem * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I605\") + core.itemCount(\"I606\")))\ncore.status.hero.hp += 100 * Math.floor(core.values.yellowPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))",
		"text": "普通人一生难得一见的黄色晶体，它恐怖的能量波动足以扭曲时空。\n直接增加10倍于普通黄宝石的全属性。",
		"itemEffectTip": "，全属性提升"
	},
	"I639": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I640": {
		"cls": "items",
		"name": "传说蓝宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 20",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*20}"
	},
	"I641": {
		"cls": "items",
		"name": "传说绿宝石",
		"canUseItemEffect": "true",
		"text": "世间罕有的绿色晶体，其蓬勃的生命力足以滋养一方小世界。\n直接增加20倍于普通绿宝石的护盾。",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 20",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*20}"
	},
	"I642": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I643": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I644": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I645": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I646": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I647": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I648": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I649": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I650": {
		"cls": "items",
		"name": "光风之藤",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mdef += 300000;\ncore.status.hero.hp += 6000000;",
		"itemEffectTip": "，护盾+30万，生命+600万"
	},
	"I651": {
		"cls": "items",
		"name": "洛云之藤",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mdef += 3000000;\ncore.status.hero.hp += 60000000;",
		"itemEffectTip": "，护盾+300万，生命+6000万"
	},
	"I652": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I653": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I654": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I655": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I656": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I657": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I658": {
		"cls": "tools",
		"name": "禀赋加成",
		"canUseItemEffect": null,
		"text": "天才不讲理！就是这样。\n献祭时额外获得相当于该道具倍数的能力。",
		"hideInToolbox": true
	},
	"I729": {
		"cls": "tools",
		"name": "维度提升",
		"canUseItemEffect": false,
		"text": "记录你当前维度提升的次数。"
	},
	"I730": {
		"cls": "tools",
		"name": "伤害减免",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"I731": {
		"cls": "tools",
		"name": "能力效力",
		"canUseItemEffect": "true",
		"text": "红海领悟。传说中是两位幻神强者联手缔造的攻坚技，一人为血，一人为花。\n在接下来的战斗中爆发出3倍生命力、1.5倍攻防。（本区面对头目时使用）",
		"hideInToolbox": true
	},
	"I732": {
		"cls": "items",
		"name": "世界等级叠乘",
		"canUseItemEffect": "true"
	},
	"I733": {
		"cls": "tools",
		"name": "维度提升系数1",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"I734": {
		"cls": "tools",
		"name": "世界等级叠乘",
		"canUseItemEffect": "true",
		"text": "天地间充沛的能量滋养诞生的晶体，\n接触后能够化作海量的领悟为人所用。\n角色增加100领悟。",
		"itemEffect": "core.status.hero.money += 100",
		"itemEffectTip": "，领悟+100",
		"hideInToolbox": true
	},
	"I735": {
		"cls": "items",
		"name": "高等领悟结晶",
		"canUseItemEffect": "true",
		"text": "天地间充沛的能量滋养诞生的晶体，\n接触后能够化作海量的领悟为人所用。\n角色增加1000领悟。",
		"itemEffect": null,
		"itemEffectTip": null
	},
	"I736": {
		"cls": "items",
		"name": "极品领悟结晶",
		"canUseItemEffect": "true",
		"text": "天地间充沛的能量滋养诞生的晶体，\n接触后能够化作海量的领悟为人所用。\n角色增加10000领悟。",
		"itemEffect": "core.status.hero.money += 10000",
		"itemEffectTip": "，领悟+10000"
	},
	"I737": {
		"cls": "items",
		"name": "史诗的领悟结晶",
		"canUseItemEffect": "true",
		"text": "天地间充沛的能量滋养诞生的晶体，\n接触后能够化作海量的领悟为人所用。\n角色增加100000领悟。",
		"itemEffect": "core.status.hero.money += 100000",
		"itemEffectTip": "，领悟+100000"
	},
	"I738": {
		"cls": "constants",
		"name": "无限图腾",
		"canUseItemEffect": "true",
		"text": "【∞】\n9223372036854775807",
		"itemEffect": null,
		"itemEffectTip": null
	},
	"I739": {
		"cls": "items",
		"name": "传说的领悟结晶Ⅱ",
		"canUseItemEffect": "true",
		"text": "天地间充沛的能量滋养诞生的晶体，\n接触后能够化作海量的领悟为人所用。\n角色增加1000万领悟。",
		"itemEffect": "core.status.hero.money += 1000000000",
		"itemEffectTip": "，领悟+10亿"
	},
	"I740": {
		"cls": "items",
		"name": "神话的领悟结晶",
		"canUseItemEffect": "true",
		"text": "天地间充沛的能量滋养诞生的晶体，\n接触后能够化作海量的领悟为人所用。\n角色增加1亿领悟。",
		"itemEffect": "core.status.hero.money += 100000000000",
		"itemEffectTip": "，领悟+1000亿"
	},
	"I743": {
		"cls": "constants",
		"name": "清灵Ⅱ",
		"canUseItemEffect": "true",
		"text": "初阶的战复术，能够使伤口快速愈合。\n角色造成的伤害将有10%用来恢复自身生命。（上限为1000次回复）"
	},
	"I744": {
		"cls": "constants",
		"name": "清灵Ⅲ",
		"canUseItemEffect": "true",
		"text": "初阶的战复术，能够使伤口快速愈合。\n角色造成的伤害将有12%用来恢复自身生命。（上限为1000次回复）"
	},
	"I745": {
		"cls": "constants",
		"name": "清灵Max",
		"canUseItemEffect": "true",
		"text": "初阶的战复术，能够使伤口快速愈合。\n角色造成的伤害将有16%用来恢复自身生命。（上限为1000次回复）"
	},
	"I746": {
		"cls": "constants",
		"name": "雷裁Ⅱ",
		"canUseItemEffect": "true",
		"text": "初级法师常用的魔法术式。\n角色每回合额外造成对手攻防差值1/4的雷属性伤害。"
	},
	"I747": {
		"cls": "constants",
		"name": "雷裁Ⅲ",
		"canUseItemEffect": "true",
		"text": "初级法师常用的魔法术式。\n角色每回合额外造成对手攻防差值3/10的雷属性伤害。"
	},
	"I748": {
		"cls": "constants",
		"name": "雷裁Max",
		"canUseItemEffect": "true",
		"text": "初级法师常用的魔法术式。\n角色每回合额外造成对手攻防差值2/5的雷属性伤害。"
	},
	"I749": {
		"cls": "constants",
		"name": "血雨Ⅱ",
		"canUseItemEffect": "true",
		"text": "游走在生死间的刺客惯用的招式。\n使敌人前五回合受到的伤害翻4倍，造成的伤害减为1/4。"
	},
	"I750": {
		"cls": "constants",
		"name": "血雨Ⅲ",
		"canUseItemEffect": "true",
		"text": "游走在生死间的刺客惯用的招式。\n使敌人前六回合受到的伤害翻4倍，造成的伤害减为1/4。"
	},
	"I751": {
		"cls": "constants",
		"name": "血雨Max",
		"canUseItemEffect": "true",
		"text": "游走在生死间的刺客惯用的招式。\n使敌人前八回合受到的伤害翻4倍，造成的伤害减为1/4。"
	},
	"I752": {
		"cls": "constants",
		"name": "琉璃Ⅱ",
		"canUseItemEffect": "true",
		"text": "野外生存者修习的领悟，可以提升自己的生存几率。\n对手每回合造成的伤害将有12.5%被吸收。"
	},
	"I753": {
		"cls": "constants",
		"name": "琉璃Ⅲ",
		"canUseItemEffect": "true",
		"text": "野外生存者修习的领悟，可以提升自己的生存几率。\n对手每回合造成的伤害将有15%被吸收。"
	},
	"I754": {
		"cls": "constants",
		"name": "琉璃Max",
		"canUseItemEffect": "true",
		"text": "野外生存者修习的领悟，可以提升自己的生存几率。\n对手每回合造成的伤害将有20%被吸收。"
	},
	"I755": {
		"cls": "constants",
		"name": "秘果Ⅱ",
		"canUseItemEffect": "true",
		"text": "自然精灵族的秘术，可以使身体产生一定程度的免疫能力。\n角色护盾效力增加对手攻防和的2倍。"
	},
	"I756": {
		"cls": "constants",
		"name": "秘果Ⅲ",
		"canUseItemEffect": "true",
		"text": "自然精灵族的秘术，可以使身体产生一定程度的免疫能力。\n角色护盾效力增加对手攻防和的2.4倍。"
	},
	"I757": {
		"cls": "constants",
		"name": "秘果Max",
		"canUseItemEffect": "true",
		"text": "自然精灵族的秘术，可以使身体产生一定程度的免疫能力。\n角色护盾效力增加对手攻防和的3.2倍。"
	},
	"I772": {
		"cls": "items",
		"name": "激流盾",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.def += 1000",
		"itemEffectTip": "，防御+1000"
	},
	"I773": {
		"cls": "items",
		"name": "绿原盾",
		"canUseItemEffect": "true",
		"text": "晒干的干草编织成的盾牌。\n防御+3000。",
		"equip": {
			"type": "装备",
			"value": {
				"def": 3000
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.def += 100",
		"itemEffectTip": "，防御+100"
	},
	"I774": {
		"cls": "items",
		"name": "磐石盾",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.def += 3000",
		"itemEffectTip": "，防御+3000"
	},
	"I775": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I776": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I777": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I778": {
		"cls": "items",
		"name": "守护之盾",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.def += 10000",
		"itemEffectTip": "，防御+10000"
	},
	"I779": {
		"cls": "items",
		"name": "咏唱之盾",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.def += 30000",
		"itemEffectTip": "，防御+30000"
	},
	"I780": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I781": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I782": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I783": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I784": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I785": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I786": {
		"cls": "items",
		"name": "天网盾",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.def += 3000000",
		"itemEffectTip": "，防御+3000000"
	},
	"I787": {
		"cls": "items",
		"name": "精血盾",
		"canUseItemEffect": "true",
		"text": "经由红海异兽的精血淬炼的盾牌。\n防御+72000。",
		"equip": {
			"type": 0,
			"value": {
				"def": 72000
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.def += 300000",
		"itemEffectTip": "，防御+300000"
	},
	"I788": {
		"cls": "items",
		"name": "金痕盾",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.def += 900000",
		"itemEffectTip": "，防御+900000"
	},
	"I789": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I790": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I791": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I792": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I793": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I794": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I795": {
		"cls": "items",
		"name": "瑶池灵环",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mdef += 30000000;\ncore.status.hero.hp += 600000000;",
		"itemEffectTip": "，护盾+3000万，生命+6亿"
	},
	"I796": {
		"cls": "items",
		"name": "轩辕灵环",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mdef += 9000000;\ncore.status.hero.hp += 180000000;",
		"itemEffectTip": "，护盾+900万，生命+1.8亿"
	},
	"I797": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I798": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I799": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I800": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I801": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I802": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I803": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I804": {
		"cls": "tools",
		"name": "能力加成",
		"canUseItemEffect": "true",
		"text": "你曾经所经历的一切，都将化为此后前行的助力。\n每个该道具为角色提供相当于基础属性10%的三围属性。"
	},
	"I805": {
		"cls": "equips",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I820": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I821": {
		"cls": "tools",
		"name": "能力加成",
		"canUseItemEffect": null,
		"text": "你曾经所经历的一切，都将化为此后前行的助力。\n每个该道具为角色提供相当于基础属性的三围数据。",
		"hideInToolbox": true
	},
	"I822": {
		"cls": "constants",
		"name": "离火Ⅱ",
		"canUseItemEffect": "true",
		"text": "火焰术士的必修课，将火属性能量凝聚起来，如臂驱使。\n携带的每把红钥匙都能提供8点火元素能量，每1点火元素能量可提供0.36%攻击力，火元素能量上限为64点。"
	},
	"I823": {
		"cls": "constants",
		"name": "离火Ⅲ",
		"canUseItemEffect": "true",
		"text": "火焰术士的必修课，将火属性能量凝聚起来，如臂驱使。\n携带的每把红钥匙都能提供8点火元素能量，每1点火元素能量可提供0.42%攻击力，火元素能量上限为64点。"
	},
	"I824": {
		"cls": "constants",
		"name": "离火Ⅳ",
		"canUseItemEffect": "true",
		"text": "火焰术士的必修课，将火属性能量凝聚起来，如臂驱使。\n携带的每把红钥匙都能提供8点火元素能量，每1点火元素能量可提供0.42%攻击力，火元素能量上限为80点。"
	},
	"I825": {
		"cls": "constants",
		"name": "离火Ⅴ",
		"canUseItemEffect": "true",
		"text": "火焰术士的必修课，将火属性能量凝聚起来，如臂驱使。\n携带的每把红钥匙都能提供8点火元素能量，每1点火元素能量可提供0.42%攻击力，火元素能量上限为96点。"
	},
	"I826": {
		"cls": "constants",
		"name": "离火Max",
		"canUseItemEffect": "true",
		"text": "火焰术士的必修课，将火属性能量凝聚起来，如臂驱使。\n携带的每把红钥匙都能提供8点火元素能量，每1点火元素能量可提供0.495%攻击力，火元素能量上限为96点。"
	},
	"I827": {
		"cls": "constants",
		"name": "蓝钥匙加成2",
		"canUseItemEffect": "true",
		"text": "水魔法师的拿手技能，控水魔法相对于火更为简单，因为空气中富含水元素。\n携带的每把蓝钥匙都能提供3点水元素能量，每1点水元素能量可提供0.24%防御力，水元素能量上限为90点。",
		"hideInToolbox": true
	},
	"I828": {
		"cls": "constants",
		"name": "坎水Ⅲ",
		"canUseItemEffect": "true",
		"text": "水魔法师的拿手技能，控水魔法相对于火更为简单，因为空气中富含水元素。\n携带的每把蓝钥匙都能提供3点水元素能量，每1点水元素能量可提供0.28%防御力，水元素能量上限为90点。"
	},
	"I829": {
		"cls": "constants",
		"name": "坎水Ⅳ",
		"canUseItemEffect": "true",
		"text": "水魔法师的拿手技能，控水魔法相对于火更为简单，因为空气中富含水元素。\n携带的每把蓝钥匙都能提供3点水元素能量，每1点水元素能量可提供0.28%防御力，水元素能量上限为111点。"
	},
	"I830": {
		"cls": "constants",
		"name": "坎水Ⅴ",
		"canUseItemEffect": "true",
		"text": "水魔法师的拿手技能，控水魔法相对于火更为简单，因为空气中富含水元素。\n携带的每把蓝钥匙都能提供3点水元素能量，每1点水元素能量可提供0.28%防御力，水元素能量上限为132点。"
	},
	"I831": {
		"cls": "constants",
		"name": "坎水Max",
		"canUseItemEffect": "true",
		"text": "水魔法师的拿手技能，控水魔法相对于火更为简单，因为空气中富含水元素。\n携带的每把蓝钥匙都能提供3点水元素能量，每1点水元素能量可提供0.33%防御力，水元素能量上限为132点。"
	},
	"I832": {
		"cls": "constants",
		"name": "预言者Ⅱ",
		"canUseItemEffect": "true",
		"text": "预言者说，在预测未知之物的时候，要做好最坏的打算。\n战前以普攻的情况预知回合数，标记为预知因子，每1点预知因子对敌人造成其生命千分之1.8的伤害，预知因子上限为200。"
	},
	"I833": {
		"cls": "constants",
		"name": "预言者Ⅲ",
		"canUseItemEffect": "true",
		"text": "预言者说，在预测未知之物的时候，要做好最坏的打算。\n战前以普攻的情况预知回合数，标记为预知因子，每1点预知因子对敌人造成其生命千分之2.1的伤害，预知因子上限为200。"
	},
	"I834": {
		"cls": "constants",
		"name": "预言者Ⅳ",
		"canUseItemEffect": "true",
		"text": "预言者说，在预测未知之物的时候，要做好最坏的打算。\n战前以普攻的情况预知回合数，标记为预知因子，每1点预知因子对敌人造成其生命千分之2.1的伤害，预知因子上限为250。"
	},
	"I835": {
		"cls": "constants",
		"name": "预言者Ⅴ",
		"canUseItemEffect": "true",
		"text": "预言者说，在预测未知之物的时候，要做好最坏的打算。\n战前以普攻的情况预知回合数，标记为预知因子，每1点预知因子对敌人造成其生命千分之2.1的伤害，预知因子上限为300。"
	},
	"I836": {
		"cls": "constants",
		"name": "预言者Max",
		"canUseItemEffect": "true",
		"text": "预言者说，在预测未知之物的时候，要做好最坏的打算。\n战前以普攻的情况预知回合数，标记为预知因子，每1点预知因子对敌人造成其生命千分之2.5的伤害，预知因子上限为300。"
	},
	"I837": {
		"cls": "constants",
		"name": "食星术Ⅱ",
		"canUseItemEffect": "true",
		"text": "黑色的巨龙隐匿在漆黑如墨的夜空中，携带着足以吞噬繁星的伟力。\n战斗中，角色三围属性提高对手生命值的百分之1.5。"
	},
	"I838": {
		"cls": "constants",
		"name": "吞食者Ⅲ",
		"canUseItemEffect": "true",
		"text": "神话里未来会有一场灾难降临，吞食殆尽人间的一切。\n战斗中，角色三围属性提高对手生命值的万分之7。"
	},
	"I839": {
		"cls": "constants",
		"name": "吞食者Ⅳ",
		"canUseItemEffect": "true",
		"text": "神话里未来会有一场灾难降临，吞食殆尽人间的一切。\n战斗中，角色三围属性提高对手生命值的万分之8.25。"
	},
	"I840": {
		"cls": "constants",
		"name": "吞食者Ⅴ",
		"canUseItemEffect": "true",
		"text": "神话里未来会有一场灾难降临，吞食殆尽人间的一切。\n战斗中，角色三围属性提高对手生命值的万分之9.5。"
	},
	"I841": {
		"cls": "constants",
		"name": "吞食者Max",
		"canUseItemEffect": "true",
		"text": "神话里未来会有一场灾难降临，吞食殆尽人间的一切。\n战斗中，角色三围属性提高对手生命值的万分之10.75。"
	},
	"I842": {
		"cls": "constants",
		"name": "琉璃灵果Ⅱ",
		"canUseItemEffect": "true",
		"text": "进阶层次的战复术，能够进行战地急救。\n战前恢复相当于对手攻防之和9.6倍的生命，并使每点护盾的效力提升为3.6倍。"
	},
	"I843": {
		"cls": "constants",
		"name": "琉璃灵果Ⅲ",
		"canUseItemEffect": "true",
		"text": "进阶层次的战复术，能够进行战地急救。\n战前恢复相当于对手攻防之和10.8倍的生命，并使每点护盾的效力提升为4.2倍。"
	},
	"I844": {
		"cls": "constants",
		"name": "琉璃灵果Ⅳ",
		"canUseItemEffect": "true",
		"text": "进阶层次的战复术，能够进行战地急救。\n战前恢复相当于对手攻防之和12.8倍的生命，并使每点护盾的效力提升为4.95倍。"
	},
	"I845": {
		"cls": "constants",
		"name": "琉璃灵果Ⅴ",
		"canUseItemEffect": "true",
		"text": "进阶层次的战复术，能够进行战地急救。\n战前恢复相当于对手攻防之和14.8倍的生命，并使每点护盾的效力提升为5.7倍。"
	},
	"I846": {
		"cls": "constants",
		"name": "琉璃灵果Max",
		"canUseItemEffect": "true",
		"text": "进阶层次的战复术，能够进行战地急救。\n战前恢复相当于对手攻防之和16.8倍的生命，并使每点护盾的效力提升为6.45倍。"
	},
	"I847": {
		"cls": "constants",
		"name": "流萤幽火Ⅱ",
		"canUseItemEffect": "true",
		"text": "流萤，幽火。一花一界，一叶一舟。\n每回合以50%的伤害发动三次攻击，并使对方每回合损失最大生命的千分之2.4，生命损失持续100回合。"
	},
	"I848": {
		"cls": "tools",
		"name": "草场",
		"canUseItemEffect": false,
		"text": "完全由反物质组成的星系。",
		"hideInToolbox": true
	},
	"I849": {
		"cls": "constants",
		"name": "唤雨雷暴Ⅳ",
		"canUseItemEffect": "true",
		"text": "技艺纯熟的魔导士的领悟，能影响一定范围内的天气。\n每回合以50%的伤害发动三次攻击（不受超越影响），并使对方每回合损失最大生命的千分之2.8，生命损失持续125回合。"
	},
	"I850": {
		"cls": "constants",
		"name": "唤雨雷暴Ⅴ",
		"canUseItemEffect": "true",
		"text": "技艺纯熟的魔导士的领悟，能影响一定范围内的天气。\n每回合以50%的伤害发动三次攻击（不受超越影响），并使对方每回合损失最大生命的千分之2.8，生命损失持续150回合。"
	},
	"I851": {
		"cls": "constants",
		"name": "唤雨雷暴Max",
		"canUseItemEffect": "true",
		"text": "技艺纯熟的魔导士的领悟，能影响一定范围内的天气。\n每回合以50%的伤害发动三次攻击（不受超越影响），并使对方每回合损失最大生命的千分之3.3，生命损失持续150回合。"
	},
	"I889": {
		"cls": "items",
		"name": "黄泉之水",
		"canUseItemEffect": "true",
		"itemEffect": "core.addItem('I658', 0.05)",
		"itemEffectTip": "，禀赋+0.05x"
	},
	"I890": {
		"cls": "tools",
		"name": "星系储存器",
		"canUseItemEffect": "true",
		"itemEffect": null,
		"itemEffectTip": null,
		"hideInToolbox": true
	},
	"I913": {
		"cls": "constants",
		"name": "无限维度",
		"canUseItemEffect": "true"
	},
	"I914": {
		"cls": "constants",
		"name": "自动清怪开关",
		"canUseItemEffect": "true",
		"text": "和之前不太一样的奇怪标识，好像…可以转动？",
		"useItemEvent": [
			{
				"type": "choices",
				"text": "这里是自动清怪开关！\n为了更流畅的体验，\n建议只在少数情况下关闭它。",
				"choices": [
					{
						"text": "开启自动清怪",
						"color": [
							144,
							191,
							234,
							1
						],
						"action": [
							"自动清怪已开启！",
							{
								"type": "setValue",
								"name": "flag:autoBattle",
								"value": "true"
							}
						]
					},
					{
						"text": "关闭自动清怪",
						"color": [
							237,
							185,
							243,
							1
						],
						"action": [
							"自动清怪已关闭！",
							{
								"type": "setValue",
								"name": "flag:autoBattle",
								"value": "false"
							}
						]
					}
				]
			}
		]
	},
	"I915": {
		"cls": "constants",
		"name": "离开无限世界",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "choices",
				"text": "当你离开世界时，你剩余的反物质将按1:1转化为正物质。\n正物质可以购置你需要的各种资源，\n以让你在下一次重返世界时走得更远。\n你在这个世界中获得的加成也不复存在。\n当然，你也可以选择在此记录成绩。\n当前环绕的星系数量：\n【∞】光暗：${flag:w1}\n【∞】时空：${flag:w2}\n【∞】正邪：${flag:w3}",
				"choices": [
					{
						"text": "离开世界",
						"action": [
							{
								"type": "if",
								"condition": "(flag:wxworld01==0)",
								"true": [
									"你选择了离开世界。\n检测到这是你在无限疆域的第一次探险——\n如果你已经完成了第六次维度提升，那么非常厉害！",
									{
										"type": "if",
										"condition": "(item:I729>=6)",
										"true": [
											"你将得到一次特别的初心者奖励：\n\r[gray]本局游戏正物质翻倍。\r\n加油，天赋异禀的、未来的\r[#EA4444]无限之神\r。",
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "*=",
												"value": "2"
											}
										],
										"false": [
											"如果你做到了这一点，\n你将得到一次特别的初心者奖励：\n\r[gray]本局游戏正物质翻倍。\r",
											"当然，做不到并不会影响大局。\n请尽可能使用更少的绿钥匙来继续无限吧！"
										]
									},
									{
										"type": "setValue",
										"name": "flag:wxworld01",
										"value": "1"
									}
								],
								"false": []
							},
							{
								"type": "insert",
								"loc": [
									1,
									0
								],
								"floorId": "sample2"
							}
						]
					},
					{
						"text": "记录成绩",
						"action": [
							"计分方式为：\n当前维度提升*1e16+当前永恒之匙数量*1e11+当前生命/x。\n1、2、3无限世界，x为1。\n（由于浮点数计算偏差，当前生命较少时，将无法计入）\n若除后生命>9223372036（92.23亿），则超出的部分不计入成绩。",
							{
								"type": "switch",
								"condition": "flag:world",
								"caseList": [
									{
										"case": "1",
										"action": [
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "/=",
												"value": "1"
											},
											{
												"type": "if",
												"condition": "(status:hp>=9223372036)",
												"true": [
													{
														"type": "setValue",
														"name": "status:hp",
														"value": "9223372036"
													}
												],
												"false": []
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "item:I729*1e16+item:greenKey*1e11"
											},
											{
												"type": "win",
												"reason": "【∞】光暗",
												"noexit": 1
											}
										]
									},
									{
										"case": "2",
										"action": [
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "/=",
												"value": "1"
											},
											{
												"type": "if",
												"condition": "(status:hp>=9223372036)",
												"true": [
													{
														"type": "setValue",
														"name": "status:hp",
														"value": "9223372036"
													}
												],
												"false": []
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "item:I729*1e16+item:greenKey*1e11"
											},
											{
												"type": "win",
												"reason": "【∞】时空",
												"noexit": 1
											}
										]
									},
									{
										"case": "3",
										"action": [
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "/=",
												"value": "1"
											},
											{
												"type": "if",
												"condition": "(status:hp>=9223372036)",
												"true": [
													{
														"type": "setValue",
														"name": "status:hp",
														"value": "9223372036"
													}
												],
												"false": []
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "item:I729*1e16+item:greenKey*1e11"
											},
											{
												"type": "win",
												"reason": "【∞】正邪",
												"noexit": 1
											}
										]
									}
								]
							},
							{
								"type": "insert",
								"loc": [
									6,
									3
								],
								"floorId": "sample0"
							}
						]
					},
					{
						"text": "继续游戏",
						"action": []
					}
				]
			}
		],
		"text": "当你离开世界时，你剩余的反物质将按你获得的加成比例转化为正物质。\n初始比例为1:1。"
	},
	"I916": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hp += 32 * Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))",
		"itemEffectTip": "，生命+${32 * Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))}"
	},
	"I917": {
		"cls": "items",
		"name": "超蓝补给品",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hp += 64 * Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))",
		"itemEffectTip": "，生命+${64 * Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))}"
	},
	"I918": {
		"cls": "items",
		"name": "超黄补给品",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hp += 128 * Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))",
		"itemEffectTip": "，生命+${128 * Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))}"
	},
	"I919": {
		"cls": "items",
		"name": "超绿补给品",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.hp += 256 * Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))",
		"itemEffectTip": "，生命+${256 * Math.floor(core.values.greenPotion * core.status.thisMap.ratio * Math.pow(1.4, (core.itemCount(\"I729\"))) * (1 + core.itemCount(\"I607\") + core.itemCount(\"I608\")))}"
	},
	"I920": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I921": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I922": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I923": {
		"cls": "constants",
		"name": "基于无限点数的护盾",
		"canUseItemEffect": "true"
	},
	"I924": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I925": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I926": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I927": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I928": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I929": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I930": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I931": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I932": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I933": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I959": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I960": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I961": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I962": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I963": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I964": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I965": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I966": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I967": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I968": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I969": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I970": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I971": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I972": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I973": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I974": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I975": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I976": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I977": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I978": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I979": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I980": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I981": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I982": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I983": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I984": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I985": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I986": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I987": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I988": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I989": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I990": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I991": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I992": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I993": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I994": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I995": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I996": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I997": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I998": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I999": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1000": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1001": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1002": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1003": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1004": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1005": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1006": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1007": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1008": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1009": {
		"cls": "tools",
		"name": "维度提升系数5",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"I1010": {
		"cls": "tools",
		"name": "维度提升系数2",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"I1011": {
		"cls": "tools",
		"name": "维度提升系数3",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"I1012": {
		"cls": "tools",
		"name": "维度提升系数4",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"I1013": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1014": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1015": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1016": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1017": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1018": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1019": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1020": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1021": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1022": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1023": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1024": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1025": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1026": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1027": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1028": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1029": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1030": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1031": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1032": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1033": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1034": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1035": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1036": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1037": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1038": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1039": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1040": {
		"cls": "items",
		"name": "维度提升系数6",
		"canUseItemEffect": "true"
	},
	"I1041": {
		"cls": "items",
		"name": "维度提升系数7",
		"canUseItemEffect": "true"
	},
	"I1042": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1043": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1044": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1045": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1046": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1047": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1048": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1049": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1050": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1051": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1052": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1053": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1054": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1055": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1056": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1057": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1058": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1059": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1060": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1061": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1062": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1063": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1064": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1065": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1066": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1067": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1068": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1069": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1070": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1071": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1072": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1073": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1074": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1075": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1076": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1077": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1078": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1079": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1080": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1081": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1082": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1083": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1084": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1085": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1086": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1087": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1088": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1089": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1090": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1091": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1092": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1157": {
		"cls": "constants",
		"name": "查看总增益",
		"canUseItemEffect": "true",
		"text": "点击查看各项资源的增益",
		"useItemEvent": [
			"草:${core.formatBigNumber(flag:zczy)}x 经验:${core.formatBigNumber(flag:zjyzy)}x 白金:${core.formatBigNumber(flag:zbjzy)}x\n层点:${core.formatBigNumber(flag:zjczy)}x  充能:${core.formatBigNumber(flag:zcnzy)}x \n阶层效果:经验获取x${core.formatBigNumber(flag:jceff)}\n声望:${core.formatBigNumber(flag:zpzy)} 水晶:${core.formatBigNumber(flag:zsjzy)} 钢铁:${core.formatBigNumber(flag:zgtzy)}\n反草:${core.formatBigNumber(flag:zfczy)}x 反经验:${core.formatBigNumber(flag:zfjyzy)}x"
		]
	},
	"I1160": {
		"cls": "constants",
		"name": "显示资源",
		"canUseItemEffect": "true",
		"text": "点击在页面上显示已解锁的资源",
		"useItemEvent": [
			{
				"type": "choices",
				"text": "点击在页面上显示已解锁资源(从阶段4开始解锁)",
				"choices": [
					{
						"text": "隐藏所有",
						"action": [
							{
								"type": "setValue",
								"name": "flag:xscn",
								"value": "0"
							},
							{
								"type": "setValue",
								"name": "flag:xsgt",
								"value": "0"
							},
							{
								"type": "setValue",
								"name": "flag:xsfc",
								"value": "0"
							},
							{
								"type": "setValue",
								"name": "flag:xsflv",
								"value": "0"
							},
							{
								"type": "clearMap"
							}
						]
					},
					{
						"text": "显示钢铁",
						"condition": "flag:xsgt==0&&flag:jd>=3",
						"action": [
							{
								"type": "setValue",
								"name": "flag:xsgt",
								"value": "1"
							}
						]
					},
					{
						"text": "显示充能",
						"condition": "flag:xscn==0&&flag:gcjd>=3",
						"action": [
							{
								"type": "setValue",
								"name": "flag:xscn",
								"value": "1"
							}
						]
					},
					{
						"text": "显示反草",
						"condition": "flag:xsfc==0&&flag:gcjd>=5",
						"action": [
							{
								"type": "setValue",
								"name": "flag:xsfc",
								"value": "1"
							}
						]
					},
					{
						"text": "显示反等级",
						"condition": "flag:xsflv==0&&flag:gcjd>=5",
						"action": [
							{
								"type": "setValue",
								"name": "flag:xsflv",
								"value": "1"
							}
						]
					},
					{
						"text": "返回",
						"action": []
					}
				]
			}
		]
	}
}