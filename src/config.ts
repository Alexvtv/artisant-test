export const initialCardsQty = (() => {
    if (window.innerWidth > 1400) {
        return 12;
    }
    if (window.innerWidth > 1100) {
        return 9;
    }
    if (window.innerWidth > 696) {
        return 6;
    }
    return 3;
})();
export const additionalCardsQty = (() => {
    if (window.innerWidth > 1400) {
        return 8;
    }
    if (window.innerWidth > 1100) {
        return 6;
    }
    if (window.innerWidth > 696) {
        return 4;
    }
    return 3;
})();
