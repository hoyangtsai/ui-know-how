## Media Query Hacks

### 目標為 IE 6 and 7

```CSS
@media screen\9 {
    /* 定制樣式 */
    body { background: red; }
}
```

### 目標為 IE 6, 7 and 8

```css
@media \0screen\,screen\9 {
    /* 定制樣式 */
    body { background: green; }
}
```

### 目標為 IE8

```css
@media \0screen {
    /* 定制樣式 */
    body { background: blue; }
}
```

### 目標為 IE 8, 9 and 10

```css
@media screen\0 {
    /* 定制樣式 */
    body { background: orange; }
}
```

### 目標為 IE 9 and 10

```css
@media screen and (min-width:0{{ content }}) {
    /* 定制樣式 */
    body { background: yellow; }
}
```

參考來源: http://keithclark.co.uk/articles/moving-ie-specific-css-into-media-blocks/
