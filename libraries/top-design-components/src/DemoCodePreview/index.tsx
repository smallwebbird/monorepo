import React, { useState } from 'react';
import * as Prism from 'prismjs';

interface IProps {
  highlightCode?: string;
  title?: string;
  desc?: string;
  children?: React.Element | React.Element[];
  lang?: string;
}


const prefixCls = 'td-document-demo';
export const DemoCodePreview = ({ highlightCode, lang, desc, title, children }: IProps) => {
  const [visible, setVisible] = useState(false);
  const renderHighlightCode = () => {
    const decodeHighlightCode = decodeURIComponent(highlightCode);
    const code = Prism.highlight(decodeHighlightCode, Prism.languages.javascript, lang);
    return code;
  }
  return <div className={prefixCls}>
    <div className={`${prefixCls}-title`}>{title}</div>
    <div className={`${prefixCls}-desc`}>{desc}</div>
    <div className={`${prefixCls}-preview`}>
      {children}
    </div>
    <div style={{ display: 'flex', marginTop: 20 }}>
      <div
        onClick={() => setVisible(!visible)}
        style={{ height: 20, cursor: 'pointer', lineHeight: '20px', padding: 5, border: '1px solid rgba(0,0,0,0.1)', borderRadius: '50%', marginRight: 10 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z" fill="currentColor" /><path d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z" fill="currentColor" /><path d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z" fill="currentColor" /></svg>
      </div>
      <div style={{ height: 20, cursor: 'pointer', lineHeight: '20px', padding: 5, border: '1px solid rgba(0,0,0,0.1)', borderRadius: '50%' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 7H7V5H13V7Z" fill="currentColor" /><path d="M13 11H7V9H13V11Z" fill="currentColor" /><path d="M7 15H13V13H7V15Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z" fill="currentColor" /></svg>
      </div>
    </div>
    {
      visible && <div className={`${prefixCls}-code`}>
      <pre className={ lang ? `language-${lang}` : "language-js" }>
        <code className={ lang ? `language-${lang}` : "language-js" }
        dangerouslySetInnerHTML={{ __html: renderHighlightCode() }} ></code>
      </pre>
    </div>
    }
  </div>
}
