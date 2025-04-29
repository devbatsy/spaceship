import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p5 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background: #5A66CC;" + __sC['pages'](),
            id:"p5"
        },
        [
            __SYD.p5SubHeader()
        ],{type:"p5"}
    )
}

__SYD.p5SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:50px;padding:30px ${__p(["p5SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            __c(
                "p",
                {
                    style:`font-weight:700;color:#2f2f2f;font-size:${__p(["p5SubHeader" , "headerTextSize"],"34px")}`
                },
                [
                    "Why Choose " , __c("span" , {style:"color:#fff;display:inline-block"},["Us"])
                ]
            ),
            __SYD.p5_tabs()
        ],
        {
            createState:{
                stateName:"p5SubHeader",
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
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"24px"}},
                    {size:"<700px" , prop:{__flex_child:'column' , resize:true}}
                    // {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"34px" , __flex_child:'row' , resize:false}//breakVal:false
            }
        }
    )
}

__SYD.p5_tabs = () =>{
    return __c(
        "div",
        {
            style:"display:flex;row-gap:30px;column-gap:30px;height:fit-content;width:100%;justify-content:center;flex-wrap:wrap;"
        },
        [
            __SYD.p5_tab({title:"Cookiesale presale sell out record of 2 minutes and Gempad record of 30secs." , cls:"fa fa-bookmark" , clr:"rgba(247, 198, 5, 0.20)"}),
            __SYD.p5_tab({title:"Trusted Reputation within the space." , cls:"fa fa-briefcase" , clr:"rgba(255, 77, 28, 0.15)"}),
            __SYD.p5_tab({title:"Professional advice based on indepth Market Analysis." , cls:"fa fa-hourglass-half" , clr:"rgba(0, 147, 38, 0.15)"}),
            __SYD.p5_tab({title:"We Bring your community to life." , cls:"fa fa-database" , clr:"rgba(0, 108, 255, 0.15)"}),
            __SYD.p5_tab({title:"Proven Track Records." , cls:"fa fa-upload" , clr:"rgba(146, 39, 255, 0.15)"}),
            __SYD.p5_tab({title:"Running experience and respective problem solving strategies." , cls:"fa fa-certificate" , clr:"rgba(23, 39, 246, 0.15)"}),
        ]
    )
}

__SYD.p5_tab = ({title , cls = "fas fa-edit" , clr = "rgba(247, 198, 5, 0.20)"}) =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:${__p(['p5SubHeader' , 'resize'], false) ? "100%" : "300px"};padding:25px 30px;border-radius:30px;display:flex;gap:16px;justify-content:center;align-items:center;cursor:pointer;flex-direction:column;gap:20px;border:5px solid rgba(0, 0, 0, 0.07);`,
            class:"p5_tab",
            onmouseover:`((e) =>{e.querySelector(".p5_tab_i").style.background = "#fff"})(this)`,
            onmouseout:`((e) =>{e.querySelector(".p5_tab_i").style.background = "transparent"})(this)`,
        },
        [
            __c(
                "div",
                {
                    style:`height:80px;width:80px;position:relative;background:${clr};`,
                    class:"p5_tab_div"
                },
                [
                    __c(
                        "i",
                        {
                            style:"position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);height:100%;width:100%;border-radius:inherit;font-size:40px;display:flex;justify-content:center;align-items:center;z-index:999;",
                            class:`${cls} p5_tab_i`
                        },
                    )
                ]
            ),
            __c(
                "p",
                {
                    style:"color:#fff;text-shadow:unset;text-align:center;max-width:300px;font-size:14px;font-weight:300;"
                },
                [
                    `${title}`
                ]
            ),
        ]
    )
}