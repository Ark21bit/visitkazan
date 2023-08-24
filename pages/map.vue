<template>
    <div class="flex gap-5 flex-wrap">
        <Button tag="RouterLink" to="/about">о нас</Button>
        <Button tag="RouterLink" to="/catalog">каталог</Button>
        <Button tag="RouterLink" to="/contacts">контакты</Button>
        <Button tag="RouterLink" to="/form">модалка заказа</Button>
        <Button tag="RouterLink" to="/hotels">отель</Button>
        <Button tag="RouterLink" to="/">главная</Button>
        <Button tag="RouterLink" to="/regularE">ркгулярные экскурсии</Button>
        <Button tag="RouterLink" to="/individualE">индивидуальные экскурсии</Button>
        <Button tag="RouterLink" to="/tours">туры</Button>
        <Button tag="RouterLink" to="/additionals">доп услуги</Button>
        <Button tag="RouterLink" to="/order">форма заказа</Button>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'fixed'
})
</script>