import{E as e,P as t,S as n,a as r,b as i,c as a,d as o,i as s,it as c,n as l,rt as u,s as d,t as f,u as p,v as m}from"./api-BmO7vss1.js";import{n as h,r as ee}from"./runtime-dom.esm-bundler-BMTxWgy1.js";var te={class:`page-container`},ne={class:`flex gap-1 border-b border-[#334155] mb-5`},re=[`onClick`],ie={key:0,class:`grid grid-cols-1 lg:grid-cols-2 gap-5`},ae={class:`card space-y-4`},oe=[`placeholder`],se={class:`flex flex-wrap gap-2`},ce=[`onClick`],le=[`disabled`],ue={key:0,class:`card fade-in space-y-3`},de={class:`text-xs text-[#cbd5e1] leading-relaxed whitespace-pre-wrap bg-[#263347]/50 rounded-lg p-3 max-h-[500px] overflow-y-auto`},fe={key:1,class:`space-y-4`},pe={key:0,class:`card py-8 text-center text-xs text-[#475569]`},me={key:1,class:`card py-8 text-center text-xs text-[#475569]`},he={key:2,class:`space-y-3`},ge={class:`flex items-center justify-between`},g={class:`flex items-center gap-2`},_={class:`text-xs font-medium text-[#e2e8f0]`},v={class:`text-[10px] text-[#475569]`},y={class:`flex gap-2`},b=[`onClick`],x=[`onClick`],S={class:`text-xs text-[#cbd5e1] leading-relaxed whitespace-pre-wrap bg-[#263347]/50 rounded-lg p-3 max-h-60 overflow-y-auto`},C={key:2,class:`space-y-4`},w={class:`grid grid-cols-1 lg:grid-cols-2 gap-4`},T={class:`card space-y-3`},E={key:0,class:`text-xs text-[#cbd5e1] leading-relaxed whitespace-pre-wrap`},D={key:1,class:`text-xs text-[#475569] italic`},O={class:`card space-y-3`},k=[`disabled`],A={key:0,class:`space-y-2`},j={class:`text-xs text-[#cbd5e1] bg-[#263347]/50 rounded-lg p-3 leading-relaxed`},M={key:3,class:`fixed bottom-6 right-6 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs px-4 py-2 rounded-lg fade-in z-50`},N={key:4,class:`fixed bottom-6 left-1/2 -translate-x-1/2 bg-sky-500/20 border border-sky-500/40 text-sky-400 text-xs px-4 py-2 rounded-lg fade-in z-50`},P={__name:`AudiencePage`,setup(P){let F=[{id:`analyze`,label:`🔬 深度分析`},{id:`profiles`,label:`📚 画像库`},{id:`quickref`,label:`⚡ 快速参考`}],I=t(`analyze`),L=t(``),R=t(``),z=t(!1),B=t(``),V=t([]),H=t(!1),U=t([]),W=t(`写脚本`),G=t(``),K=t(!1),q=t(``),J=t(``),_e=[`消费心理`,`购买障碍`,`内容偏好`,`价格敏感度`,`决策路径`,`复购行为`],ve={千川后台:`粘贴千川后台的人群数据，例：

性别：女性占68%
年龄：25-35岁占45%，35-45岁占32%
地域：广东18%、江苏12%...
消费能力：中等偏上
兴趣标签：时尚、穿搭、性价比`,抖音小店:`粘贴抖音小店的用户画像数据，包括：
- 年龄分布
- 性别比例
- 地域分布
- 客单价区间
- 购买时段`,买家评论:`粘贴买家评论原文，例：

"穿着很舒适，软底的，上班穿一天脚不累"
"颜色比图片深一点，但整体还可以"
"质量一般，但这个价格说得过去"...`,自定义:`描述你对目标人群的了解，包括：
- 基础画像（年龄/性别/地域）
- 消费场景
- 购买动机
- 痛点需求
- 价格接受度`},ye=s(()=>ve[L.value]||`输入或粘贴任何形式的人群相关数据…`),Y=s(()=>V.value.length&&V.value[0]?.content||``);function be(){R.value=``}function xe(e){let t=U.value.indexOf(e);t>=0?U.value.splice(t,1):U.value.push(e)}async function Se(){z.value=!0,B.value=``;try{let e=U.value.length?`\n重点分析方向：${U.value.join(`、`)}`:``,t=`你是消费行为分析专家，结合心理学/消费学框架分析以下人群数据。

数据来源：${L.value||`综合`}
${e}

人群数据：
${R.value}

请完成深度人群洞察：

**【人群核心特征】**
- 基础画像：年龄/性别/地域/消费能力（精准描述）
- 生活方式：职业/生活节奏/社交习惯

**【消费心理深度分析】**
- 购买动机：功能需求/情感需求/社交需求各占比？
- 决策路径：从认知到购买的关键触发点
- 价格心理：价格锚定点在哪里？什么时候会放弃购买？

**【内容消费偏好】**
- 喜欢什么类型的视频？（时长/风格/节奏）
- 什么样的标题/封面最能吸引点击？
- 哪类话术最能触发购买冲动？

**【购买障碍分析】**
- 最常见的放弃购买原因（Top3）
- 如何通过内容/服务设计克服这些障碍？

**【运营指导建议】**
- 视觉风格：主图/视频应该呈现什么感觉？
- 话术策略：什么关键词/场景最能打动她们？
- 定价策略：最佳价格带和促销节奏
- 选品方向：基于此人群，下一步应该补充哪类商品？

**【动态变化预警】**
该人群在未来3-6个月可能发生什么变化？需要提前布局什么？

严禁套话，所有洞察必须来自数据，建议必须可直接执行。`,n=await f.rawAI(t);B.value=n.result||n}catch(e){B.value=`分析失败：`+(e.message||``)}finally{z.value=!1}}async function Ce(){if(!B.value)return;let e={id:Date.now(),date:new Date().toISOString().slice(0,10),source:L.value||`人群画像`,content:B.value};V.value.unshift(e);try{await fetch(`/api/audience`,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Access-Token":localStorage.getItem(`ops_token`)||``},body:JSON.stringify({profiles:V.value})}),$(`✓ 已更新画像库`)}catch{$(`✓ 已保存（本地）`)}}async function X(){B.value&&(await f.saveDecision({date:new Date().toISOString().slice(0,10),content:B.value,source:`人群画像`,status:`pending`}),$(`✓ 已存入决策库`))}async function we(e){V.value=V.value.filter(t=>t.id!==e);try{await fetch(`/api/audience`,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Access-Token":localStorage.getItem(`ops_token`)||``},body:JSON.stringify({profiles:V.value})})}catch{}}async function Te(){if(Y.value){K.value=!0,G.value=``;try{let e=`基于以下人群画像，生成一段用于"${W.value}"场景的AI提示词背景，要求简洁、精准、可直接粘贴使用，控制在150字以内：

${Y.value.slice(0,500)}`,t=await f.rawAI(e);G.value=t.result||t}catch(e){G.value=`生成失败：`+(e.message||``)}finally{K.value=!1}}}function Z(e){Q(typeof e==`string`?e:B.value)}function Q(e){navigator.clipboard.writeText(e).then(()=>{J.value=`✓ 已复制到剪贴板`,setTimeout(()=>J.value=``,2e3)}).catch(()=>{let t=document.createElement(`textarea`);t.value=e,document.body.appendChild(t),t.select(),document.execCommand(`copy`),document.body.removeChild(t),J.value=`✓ 已复制`,setTimeout(()=>J.value=``,2e3)})}function $(e){q.value=e,setTimeout(()=>q.value=``,2500)}async function Ee(){H.value=!0;try{let e=await(await fetch(`/api/audience`,{headers:{"X-Access-Token":localStorage.getItem(`ops_token`)||``}})).json();V.value=e.profiles||e.data?.profiles||[]}catch{V.value=[]}finally{H.value=!1}}return m(Ee),(t,s)=>(i(),a(`div`,te,[s[15]||=r(`div`,{class:`flex items-center justify-between`},[r(`h1`,{class:`page-title`},[r(`span`,null,`👥`),o(` 人群画像 `),r(`span`,{class:`text-xs font-normal text-sky-400 border border-sky-500/30 px-1.5 py-0.5 rounded`},`Phase 2B`)])],-1),r(`div`,ne,[(i(),a(l,null,n(F,e=>r(`button`,{key:e.id,onClick:t=>I.value=e.id,class:u([`px-4 py-2 text-xs font-medium transition-colors border-b-2 -mb-px`,I.value===e.id?`text-sky-400 border-sky-400`:`text-[#64748b] border-transparent hover:text-[#94a3b8]`])},c(e.label),11,re)),64))]),I.value===`analyze`?(i(),a(`div`,ie,[r(`div`,ae,[s[9]||=r(`p`,{class:`section-title`},`人群画像深度分析`,-1),r(`div`,null,[s[6]||=r(`label`,{class:`label`},`人群数据来源`,-1),e(r(`select`,{"onUpdate:modelValue":s[0]||=e=>L.value=e,class:`input`,onChange:be},[...s[5]||=[p(`<option value="">请选择</option><option value="千川后台">千川后台数据</option><option value="抖音小店">抖音小店用户画像</option><option value="买家评论">买家评论分析</option><option value="自定义">自定义输入</option>`,5)]],544),[[h,L.value]])]),r(`div`,null,[s[7]||=r(`label`,{class:`label`},`画像数据`,-1),e(r(`textarea`,{"onUpdate:modelValue":s[1]||=e=>R.value=e,class:`input h-40 resize-none text-sm`,placeholder:ye.value},null,8,oe),[[ee,R.value]])]),r(`div`,null,[s[8]||=r(`label`,{class:`label`},`分析重点（可选）`,-1),r(`div`,se,[(i(),a(l,null,n(_e,e=>r(`button`,{key:e,onClick:t=>xe(e),class:u([`text-xs px-2 py-1 rounded border transition-colors`,U.value.includes(e)?`bg-sky-500/20 text-sky-400 border-sky-500/40`:`bg-[#1e293b] text-[#64748b] border-[#334155] hover:border-[#475569]`])},c(e),11,ce)),64))])]),r(`button`,{onClick:Se,disabled:!R.value||z.value,class:`btn-primary w-full justify-center py-2`},c(z.value?`AI分析中…`:`🤖 深度分析人群`),9,le)]),B.value?(i(),a(`div`,ue,[s[10]||=r(`p`,{class:`section-title`},`人群洞察报告`,-1),r(`div`,de,c(B.value),1),r(`div`,{class:`flex gap-2`},[r(`button`,{onClick:Ce,class:`btn-ghost text-xs`},`💾 更新画像库`),r(`button`,{onClick:X,class:`btn-ghost text-xs`},`🎯 存决策库`),r(`button`,{onClick:Z,class:`btn-ghost text-xs`},`📋 复制为提示词背景`)])])):d(``,!0)])):d(``,!0),I.value===`profiles`?(i(),a(`div`,fe,[H.value?(i(),a(`div`,pe,`加载中…`)):V.value.length?(i(),a(`div`,he,[(i(!0),a(l,null,n(V.value,e=>(i(),a(`div`,{key:e.id,class:`card space-y-3`},[r(`div`,ge,[r(`div`,g,[r(`span`,_,c(e.source||`人群画像`),1),r(`span`,v,c(e.date),1)]),r(`div`,y,[r(`button`,{onClick:t=>Z(e.content),class:`text-[10px] text-sky-400 hover:text-sky-300`},`📋 复制`,8,b),r(`button`,{onClick:t=>we(e.id),class:`text-[10px] text-red-400 hover:text-red-300`},`删除`,8,x)])]),r(`div`,S,c(e.content),1)]))),128))])):(i(),a(`div`,me,` 暂无画像记录，完成一次分析后自动保存 `))])):d(``,!0),I.value===`quickref`?(i(),a(`div`,C,[r(`div`,w,[r(`div`,T,[s[11]||=r(`p`,{class:`section-title`},`🎯 当前主力人群`,-1),Y.value?(i(),a(`div`,E,c(Y.value),1)):(i(),a(`div`,D,` 完成人群分析后，最新画像将显示在这里 `)),Y.value?(i(),a(`button`,{key:2,onClick:s[2]||=e=>Z(Y.value),class:`btn-ghost text-xs w-full justify-center`},` 📋 一键复制为AI背景 `)):d(``,!0)]),r(`div`,O,[s[14]||=r(`p`,{class:`section-title`},`💡 快速提示词生成`,-1),r(`div`,null,[s[13]||=r(`label`,{class:`label`},`使用场景`,-1),e(r(`select`,{"onUpdate:modelValue":s[3]||=e=>W.value=e,class:`input`},[...s[12]||=[p(`<option value="写脚本">写视频脚本</option><option value="写标题">写商品标题</option><option value="写评论话术">写评论区话术</option><option value="选品">辅助选品决策</option><option value="投放">千川投放策略</option>`,5)]],512),[[h,W.value]])]),r(`button`,{onClick:Te,disabled:!Y.value||K.value,class:`btn-primary w-full justify-center py-2`},c(K.value?`生成中…`:`✨ 生成场景提示词`),9,k),G.value?(i(),a(`div`,A,[r(`div`,j,c(G.value),1),r(`button`,{onClick:s[4]||=e=>Q(G.value),class:`btn-ghost text-xs w-full justify-center`},`📋 复制`)])):d(``,!0)])])])):d(``,!0),q.value?(i(),a(`div`,M,c(q.value),1)):d(``,!0),J.value?(i(),a(`div`,N,c(J.value),1)):d(``,!0)]))}};export{P as default};