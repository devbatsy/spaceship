import { __c, __g, __p, __sC, __SYD, __u, __v, SYD_VAR } from "../sydneyDom_v3.js";

__SYD.p2 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background: transparent;" + __sC['pages'](),
            id:"p2"
        },
        [
            __SYD.p2SubHeader()
        ]
    )
}

__SYD.p2SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;gap:20px;padding:0 ${__p(["p2SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:column;`
        },
        [
            __SYD.p2_top_tab(),
            __SYD.p2_custom_slider()
        ],
        {
            createState:{
                stateName:"p2SubHeader",
                state:{
                    mobilePadState:false,
                    breakVal:false,
                    p2Btn:true
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px" , p2Btn:false}},
                    {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , breakVal:false , p2Btn:true}
            }
        }
    )
}

__SYD.p2_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get()
        },
        [
            __c(
                "p",
                {},["Top contributors"]
            )
        ]
    )
}

__SYD.p2_top_tab_btn = () =>{
    return __c(
        "div",
        {
            style:`display:${__p(["p2SubHeader" , "p2Btn"], true) ? "flex" : "none"};flex-direction:row;gap:15px;height:fit-content;width:fit-content;`
        },
        [
            __c(
                "div",
                {
                    style:"height:40px;width:40px;border-radius:5px;display:flex;justify-content:center;align-items:center;border-width:1px;border-color:color-mix(in oklab, #ffffff 12%, transparent);",
                    class:"clickButton_p2"
                },
                [
                    __c("i" , {style:"height:16px;width:16px;color:#fff;font-size:16px;backround:#fff;" , class:"fa-solid fa-left-long"})
                ],
                {
                    type:"top_tab_btn1",
                    events:{
                        onclick: e =>{
                            if(__v["p2_custom_slider"].scrollLeft > 0)
                            {
                                __v["p2_custom_slider"].scrollBy({left:-(__p(["p2_custom_slider" , "tabWidth"],()=>((100) / 4))() * 0.01 * __v["p2_custom_slider"].offsetWidth) , behaviour:"smooth"});
                            }else
                            {
                                __v["p2_custom_slider"].scrollLeft  = __v["p2_custom_slider"].scrollWidth;
                            }
                            
                        }
                    }
                }
            ),
            __c(
                "div",
                {
                    style:"height:40px;width:40px;border-radius:5px;display:flex;justify-content:center;align-items:center;border-width:1px;border-color:color-mix(in oklab, #ffffff 12%, transparent);",
                    class:"clickButton_p2"
                },
                [
                    __c("i" , {style:"height:16px;width:16px;color:#fff;font-size:16px;backround:#fff;" , class:"fa-solid fa-right-long"})
                ],
                {
                    type:"top_tab_btn2",
                    events:{
                        onclick: e =>{
                            if(__v["p2_custom_slider"].scrollLeft <= __v["p2_custom_slider"].scrollWidth)
                            {
                                __v["p2_custom_slider"].scrollBy({left:+(__p(["p2_custom_slider" , "tabWidth"])() * 0.01 * __v["p2_custom_slider"].offsetWidth) , behaviour:"smooth"});
                            }else __v["p2_custom_slider"].scrollLeft = 0;       
                            
                            // __p(["p2_custom_slider" , "updateElState"])({prop:"step" , value:__p(["p2_custom_slider" , "step"])})
                        }
                    }
                }
            )
        ]
    )
}

const tabCount = 4;

__SYD.p2_custom_slider_tabs = (val) =>{
    return __c(
        "div",
        {
            style:`flex:0 0 auto;height:fit-content;width:${__p(["p2_custom_slider" , "tabWidth"],()=>((100) / 4))()}%;padding:0px 7px;`
        },
        [
            __c(
                "div",
                {
                    style:`height:120px;width:100%; background: #4d4c5a;border-radius:15px;display:flex;justify-content:center;align-items:center;`
                },
                [
                    __c(
                        "div",
                        {
                            style:"flex:0 0 auto;height:calc(100% - 5px);font-size:20px;color:#fff; width:calc(100% - 5px);border-radius:inherit; background:#2c2c39;"
                        },
                        [
                            `${val}`
                        ]
                    )
                ]
            )
        ]
    )
}

slider_mm = (e) =>{
    const cx = e.clientX
    if(__p(["p2_custom_slider" , "mouseDown"],false))
    {
        const prevX = __p(["p2_custom_slider" , "mouseX"]);

        if(cx > prevX + 10)
        {
            __v["p2_custom_slider"].scrollBy({left:-1 , behaviour:"smooth"});
            __p(["p2_custom_slider" , "updateElState"])({prop:"move" , value:__p(["p2_custom_slider" , "move"]) + 1});
        }else if(cx < prevX - 10){
            __v["p2_custom_slider"].scrollBy({left:+1 , behaviour:"smooth"});
            __p(["p2_custom_slider" , "updateElState"])({prop:"move" , value:__p(["p2_custom_slider" , "move"]) + 1});
        }
    }
}   

