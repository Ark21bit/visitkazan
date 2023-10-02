export const getTitlePlacesStart = placesStart => {
    const { generalConfig } = storeToRefs(useGeneralConfigStore());
    for (const item of generalConfig.value.orders.places_start) {
        if (item.id == placesStart) return item?.title;
    }
};
