/* 学习笔记数据：新条目追加到数组最前面
   字段说明
   date   记录日期 YYYY-MM-DD
   term   表达 / 术语原文
   type   slang 俚语 | term 术语 | abbr 缩写 | phrase 句式
   src    出处（平台 / 版块）
   ctx    看到它的原句（可选）
   ctxUrl 原帖链接（可选）
   zh     一句话中文意思
   explain 详细解释
   tone   语气与场合：能不能用、什么时候用
   ex     例句 [[英文, 中文], ...]
   rel    相关术语，对应主站术语表 id（可选）
   read   引申阅读 [[标题, 链接, 来源标签], ...]
   demo   true 表示示例条目
*/
const NOTES = [
 {date:"2026-11-12",term:"skill issue",type:"slang",src:"X / Reddit / Discord（通用）",
  ctx:"Claude Code keeps deleting my tests → skill issue, write a hook",
  zh:"「是你自己菜」，问题出在使用者而不是工具。",
  explain:"源自游戏圈，用来嘲讽把失败归咎于外部因素的人，后来扩散到开发者社区。讨论 AI 编程工具时很常见：有人抱怨工具不好用，回复者认为是对方没用对方法。多数时候是半开玩笑，但对新手说会显得刻薄。",
  tone:"俚语，带调侃或轻度嘲讽。朋友间、梗图里可以用；官方账号回复用户问题时不要用，容易被截图批评傲慢。",
  ex:[["Not a model problem, just a skill issue on my part.","不是模型的问题，是我自己没用好。（自嘲用法最安全）"],["Calling every bug report a skill issue is how you lose a community.","把每个 bug 反馈都说成「你不会用」，社区就是这么丢掉的。"]],
  rel:["hype","slang"],
  read:[["Know Your Meme · Skill Issue","https://knowyourmeme.com/memes/skill-issue","meme"],["Urban Dictionary · skill issue","https://www.urbandictionary.com/define.php?term=skill%20issue","dict"]],
  demo:true},
];
