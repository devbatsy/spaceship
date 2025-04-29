import { __c, __p, __SYD, __v, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p1 = () =>{
    return __c(
        "div",
        {
            style:`height:100vh;width:100%;min-height:fit-content;padding-top:150px;padding-bottom:20px;display:flex;justify-content:center;align-items:center;background-image:url("./assets/mainBg.jpg");background-attachment:fixed;`,
            id:"p1"
        },
        [
            __SYD.p1SubHeader()
        ],{type:"p1" , genericStyle:["bg_cover"]}
    )
}

__SYD.p1SubHeader = () =>{
    return  __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;justify-content:${__p(["p1SubHeader" , "breakVal"],false) ? "flex-start" : "flex-end"};row-gap:30px;column-gap:10px;padding:0 ${__p(["p1SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:row;`
        },
        [
            __c(
                "div",
                {
                    style:`height:fit-content;width:${__p(["p1SubHeader" , "breakVal"],false) ? "50%" : "50%"};display:flex;flex-direction:column;gap:40px;min-width:fit-content;`
                },
                [
                    __SYD.p1_mainHeader(),
                    __SYD.p1_subText(),
                    __SYD.p1_btns_section()
                ]
            ),
            // __c(
            //     "div",
            //     {
            //         style:`height:100vw;max-height:calc(100vh - 150px);width:${__p(["p1SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:20px;background:green;`,
            //         class:"floatMainPic"
            //     },[],{genericStyle:['bg_fit']}
            // )
        ],
        {
            createState:{
                stateName:"p1SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    breakVal:false
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

__SYD.p1_mainHeader = () =>{
    return __c(
        "div",
        {
            style:`text-shadow:0 0 2px rgb(40, 12, 76);text-transform:uppercase;font-weight:900;font-size:${SYD_VAR.page1MainFont_1.get()};color:#fff;font-family:font1;`,
            class:"font1_custom"
        },
        [
            __c("p" , {style:"color:#5A66CC;"} , ["spaceShip"]),
            __c("p" , {} , ["marketing"]),
        ]
    )
}

__SYD.p1_subText = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:SYD_VAR.pag1SubText.get() + "text-shadow:0 0 2px #000;"},["Your All-in-One Destination for Crypto Marketing."])
        ]
    )
}

__SYD.p1_btns_section = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:80%;max-width:600px;border-radius:10px;display:flex;row-gap:20px;column-gap:30px;flex-wrap:wrap;align-items:center;"
        },
        [
            // __SYD.p1_buttons({val:"Explore" , cls:"clickButton_explore"}),
            __SYD.p1_buttons({val:"learn more" , link:"#p2"}),
        ]
    )
}

__SYD.p1_buttons = ({val = "" , link = "" , cls = "clickButton"}) =>{
    return __c(
        "a",
        {
            style:SYD_VAR.buttonStyle1.get() + `display:${__p(["navBar" , "xMobileState"],false) ? "none" : "flex"};`,
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