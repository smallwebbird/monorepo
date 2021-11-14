---
order: 4
title:
  zh-CN: 设置锚点滚动偏移量
  en-US: Scroll boundary
---

## zh-CN

可以设置 `boundary` 来定制锚点滚动偏移量。

## en-US

You can set `boundary` to customize the anchor point scroll offset.

```js
import { Anchor } from '@arco-design/web-react';

const AnchorLink = Anchor.Link;

ReactDOM.render(
  <Anchor affix={false} boundary="center">
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
