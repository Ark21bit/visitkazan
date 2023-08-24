export const useModal = () => {
  const isModalShow = ref(false);

  const openModal = () => {
    isModalShow.value = true;
    document.querySelector("body").style.overflow = 'hidden';
  };

  const closeModal = () => {
    isModalShow.value = false;
    document.querySelector("body").style.overflow = null;
  };

  onUnmounted(()=> {
    document.querySelector("body").style.overflow = null;
  });

  return { isModalShow, closeModal, openModal };
};
