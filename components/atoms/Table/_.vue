<template>
    <table class="grid grid-cols-1 rounded-3.75 text-fblack border border-black/5 shadow-[0_4px_43px_0_rgba(0,0,0,.05)] overflow-hidden">
        <thead class="lg:contents hidden" v-if="$slots.head">
            <slot name="head"></slot>
        </thead>
        <tbody class="contents">
            <slot></slot>
        </tbody>
    </table>
</template>
