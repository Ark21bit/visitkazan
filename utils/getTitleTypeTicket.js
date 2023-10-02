export const getTitleTypeTicket = typeTicket => {
    const { generalConfig } = storeToRefs(useGeneralConfigStore());
    for (const item of generalConfig.value?.orders.ticket_types) {
        if (item.id == typeTicket) return item?.title;
    }
};
