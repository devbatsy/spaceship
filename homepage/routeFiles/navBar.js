import { __c, __g, __p, __SYD, __u, SYD_VAR } from "../sydneyDom_v3.js";

__SYD.navBar = () =>{
    return __c(
        "nav",
        {
            style:`min-height:80px;width:100%;max-height:fit-content;position:fixed;left:50%;transform:translateX(-50%);padding:0 ${__p(["navBar" , "mobilePadState"], false) ? "50px" : "10px"};transition:all ease-out .4s;display:flex;gap:10px;justify-content:space-between;align-items:center;z-index:1000;box-shadow:${__p(["navBar" , "navBg"] , "transparent") !== "transparent" ? "0 1px 2px rgba(0, 0, 0, 0.39)" : ""};background:${__p(["navBar" , "navBg"] , "transparent")};`
        },
        [
            __SYD.navLogo(),
            __SYD.desktopNav(),
            __SYD.navUtils()
        ],
        {
            createState:{
                stateName:"navBar",
                state:{
                    desktopMode:true,
                    mobileNavExpand:false,
                    mobilePadState:false,
                    xMobileState:false,
                    openPageList:false,
                    currentNav:0,
                    navBg:"transparent"
                }
            },
            mediaQuery:{
                query:[
                    {size:"<1000px" , prop:{desktopMode:false}},
                    {size:"<550px" , prop:{xMobileState:true}},
                    {size:"<400px" , prop:{mobilePadState:true}},
                ],
                defState:{desktopMode:true , mobilePadState:false , xMobileState:false}
            }
        }
    )
}

__SYD.navLogo = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:fit-content;display:flex;align-items:center;justify-content:center;border:5px solid rgba(90, 101, 204, 0.6);border-radius:50%;"
        },
        [
            __c(
                "a",
                {
                    style:`height:70px;width:70px;border-radius:50%;background-image:url(./assets/ss_logo.jpeg)`,
                    href:"#"
                },[],{genericStyle:["bg_fit"]}
            )
        ]
    )
}

__SYD.mobileMenuLogo = () =>{
    return __c(
        "div",
        {
            style:`height:20px;min-width:36px;width:36px;display:${__p(["navBar" , "desktopMode"],true) ? "none" : "flex"};flex-direction:column;justify-content:center;gap:6px;cursor:pointer;position:relative;`,
            class:"mobileMenu_logo"
        },[
            __c("span",{style:`height:2px;width:${__p(['navBar' , 'mobileNavExpand'],false) ? "0%" : "100%"};background:#fff;`}),
            __c("span",{style:`height:2px;width:${__p(['navBar' , 'mobileNavExpand'],false) ? "0%" : "100%"};background:#fff;align-self:flex-end`}),
            __c("span",{style:`height:2px;width:${__p(['navBar' , 'mobileNavExpand'],false) ? "0%" : "100%"};background:#fff;`}),
            __c("span",{style:`height:${__p(['navBar' , 'mobileNavExpand'],false) ? "40px" : "0px"};width:2px;background:#fff;position:absolute;top:0px;left:0;transform:translateX(-50%) rotateZ(-60deg);transform-origin:top;`}),
            __c("span",{style:`height:${__p(['navBar' , 'mobileNavExpand'],false) ? "40px" : "0px"};width:2px;background:#fff;position:absolute;top:0px;right:0;transform:translateX(-50%) rotateZ(60deg);transform-origin:top;`}),

        ],
        {
            genericStyle:['bg_cover'],
            events:{
                onclick:e =>{
                    const state = __g("navBar");
                    state.mobileNavExpand = state.mobileNavExpand === true ? false : true;
                    __u("navBar" , {type:"a" , value:state})
                }
            }
        }
    )
}

__SYD.mobileNav = () =>{
    return __c(
        "div",
        {
            style:`position:absolute;top:calc(100% + 35px);right:0px;min-height:fit-content;display:${!__p(["navBar" , "desktopMode"],true) && __p(["navBar" , "mobileNavExpand"], false) ? "flex" : "none"};width:60%;min-width:250px;`,
            class:"mobileNav_entry"
        },
        [
            __c(
                "div",
                {
                    style:`height:fit-content;width:100%;padding:0px 10px;display:flex;flex-direction:column;background:rgb(47, 47, 47);border-radius:0.5rem;box-shadow:0 1px 2px rgba(0, 0, 0, 0.39);`
                },
                [
                    __SYD.desktopNav_textContent_text({val:"home" , ref:"p1" , index:0}),
                    __SYD.desktopNav_textContent_text({val:"about us" , ref:"p2" , index:1}),
                    __SYD.desktopNav_textContent_text({val:"numbers" , ref:"p4" , index:3}),
                    __SYD.desktopNav_textContent_text({val:"why us" , ref:"p5" , index:4}),
                    __SYD.desktopNav_textContent_text({val:"testimonial" , ref:"p6" , index:5}),
                    __SYD.desktopNav_textContent_text({val:"contact us" , ref:"p8" , index:7}),
                    // __SYD.desktopNav_button()
                ]
            )
        ]
    )
}

__SYD.desktopNav = () =>{
    return __c(
        "div",
        {
            style:`height:82px;width:fit-content;padding:0 16px;min-width:fit-content;display:${__p(["navBar" , "desktopMode"],true) ? "flex" : "none"};align-items:center;justify-content:space-around;`
        },
        [
            __SYD.desktopNav_textContent()
        ]
    )
}

