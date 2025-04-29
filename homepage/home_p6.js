import { __SYD, __c, __g, __p, __sC, __u , __v , getState } from "./sydneyDom_v3.js";

let txC = ['-0%','-100%','-200%','-300%'];

let intervel_sec2_count;

const content = [
    {
        title:'Ayesha Khan',
        img:'aye.jpg',
        add:'my Address',
        testimony:`A shoutout to the spaceship team taking DeFi marketing by storm.`
    },
    {
        title:'Omar Ahmed',
        img:'omar.png',
        add:'my Address',
        testimony:`Spaceship Marketing is about to dominate BSC.`
    },
    {
        title:'Fatima Javed',
        img:'fat.jpg',
        add:'my Address',
        testimony:`Big respect to Spaceship Marketing for filling private sales and spreading the word fast.`
    },
    {
        title:'Ali Rehman',
        img:'ali.jpg',
        add:'my Address',
        testimony:`Spaceship Marketing is leading this — expect a strong launch.`
    }
]

__SYD.p6 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background:#2f2f2f;" + __sC['pages'](),
            id:"p6"
        },
        [
            __SYD.p6SubHeader()
        ],{type:"p6"}
    )
}

__SYD.p6SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:10px;padding:100px ${__p(["p6SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            __SYD.p6_top_tab_btn(),
            __SYD.p6_custom_slider()
        ],
        {
            createState:{
                stateName:"p6SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row',
                    resize:false
                    // breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column' , resize:true}}
                    // {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row' , resize:false}//breakVal:false
            }
        }
    )
}

__SYD.p6_top_tab_btn = () =>{
    return __c(
        "div",
        {
            style:`display:${__p(["p6SubHeader" , "p6Btn"], true) ? "flex" : "none"};flex-direction:row;gap:15px;height:fit-content;width:fit-content;width:100%;justify-content:space-between;`
        },
        [
            __c(
                "div",
                {
                    style:"height:40px;width:40px;border-radius:5px;display:flex;justify-content:center;align-items:center;border-width:1px;border-color:color-mix(in oklab, #ffffff 12%, transparent);",
                    class:"clickButton_p6"
                },
                [
                    __c("i" , {style:"height:16px;width:16px;color:#fff;font-size:16px;backround:#fff;" , class:"fa-solid fa-left-long"})
                ],
                {
                    type:"top_tab_btn1_p6",
                    events:{
                        onclick: e =>{
                            if(__v["p6_custom_slider"].scrollLeft > 0)
                            {
                                __v["p6_custom_slider"].scrollBy({left:-(__p(["p6_custom_slider" , "tabWidth"],()=>((100) / 4))() * 0.01 * __v["p6_custom_slider"].offsetWidth) , behaviour:"smooth"});
                            }else
                            {
                                __v["p6_custom_slider"].scrollLeft  = __v["p6_custom_slider"].scrollWidth;
                            }
                            
                        }
                    }
                }
            ),
            __c(
                "div",
                {
                    style:"height:40px;width:40px;border-radius:5px;display:flex;justify-content:center;align-items:center;border-width:1px;border-color:color-mix(in oklab, #ffffff 12%, transparent);",
                    class:"clickButton_p6"
                },
                [
                    __c("i" , {style:"height:16px;width:16px;color:#fff;font-size:16px;backround:#fff;" , class:"fa-solid fa-right-long"})
                ],
                {
                    type:"top_tab_btn2_p6",
                    events:{
                        onclick: e =>{
                            if((__p(["p6_custom_slider" , "tabWidth"])() * 0.01 * __v["p6_custom_slider"].offsetWidth) + __v["p6_custom_slider"].scrollLeft < __v["p6_custom_slider"].scrollWidth)
                            {
                                __v["p6_custom_slider"].scrollBy({left:+(__p(["p6_custom_slider" , "tabWidth"])() * 0.01 * __v["p6_custom_slider"].offsetWidth) , behaviour:"smooth"});
                            }
                            else if((__p(["p6_custom_slider" , "tabWidth"])() * 0.01 * __v["p6_custom_slider"].offsetWidth) + __v["p6_custom_slider"].scrollLeft >= __v["p6_custom_slider"].scrollWidth){
                                __v["p6_custom_slider"].scrollLeft = 0; 
                            }
                            else __v["p6_custom_slider"].scrollLeft = 0;       
                            
                            // __p(["p6_custom_slider" , "updateElState"])({prop:"step" , value:__p(["p6_custom_slider" , "step"])})
                        }
                    }
                }
            )
        ]
    )
}


