# O

20180228-20180301，学完了jQuery库和Animate库

## jQuery库

jQuery库是JavaScript的一种库，主要包括选择器和修改HTML/CSS功能。


### 环境
jQuery语句要放在下面之中
```
<scirpt>
  $(document).ready(function() {
  
    jQuery语句;
  
  });

</scirpt>


```


### jQuery语句的形式

```
$(选择器).功能（“要改变的元素特性”);
```

### 选择器

选择器，目的是选中目标，以便作为修改对象。解决的是如何选择目标的问题。

如何选中目标？

#### HTML的elements

样式为
```
$("elements")
```

举例

```
$("button")

$("body")
```

#### class
样式为
```
$(".class")
```

举例
```
$(".target")

$(".btn")
```

#### id
样式

```
$("#id")
```

举例为
```
$("#target")
```

### jQuery功能

样式为

```
.功能（“新功能名称”）
```

#### 修改特性

增加class

`.addClass()`

移除class
`.removeClass()`

修改class
`.css("属性","属性值")`

改变元素特性
`.prop("",true)`


通过子元素改变父元素特性
```
.parent().css("属性","属性值")

.parent().addClass("")

.parent().removeClass("")

.parent().prop("",true);

```

通过父元素改变子元素特性
```
.child.css("属性","属性值")

.child.addClass("")

.child.removeClass("")

.child.prop("",ture)

```

选中特定的子元素，改变其特性

```
$(".target:nth-child(n)").addClass("");

$(".target:nth-child(n)").removeClass("");

$(".target:nth-chiild(n)").prop("",true);

```

选中奇数/偶数元素，改变其特性

```
$("#target:odd").prop("",true);

$("#target:enven").addClass（“”）；
```

#### 修改HTML

改变HTML

```
.html("<新元素>新文本</新元素>")
```

改变text文本

```
.text("新文本")
```


移除元素

```
.remove()
```


移动元素

```
.appendTo("新位置")

```

克隆元素

```
.clone().appendTo("新位置")
```

## Animate库

Animate是CSS的一个库，可以搜索animate.css

学到的几个CSS

弹起  `animated bounce`

闪动  `animated shake`

消失   `animated  fadeOut`

悬挂掉下  `animated hinge`


其他的class可以参照https://daneden.github.io/animate.css/


# R

感觉很有意思，虽然有些累，但是大脑很舒服。

# I 

现在操作流程就是，

攻一关freecode,

然后将学到的东西放到workfolwy进行组块，

再在github的issue里将英文的freecode翻译，标题包括`介绍，方法，练习，代码，浏览器显示，来源`

学过一个主题后，比如学过HTML/CSS，就将issue加上标签，分类放入project中。

学过一个主题，比如学过jQuery,就写一篇总结。

认为issue是写卡片， workflowy和github的project是组块。

个人觉得每天写点总结更好，按照“ORID”框架来写。

# D
下面开始制作致敬页了，这个虽然做过一次，但值得反复练习。 





