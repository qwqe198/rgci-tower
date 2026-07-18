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
		]
	}
}