main.floors.Start=
{
    "floorId": "Start",
    "title": "地面",
    "name": "地面",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": 80016,
    "firstArrive": [
        {
            "type": "showStatusBar"
        },
        {
            "type": "setValue",
            "name": "item:book",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "item:fly",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:shop1",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:gcjg",
            "value": "1000"
        },
        {
            "type": "setValue",
            "name": "flag:gu1c",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:gu2c",
            "value": "5"
        },
        {
            "type": "setValue",
            "name": "flag:gu3c",
            "value": "5"
        },
        {
            "type": "setValue",
            "name": "flag:gu4c",
            "value": "100"
        },
        {
            "type": "setValue",
            "name": "flag:gczy",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:pczy",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:gjyzy",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:pjyzy",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:gcfw",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:lvzs",
            "value": "0.44"
        },
        {
            "type": "setValue",
            "name": "flag:zczy",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:zjyzy",
            "value": "1"
        },
        {
            "type": "setText",
            "align": "left",
            "lineHeight": 22
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,0": [
            {
                "type": "choices",
                "text": "\t[草升级]本页面加成\n草：${flag:gczy}x\n经验：${flag:gjyzy}x\n层点：${flag:gjczy}x\n割草间隔：${flag:gcjg}ms\n割草范围：${flag:gcfw}x${flag:gcfw}",
                "choices": [
                    {
                        "text": "割草间隔(${flag:gu1c})",
                        "color": [
                            0,
                            255,
                            34,
                            1
                        ],
                        "condition": "flag:gcjgdj<10",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:money>=flag:gu1c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "flag:gu1c"
                                    },
                                    {
                                        "type": "if",
                                        "condition": "(flag:gcjg<=200)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:gcjg",
                                                "operator": "-=",
                                                "value": "25"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:gcjg",
                                                "operator": "-=",
                                                "value": "200"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gcjgdj",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gu1c",
                                        "value": "(Math.ceil((flag:gu1c*2)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            8,
                                            0
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "草增益(${core.formatBigNumber(flag:gu2c)}) ",
                        "color": [
                            0,
                            255,
                            34,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:money>=flag:gu2c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "flag:gu2c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gczy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gu2c",
                                        "value": "(Math.ceil((flag:gu2c*1.2)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            8,
                                            0
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "经验增益(${core.formatBigNumber(flag:gu3c)}) ",
                        "color": [
                            0,
                            255,
                            34,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:money>=flag:gu3c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "flag:gu3c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gjyzy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gu3c",
                                        "value": "(Math.ceil((flag:gu3c*1.2)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            8,
                                            0
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "割草范围(${core.formatBigNumber(flag:gu4c)}) ",
                        "color": [
                            0,
                            255,
                            34,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:money>=flag:gu4c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "flag:gu4c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gcfw",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gu4c",
                                        "value": "(Math.ceil((flag:gu4c*2.5)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            8,
                                            0
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "层点增益(${core.formatBigNumber(flag:gu5c)}) ",
                        "color": [
                            0,
                            255,
                            34,
                            1
                        ],
                        "condition": "flag:jd>=2",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:money>=flag:gu5c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "flag:gu5c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gjczy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gu5c",
                                        "value": "(Math.ceil((flag:gu5c*2.1)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            8,
                                            0
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "color": [
                            255,
                            255,
                            255,
                            1
                        ],
                        "action": []
                    }
                ]
            }
        ],
        "5,0": [
            {
                "type": "if",
                "condition": "((flag:auto>=2)&&(flag:zd2<7))",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[自动化2]消耗白金",
                        "choices": [
                            {
                                "text": "自动购买第一个声望升级(25000)",
                                "need": "status:mana>=25000",
                                "condition": "flag:zdpu1==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "25000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdpu1",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd2",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第二个声望升级(25000)",
                                "need": "status:mana>=25000",
                                "condition": "flag:zdpu2==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "25000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdpu2",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd2",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第三个声望升级(25000)",
                                "need": "status:mana>=25000",
                                "condition": "flag:zdpu3==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "25000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdpu3",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd2",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第四个声望升级(25000)",
                                "need": "status:mana>=25000",
                                "condition": "flag:zdpu4==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "25000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdpu4",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd2",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第五个声望升级(25000)",
                                "need": "status:mana>=25000",
                                "condition": "flag:zdpu5==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "25000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdpu5",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd2",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第五个草升级(25000)",
                                "need": "status:mana>=25000",
                                "condition": "flag:zdgu5==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "25000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdgu5",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd2",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "每秒自动获得100%的声望(2e5)",
                                "need": "status:mana>=200000",
                                "condition": "flag:pp==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "200000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pp",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd2",
                                        "operator": "+=",
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
            },
            {
                "type": "if",
                "condition": "((flag:auto>=1)&&(flag:zd1<6))",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[自动化1]消耗白金",
                        "choices": [
                            {
                                "text": "初始保留50ms割草间隔(500)",
                                "need": "status:mana>=500",
                                "condition": "flag:blgcjg==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "500"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:blgcjg",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd1",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第二个草升级(250)",
                                "need": "status:mana>=250",
                                "condition": "flag:zdgu2==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "250"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdgu2",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd1",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第三个草升级(250)",
                                "need": "status:mana>=250",
                                "condition": "flag:zdgu3==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "250"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdgu3",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd1",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第四个草升级(250)",
                                "need": "status:mana>=250",
                                "condition": "flag:zdgu4==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "250"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdgu4",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd1",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "每秒自动获得2000%的草(2000)",
                                "need": "status:mana>=2000",
                                "condition": "flag:gp==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "2000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:gp",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd1",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "每秒自动获得2000%的经验(2000)",
                                "need": "status:mana>=2000",
                                "condition": "flag:expp==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "2000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:expp",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zd1",
                                        "operator": "+=",
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
        ],
        "1,1": [
            {
                "type": "if",
                "condition": "(flag:auto>=1)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[白金升级1]所有升级消耗10白金\n白金加成\n草：${(Math.floor((flag:bjczy)*100)/100)}x\n经验：${(Math.floor((flag:bjjyzy)*100)/100)}x\n声望：${(Math.floor((flag:bjpzy)*100)/100)}x",
                        "choices": [
                            {
                                "text": "草增益增加5%",
                                "need": "status:mana>=10",
                                "condition": "flag:bjczy<5",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "10"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjczy",
                                        "operator": "+=",
                                        "value": "0.05"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjczy",
                                        "value": "(Math.min(flag:bjczy,5))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "经验增益增加5%",
                                "need": "status:mana>=10",
                                "condition": "flag:bjjyzy<5",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "10"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjjyzy",
                                        "operator": "+=",
                                        "value": "0.05"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjjyzy",
                                        "value": "(Math.min(flag:bjjyzy,5))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "声望增益增加5%",
                                "need": "status:mana>=10",
                                "condition": "flag:bjpzy<5",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "10"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjpzy",
                                        "operator": "+=",
                                        "value": "0.05"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjpzy",
                                        "value": "(Math.min(flag:bjpzy,5))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ]
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
        ],
        "3,1": [
            {
                "type": "if",
                "condition": "(flag:gcjd>=5)",
                "true": [
                    "解锁隐匿后开启\n隐匿会重置反草，反经验，反草升级\n隐匿基础获取:(反等级-29)^${core.getFlag('fpexp',1)}\n当前:${Math.max(core.getFlag('flv',1)-29,0)}^${core.getFlag('fpexp',1)}\n至少需要30反等级\n(声望基础获取:(等级-29)^${core.getFlag('pexp',1)}\n当前:${Math.max(status:hp-29,0)}^${core.getFlag('pexp',1)})"
                ],
                "false": [
                    "解锁声望后开启\n声望会重置草，经验，草升级\n基础获取:(等级-29)^${core.getFlag('pexp',1)}\n当前:${Math.max(status:hp-29,0)}^${core.getFlag('pexp',1)}\n至少需要30等级"
                ]
            }
        ],
        "9,1": [
            "解锁水晶后开启\n水晶进行1次声望重置\n加上重置声望，声望升级\n基础获取:{[(等级-97)/3]*[log2(声望/5000)]}^${core.getFlag('sjexp',0.5)}\n当前:(${Math.floor(core.getFlag('lvsjzy',0)*10000)/10000}*${Math.floor(core.getFlag('pzsjzy',0)*10000)/10000})^${core.getFlag('sjexp',0.5)}\n至少要100等级和1e4声望"
        ],
        "6,7": [
            "打开背包查看"
        ],
        "10,1": [
            {
                "type": "choices",
                "text": "\t[声望升级]基础获取：${core.formatBigNumber(Math.floor(Math.pow(flag:lvsjzy*flag:pzsjzy,flag:sjexp)*10000)/10000)}(基于等级,声望）\n本页面加成\n草和经验：${flag:sjczy}x 声望：${flag:sjpzy}x\n水晶：${flag:sjsjzy}x 白金：${flag:sjbjzy}x\n层点：${flag:sjjczy}x",
                "choices": [
                    {
                        "text": "重置(+${core.formatBigNumber(flag:zsjzy)})",
                        "color": [
                            141,
                            0,
                            255,
                            1
                        ],
                        "need": "status:hp>=100&&status:def>=10000",
                        "action": [
                            {
                                "type": "insert",
                                "name": "水晶重置"
                            },
                            {
                                "type": "setValue",
                                "name": "status:mdef",
                                "operator": "+=",
                                "value": "flag:zsjzy"
                            }
                        ]
                    },
                    {
                        "text": "草和经验增益(${core.formatBigNumber(flag:sju1c)}) ",
                        "color": [
                            141,
                            0,
                            255,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:mdef>=flag:sju1c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mdef",
                                        "operator": "-=",
                                        "value": "flag:sju1c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjczy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjjyzy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sju1c",
                                        "value": "(Math.ceil((flag:sju1c*1.4)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            10,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "层点增益(${core.formatBigNumber(flag:sju2c)}) ",
                        "color": [
                            141,
                            0,
                            255,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:mdef>=flag:sju2c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mdef",
                                        "operator": "-=",
                                        "value": "flag:sju2c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjjczy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sju2c",
                                        "value": "(Math.ceil((flag:sju2c*1.4)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            10,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "声望增益(${core.formatBigNumber(flag:sju3c)}) ",
                        "color": [
                            141,
                            0,
                            255,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:mdef>=flag:sju3c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mdef",
                                        "operator": "-=",
                                        "value": "flag:sju3c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjpzy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sju3c",
                                        "value": "(Math.ceil((flag:sju3c*1.8)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            10,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "白金增益(${core.formatBigNumber(flag:sju4c)}) ",
                        "color": [
                            141,
                            0,
                            255,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:mdef>=flag:sju4c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mdef",
                                        "operator": "-=",
                                        "value": "flag:sju4c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjbjzy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sju4c",
                                        "value": "(Math.ceil((flag:sju4c*1.8)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            10,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "水晶增益(${core.formatBigNumber(flag:sju5c)}) ",
                        "color": [
                            141,
                            0,
                            255,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:mdef>=flag:sju5c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mdef",
                                        "operator": "-=",
                                        "value": "flag:sju5c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjsjzy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sju5c",
                                        "value": "(Math.ceil((flag:sju5c*2)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            10,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "解锁新的东西（100）",
                        "color": [
                            141,
                            0,
                            255,
                            1
                        ],
                        "condition": "flag:auto<2",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:mdef>=100)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mdef",
                                        "operator": "-=",
                                        "value": "100"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:auto",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjsjzy",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjjczy",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "N1121",
                                        "loc": [
                                            [
                                                11,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "N1125",
                                        "loc": [
                                            [
                                                12,
                                                1
                                            ]
                                        ]
                                    },
                                    "解锁了新的自动化和白金升级，水晶挑战",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            10,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "阶层的效果变得更好（1e4，永久保留）",
                        "color": [
                            141,
                            0,
                            255,
                            1
                        ],
                        "condition": "flag:auto>=2&&flag:jcgh==0",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:mdef>=10000)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mdef",
                                        "operator": "-=",
                                        "value": "10000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:jcgh",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:jceffexp",
                                        "value": "1.75"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "color": [
                            255,
                            255,
                            255,
                            1
                        ],
                        "action": []
                    }
                ]
            }
        ],
        "4,0": [
            {
                "type": "choices",
                "text": "游戏阶段指示",
                "choices": [
                    {
                        "text": "查看当前阶段",
                        "action": [
                            {
                                "type": "switch",
                                "condition": "flag:jd",
                                "caseList": [
                                    {
                                        "case": "5",
                                        "action": [
                                            "阶段6：减速器\n减速会减慢时间并显著降低产量，你可以基于普通草和经验的数量获得反草和反经验，初始解锁反草升级，所有的反升级也会影响的正常的产量（例如反草升级的反草增益也加成草，但是其他地方的反草增益不会）"
                                        ]
                                    },
                                    {
                                        "case": "4",
                                        "action": [
                                            "阶段5：钢铁\n钢铁会进行与草场相当的重置，在这里会解锁工厂，可以购买建筑物，每个建筑物会有新的东西\n解锁减速器进入第三部分"
                                        ]
                                    },
                                    {
                                        "case": "3",
                                        "action": [
                                            "阶段4：草场\n草场是一个大重置，会解锁草场里程碑，极大加成之前资源的获取\n你可以将资源显示在屏幕中间了\n到10草场进入第二部分"
                                        ]
                                    },
                                    {
                                        "case": "2",
                                        "action": [
                                            "阶段3：水晶&挑战\n水晶会重置之前的所有，在第一次重置之后解锁阶层（需要层点，割草获取），它能增加经验获取，且在本层级不会被重置\n进入挑战会获得限制并重置该层，但是完成后也能获得奖励"
                                        ]
                                    },
                                    {
                                        "case": "1",
                                        "action": [
                                            "阶段2：首次重置\n声望是第一个重置，它会重置你之前的所有东西，根据等级获得声望\n从现在开始，你每次割草都会获得1基础白金\n还可以解锁自动化，帮助你解放双手"
                                        ]
                                    },
                                    {
                                        "case": "0",
                                        "action": [
                                            "阶段1：旅程的开始  \n你可以割草获取草和经验，草生长需要一段时间，升级以解锁更多内容\n当前割草范围只加成草，层点是后面的内容"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "解锁声望（30等级）",
                        "color": [
                            0,
                            179,
                            255,
                            1
                        ],
                        "need": "status:hp>=30",
                        "condition": "flag:jd==0",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:jd",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:ppzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pexp",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pbjzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pu1c",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pu2c",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pu3c",
                                "value": "3"
                            },
                            "解锁了声望区域",
                            "阶段2：首次重置\n声望是第一个重置，它会重置你之前的所有东西，根据等级获得声望\n从现在开始，你每次割草都会获得1基础白金\n还可以解锁自动化，帮助你解放双手",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        3,
                                        2
                                    ]
                                ],
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "解锁水晶（100等级）",
                        "color": [
                            188,
                            0,
                            255,
                            1
                        ],
                        "need": "status:hp>=100",
                        "condition": "flag:jd==1",
                        "_collapsed": true,
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:jc",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:jceff",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:jceffexp",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:jcjy",
                                "value": "10"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:jczs",
                                "value": "0.8"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:jd",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sjexp",
                                "value": "0.5"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sju1c",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sju2c",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sju3c",
                                "value": "2"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sju4c",
                                "value": "3"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sju5c",
                                "value": "5"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:gu5c",
                                "value": "1e+10"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pu5c",
                                "value": "1000"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:gjczy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pjczy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sjjczy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:zjczy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sjczy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sjpzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sjsjzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sjbjzy",
                                "value": "1"
                            },
                            "解锁了水晶区域",
                            "阶段3：水晶&挑战\n水晶会重置之前的所有，在第一次重置之后解锁阶层（需要层点，割草获取），它能增加经验获取，且在本层级不会被重置\n进入挑战会获得限制并重置该层，但是完成后也能获得奖励",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        9,
                                        2
                                    ]
                                ],
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "解锁草场（300等级）",
                        "color": [
                            236,
                            208,
                            246,
                            1
                        ],
                        "need": "status:hp>=300",
                        "condition": "flag:jd==2",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:jd",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:nextcc",
                                "value": "300"
                            },
                            "解锁了草场区域",
                            "阶段4：草场\n草场是一个大重置，会解锁草场里程碑，极大加成之前资源的获取\n你可以将资源显示在屏幕中间了\n到10草场进入第二部分",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        3,
                                        6
                                    ]
                                ],
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "解锁钢铁（400等级&10草场）",
                        "color": [
                            236,
                            208,
                            246,
                            1
                        ],
                        "need": "status:hp>=400&&item:I848>=10",
                        "condition": "flag:jd==3",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:jd",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:ggtzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pgtzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sjgtzy",
                                "value": "1"
                            },
                            "解锁了钢铁区域",
                            "阶段5：钢铁\n钢铁会进行与草场相当的重置，在这里会解锁工厂，可以购买建筑物，每个建筑物会有新的东西\n解锁减速器进入第三部分",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "setBlock",
                                "number": "N1113",
                                "loc": [
                                    [
                                        2,
                                        5
                                    ]
                                ]
                            },
                            "还解锁了前2个草场挑战",
                            "你可以把一些子资源显示在屏幕的中间了（点击背包查看）",
                            {
                                "type": "setValue",
                                "name": "item:I1160",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "(flag:auto>=2)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[白金升级2]所有升级消耗1000白金\n白金加成\n草：${(Math.floor((flag:bjczy)*100)/100)}x\n经验：${(Math.floor((flag:bjjyzy)*100)/100)}x\n层点：${(Math.floor((flag:bjjczy)*100)/100)}x\n声望：${(Math.floor((flag:bjpzy)*100)/100)}x\n水晶：${(Math.floor((flag:bjsjzy)*100)/100)}x",
                        "choices": [
                            {
                                "text": "草增益增加50%",
                                "need": "status:mana>=1000",
                                "condition": "flag:bjczy<50",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "1000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjczy",
                                        "operator": "+=",
                                        "value": "0.5"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjczy",
                                        "value": "(Math.min(flag:bjczy,50))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            11,
                                            1
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "经验增益增加50%",
                                "need": "status:mana>=1000",
                                "condition": "flag:bjjyzy<50",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "1000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjjyzy",
                                        "operator": "+=",
                                        "value": "0.5"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjjyzy",
                                        "value": "(Math.min(flag:bjjyzy,50))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            11,
                                            1
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "层点增益增加5%",
                                "need": "status:mana>=1000",
                                "condition": "flag:bjjczy<5",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "1000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjjczy",
                                        "operator": "+=",
                                        "value": "0.05"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjjczy",
                                        "value": "(Math.min(flag:bjjczy,5))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            11,
                                            1
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "声望增益增加50%",
                                "need": "status:mana>=1000",
                                "condition": "flag:bjpzy<50",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "1000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjpzy",
                                        "operator": "+=",
                                        "value": "0.5"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjpzy",
                                        "value": "(Math.min(flag:bjpzy,50))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            11,
                                            1
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "水晶增益增加5%",
                                "need": "status:mana>=1000",
                                "condition": "flag:bjsjzy<5",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "1000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjsjzy",
                                        "operator": "+=",
                                        "value": "0.05"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjsjzy",
                                        "value": "(Math.min(flag:bjsjzy,5))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            11,
                                            1
                                        ]
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
        ],
        "12,1": [
            {
                "type": "if",
                "condition": "(flag:auto>=2)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(((flag:jrcctz1===1)||(flag:jrcctz2===1))||(flag:jrcctz3===1))",
                        "true": [
                            "您当前处于草场挑战中"
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "((flag:jrsjtz1===1)||((flag:jrsjtz2===1)||(flag:jrsjtz3===1)))",
                                "true": [
                                    {
                                        "type": "choices",
                                        "text": "\t[水晶挑战]进入后进行水晶重置\n目标：(100+完成次数*15)等级\n挑战1：等级要求更昂贵\n挑战2：草,经验增益^0.8\n挑战3：你无法获得声望\n奖励：经验获取x${flag:sjtz1+1}\n草获取x${flag:sjtz2+1}\n声望获取指数+${flag:sjtz3/10}",
                                        "choices": [
                                            {
                                                "text": "级别折算(${flag:sjtz1}/5)",
                                                "color": [
                                                    160,
                                                    0,
                                                    255,
                                                    1
                                                ],
                                                "action": [
                                                    {
                                                        "type": "insert",
                                                        "name": "水晶重置"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz1",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:lvzs",
                                                        "value": "0.48"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:sjtzmb",
                                                        "value": "(100+(flag:sjtz1*15))"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "资源减少(${flag:sjtz2}/5)",
                                                "color": [
                                                    160,
                                                    0,
                                                    255,
                                                    1
                                                ],
                                                "action": [
                                                    {
                                                        "type": "insert",
                                                        "name": "水晶重置"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz2",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:sjtzmb",
                                                        "value": "(100+(flag:sjtz2*15))"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "重置禁制(${flag:sjtz3}/5)",
                                                "color": [
                                                    160,
                                                    0,
                                                    255,
                                                    1
                                                ],
                                                "action": [
                                                    {
                                                        "type": "insert",
                                                        "name": "水晶重置"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz3",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:sjtzmb",
                                                        "value": "(100+(flag:sjtz3*15))"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "完成挑战",
                                                "color": [
                                                    160,
                                                    0,
                                                    255,
                                                    1
                                                ],
                                                "condition": "(status:hp>=flag:sjtzmb)&&(flag:jrsjtz1==1||flag:jrsjtz2==1||flag:jrsjtz3==1)",
                                                "action": [
                                                    {
                                                        "type": "if",
                                                        "condition": "((flag:jrsjtz1===1)&&(status:hp>=flag:sjtzmb))",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:sjtz1",
                                                                "operator": "+=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:sjtz1",
                                                                "operator": "min=",
                                                                "value": "5"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "if",
                                                        "condition": "((flag:jrsjtz2===1)&&(status:hp>=flag:sjtzmb))",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:sjtz2",
                                                                "operator": "+=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:sjtz2",
                                                                "operator": "min=",
                                                                "value": "5"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "if",
                                                        "condition": "((flag:jrsjtz3===1)&&(status:hp>=flag:sjtzmb))",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:sjtz3",
                                                                "operator": "+=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:sjtz3",
                                                                "operator": "min=",
                                                                "value": "5"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:pexp",
                                                                "value": "(1+(flag:sjtz3*0.1))"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:pexp",
                                                                "value": "((Math.floor((flag:pexp*10)))/10)"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:pexp",
                                                                "operator": "min=",
                                                                "value": "1.5"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "if",
                                                        "condition": "(flag:jrsjtz1===1)",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:lvzs",
                                                                "value": "0.45"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz1",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz2",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz3",
                                                        "value": "0"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "退出挑战(目标:${flag:sjtzmb}等级)",
                                                "color": [
                                                    160,
                                                    0,
                                                    255,
                                                    1
                                                ],
                                                "condition": "flag:jrsjtz1==1||flag:jrsjtz2==1||flag:jrsjtz3==1",
                                                "action": [
                                                    {
                                                        "type": "if",
                                                        "condition": "(flag:jrsjtz1===1)",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:lvzs",
                                                                "value": "0.45"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz1",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz2",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz3",
                                                        "value": "0"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "返回",
                                                "color": [
                                                    233,
                                                    227,
                                                    237,
                                                    1
                                                ],
                                                "action": []
                                            }
                                        ]
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "choices",
                                        "text": "\t[水晶挑战]进入后进行水晶重置\n目标：(100+完成次数*15)等级\n挑战1：等级要求更昂贵\n挑战2：草,经验增益^0.8\n挑战3：你无法获得声望\n奖励：经验获取x${flag:sjtz1+1}\n草获取x${flag:sjtz2+1}\n声望获取指数+${flag:sjtz3/10}",
                                        "choices": [
                                            {
                                                "text": "级别折算(${flag:sjtz1}/5)",
                                                "color": [
                                                    160,
                                                    0,
                                                    255,
                                                    1
                                                ],
                                                "action": [
                                                    {
                                                        "type": "insert",
                                                        "name": "水晶重置"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz1",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:lvzs",
                                                        "value": "0.48"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:sjtzmb",
                                                        "value": "(100+(flag:sjtz1*15))"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "资源减少(${flag:sjtz2}/5)",
                                                "color": [
                                                    160,
                                                    0,
                                                    255,
                                                    1
                                                ],
                                                "action": [
                                                    {
                                                        "type": "insert",
                                                        "name": "水晶重置"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz2",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:sjtzmb",
                                                        "value": "(100+(flag:sjtz2*15))"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "重置禁制(${flag:sjtz3}/5)",
                                                "color": [
                                                    160,
                                                    0,
                                                    255,
                                                    1
                                                ],
                                                "action": [
                                                    {
                                                        "type": "insert",
                                                        "name": "水晶重置"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz3",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:sjtzmb",
                                                        "value": "(100+(flag:sjtz3*15))"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "完成挑战",
                                                "color": [
                                                    160,
                                                    0,
                                                    255,
                                                    1
                                                ],
                                                "condition": "(status:hp>=flag:sjtzmb)&&(flag:jrsjtz1==1||flag:jrsjtz2==1||flag:jrsjtz3==1)",
                                                "action": [
                                                    {
                                                        "type": "if",
                                                        "condition": "((flag:jrsjtz1===1)&&(status:hp>=flag:sjtzmb))",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:sjtz1",
                                                                "operator": "+=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:sjtz1",
                                                                "operator": "min=",
                                                                "value": "5"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "if",
                                                        "condition": "((flag:jrsjtz2===1)&&(status:hp>=flag:sjtzmb))",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:sjtz2",
                                                                "operator": "+=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:sjtz2",
                                                                "operator": "min=",
                                                                "value": "5"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "if",
                                                        "condition": "((flag:jrsjtz3===1)&&(status:hp>=flag:sjtzmb))",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:sjtz3",
                                                                "operator": "+=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:sjtz3",
                                                                "operator": "min=",
                                                                "value": "5"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:pexp",
                                                                "value": "(1+(flag:sjtz3*0.1))"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:pexp",
                                                                "value": "((Math.floor((flag:pexp*10)))/10)"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:pexp",
                                                                "operator": "min=",
                                                                "value": "1.5"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "if",
                                                        "condition": "(flag:jrsjtz1===1)",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:lvzs",
                                                                "value": "0.45"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz1",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz2",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz3",
                                                        "value": "0"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "退出挑战",
                                                "color": [
                                                    160,
                                                    0,
                                                    255,
                                                    1
                                                ],
                                                "condition": "flag:jrsjtz1==1||flag:jrsjtz2==1||flag:jrsjtz3==1",
                                                "action": [
                                                    {
                                                        "type": "if",
                                                        "condition": "(flag:jrsjtz1===1)",
                                                        "true": [
                                                            {
                                                                "type": "setValue",
                                                                "name": "flag:lvzs",
                                                                "value": "0.45"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz1",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz2",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:jrsjtz3",
                                                        "value": "0"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "返回",
                                                "color": [
                                                    233,
                                                    227,
                                                    237,
                                                    1
                                                ],
                                                "action": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "0,1": [
            {
                "type": "choices",
                "text": "\t[声望升级]基础获取：${core.formatBigNumber(Math.floor(flag:lvpzy*10000)/10000)}(基于等级）\n本页面加成\n草：${flag:pczy}x\n经验：${flag:pjyzy}x\n声望：${flag:ppzy}x\n白金：${flag:pbjzy}x",
                "choices": [
                    {
                        "text": "重置(+${core.formatBigNumber(flag:zpzy)})",
                        "color": [
                            0,
                            243,
                            255,
                            1
                        ],
                        "need": "status:hp>=30",
                        "action": [
                            {
                                "type": "insert",
                                "name": "声望重置"
                            },
                            {
                                "type": "setValue",
                                "name": "status:def",
                                "operator": "+=",
                                "value": "flag:zpzy"
                            }
                        ]
                    },
                    {
                        "text": "草增益(${core.formatBigNumber(flag:pu1c)}) ",
                        "color": [
                            0,
                            255,
                            203,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:def>=flag:pu1c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "operator": "-=",
                                        "value": "flag:pu1c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pczy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pu1c",
                                        "value": "(Math.ceil((flag:pu1c*1.25)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "经验增益(${core.formatBigNumber(flag:pu2c)}) ",
                        "color": [
                            0,
                            255,
                            203,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:def>=flag:pu2c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "operator": "-=",
                                        "value": "flag:pu2c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pjyzy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pu2c",
                                        "value": "(Math.ceil((flag:pu2c*1.25)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "声望增益(${core.formatBigNumber(flag:pu3c)}) ",
                        "color": [
                            0,
                            255,
                            203,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:def>=flag:pu3c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "operator": "-=",
                                        "value": "flag:pu3c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:ppzy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pu3c",
                                        "value": "(Math.ceil((flag:pu3c*1.5)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "白金增益(${core.formatBigNumber(flag:pu4c)}) ",
                        "color": [
                            0,
                            255,
                            203,
                            1
                        ],
                        "condition": "flag:auto>=1",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:def>=flag:pu4c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "operator": "-=",
                                        "value": "flag:pu4c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pbjzy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pu4c",
                                        "value": "(Math.ceil((flag:pu4c*2)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "层点增益(${core.formatBigNumber(flag:pu5c)}) ",
                        "color": [
                            0,
                            255,
                            203,
                            1
                        ],
                        "condition": "flag:jd>=2",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:def>=flag:pu5c)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "operator": "-=",
                                        "value": "flag:pu5c"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pjczy",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pu5c",
                                        "value": "(Math.ceil((flag:pu5c*1.3)))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "解锁自动化和白金升级（100）",
                        "color": [
                            0,
                            255,
                            203,
                            1
                        ],
                        "condition": "flag:auto<1",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:def>=100)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "operator": "-=",
                                        "value": "100"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:auto",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pu4c",
                                        "value": "100"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjczy",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjjyzy",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjpzy",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "N659",
                                        "loc": [
                                            [
                                                5,
                                                0
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "N707",
                                        "loc": [
                                            [
                                                1,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "color": [
                            255,
                            255,
                            255,
                            1
                        ],
                        "action": []
                    }
                ]
            }
        ],
        "3,5": [
            "解锁草场后开启\n草场会重置水晶，水晶升级，水晶挑战，前2组自动化和白金升级\n以及进行一次水晶重置\n下一个草场需要${core.getFlag('nextcc',300)}等级\n草场之前资源包括草，经验，层点，声望，水晶"
        ],
        "0,5": [
            {
                "type": "choices",
                "text": "\t[草场页面]下一个草场需要${core.getFlag('nextcc',300)}等级\n里程碑需要达到对应草场才能生效",
                "choices": [
                    {
                        "text": "获得草场",
                        "need": "status:hp>=flag:nextcc",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "item:I848",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "insert",
                                "name": "草场重置"
                            },
                            {
                                "type": "if",
                                "condition": "(item:I848===1)",
                                "true": [
                                    {
                                        "type": "setBlock",
                                        "number": "N1093",
                                        "loc": [
                                            [
                                                1,
                                                5
                                            ]
                                        ],
                                        "floorId": "Start"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:ccauto",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "type": "if",
                                "condition": "(item:I848===14)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:fdju3c",
                                        "value": "1e+11"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:fdju4c",
                                        "value": "1e+7"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "查看里程碑",
                        "color": [
                            0,
                            255,
                            203,
                            1
                        ],
                        "action": [
                            "1 获得${core.itemCount(\"I848\")*4+1}x更多的草,解锁更多自动化\n白金价值x10\n2 获得${core.itemCount(\"I848\")*4+1}x更多的经验 \n3 获得${core.itemCount(\"I848\")*4+1}x更多的层点\n4 白金价值+${Math.max(core.itemCount(\"I848\")-2,0)}(从3草场开始),解锁更多自动化\n5 在草场上保留水晶挑战 \n6 白金几率x2\n7 阶层效果+^0.25\n10 你可以在进度处解锁钢铁,草场不重置白金升级\n14 解锁2个发电机升级\n15 充能增益x${Math.max(core.itemCount(\"I848\")-13,1)}(从14草场开始) \n18 充能奖励变得更好\n20 充能奖励变得更好\n24 充能奖励基于草场变得更好"
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
            }
        ],
        "1,5": [
            {
                "type": "if",
                "condition": "(flag:ccauto>=1)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[草场自动化]消耗白金",
                        "choices": [
                            {
                                "text": "返回",
                                "action": []
                            },
                            {
                                "text": "自动购买第一个水晶升级(2e4)",
                                "color": [
                                    254,
                                    0,
                                    255,
                                    1
                                ],
                                "need": "status:mana>=20000",
                                "condition": "flag:zdsju1==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "20000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdsju1",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第二个水晶升级(2e4)",
                                "color": [
                                    254,
                                    0,
                                    255,
                                    1
                                ],
                                "need": "status:mana>=20000",
                                "condition": "flag:zdsju2==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "20000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdsju2",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第三个水晶升级(2e4)",
                                "color": [
                                    254,
                                    0,
                                    255,
                                    1
                                ],
                                "need": "status:mana>=20000",
                                "condition": "flag:zdsju3==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "20000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdsju3",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第四个水晶升级(2e4)",
                                "color": [
                                    254,
                                    0,
                                    255,
                                    1
                                ],
                                "need": "status:mana>=20000",
                                "condition": "flag:zdsju4==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "20000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdsju4",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "自动购买第五个水晶升级(2e4)",
                                "color": [
                                    254,
                                    0,
                                    255,
                                    1
                                ],
                                "need": "status:mana>=20000",
                                "condition": "flag:zdsju5==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "20000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:zdsju5",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "草场重置时保留自动化1(5e4)",
                                "need": "status:mana>=50000",
                                "condition": "flag:blzd1==0",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "50000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:blzd1",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "草场重置时保留自动化2(1e5)",
                                "need": "status:mana>=100000",
                                "condition": "flag:blzd2==0&&flag:blzd1==1",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "100000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:blzd2",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "每秒自动获得100%的水晶(5e5)",
                                "need": "status:mana>=500000",
                                "condition": "flag:sjpp==0&&item:I848>=4",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "500000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:sjpp",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "每秒自动获得2000%的层点(5e5)",
                                "need": "status:mana>=500000",
                                "condition": "flag:jcpp==0&&item:I848>=4",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "500000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:jcpp",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "每秒自动获得2000%的白金(0)",
                                "condition": "flag:bjpp==0&&item:I848>=4",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjpp",
                                        "value": "1"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,5": [
            "解锁钢铁后开启\n钢铁会进行1次草场重置\n基础获取:(草^0.3*水晶^0.65)/1e10\n当前:${core.formatBigNumber(Math.pow(core.getRealStatus('money'),0.3))}*${core.formatBigNumber(Math.pow(core.getRealStatus('mdef'),0.65))}/1e10=${core.formatBigNumber(Math.pow(core.getRealStatus('money'),0.3))*core.formatBigNumber(Math.pow(core.getRealStatus('mdef'),0.65))/1e10}\n至少要400等级"
        ],
        "10,5": [
            {
                "type": "choices",
                "text": "\t[工厂]你拥有:${core.formatBigNumber(Math.floor(flag:gt))}钢铁\n基础获取：${core.formatBigNumber(Math.floor(flag:ggtzy*flag:sjgtzy*10000)/1e+14)}(基于草，水晶）",
                "choices": [
                    {
                        "text": "重置(+${core.formatBigNumber(flag:zgtzy)})",
                        "color": [
                            195,
                            228,
                            230,
                            1
                        ],
                        "need": "status:hp>=400",
                        "_collapsed": true,
                        "action": [
                            {
                                "type": "insert",
                                "name": "草场重置"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:gt",
                                "operator": "+=",
                                "value": "flag:zgtzy"
                            }
                        ]
                    },
                    {
                        "text": "铸造厂（1）",
                        "color": [
                            195,
                            228,
                            230,
                            1
                        ],
                        "need": "flag:gt>=1",
                        "condition": "flag:gcjd==0",
                        "_collapsed": true,
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:gt",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:ggtzy1",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pgtzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:gtgtzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:zzcu1c",
                                "value": "1e+17"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:zzcu2c",
                                "value": "1e+11"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:zzcu3c",
                                "value": "5"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:gcjd",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setBlock",
                                "number": "N1158",
                                "loc": [
                                    [
                                        11,
                                        5
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "text": "发电机（25）",
                        "color": [
                            195,
                            228,
                            230,
                            1
                        ],
                        "need": "flag:gt>=25",
                        "condition": "flag:gcjd==1",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:gcjd",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:gt",
                                "operator": "-=",
                                "value": "25"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:fdju1c",
                                "value": "5"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:fdju2c",
                                "value": "5"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:fdju3c",
                                "value": "1e+11"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:fdju3c",
                                "value": "1e+7"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:gtpzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:gtsjzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:pcnzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:sjcnzy",
                                "value": "1"
                            },
                            {
                                "type": "setBlock",
                                "number": "N1159",
                                "loc": [
                                    [
                                        12,
                                        5
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "text": "充能塔（500）",
                        "color": [
                            195,
                            228,
                            230,
                            1
                        ],
                        "need": "flag:gt>=500",
                        "condition": "flag:gcjd==2",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:gt",
                                "operator": "-=",
                                "value": "500"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:gcjd",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:cnll",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:cn",
                                "value": "0"
                            },
                            {
                                "type": "setBlock",
                                "number": "N1148",
                                "loc": [
                                    [
                                        10,
                                        7
                                    ]
                                ]
                            },
                            "你还解锁了草场挑战3"
                        ]
                    },
                    {
                        "text": "汇编器（1e4）",
                        "color": [
                            195,
                            228,
                            230,
                            1
                        ],
                        "need": "flag:gt>=10000",
                        "condition": "flag:gcjd==3",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:gt",
                                "operator": "-=",
                                "value": "10000"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:gcjd",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:hbqu1c",
                                "value": "344"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:hbqu2c",
                                "value": "353"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:hbqu3c",
                                "value": "321"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:hbqu4c",
                                "value": "308"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:hbqu5c",
                                "value": "113"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:hbqu6c",
                                "value": "104"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:hbqczy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:hbqjczy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:hbqpzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:hbqsjzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:hbqgtzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:hbqcnzy",
                                "value": "1"
                            },
                            {
                                "type": "setBlock",
                                "number": "N1144",
                                "loc": [
                                    [
                                        11,
                                        7
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "text": "减速器（1e7）",
                        "color": [
                            195,
                            228,
                            230,
                            1
                        ],
                        "need": "flag:gt>=10000000",
                        "condition": "flag:gcjd==4",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "flag:gt",
                                "operator": "-=",
                                "value": "10000000"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:flvjy",
                                "value": "10"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:flv",
                                "value": "0"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:gcjd",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:jd",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:fcczy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:flvzs",
                                "value": "0.5"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:fcjyzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:fcgtzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:fccnzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:bjgtzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:bjcnzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:bjfczy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:bjfjyzy",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:fcu1c",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:fcu2c",
                                "value": "3"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:fcu3c",
                                "value": "20"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:fcu4c",
                                "value": "20"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:fpexp",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:fsjexp",
                                "value": "0.5"
                            },
                            {
                                "type": "setBlock",
                                "number": "N1109",
                                "loc": [
                                    [
                                        7,
                                        0
                                    ]
                                ]
                            },
                            "阶段6：减速器\n减速会减慢时间并显著降低产量，你可以基于普通草和经验的数量获得反草和反经验，初始解锁反草升级，所有的反升级也会影响的正常的产量（例如反草升级的反草增益也加成草，但是其他地方的反草增益不会）",
                            "现在可以打开背包，资源显示解锁了新内容",
                            "还解锁了新的白金升级",
                            {
                                "type": "setBlock",
                                "number": "N764",
                                "loc": [
                                    [
                                        12,
                                        7
                                    ]
                                ]
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "color": [
                            253,
                            255,
                            255,
                            1
                        ],
                        "action": []
                    }
                ]
            }
        ],
        "2,5": [
            {
                "type": "if",
                "condition": "(flag:jd>=4)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(((flag:jrcctz1===1)||(flag:jrcctz2===1))||(flag:jrcctz3===1))",
                        "true": [
                            {
                                "type": "choices",
                                "text": "\t[草场挑战]进入后进行草场重置\n目标：(300+完成次数*25)等级\n挑战1：你无法获得水晶\n挑战2：草场之前资源增益^0.8\n挑战3：同时进行所有水晶挑战\n奖励：水晶获取x${flag:cctz1+1}\n钢铁获取x${flag:cctz2+1}\n充能获取x${flag:cctz3+1}\n挑战1/2/3最高等级:${flag:cctz1mlv}/${flag:cctz2mlv}/${flag:cctz3mlv}\n(在退出/完成挑战时刷新)",
                                "choices": [
                                    {
                                        "text": "水晶枯竭(${flag:cctz1}/10)",
                                        "color": [
                                            186,
                                            149,
                                            208,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "insert",
                                                "name": "草场重置"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz1",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:cctzmb",
                                                "value": "(300+(flag:cctz1 * 25))"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "资源减少Ⅱ(${flag:cctz2}/10)",
                                        "color": [
                                            186,
                                            149,
                                            208,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "insert",
                                                "name": "草场重置"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz2",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:cctzmb",
                                                "value": "(300+(flag:cctz2 * 25))"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "挑战者主义(${flag:cctz3}/10)",
                                        "color": [
                                            186,
                                            149,
                                            208,
                                            1
                                        ],
                                        "condition": "flag:gcjd>=3",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz3",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:lvzs",
                                                "value": "0.48"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:cctzmb",
                                                "value": "(300+(flag:cctz3 * 25))"
                                            },
                                            {
                                                "type": "insert",
                                                "name": "草场重置"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "完成挑战",
                                        "color": [
                                            186,
                                            149,
                                            208,
                                            1
                                        ],
                                        "condition": "(status:hp>=flag:cctzmb)&&(flag:jrcctz1==1||flag:jrcctz2==1||flag:jrcctz3==1)",
                                        "action": [
                                            {
                                                "type": "if",
                                                "condition": "((flag:jrcctz1===1)&&(status:hp>=flag:cctzmb))",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz1",
                                                        "operator": "+=",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz1",
                                                        "operator": "min=",
                                                        "value": "10"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz1mlv",
                                                        "value": "(Math.max(flag:cctz1mlv,status:hp))"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "if",
                                                "condition": "((flag:jrcctz2===1)&&(status:hp>=flag:cctzmb))",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz2",
                                                        "operator": "+=",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz2",
                                                        "operator": "min=",
                                                        "value": "10"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz2mlv",
                                                        "value": "(Math.max(flag:cctz2mlv,status:hp))"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "if",
                                                "condition": "((flag:jrcctz3===1)&&(status:hp>=flag:cctzmb))",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz3",
                                                        "operator": "+=",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz3",
                                                        "operator": "min=",
                                                        "value": "10"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz3mlv",
                                                        "value": "(Math.max(flag:cctz3mlv,status:hp))"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "if",
                                                "condition": "(flag:jrcctz1===1)",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:lvzs",
                                                        "value": "0.45"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz1",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz2",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz3",
                                                "value": "0"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退出挑战(目标:${flag:cctzmb}等级)",
                                        "color": [
                                            186,
                                            149,
                                            208,
                                            1
                                        ],
                                        "condition": "flag:jrcctz1==1||flag:jrcctz2==1||flag:jrcctz3==1",
                                        "action": [
                                            {
                                                "type": "if",
                                                "condition": "(flag:jrcctz1===1)",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz1mlv",
                                                        "value": "(Math.max(flag:cctz1mlv,status:hp))"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "if",
                                                "condition": "(flag:jrcctz2===1)",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz2mlv",
                                                        "value": "(Math.max(flag:cctz2mlv,status:hp))"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "if",
                                                "condition": "(flag:jrcctz3===1)",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:lvzs",
                                                        "value": "0.45"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz3mlv",
                                                        "value": "(Math.max(flag:cctz3mlv,status:hp))"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz1",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz2",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz3",
                                                "value": "0"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "返回",
                                        "color": [
                                            233,
                                            227,
                                            237,
                                            1
                                        ],
                                        "action": []
                                    }
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "choices",
                                "text": "\t[草场挑战]进入后进行草场重置\n目标：(300+完成次数*25)等级\n挑战1：你无法获得水晶\n挑战2：草场之前资源增益^0.8\n挑战3：同时进行所有水晶挑战\n奖励：水晶获取x${flag:cctz1+1}\n钢铁获取x${flag:cctz2+1}\n充能获取x${flag:cctz3+1}\n挑战1/2/3最高等级:${flag:cctz1mlv}/${flag:cctz2mlv}/${flag:cctz3mlv}\n(在退出/完成挑战时刷新)",
                                "choices": [
                                    {
                                        "text": "水晶枯竭(${flag:cctz1}/10)",
                                        "color": [
                                            186,
                                            149,
                                            208,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "insert",
                                                "name": "草场重置"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz1",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:cctzmb",
                                                "value": "(300+(flag:cctz1 * 25))"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "资源减少Ⅱ(${flag:cctz2}/10)",
                                        "color": [
                                            186,
                                            149,
                                            208,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "insert",
                                                "name": "草场重置"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz2",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:cctzmb",
                                                "value": "(300+(flag:cctz2 * 25))"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "挑战者主义(${flag:cctz3}/10)",
                                        "color": [
                                            186,
                                            149,
                                            208,
                                            1
                                        ],
                                        "condition": "flag:gcjd>=3",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:lvzs",
                                                "value": "0.48"
                                            },
                                            {
                                                "type": "insert",
                                                "name": "草场重置"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz3",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:cctzmb",
                                                "value": "(300+(flag:cctz3 * 25))"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "完成挑战",
                                        "color": [
                                            160,
                                            0,
                                            255,
                                            1
                                        ],
                                        "condition": "(status:hp>=flag:cctzmb)&&(flag:jrcctz1==1||flag:jrcctz2==1||flag:jrcctz3==1)",
                                        "action": [
                                            {
                                                "type": "if",
                                                "condition": "((flag:jrcctz1===1)&&(status:hp>=flag:cctzmb))",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz1",
                                                        "operator": "+=",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz1",
                                                        "operator": "min=",
                                                        "value": "10"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz1mlv",
                                                        "value": "(Math.max(flag:cctz1mlv,status:hp))"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "if",
                                                "condition": "((flag:jrcctz2===1)&&(status:hp>=flag:cctzmb))",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz2",
                                                        "operator": "+=",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz2",
                                                        "operator": "min=",
                                                        "value": "10"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz2mlv",
                                                        "value": "(Math.max(flag:cctz2mlv,status:hp))"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "if",
                                                "condition": "((flag:jrcctz3===1)&&(status:hp>=flag:cctzmb))",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz3",
                                                        "operator": "+=",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz3",
                                                        "operator": "min=",
                                                        "value": "10"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz3mlv",
                                                        "value": "(Math.max(flag:cctz3mlv,status:hp))"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "if",
                                                "condition": "(flag:jrcctz1===1)",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:lvzs",
                                                        "value": "0.45"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz1",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz2",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz3",
                                                "value": "0"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退出挑战",
                                        "color": [
                                            160,
                                            0,
                                            255,
                                            1
                                        ],
                                        "condition": "flag:jrcctz1==1||flag:jrcctz2==1||flag:jrcctz3==1",
                                        "action": [
                                            {
                                                "type": "if",
                                                "condition": "(flag:jrcctz1===1)",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz1mlv",
                                                        "value": "(Math.max(flag:cctz1mlv,status:hp))"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "if",
                                                "condition": "(flag:jrcctz2===1)",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz2mlv",
                                                        "value": "(Math.max(flag:cctz2mlv,status:hp))"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "if",
                                                "condition": "(flag:jrcctz3===1)",
                                                "true": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:lvzs",
                                                        "value": "0.45"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "flag:cctz3mlv",
                                                        "value": "(Math.max(flag:cctz3mlv,status:hp))"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz1",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz2",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:jrcctz3",
                                                "value": "0"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "返回",
                                        "color": [
                                            233,
                                            227,
                                            237,
                                            1
                                        ],
                                        "action": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,5": [
            {
                "type": "if",
                "condition": "(flag:gcjd>=1)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[铸造厂]你拥有:${core.formatBigNumber(Math.floor(flag:gt))}钢铁\n本页面加成:\n钢铁x${(Math.floor((flag:ggtzy1)*100)/100)}\n钢铁x${(Math.floor((flag:pgtzy)*100)/100)}\n钢铁x${(Math.floor((flag:gtgtzy)*100)/100)}\n基于下面3个的等级，分别消耗草，声望，钢铁",
                        "choices": [
                            {
                                "text": "钢铁增益增加25%(${core.formatBigNumber(flag:zzcu1c)})",
                                "color": [
                                    0,
                                    255,
                                    6,
                                    1
                                ],
                                "condition": "flag:ggtzy1<25",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(status:money>=flag:zzcu1c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "-=",
                                                "value": "flag:zzcu1c"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:ggtzy1",
                                                "operator": "+=",
                                                "value": "0.25"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:ggtzy1",
                                                "value": "(Math.min(flag:ggtzy1,25))"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zzcu1c",
                                                "value": "(Math.ceil((flag:zzcu1c*1.35)))"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    11,
                                                    5
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "钢铁增益增加25%(${core.formatBigNumber(flag:zzcu2c)})",
                                "color": [
                                    0,
                                    216,
                                    255,
                                    1
                                ],
                                "condition": "flag:pgtzy<25",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(status:def>=flag:zzcu2c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:def",
                                                "operator": "-=",
                                                "value": "flag:zzcu2c"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:pgtzy",
                                                "operator": "+=",
                                                "value": "0.25"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:pgtzy",
                                                "value": "(Math.min(flag:pgtzy,25))"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zzcu2c",
                                                "value": "(Math.ceil((flag:zzcu2c*1.25)))"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    11,
                                                    5
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "钢铁增益增加25%(${core.formatBigNumber(flag:zzcu3c)})",
                                "condition": "flag:gtgtzy<25",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:gt>=flag:zzcu3c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:gt",
                                                "operator": "-=",
                                                "value": "flag:zzcu3c"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:gtgtzy",
                                                "operator": "+=",
                                                "value": "0.25"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:gtgtzy",
                                                "value": "(Math.min(flag:gtgtzy,25))"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zzcu3c",
                                                "value": "(Math.ceil((flag:zzcu3c*1.15)))"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    11,
                                                    5
                                                ]
                                            }
                                        ]
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
        ],
        "12,5": [
            {
                "type": "if",
                "condition": "(flag:gcjd>=2)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[发电机]你拥有:${core.formatBigNumber(Math.floor(flag:gt))}钢铁\n本页面加成:\n声望x${(Math.floor((flag:gtpzy)*100)/100)}\n水晶x${(Math.floor((flag:gtsjzy)*100)/100)}\n充能x${(Math.floor((flag:pcnzy)*100)/100)}\n充能x${(Math.floor((flag:sjcnzy)*100)/100)}\n分别消耗钢铁，钢铁，声望，水晶",
                        "choices": [
                            {
                                "text": "声望增益增加25%(${core.formatBigNumber(flag:fdju1c)})",
                                "color": [
                                    0,
                                    216,
                                    255,
                                    1
                                ],
                                "condition": "flag:gtpzy<25",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:gt>=flag:fdju1c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:gt",
                                                "operator": "-=",
                                                "value": "flag:fdju1c"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:gtpzy",
                                                "operator": "+=",
                                                "value": "0.25"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:gtpzy",
                                                "value": "(Math.min(flag:gtpzy,25))"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:fdju1c",
                                                "value": "(Math.ceil((flag:fdju1c*1.2)))"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    12,
                                                    5
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "水晶增益增加25%(${core.formatBigNumber(flag:fdju2c)})",
                                "color": [
                                    189,
                                    0,
                                    255,
                                    1
                                ],
                                "condition": "flag:gtsjzy<25",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:gt>=flag:fdju2c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:gt",
                                                "operator": "-=",
                                                "value": "flag:fdju2c"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:gtsjzy",
                                                "operator": "+=",
                                                "value": "0.25"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:gtsjzy",
                                                "value": "(Math.min(flag:gtsjzy,25))"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:fdju2c",
                                                "value": "(Math.ceil((flag:fdju2c*1.2)))"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    12,
                                                    5
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "充能增益增加25%(${core.formatBigNumber(flag:fdju3c)})",
                                "color": [
                                    237,
                                    215,
                                    98,
                                    1
                                ],
                                "condition": "flag:pcnzy<25&&item:I848>=14",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(status:def>=flag:fdju3c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:def",
                                                "operator": "-=",
                                                "value": "flag:fdju3c"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:pcnzy",
                                                "operator": "+=",
                                                "value": "0.25"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:pcnzy",
                                                "value": "(Math.min(flag:pcnzy,25))"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:fdju3c",
                                                "value": "(Math.ceil((flag:fdju3c*1.2)))"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    12,
                                                    5
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "充能增益增加25%(${core.formatBigNumber(flag:fdju4c)})",
                                "color": [
                                    237,
                                    215,
                                    98,
                                    1
                                ],
                                "condition": "flag:sjcnzy<25&&item:I848>=14",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(status:mdef>=flag:fdju4c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:mdef",
                                                "operator": "-=",
                                                "value": "flag:fdju4c"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:sjcnzy",
                                                "operator": "+=",
                                                "value": "0.25"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:sjcnzy",
                                                "value": "(Math.min(flag:sjcnzy,25))"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:fdju4c",
                                                "value": "(Math.ceil((flag:fdju4c*1.15)))"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    12,
                                                    5
                                                ]
                                            }
                                        ]
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
        ],
        "10,7": [
            {
                "type": "if",
                "condition": "(flag:gcjd>=3)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[充能塔]充能里程碑，同样需要对应充能生效\n当前充能:${core.formatBigNumber(Math.floor(flag:cn))}\n充能力量:${(Math.floor((flag:cnll)*10000)/100)}%\n1 钢铁增益x${Math.floor(Math.pow(Math.log10(flag:cn+10),flag:cnll)*100)/100} e2 经验增益x${Math.floor(Math.pow(Math.log10(flag:cn+10),flag:cnll)*100)/100} e4 等级折算/${Math.floor(Math.pow(Math.log10(flag:cn+10)/500+1,flag:cnll)*100)/100}\ne5 层点增益x${Math.floor(Math.pow(Math.log10(flag:cn+10),flag:cnll)*100)/100} e6 草增益x${Math.floor(Math.pow(Math.log10(flag:cn+10),flag:cnll)*100)/100} e7 阶层效果+^${Math.floor(Math.log10(flag:cn+10)/100*flag:cnll*100)/100}\ne8 声望增益x${Math.floor(Math.pow(Math.log10(flag:cn+10),flag:cnll)*100)/100} e9 水晶增益x${Math.floor(Math.pow(Math.log10(flag:cn+10),flag:cnll)*100)/100} ",
                        "choices": [
                            {
                                "text": "返回",
                                "action": []
                            }
                        ]
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "choices",
                "text": "真实割草之塔v0.24\n作者：咸绿菜猫\n当前残局 30反等级\n点击地图上的人物查看功能",
                "choices": [
                    {
                        "text": "作者的github主页",
                        "color": [
                            0,
                            86,
                            255,
                            1
                        ],
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\nwindow.open(\"https://github.com/qwqe198/\")\n}"
                            }
                        ]
                    },
                    {
                        "text": "作者的爱发电主页",
                        "color": [
                            0,
                            86,
                            255,
                            1
                        ],
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\nwindow.open(\"https://ifdian.net/a/qwqe198/\")\n}"
                            }
                        ]
                    },
                    {
                        "text": "资源计分",
                        "color": [
                            0,
                            255,
                            30,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "name": "计分"
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "color": [
                            255,
                            255,
                            255,
                            1
                        ],
                        "action": []
                    }
                ]
            }
        ],
        "11,7": [
            {
                "type": "if",
                "condition": "(flag:gcjd>=4)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[汇编器]1，2/3，4/5，6需要草场挑战1/2/3最大等级(不扣除)\n挑战1/2/3最高等级:${flag:cctz1mlv}/${flag:cctz2mlv}/${flag:cctz3mlv}  本页面加成:\n草:${flag:hbqczy}x 层点:${flag:hbqjczy}x 声望:${flag:hbqpzy}x\n水晶:${flag:hbqsjzy}x 钢铁:${flag:hbqgtzy}x 充能:${flag:hbqcnzy}x",
                        "choices": [
                            {
                                "text": "草增益(${core.formatBigNumber(flag:hbqu1c)})",
                                "color": [
                                    0,
                                    255,
                                    6,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:cctz1mlv>=flag:hbqu1c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:hbqczy",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:hbqu1c",
                                                "operator": "+=",
                                                "value": "12"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    11,
                                                    7
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "层点增益(${core.formatBigNumber(flag:hbqu2c)})",
                                "color": [
                                    185,
                                    195,
                                    39,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:cctz1mlv>=flag:hbqu2c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:hbqjczy",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:hbqu2c",
                                                "operator": "+=",
                                                "value": "11"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    11,
                                                    7
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "声望增益(${core.formatBigNumber(flag:hbqu3c)})",
                                "color": [
                                    0,
                                    196,
                                    255,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:cctz2mlv>=flag:hbqu3c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:hbqpzy",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:hbqu3c",
                                                "operator": "+=",
                                                "value": "9"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    11,
                                                    7
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "水晶增益(${core.formatBigNumber(flag:hbqu4c)})",
                                "color": [
                                    238,
                                    0,
                                    255,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:cctz2mlv>=flag:hbqu4c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:hbqsjzy",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:hbqu4c",
                                                "operator": "+=",
                                                "value": "13"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    11,
                                                    7
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "钢铁增益(${core.formatBigNumber(flag:hbqu5c)})",
                                "color": [
                                    168,
                                    204,
                                    194,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:cctz3mlv>=flag:hbqu5c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:hbqgtzy",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:hbqu5c",
                                                "operator": "+=",
                                                "value": "8"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    11,
                                                    7
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "充能增益(${core.formatBigNumber(flag:hbqu6c)})",
                                "color": [
                                    255,
                                    240,
                                    0,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:cctz3mlv>=flag:hbqu6c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:hbqcnzy",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:hbqu6c",
                                                "operator": "+=",
                                                "value": "7"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    11,
                                                    7
                                                ]
                                            }
                                        ]
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
        ],
        "7,0": [
            {
                "type": "if",
                "condition": "(flag:gcjd>=5)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[反草升级]反草/经验基础获得：草或经验^0.5后/1e8\n本页面加成\n草：${flag:fcczy}x\n经验：${flag:fcjyzy}x\n钢铁：${flag:fcgtzy}x\n充能：${flag:fccnzy}x",
                        "choices": [
                            {
                                "text": "反草增益(${core.formatBigNumber(flag:fcu1c)}) ",
                                "color": [
                                    122,
                                    219,
                                    85,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:fc>=flag:fcu1c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:fc",
                                                "operator": "-=",
                                                "value": "flag:fcu1c"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:fcczy",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:fcu1c",
                                                "value": "(Math.ceil((flag:fcu1c*1.35)))"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    7,
                                                    0
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "反经验增益(${core.formatBigNumber(flag:fcu2c)}) ",
                                "color": [
                                    122,
                                    219,
                                    85,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:fc>=flag:fcu2c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:fc",
                                                "operator": "-=",
                                                "value": "flag:fcu2c"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:fcjyzy",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:fcu2c",
                                                "value": "(Math.ceil((flag:fcu2c*1.45)))"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    7,
                                                    0
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "钢铁增益(${core.formatBigNumber(flag:fcu3c)}) ",
                                "color": [
                                    122,
                                    219,
                                    85,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:fc>=flag:fcu3c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:fc",
                                                "operator": "-=",
                                                "value": "flag:fcu3c"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:fcgtzy",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:fcu3c",
                                                "value": "(Math.ceil((flag:fcu3c*1.8)))"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    7,
                                                    0
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "充能增益(${core.formatBigNumber(flag:fcu4c)}) ",
                                "color": [
                                    122,
                                    219,
                                    85,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:fc>=flag:fcu4c)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:fc",
                                                "operator": "-=",
                                                "value": "flag:fcu4c"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:fccnzy",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:fcu4c",
                                                "value": "(Math.ceil((flag:fcu4c*1.9)))"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    7,
                                                    0
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "返回",
                                "color": [
                                    255,
                                    255,
                                    255,
                                    1
                                ],
                                "action": []
                            }
                        ]
                    }
                ]
            }
        ],
        "12,7": [
            {
                "type": "if",
                "condition": "(flag:jd>=5)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[白金升级3]所有升级消耗1e6白金\n本页面加成\n钢铁：${(Math.floor((flag:bjgtzy)*100)/100)}x 充能：${(Math.floor((flag:bjcnzy)*100)/100)}x\n反草：${(Math.floor((flag:bjfczy)*100)/100)}x 反经验：${(Math.floor((flag:bjfjyzy)*100)/100)}x",
                        "choices": [
                            {
                                "text": "钢铁增益增加5%",
                                "need": "status:mana>=1000000",
                                "condition": "flag:bjgtzy<5",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "1000000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjgtzy",
                                        "operator": "+=",
                                        "value": "0.05"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjgtzy",
                                        "value": "(Math.min(flag:bjgtzy,5))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            12,
                                            7
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "充能增益增加5%",
                                "need": "status:mana>=1000000",
                                "condition": "flag:bjcnzy<5",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "1000000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjcnzy",
                                        "operator": "+=",
                                        "value": "0.05"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjcnzy",
                                        "value": "(Math.min(flag:bjcnzy,5))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            12,
                                            7
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "反草增益增加5%",
                                "need": "status:mana>=1000000",
                                "condition": "flag:bjfczy<5",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "1000000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjfczy",
                                        "operator": "+=",
                                        "value": "0.05"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjfczy",
                                        "value": "(Math.min(flag:bjfczy,5))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            12,
                                            7
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "反经验增益增加5%",
                                "need": "status:mana>=1000000",
                                "condition": "flag:bjfjyzy<5",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mana",
                                        "operator": "-=",
                                        "value": "1000000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjfjyzy",
                                        "operator": "+=",
                                        "value": "0.05"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:bjfjyzy",
                                        "value": "(Math.min(flag:bjfjyzy,5))"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            12,
                                            7
                                        ]
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
        ],
        "6,5": [
            "打开背包查看"
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "6,12": [
            {
                "type": "insert",
                "name": "割草事件"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [159,159,159,159,884,159,159,159,761,159,159,159,159],
    [133,  0,  0,129,  0,  0,102,  0,  0,129,1117,  0,  0],
    [  0,  0,  0, 85,  0,  0,  0,  0,  0, 85,  0,  0,  0],
    [  0,  0,  0,159,  0,  0,  0,  0,  0,159,  0,  0,  0],
    [159,159,159,159,  0,  0,  0,  0,  0,159,159,159,159],
    [1156,  0,  0,129,  0,  0,1160,  0,  0,129,1097,  0,  0],
    [  0,  0,  0, 85,  0,  0,  0,  0,  0, 85,  0,  0,  0],
    [  0,  0,  0,159,  0,  0,1157,  0,  0,159,  0,  0,  0],
    [159,159,159,159,  0,  0,  0,  0,  0,159,159,159,159],
    [  0,  0,  0,159,  0,  0,  0,  0,  0,159,  0,  0,  0],
    [  0,  0,  0, 85,  0,  0,  0,  0,  0, 85,  0,  0,  0],
    [  0,  0,  0,159,  0,  0,  0,  0,  0,159,  0,  0,  0],
    [159,159,159,159,159,159,201,159,159,159,159,159,159]
],
    "bgmap": [
    [305,305,305,305,305,305,305,305,305,305,305,305,305],
    [ 15, 15, 15,305,175,175,175,175,175,305,  5,  5,  5],
    [ 15, 15, 15,305,175,175,175,175,175,305,  5,  5,  5],
    [ 15, 15, 15,305,175,175,175,175,175,305,  5,  5,  5],
    [305,305,305,305,902,902,902,902,902,305,305,305,305],
    [167,167,167,305,902,902,902,902,902,305,900,900,900],
    [167,167,167,305,902,902,902,902,902,305,900,900,900],
    [167,167,167,305,175,175,175,175,175,305,900,900,900],
    [305,305,305,305,175,175,175,175,175,305,305,305,305],
    [305,305,305,305,175,175,175,175,175,305,305,305,305],
    [305,305,305,305,175,175,175,175,175,305,305,305,305],
    [305,305,305,305,175,175,175,175,175,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,101,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "bgm.mp3"
}
