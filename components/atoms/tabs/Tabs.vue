<template>
    <div>
        <div class="flex lt-1340px:flex-col">
            <ul class='tabs-header text-sm font-medium text-fblack px-2.5 py-2 flex lt-sm:flex-col lg:gap-2 justify-between rounded-1.25 shadow-[0_4px_23px_0_rgba(0,0,0,.07)]'>
                <li v-for="tab in tabs" :key='tab.index' class="flex items-center px-10 py-2.5 rounded-1.25 justify-center lt-sm:w-full text-center cursor-pointer transition-colors duration-500 ease-linear hover:bg-tableTh hover:text-white"
                    :class="{ 'bg-tableTh text-white': tab.props.name == activeTab }" @click='updateActiveTab(tab.props.name)'>
                    {{ tab.props.title }}
                </li>
            </ul>
            <slot name="buttonHeader" />
        </div>
        <slot />
    </div>
</template>
  
<script setup>
const slots = useSlots()

let tabs = ref([...slots.default().filter(child => child.type.__name === "Tab")])

const activeTab = ref(null);

function updateActiveTab(name) {
    activeTab.value = name
}

provide('activeTab', activeTab)

onMounted(() => {
    if (tabs.value.length > 0) updateActiveTab(tabs.value[0]?.props.name)
})
</script>


 