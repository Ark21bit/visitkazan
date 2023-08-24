<template>
    <Header></Header>
    <main class="grid-container grow bg-[url(/errorBg.svg)] py-20 bg-[center_bottom] bg-no-repeat items-center h-700px">
        <div class="flex flex-col gap-2.5 items-center text-center">
            <p class="text-fblue text-8xl font-bold">404</p>
            <h1 class="font-Nekst text-4xl lg:text-14.5 leading-1.1 text-fblack">Visit <span class="text-fblue">Kazan</span></h1>
            <p class="max-w-574px text-fblack text-sm leading-1.4">К сожалению, запрашиваемая страница не найдена. Возможно, вы перешли по ссылке, в которой была допущена ошибка, или ресурс был удален. </p>
            <Button class="mt-5 w-full lg:w-fit" @click="handleError">На главную</Button>
        </div>
    </main>
    <Footer />
</template>

<script setup>
const props = defineProps({
    error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>