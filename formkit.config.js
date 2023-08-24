// formkit.config.js
import { generateClasses } from '@formkit/themes'
import { ru } from '@formkit/i18n'
import theme from './FormkitTheme'
import counter from './components/FormKit/Counter.vue'
/* import theme from '@formkit/themes/tailwindcss/genesis' */
import { createAutoAnimatePlugin } from '@formkit/addons'
import { createInput } from '@formkit/vue'
export default {
    locales: { ru },
    locale: 'ru',
    config: {
        classes: generateClasses(theme),
    },
    plugins: [
        createAutoAnimatePlugin()
    ],
    inputs: {
        counter: createInput(counter, {
            component:counter
        }),
    },
}