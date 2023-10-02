export const getTitleInfoPrices = (InfoPrices) => {
    const { generalConfig } = storeToRefs(useGeneralConfigStore())
    for (const item of generalConfig.value.orders.price_types) {
        if (item.id == InfoPrices) return item?.title;
    }
};
