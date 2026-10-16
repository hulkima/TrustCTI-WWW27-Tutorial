From Reports, Beyond Reports — WWW 2027 Tutorial Homepage
========================================================

本版本已填入提供的 WWW27_Tutorial_InSubmission.pdf 及参考截图中的实际内容。

页面内容
- 完整题目与副标题、会议时间地点、拟定形式
- Abstract
- Tutorial overview：Traceable / Faithful / Reproducible / Verifiable
- Target audience / Prerequisites / Learning outcomes
- 首屏完整标题始终单行，绿色网格 SVG 动画按 8 秒一轮循环播放
- Agenda：Coming soon（整行）
- Slides and materials：Coming soon（整行，位于 Agenda 下方）
- 七位 organizers、单位及已核实的个人主页
- NUS / PKU / SMU 官方图标、会议链接、联系邮箱

稿件状态
- 目前标注为 tutorial proposal / In submission，不声称已被会议录用。
- 10–14 May 2027 为会议日期，具体 tutorial 日期待公布。
- Ding Li 按 proposal 保留 To be confirmed。
- Yuhan Meng 和 Anis Yusof 未取得可靠个人头像，使用姓名缩写。
- PDF 内的作者批注、写作指令、临时 DOI/ISBN、示例视频和未定的详细日程没有放到网页上。

文件与修改
index.html：所有正文、组织者信息、链接；直接编辑此文件即可修改内容。
styles.css：字体、颜色、布局、手机适配、打印样式。
animation.css：用户提供代码包中的 SVG 插画样式及 8 秒无限循环时间线。
site.js：导航当前章节状态、动画暂停/继续。禁用 JavaScript 仍可阅读内容并播放 CSS 动画。
assets/logos/：原始大学图标及来源记录。
assets/people/：已核实的公开头像；做了尺寸/格式优化，来源见 sources.json。
assets/fonts/：本地 Manrope 标题字体与 Source Sans 3 正文字体，附各自 SIL Open Font License。

预览与部署
可直接用浏览器打开 index.html，无需安装依赖或构建。
也可以在此目录运行：
  python3 -m http.server 8765
然后打开：
  http://localhost:8765/

GitHub Pages：把本目录内容上传至仓库根目录，选择该分支的 /(root) 作为 Pages 来源。
页面资源均使用相对路径，可放在 username.github.io/repository/ 子目录。
本版本没有自动发布到外部托管服务，也没有把投稿 PDF 放入网站。

设计
参考用户提供的长截图，使用绿色首屏、白色正文、墨绿大标题、留白和四阶段连续流程。
采用 frontend-design 技能的布局与审美审查流程：
https://github.com/anthropics/skills/tree/main/skills/frontend-design

联系
haokai.ma@nus.edu.sg

动画说明
移植自用户提供的 www27-tutorial.zip，为真实 SVG/CSS 动画，不是静态截图。
默认自动循环，可通过 Pause animation / Play animation 暂停或继续。
系统启用“减少动态效果”时默认呈现完整流程，点击 Play animation 可手动播放。
Video teaser 已从页面移除。

本次视觉更新
- WWW 2027 官网原版透明 Logo 替换 W27 自制图标，来源见 assets/logos/www2027-source.json。
- 首屏与循环动画使用统一绿色背景，保留全部动画节奏及暂停/继续功能。
- 组织者头像加黄色外圈、白色间隔与浅边框卡片。
- Agenda / Slides 保持整行上下排列，Coming soon 改为右侧黄色标签。
- Important links 标题与每个资源条目保持单行。

布局微调
- 淡化首屏和页脚绿色，Tutorial overview 与 Agenda 同用 #fbfcfa 背景。
- Target audience / Prerequisites 拆为两个独立区块，桌面上均位于 What you will learn 左侧。
- 组织者桌面 4 + 3 排列，第二排三人居中；窄屏两列，最后一人也居中。
- Important links 最大宽度收至 820px。
- In submission 使用加粗金色状态标签，When / Where / Format 加大加粗。

排版精修
- 三所大学图标放大约 30%，手机上保留自适应尺寸。
- 四阶段采用共享行布局，问题、输出分隔线保持对齐，并为后两阶段增加宽度。
- 数字节点通过 Evidence / Hypotheses / Scenarios 箭头连接，小屏使用连续纵向流程。
- 精简受众介绍，学习目标与左侧两区块的顶部、底部对齐。
- 左上角 WWW 2027 / Tutorial 下补充 In submission 状态。
