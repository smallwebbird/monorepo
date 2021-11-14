---
order: 5
title:
  zh-CN: 点击锚点不记录历史
  en-US: Hash mode
---

## zh-CN

可以设置点击锚点而不改变浏览器历史。

## en-US

You can set the click anchor without changing the browser history.

```js
import { Anchor } from '@arco-design/web-react';

const AnchorLink = Anchor.Link;

ReactDOM.render(
  <Anchor affix={false} hash={false}>
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
