/* =========================================================
   游戏清单 —— 全站唯一需要手改的文件
   ---------------------------------------------------------
   ★ 新增游戏（两步）：

     1) 把游戏 HTML 文件上传到仓库根目录，文件名用英文
        例如：gobang.html
     2) 在下面 GAMES 数组里加一项：

        { file:'gobang.html', icon:'⚫', title:'五子棋',
          desc:'15×15 棋盘，先连成五子者胜。', tags:['棋类','AI'] }

     ▶ 网址就是 .../games/gobang.html

   ▶ 数组顺序 = 页面显示顺序
   ▶ 未完成的游戏：{ soon:true, icon:'🎲', title:'五子棋', desc:'敬请期待' }
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
    color: '#ffa94d',
    isNew: true
  },
  { soon: true, icon: '🚢', title: '海战棋',   desc: '需服务器支持，稍后上线' },
  { soon: true, icon: '⚫', title: '五子棋',   desc: '敬请期待' },
  { soon: true, icon: '🔢', title: '2048',    desc: '敬请期待' },
  { soon: true, icon: '🧠', title: '记忆翻牌', desc: '敬请期待' }
];
