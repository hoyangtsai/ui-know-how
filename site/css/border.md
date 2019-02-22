## Border Arrow

### 三角圖標 Triangle Arrow

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

```scss
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


### 線條箭頭 Angle Arrow

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

```scss
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
