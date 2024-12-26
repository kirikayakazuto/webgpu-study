/// <reference types="vite/client" />
/// <reference types="@webgpu/types" />
declare const __DIRNAME__;

declare module '*.wgsl' {
    const content: string
    export default content
}
