
#### parser
  - HTML/SVG/XHTML ---> DOM Tree
  - css --->css rule tree
  - js ---> manipulate DOM Tree and Css Rule Tree via DOM API/CSSOM API

#### post parser
DOM Tree and CSS Rule Tree ---> Rendering Tree

#### paint
Graphic API

#### Repaint vs Reflow
Repaint: color change
Reflow: resize, move location
Reflow is expensive
Reflow is more battery power

refer to http://coolshell.cn/articles/9666.html

```javascript
var bstyle = document.body.style; // cache
 
bstyle.padding = "20px"; // reflow, repaint
bstyle.border = "10px solid red"; //  再一次的 reflow 和 repaint
 
bstyle.color = "blue"; // repaint
bstyle.backgroundColor = "#fad"; // repaint
 
bstyle.fontSize = "2em"; // reflow, repaint
 
// new DOM element - reflow, repaint
document.body.appendChild(document.createTextNode('dude!'));
```

#### 减少reflow/repaint
下面是一些Best Practices：

1）不要一条一条地修改DOM的样式。与其这样，还不如预先定义好css的class，然后修改DOM的className。

```javascript
// bad
var left = 10,
top = 10;
el.style.left = left + "px";
el.style.top  = top  + "px";
 
// Good
el.className += " theclassname";
 
// Good
el.style.cssText += "; left: " + left + "px; top: " + top + "px;";
```

2）把DOM离线后修改。如：

使用documentFragment 对象在内存里操作DOM
先把DOM给display:none(有一次reflow)，然后你想怎么改就怎么改。比如修改100次，然后再把他显示出来。
clone一个DOM结点到内存里，然后想怎么改就怎么改，改完后，和在线的那个的交换一下。

3）不要把DOM结点的属性值放在一个循环里当成循环里的变量。不然这会导致大量地读写这个结点的属性。

4）尽可能的修改层级比较低的DOM。当然，改变层级比较底的DOM有可能会造成大面积的reflow，但是也可能影响范围很小。

5）为动画的HTML元件使用fixed或absoult的position，那么修改他们的CSS是不会reflow的。

6）千万不要使用table布局。因为可能很小的一个小改动会造成整个table的重新布局。

#### Use ReactJS