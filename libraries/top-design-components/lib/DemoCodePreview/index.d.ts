import React from 'react';
interface IProps {
    highlightCode?: string;
    title?: string;
    desc?: string;
    children?: React.Element | React.Element[];
    lang?: string;
}
export declare const DemoCodePreview: ({ highlightCode, lang, desc, title, children }: IProps) => any;
export {};
