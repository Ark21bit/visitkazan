<template>
    <div class="col-span-full h-600px sm:h-800px">
        <swiper-index></swiper-index>
        <div class="lt-lg:hidden h-133px py-3 z-1 bg-#189AB5 rounded-3xl relative">
            <div class="wrapper">
                <form-kit type="date" label="Календарь эксурсий" wrapper-class="flex gap-4 items-center" input-class="w-28px h-28px" label-class="$remove:text-xs $remove:leading-1.4 $remove:text-Inputlabel text-base text-white leading-1.2 font-medium"></form-kit>
            </div>
        </div>
    </div>
    <div class="col-span-full grid-container rounded-3xl bg-white z-1 -mt-6 lg:pt-25 pt-15 contain-paint">
        <div>
            <h2 class="font-Nekst text-6.5 lg:text-4xl text-fblack">Наши услуги</h2>
            <swiper-services class="mt-7.5 lg:mt-12.5" />
        </div>
        <our-programs class="mt-20 lg:mt-37.5" />
        <Feedback class="mt-20 lg:mt-37.5"></Feedback>
        <div class="lt-lg:hidden mt-20 lg:mt-37.5">
            <h2 class="font-Nekst text-6.5 lg:text-4xl text-fblack">Наши Рекомендации</h2>
            <div class="grid grid-cols-3 gap-x-7.5 mt-10">
                <div><img src="/indexSwiper.png" class="w-full h-full object-cover rounded-3.75" alt=""></div>
                <div><img src="/indexSwiper.png" class="w-full h-full object-cover rounded-3.75" alt=""></div>
                <div v-for="n in 4" class="flex flex-col py-6 border-b border-fline2">
                    <p class="bg-tag2/12 rounded-1.25 px-3 py-2 text-sm font-medium leading-1.2 text-tag w-fit">Регулярные экскурсии</p>
                    <h3 class="font-Nekst mt-4 text-5.5 leading-1.2 font-semibold text-fblack">Вечерние огни Казани</h3>
                    <p class="mt-5 max-w-380px text-sm text-black/60  leading-1.4">
                        Казань – спортивная столица России! Любителям побеждать точно понравится тур по местам исторических соревнований и мировых рекордов
                        <span class="text-fblack">(3 дня 2 ночи)</span>
                    </p>
                    <custom-link class="w-fit mt-7.5 text-fblue text-sm leading-1.4 uppercase flex gap-3 items-center" to="/test">
                        УЗНАТЬ БОЛЬШЕ
                        <Icon name="Arrow2" size="21" height="12"></Icon>
                    </custom-link>
                </div>
                <Button class="mt-10 col-span-full w-full">Смотреть все экскурсии</Button>
            </div>
        </div>
        <div class="hidden lg:flex gap-7.5 mt-20 lg:mt-37.5">
            <div class="flex-1 h-530px">
                <img src="/indexSwiper.png" class="w-full h-full rounded-3.75 object-cover" alt="">
            </div>
            <div class="flex-1 flex flex-col gap-5 text-fblack">
                <h2 class="font-Nekst text-4xl leading-1.1">Добро пожаловать в Казань</h2>
                <p class="text-sm leading-1.4 max-w-lg">Город контрастов, совмещающий в себе колорит Мудрого Востока и деловую хватку Рационального Запада. Здесь древнюю архитектуру гармонично сменяют современные строения, здесь дружат две религии, здесь в десяти минутах от шумного центра города
                    раскинула
                    свои объятия прекрасная Волга.</p>
                <Button class="mt-2.5 w-230px">Узнать больше</Button>
                <div class="mt-auto border-y border-fline2 py-5 flex justify-between gap-3">
                    <div class="max-w-170px">
                        <p class="font-medium text-10 leading-1.6">8233 м²</p>
                        <p class="text-fmain text-sm leading-1.4">Коммерческих площадей</p>
                    </div>
                    <div class="max-w-170px">
                        <p class="font-medium text-10 leading-1.6">672</p>
                        <p class="text-fmain text-sm leading-1.4">Дома в 5 коттеджных посёлках</p>
                    </div>
                    <div class="max-w-170px">
                        <p class="font-medium text-10 leading-1.6">2509</p>
                        <p class="text-fmain text-sm leading-1.4">Квартир и жилых комплексах</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>