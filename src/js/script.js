
$(function () {
    var pageTop = $('.js-page-top');
    pageTop.click(function () {
      $('body,html').animate({
        scrollTop: 0 // 上から0pxの位置に戻る
      }, 500,
      // 500ミリ秒かけて戻る
      'swing');
      return false;
    });
  });