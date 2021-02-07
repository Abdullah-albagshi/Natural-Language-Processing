const key = async() => {
    const serverRes = await fetch('/key');
    try {
        const data = await serverRes.json();
        return data.key;
    } catch (error) {
        console.log(error);
    }
};

export { key };