import{S as b}from"./schedulePeerJob-B__8Gari.js";import{_ as g,W as v,p as f,j as l,a as o,c as t,b as e,d as i,F as p,h,t as _,e as y,i as x}from"./index-Nht8Bi7_.js";import{L as J}from"./localeText-ClObbhxX.js";import"./vue-datepicker-vEbbWPoH.js";import"./dayjs.min-DENWFVBv.js";const w={name:"peerJobsAllModal",setup(){return{store:v()}},components:{LocaleText:J,SchedulePeerJob:b},props:{configurationPeers:Array[Object]},methods:{getuuid(){return f()}},computed:{getAllJobs(){return this.configurationPeers.filter(r=>r.jobs.length>0)}}},A={class:"peerSettingContainer w-100 h-100 position-absolute top-0 start-0 overflow-y-scroll"},$={class:"container d-flex h-100 w-100"},k={class:"m-auto modal-dialog-centered dashboardModal"},S={class:"card rounded-3 shadow",style:{width:"700px"}},L={class:"card-header bg-transparent d-flex align-items-center gap-2 border-0 p-4 pb-2"},j={class:"mb-0 fw-normal"},P={class:"card-body px-4 pb-4 pt-2"},C={key:0,class:"accordion",id:"peerJobsLogsModalAccordion"},M={class:"accordion-header"},B=["data-bs-target"],N={key:0},D={class:"text-muted"},T=["id"],V={class:"accordion-body"},F={key:1,class:"card shadow-sm",style:{height:"153px"}},O={class:"card-body text-muted text-center d-flex"},W={class:"m-auto"};function E(r,s,I,R,q,z){const n=l("LocaleText"),u=l("SchedulePeerJob");return o(),t("div",A,[e("div",$,[e("div",k,[e("div",S,[e("div",L,[e("h4",j,[i(n,{t:"All Active Jobs"})]),e("button",{type:"button",class:"btn-close ms-auto",onClick:s[0]||(s[0]=a=>this.$emit("close"))})]),e("div",P,[this.getAllJobs.length>0?(o(),t("div",C,[(o(!0),t(p,null,h(this.getAllJobs,(a,d)=>(o(),t("div",{class:"accordion-item",key:a.id},[e("h2",M,[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse_"+d},[e("small",null,[e("strong",null,[a.name?(o(),t("span",N,_(a.name)+" • ",1)):y("",!0),e("samp",D,_(a.id),1)])])],8,B)]),e("div",{id:"collapse_"+d,class:"accordion-collapse collapse","data-bs-parent":"#peerJobsLogsModalAccordion"},[e("div",V,[(o(!0),t(p,null,h(a.jobs,c=>(o(),x(u,{onDelete:s[1]||(s[1]=m=>this.$emit("refresh")),onRefresh:s[2]||(s[2]=m=>this.$emit("refresh")),dropdowns:this.store.PeerScheduleJobs.dropdowns,viewOnly:!0,key:c.JobID,pjob:c},null,8,["dropdowns","pjob"]))),128))])],8,T)]))),128))])):(o(),t("div",F,[e("div",O,[e("span",W,[i(n,{t:"No active job at the moment."})])])]))])])])])])}const X=g(w,[["render",E]]);export{X as default};
