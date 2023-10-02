<template>
    <table class="grid max-lg:grid-cols-1 rounded-3.75 text-fblack border border-black/5 shadow-[0_4px_43px_0_#0001] overflow-hidden">
        <thead class="lg:contents hidden" v-if="$slots.head">
            <slot name="head"></slot>
        </thead>
        <tbody class="contents">
            <slot></slot>
        </tbody>
    </table>
</template>
