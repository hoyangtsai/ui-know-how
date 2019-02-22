# 聊天對話框

<style>
.container {
  background: #D5D5D5;
  text-align: center;
}
.tri, .flecha {
  display: inline-block;
  margin: 15px;
}
.tri {
  text-align: left;
  width: 250px;
  height: 100px;
  background: #fff;
  position: relative;
  padding: 15px;
  box-sizing: border-box;
}
.tri:before {
  content: "";
  height: 0;
  width: 0;
  border-width: 20px 20px 20px 0;
  border-style: solid;
  border-color: transparent #FFF transparent transparent;
  position: absolute;
  top: 15px;
  left: -20px;
}
.flecha {
  position: relative;
  margin: -20px 110px 0;
  width: 0;
  height: 0;
  border-top: 90px solid transparent;
  border-right: 90px solid #FFC000;
  transform: rotate(10deg);
}
.flecha:after {
  content: "";
  position: absolute;
  border: 0 solid transparent;
  border-top: 30px solid #FFC000;
  border-radius: 200px 0 0 0;
  top: -119px;
  left: -98px;
  width: 120px;
  height: 120px;
  transform: rotate(45deg);
}
.drop-shadow {
	filter: drop-shadow(0px 0px 10px rgba(0,0,0,.5));
}
.box-shadow, .box-shadow:before {
  box-shadow: 0px 0px 10px rgba(0,0,0,.5);
}
</style>

有一種設計需求像是聊天對話框+陰影，簡單的實現方式是純 CSS 的一個三角圖標+矩形，但問題來了，如果直接使用 box-shadow 來實踐，在不規則的形狀上就會有不該出現的陰影

<div class="container">
  <div class="tri box-shadow">box-shadow</div>
</div>

此時 CSS 的 [filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter) 屬性就派上用場，其中的 drop-shadow 濾鏡效果就可以解決這個問題。

<div class="container">
  <div class="tri drop-shadow">filter: drop-shadow</div>
</div>

實現代碼如下

```html
<div class="tri drop-shadow">filter: drop-shadow</div>
```

```css
.tri {
  display: inline-block;
}
.tri {
  text-align: left;
  width: 250px;
  height: 100px;
  background: #fff;
  position: relative;
  padding: 15px;
  box-sizing: border-box;
}
.tri:before {
  content: "";
  height: 0;
  width: 0;
  border-width: 20px 20px 20px 0;
  border-style: solid;
  border-color: transparent #FFF transparent transparent;
  position: absolute;
  top: 15px;
  left: -20px;
}
.drop-shadow {
	filter: drop-shadow(0px 0px 10px rgba(0,0,0,.5));
}
```

參考來源：https://codepen.io/Kseso/pen/Ajamv