const tabCount = 1;

__SYD.p6_custom_slider_tabs = (val) =>{
    return __c(
        "div",
        {
            style:`flex:0 0 auto;height:fit-content;width:${__p(["p6_custom_slider" , "tabWidth"],()=>((100) / 1))()}%;padding:0px 7px;`
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
                            style:"min-height:250px;padding:10px 20px;flex:0 0 auto;height:calc(100% - 5px);font-size:20px;color:#fff; width:calc(100% - 5px);border-radius:inherit;border:5px solid rgba(0, 0, 0, 0.07);display:flex;align-items:center;gap:30px;flex-direction:column;justify-content:center;text-align:center;",
                            class:"p6_custom_slider_tabs"
                        },
                        [
                            __c(
                                "p",
                                {
                                    style:"font-size:16px;font-style:italics;color:#fff;font-weight:300;"
                                },
                                [
                                    `${content[val].testimony}`
                                ]
                            ),
                            __c(
                                "div",
                                {
                                    style:"font-size:20px;color:#5A66CC;height:fit-content;width:fit-content;display:flex;flex-direction:column;gap:20px;align-items:center;"
                                },
                                [
                                    __c("p" , {style:"font-weight:900"} , [`${content[val].title}`]),
                                    __c("div" , {style:"height:fit-content;width:fit-content;display:flex;gap:5px;"},[
                                        __c("i" , {style:"height:18px;width:18px;font-size:18px;" , class:"fas fa-star"}),
                                        __c("i" , {style:"height:18px;width:18px;font-size:18px;" , class:"fas fa-star"}),
                                        __c("i" , {style:"height:18px;width:18px;font-size:18px;" , class:"fas fa-star"}),
                                        __c("i" , {style:"height:18px;width:18px;font-size:18px;" , class:"fas fa-star"}),
                                        __c("i" , {style:"height:18px;width:18px;font-size:18px;" , class:"fas fa-star"}),
                                    ])
                                ]
                            )
                        ]
                    )
                ]
            )
        ]
    )
}

__SYD.p6_custom_slider = () =>{
    return __c(
        "div",
        {
            style:"min-height:150px;width:100%;display:flex;align-items:center;overflow-x:hidden;",
            class:"no_display cus_slider",
            // onmousemove:`slider_mm(event)`,
            // onmousedown:`slider_md(event)`,
            // onmouseup:`slider_mu(event)`,
            draggable:"false"
        },
        [
            __SYD.p6_custom_slider_tabs(0),
            __SYD.p6_custom_slider_tabs(1),
            __SYD.p6_custom_slider_tabs(2),
            __SYD.p6_custom_slider_tabs(3)

        ],
        {
            createState:{
                stateName:"p6_custom_slider",
                state:{
                    tabCount:1,
                    tabWidth:() =>{
                        const tabCount = __p(["p6_custom_slider" , "tabCount"]);
                        return ((100) / tabCount);
                    },
                    mouseDown:false,
                    mouseX:0,
                    move:0,
                    step:0,
                    updateElState:({prop , value}) =>{
                        const state = __g("p6_custom_slider");
                        state[`${prop}`] = value;
                        __u("p6_custom_slider" , {type:"a" , value:state})
                    }
                }
            }
        }
    )
}

setInterval(() => {
    __v["top_tab_btn2_p6"].click()
}, 4000);