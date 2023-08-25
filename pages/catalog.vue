<template>
    <div class="flex lt-sm:flex-col gap-6 justify-between">
        <h1 class="text-6.5 lg:text-4xl leading-1.1 text-fblack font-Nekst">Сборные экскурсии</h1>
        <FormKit type="date" label="Выберите дату" wrapper-class="flex gap-5 items-center" label-class="$remove:text-xs $remove:text-Inputlabel text-sm text-fblack"
            inner-class="w-162px focus-within:ring-fblack $remove:focus-within:ring-fline $remove:bg-Inputwhite bg-transparent $remove:ring-black/5 ring-fline"></FormKit>
    </div>
    <ContainerSidebar class="mt-7.5 lg:mt-12.5 lt-lg:gap-5 lg:bg-[url(/catalogBg.svg)] bg-no-repeat bg-[position:bottom_left] pb-36 -mb-36">
        <div class="grid grid-cols-1 sm:grid-cols-2 1200px:grid-cols-3 gap-7.5">
            <CardCatalog v-for="n in 17" @order="openOrder(OrderGroupTours)"></CardCatalog>
        </div>
    </ContainerSidebar>
    <Modal @close="closeModal" :is-show="isModalShow">
        <component :is="order"></component>
    </Modal>
</template>

<script setup>
definePageMeta({
    layout: 'fixed'
})
const order = shallowRef(null)

const OrderGroupTours = resolveComponent('OrderGroupTours')
const OrderIndividualExcursions = resolveComponent('OrderIndividualExcursions')
const OrderCombinedTours = resolveComponent('OrderCombinedTours')
const OrderRegularExcursions = resolveComponent('OrderRegularExcursions')

const { closeModal, isModalShow, openModal } = useModal()
const openOrder = (value) => {
    order.value = value
    openModal()
}
</script>