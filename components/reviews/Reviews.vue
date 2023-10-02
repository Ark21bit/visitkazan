<template>
    <div class="flex flex-col sm:max-lg:gap-5 gap-7.5">
        <h2 class="font-Nekst text-fblack text-xl lg:text-2xl leading-1.1 lg:leading-1.1">{{ generalConfig?.static_info?.global_words?.reviews }}</h2>
        <SwiperReviews @readCompletely="openModal" v-if="reviews?.length > 0" :reviews="reviews" :title="title" />
        <ModalReviews directive="show" :productId="productId" :productTitle="title" #default="{ openModal }">
            <Button @click="openModal" class="w-240px sm:max-lg:mt-2.5 max-lg:w-full">{{ generalConfig?.static_info?.global_words?.add_review }}</Button>
        </ModalReviews>
        <ModalReviewFull  @close="closeModal" :isShow="isModalShow"/>
    </div>
</template>

<script setup>
defineProps({
    reviews: Array,
    title: String,
    productId: Number,
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())

const { closeModal, isModalShow, openModal } = useModal()
</script>
