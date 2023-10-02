export const phoneLinkReplace = phone => {
    return `tel:${phone?.replace(/\s/g, '') ?? ''}`
};
