# 多行文本省略 (純CSS)

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
    font-size: 90px;
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
    cursor: pointer;
  }
  .ellipsis {
    color: #999;
    font-size: 16px;
  }
  .more-btn {
    color: #8D5E47;
    font-size: 16px;
  }
  .ellipsis-container.expand {
    max-height: none;
  }
  .ellipsis-container.expand .intro-container {
    -webkit-line-clamp: unset;
  }
  .ellipsis-container.expand .intro-more {
    display: none;
  }
</style>

<div>
  <div class="ellipsis-container">
    <div class="intro-container">
      <p class="intro-content">阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。</p>
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

<script src="./showcase/ellipsis.js"></script>

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
  font-size: 90px;
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
.ellipsis-container.expand {
  max-height: none;
}
.ellipsis-container.expand .intro-container {
  -webkit-line-clamp: unset;
}
.ellipsis-container.expand .intro-more {
  display: none;
}
```

```html
<div class="ellipsis-container">
  <div class="intro-container">
    <p class="intro-content">阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。阿富汗是中亚的内陆国家，连通东亚、南亚和西亚之间的古代贸易和军事通道，占据着沟通东西方的重要战略位置。</p>
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

參考來源：http://hai.li/2017/03/08/css-multiline-overflow-ellipsis.html