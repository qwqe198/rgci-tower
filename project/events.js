var events_c12a15a8_c380_4b28_8144_256cba95f760 = 
{
	"commonEvent": {
		"加点事件": [
			{
				"type": "comment",
				"text": "通过传参，flag:arg1 表示当前应该的加点数值"
			},
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+${1*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "1*flag:arg1"
							}
						]
					},
					{
						"text": "防御+${2*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "2*flag:arg1"
							}
						]
					},
					{
						"text": "生命+${200*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "200*flag:arg1"
							}
						]
					}
				]
			}
		],
		"割草事件": [
			{
				"type": "if",
				"condition": "(flag:gcjgdj===10)",
				"_collapsed": true,
				"true": [
					{
						"type": "sleep",
						"time": 50,
						"noSkip": true
					},
					{
						"type": "setBlock",
						"number": "greenSlime",
						"loc": [
							[
								6,
								12
							]
						],
						"floorId": "Start"
					}
				],
				"false": [
					{
						"type": "if",
						"condition": "(flag:gcjgdj===9)",
						"true": [
							{
								"type": "sleep",
								"time": 75,
								"noSkip": true
							},
							{
								"type": "setBlock",
								"number": "greenSlime",
								"loc": [
									[
										6,
										12
									]
								],
								"floorId": "Start"
							}
						],
						"false": [
							{
								"type": "if",
								"condition": "(flag:gcjgdj===8)",
								"true": [
									{
										"type": "sleep",
										"time": 100,
										"noSkip": true
									},
									{
										"type": "setBlock",
										"number": "greenSlime",
										"loc": [
											[
												6,
												12
											]
										],
										"floorId": "Start"
									}
								],
								"false": [
									{
										"type": "if",
										"condition": "(flag:gcjgdj===7)",
										"true": [
											{
												"type": "sleep",
												"time": 125,
												"noSkip": true
											},
											{
												"type": "setBlock",
												"number": "greenSlime",
												"loc": [
													[
														6,
														12
													]
												],
												"floorId": "Start"
											}
										],
										"false": [
											{
												"type": "if",
												"condition": "(flag:gcjgdj===6)",
												"true": [
													{
														"type": "sleep",
														"time": 150,
														"noSkip": true
													},
													{
														"type": "setBlock",
														"number": "greenSlime",
														"loc": [
															[
																6,
																12
															]
														],
														"floorId": "Start"
													}
												],
												"false": [
													{
														"type": "if",
														"condition": "(flag:gcjgdj===5)",
														"true": [
															{
																"type": "sleep",
																"time": 175,
																"noSkip": true
															},
															{
																"type": "setBlock",
																"number": "greenSlime",
																"loc": [
																	[
																		6,
																		12
																	]
																],
																"floorId": "Start"
															}
														],
														"false": [
															{
																"type": "if",
																"condition": "(flag:gcjgdj===4)",
																"true": [
																	{
																		"type": "sleep",
																		"time": 200,
																		"noSkip": true
																	},
																	{
																		"type": "setBlock",
																		"number": "greenSlime",
																		"loc": [
																			[
																				6,
																				12
																			]
																		],
																		"floorId": "Start"
																	}
																],
																"false": [
																	{
																		"type": "if",
																		"condition": "(flag:gcjgdj===3)",
																		"true": [
																			{
																				"type": "sleep",
																				"time": 400,
																				"noSkip": true
																			},
																			{
																				"type": "setBlock",
																				"number": "greenSlime",
																				"loc": [
																					[
																						6,
																						12
																					]
																				],
																				"floorId": "Start"
																			}
																		],
																		"false": [
																			{
																				"type": "if",
																				"condition": "(flag:gcjgdj===2)",
																				"true": [
																					{
																						"type": "sleep",
																						"time": 600,
																						"noSkip": true
																					},
																					{
																						"type": "setBlock",
																						"number": "greenSlime",
																						"loc": [
																							[
																								6,
																								12
																							]
																						],
																						"floorId": "Start"
																					}
																				],
																				"false": [
																					{
																						"type": "if",
																						"condition": "(flag:gcjgdj===1)",
																						"true": [
																							{
																								"type": "sleep",
																								"time": 800,
																								"noSkip": true
																							},
																							{
																								"type": "setBlock",
																								"number": "greenSlime",
																								"loc": [
																									[
																										6,
																										12
																									]
																								],
																								"floorId": "Start"
																							}
																						],
																						"false": [
																							{
																								"type": "sleep",
																								"time": 1000,
																								"noSkip": true
																							},
																							{
																								"type": "setBlock",
																								"number": "greenSlime",
																								"loc": [
																									[
																										6,
																										12
																									]
																								],
																								"floorId": "Start"
																							}
																						]
																					}
																				]
																			}
																		]
																	}
																]
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				"type": "if",
				"condition": "(flag:jd>=2)",
				"true": [
					{
						"type": "setValue",
						"name": "flag:jcjy",
						"operator": "-=",
						"value": "flag:zjczy"
					},
					{
						"type": "while",
						"condition": "(flag:jcjy<=0)",
						"data": [
							{
								"type": "setValue",
								"name": "flag:jc",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:jcjy",
								"operator": "+=",
								"value": "(Math.floor(((Math.pow(10,(Math.pow(flag:jc,flag:jczs)))))))"
							}
						]
					}
				]
			},
			{
				"type": "if",
				"condition": "(item:I848>=1)",
				"true": [
					{
						"type": "setValue",
						"name": "status:mana",
						"operator": "+=",
						"value": "(Math.ceil((flag:zbjzy/100)))"
					}
				],
				"false": [
					{
						"type": "if",
						"condition": "(flag:jd>=1)",
						"true": [
							{
								"type": "setValue",
								"name": "flag:bj",
								"value": "core.rand(100)"
							},
							{
								"type": "if",
								"condition": "(flag:bj<=1)",
								"true": [
									{
										"type": "setValue",
										"name": "status:mana",
										"operator": "+=",
										"value": "(Math.max(flag:zbjzy,1))"
									}
								]
							}
						]
					}
				]
			},
			{
				"type": "if",
				"condition": "(flag:gcjd>=5)",
				"true": [
					{
						"type": "setValue",
						"name": "flag:fc",
						"operator": "+=",
						"value": "flag:zfczy"
					},
					{
						"type": "setValue",
						"name": "flag:flvjy",
						"operator": "-=",
						"value": "flag:zfjyzy"
					}
				]
			}
		],
		"声望重置": [
			{
				"type": "if",
				"condition": "(flag:blgcjg===0)",
				"true": [
					{
						"type": "setValue",
						"name": "flag:gcjg",
						"value": "1000"
					},
					{
						"type": "setValue",
						"name": "flag:gcjgdj",
						"value": "0"
					}
				]
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
				"name": "flag:gjyzy",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:gcfw",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "status:hp",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "status:exp",
				"value": "10"
			},
			{
				"type": "setValue",
				"name": "status:money",
				"value": "0"
			}
		],
		"水晶重置": [
			{
				"type": "insert",
				"name": "声望重置"
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
			},
			{
				"type": "setValue",
				"name": "status:def",
				"value": "0"
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
			{
				"type": "setValue",
				"name": "flag:pu4c",
				"value": "100"
			},
			{
				"type": "setValue",
				"name": "flag:pu5c",
				"value": "1000"
			},
			{
				"type": "setValue",
				"name": "flag:gu5c",
				"value": "1e+10"
			},
			{
				"type": "setValue",
				"name": "flag:pczy",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:pjyzy",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:ppzy",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:pbjzy",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:pjczy",
				"value": "1"
			}
		],
		"草场重置": [
			{
				"type": "if",
				"condition": "(item:I848===7)",
				"true": [
					{
						"type": "setValue",
						"name": "flag:jceffexp",
						"value": "2"
					}
				]
			},
			{
				"type": "insert",
				"name": "水晶重置"
			},
			{
				"type": "if",
				"condition": "(item:I848===18)",
				"true": [
					{
						"type": "setValue",
						"name": "flag:cnll",
						"value": "1.08"
					}
				]
			},
			{
				"type": "if",
				"condition": "(item:I848===20)",
				"true": [
					{
						"type": "setValue",
						"name": "flag:cnll",
						"value": "1.16"
					}
				]
			},
			{
				"type": "if",
				"condition": "(item:I848>=24)",
				"true": [
					{
						"type": "setValue",
						"name": "flag:cnll",
						"value": "((item:I848*0.08)-0.68)"
					}
				]
			},
			{
				"type": "if",
				"condition": "(flag:cnll>=3)",
				"true": [
					{
						"type": "setValue",
						"name": "flag:cnll",
						"value": "((Math.pow(flag:cnll,0.2))*(Math.pow(3,0.8)))"
					}
				]
			},
			{
				"type": "comment",
				"text": "水晶解锁的升级"
			},
			{
				"type": "setValue",
				"name": "status:mdef",
				"value": "0"
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
				"name": "flag:sjczy",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:sjjyzy",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:sjbjzy",
				"value": "1"
			},
			{
				"type": "setValue",
				"name": "flag:sjjczy",
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
				"name": "flag:jc",
				"value": "0"
			},
			{
				"type": "setValue",
				"name": "flag:jcjy",
				"value": "10"
			},
			{
				"type": "comment",
				"text": "自动化和白金"
			},
			{
				"type": "setValue",
				"name": "status:mana",
				"value": "0"
			},
			{
				"type": "if",
				"condition": "(item:I848>=10)",
				"true": [],
				"false": [
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
						"name": "flag:bjjczy",
						"value": "1"
					},
					{
						"type": "setValue",
						"name": "flag:bjpzy",
						"value": "1"
					},
					{
						"type": "setValue",
						"name": "flag:bjsjzy",
						"value": "1"
					}
				]
			},
			{
				"type": "if",
				"condition": "(flag:blzd1>=1)",
				"true": [],
				"false": [
					{
						"type": "setValue",
						"name": "flag:zd1",
						"value": "1"
					},
					{
						"type": "setValue",
						"name": "flag:zdgu2",
						"value": "0"
					},
					{
						"type": "setValue",
						"name": "flag:zdgu3",
						"value": "0"
					},
					{
						"type": "setValue",
						"name": "flag:zdgu4",
						"value": "0"
					},
					{
						"type": "setValue",
						"name": "flag:gp",
						"value": "0"
					},
					{
						"type": "setValue",
						"name": "flag:expp",
						"value": "0"
					}
				]
			},
			{
				"type": "if",
				"condition": "(flag:blzd2>=1)",
				"true": [],
				"false": [
					{
						"type": "setValue",
						"name": "flag:zd2",
						"value": "0"
					},
					{
						"type": "setValue",
						"name": "flag:zdgu5",
						"value": "0"
					},
					{
						"type": "setValue",
						"name": "flag:zdpu1",
						"value": "0"
					},
					{
						"type": "setValue",
						"name": "flag:zdpu2",
						"value": "0"
					},
					{
						"type": "setValue",
						"name": "flag:zdpu3",
						"value": "0"
					},
					{
						"type": "setValue",
						"name": "flag:zdpu4",
						"value": "0"
					},
					{
						"type": "setValue",
						"name": "flag:zdpu5",
						"value": "0"
					},
					{
						"type": "setValue",
						"name": "flag:pp",
						"value": "0"
					}
				]
			},
			{
				"type": "comment",
				"text": "水晶挑战"
			},
			{
				"type": "if",
				"condition": "(item:I848>=5)",
				"true": [],
				"false": [
					{
						"type": "setValue",
						"name": "flag:sjtz1",
						"value": "0"
					},
					{
						"type": "setValue",
						"name": "flag:sjtz2",
						"value": "0"
					},
					{
						"type": "setValue",
						"name": "flag:sjtz3",
						"value": "0"
					},
					{
						"type": "setValue",
						"name": "flag:pexp",
						"value": "1"
					}
				]
			}
		],
		"显示资源": [
			{
				"type": "switch",
				"condition": "flag:xsls",
				"caseList": [
					{
						"case": "1",
						"action": [
							{
								"type": "choices",
								"text": "点击在页面上显示/隐藏已解锁资源",
								"choices": [
									{
										"text": "返回",
										"action": []
									},
									{
										"text": "上一列",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xsls",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "insert",
												"name": "显示资源"
											}
										]
									}
								]
							}
						]
					},
					{
						"case": "0",
						"action": [
							{
								"type": "choices",
								"text": "点击在页面上显示/隐藏已解锁资源",
								"choices": [
									{
										"text": "返回",
										"action": []
									},
									{
										"text": "隐藏所有",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xsgt",
												"value": "0"
											},
											{
												"type": "setValue",
												"name": "flag:xscn",
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
												"type": "setValue",
												"name": "flag:xsyn",
												"value": "0"
											},
											{
												"type": "setValue",
												"name": "flag:xssy",
												"value": "0"
											},
											{
												"type": "setValue",
												"name": "flag:xshjrl",
												"value": "0"
											},
											{
												"type": "setValue",
												"name": "flag:xshjlj",
												"value": "0"
											},
											{
												"type": "setValue",
												"name": "flag:xsdl",
												"value": "0"
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
										"text": "隐藏钢铁",
										"condition": "flag:xsgt==1",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xsgt",
												"value": "0"
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
										"text": "隐藏充能",
										"condition": "flag:xscn==1",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xscn",
												"value": "0"
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
										"text": "隐藏反草",
										"condition": "flag:xsfc==1",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xsfc",
												"value": "0"
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
										"text": "隐藏反等级",
										"condition": "flag:xsflv==1",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xsflv",
												"value": "0"
											}
										]
									},
									{
										"text": "显示隐匿",
										"condition": "flag:xsyn==0&&flag:gcjd>=5",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xsyn",
												"value": "1"
											}
										]
									},
									{
										"text": "隐藏隐匿",
										"condition": "flag:xsyn==1",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xsyn",
												"value": "0"
											}
										]
									},
									{
										"text": "显示石油",
										"condition": "flag:xssy==0&&flag:gcjd>=5",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xssy",
												"value": "1"
											}
										]
									},
									{
										"text": "隐藏石油",
										"condition": "flag:xssy==1",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xssy",
												"value": "0"
											}
										]
									},
									{
										"text": "显示火箭燃料",
										"condition": "flag:xshjrl==0&&flag:gcjd>=5",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xshjrl",
												"value": "1"
											}
										]
									},
									{
										"text": "隐藏火箭燃料",
										"condition": "flag:xshjrl==1",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xshjrl",
												"value": "0"
											}
										]
									},
									{
										"text": "显示火箭零件",
										"condition": "flag:xshjlj==0&&flag:gcjd>=5",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xshjlj",
												"value": "1"
											}
										]
									},
									{
										"text": "隐藏火箭零件",
										"condition": "flag:xshjlj==1",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xshjlj",
												"value": "0"
											}
										]
									},
									{
										"text": "显示动量",
										"condition": "flag:xsdl==0&&flag:gcjd>=5",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xsdl",
												"value": "1"
											}
										]
									},
									{
										"text": "隐藏动量",
										"condition": "flag:xsdl==1",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xsdl",
												"value": "0"
											}
										]
									},
									{
										"text": "下一列",
										"condition": "flag:xsls==0",
										"action": [
											{
												"type": "setValue",
												"name": "flag:xsls",
												"operator": "+=",
												"value": "1"
											},
											{
												"type": "insert",
												"name": "显示资源"
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
		"计分": [
			{
				"type": "switch",
				"condition": "flag:jfls",
				"caseList": [
					{
						"case": "0",
						"_collapsed": true,
						"action": [
							{
								"type": "choices",
								"text": "lg(资源)^8计分,等级/草场等计本身",
								"choices": [
									{
										"text": "返回",
										"action": []
									},
									{
										"text": "等级",
										"action": [
											{
												"type": "win",
												"reason": "等级计分"
											}
										]
									},
									{
										"text": "阶层",
										"condition": "flag:jc>0",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.status.hero.hp =core.getFlag('jc')\n}"
											},
											{
												"type": "win",
												"reason": "阶层计分"
											}
										]
									},
									{
										"text": "草场",
										"condition": "item:I848>0",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.status.hero.hp =core.itemCount(\"I848\")\n}"
											},
											{
												"type": "win",
												"reason": "草场计分"
											}
										]
									},
									{
										"text": "草",
										"condition": "status:money>0",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.status.hero.hp =Math.floor(Math.pow(Math.log10(core.status.hero.money) ,8))\n}"
											},
											{
												"type": "win",
												"reason": "草计分"
											}
										]
									},
									{
										"text": "经验",
										"condition": "status:exp>0",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.status.hero.hp =Math.floor(Math.pow(Math.log10(core.status.hero.exp) ,8))\n}"
											},
											{
												"type": "win",
												"reason": "经验计分"
											}
										]
									},
									{
										"text": "声望",
										"condition": "status:def>0",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.status.hero.hp =Math.floor(Math.pow(Math.log10(core.status.hero.def) ,8))\n}"
											},
											{
												"type": "win",
												"reason": "声望计分"
											}
										]
									},
									{
										"text": "白金",
										"condition": "status:mana>0",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.status.hero.hp =Math.floor(Math.pow(Math.log10(core.status.hero.mana) ,8))\n}"
											},
											{
												"type": "win",
												"reason": "白金计分"
											}
										]
									},
									{
										"text": "水晶",
										"condition": "status:mdef>0",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.status.hero.hp =Math.floor(Math.pow(Math.log10(core.status.hero.mdef) ,8))\n}"
											},
											{
												"type": "win",
												"reason": "水晶计分"
											}
										]
									},
									{
										"text": "钢铁",
										"condition": "flag:gt>0",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.status.hero.hp =Math.floor(Math.pow(Math.log10(core.getFlag('gt')) ,8))\n}"
											},
											{
												"type": "win",
												"reason": "钢铁计分"
											}
										]
									},
									{
										"text": "下一列",
										"action": [
											{
												"type": "setValue",
												"name": "flag:jfls",
												"operator": "+=",
												"value": "1"
											},
											{
												"type": "insert",
												"name": "计分"
											}
										]
									}
								]
							}
						]
					},
					{
						"case": "1",
						"_collapsed": true,
						"action": [
							{
								"type": "choices",
								"text": "lg(资源)^8计分,等级/草场等计本身",
								"choices": [
									{
										"text": "返回",
										"action": []
									},
									{
										"text": "反等级",
										"condition": "flag:flv>0",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.status.hero.hp =core.getFlag('flv')\n}"
											},
											{
												"type": "win",
												"reason": "反等级计分"
											}
										]
									},
									{
										"text": "充能",
										"condition": "flag:cn>0",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.status.hero.hp =Math.floor(Math.pow(Math.log10(core.getFlag('cn')) ,8))\n}"
											},
											{
												"type": "win",
												"reason": "充能计分"
											}
										]
									},
									{
										"text": "反草",
										"condition": "flag:fc>0",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.status.hero.hp =Math.floor(Math.pow(Math.log10(core.getFlag('fc')) ,8))\n}"
											},
											{
												"type": "win",
												"reason": "反草计分"
											}
										]
									},
									{
										"text": "隐匿",
										"condition": "flag:yn>0",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.status.hero.hp =Math.floor(Math.pow(Math.log10(core.getFlag('yn')) ,8))\n}"
											},
											{
												"type": "win",
												"reason": "隐匿计分"
											}
										]
									},
									{
										"text": "石油",
										"condition": "flag:sy>0",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.status.hero.hp =Math.floor(Math.pow(Math.log10(core.getFlag('sy')) ,8))\n}"
											},
											{
												"type": "win",
												"reason": "石油计分"
											}
										]
									},
									{
										"text": "火箭燃料",
										"condition": "flag:hjrl>0",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.status.hero.hp =Math.floor(Math.pow(Math.log10(core.getFlag('hjrl')) ,8))\n}"
											},
											{
												"type": "win",
												"reason": "火箭燃料计分"
											}
										]
									},
									{
										"text": "火箭零件",
										"condition": "flag:hjlj>0",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.status.hero.hp =Math.floor(Math.pow(Math.log10(core.getFlag('hjlj')) ,8))\n}"
											},
											{
												"type": "win",
												"reason": "火箭零件计分"
											}
										]
									},
									{
										"text": "动量",
										"condition": "flag:dl>0",
										"action": [
											{
												"type": "function",
												"function": "function(){\ncore.status.hero.hp =Math.floor(Math.pow(Math.log10(core.getFlag('dl')) ,8))\n}"
											},
											{
												"type": "win",
												"reason": "动量计分"
											}
										]
									},
									{
										"text": "上一列",
										"action": [
											{
												"type": "setValue",
												"name": "flag:jfls",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "insert",
												"name": "计分"
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	}
}