__SYD.desktopNav_textContent = () =>{
    return __c(
        "div",
        {
            style:"display:flex;align-items:center;justify-content:center;"
        },
        [
            __SYD.desktopNav_textContent_text({val:"home" , ref:"p1" , index:0}),
            __SYD.desktopNav_textContent_text({val:"about us" , ref:"p2" , index:1}),
            __SYD.desktopNav_textContent_text({val:"numbers" , ref:"p4" , index:3}),
            __SYD.desktopNav_textContent_text({val:"why us" , ref:"p5" , index:4}),
            __SYD.desktopNav_textContent_text({val:"testimonial" , ref:"p6" , index:5}),
            __SYD.desktopNav_textContent_text({val:"contact us" , ref:"p8" , index:7}),
        ]
    )
}

__SYD.desktopNav_textContent_text = ({val = "home" , ref , index}) =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:100%;color:#fff;opacity:${__p(["navBar" , "currentNav"],0) === index ? "1" : ".6"};`,
            class:"navTxt"
        },
        [
            __c(
                "a",
                {
                    style:"text-transform:capitalize;font-size:14px;font-weight:700;display:block;width:100%;padding:15px 20px;min-width:max-content;",
                    href:`#${ref}`
                },
                [
                    val
                ]
            )
        ]
    )
}

__SYD.desktopNav_textContent_text_pages = ({val = "pages" , ref}) =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:fit-content;display:flex;gap:10px;justify-content:center;align-items:flex-start;color:#fff;position:relative;flex-direction:column;",
        },
        [
            __c(
                "div",
                {
                    style:"display:flex;gap:5px;padding:15px 20px;align-items:center;",
                    class:"navTxt"
                },
                [
                    __c(
                        "a",
                        {
                            style:"text-transform:capitalize;font-size:16px;",
                            href:`#${ref}`
                        },
                        [
                            val
                        ]
                    ),
                    __c(
                        "i",
                        {
                            style:`min-height:20px;min-width:20px;display:flex;align-items:center;justify-content:center;font-size:20px;border-radius:50%;color:#fff;`,
                            class:"fa-solid fa-angle-down",
                            // href:"#"
                        },[],{genericStyle:["bg_cover"]}
                    ),
                ]
            ),
            __SYD.pages_options()
        ],
        {
            events:{
                onmouseover:e =>{
                    const state = __g("navBar");
                    state.openPageList = true;
                    __u("navBar" , {type:"a" , value:state})
                },
                onmouseout:e =>{
                    const state = __g("navBar");
                    state.openPageList = false;
                    __u("navBar" , {type:"a" , value:state})
                }
            }
        }
    )
}

__SYD.pages_options = () =>{
    return __c(
        "div",
        {
            style:`position:${__p(["navBar" , "desktopMode"],true) ? "absolute" : "static"};top:100%;right:0px;min-height:fit-content;display:${__p(["navBar" , "openPageList"],false) ? "flex" : "none"};width:60%;min-width:250px;`
        },
        [
            __c(
                "div",
                {
                    style:`height:fit-content;width:100%;padding:0px 10px;display:flex;flex-direction:column;background:#1d2144;border-radius:0.5rem;`
                },
                [
                    __SYD.desktopNav_textContent_text({val:"page1" , ref:"p1"}),
                    __SYD.desktopNav_textContent_text({val:"page2" , ref:"p2"}),
                    __SYD.desktopNav_textContent_text({val:"page3" , ref:"p5"}),
                    __SYD.desktopNav_textContent_text({val:"page4" , ref:"footer"}),
                    __SYD.desktopNav_textContent_text({val:"page5" , ref:"footer"}),
                ]
            )
        ]
    )
}

__SYD.desktopNav_button = () =>{
    return __c(
        "a",
        {
            style:SYD_VAR.buttonStyle1.get() + `display:${__p(["navBar" , "xMobileState"],false) ? "none" : "flex"};`,
            class:"clickButton"
        },
        [
            __c(
                "span",
                {
                    style:"height:20px;width:20px;background-image:url(./assets/wallet.png);background-size:90%;"
                },[],{genericStyle:["bg_fit"]}
            ),
            __c("p" , {style:"width:fit-content"},["wallet Connect"])
        ],
        {
            events:{
                onclick:e =>{
                    location.href = '/agent/create.html'
                }
            }
        }
    )
}

__SYD.navUtilsSearch = () =>{
    return __c(
        "div",
        {
            style:`height:80px;width:fit-content;display:${__p(["navBar" , "xMobileState"],false) ? "none" : "flex"};align-items:center;justify-content:center;`
        },
        [
            __c(
                "i",
                {
                    style:`min-height:50px;min-width:50px;display:flex;align-items:center;justify-content:center;font-size:20px;border-radius:50%;`,
                    class:"fa-solid fa-magnifying-glass",
                    // href:"#"
                },[],{genericStyle:["bg_cover"]}
            )
        ]
    )
}

__SYD.navUtils = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;min-width:fit-content;display:${__p(["navBar" , "desktopMode"],true) ? "none" : "flex"};gap:16px;position:relative;justify-content:flex-end;align-items:center;flex:0;`
        },
        [
            // __SYD.navUtilsSearch(),
            // __SYD.desktopNav_button(),
            __SYD.mobileMenuLogo(),
            __SYD.mobileNav()
        ]
    )
}