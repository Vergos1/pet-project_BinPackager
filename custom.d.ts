declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: any;
    export default src;
}

declare module '*.jpg' {
    const content: any;
    export default content;
}
declare module '*.png' {
    const content: any;
    export default content;
}
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
declare module '*.sass' {
    const content: Record<string, string>;
    export default content;
}
declare module '*.module.scss' {
    const content: Record<string, string>;
    export default content;
}