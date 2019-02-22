# 重構知識代碼片段 UI Snippets

[TOC]

以下我一些重構經驗沈澱的筆記

如果記得來源，我會盡量註明出處或作者

## CSS

###  Background Gradient 背景漸層

Linear Gradient 線性漸層

#### CSS 和 Photoshop 角度規則

CSS 角度 0 度起始位置在 6 點鐘位置，角度為正數時順時針方向旋轉。

Photoshop 角度 0 度起始位置在 3 點鐘位置，角度為正數時逆時針方向旋轉。

為了方便將 PS 漸層的角度換算成 CSS 的角度，可以將 CSS 漸層的角度用負數表示，負數表示為反方向，這樣 CSS 也成逆時針方向旋轉。

![](https://ws1.sinaimg.cn/large/006tNbRwgy1fvbsr4j45pj30k00b9t99.jpg)

但是起始點一樣在 6 點鐘方向，這樣可以得出 CSS 和 PS 的角度相差 90 度。例如，如果在 PS 裡漸層角度設定為 90 度，換算成 CSS 的角度為 -(90+90) = -180 度

- Photoshop

  先決定填充顏色順序，漸層條由左至右為0% - 100%，再根據設定的角度填充顏色

  ![](https://ws2.sinaimg.cn/large/006tNbRwgy1fvbsr4y6smj31c80jwkan.jpg)

- CSS

  先決定旋轉角度，角度後面設定的顏色，依順序填充

  ![](https://ws4.sinaimg.cn/large/006tNbRwgy1fvbsr4n20xj31gy0j815u.jpg)

詳細文檔參考: <a href="https://www.w3schools.com/css/css3_gradients.asp" target="_blank">CSS Gradients - W3Schools</a>

### Border 進階應用

#### 三角圖標 Triangle Arrow

**Solution 1.**

<div style="width: 0; height: 0; border-color: transparent transparent transparent #007bff; border-width: 50px 0px 50px 100px; border-style: solid;"></div>

```html
<div style="width: 0;
  height: 0;
  border-color: transparent transparent transparent #007bff;
  border-width: 50px 0px 50px 100px;
  border-style: solid;">
</div>
```

<div style="width: 0; height: 0; border-color: rgb(0, 123, 255) transparent transparent; border-width: 100px 100px 0px 0px; border-style: solid;"></div>

```html
<div style="width: 0;
  height: 0;
  border-color: rgb(0, 123, 255) transparent transparent;
  border-width: 100px 100px 0px 0px;
  border-style: solid;">
</div>
```

> 如果可以用樣式編譯器，就不用記而且讓 coding 更有效率

> ```scss
  // triangle
  @mixin triangle($width, $height, $direction, $backgroundColor: #000) {
      height: 0;
      width: 0;
      @if $direction == "top" {
          border-bottom: $height solid $backgroundColor;
          border-left: ($width / 2) solid transparent;
          border-right: ($width / 2) solid transparent;
      }
      @else if $direction == "bottom" {
          border-top: $height solid $backgroundColor;
          border-left: ($width / 2) solid transparent;
          border-right: ($width / 2) solid transparent;
      }
      @else if $direction == "right" {
          border-left: $width solid $backgroundColor;
          border-top: ($height / 2) solid transparent;
          border-bottom: ($height / 2) solid transparent;
      }
      @else if $direction == "left" {
          border-right: $width solid $backgroundColor;
          border-top: ($height / 2) solid transparent;
          border-bottom: ($height / 2) solid transparent;
      }
      @else if $direction == "top right" {
          border-style: solid;
          border-color: transparent $backgroundColor transparent transparent;
          border-width: 0px $width $height 0px;
      }
      @else if $direction == "bottom right" {
          border-style: solid;
          border-color: transparent transparent $backgroundColor transparent;
          border-width: 0px 0px $height $width;
      }
      @else if $direction == "bottom left" {
          border-style: solid;
          border-color: transparent transparent transparent $backgroundColor;
          border-width: $height 0px 0px $width;
      }
      @else if $direction == "top left" {
          border-style: solid;
          border-color: $backgroundColor transparent transparent transparent;
          border-width: $height $width 0px 0px;
      }
  }
  ```

**Solution 2.**

三角圖標產生器 - http://apps.eky.hk/css-triangle-generator/


#### 線條箭頭 Angle Arrow

如果箭頭角度成垂直90度，可以簡單用兩邊邊框，加上 transform: rotate(角度); 即可簡單實現

**Solution**
<div style="width: 40px; height: 40px; border-right: 4px solid #000; border-bottom: 4px solid #000; transform: rotate(45deg); transform-origin: right bottom;"></div>

```
<div style="width: 40px;
  height: 40px;
  border-right:
  4px solid #000;
  border-bottom: 4px solid #000;
  transform: rotate(45deg);
  transform-origin: right bottom;">
</div>
```

如果箭頭角度不是直角，可以用兩個三角圖標實現

**Solution**

<style type="text/css">
  .triangle-arrow {
      width: 0;
      height: 0;
      position: relative;
      border-left: 40px solid #007bff;
      border-top: 60px solid transparent;
      border-bottom: 60px solid transparent;
  }
  .triangle-arrow:before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      right: 3px;
      top: -60px;
      border-left: 40px solid #fff;
      border-top: 60px solid transparent;
      border-bottom: 60px solid transparent;
  }
</style>

<div class="triangle-arrow"></div>

```html
<style type="text/css">
  .triangle-arrow {
      width: 0;
      height: 0;
      position: relative;
      border-left: 40px solid #007bff;
      border-top: 60px solid transparent;
      border-bottom: 60px solid transparent;
  }
  .triangle-arrow:before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      right: 3px;
      top: -60px;
      border-left: 40px solid #fff;
      border-top: 60px solid transparent;
      border-bottom: 60px solid transparent;
  }
</style>
<div class="triangle-arrow"></div>
```

> 承如上述，進階作法  
> 用樣式編譯器，可以直接帶方法應用

> ```scss
  // Angle arrow
  @mixin arrow($width: 20px, $height: 20px, $direction: top, $borderColor: #000, $backgroundColor: #fff, $thick: 4px) {
      height: 0;
      width: 0;
      &:after {
          position: absolute;
          content: "";
          width: 0;
          height: 0;
      }
      @if $direction == "top" {
          border-bottom: $height solid $borderColor;
          border-left: ($width / 2) solid transparent;
          border-right: ($width / 2) solid transparent;
          &:after {
              top: $thick;
              left: -($width / 2);
              border-bottom: $height solid $backgroundColor;
              border-left: ($width / 2) solid transparent;
              border-right: ($width / 2) solid transparent;
          }
      }
      @else if $direction == "right" {
          border-left: $width solid $borderColor;
          border-top: ($height / 2) solid transparent;
          border-bottom: ($height / 2) solid transparent;
          &:after {
              right: $thick;
              top: -($height / 2);
              border-left: $width solid $backgroundColor;
              border-top: ($height / 2) solid transparent;
              border-bottom: ($height / 2) solid transparent;
          }
      }
      @else if $direction == "bottom" {
          border-top: $height solid $borderColor;
          border-left: ($width / 2) solid transparent;
          border-right: ($width / 2) solid transparent;
          &:after {
              bottom: $thick;
              left: -($width / 2);
              border-top: $height solid $backgroundColor;
              border-left: ($width / 2) solid transparent;
              border-right: ($width / 2) solid transparent;
          }
      }
      @else if $direction == "left" {
          border-right: $width solid $borderColor;
          border-top: ($height / 2) solid transparent;
          border-bottom: ($height / 2) solid transparent;
          &:after {
              left: $thick;
              top: -($height / 2);
              border-right: $width solid $backgroundColor;
              border-top: ($height / 2) solid transparent;
              border-bottom: ($height / 2) solid transparent;
          }
      }
  }
  ```

### Box-shadow

CSS 和 PS box-shadow 關係

### Media Query Hacks

目標為 IE 6 and 7

```CSS
@media screen\9 {
    /* 定制樣式 */
    body { background: red; }
}
```

目標為 IE 6, 7 and 8

```css
@media \0screen\,screen\9 {
    /* 定制樣式 */
    body { background: green; }
}
```

目標為 IE8

```css
@media \0screen {
    /* 定制樣式 */
    body { background: blue; }
}
```

目標為 IE 8, 9 and 10

```css
@media screen\0 {
    /* 定制樣式 */
    body { background: orange; }
}
```

目標為 IE 9 and 10

```css
@media screen and (min-width:0{{ content }}) {
    /* 定制樣式 */
    body { background: yellow; }
}
```

From: http://keithclark.co.uk/articles/moving-ie-specific-css-into-media-blocks/

### 選擇器進階用法

* :nth-child

  > 選擇前三個元素
  ```css
  ul li:nth-child(-n+3)
  ```

### 多行文本

<style type="text/css">
  .ellipsis-container {
    position: relative;
    width: 100%;
    max-height: 48px;
    line-height: 24px;
    word-break: break-all;
    overflow: hidden;
    box-sizing: border-box;
  }
  .intro-container {
    position: relative;
    display: -webkit-box;
    font-size: 60px;
    color: transparent;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .intro-content {
    display: inline;
    font-size: 16px;
    color: #999;
    vertical-align: top;
  }
  .intro-more-label {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .intro-more-label:before {
    content: "";
    display: block;
    float: right;
    width: 50%;
    height: 100%;
  }
  .intro-placeholder {
    display: block;
    float: right;
    width: 50%;
    height: 48px;
  }
  .intro-more {
    position: relative;
    float: right;
    font-size: 16px;
    width: 60px;
    height: 24px;
    margin-top: -24px;
  }
  .ellipsis {
    color: #999;
    font-size: 16px;
  }
  .more-btn {
    color: #8D5E47;
    font-size: 16px;
  }
</style>

<div>
  <div class="ellipsis-container">
    <div class="intro-container">
      <div class="intro-content">阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。</div>
      <div class="intro-more-label">
        <div class="intro-placeholder"></div>
        <div class="intro-more">
          <span class="ellipsis">...</span>
          <span class="more-btn">更多</span>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  document.querySelector('.intro-more').addEventListener('click', function(e){
    alert('click');
  });
</script>

```css
.ellipsis-container {
  position: relative;
  width: 100%;
  max-height: 48px;
  line-height: 24px;
  word-break: break-all;
  overflow: hidden;
  box-sizing: border-box;
}
.intro-container {
  position: relative;
  display: -webkit-box;
  font-size: 60px;
  color: transparent;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.intro-content {
  display: inline;
  font-size: 16px;
  color: #999;
  vertical-align: top;
}
.intro-more-label {
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.intro-more-label:before {
  content: "";
  display: block;
  float: right;
  width: 50%;
  height: 100%;
}
.intro-placeholder {
  content: '';
  display: block;
  float: right;
  width: 50%;
  height: 48px;
}
.intro-more {
  position: relative;
  float: right;
  font-size: 16px;
  width: 60px;
  height: 24px;
  margin-top: -24px;
}
.ellipsis {
  color: #999;
  font-size: 16px;
}
.more-btn {
  color: #8D5E47;
  font-size: 16px;
}
```

```html
<div class="ellipsis-container">
  <div class="intro-container">
    <div class="intro-content">阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。</div>
    <div class="intro-more-label">
      <div class="intro-placeholder"></div>
      <div class="intro-more">
        <span class="ellipsis">...</span>
        <span class="more-btn">更多</span>
      </div>
    </div>
  </div>
</div>
```

## HTML

### 移動端常用 meta 標籤

```
<!-- 頁面編碼 -->
<meta charset="utf-8">

<!-- 使用IE最新版內核 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<!-- 忽略頁面中數字識別為電話，忽略email識別 -->
<meta name="format-detection" content="telphone=no, email=no" />

<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">

<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">

<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">

<!-- UC强制竖屏 -->
<meta name="screen-orientation" content="portrait">

<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">

<!-- UC应用模式 -->
<meta name="browsermode" content="application">
```

### Video 標籤

#### 微信場景影片播放

## Use cases

### Banner 視頻

### Bubble message 聊天對話框

### Steps 步驟

