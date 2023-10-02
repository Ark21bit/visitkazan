export const useGeneralConfigStore = defineStore("generalConfig", () => {
    const { data: generalConfig, execute: getGeneralConfig } = useBaseFetch('general/config', {
        key: "generalConfig",
    })

    const structure = computed(() => listToTree(generalConfig?.value.structure?.filter(a => a?.title)))
    const childrenExcursions = computed(() => generalConfig.value?.structure?.filter(a => a.parent_id !== 0 && a?.title))
    return {
        generalConfig,
        getGeneralConfig,
        structure,
        childrenExcursions
    };
});
