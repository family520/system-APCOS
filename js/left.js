$(function () {

    // 第一个Echarts图
    EchartsOne("EchartsOne");
    function EchartsOne(name) {
        // 基于准备好的dom，初始化echarts实例
        let myChartOne = echarts.init(document.getElementById(name));

        let dataStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 0,
                shadowColor: '#203665'
            }
        };
        option = {
            // backgroundColor: "#20263f",
            series: [{
                name: '第一个圆环',
                type: 'pie',
                clockWise: false,
                radius: [30, 45],
                itemStyle: dataStyle,
                hoverAnimation: false,
                center: ['15%', '50%'],
                data: [{
                    value: 25,
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color: '#3a7ad5',
                                    align: 'center',
                                    fontSize: 20,
                                    fontWeight: "bold"
                                },
                                b: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: 16
                                }
                            },
                            formatter: function (params) {
                                return "北京数据\n\n" + "中心";
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '10',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#6EFFB5',
                            shadowColor: '#6EFFB5',
                            shadowBlur: 0
                        }
                    }
                }, {
                    value: 75,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#333347'
                        },
                        emphasis: {
                            color: '#333347'
                        }
                    }
                }]
            }, {
                name: '第二个圆环',
                type: 'pie',
                clockWise: false,
                radius: [30, 45],
                itemStyle: dataStyle,
                hoverAnimation: false,
                center: ['50%', '50%'],
                data: [{
                    value: 50,
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color: '#d03e93',
                                    align: 'center',
                                    fontSize: 20,
                                    fontWeight: "bold"
                                },
                                b: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: 16
                                }
                            },
                            formatter: function (params) {
                                return "重庆数据\n\n" + "中心";
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '10',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#00FFFF',
                            shadowColor: '#00FFFF',
                            shadowBlur: 0
                        }
                    }
                }, {
                    value: 50,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#333347'
                        },
                        emphasis: {
                            color: '#333347'
                        }
                    }
                }]
            }, {
                name: '第三个圆环',
                type: 'pie',
                clockWise: false,
                radius: [30, 45],
                itemStyle: dataStyle,
                hoverAnimation: false,
                center: ['85%', '50%'],
                data: [{
                    value: 75,
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color: '#603dd0',
                                    align: 'center',
                                    fontSize: 20,
                                    fontWeight: "bold"
                                },
                                b: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: 16
                                }
                            },
                            formatter: function (params) {
                                return "深圳数据\n\n" + "中心";
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '10',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#FD9D02',
                            shadowColor: '#FD9D02',
                            shadowBlur: 0
                        }
                    }
                }, {
                    value: 25,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#333347'
                        },
                        emphasis: {
                            color: '#333347'
                        }
                    }
                }]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChartOne.setOption(option);
        //根据窗口的大小变动图表 --- 重点
        window.addEventListener("resize", function() {
            myChartOne.resize();
        });
    }

    // 第二个Echarts图
    EchartsTwo("EchartsTwo");
    function EchartsTwo(name) {
        let myChartTwo = echarts.init(document.getElementById(name));

        option = {
            grid: {
                top: '20%',
                left: '10%',
                right: '10%',
                bottom: '15%',
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['', '04:00', '08:00', '12:00', '16:00', '20:00', ''],
                axisLine: {
                    show: false,
                    color: '#ffffff63'
                },
                axisTick: {
                    show: true,
                    length: 25,
                    lineStyle: {
                        color: "#ffffff1f"
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#ffffff1f'
                    }
                },
                axisLabel: {
                    // margin: 20,
                    color: '#ffffff63'
                },
            },
            yAxis: [{
                type: 'value',
                position: 'left',
                axisLabel: {
                    // margin: 20,
                    color: '#ffffff63'
                },

                axisTick: {
                    show: true,
                    length: 15,
                    lineStyle: {
                        color: "#ffffff1f",
                    }
                },
                splitLine: {
                    // show: true,
                    lineStyle: {
                        color: '#ffffff1f'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        width: 2
                    }
                }
            }],
            series: [{
                name: '注册总量',
                type: 'line',
                smooth: true, //是否平滑曲线显示
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 6,
                lineStyle: {
                    normal: {
                        color: "#00FFFF", // 线条颜色
                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#00FFFF',
                    }
                },
                itemStyle: {
                    color: "#00FFFF",
                    borderColor: "#00FFFF",
                    borderWidth: 3
                },
                tooltip: {
                    show: false
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00ffff'
                        },
                            {
                                offset: 1,
                                color: '#06061E'
                            }
                        ], false),
                    }
                },
                data: [5, 15, 30, 25, 15, 10, 15,]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChartTwo.setOption(option);
        //根据窗口的大小变动图表 --- 重点
        window.addEventListener("resize", function() {
            myChartTwo.resize();
        });
    }

    // 第三个Echarts图
    EchartsThree("EchartsThree");
    function EchartsThree(name) {
        let myChartThree = echarts.init(document.getElementById(name));
        option = {
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: true,
                    color: ['#FD9D02', '#4AfeA3', '#2A86F5', '#00FFFF'],
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: "40", name: '1号服务器'},
                        {value: "31", name: '2号服务器'},
                        {value: "20", name: '3号服务器'},
                        {value: "9", name: '4号服务器'},
                    ]
                }
            ]
        };
        myChartThree.setOption(option);
        //根据窗口的大小变动图表 --- 重点
        window.addEventListener("resize", function() {
            myChartThree.resize();
        });
    }

    //下拉选择
    $(".selectBox >span").on('click',function () {
        $(".selectUL").show();
        $(".selectUL > li").on("click",function () {
            $(".selectBox > span").text($(this).text());
            $(".selectUL").hide();
        });

    });
    // 点击空白处 隐藏
    $(document).bind("click",function(e){
        let con_one=$("body .selectBox");//设置目标区域
        if(!con_one.is(e.target) && con_one.has(e.target).length===0){
            $(".selectUL").hide();//需要隐藏的元素
        }
    });

});