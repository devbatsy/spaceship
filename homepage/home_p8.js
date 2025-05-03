import { SYD_VAR, __SYD, __c, __g, __p, __sC, __u , __v , getState } from "./sydneyDom_v3.js";

__SYD.p8 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;flex-direction:column;justify-content:center;" + __sC['pages'](),
            id:"p8"
        },
        [
            __SYD.contact_us_section(),
            __SYD.p8SubHeader()
        ],
        {
            createState:{
                stateName:"p8",
                state:{
                    breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<1000px" , prop:{breakVal:true}},
                ],
                defState:{breakVal:false}
            }
        }
    )
}

__SYD.p8SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;display:flex;flex-direction:column;align-items:center;gap:10px;background:#000000;padding:100px ${__p(["p8SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            __SYD.p8__footer()
        ],
        {
            createState:{
                stateName:"p8SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row',
                    resize:false
                }
            },
            mediaQuery:{
                query:[
                    
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column' , resize:true}},
                    {size:"<1000px" , prop:{breakVal:true}},
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row' , resize:false , breakVal:false}
            }
        }
    )
}

__SYD.p8__footer = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:100%;display:flex;flex-direction:${__p(["p8SubHeader" , "__flex_child"],'row')};justify-content:space-between;gap:20px;align-items:center;`
        },
        [
            __SYD.footer_contact(),
            __SYD.footer_disclaimer()
        ]
    )
}

__SYD.contact_us_section = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:100%;display:flex;flex-direction:${__p(["p8" , "breakVal"], false) ? "column-reverse" : "row"};justify-content:space-between;gap:20px;align-items:center;padding:0px ${__p(["p8" , "breakVal"], false) ? "0px" : "50px"};background:${__p(["p8" , "breakVal"], false) ? " #000000 " : "#2f2f2f"}`
        },
        [
            __SYD.form_section(),
            __SYD.socials_section()
        ]
    )
}

__SYD.form_section = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:${__p(["p8" , "breakVal"], false) ? "100%" : "60%"};padding:20px;display:flex;flex-direction:column;gap:30px;align-items:center;overflow:hidden;`
        },
        [
            __c(
                "div",
                {
                    style:`height:fit-content;min-height:50px;width:100%;padding:15px;background:${__p(["form_section" , "typeMsg"],"err") === "err" ? " #fabcbc " : " #d9fcac "}  ;color:#000;display:flex;align-items:center;text-align:left;transition:all linear .3s;transform:translateY(${__p(["form_section" , "togMessage"],false) ? "0%" : "-200%"})`
                },
                [
                    `${__p(["form_section" , "msgContent"],"")}`
                ],{type:"send-mess-feedback"}
            ),
            __c(
                "p",
                {
                    style:`font-weight:900;color:#fff;font-size:${__p(["p8" , "breakVal"], false) ? "30px" : "40px"};`
                },
                [
                    "Get In Touch"
                ]
            ),
            __c(
                "div",
                {
                    style:`display:flex;flex-direction:${__p(["p8" , "breakVal"], false) ? "column" : "row"};gap:30px;width:100%;align-items:center;justify-content:center;`
                },
                [
                    __c(
                        "div",
                        {
                            style:`display:flex;flex-direction:column;gap:30px;width:${__p(["p8" , "breakVal"], false) ? "100%" : "50%"};justify-content:space-between;`
                        },
                        [
                            __c(
                                "input",
                                {
                                    style:"height:45px;width:100%;background:#fff;text-transform:capitalize;",
                                    type:"text",
                                    class:"name",
                                    placeholder:"Enter name"
                                },
                                [],{type:"msg-name"}
                            ),
                            __c(
                                "input",
                                {
                                    style:"height:45px;width:100%;background:#fff;",
                                    type:"email",
                                    class:"email",
                                    placeholder:"Enter email"
                                },[],{type:"msg-email"}
                            ),
                            __c(
                                "input",
                                {
                                    style:"height:45px;width:100%;background:#fff;text-transform:capitalize;",
                                    type:"text",
                                    class:"subject",
                                    placeholder:"Enter subject"
                                },[],{type:"msg-subject"}
                            ),
                        ]
                    ),
                    __c(
                        "textarea",
                        {
                            style:`height:150px;width:${__p(["p8" , "breakVal"], false) ? "100%" : "40%"};resize:none;`,
                            placeholder:"Message"
                        },[],{type:"msg-text"}
                    )
                ]
            ),
            __SYD.p8_buttons({val:"send message"})
        ],
        {
            createState:{
                stateName:"form_section",
                state:{
                    togMessage:false,
                    msgContent:"",
                    typeMsg:"err",
                    updateState:({prop , val}) =>{
                        const state = __g("form_section");
                        state[`${prop}`] = val;
                        __u("form_section" , {type:"a" , value:state});
                    }
                }
            }
        }
    )
}

