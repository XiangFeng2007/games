/* =========================================================
   游戏清单 —— 这是全站唯一需要手改的文件
   ---------------------------------------------------------
   ★ 新增游戏（推荐方式，网址最漂亮）：

     1) 在网站根目录新建一个文件夹，名字用英文
        例如：gobang/
     2) 把你的游戏 HTML 命名为 index.html 放进该文件夹
        gobang/index.html
     3) 在下面 GAMES 数组里加一项：

        { file:'gobang', icon:'⚫', title:'五子棋',
          desc:'15×15 棋盘，先连成五子者胜。', tags:['棋类','AI'] }

     ▶ 访问网址会是 .../games/gobang/  （干净、好记、好分享）
     ▶ 用文件夹方式时，file 只写文件夹名即可（不用写 index.html）

   ★ 也可以用单文件方式（不想建文件夹时）：

        { file:'gobang.html', ... }     网址 .../games/gobang.html

   ▶ 数组顺序 = 页面显示顺序
   ▶ 未完成的游戏：{ soon:true, icon:'🎲', title:'五子棋', desc:'敬请期待' }
   ========================================================= */
const GAMES = [
  {
    file: 'typing',
    icon: '⌨️',
    title: '键盘打字大冒险',
    desc: '字母雨街机闯关 + 14 类跟打练习。含中文打字与纯字母模式，支持手机输入。',
    tags: ['打字', '中文', '街机', '手机'],
    color: '#6ea8ff'
  },
  {
    file: 'jungle',
    icon: '🐯',
    title: '斗兽棋',
    desc: '7×9 经典棋盘，八兽相克。含经典模式与翻棋模式，三档难度人机对战。',
    tags: ['棋类', 'AI', '双人', '手机'],
    color: '#ffa94d',
    isNew: true
  },
  { soon: true, icon: '🚢', title: '海战棋',   desc: '需服务器支持，稍后上线' },
  { soon: true, icon: '⚫', title: '五子棋',   desc: '敬请期待' },
  { soon: true, icon: '🔢', title: '2048',    desc: '敬请期待' },
  { soon: true, icon: '🧠', title: '记忆翻牌', desc: '敬请期待' }
];
