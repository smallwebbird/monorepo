---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
desc: 
  zh-CN: 中文描述
  en-US: english
---

```js
import { Anchor } from '@arco-design/web-react';

const AnchorLink = Anchor.Link;

ReactDOM.render(
  <Anchor offsetTop={60} style={{ backgroundColor: 'var(--color-bg-2)' }}>
    <AnchorLink href="#Basic" title="Basic">
      <AnchorLink href="#Static" title="Static">
        <AnchorLink href="#Lineless-mode" title="Lineless mode" />
        <AnchorLink href="#Affix" title="Affix" />
      </AnchorLink>
    </AnchorLink>
    <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
    <AnchorLink href="#Hash-mode" title="Hash mode" />
  </Anchor>,
  CONTAINER
);
```

```js
import { Anchor } from '@arco-design/web-react';

const AnchorLink = Anchor.Link;

ReactDOM.render(
  <Anchor offsetTop={60} style={{ backgroundColor: 'var(--color-bg-2)' }}>
    <AnchorLink href="#Basic" title="Basic">
      <AnchorLink href="#Static" title="Static">
        <AnchorLink href="#Lineless-mode" title="Lineless mode" />
        <AnchorLink href="#Affix" title="Affix" />
      </AnchorLink>
    </AnchorLink>
    <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
    <AnchorLink href="#Hash-mode" title="Hash mode" />
  </Anchor>,
  CONTAINER
);
```