__SYD.p8_buttons = ({val = "" , link = "" , cls = "clickButton"}) =>{
    return __c(
        "a",
        {
            style:SYD_VAR.buttonStyle1.get() + `width:100%;max-width:unset;display:flex;-align-self:center;`,
            class:cls
        },
        [
            __c("p" , {style:"width:fit-contenttext-transform:capitalize;"},[val])
        ],
        {
            events:{
                onclick:async e =>{
                    async function sendMessage() {
                        const payload = {
                            sender: `${__v["msg-email"].value}`, // Optional
                            subject: `${__v["msg-subject"].value}`,
                            message: `${__v["msg-text"].value}`,
                            name: `${__v["msg-name"].value}`
                        };
                    
                        try {
                            const response = await fetch('https://spaceship-email.fly.dev/send-message', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(payload)
                            });
                    
                            const result = await response.json();
                            if (result.success) {
                                const state = __g("form_section");
                                state.togMessage = true;
                                state.typeMsg = "success"
                                state.msgContent = `✅ Email sent successfully 🫡`,
                                __u("form_section" , {type:"a" , value:state});

                                __v["send-mess-feedback"].scrollIntoView();

                                console.log('✅ Email sent successfully:', result);
                                // alert('Message sent successfully!');
                            } else {
                                const state = __g("form_section");
                                state.togMessage = true;
                                state.typeMsg = "err"
                                state.msgContent = `❌ Failed to send email 🥲`,
                                __u("form_section" , {type:"a" , value:state});

                                __v["send-mess-feedback"].scrollIntoView();

                                console.error('❌ Failed to send email:', result);
                                // alert('Failed to send message.');
                            }
                        } catch (error) {
                            console.error('🚨 Error sending request:', error);
                            alert('An error occurred.');
                        }
                    }

                    if(__v["msg-subject"].value.length > 0 && __v["msg-email"].value.length > 0 && __v["msg-name"].value.length > 0 && __v["msg-text"].value.length > 0) sendMessage();
                    else{
                        const state = __g("form_section");
                        state.togMessage = true;
                        state.typeMsg = "err"
                        state.msgContent = "Please enter all feilds",
                        __u("form_section" , {type:"a" , value:state});

                        __v["send-mess-feedback"].scrollIntoView();
                    }
                }
            }
        }
    )
}

__SYD.socials_section = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:${__p(["p8" , "breakVal"], false) ? "100%" : "40%"};padding:20px;display:flex;flex-direction:column;gap:20px;color:#fff;`
        },
        [
            __c(
                "p",
                {
                    style:`font-weight:900;color:#fff;font-size:${__p(["p8" , "breakVal"], false) ? "30px" : "40px"};`
                },
                [
                    "Find Us Online"
                ]
            ),
            __c(
                "p",
                {
                    style:"font-weight:300;"
                },
                [
                    "Find our official social profiles online. ."
                ]
            ),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;flex-direction:column;gap:20px;"
                },
                [
                    __c(
                        "a",
                        {
                            style:"display:flex;gap:20px;align-items:center;",
                            href:"https://t.me/SpaceShipMarketing"
                        },
                        [
                            __c("i" , {style:"height:30px;width:30px;font-size:30px;color:#fff;" , class:"fab fa-telegram"}),
                            __c("p",{style:"font-size:18px;font-weight:300;"}, ["Telegram"])
                        ]
                    ),
                    __c(
                        "a",
                        {
                            style:"display:flex;gap:20px;align-items:center;",
                            href:""
                        },
                        [
                            __c("i" , {style:"height:30px;width:30px;font-size:30px;color:#fff;" , class:"fab fa-twitter"}),
                            __c("p",{style:"font-size:18px;font-weight:300;"}, ["Twitter"])
                        ]
                    ),
                    __c(
                        "a",
                        {
                            style:"display:flex;gap:20px;align-items:center;",
                            href:"mailto:spaceshipmarketingsagency@gmail.com"
                        },
                        [
                            __c("i" , {style:"height:30px;width:30px;font-size:30px;color:#fff;" , class:"fas fa-envelope"}),
                            __c("p",{style:"font-size:18px;font-weight:300;"}, ["Email"])
                        ]
                    ),
                ]
            )
        ]
    )
}

__SYD.footer_contact = ()=>{
    return __c(
        "c",
        {
            style:"display:flex;gap:20px;"
        },
        [
            __c(
                "a",
                {
                    style:"color:#fff;height:fit-content;width:fit-content;height:50px;width:50px;border-radius:50%;display:flex;justify-content:center;align-items:center;",
                    href:"https://t.me/SpaceShipMarketing",
                    class:"footer_a"
                },
                [
                    __c("i" , {style:"height:20px;width:20px;font-size:20px;color:#fff;" , class:"fab fa-telegram"})
                ]
            ),
            __c(
                "a",
                {
                    style:"color:#fff;height:fit-content;width:fit-content;height:50px;width:50px;border-radius:50%;display:flex;justify-content:center;align-items:center;",
                    href:"#",
                    class:"footer_a"
                },
                [
                    __c("i" , {style:"height:20px;width:20px;font-size:20px;color:#fff;" , class:"fab fa-twitter"})
                ]
            ),
            __c(
                "a",
                {
                    style:"color:#fff;height:fit-content;width:fit-content;height:50px;width:50px;border-radius:50%;display:flex;justify-content:center;align-items:center;",
                    href:"#",
                    class:"footer_a"
                },
                [
                    __c("i" , {style:"height:20px;width:20px;font-size:20px;color:#fff;" , class:"fas fa-envelope"})
                ]
            ),
        ]
    )
}

__SYD.footer_disclaimer = () =>{
    return __c(
        "div",
        {
            style:`display:flex;gap:15px;flex-direction:column;align-items:${__p(["p8SubHeader" , "__flex_child"],'row') === "row" ? "flex-end" : "center"};text-align:${__p(["p8SubHeader" , "__flex_child"],'row') === "row" ? "right" : "center"};color:#fff;width:100%;max-width:600px;font-size:13px;`
        },
        [
            __c(
                "p",{style:"font-weight:300;"},["Spaceship Marketing strongly advise everyone to do their personal deligent reseach on every project, we will not be responsible for any loss on investment made through our medium."]
            ),
            __c(
                "p",
                {
                    style:"font-weight:300;margin-top:30px;"
                },
                [
                    "© 2025 Spaceship Marketing"
                ]
            )
        ]
    )
}
