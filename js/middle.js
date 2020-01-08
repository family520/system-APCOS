<!-- 中间Map -->
let myChart_two = echarts.init(document.getElementById('two'));

$.getJSON('json/flights.json', function (data) {
    // 造数据函数
    // 参数 （地球上点的数组、点球上飞线数组、点的个数)
    // 返回  [地球上的点,飞线]
    function getScatterOption(ScatterOption, line, length) {

        for (let i = 0; i < length; i++) {
            let noramlAirports = data.airports[parseInt(Math.random() * 8000)];
            //点
            ScatterOption.push({

                // name: noramlAirports[0] + '数据中心',
                name: noramlAirports[0],
                value: [noramlAirports[3], noramlAirports[4]],
                run : "75%"
            });
            //数据中心下拉框数据
            dataCenterSelectItems.push({
                name: noramlAirports[0] + '数据中心',
                value: [noramlAirports[3], noramlAirports[4]],
            });

            // 飞线
            if (i === 0) {
                line.push(
                    [
                        [114.05, 22.55],
                        [noramlAirports[3], noramlAirports[4]]
                    ])

            } else {
                line.push(
                    [
                        line[i - 1][1],
                        [noramlAirports[3], noramlAirports[4]]
                    ])

            }


        }

        // console.log('arr:', arr)

        return [ScatterOption, line];

    }
    //定义 数据中心下拉菜单中数据数组 也就是所有的点
    let dataCenterSelectItems = [
        {
            name: 'Beijing数据中心',
            value: [116.46, 39.92]
        },
        {
            name: 'Chongqing数据中心',
            value: [106.55, 29.57]
        },
        {
            name: 'Shenzhen数据中心',
            value: [114.05, 22.55]
        }
    ];
    // 定义地球的点
    let normalScatterOption = [
        {

            name: 'BeiJing',
            value: [116.46, 39.92],
            run : "75%"
        },
        {
            name: 'Chongqing',
            value: [106.55, 29.57],
            run : "75%"
        },
        {
            name: 'Shenzhen',
            value: [114.05, 22.55],
            run : "75%"
        }
    ];   //正常运行
    let freeScatterOption = [];        //空闲
    let congestScatterOption = [];     //拥堵
    let hitchScatterOption = [];       //故障
    // 定义地球的飞线
    let normalLine3D = [
        [
            [116.46, 39.92], //北京到重庆
            [106.55, 29.57]
        ],
        [
            [116.46, 39.92],//北京到深圳
            [114.05, 22.55]
        ],
        [
            [106.55, 29.57],//重庆到深圳
            [114.05, 22.55]
        ]
    ];
    let freeLine3D = [];
    let congestLine3D = [];
    let hitchLine3D = [];

    let normal = getScatterOption(normalScatterOption, normalLine3D, 80);
    normalScatterOption = normal[0]; //点
    normalLine3D = normal[1];        //线
    let free = getScatterOption(freeScatterOption, freeLine3D, 10);
    freeScatterOption = free[0];    //点
    freeLine3D = free[1];           //线
    let congest = getScatterOption(congestScatterOption, congestLine3D, 5);
    congestScatterOption = congest[0];//点
    congestLine3D = congest[1];       //线
    let hitch = getScatterOption(hitchScatterOption, hitchLine3D, 5);
    hitchScatterOption = hitch[0];    //点
    hitchLine3D = hitch[1];           //线

    vm.dataCenterSelectItems = dataCenterSelectItems;

    let series = [
        //地球上的点
        {
            type: 'scatter3D',
            name: "正常",
            coordinateSystem: 'globe',
            blendMode: 'lighter',
            symbolSize: 10,
            distance : 10000,
            // symbol : "circle",
            label: {
                show: true,
                position  : "top",
                formatter: '{b}',
                itemStyle: {
                    color: "#363FFF", //颜色
                    opacity: 1,
                },

                textStyle: {
                    color: '#fff',
                    fontSize: 18,
                    backgroundColor : "transparent"
                },
            },
            symbol: 'path://M512 123.19c-19.73 0-39.47 3.71-54.46 11.21L140.06 293.15c-30 15-30 39.48 0 54.46l317.45 158.76c15.05 7.49 34.79 11.21 54.52 11.21s39.48-3.72 54.46-11.21L884 347.61c30-15 30-39.47 0-54.46L566.49 134.4c-15-7.5-34.72-11.21-54.46-11.21z m0 588.36c-24.36 0-48.67-4.87-68.1-14.56L132.87 541.52A30.48 30.48 0 0 1 160.16 487l311 155.53c21.44 10.72 60.31 10.72 81.75 0L863.9 487a30.47 30.47 0 0 1 27.24 54.52L580.14 697A155.78 155.78 0 0 1 512 711.55z m0 188.85c-24.36 0-48.67-4.87-68.1-14.56l-311-155.53a30.44 30.44 0 1 1 27.23-54.46l311 155.53c21.44 10.72 60.31 10.72 81.75 0l311-155.53a30.47 30.47 0 1 1 27.24 54.52l-311 155.47c-19.41 9.75-43.72 14.56-68.12 14.56z',
            itemStyle: {
                color: '#363FFF',
                opacity: 1,
            },
            data: normalScatterOption

        },
        {
            type: 'scatter3D',
            name: "空闲",
            coordinateSystem: 'globe',
            blendMode: 'lighter',
            symbolSize: 10,
            symbol: 'path://M512 123.19c-19.73 0-39.47 3.71-54.46 11.21L140.06 293.15c-30 15-30 39.48 0 54.46l317.45 158.76c15.05 7.49 34.79 11.21 54.52 11.21s39.48-3.72 54.46-11.21L884 347.61c30-15 30-39.47 0-54.46L566.49 134.4c-15-7.5-34.72-11.21-54.46-11.21z m0 588.36c-24.36 0-48.67-4.87-68.1-14.56L132.87 541.52A30.48 30.48 0 0 1 160.16 487l311 155.53c21.44 10.72 60.31 10.72 81.75 0L863.9 487a30.47 30.47 0 0 1 27.24 54.52L580.14 697A155.78 155.78 0 0 1 512 711.55z m0 188.85c-24.36 0-48.67-4.87-68.1-14.56l-311-155.53a30.44 30.44 0 1 1 27.23-54.46l311 155.53c21.44 10.72 60.31 10.72 81.75 0l311-155.53a30.47 30.47 0 1 1 27.24 54.52l-311 155.47c-19.41 9.75-43.72 14.56-68.12 14.56z',
            itemStyle: {
                color: '#00A29A',
                opacity: 1,
            },
            label: {
                show: true,
                position  : "top",
                formatter: '{b}',
                itemStyle: {
                    color: "#363FFF", //颜色
                    opacity: 1,
                },

                textStyle: {
                    color: '#fff',
                    fontSize: 18,
                    backgroundColor : "transparent"
                },
            },
            data: freeScatterOption

        },
        {
            type: 'scatter3D',
            name: "拥堵",
            coordinateSystem: 'globe',
            blendMode: 'lighter',
            symbolSize: 10,

            itemStyle: {
                color: '#F39800',
                opacity: 1
            },
            symbol: 'path://M512 123.19c-19.73 0-39.47 3.71-54.46 11.21L140.06 293.15c-30 15-30 39.48 0 54.46l317.45 158.76c15.05 7.49 34.79 11.21 54.52 11.21s39.48-3.72 54.46-11.21L884 347.61c30-15 30-39.47 0-54.46L566.49 134.4c-15-7.5-34.72-11.21-54.46-11.21z m0 588.36c-24.36 0-48.67-4.87-68.1-14.56L132.87 541.52A30.48 30.48 0 0 1 160.16 487l311 155.53c21.44 10.72 60.31 10.72 81.75 0L863.9 487a30.47 30.47 0 0 1 27.24 54.52L580.14 697A155.78 155.78 0 0 1 512 711.55z m0 188.85c-24.36 0-48.67-4.87-68.1-14.56l-311-155.53a30.44 30.44 0 1 1 27.23-54.46l311 155.53c21.44 10.72 60.31 10.72 81.75 0l311-155.53a30.47 30.47 0 1 1 27.24 54.52l-311 155.47c-19.41 9.75-43.72 14.56-68.12 14.56z',
            label: {
                show: true,
                position  : "top",
                formatter: '{b}',
                itemStyle: {
                    color: "#363FFF", //颜色
                    opacity: 1,
                },

                textStyle: {
                    color: '#fff',
                    fontSize: 18,
                    backgroundColor : "transparent"
                },
            },
            data: congestScatterOption
        },
        {
            type: 'scatter3D',
            name: "故障",
            coordinateSystem: 'globe',
            blendMode: 'lighter',
            symbolSize: 10,

            itemStyle: {
                color: '#C30D23',
                opacity: 1
            },
            symbol: 'path://M512 123.19c-19.73 0-39.47 3.71-54.46 11.21L140.06 293.15c-30 15-30 39.48 0 54.46l317.45 158.76c15.05 7.49 34.79 11.21 54.52 11.21s39.48-3.72 54.46-11.21L884 347.61c30-15 30-39.47 0-54.46L566.49 134.4c-15-7.5-34.72-11.21-54.46-11.21z m0 588.36c-24.36 0-48.67-4.87-68.1-14.56L132.87 541.52A30.48 30.48 0 0 1 160.16 487l311 155.53c21.44 10.72 60.31 10.72 81.75 0L863.9 487a30.47 30.47 0 0 1 27.24 54.52L580.14 697A155.78 155.78 0 0 1 512 711.55z m0 188.85c-24.36 0-48.67-4.87-68.1-14.56l-311-155.53a30.44 30.44 0 1 1 27.23-54.46l311 155.53c21.44 10.72 60.31 10.72 81.75 0l311-155.53a30.47 30.47 0 1 1 27.24 54.52l-311 155.47c-19.41 9.75-43.72 14.56-68.12 14.56z',
            label: {
                show: true,
                position  : "top",
                formatter: '{b}',
                itemStyle: {
                    color: "#363FFF", //颜色
                    opacity: 1,
                },

                textStyle: {
                    color: '#fff',
                    fontSize: 18,
                    backgroundColor : "transparent"
                },
            },
            data: hitchScatterOption
        },
        //飞线
        {

            type: 'lines3D',
            name: "正常",
            effect: {
                show: true,
                trailWidth: 2,
                trailLength: 0.2,
                trailOpacity: 1,
                trailColor: 'rgb(30, 30, 60)'
            },

            lineStyle: {
                width: 1,
                color: 'rgb(50, 50, 150)',
                // color: 'rgb(118, 233, 241)',
                opacity: 0.1
            },
            blendMode: 'lighter',

            data: normalLine3D
        },
        {

            type: 'lines3D',
            name: "空闲",
            effect: {
                show: true,
                trailWidth: 2,
                trailLength: 0.2,
                trailOpacity: 1,
                trailColor: 'rgb(30, 30, 60)'
            },

            lineStyle: {
                width: 1,
                color: 'rgb(50, 50, 150)',
                // color: 'rgb(118, 233, 241)',
                opacity: 0.1
            },
            blendMode: 'lighter',

            data: freeLine3D
        },
        {

            type: 'lines3D',
            name: "拥堵",
            effect: {
                show: true,
                trailWidth: 2,
                trailLength: 0.2,
                trailOpacity: 1,
                trailColor: 'rgb(30, 30, 60)'
            },

            lineStyle: {
                width: 1,
                color: 'rgb(50, 50, 150)',
                // color: 'rgb(118, 233, 241)',
                opacity: 0.1
            },
            blendMode: 'lighter',

            data: congestLine3D
        },
        {

            type: 'lines3D',
            name: "故障",
            effect: {
                show: true,
                trailWidth: 2,
                trailLength: 0.2,
                trailOpacity: 1,
                trailColor: 'rgb(30, 30, 60)'
            },

            lineStyle: {
                width: 1,
                color: 'rgb(50, 50, 150)',
                // color: 'rgb(118, 233, 241)',
                opacity: 0.1
            },
            blendMode: 'lighter',

            data: hitchLine3D
        }
    ];
    myChart_twoOption = {
        backgroundColor:'#000019',
        tooltip: {
            enterable:true,
            confine : true,
            position : "top",
            formatter: function (params) {
                // console.log(params)
                let res = '<span class="tooltip" ' +
                    'style="background:'+params.color+'" id="toolTitle"></span><br/>';
                res +=  params.name+ '数据中心<br/>';
                res += '<span class="tooltip" id="toolResource">资源占用率：'+ params.data.run+ '</span><br/>';
                res += '<span class="tooltip" id="toolRunStatus">运行状态：' + params.seriesName+ '</span><br/>';
                res += '<span class="tooltip" id="toolDetailed">详情>></span><br/>';
                // console.log(" name"+params[0].name);
                return res;
            },
            backgroundColor : 'rgba(2,15,48,0.7)',
            padding : [5,20,5]

        },
        legend: {
            selectedMode: 'false',
            left: 'center',
            top: "20",
            data: ["正常", "空闲", "拥堵", "故障"],
            orient: 'horizontal',
            textStyle: {
                color: '#fff'
            }
        },
        globe: {
            baseTexture :'img/world.topo.bathy.200401.jpg',
            heightTexture: 'img/bathymetry_bw_composite_4k.jpg',
            displacementScale: 0.1,
            displacementQuality: 'high',

            baseColor: '#ffffff',

            shading: 'realistic',
            realisticMaterial: {
                roughness: 0,
                metalness: 0.2
            },
            light: {
                ambient: {
                    intensity: 1
                },
                main: {
                    intensity: 1,
                    shadow: false
                },
            },
            viewControl: {
                autoRotate: false
            },
            silent: true
        },
        series: series
    };

    myChart_two.setOption(myChart_twoOption);

    // window.addEventListener('keydown', function () {
    //     series.forEach(function (series, idx) {
    //         myChart.dispatchAction({
    //             type: 'lines3DToggleEffect',
    //             seriesIndex: idx
    //         });
    //     })
    // });

    // 改变右侧数据
    myChart_two.on('click', function (params){
        console.log('params:', params.value)
        // console.log(option.globe.viewControl.targetCoord);
        // $("#dataCenterName").
    })
});