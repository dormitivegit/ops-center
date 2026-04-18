import{C as e,P as t,S as n,T as r,a as i,b as a,c as o,d as s,f as c,i as l,it as u,n as d,rt as f,s as p,t as m,v as h,z as g}from"./api-BmO7vss1.js";import{t as ee}from"./shop-wWcY7HMV.js";var te={class:`page-container`},ne={class:`flex items-center justify-between`},re={class:`page-title`},ie={class:`text-xs font-normal text-[#475569] font-mono`},ae={class:`flex items-start gap-3`},oe={class:`text-2xl`},se={class:`flex-1 min-w-0`},ce={class:`flex items-center gap-2 mb-1`},le={key:0,class:`text-[10px] text-[#475569]`},_={key:0,class:`text-[#e2e8f0] text-sm leading-relaxed`},v={key:1,class:`text-[#475569] text-sm italic`},ue={key:0,class:`space-y-2`},de={key:1,class:`card space-y-2`},y={class:`text-xs text-[#cbd5e1] leading-relaxed whitespace-pre-wrap bg-[#263347]/50 rounded-lg p-3`},b={class:`card space-y-3`},x={class:`flex items-center justify-between`},S={class:`text-xs text-[#475569]`},C={key:0,class:`py-4 text-center text-xs text-[#475569]`},w={key:1,class:`py-4 text-center text-xs text-[#475569]`},T={key:2,class:`space-y-2`},E=[`checked`,`onChange`],D={class:`flex-1 min-w-0`},O={class:`flex items-center gap-1.5 mt-1`},k={key:0,class:`tag-p1`},A={key:1,class:`text-[10px] text-[#475569]`},j={key:2,class:`text-[10px] text-[#475569] font-mono`},M={class:`flex flex-wrap gap-2`},N=[`disabled`],P=[`disabled`],F={key:2,class:`card fade-in space-y-3`},I={class:`flex items-center justify-between`},L={class:`section-title`},fe={class:`text-[10px] text-[#475569] font-normal font-mono`},R={class:`text-xs text-[#cbd5e1] leading-relaxed whitespace-pre-wrap bg-[#263347]/50 rounded-lg p-3 max-h-[500px] overflow-y-auto`},z={key:0,class:`text-xs text-emerald-400`},B={__name:`TodayPage`,setup(B){let V=ee(),H=t(!1),U=t(!1),W=t(!1),G=t([]),K=t({}),q=t(!1),J=t(null),Y=t(``),X=t(``),pe=l(()=>{let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}),me=l(()=>G.value.filter(e=>!e.done).length),he=l(()=>[...G.value].sort((e,t)=>e.done===t.done?e.priority===`P1`&&t.priority!==`P1`?-1:t.priority===`P1`&&e.priority!==`P1`?1:(t.score||0)-(e.score||0):e.done?1:-1));async function Z(){U.value=!0;try{let e=await m.getTasks();G.value=Array.isArray(e)?e:e.tasks||e.data||[]}catch{G.value=[]}finally{U.value=!1}}async function ge(){try{K.value=await m.getConfig()}catch{K.value={}}}async function _e(e){e.done=!e.done;try{await m.saveTasks(G.value)}catch{e.done=!e.done}}async function ve(){W.value=!0;try{let e=await m.pipelineRun(`intel_update`,{});e.top_action&&(V.topAction=e.top_action),e.shop_state&&(V.state=e.shop_state),await Z()}catch{}finally{W.value=!1}}async function ye(){q.value=!0,J.value=null,X.value=``;try{let e=await m.getConfig(),t=e.category||`鞋服`,n=`你是资深抖音${t}类目爆款分析师。

店铺背景：${t} · ${e.skus||``} · 价格带${e.price||``}

请基于当前市场情况，分析${t}类目近期爆款产品的成功因素，生成一份爆款研报：

**【当前爆款品类趋势】**
哪些细分品类正在爆发？核心驱动力是什么？

**【爆款商品图分析】**
- 封面图共性特征（背景/模特/角度/文字）
- 点击率高的主图有哪些规律？
- 详情图的转化逻辑是什么？

**【爆款视频规律】**
- 时长分布（几秒最多？）
- 开头3秒的Hook类型（情绪型/问题型/反常识型）
- 高转化视频的共同结构

**【爆款活动配置】**
- 当前最有效的促销组合（满减/赠品/限时）
- 价格锚定策略
- 直播间话术规律

**【爆款评论区信号】**
- 高频好评关键词（说明打中了什么需求）
- 高频差评关键词（说明哪里有机会）
- 买家秀的共同特征

**【对我们店铺的启示】**
基于以上分析，我们最值得立即借鉴的3个具体动作：
1. 
2. 
3. 

**【本周最值得押注的一个方向】**
一句话，精确到可执行的动作。

严禁套话，所有分析必须基于当前市场规律，建议必须可直接执行。`,r=await m.rawAI(n,2e3);J.value=r.result||r,Y.value=new Date().toISOString().slice(0,10)}catch(e){J.value=`研报生成失败：`+(e.message||``)}finally{q.value=!1}}function Q(e){X.value=e,setTimeout(()=>X.value=``,2500)}async function be(){J.value&&(await m.saveDecision({date:Y.value,content:J.value,source:`爆款研报`,status:`pending`}),Q(`✓ 已存入决策库`))}async function xe(){J.value&&(await m.saveExperience({date:Y.value,content:J.value,source:`爆款研报`,tags:[`爆款`,`研报`]}),Q(`✓ 已存入经验库`))}function Se(){navigator.clipboard.writeText(J.value).then(()=>{Q(`✓ 已复制到剪贴板`)}).catch(()=>{let e=document.createElement(`textarea`);e.value=J.value,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),Q(`✓ 已复制`)})}async function $(){H.value=!0,await Promise.all([V.fetchState(),Z(),ge()]),H.value=!1}return h($),(t,l)=>{let m=e(`router-link`);return a(),o(`div`,te,[i(`div`,ne,[i(`h1`,re,[l[1]||=i(`span`,null,`⚡`,-1),l[2]||=s(` 今日作战 `,-1),i(`span`,ie,u(pe.value),1)]),i(`button`,{onClick:$,class:f([`btn-ghost text-xs`,H.value&&`opacity-50`])},[i(`span`,{class:f(H.value&&`animate-spin inline-block`)},`↻`,2),l[3]||=s(` 刷新 `,-1)],2)]),i(`div`,{class:f([`rounded-xl p-4 border`,g(V).isEmergency?`border-red-500/50 bg-red-950/30 emergency-pulse`:g(V).isOpportunity?`border-emerald-500/40 bg-emerald-950/20`:`border-sky-500/30 bg-sky-950/20`])},[i(`div`,ae,[i(`div`,oe,u(g(V).isEmergency?`🚨`:g(V).isOpportunity?`🚀`:`🎯`),1),i(`div`,se,[i(`div`,ce,[i(`span`,{class:f([`text-xs font-semibold uppercase tracking-wider`,g(V).isEmergency?`text-red-400`:g(V).isOpportunity?`text-emerald-400`:`text-sky-400`])},u(g(V).isEmergency?`应急指令`:g(V).isOpportunity?`机会指令`:`今日核心指令`),3),K.value.last_decision_at?(a(),o(`span`,le,u(K.value.last_decision_at),1)):p(``,!0)]),g(V).topAction?(a(),o(`p`,_,u(g(V).topAction),1)):(a(),o(`p`,v,`暂无指令，等待打卡或情报更新`))])])],2),g(V).alerts?.length?(a(),o(`div`,ue,[(a(!0),o(d,null,n(g(V).alerts,(e,t)=>(a(),o(`div`,{key:t,class:`flex items-start gap-2 px-3 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-xs text-yellow-300`},[l[4]||=i(`span`,null,`⚠️`,-1),i(`span`,null,u(e),1)]))),128))])):p(``,!0),K.value.budget_result?(a(),o(`div`,de,[l[5]||=i(`p`,{class:`section-title`},`💰 今日预算分配建议`,-1),i(`div`,y,u(K.value.budget_result),1)])):p(``,!0),i(`div`,b,[i(`div`,x,[l[6]||=i(`span`,{class:`section-title`},`待办任务`,-1),i(`span`,S,u(me.value)+` 项待处理`,1)]),U.value?(a(),o(`div`,C,`加载中…`)):G.value.length?(a(),o(`div`,T,[(a(!0),o(d,null,n(he.value,e=>(a(),o(`div`,{key:e.id,class:f([`flex items-start gap-2.5 p-2.5 rounded-lg border transition-all`,e.done?`border-transparent opacity-40`:e.priority===`P1`?`border-red-500/30 bg-red-950/20`:`border-[#263347] bg-[#263347]/50 hover:border-[#334155]`])},[i(`input`,{type:`checkbox`,checked:e.done,onChange:t=>_e(e),class:`mt-0.5 accent-sky-500 cursor-pointer shrink-0`},null,40,E),i(`div`,D,[i(`p`,{class:f([`text-xs leading-relaxed`,e.done?`line-through text-[#475569]`:`text-[#e2e8f0]`])},u(e.text),3),i(`div`,O,[e.priority===`P1`?(a(),o(`span`,k,`P1`)):p(``,!0),e.source?(a(),o(`span`,A,u(e.source),1)):p(``,!0),e.score?(a(),o(`span`,j,`分`+u(e.score),1)):p(``,!0)])])],2))),128))])):(a(),o(`div`,w,`暂无任务，等待情报或打卡触发`))]),i(`div`,M,[c(m,{to:`/checkin`,class:`btn-primary text-xs`},{default:r(()=>[...l[7]||=[s(`📊 去打卡`,-1)]]),_:1}),c(m,{to:`/insight`,class:`btn-ghost text-xs`},{default:r(()=>[...l[8]||=[s(`💡 情报 & 洞察`,-1)]]),_:1}),c(m,{to:`/competitor`,class:`btn-ghost text-xs`},{default:r(()=>[...l[9]||=[s(`🔍 竞品追踪`,-1)]]),_:1}),i(`button`,{onClick:ve,disabled:W.value,class:`btn-ghost text-xs`},u(W.value?`AI决策中…`:`🤖 重新生成指令`),9,N),i(`button`,{onClick:ye,disabled:q.value,class:`btn-ghost text-xs`},u(q.value?`研报生成中…`:`🔥 爆款研报`),9,P)]),J.value?(a(),o(`div`,F,[i(`div`,I,[i(`p`,L,[l[10]||=s(`🔥 爆款研报 `,-1),i(`span`,fe,u(Y.value),1)]),i(`button`,{onClick:l[0]||=e=>J.value=null,class:`text-xs text-[#475569] hover:text-[#94a3b8]`},`✕`)]),i(`div`,R,u(J.value),1),i(`div`,{class:`flex flex-wrap gap-2 pt-1 border-t border-[#1e293b]`},[i(`button`,{onClick:be,class:`btn-ghost text-xs`},`🎯 存决策库`),i(`button`,{onClick:xe,class:`btn-ghost text-xs`},`📚 存经验库`),i(`button`,{onClick:Se,class:`btn-ghost text-xs`},`📋 复制研报`)]),X.value?(a(),o(`div`,z,u(X.value),1)):p(``,!0)])):p(``,!0)])}}};export{B as default};