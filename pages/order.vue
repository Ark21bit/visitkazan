<template>
    <h1 class="mt-7.5 lg:mt-5 text-2xl lg:text-4xl text-fblack font-Nekst leading-1.1 lg:leading-1.1 lg:text-center">Подтвердите бронирование</h1>
    <p class="mt-5 lg:mt-7.5 text-fblack text-xl lg:text-2xl lg:text-center font-semibold leading-1.2 lg:leading-1.2">Уважаемый(ая) <span class="text-fblue">Иван Иванов</span></p>
    <p class="mt-4 text-fmain text-sm lg:text-center leading-1.4">Благодарим за бронирование в Туристско-информационном центре</p>
    <div class="flex mx-auto w-full flex-col gap-7.5 mt-7.5 rounded-3.75 shadow-[0_4px_23px_0] shadow-black/7 px-4 py-5 lg:p-7.5 max-w-854px">
        <div class="flex flex-col gap-4 lg:gap-3">
            <div class="flex flex-col lg:flex-row gap-2.5 pb-4 lg:pb-3 justify-between text-sm font-medium leading-1.4 text-fblack border-b border-fline2">
                <p class="text-fmain">Название экскурсии</p>
                <p>Остров-град Свияжск, Иннополис и Храм всех религий (с посещением)</p>
            </div>
            <div class="flex flex-col lg:flex-row gap-2.5 pb-4 lg:pb-3 justify-between text-sm font-medium leading-1.4 text-fblack border-b border-fline2">
                <p class="text-fmain">Дата экскурсии</p>
                <p>16.03.2023</p>
            </div>
            <div class="flex flex-col lg:flex-row gap-2.5 pb-4 lg:pb-3 justify-between text-sm font-medium leading-1.4 text-fblack border-b border-fline2">
                <p class="text-fmain">Время начала</p>
                <p>19:00</p>
            </div>
            <div class="flex flex-col lg:flex-row gap-2.5 pb-4 lg:pb-3 justify-between text-sm font-medium leading-1.4 text-fblack border-b border-fline2">
                <p class="text-fmain">Место начала экскурсии</p>
                <p>Московская, 2 (ТД ЦУМ)</p>
            </div>
            <div class="flex flex-col lg:flex-row gap-2.5 pb-4 lg:pb-3 justify-between text-sm font-medium leading-1.4 text-fblack border-b border-fline2">
                <p class="text-fmain">Телефон туриста</p>
                <p>+7 (938) 333-41-41</p>
            </div>
            <div class="flex flex-col lg:flex-row gap-2.5 pb-4 lg:pb-3 justify-between text-sm font-medium leading-1.4 text-fblack border-b border-fline2">
                <p class="text-fmain">Промокод</p>
                <p>-</p>
            </div>
            <div class="flex flex-col lg:flex-row gap-2.5 pb-4 lg:pb-3 justify-between text-sm font-medium leading-1.4 text-fblack border-b border-fline2">
                <p class="text-fmain">Вид оплаты</p>
                <p>Наличными/картой перед экскурсией</p>
            </div>
        </div>
        <div class="flex flex-col gap-5">
            <h2 class="text-lg font-Nekst text-fblack leading-1.2">Услуги</h2>
            <div class="border-t pt-4 lg:pt-0 border-fline2 lg:border-none flex flex-col gap-3">
                <div class="flex flex-col lg:flex-row gap-2.5 pb-4 lg:pb-3 justify-between text-sm font-medium leading-1.4 text-fblack border-b border-fline2">
                    <p class="text-fmain">Взрослые ( 1 )</p>
                    <p>1999 руб.</p>
                </div>
                <div class="flex flex-col lg:flex-row gap-2.5 pb-4 lg:pb-3 justify-between text-sm font-medium leading-1.4 text-fblack border-b border-fline2">
                    <p class="text-fmain">Пенсионеры ( 1 )</p>
                    <p>1999 руб.</p>
                </div>
                <div class="flex flex-col lg:flex-row gap-2.5 pb-4 lg:pb-3 justify-between text-sm font-medium leading-1.4 text-fblack border-b border-fline2">
                    <p class="text-fmain">Аренда оборудования (для лучшей слышимости гида) ( 1 )</p>
                    <p>1999 руб.</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2.5 lg:gap-5">
            <h2 class="text-lg font-Nekst text-fblack leading-1.2">Примечание</h2>
            <p class="text-sm leading-1.4 text-fblack lt-lg:font-medium">Какой-то текст с примечанием на пару предложений</p>
        </div>
        <div class="flex flex-col lg:flex-row gap-4 lg:gap-2.5 lg:py-5 justify-between lg:border-y border-fline2">
<<<<<<< HEAD
            <h2 class="text-lg font-Nekst text-fblack leading-1.2">Итого к оплате</h2>
            <p class="text-base lg:text-lg font-semibold leading-1.2 lg:leading-1.2 text-fblue border-fline2 lt-lg:py-4 lg:border-none border-y">1999 руб.</p>
=======
            <h2 class="text-lg font-Nekst text-fblack leading-[normal]">Итого к оплате</h2>
            <p class="text-base lg:text-lg font-semibold leading-[normal] lg:leading-[normal] text-fblue border-fline2 max-lg:py-4 lg:border-none border-y">1999 руб.</p>
>>>>>>> deef4cf (fix)
        </div>
        <div class="flex flex-col lg:flex-row gap-4 lg:gap-3">
            <Button>Подтверждаю заказ</Button>
            <Button decoration="outline" color="white">Отменить</Button>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'fixed'
})
</script>