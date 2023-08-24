import type { Config } from "tailwindcss";
import FormKitVariants from '@formkit/themes/tailwindcss'
export default <Partial<Config>>{
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        './FormkitTheme.js',
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            transitionProperty: {
                button: 'color, background-color, border-color, text-decoration-color, fill, stroke, box-shadow'
            },
            spacing: {
                "4.5": "1.125rem",
                "7.5": "1.875rem",
                "10.5": "2.625rem",
                "12.5": "3.125rem",
                "15": "3.75rem",
                "25": "6.25rem",
                "27.5": "6.875rem",
                "37.5": "9.375rem",
            },
            opacity: {
                2: "2%",
                4:"4%",
                7: "7%",
                12: "12%",
                35: "35%",
            },
            fontFamily: {
                Inter: 'Inter, sans-serif',
                Nekst: 'Nekst'
            },
            zIndex: {
                1: '1',
                70: '70',
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
        },

    },
    plugins: [FormKitVariants],
};
