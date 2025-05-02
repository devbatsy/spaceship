import { __c, __g, __p, __sC, __SYD, __u, __v, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p2 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;flex-direction:column;align-items:center;background:#2f2f2f;" + __sC['pages'](),
            id:"p2"
        },
        [
            __SYD.p2SubHeader()
        ],{type:"p2"}
    )
}

__SYD.p2SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;gap:20px;padding:30px ${__p(["p2SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:${__p(["p2SubHeader" , "breakVal"],false) ? "column" : "row"};text-align:${__p(["p2SubHeader" , "breakVal"],false) ? "center" : "left"};`
        },
        [
            __c(
                "div",
                {
                    style:`height:fit-content;width:${__p(["p2SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;justify-content:center;`
                },
                [
                    __SYD.p2_tab()
                ]
            ),
            __c(
                "div",
                {
                    style:`height:100vw;max-height:calc(100vh - 150px);width:${__p(["p2SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:20px;background-image:url("./assets/board.png");`
                },[],{genericStyle:["bg_fit"]}
            )
        ],
        {
            createState:{
                stateName:"p2SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    breakVal:false,
                    textChange:["presale" , "marketing" , "project"],
                    textIndex:0,
                    textCont:"presale",
                    updateText:() =>{
                        const state = __g("p2SubHeader");
                        if(state.textIndex < 2) state.textIndex++;
                        else state.textIndex = 0;
                        state.textCont = state.textChange[state.textIndex];
                        
                        __u("p2SubHeader" , {type:"a" , value:state});
                        __v["p2_changeText"].style.display = "none";
                        const timer = setTimeout(() => {
                            __v["p2_changeText"].style.display = "inline-block";

                            clearTimeout(timer)
                        }, 50);
                        
                    }
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , breakVal:false}
            }
        }
    )
}

__SYD.p2_tab = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;padding:60px 0px;display:flex;flex-direction:column;gap:30px;border-radius:30px;",
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
                ]
            ),
            __SYD.p2_buttons({val:"learn more" , link:"#p5"}),
        ]
    )
}

__SYD.p2_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get() + "color:#fff;font-size:18px;"
        },
        [
            __c(
                "p",
                {},["We are Spaceship Marketing"]
            )
        ]
    )
}


__SYD.p2_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color:#fff;",
        },
        [
            __c(
                "p",
                {style:`font-size:${__p(["p2SubHeader" , "breakVal"],false) ? "30px" : "40px"};font-weight:700;text-transform:capitalize;perspective:700px;`},[
                    "We are taking your ",
                    __c("span" , {class:"flip_entry_animation" , style:"color:#fff;"} , [__p(["p2SubHeader" , "textCont"],"presale")],{type:"p2_changeText"}),
                    " to the next Level"
                ]
            )
        ]
    )
}

__SYD.p2_text3 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get() + "font-size:14px;font-weight:300;line-height:25px;"
        },
        [
            __c(
                "p",
                {},[`Spaceship Marketing is a premium service offering high-impact solutions that deliver real results. With our vast network, powerful resources, and some of the most competitive rates in the industry, we give our clients flexible, budget-friendly options to ensure their project’s success.`]
            )
        ]
    )
}

__SYD.p2_buttons = ({val = "" , link = "" , cls = "clickButton"}) =>{
    return __c(
        "a",
        {
            style:SYD_VAR.buttonStyle1.get() + `display:flex;align-self:${__p(["p2SubHeader" , "breakVal"],false) ? "center" : "flex-start"};`,
            class:cls
        },
        [
            __c("p" , {style:"width:fit-content;text-transform:capitalize;"},[val])
        ],
        {
            events:{
                onclick:e =>{
                    location.href = link
                }
            }
        }
    )
}