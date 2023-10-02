export const getTitleCategoriesProduct = productCategories => {
    const { generalConfig } = storeToRefs(useGeneralConfigStore())

    for (const item of generalConfig.value.products?.categories ?? []) {
        if (item.id == productCategories) return item?.title
    }
};
