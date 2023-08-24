// The following Tailwind theme aspires to be a reproduction of the
// default optional Genesis CSS theme that ships with FormKit

export default {
    // Global styles apply to _all_ inputs with matching section keys
    global: {
        fieldset: 'border border-gray-400 rounded px-2 pb-1',
        help: 'text-xs leading-1.4 text-Inputlabel',/* true */
        inner: ' formkit-invalid:ring-Inputerror formkit-disabled:bg-gray-200 bg-Inputwhite overflow-hidden formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none',
        input: 'formkit-invalid:text-Inputerror leading-1.4 appearance-none focus:outline-none bg-transparent focus:ring-0 focus:shadow-none',
        label: 'block mb-1 text-xs leading-1.4 text-Inputlabel',/* true */
        legend: 'font-bold text-sm',
        loaderIcon: 'inline-flex items-center w-4 text-gray-600 animate-spin',
        message: 'text-Inputerror text-xs leading-1.4',
        messages: 'list-none p-0 mt-1 mb-0 space-y-1',
        outer: 'formkit-disabled:opacity-50',
        prefixIcon: 'w-10 flex self-stretch grow-0 shrink-0 rounded-tl rounded-bl border-r border-gray-400 bg-white bg-gradient-to-b from-transparent to-gray-200 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
        suffixIcon: 'w-7 pr-3 p-3 flex self-stretch grow-0 shrink-0 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto'
    },
    // Family styles apply to all inputs that share a common family
    'family:box': {
        decorator: 'block relative h-5 w-5 mr-3.5 rounded-[3px] bg-transparent border border-fline peer-checked:border-fblue peer-checked:bg-fblue text-transparent peer-checked:text-white',
        decoratorIcon: 'flex p-[3px] w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
        help: 'mb-2 mt-1.5',
        input: 'absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none peer',
        inner: '$remove:formkit-disabled:bg-gray-200 shrink-0 $remove:bg-Inputwhite',
        label: '$reset text-sm leading-1.4 text-fmain select-none',
        wrapper: 'flex items-start',
    },
    'family:button': {
        input: '$reset inline-flex items-center bg-fblue text-white text-base leading-1.4 py-3 px-6 rounded-[10px] formkit-disabled:bg-gray-400 formkit-loading:before:w-4 formkit-loading:before:h-4 formkit-loading:before:mr-2 formkit-loading:before:border formkit-loading:before:border-2 formkit-loading:before:border-r-transparent formkit-loading:before:rounded-3xl formkit-loading:before:border-white formkit-loading:before:animate-spin',
        prefixIcon: '$reset block w-4 -ml-2 mr-2 stretch',
        suffixIcon: '$reset block w-4 ml-2 stretch',
    },
    'family:text': {
        inner: 'flex items-center ring-1 ring-black/5 focus-within:ring-fline [&>label:first-child]:focus-within:text-blue-500 rounded-[10px]',
        input: 'w-full px-3 py-3.5 text-sm text-fblack placeholder-gray-400',
    },
    'family:date': {
        inner: 'flex items-center ring-1 ring-black/5 focus-within:ring-fline [&>label:first-child]:focus-within:text-blue-500 rounded-[10px]',
        input: 'w-full px-3 py-3.5 text-sm text-fblack placeholder-gray-400',
    },
    radio: {
        decorator: 'rounded-full',
        decoratorIcon: 'w-5 p-[5px]'
    },
    select: {
        inner: 'flex relative items-center ring-1 ring-black/5 focus-within:ring-fline [&>label:first-child]:focus-within:text-blue-500 rounded-[10px]',
        input: 'w-full px-3 py-3.5 text-sm text-fblack placeholder-gray-400',
        selectIcon: 'flex p-[3px] shrink-0 w-5 mr-2 -ml-[1.5em] h-full pointer-events-none [&>svg]:w-[1em]',
    },
    textarea: {
        inner: 'flex ring-1 ring-black/5 focus-within:ring-fline [&>label:first-child]:focus-within:text-blue-500 rounded-[10px]',
        input: 'block resize-none w-full px-3 py-3.5 text-sm text-fblack placeholder-gray-400',
    },
    counter: {
        input: 'w-[30px] p-0.5 text-center bg-Inputwhite rounded-[5px] font-medium text-sm text-fblack placeholder-gray-400 leading-1.2 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
        inner: 'flex items-center gap-1.5 w-fit',
        decrement: 'hover:text-fblue transition-colors duration-500 easy-linear text-fblack disabled:text-inactive',
        increment: 'hover:text-fblue transition-colors duration-500 easy-linear text-fblack disabled:text-inactive'
    },
}