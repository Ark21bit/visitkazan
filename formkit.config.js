// formkit.config.js
import { generateClasses } from '@formkit/themes'
import theme from './FormkitTheme'
import counter from './components/FormKit/Counter.vue'
import datepicker from './components/FormKit/Datepicker.vue'
import select from './components/FormKit/Select.vue'
import rating from './components/FormKit/Rating.vue'
import { createAutoAnimatePlugin } from '@formkit/addons'
import { createInput } from '@formkit/vue'
import { ru, en } from '@formkit/i18n'
import counterGMax from './custom-rules/counterGMax'
export default {
    rules: { counterGMax },
    icons: {
        select: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="CurrentColor" d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"/></svg>'
    },
    locales: { ru, en },
    locale: 'en',
    config: {
        classes: generateClasses(theme),
    },
    plugins: [
        createAutoAnimatePlugin()
    ],
    inputs: {
        counter: createInput(counter, {
            component: counter
        }),
        selectC: createInput(select, {
            props: ['options']
        }),
        datepickerC: createInput(datepicker, {
            props: [
                'autoApply',
                'minDate',
                'locale',
                'ignoreTimeValidation',
                'allowedDates',
                'enableTimePicker',
                'clearable',
                'monthNameFormat',
                'timezone',
            ]
        }),
        ratingC: createInput(rating, {
            props: ['max']
        }),
    },
}