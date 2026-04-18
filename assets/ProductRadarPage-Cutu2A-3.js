import{E as e,P as t,S as n,a as r,b as i,c as a,d as o,i as s,it as c,n as l,rt as u,s as d,t as f,u as ee,v as p}from"./api-4hVmSmfl.js";import{n as m,r as h}from"./runtime-dom.esm-bundler-B9F2mYSv.js";var g={class:`page-container`},_={class:`flex gap-1 border-b border-[#334155] mb-5`},v=[`onClick`],y={key:0,class:`grid grid-cols-1 lg:grid-cols-2 gap-5`},b={class:`card space-y-4`},x=[`disabled`],te={key:0,class:`card fade-in space-y-3`},ne={class:`text-xs text-[#cbd5e1] leading-relaxed whitespace-pre-wrap bg-[#263347]/50 rounded-lg p-3 max-h-[500px] overflow-y-auto`},re={key:1,class:`space-y-4`},ie={class:`flex items-center gap-2`},ae={key:0,class:`card py-8 text-center text-xs text-[#475569]`},S={key:1,class:`card py-8 text-center text-xs text-[#475569]`},C={key:2,class:`space-y-2`},w=[`onClick`],T={class:`flex items-center justify-between mb-1`},E={class:`text-xs font-medium text-[#e2e8f0] line-clamp-1`},D={class:`flex items-center gap-2`},O={class:`text-[10px] text-[#475569] font-mono`},k={class:`text-xs text-[#94a3b8] line-clamp-2`},A={class:`flex items-center gap-2 mt-1`},j={key:0,class:`text-[10px] text-[#475569]`},M={key:1,class:`text-[10px] text-sky-400`},N={key:2,class:`card fade-in space-y-3`},P={class:`flex items-center justify-between`},F={class:`section-title`},I={class:`text-xs text-[#cbd5e1] leading-relaxed whitespace-pre-wrap bg-[#263347]/50 rounded-lg p-3 max-h-80 overflow-y-auto`},L={key:3,class:`fixed bottom-6 right-6 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs px-4 py-2 rounded-lg fade-in z-50`},R={__name:`ProductRadarPage`,setup(R){let z=[{id:`analyze`,label:`🔍 选品评估`},{id:`library`,label:`📦 选品库`}],B=t(`analyze`),V=t(``),H=t(``),U=t(!1),W=t(``),G=t([]),K=t(!1),q=t(null),J=t(``),Y=t(``),X=t(``);function Z(e){X.value=e,setTimeout(()=>X.value=``,2500)}function oe(e){return e?e.includes(`立即`)||e.includes(`✅`)?`bg-emerald-500/10 text-emerald-400 border border-emerald-500/20`:e.includes(`观察`)||e.includes(`⚠️`)?`bg-yellow-500/10 text-yellow-400 border border-yellow-500/20`:`bg-red-500/10 text-red-400 border border-red-500/20`:`bg-[#1e293b] text-[#475569]`}let Q=s(()=>{let e=G.value;return J.value&&(e=e.filter(e=>(e.name||``).includes(J.value)||(e.content||``).includes(J.value))),Y.value&&(e=e.filter(e=>(e.verdict||``).includes(Y.value.replace(`✅ `,``).replace(`⚠️ `,``).replace(`❌ `,``)))),e});function se(e){return e?e.includes(`立即选`)?`立即选`:e.includes(`谨慎`)||e.includes(`观察`)?`观察`:e.includes(`不建议`)?`不建议`:``:``}function ce(e){if(!e)return null;let t=e.match(/(\d+(?:\.\d+)?)\s*\/\s*10/);return t?parseFloat(t[1]):null}function le(e){let t=e.match(/商品名[：:]\s*(.+)/);return t?t[1].trim():e.slice(0,20)}async function $(){U.value=!0,W.value=``;try{let e=await f.rawAI(ue());W.value=e.result||e}catch(e){W.value=`分析失败：`+(e.message||``)}finally{U.value=!1}}function ue(){return`你是资深抖音鞋服电商选品顾问，专注鞋类/袜类/配件品类。

候选商品信息：
${V.value}

来源渠道：${H.value||`未标注`}

请完成选品评估：

**【市场机会评分】** X/10分
评分依据：热度趋势 / 竞争饱和度 / 利润空间 / 与店铺定位匹配度

**【用户需求验证】**
- 核心痛点：这个商品解决什么问题？
- 目标人群：谁会买？消费场景是什么？
- 购买动机：功能型/情感型/跟风型？

**【竞争格局判断】**
- 市场饱和度（高/中/低）
- 差异化切入点：如何与现有竞品区分？
- 价格带分析：定价空间如何？

**【千川可投性评估】**
- 预估ROI区间
- 适合什么人群包？（兴趣/行为/相似）
- 素材方向建议（什么类型的内容转化率高）

**【供应链风险】**
- 季节性/库存/质量风险
- 备货建议（首批数量参考）

**【选品结论】**
✅ 立即选 / ⚠️ 谨慎观察 / ❌ 不建议
理由一句话，精确到数据或逻辑。

严禁套话，所有判断必须有依据。`}async function de(){if(!W.value)return;let e={id:Date.now(),date:new Date().toISOString().slice(0,10),name:le(V.value),source:H.value,content:W.value,verdict:se(W.value),score:ce(W.value),summary:W.value.slice(0,80)};G.value.unshift(e);try{await fetch(`/api/product_log`,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Access-Token":localStorage.getItem(`ops_token`)||``},body:JSON.stringify(G.value)}),Z(`✓ 已存入选品库`)}catch{Z(`✓ 已存入选品库（本地）`)}}async function fe(){W.value&&(await f.saveDecision({date:new Date().toISOString().slice(0,10),content:W.value,source:`选品雷达`,status:`pending`}),Z(`✓ 已存入决策库`))}async function pe(){W.value&&(await f.saveExperience({date:new Date().toISOString().slice(0,10),content:W.value,source:`选品雷达`,tags:[`选品`]}),Z(`✓ 已存入经验库`))}async function me(){K.value=!0;try{let e=await(await fetch(`/api/product_log`,{headers:{"X-Access-Token":localStorage.getItem(`ops_token`)||``}})).json();G.value=Array.isArray(e)?e:e.data||[]}catch{G.value=[]}finally{K.value=!1}}return p(me),(t,s)=>(i(),a(`div`,g,[s[11]||=r(`div`,{class:`flex items-center justify-between`},[r(`h1`,{class:`page-title`},[r(`span`,null,`📡`),o(` 选品雷达 `),r(`span`,{class:`text-xs font-normal text-sky-400 border border-sky-500/30 px-1.5 py-0.5 rounded`},`Phase 2B`)])],-1),r(`div`,_,[(i(),a(l,null,n(z,e=>r(`button`,{key:e.id,onClick:t=>B.value=e.id,class:u([`px-4 py-2 text-xs font-medium transition-colors border-b-2 -mb-px`,B.value===e.id?`text-sky-400 border-sky-400`:`text-[#64748b] border-transparent hover:text-[#94a3b8]`])},c(e.label),11,v)),64))]),B.value===`analyze`?(i(),a(`div`,y,[r(`div`,b,[s[8]||=r(`p`,{class:`section-title`},`候选商品分析`,-1),r(`div`,null,[s[5]||=r(`label`,{class:`label`},`商品信息`,-1),e(r(`textarea`,{"onUpdate:modelValue":s[0]||=e=>V.value=e,class:`input h-40 resize-none text-sm`,placeholder:`粘贴商品信息，格式不限，例：

商品名：某某休闲鞋
参考价：89元
主要卖点：软底、轻便、百搭
竞品链接或数据：...
来源渠道：1688/抖音选品广场/竞品`},null,512),[[h,V.value]])]),r(`div`,null,[s[7]||=r(`label`,{class:`label`},`来源渠道`,-1),e(r(`select`,{"onUpdate:modelValue":s[1]||=e=>H.value=e,class:`input`},[...s[6]||=[ee(`<option value="">请选择</option><option value="抖音选品广场">抖音选品广场</option><option value="1688">1688</option><option value="竞品参考">竞品参考</option><option value="小红书趋势">小红书趋势</option><option value="自主发现">自主发现</option>`,6)]],512),[[m,H.value]])]),r(`button`,{onClick:$,disabled:!V.value||U.value,class:`btn-primary w-full justify-center py-2`},c(U.value?`AI分析中…`:`🤖 AI选品评估`),9,x)]),W.value?(i(),a(`div`,te,[s[9]||=r(`p`,{class:`section-title`},`选品评估报告`,-1),r(`div`,ne,c(W.value),1),r(`div`,{class:`flex gap-2`},[r(`button`,{onClick:de,class:`btn-ghost text-xs`},`💾 存选品库`),r(`button`,{onClick:fe,class:`btn-ghost text-xs`},`🎯 存决策库`),r(`button`,{onClick:pe,class:`btn-ghost text-xs`},`📚 存经验库`)])])):d(``,!0)])):d(``,!0),B.value===`library`?(i(),a(`div`,re,[r(`div`,ie,[e(r(`input`,{"onUpdate:modelValue":s[2]||=e=>J.value=e,class:`input py-1 text-xs flex-1`,placeholder:`搜索商品名称…`},null,512),[[h,J.value]]),e(r(`select`,{"onUpdate:modelValue":s[3]||=e=>Y.value=e,class:`input py-1 text-xs w-28`},[...s[10]||=[r(`option`,{value:``},`全部`,-1),r(`option`,{value:`立即选`},`✅ 立即选`,-1),r(`option`,{value:`观察`},`⚠️ 观察`,-1),r(`option`,{value:`不建议`},`❌ 不建议`,-1)]],512),[[m,Y.value]])]),K.value?(i(),a(`div`,ae,`加载中…`)):Q.value.length?(i(),a(`div`,C,[(i(!0),a(l,null,n(Q.value,e=>(i(),a(`div`,{key:e.id,class:`card-sm cursor-pointer hover:border-sky-500/30`,onClick:t=>{q.value=e,W.value=``}},[r(`div`,T,[r(`span`,E,c(e.name||`未命名商品`),1),r(`div`,D,[r(`span`,{class:u([`text-[10px] px-1.5 py-0.5 rounded`,oe(e.verdict)])},c(e.verdict||`待评估`),3),r(`span`,O,c(e.date),1)])]),r(`p`,k,c(e.summary||e.content?.slice(0,80)),1),r(`div`,A,[e.source?(i(),a(`span`,j,`来源：`+c(e.source),1)):d(``,!0),e.score?(i(),a(`span`,M,`评分：`+c(e.score)+`/10`,1)):d(``,!0)])],8,w))),128))])):(i(),a(`div`,S,`暂无选品记录`))])):d(``,!0),q.value&&B.value===`library`?(i(),a(`div`,N,[r(`div`,P,[r(`p`,F,c(q.value.name||`商品详情`),1),r(`button`,{onClick:s[4]||=e=>q.value=null,class:`text-xs text-[#475569] hover:text-[#94a3b8]`},`✕`)]),r(`div`,I,c(q.value.content||q.value.analysis),1)])):d(``,!0),X.value?(i(),a(`div`,L,c(X.value),1)):d(``,!0)]))}};export{R as default};