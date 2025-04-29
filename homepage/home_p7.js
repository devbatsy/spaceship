import { SYD_VAR, __SYD, __c, __g, __p, __sC, __u , __v , getState } from "./sydneyDom_v3.js";

__SYD.p7 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background:#dbe1e4;" + __sC['pages'](),
            id:"p7"
        },
        [
            __SYD.p7SubHeader()
        ],{type:"p7"}
    )
}

__SYD.p7SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:10px;padding:100px ${__p(["p7SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            __c(
                "div",
                {
                    style:SYD_VAR.page2Text2.get() + `color:#171717;font-size:${__p(["p7SubHeader" , "headerTextSize"],"34px")};font-weight:700;`
                },
                [
                    "our patners"
                ]
            ),
            __SYD.p7_custom_slider()
        ],
        {
            createState:{
                stateName:"p7SubHeader",
                state:{
                    mobilePadState:false,
                    headerTextSize:"34px",
                    __flex_child:'row',
                    resize:false
                    // breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , headerTextSize:"24px"}},
                    {size:"<700px" , prop:{__flex_child:'column' , resize:true}}
                    // {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , headerTextSize:"34px" , __flex_child:'row' , resize:false}//breakVal:false
            }
        }
    )
}

const tabCount = 3;

__SYD.p7_custom_slider_tabs = (val) =>{
    return __c(
        "div",
        {
            style:`flex:0 0 auto;height:fit-content;width:${__p(["p7_custom_slider" , "tabWidth"],()=>((100) / 3))()}%;padding:0px 7px;`
        },
        [
            __c(
                "div",
                {
                    style:`min-height:250px;height:fit-content;width:100%; background: transparent;border-radius:15px;display:flex;justify-content:center;align-items:center;`
                },
                [
                    __c(
                        "div",
                        {
                            style:`min-height:250px;padding:10px 20px;flex:0 0 auto;height:calc(100% - 5px);font-size:20px;color:#fff; width:calc(100% - 5px);border-radius:inherit;display:flex;align-items:center;gap:30px;flex-direction:column;justify-content:center;text-align:center;background-image:url(./assets/sp${val+1}.png)`,
                            class:"p7_custom_slider_tabs"
                        },
                        [
                            
                        ],
                        {genericStyle:["bg_fit"]}
                    )
                ]
            )
        ]
    )
}

__SYD.p7_custom_slider = () =>{
    return __c(
        "div",
        {
            style:"min-height:150px;width:100%;display:flex;align-items:center;overflow-x:hidden;",
            class:"no_display cus_slider__p7",
            // onmousemove:`slider_mm(event)`,
            // onmousedown:`slider_md(event)`,
            // onmouseup:`slider_mu(event)`,
            draggable:"false"
        },
        [
            __SYD.p7_custom_slider_tabs(0),
            __SYD.p7_custom_slider_tabs(1),
            __SYD.p7_custom_slider_tabs(2),
            __SYD.p7_custom_slider_tabs(3),
            __SYD.p7_custom_slider_tabs(4),
            __SYD.p7_custom_slider_tabs(5),

        ],
        {
            createState:{
                stateName:"p7_custom_slider",
                state:{
                    tabCount:3,
                    tabWidth:() =>{
                        const tabCount = __p(["p7_custom_slider" , "tabCount"]);
                        return ((100) / tabCount);
                    },
                    mouseDown:false,
                    mouseX:0,
                    move:0,
                    step:0,
                    updateElState:({prop , value}) =>{
                        const state = __g("p7_custom_slider");
                        state[`${prop}`] = value;
                        __u("p7_custom_slider" , {type:"a" , value:state})
                    }
                }
            }
        }
    )
}