<template>
    <Button @click="openOrder(OrderRegularExcursions)">регулярные экскурсии</Button>
    <Button @click="openOrder(OrderIndividualExcursions)">индивидуальные экскурсии</Button>
    <Button @click="openOrder(OrderGroupTours)">груповые туры</Button>
    <Button @click="openOrder(OrderCombinedTours)">сборные туры</Button>
    <!-- <Modal @close="closeModal" :is-show="isModalShow">
        <component :is="order"></component>
    </Modal> -->
    <Modal @close="closeModal" :is-show="isModalShow" size="xs">
        <div class="flex flex-col items-center mt-4">
            <h2 class="text-xl lg:text-2xl font-Nekst leading-1.2 lg:leading-1.2 text-fblack">Спасибо</h2>
            <p class="mt-4 lg:mt-2.5 text-fmain text-sm leading-1.2 text-center">Ваша заявка успешно отправлена</p>
            <Button class="mt-7.5" tag="RouterLink" to="/">На главную</Button>
        </div>
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