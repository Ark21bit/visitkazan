<template>
    <Table class="lg:grid-cols-[1fr_repeat(2,minmax(auto,140px))]">
        <template #head>
            <TableTr>
                <TableTh>
                    {{ generalConfig?.static_info?.global_words?.type_ticket }}
                </TableTh>
                <TableTh>
                    {{ generalConfig?.static_info?.global_words?.price }}
                </TableTh>
                <TableTh class="justify-end">
                    {{ generalConfig?.static_info?.global_words?.count }}
                </TableTh>
            </TableTr>
        </template>
        <TableTr v-for="ticket in tickets">
            <FormKit type="group">
                <TableTd :data-label="generalConfig?.static_info?.global_words?.type_ticket">
                    <CustomLink :to="ticket?.addition_info?.slug">{{ ticket?.addition_info?.lang_info?.title }}</CustomLink>
                    <FormKit type="meta" :value="ticket?.addition_info?.id" name="id"></FormKit>
                    <FormKit type="meta" :value="ticket?.addition_info?.lang_info?.title" name="title"></FormKit>
                </TableTd>
                <TableTd :data-label="generalConfig?.static_info?.global_words?.price">
                    <FormKit type="meta" :value="ticket?.price" name="price"></FormKit>
                    {{ ticket?.price }} ₽
                </TableTd>
                <TableTd :data-label="generalConfig?.static_info?.global_words?.count" class="justify-end">
                    <FormKit type="counter" number name="count"></FormKit>
                </TableTd>
            </FormKit>
        </TableTr>
    </Table>
</template>
<script setup>
defineProps({
    tickets: Array
})

const { generalConfig } = storeToRefs(useGeneralConfigStore())
</script>