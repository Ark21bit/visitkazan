<template>
    <FormKit type="form" form-class="flex flex-col gap-y-7.5" :actions="false">
        <h3 class="font-Nekst text-3xl leading-1.1 text-fblack lt-lg:mt-10">Остров-град Свияжск</h3>
        <div class="grid grid-cols-2 gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">Выбор даты и времени</h4>
            <FormKit validation="required" type="text" label="Дата"></FormKit>
        </div>
        <div class="flex flex-col gap-5">
<<<<<<< HEAD
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">Выбор отеля</h4>
            <FormKit type="select" label="Выберите отель"></FormKit>
        </div>
        <div class="flex flex-col gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">Количество людей</h4>
            <FormKit type="number" label="Введите число"></FormKit>
        </div>
        <div class="flex flex-col gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">Комментарий к заказу</h4>
=======
            <h4 class="font-Nekst col-span-full text-base leading-[1.2] text-fblack">Выбор отеля</h4>
            <FormKit type="select" label="Выберите отель"></FormKit>
        </div>
        <div class="flex flex-col gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-[1.2] text-fblack">Количество людей</h4>
            <FormKit type="number" label="Введите число"></FormKit>
        </div>
        <div class="flex flex-col gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-[1.2] text-fblack">Комментарий к заказу</h4>
>>>>>>> deef4cf (fix)
            <FormKit type="text" label="Введите текст"></FormKit>
        </div>
        <div class="grid grid-cols-2 gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">Персональные данные (на чье имя заключается договор)</h4>
            <FormKit validation="required" type="text" label="ФИО"></FormKit>
            <FormKit validation="required" type="email" label="Email"></FormKit>
            <FormKit validation="required" type="text" label="Номер телефона*"></FormKit>
        </div>
        <div class="flex flex-col gap-4 lg:gap-5">
            <FormKit validation="accepted" type="checkbox" label="Подтверждаю свое согласие с Порядком предоставления экскурсионных услуг"></FormKit>
            <FormKit validation="accepted" type="checkbox" label="Даю согласие на обработку и хранение своих персональных данных в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных»."></FormKit>
        </div>
        <FormKit type="submit" input-class="w-full justify-center" outer-class="lg:mt-5">Забронировать экскурсию</FormKit>
    </FormKit>
</template>

<script setup>

</script>