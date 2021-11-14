---
order: 3
title:
  zh-CN: 固钉样式
  en-US: Affix
---

## zh-CN

示例中的锚点将会出现在页面右侧。

当设置 `affix` 为 `true`时，锚点组件将会嵌套在[固钉](/react/components/affix)组件内。通过该属性可以设置`Affix`组件的样式。

## en-US

The anchor in the example will appear on the right side of the page.

When the `affix` is set to `true`, the anchor component will be nested in the [Affix](/react/components/affix) component. This property can be used to set the style of the `Affix` component.

```js
import { Anchor } from '@arco-design/web-react';

const AnchorLink = Anchor.Link;

ReactDOM.render(
  <Anchor
    offsetBottom={40}
    affixStyle={{ position: 'absolute', right: -170, top: '50%', zIndex: 1 }}
  >
    <AnchorLink href="#Basic" title="Basic" />
    <AnchorLink href="#Static" title="Static" />
    <AnchorLink href="#Lineless-mode" title="Lineless mode" />
    <AnchorLink href="#Affix" title="Affix" />
    <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
    <AnchorLink href="#Hash-mode" title="Hash mode" />
  </Anchor>,
  CONTAINER
);
```
