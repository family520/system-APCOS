let vm = new Vue({
    el: "#app",
    data() {
        return {
            isContShow: false,
            // isCont3DShow:false,
            isSearchShow: true,
            isLeftShow: true,
            searchImgSrc: "img/search.png",
            ttImg: "img/2-3D.png",
            FullScreen: "img/FullScreen.png",
            showLeft: "img/isShow.png",
            dataCenterSelectItems: [], //数据中心下拉菜单中数据数组
            searchInputData : "", //搜索框的值

        }
    },
    methods: {
        //是否显示搜索框
        isSearch() {
            this.isSearchShow = !this.isSearchShow;
            if (this.searchImgSrc === "img/search.png") {
                this.searchImgSrc = "img/searchWhite.png";
            } else {
                this.searchImgSrc = "img/search.png";
            }
        },
        // 是否显示左边
        isShowLeft() {
            this.isLeftShow = !this.isLeftShow;
            if (this.showLeft === "img/isShow.png") {
                this.showLeft = "img/showBlue.png";
            } else {
                this.showLeft = "img/isShow.png";
            }
        },
        //2D与3D切换
        ttShow() {
            this.isContShow = !this.isContShow;
            // this.isCont3DShow = !this.isCont3DShow;
        },
        //全屏显示与退出
        fullScreenImg() {
            if (this.FullScreen === "img/FullScreen.png") {
                this.FullScreen = "img/fullBlue.png";
            } else {
                this.FullScreen = "img/FullScreen.png";
            }
            let aaa = 1;
            if (aaa === 1) {
                if (document.documentElement.RequestFullScreen) {
                    document.documentElement.RequestFullScreen();
                }
                //兼容火狐
                console.log(document.documentElement.mozRequestFullScreen);
                if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                }
                //兼容谷歌等可以webkitRequestFullScreen也可以webkitRequestFullscreen
                if (document.documentElement.webkitRequestFullScreen) {
                    document.documentElement.webkitRequestFullScreen();
                }
                //兼容IE,只能写msRequestFullscreen
                if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                }
                aaa = 0;
            }
            if (aaa === 0) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
                aaa = 1;
            }
        },
        //搜索、下拉定位 地球点
        earthDataCenterPosition(positionVal){
            if(positionVal){
                myChart_twoOption.globe.viewControl.targetCoord = positionVal;
                myChart_two.setOption(myChart_twoOption,true)
            }else {
                for(let i = 0 ; i< this.dataCenterSelectItems.length; i ++){

                    let dataData = (this.dataCenterSelectItems[i].name).toLocaleLowerCase(); //dataCenterSelectItems里面的数据
                    let inputData = (this.searchInputData).toLocaleLowerCase() + "数据中心";  // 输入框的值
                    if(dataData === inputData){
                        myChart_twoOption.globe.viewControl.targetCoord = this.dataCenterSelectItems[i].value;
                        myChart_two.setOption(myChart_twoOption,true);
                        this.searchInputData = "";
                    }
                }
            }
        }
    }
});

let myChart_twoOption; // 地图的配置选项