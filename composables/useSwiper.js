import { register } from "swiper/element";
export const useSwiper = (swiperContainer, options) => {
	register();
	onMounted(() => {
		Object.assign(toValue(swiperContainer), {			
			...toValue(options),
		});
		toValue(swiperContainer).initialize();
	});

	return;
};
