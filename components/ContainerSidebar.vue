<template>
    <div class="grid grid-cols-1 lg:grid-cols-[308px_calc(100%-338px)] gap-7.5">
        <div class="relative">
            <Sidebar class="sticky top-5"></Sidebar>
        </div>
        <slot />
    </div>
</template>
