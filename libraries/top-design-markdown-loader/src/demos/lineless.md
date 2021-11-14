---
order: 2
title:
  zh-CN: 无轴线模式
  en-US: Lineless mode
---

## zh-CN

设置 `lineless` 时，可以使用无左侧轴线的锚点样式。

## en-US

Set `lineless=true`, you can use the anchor style without the left axis.

```js
import { Anchor } from '@arco-design/web-react';

const AnchorLink = Anchor.Link;

ReactDOM.render(
  <Anchor affix={false} lineless>
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
