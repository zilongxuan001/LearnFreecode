## 功能
点击按钮，将引言和出处发到twitter。

## 代码
```
 $('#quote-btn').click(function() {
   
//定义发送到twitter。
   
    var twitter = 'https://twitter.com/intent/tweet?text=' + randomQuote;
    $(".twitter-share-button").attr("href", twitter);
  });//点击函数功能结束。

```

## 效果
![image](https://user-images.githubusercontent.com/19257507/38651876-0a45c41a-3e36-11e8-9c95-8cc7fbce5fdd.png)


来源：
https://codepen.io/zilongxuan001/pen/oqJwKj
