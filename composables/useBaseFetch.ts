import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export function useBaseFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
    const config = useRuntimeConfig();
    const { $i18n } = useNuxtApp()

    const defaults: UseFetchOptions<T> = {
        baseURL: <string>`${config.public.APIbaseURL}/api/` ?? "/",
        headers: {
            Locale: $i18n.locale
        }
    };

    const params = defu(options, defaults);

    return useFetch(url, params);
}
