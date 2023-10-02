export default (paymentTypes) => {
    const { generalConfig } = storeToRefs(useGeneralConfigStore())
    for (const item of generalConfig.value.orders.payment_types) {
        if (item.id == paymentTypes) return item.title
    }
}