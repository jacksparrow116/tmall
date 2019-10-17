(function(){

    /* 阻止a标签刷新页面 */
    (function(){
        let a = document.getElementsByTagName("a");
        [...a].forEach((ele)=>{
            ele.onclick = function(e){
                e.preventDefault();
            }
        })
    })();

    // 头部轮播
    (function(){
        let img = document.querySelectorAll("#banner .img>li"),
            btn = document.querySelectorAll("#banner .control>li"),
            bg = document.querySelector("#main .main-category")
        ;
        let idx = 0,
            color = ["#8a682e","#e8e8e8","#ee7a2a","#e8e8e8","#f0b349","#1b2e46"] //两侧背景颜色
        ;
        //点击轮播
        bg.style.backgroundColor = color[0];
        btn.forEach((ele,index)=>{
            ele.addEventListener("click", function(){
                if( this === btn[idx] ) return;
                btn[idx].classList.remove("show");
                img[idx].classList.remove("show");
                btn[index].classList.add("show");
                img[index].classList.add("show");
                bg.style.backgroundColor = color[index];
                idx = index;
            })
        });
        //自动轮播
        function auto(){
            btn[idx].classList.remove("show");
            img[idx].classList.remove("show");
            idx ++;
            idx %= btn.length;
            btn[idx].classList.add("show");
            img[idx].classList.add("show");
            bg.style.backgroundColor = color[idx];
        }
        setInterval(auto, 3000);
    })();

    //tmmart轮播
    (function(){
        let aTab = document.querySelectorAll(".tmmart .main-content-right .banner-con .tab a"),
            aImg = document.querySelectorAll(".tmmart .main-content-right .banner-con .tab-img a"),
            oCon = document.querySelector(".tmmart .main-content-right .banner-con")
        ;
        let laIdx = 0;
        let timer;
        aTab.forEach((ele,index)=>{
            //hover
            ele.addEventListener("mouseenter", function(){
                if( index === laIdx ) return;
                aTab[laIdx].classList.remove("on");
                aImg[laIdx].classList.remove("on");
                laIdx = index;
                aTab[index].classList.add("on");
                aImg[index].classList.add("on");
            });
        });
        //自动轮播
        function auto1(){
            aTab[laIdx].classList.remove("on");
            aImg[laIdx].classList.remove("on");
            laIdx += 1;
            laIdx %= aTab.length;
            aTab[laIdx].classList.add("on");
            aImg[laIdx].classList.add("on");
        }
        timer = setInterval(auto1, 2000);
        //鼠标移入banner重置定时器
        oCon.addEventListener("mouseenter", function(){
            clearTimeout(timer);
        })
        oCon.addEventListener("mouseleave", function(){
            timer = setInterval(auto1, 2000);
        })
    })();

    //页面滚动 搜索栏 侧边导航
    (function(){
        let topSearch = document.getElementById("top-search"),
            sideNav = document.getElementById("side-nav"),
            navLi = document.querySelectorAll("#side-nav li"),
            tmmartT = document.querySelector(".main-content .tmmart").offsetTop,
            tmhkT = document.querySelector(".main-content .tmhk").offsetTop,
            beautyT = document.querySelector(".main-content .main-beauty").offsetTop,
            electronicsT = document.querySelector(".main-content .main-electronics").offsetTop,
            groceryT = document.querySelector(".main-content .main-grocery").offsetTop,
            homeT = document.querySelector(".main-content .main-home").offsetTop,
            outdoorT = document.querySelector(".main-content .main-outdoor").offsetTop,
            wonderfulT = document.querySelector(".main-content .wonderful").offsetTop
        ;
        let arr = [tmmartT-110,tmhkT-110,beautyT-70,electronicsT-70,groceryT-70,homeT-70,outdoorT-70,wonderfulT-70];
        let lastIdx = 0;
        window.onscroll = function () {
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            //搜索栏显示隐藏
            if( scrollTop >= 750 ){
                topSearch.classList.add("show");
            }else{
                topSearch.classList.remove("show");
            }
            //侧边导航显示隐藏
            if( scrollTop >= 550 ){
                sideNav.classList.add("show");
            }else{
                sideNav.classList.remove("show");
            }
            //侧边导航板块变换
            navLi.forEach((ele,index)=>{
                //侧边导航点击事件
                navLi.forEach((ele,index)=>{
                    ele.onclick = function () {
                        $("html,body").animate({scrollTop:arr[index]},300);
                        if( index === 8 ){
                            $("html,body").animate({scrollTop:0},300);
                        }
                        // document.body.scrollTop ? document.body.scrollTop = arr[index]
                        //                         : document.documentElement.scrollTop = arr[index];
                    }
                })
                //页面滚动触发
                if( scrollTop >= arr[index] ){
                    navLi[index].classList.add("on");
                    if( lastIdx === index ) return;
                    navLi[lastIdx].classList.remove("on");
                    lastIdx = index;
                }else{
                    navLi[index].classList.remove("on");
                }
            })
        }
    })();

    //右侧mallbar
    (function(){
        let oBar = document.getElementById("mallbar"),
            oBox1 = document.querySelector("#mallbar .box1"),
            aIcon = document.querySelectorAll("#mallbar .icon"),
            aSec = document.querySelectorAll("#mallbar .icon .sec"),
            oTop = document.querySelector("#mallbar .box2 .top")
        ;
        oBox1.style.marginTop = (oBar.offsetHeight/2 - oBox1.offsetHeight/2 -20) + "px";
        window.onresize = function(){
            oBox1.style.marginTop = (oBar.offsetHeight/2 - oBox1.offsetHeight/2 -20) + "px";
        }
        //说明显示隐藏
        aIcon.forEach((ele,index)=>{
            let timer;
            ele.addEventListener("mouseenter", enter);
            ele.addEventListener("mouseleave", leave);
            function enter(){
                timer = setTimeout(()=>{
                    aSec[index].classList.add("show")
                }, 200);
            }
            function leave(){
                setTimeout(()=>{
                    aSec[index].classList.remove("show");
                    clearTimeout(timer);
                }, 100);
            }
        })
        oTop.addEventListener("click", function(){
            $("html,body").animate({scrollTop:0},300);
        })
    })();

    //wonderful懒加载
    // (function(){
    //     function lazyLoad(){
    //         let line = document.querySelectorAll(".wonderful .wonderful-line");
    //         line.forEach((ele,index)=>{
    //             if ( ele.offsetTop >=  ) {}
    //             ele.offsetTop
    //         })
    //     }
    // })();

})();














