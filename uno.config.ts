import { defineConfig, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'
import formKitUnocssPlugin from "@formkit/themes/unocss"
export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            fonts: {
                Inter: { name: "Inter", weights: [400, 500, 600, 700, 800, 900] }
            },
        }),
        formKitUnocssPlugin()
    ],
    content: {
        pipeline: {
            include: [
                /\.(vue)($|\?)/,
                './FormkitTheme.js'
            ]
        }
    },
    blocklist: [
        'container'
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup()
    ],
    theme: {
        transitionProperty: {
            button: 'color, background-color, border-color, text-decoration-color, fill, stroke, box-shadow'
        },
        fontFamily: {
            Nekst: 'Nekst'
        },
        colors: {
            "fblack": "#131313",
            "fblack2": "#333",
            "inactive": "#B9B9B9",
            "fblue": "#19B6D6",
            "fmain": "#656565",
            "Inputlabel": "#73828E",
            "Inputwhite": "#F6F6F6",
            "fline": "#C5C5C5",
            "Input": "#112433",
            "Input2": "#1F3647",
            "fline2": "#DCDCDC",
            "fline3": "#E8E8E8",
            "tag": "#238FA5",
            "tag2": "#36b1ca",
            "fred": "#EF271E",
            "Inputerror": "#EB001B",
            "footer": "#162F42",
            "footer2": "#2B465A",
            "buttonH": "#0C98B5",
            "tableTh": "#2B465A",
            "gray": "#F4F4F4"
        },
        breakpoints: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            "1200px": '1200px',
            "1340px": '1340px',
        },
    },
    rules: [
        [/^leading-([\.\d]+)$/, ([_, num]) => ({ "line-height": `${num}` })]
    ]
})