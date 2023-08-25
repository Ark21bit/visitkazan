<template>
    <NuxtLayout />
    <div id="teleported"></div>
    <div class="fixed z-30 right-[var(--width-content-margin)] bottom-7.5 flex flex-col gap-2 text-white">
        <NuxtLinkLocale to="/test" class="flex items-center justify-center aspect-square p-2.5 bg-#2AABEE hover:bg-#249CDB transition-colors duration-500 ease-linear rounded-full">
            <Icon size="24" name="icon-park-outline:telegram"></Icon>
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/test" class="flex items-center justify-center aspect-square p-2.5 bg-#60D669 hover:bg-#4CC655 transition-colors duration-500 ease-linear rounded-full">
            <Icon size="24" name="ic:outline-whatsapp"></Icon>
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/test" class="flex items-center justify-center aspect-square p-2.5 bg-#2AABEE hover:bg-#0C98B5 transition-colors duration-500 ease-linear rounded-full">
            <Icon size="24" name="Phone"></Icon>
        </NuxtLinkLocale>
    </div>
</template>
