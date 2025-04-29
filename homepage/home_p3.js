import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p3 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background: #5A66CC;" + __sC['pages'](),
            id:"p3"
        },
        [
            __SYD.p3SubHeader()
        ],{type:"p3"}
    )
}

__SYD.p3SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:30px ${__p(["p3SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            __SYD.p3_tabs()
        ],
        {
            createState:{
                stateName:"p3SubHeader",
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

__SYD.p3_tabs = () =>{
    return __c(
        "div",
        {
            style:"display:flex;row-gap:30px;column-gap:30px;height:fit-content;width:100%;justify-content:center;flex-wrap:wrap;"
        },
        [
            __SYD.p3_tab({title:"Full review of your Project." , cls:"fas fa-edit"}),
            __SYD.p3_tab({title:"Contract, Web, dApp development, Launchpad and NFT Marketplace." , cls:"fas fa-cog"}),
            __SYD.p3_tab({title:"Introduction to partners that offers Spaceship's client Exclusive discount rate." , cls:"fas fa-address-book"}),
            __SYD.p3_tab({title:"Premium End to End pre/post launch marketing." , cls:"fas fa-check"}),
            __SYD.p3_tab({title:"Guidance and Consultation for Trending your project on various social media space as well as Major Crypto Platforms." , cls:"fas fa-rocket"}),
            __SYD.p3_tab({title:"Optimized strategies, including Telegram marketing services, calls and AMA with famous influencers" , cls:"fas fa-folder-open"}),
        ]
    )
}

__SYD.p3_tab = ({title , cls = "fas fa-edit"}) =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:${__p(['p3SubHeader' , 'resize'], false) ? "100%" : "250px"};padding:25px 30px;border-radius:30px;display:flex;gap:16px;justify-content:center;align-items:center;cursor:pointer;background: transparent;flex-direction:column;gap:20px;`,
            class:"p3_tab",
            onmouseover:`((e) =>{e.querySelector(".spanny").classList.add("p3_tab_i_animation")})(this)`,
            onmouseout:`((e) =>{e.querySelector(".spanny").classList.remove("p3_tab_i_animation")})(this)`,
        },
        [
            __c(
                "div",
                {
                    style:"height:100px;width:100px;border-radius:50%;position:relative;"
                },
                [
                    __c(
                        "i",
                        {
                            style:"position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);height:100%;width:100%;background:#171717;color:#fff;border-radius:inherit;font-size:30px;display:flex;justify-content:center;align-items:center;z-index:999;",
                            class:`${cls}`
                        },
                    ),
                    __c("span" , {style:"height:100%;width:100%;position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);background:transparent;border-radius:inherit;" , class:"spanny"})
                ]
            ),
            __c(
                "p",
                {
                    style:"color:#fff;text-shadow:unset;text-align:center;max-width:300px;"
                },
                [
                    `${title}`
                ]
            ),
        ],
        {
            // events:{
            //     onmouseover:e =>{
            //         e.target.document.querySelector(".spanny").classList.add("p3_tab_i_animation")
            //     },
            //     onmouseout:e =>{
            //         e.target.document.querySelector(".spanny").classList.remove("p3_tab_i_animation")
            //     },
            // }
        }
    )
}