slider_md = (e) =>{
    const state = __g("p2_custom_slider");
    state.mouseDown = true;
    state.mouseX = e.clientX;
    __u("p2_custom_slider" , {type:"a" , value:state})
}

slider_mu = (e) =>{
    if(e.clientX < __p(["p2_custom_slider" , "mouseX"]))
    {       
        __v["p2_custom_slider"].scrollBy({left:-__p(["p2_custom_slider" , "move"]) , behaviour:"smooth"});

        __v["p2_custom_slider"].scrollBy({left:+(__p(["p2_custom_slider" , "tabWidth"])() * 0.01 * __v["p2_custom_slider"].offsetWidth) , behaviour:"smooth"});
    }else if(e.clientX > __p(["p2_custom_slider" , "mouseX"]))
    {
        __v["p2_custom_slider"].scrollBy({left:+__p(["p2_custom_slider" , "move"]) , behaviour:"smooth"});

        __v["p2_custom_slider"].scrollBy({left:-(__p(["p2_custom_slider" , "tabWidth"])() * 0.01 * __v["p2_custom_slider"].offsetWidth) , behaviour:"smooth"});
    }

    __p(["p2_custom_slider" , "updateElState"])({prop:"move" , value:0})
    
    const state = __g("p2_custom_slider");
    state.mouseDown = false;
    state.mouseX = e.clientX;
    __u("p2_custom_slider" , {type:"a" , value:state})
}

__SYD.p2_custom_slider = () =>{
    return __c(
        "div",
        {
            style:"min-height:150px;width:100%;display:flex;align-items:center;overflow-x:hidden;",
            class:"no_display cus_slider",
            onmousemove:`slider_mm(event)`,
            onmousedown:`slider_md(event)`,
            onmouseup:`slider_mu(event)`,
            draggable:"false"
        },
        [
            __SYD.p2_custom_slider_tabs(1),
            __SYD.p2_custom_slider_tabs(2),
            __SYD.p2_custom_slider_tabs(3),
            __SYD.p2_custom_slider_tabs(4)

        ],
        {
            createState:{
                stateName:"p2_custom_slider",
                state:{
                    tabCount:4,
                    tabWidth:() =>{
                        const tabCount = __p(["p2_custom_slider" , "tabCount"]);
                        return ((100) / tabCount);
                    },
                    mouseDown:false,
                    mouseX:0,
                    move:0,
                    step:0,
                    updateElState:({prop , value}) =>{
                        const state = __g("p2_custom_slider");
                        state[`${prop}`] = value;
                        __u("p2_custom_slider" , {type:"a" , value:state})
                    }
                }
            }
        }
    )
}

__SYD.p2_top_tab = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;display:flex;justify-content:space-between;padding:20px 0px;border-bottom:1px solid rgba(255, 255, 255, 0.1);"
        },
        [
            __SYD.p2_text2(),
            __SYD.p2_top_tab_btn()
        ]
    )
}

__SYD.p2_tab = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;padding:60px 20px;display:flex;flex-direction:column;gap:30px;border-radius:30px;background:#fff;",
            class:"p2_tab"
        },
        [
            __SYD.p2_text1(),
            __SYD.p2_text2(),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;gap:30px;padding:10px 0px;flex-direction:column;"
                },
                [   
                    __SYD.p2_text3(),
                    __SYD.p2_text4(),
                ]
            ),
            __SYD.p2_button()

        ]
    )
}

__SYD.p2_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["read more about Alita"]
            )
        ]
    )
}

__SYD.p2_text3 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get()
        },
        [
            __c(
                "p",
                {},["Born from Ashes. Built for Freedom. Alita AI is forged in the image of the iconic Alita: Battle Angel—a cyborg who defied her past to rewrite her future. Like her, we rise from the ruins of centralization to arm you with the tools to fight back. Whether you’re crafting AI models, launching tokens, or living fast in our degen casino, Alita AI is your companion on this journey."]
            )
        ]
    )
}

__SYD.p2_text4 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get()
        },
        [
            __c(
                "p",
                {},["She didn’t wait for permission. Neither should you. Alita AI gives you the power to create, conquer, and thrive in a decentralized world—on your terms. This isn’t just a meme coin. It’s your legacy in the making."]
            )
        ]
    )
}

__SYD.p2_button = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.buttonStyle1.get(),
            class:"clickButton"
        },
        [
            __c("p" , {style:"width:fit-content"},["read more"])
        ]
    )
}