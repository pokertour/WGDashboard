import{_ as h,D as m,g as p,q as f,c as b,b as t,d as i,t as _,m as v,s as g,i as d,w as r,j as c,a as n}from"./index-Nht8Bi7_.js";import{b as x}from"./browser-CjSdxGTc.js";import{L as y}from"./localeText-ClObbhxX.js";const T={name:"totp",components:{LocaleText:y},async setup(){const s=m();let e="";return await p("/api/Welcome_GetTotpLink",{},a=>{a.status&&(e=a.data)}),{l:e,store:s}},mounted(){this.l&&x.toCanvas(document.getElementById("qrcode"),this.l,function(s){})},data(){return{totp:"",totpInvalidMessage:"",verified:!1}},methods:{validateTotp(){}},watch:{totp(s){const e=document.querySelector("#totp");e.classList.remove("is-invalid","is-valid"),s.length===6&&(console.log(s),/[0-9]{6}/.test(s)?f("/api/Welcome_VerifyTotpLink",{totp:s},a=>{a.status?(this.verified=!0,e.classList.add("is-valid"),this.$emit("verified")):(e.classList.add("is-invalid"),this.totpInvalidMessage="TOTP does not match.")}):(e.classList.add("is-invalid"),this.totpInvalidMessage="TOTP can only contain numbers"))}}},k=["data-bs-theme"],w={class:"m-auto text-body",style:{width:"500px"}},L={class:"d-flex flex-column"},M={class:"dashboardLogo display-4"},C={class:"mb-2"},P={class:"text-muted"},I={class:"p-3 bg-body-secondary rounded-3 border mb-3"},O={class:"text-muted mb-0"},B=["href"],$={style:{"line-break":"anywhere"}},q={for:"totp",class:"mb-2"},D={class:"text-muted"},S={class:"form-group mb-2"},A=["disabled"],E={class:"invalid-feedback"},F={class:"valid-feedback"},R={class:"d-flex gap-3 mt-5 flex-column"};function G(s,e,a,N,W,j){const o=c("LocaleText"),l=c("RouterLink");return n(),b("div",{class:"container-fluid login-container-fluid d-flex main pt-5 overflow-scroll","data-bs-theme":this.store.Configuration.Server.dashboard_theme},[t("div",w,[t("div",L,[t("div",null,[t("h1",M,[i(o,{t:"Multi-Factor Authentication (MFA)"})]),t("p",C,[t("small",P,[i(o,{t:"1. Please scan the following QR Code to generate TOTP with your choice of authenticator"})])]),e[1]||(e[1]=t("canvas",{id:"qrcode",class:"rounded-3 mb-2"},null,-1)),t("div",I,[t("p",O,[t("small",null,[i(o,{t:"Or you can click the link below:"})])]),t("a",{href:this.l},[t("code",$,_(this.l),1)],8,B)]),t("label",q,[t("small",D,[i(o,{t:"2. Enter the TOTP generated by your authenticator to verify"})])]),t("div",S,[v(t("input",{class:"form-control text-center totp",id:"totp",maxlength:"6",type:"text",inputmode:"numeric",autocomplete:"one-time-code","onUpdate:modelValue":e[0]||(e[0]=u=>this.totp=u),disabled:this.verified},null,8,A),[[g,this.totp]]),t("div",E,[i(o,{t:this.totpInvalidMessage},null,8,["t"])]),t("div",F,[i(o,{t:"TOTP verified!"})])])]),e[4]||(e[4]=t("hr",null,null,-1)),t("div",R,[this.verified?(n(),d(l,{key:1,to:"/",class:"btn btn-dark btn-lg d-flex btn-brand shadow align-items-center flex-grow-1 rounded-3"},{default:r(()=>[i(o,{t:"Complete"}),e[3]||(e[3]=t("i",{class:"bi bi-chevron-right ms-auto"},null,-1))]),_:1})):(n(),d(l,{key:0,to:"/",class:"btn bg-secondary-subtle text-secondary-emphasis rounded-3 flex-grow-1 btn-lg border-1 border-secondary-subtle shadow d-flex"},{default:r(()=>[i(o,{t:"I don't need MFA"}),e[2]||(e[2]=t("i",{class:"bi bi-chevron-right ms-auto"},null,-1))]),_:1}))])])])],8,k)}const z=h(T,[["render",G]]);export{z as default};
