export const useTitlePageSetter = (title) => {
    document.title = title.concat(' - ', window.$title);
}