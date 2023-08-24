<template>
    <div class="flex gap-7.5 flex-col lg:flex-row px-5 sm:px-7.5 py-7.5 lg:p-15 lg:bg-[url(/feedbackBg.svg)] bg-[48px_bottom] bg-no-repeat bg-footer rounded-5 lg:rounded-7.5 justify-between">
        <div class="text-white">
            <h2 class="font-Nekst text-7 sm:text-8 lg:text-10.5 leading-1.1">Появились вопросы?</h2>
            <p class="mt-7.5 sm:mt-4 lg:max-w-sm text-sm lg:text-base leading-1.4">Задайте их нам прямо сейчас и мы ответим Вам в самое ближайшее время!</p>
        </div>
        <FormKit type="form" :actions="false" form-class="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 grow lg:max-w-xl">
            <FormKit inner-class="bg-Input $remove:bg-Inputwhite $remove:ring-black/5 ring-Input2" input-class="text-white $remove:text-fblack" validation="required" type="text" label="Ваше имя"></FormKit>
            <FormKit inner-class="bg-Input $remove:bg-Inputwhite $remove:ring-black/5 ring-Input2" input-class="text-white $remove:text-fblack" validation="required" type="text" label="Email"></FormKit>
            <FormKit inner-class="bg-Input $remove:bg-Inputwhite $remove:ring-black/5 ring-Input2" input-class="text-white $remove:text-fblack" outer-class="col-span-full" validation="required" type="text" label="Тема письма"></FormKit>
            <FormKit inner-class="bg-Input $remove:bg-Inputwhite $remove:ring-black/5 ring-Input2" input-class="text-white $remove:text-fblack h-32" outer-class="col-span-full" validation="required" type="textarea" label="Сообщение"></FormKit>
            <FormKit outer-class="col-span-full" label-class="text-white $remove:text-Inputlabel text-xs $remove:text-sm" validation="required" type="checkbox" label="Нажимая кнопку “Отправить”, вы соглашаетесь с Политикой конфиденциальности."></FormKit>
            <FormKit type="submit" input-class="w-full justify-center sm:w-166px" outer-class="mt-1.5"></FormKit>
        </FormKit>
    </div>
</template>

<script setup>

</script>
