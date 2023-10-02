export const useToast = () => {
    const toasts = useState('toasts')
    let toastId = 0;
    const add = (options) => {
        const {  title = null, severity = 'info', messages = null } = options
        toasts.value.push({ title: title, severity: severity, id: toastId, messages: messages })
        toastId++
    }
    const del = (id) => {
        toasts.value.splice(toasts.value.indexOf(a => a.id == id), 1)
    }
    return { add, del }
};
