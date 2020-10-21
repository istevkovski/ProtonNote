const wait = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay);
    });
};

export const encrypt = async (data) => {
    await wait(1000);
    return data;
}

export const decrypt = async (data) => {
    await wait(1000);
    return data;
}