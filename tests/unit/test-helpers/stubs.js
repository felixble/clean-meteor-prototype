export const immediatelyResolvedPromise = (result = undefined) => {
    return new Promise(resolve => {
        resolve(result);
    });
};