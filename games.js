/* =========================================================
   游戏清单（本文件由「生成游戏清单.bat」自动生成，请勿手改）
   ---------------------------------------------------------
   更新时间：2026-10-17 13:04
   共 8 个游戏

   ★ 新增游戏：把 HTML 丢进本文件夹，然后双击「生成游戏清单.bat」
   ★ 想改卡片上的文字/图标：在游戏 HTML 的 <head> 里加
       <meta name="game:icon"  content="🎲">
       <meta name="game:desc"  content="一句话介绍">
       <meta name="game:tags"  content="标签1,标签2">
       <meta name="game:color" content="#6ea8ff">
       <meta name="game:badge" content="new">
   ========================================================= */
const GAMES = [
{
    file: 'typing.html',
    icon: '⌨️',
    title: '键盘打字大冒险',
    desc: '字母雨街机闯关 + 14 类跟打练习。含中文打字与纯字母模式，支持手机输入。',
    tags: ['打字', '中文', '街机', '手机'],
    color: '#6ea8ff'
  },
{
    file: 'jungle.html',
    icon: '🐯',
    title: '斗兽棋',
    desc: '7×9 经典棋盘，八兽相克。含经典模式与翻棋模式，三档难度人机对战。',
    tags: ['棋类', 'AI', '双人', '手机'],
    color: '#ffa94d'
  },
{
    file: 'game2048.html',
    icon: '🔢',
    title: '2048',
    desc: '经典数字合并游戏。方向键或手指滑动，相同数字合并，冲击 2048。',
    tags: ['益智', '数字', '手机'],
    color: '#ffc44d',
    isNew: true
  },
{
    file: 'battleship.html',
    icon: '🚢',
    title: '海战棋',
    desc: '6×6 海域单机对战电脑。搜索与锁定算法 AI，三档难度。',
    tags: ['策略', 'AI', '海战', '手机'],
    color: '#4dabf7',
    isNew: true
  },
{
    file: 'gobang.html',
    icon: '⚫',
    title: '五子棋',
    desc: '15×15 棋盘，先连成五子者胜。棋型评分 AI，三档难度，支持双人。',
    tags: ['棋类', 'AI', '双人', '手机'],
    color: '#94a3b8',
    isNew: true
  },
  {
    file: 'minesweeper.html',
    icon: '💣',
    title: '扫雷',
    desc: '经典扫雷，三档难度。首点必安全，支持插旗与双键快开。',
    tags: ['益智', '单人', '手机'],
    color: '#ff6b6b'
    , isNew: true
  },
  {
    file: 'sudoku.html',
    icon: '🔢',
    title: '数独',
    desc: '经典数独，三档难度。自动生成唯一解题目，支持候选数与智能提示。',
    tags: ['益智', '数字', '单人', '手机'],
    color: '#a06bff'
    , isNew: true
  },
  {
    file: 'tetris.html',
    icon: '🧱',
    title: '俄罗斯方块',
    desc: '经典俄罗斯方块。消行音阶递增，支持手机滑动与虚拟按键。',
    tags: ['街机', '休闲', '手机'],
    color: '#4dabf7'
    , isNew: true
  }
];