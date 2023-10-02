export default defineNuxtRouteMiddleware(async (to, from) => {
    const { getGeneralConfig } = useGeneralConfigStore()
    const { generalConfig } = storeToRefs(useGeneralConfigStore())

    const getUrl = (url) => {
        return url.substring(0, 1) == '/' ? url : `/${url}`
    }

    if (process.server) {
        await getGeneralConfig()
    }
    for (const redirect of generalConfig?.value?.redirect_page ?? []) {
        if (to.path === getUrl(redirect?.old_slug)) {
            return navigateTo(getUrl(redirect?.new_slug), { redirectCode: redirect?.type });
        }
    }
});