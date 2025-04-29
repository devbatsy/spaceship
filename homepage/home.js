import { __c, __g, __m, __SYD, __u, __v , __p, manage_mediaQuery, SYD_VAR } from "./sydneyDom_v3.js"
import "./routeFiles/route.js"
import "./routeFiles/navBar.js"
import "./home_p1.js"
import "./home_p2.js"
import "./home_p3.js"
import "./home_p4.js"
import "./home_p5.js"
import "./home_p6.js"
import "./home_p7.js"
import "./home_p8.js"

__SYD.container = () =>{
    return __c(
        "div",
        {
            style:`min-height:100vh;width:100vw;background:${SYD_VAR.mainClr.get()};font-family:font2;`
        },
        [
            __SYD.navBar(),
            __SYD.p1(),
            __SYD.p2(),
            __SYD.p3(),
            __SYD.p4(),
            __SYD.p5(),
            __SYD.p6(),
            __SYD.p7(),
            __SYD.p8()
        ]
    )
}

__m(__SYD.container() , () =>{
    manage_mediaQuery(window.innerWidth);

    const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
            const width = entry.contentRect.width;
            const height = entry.contentRect.height;

            const state = __g("p7_custom_slider");
            
            if(width > 1000) state.tabCount = 4
            else if(width > 700) state.tabCount = 3
            else if(width > 500)state.tabCount = 2
            else state.tabCount = 1;
            
            __u("p7_custom_slider" , {type:"a" , value:state})
        }
    });
      
    observer.observe(document.querySelector(".cus_slider__p7"));

    setInterval(() => {        
            if((__p(["p7_custom_slider" , "tabWidth"])() * 0.01 * __v["p7_custom_slider"].offsetWidth)*__p(["p7_custom_slider" , "tabCount"]) + __v["p7_custom_slider"].scrollLeft < __v["p7_custom_slider"].scrollWidth)
            {
                __v["p7_custom_slider"].scrollBy({left:+(__p(["p7_custom_slider" , "tabWidth"])() * 0.01 * __v["p7_custom_slider"].offsetWidth) , behaviour:"smooth"});
            }
            else if((__p(["p7_custom_slider" , "tabWidth"])() * 0.01 * __v["p7_custom_slider"].offsetWidth)*__p(["p7_custom_slider" , "tabCount"]) + __v["p7_custom_slider"].scrollLeft >= __v["p7_custom_slider"].scrollWidth){
                __v["p7_custom_slider"].scrollLeft = 0; 
            }
            else __v["p7_custom_slider"].scrollLeft = 0; 
            
            __p(["p4SubHeader" , "updateText"])();

            __p(["p2SubHeader" , "updateText"])();

    }, 3000);

    window.addEventListener("scroll" , e =>{
        // console.log(window.scrollY)
        const indexes = [0,1,3,4,5,7];
        for(let i = 0; i < indexes.length; i++)
        {
            const rec = __v[`p${indexes[i]+1}`].getBoundingClientRect();
            const elTop = rec.top + window.scrollY;
            const elBottom = elTop + __v[`p${indexes[i]+1}`].offsetHeight;
            const windowCenter = window.scrollY + window.innerHeight / 2;

            if(elTop <= windowCenter && elBottom >= windowCenter)
            {
                const state = __g("navBar");
                state.currentNav = indexes[i];
                __u("navBar" , {type:"a" , value:state})

                if(`p${indexes[i]+1}` === "p4")
                {
                    if(!__p(["p4_success_count_tab" , "startAnimate"],false))
                    {
                        __p(["p4_success_count_tab" , "fill"])()
                    }
                    
                }
            }
        }

        //nav bg edit
        if(window.scrollY > 80)
        {
            if(__p(["navBar" , "navBg"],"transparent") !== "#2f2f2f")
            {
                const state = __g("navBar");
                state.navBg = "#2f2f2f";
                __u("navBar" , {type:"a" , value:state});
            }
        }else{
            if(__p(["navBar" , "navBg"],"transparent") !== "transparent")
                {
                    const state = __g("navBar");
                    state.navBg = "transparent";
                    __u("navBar" , {type:"a" , value:state});
                }
        }   
        //nav bg edit
    })
})