export const getIconUrl = (iconId) => {
    const { generalConfig } = storeToRefs(useGeneralConfigStore())
    for (const item of generalConfig.value.products?.icons ?? []) {
        if (item.id == iconId) return item?.url
    }
}