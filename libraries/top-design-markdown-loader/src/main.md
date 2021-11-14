---
title: 
    - zh-CN: 基本用法
    - en-US: english
desc:
    - zh-CN: 中文描述
    - en-US: english
---

%%Content%%

## 属性/Props


### `<Affix>`

|参数名|描述|类型|默认值|
|---|:---:|:---:|---:|
|className|节点类名|`string \| string[]`|`-`|
|style|节点样式|`CSSProperties`|`-`|
|affixClassName|给 `fixed` 的元素设置 className ( `2.11.0` 开始支持 )|`string \| string[]`|`-`|
|affixStyle|给 `fixed` 的元素设置 style，注意不要设置 `position` `top` `width` `height`， 因为这几个属性是在元素 fixed 时候用于定位的 ( `2.8.0` 开始支持 )|`CSSProperties`|`-`|
|offsetTop|距离窗口顶部达到指定偏移量后触发|`number`|`-`|
|offsetBottom|距离窗口底部达到指定偏移量后触发|`number`|`-`|
|target|滚动容器，默认是 `window`。|`() => HTMLElement \| Window`|`() => window`|
|targetContainer|`target`的外层滚动元素。`Affix `将会监听该元素的滚动事件，并实时更新固钉的位置。主要是为了解决 `target` 属性指定为非 `window` 元素时，如果外层元素滚动，可能会导致固钉跑出容器问题。|`() => HTMLElement \| Window`|`-`|
|onChange|固定状态发生改变时触发|`(affixed: boolean) => void`|`-`|
