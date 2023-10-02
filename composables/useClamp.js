export default function useClamp(clampNode = ref(null), options) {
	const { fontSize = 16, lineHeight = 1.5, countLine = 10 } = options;

	const isClamp = ref(true);
	const clampButtonVisble = computed(() => {
		if (clampNodeH.value > fontSize * lineHeight * countLine) return true;
		return false;
	});

	const isClampToglle = () => {
		isClamp.value = !isClamp.value;
	};

	const clampNodeH = ref(0);

	const getMessageScrollH = () => {
		clampNodeH.value = clampNode.value.scrollHeight;
	};

	onMounted(() => {
		clampNodeH.value = clampNode.value.scrollHeight;
		window.addEventListener("resize", getMessageScrollH);
	});

	onUnmounted(() => {
		window.removeEventListener("resize", getMessageScrollH);
	});

	return { isClamp, clampButtonVisble, isClampToglle };
}
