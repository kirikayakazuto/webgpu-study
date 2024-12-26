import triangleVertWGSL from '../../shaders/triangle.vert.wgsl'
import redFragWGSL from '../../shaders/red.frag.wgsl'

const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const adapter = await navigator.gpu?.requestAdapter();
const device = await adapter?.requestDevice();


const devicePixelRatio = window.devicePixelRatio;
canvas.width = canvas.clientWidth * devicePixelRatio;
canvas.height = canvas.clientHeight * devicePixelRatio;
const presentationFormat = navigator.gpu.getPreferredCanvasFormat();

device.createRenderPipeline({
    layout: 'auto',
    vertex: {
        module: device.createShaderModule({
            code: triangleVertWGSL
        })
    },
    fragment: {
        module: device.createShaderModule({
            code: redFragWGSL
        }),
        targets: [{ format: presentationFormat }]
    },
    primitive: {
        topology: 'triangle-list'
    }
});


