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
            showLeft: "img/isShow.png"
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
        }
    }
});