var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get('/', function (req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
  superagent.get('https://cnodejs.org/')
    .end(function (err, sres) {
      // 常规的错误处理
      if (err) {
        return next(err);
      }
      // sres.text 里面存储着网页的html内容，将它传给cheerio.load 之后
      // 就可以得到一个实现了 jquery 接口的变量, 我们习惯性地将它命名为`$`
      // 剩下就都是jquery的内容了
      var $ = cheerio.load(sres.text);
      var items = [];
      $('#topic_list .topic_title').each(function (idx, element) {
        var $element = $(element);
        items.push({
          title: $element.attr('title'),
          href: $element.attr('href')
        });
      });
      
      res.send(items);
      // $("#topic_list .cell").each(function(idx, element) {
      //   var $element = $(element);
      //   items.push({
      //     title: $element.find(".topic_title").attr("title"),
      //     href: $element.find(".topic_title").attr("href"),
      //     author: $element.find(".user_avatar img").attr("title")
      //   });
      // });
      // res.send(items);   
    });
});

app.listen(3002, function () {
  console.log('app is listening at port 3000');
})