/** 插入自定义html模块 (可用于插入广告模块等)
 * {
 *   homeSidebarB: htmlString, 首页侧边栏底部
 *
 *   sidebarT: htmlString, 全局左侧边栏顶部
 *   sidebarB: htmlString, 全局左侧边栏底部
 *
 *   pageT: htmlString, 全局页面顶部
 *   pageB: htmlString, 全局页面底部
 *   pageTshowMode: string, 页面顶部-显示方式：未配置默认全局；'article' => 仅文章页①； 'custom' => 仅自定义页①
 *   pageBshowMode: string, 页面底部-显示方式：未配置默认全局；'article' => 仅文章页①； 'custom' => 仅自定义页①
 *
 *   windowLB: htmlString, 全局左下角②
 *   windowRB: htmlString, 全局右下角②
 * }
 *
 * ①注：在.md文件front matter配置`article: false`的页面是自定义页，未配置的默认是文章页（首页除外）。
 * ②注：windowLB 和 windowRB：1.展示区块最大宽高200px*400px。2.请给自定义元素定一个不超过200px*400px的宽高。3.在屏幕宽度小于960px时无论如何都不会显示。
 */

module.exports = {
  /*// 万维广告
  pageT: `
    <div class="wwads-cn wwads-horizontal page-wwads" data-id="136"></div>
    <style>
      .page-wwads{
        width:100%!important;
        min-height: 0;
        margin: 0;
      }
      .page-wwads .wwads-img img{
        width:80px!important;
      }
      .page-wwads .wwads-poweredby{
        width: 40px;
        position: absolute;
        right: 25px;
        bottom: 3px;
      }
      .wwads-content .wwads-text, .page-wwads .wwads-text{
        height: 100%;
        padding-top: 5px;
        display: block;
      }
  </style>
  `,*/
  // logo
  // sidebarT: `
  // <a href="https://hutool.cn" target="_blank">
  //   <img src="https://plus.hutool.cn/images/hutool.svg" alt="npm" class="no-zoom" style="width: 100%;border-radius: 2px;">
  // </a>`,

  // 赞助商广告
  // windowLB: `
  //     <div class="lbzz">
  //       <a target="_blank" href="https://gitee.com/gz-yami/mall4j">
  //         <img src="https://plus.hutool.cn/images/zz/mall4j.png"/>
  //       </a>
  //     </div>
  //     <div class="lbzz">
  //       <a target="_blank" href="https://github.com/chat2db/Chat2DB">
  //         <img src="https://plus.hutool.cn/images/zz/chat2db.jpg"/>
  //       </a>
  //     </div>
  // `,
  // sidebarT: `
  //     <div class="t_blank" style="margin-top: 6rem;"></div>
  // `,

  // // 赞助广告
  // pageT: `
  //   <div class="wwads-cn wwads-horizontal" data-id="126" style="max-width:100%"></div>
  //   <div class="hutool-top-zz" style="background-color: #E8ECF1;text-align:center">
  //     <div style="text-align:left">特别赞助 by：</div>
  //     <a target="_blank" href="https://www.xiaonuo.vip/?from=hutool">
  //       <img src="https://plus.hutool.cn/images/zz/xiaonuo_banner.jpg" />
  //     </a>
  //     <a target="_blank" href="http://github.crmeb.net/u/Hutool">
  //       <img src="https://plus.hutool.cn/images/zz/crmeb/crmeb_banner.jpg" />
  //     </a>
  //     <a target="_blank" href="https://www.jeequan.com/product/jeepay.html?from=hutool">
  //       <img src="https://plus.hutool.cn/images/zz/jeepay/jeepay_banner.jpg" />
  //     </a>
  //     <a target="_blank" href="https://dwz.cn/dX5lJKZt">
  //       <img src="https://plus.hutool.cn/images/zz/yungouos.jpg" />
  //     </a>
  //   </div>
  //   <style>
  //     .hutool-top-zz a img{width:48%;margin-left:5px}
  //   </style>
  // `


  // 万维广告
  //windowRB: `
  //  <div class="wwads-cn wwads-vertical windowRB" data-id="126" style="max-width:160px;"></div>
  //  <style>
  //    .windowRB{ padding: 0;}
  //    .windowRB .wwads-img{margin-top: 10px;}
  //    .windowRB .wwads-content{margin: 0 10px 10px 10px;}
  //  </style>
  //`
}


// module.exports = {
//   homeSidebarB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   sidebarT: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   sidebarB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   pageT: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   pageB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   windowLB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   windowRB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
// }
