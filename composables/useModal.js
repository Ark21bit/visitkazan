export const useModal = () => {
    const isModalShow = ref(false);

    const scrollWidh = useState('scrollWidh')

    const openModal = () => {
        isModalShow.value = true;
        document.querySelector("body").classList.add('modal-open')
        if (scrollWidh.value === 0) return document.querySelector("body").classList.add('modal-open-mobile')
    };

    const closeModal = () => {
        isModalShow.value = false;
        setTimeout(() => {
            document.querySelector("body").classList.remove('modal-open');
            document.querySelector("body").classList.remove('modal-open-mobile')
        }, 500)
    };

    onUnmounted(() => {
        document.querySelector("body").classList.remove('modal-open-mobile')
        document.querySelector("body").classList.remove('modal-open')
    });

    return { isModalShow, closeModal, openModal };
};
