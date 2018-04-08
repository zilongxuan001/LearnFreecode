$(document).ready(function() {
 //定义一个数组，每个数组由一个字典组成，包含两个键对值。属性为quotes和author。 
  var quotes = [{
      quote: "横眉冷对千夫指，俯首甘为孺子牛。",
      author: "-鲁迅"
    },

    {
      quote: "向雷锋同志学习！",
      author: "-毛泽东"
    },

    {
      quote: "生的伟大，死的光荣",
      author: "-刘胡兰"
    },

    {
      quote: "春眠不觉晓，处处闻啼鸟。",
      author: "-王维"
    },

    {
      quote: "但使龙城飞将在，不教胡马度阴山",
      author: "-王昌龄"
    },

    {
      quote: "一代天骄，成吉思汗。",
      author: "-毛泽东"
    }
  ];

  //定义bodyColors数组，每个元素为一颜色值 
  var bodyColors = ["#3498db", "#e74c3c", "#f39c12", "#2980b9", "#f1c40f", "#2c3e50","#1abc9c", "#2ecc71", "#7f8c8d", "#6A1B9A", "#4E342E", "#d32f2f"];

  //选择id:quote-btn，设置“点击”功能
  $('#quote-btn').click(function() {
//将数组bodyColors的长度作为数值，取0到长度范围内的随机数，赋值给vlaue。
    var value = Math.floor(Math.random() * bodyColors.length);
//将bodyColors的元素随机赋值给randomColor
    var randomColor = bodyColors[value];
//选择body，添加随机颜色属性。
    $('body').css('background-color', randomColor);
    
//定义引文的随机数字，并赋值给quoteValue
    var quoteValue = Math.floor(Math.random() * quotes.length);
//将引文的随机元素的quote值赋值给randmQuote
    var randomQuote = quotes[quoteValue].quote;
//将引文随机元素的author值赋值给author
    var author = quotes[quoteValue].author;

//选择引言,设置“消失”和淡出的功能 
    $('#quote').fadeOut('fast', function() {
// &(this).html("")清除当前元素的内容； &(this).html(randomQuote),添加引言，fadeIn淡入，faedOut淡出。
      $(this).html(randomQuote).fadeIn('slow');
    });
//选择出处，设置“消失”和淡出的功能。 
    
    $('#quote-author').fadeOut('fast',function(){
      $(this).html(author).fadeIn('slow');
    });
    
   

    var baidu = 'https://www.baidu.com/s?wd=' + randomQuote;
    $(".baidu-share-button").attr("href", baidu);
  });//点击函数功能结束。
});
