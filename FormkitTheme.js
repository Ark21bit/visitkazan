// The following Tailwind theme aspires to be a reproduction of the
// default optional Genesis CSS theme that ships with FormKit

export default {
    // Global styles apply to _all_ inputs with matching section keys
    global: {
        fieldset: 'border border-gray-400 rounded px-2 pb-1',
        help: 'text-xs leading-1.4 text-Inputlabel',/* true */
        inner: 'relative formkit-invalid:ring-Inputerror formkit-disabled:bg-gray-200 bg-Inputwhite overflow-hidden formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none',
        input: 'formkit-invalid:text-Inputerror leading-1.4 appearance-none focus:outline-none bg-transparent focus:ring-0 focus:shadow-none',
        label: 'block mb-1 text-xs leading-1.4 text-Inputlabel',/* true */
        legend: 'font-bold text-sm',
        loaderIcon: 'inline-flex items-center w-4 text-gray-600 animate-spin',
        message: 'text-Inputerror text-xs leading-1.4',
        messages: 'list-none p-0 mt-1 mb-0 space-y-1',
        outer: 'formkit-disabled:opacity-50 relative',
        prefixIcon: 'w-10 flex self-stretch grow-0 shrink-0 rounded-tl rounded-bl border-r border-gray-400 bg-white bg-gradient-to-b from-transparent to-gray-200 [&>svg]:w-full [&>svg]:max-w-1em [&>svg]:max-h-1em [&>svg]:m-auto',
        suffixIcon: 'w-7 pr-3 p-3 flex self-stretch grow-0 shrink-0 [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-1em [&>svg]:max-h-1em [&>svg]:m-auto'
    },
    // Family styles apply to all inputs that share a common family
    'family:box': {
        decorator: 'block relative h-5 w-5 mr-3.5 rounded-.75 bg-transparent ring-inset ring-1 ring-fline peer-checked:ring-fblue peer-checked:bg-fblue text-transparent peer-checked:text-white',
        decoratorIcon: 'flex w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
        help: 'mb-2 mt-1.5',
        input: 'absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none peer',
        inner: '$remove:formkit-disabled:bg-gray-200 shrink-0 $remove:bg-Inputwhite',
        label: '$reset text-sm leading-1.4 text-fmain select-none',
        wrapper: 'flex items-start',
    },
    'family:button': {
        input: '$reset inline-flex items-center bg-fblue text-white text-base leading-1.4 py-3 px-6 rounded-2.5 formkit-disabled:bg-gray-400 formkit-loading:before:w-4 formkit-loading:before:h-4 formkit-loading:before:mr-2 formkit-loading:before:border formkit-loading:before:border-2 formkit-loading:before:border-r-transparent formkit-loading:before:rounded-3xl formkit-loading:before:border-white formkit-loading:before:animate-spin',
        prefixIcon: '$reset block w-4 -ml-2 mr-2 stretch',
        suffixIcon: '$reset block w-4 ml-2 stretch',
    },
    'family:text': {
        inner: 'flex items-center ring-1 ring-black/5 focus-within:ring-fline [&>label:first-child]:focus-within:text-blue-500 rounded-2.5',
        input: 'w-full px-3 py-3.5 text-sm text-fblack placeholder-gray-400',
    },
    'family:date': {
        inner: 'flex items-center ring-1 ring-black/5 focus-within:ring-fline [&>label:first-child]:focus-within:text-blue-500 rounded-2.5',
        input: 'w-full px-3 py-3.5 text-sm text-fblack placeholder-gray-400',
    },
    radio: {
        decorator: 'rounded-full',
        decoratorIcon: 'w-5 p-1.25'
    },
    textarea: {
        inner: 'flex ring-1 ring-black/5 focus-within:ring-fline [&>label:first-child]:focus-within:text-blue-500 rounded-2.5',
        input: 'block resize-none w-full px-3 py-3.5 text-sm text-fblack placeholder-gray-400',
    },
    counter: {
        input: 'w-7.5 p-0.5 text-center $remove:bg-transparent bg-Inputwhite rounded-1.25 font-medium text-sm text-fblack placeholder-gray-400 leading-1.2 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
        inner: 'flex items-center gap-1.5 w-fit $remove:bg-Inputwhite',
        decrement: 'aspect-square hover:text-fblue transition-colors duration-500 easy-linear text-fblack disabled:text-inactive',
        increment: 'aspect-square hover:text-fblue transition-colors duration-500 easy-linear text-fblack disabled:text-inactive'
    },
    selectC: {
        inner: '$remove:overflow-hidden flex relative items-center ring-1 ring-black/5 focus-within:ring-fline [&>label:first-child]:focus-within:text-blue-500 rounded-2.5',
        input: 'items-center py-3.5 px-3 text-fblack appearance-none bg-transparent flex grow justify-between w-full',
        'dropdownWrapper': 'absolute mt-1.25 shadow-[0_4px_23px_0_rgba(0,0,0,0.07)] z-1 top-full overflow-auto min-w-full max-h-100',
        listbox: 'bg-white overflow-hidden rounded-2',
        listitem: 'cursor-pointer hover:bg-fblue px-3.5 py-2.5 hover:text-white transition-colors duration-500',
        listitemSelect: 'bg-fblue text-white',
        selectIcon: 'text-lg transition-transform duration-500 ease-linear leading-none',
        selectText:'min-h-1.4em text-sm leading-1.4'
    },
    datepickerC:{
        inner: '$remove:overflow-hidden flex items-center ring-1 ring-black/5 focus-within:ring-fline [&>label:first-child]:focus-within:text-blue-500 rounded-2.5 leading-1.4',        
        inputIcon:'text-xl text-#112433',
        calendarIcon:'text-xl text-#112433',
    },
    ratingC:{
        inner: '$remove:bg-Inputwhite bg-transparent'
    }
}
