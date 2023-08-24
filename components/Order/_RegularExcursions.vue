<template>
    <FormKit type="form" form-class="flex flex-col gap-y-7.5" :actions="false">
        <h3 class="font-Nekst text-3xl leading-1.1 text-fblack lt-lg:mt-10">Вечерняя Казань</h3>
        <div class="grid grid-cols-2 gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">Выбор даты и времени</h4>
            <FormKit validation="required" type="text" label="Дата"></FormKit>
            <FormKit validation="required" type="select" label="Время"></FormKit>
        </div>
        <div class="flex flex-col gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">Выберите категорию (осталось 18 билетов!)</h4>
            <FormKit type="group">
                <TicketsTable></TicketsTable>
            </FormKit>
        </div>
        <div class="flex flex-col gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">Промокод</h4>
            <FormKit type="text" label="Введите код"></FormKit>
        </div>
        <div class="flex flex-col gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">Дополнительные услуги</h4>
            <FormKit type="group">
                <TicketsTable></TicketsTable>
            </FormKit>
        </div>
        <div class="flex flex-col gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">Комментарий к заказу</h4>
            <FormKit type="text" label="Введите текст"></FormKit>
        </div>
        <div class="grid grid-cols-2 gap-5">
            <h4 class="font-Nekst col-span-full text-base leading-1.2 text-fblack">Персональные данные (на чье имя заключается договор)</h4>
            <FormKit validation="required" type="text" label="ФИО"></FormKit>
            <FormKit validation="required" type="select" label="Место начала экскурсии"></FormKit>
            <FormKit validation="required" type="text" label="Номер телефона*"></FormKit>
            <FormKit validation="required" type="select" label="Вид оплаты*"></FormKit>
            <FormKit validation="required" type="email" label="Email"></FormKit>
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