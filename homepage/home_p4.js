import { __c, __g, __p, __sC, __SYD, __u, __v, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p4 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;flex-direction:column;align-items:center;background:linear-gradient(to right, #000000 2%, #000000 82%);" + __sC['pages'](),
            id:"p4"
        },
        [
            __SYD.p4SubHeader()
        ],{type:"p4"}
    )
}

__SYD.p4SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;gap:20px;padding:30px ${__p(["p4SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:${__p(["p4SubHeader" , "breakVal"],false) ? "column" : "row"};text-align:${__p(["p4SubHeader" , "breakVal"],false) ? "center" : "left"};`
        },
        [
            __c(
                "div",
                {
                    style:`height:100vw;max-height:calc(100vh - 150px);width:${__p(["p4SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:20px;background-image:url("./assets/board2.png");`
                },[],{genericStyle:["bg_fit"]}
            ),
            __c(
                "div",
                {
                    style:`height:fit-content;width:${__p(["p4SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;justify-content:center;`
                },
                [
                    __SYD.p4_tab()
                ]
            )
        ],
        {
            createState:{
                stateName:"p4SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    breakVal:false,
                    textChange:["presale" , "private sales"],
                    textIndex:0,
                    textCont:"presale",
                    updateText:() =>{
                        const state = __g("p4SubHeader");
                        if(state.textIndex < 1) state.textIndex++;
                        else state.textIndex = 0;
                        state.textCont = state.textChange[state.textIndex];
                        
                        __u("p4SubHeader" , {type:"a" , value:state});
                        __v["p4_changeText"].style.display = "none";
                        setTimeout(() => {
                            __v["p4_changeText"].style.display = "inline-block";
                        }, 10);
                        
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

__SYD.p4_tab = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;padding:60px 0px;display:flex;flex-direction:column;gap:30px;border-radius:30px;",
            class:"p4_tab"
        },
        [
            __SYD.p4_text1(),
            __SYD.p4_text2(),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;gap:30px;padding:10px 0px;flex-direction:column;"
                },
                [   
                    __SYD.p4_text3(),
                ]
            ),
            __SYD.p4_success_count_tab()
        ]
    )
}

__SYD.p4_text1 = () =>{
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


__SYD.p4_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color:#fff;",
        },
        [
            __c(
                "p",
                {style:`font-size:${__p(["p4SubHeader" , "breakVal"],false) ? "30px" : "40px"};font-weight:700;text-transform:capitalize;perspective:700px` , class:"grad"},[
                    "We have filled a lot of ",
                    __c("span" , {class:"flip_entry_animation" , style:"color:#fff;background:#fff;-webkit-background-clip:text;"} , [__p(["p4SubHeader" , "textCont"],"presale")],{type:"p4_changeText"}),
                    "."
                ]
            )
        ]
    )
}

__SYD.p4_text3 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get() + "font-size:14px;font-weight:300;line-height:25px;"
        },
        [
            __c(
                "p",
                {},[`Speaking of numbers, Spaceship Marketing has everything it takes to Market your projects with effective connections, having a solid track record.`]
            )
        ]
    )
}

__SYD.p4_success_count_tab = () =>{
    return __c(
        "div",
        {
            style:`display:flex;flex-direction:row;gap:10px;height:fit-content;width:100%;align-items:center;justify-content:${__p(["p4SubHeader" , "breakVal"],false) ? "space-around" : "flex-start"};gap:25px;`
        },
        [
            __SYD.p4_success_count_tab__({i:"fas fa-users text-white" , aux:"+" , ref:"connect" , title:"Connections"}),
            __SYD.p4_success_count_tab__({i:"fas fa-list-alt text-white" , aux:"+" , ref:"eth" , title:"ETH Filled"}),
            __SYD.p4_success_count_tab__({i:"fas fa-award text-white" , aux:"M+" , ref:"raise" , title:"Over $15M Raised"}),
        ],
        {
            createState:{
                stateName:"p4_success_count_tab",
                state:{
                    connect:0,
                    eth:0,
                    raise:0,
                    hasAnimate:false,
                    startAnimate:false,
                    fill:() =>{
                        let timer = setInterval(() => {
                            if(!__p(["p4_success_count_tab" , "hasAnimate"],false))
                            {
                                const state = __g("p4_success_count_tab");
                                state.connect = state.connect < 500 ? state.connect+=10 : state.connect;
                                state.eth = state.eth < 9000 ? state.eth+=100 : state.eth;
                                state.raise = state.raise < 15 ? state.raise+=1 : state.raise;
                                state.startAnimate = true;

                                if(state.connect === 500 && state.eth === 9000 && state.raise === 15)
                                {
                                    state.hasAnimate = true;

                                    clearInterval(timer);
                                }
                                __u("p4_success_count_tab" , {type:"a" , value:state})
                            }
                        }, 30);
                        
                    }
                }
            }
        }
    )
}

__SYD.p4_success_count_tab__ = ({i = "" , ref = "val" , aux = "" , title = ""}) =>{
    let iSize = __p(["p4SubHeader" , "breakVal"],false) ? "30px" : "35px";
    let pSize = __p(["p4SubHeader" , "breakVal"],false) ? "25px" : "30px";
    let p__minSize = __p(["p4SubHeader" , "breakVal"],false) ? "16px" : "18px";
    return __c(
        "div",
        {
            style:`height:100%;width:fit-content;display:flex;flex-direction:column;gap:5px;align-items:${__p(["p4SubHeader" , "breakVal"],false) ? "center" : "flex-start"};`
        },
        [
            __c(
                "i",
                {
                    style:`height:${iSize};width:${iSize};font-size:${iSize};color:#5A66CC;`,
                    class:i
                }
            ),
            __c(
                "p",
                {
                    style:`font-size:${pSize};font-weight:400;color:#fff;`
                },
                [
                    `${__p(["p4_success_count_tab" , ref] , 0)}`,
                    __c("span",{style:"color:#5A66CC"},[`${aux}`])
                ]
            ),
            __c(
                "p",
                {
                    style:`font-size:${p__minSize};font-weight:400;color:#5A66CC;`
                },
                [
                    `${title}`
                ]
            )
        ]
    )
}