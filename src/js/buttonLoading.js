const handler = (button, method) => button?.classList[method]('loading');

export const setLoading = button => handler(button, 'add');

export const removeLoading = button => handler(button, 'remove');

export default {
    removeLoading,
    setLoading
};