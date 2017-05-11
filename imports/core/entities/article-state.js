export const ArticleState = {
    AVAILABLE: 'available',
    REQUIRED: 'required',

    toggle(state) {
        if (state === this.AVAILABLE) {
            return this.REQUIRED;
        }
        return this.AVAILABLE;
    }
};