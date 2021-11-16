const instance = axios.create({
    baseURL: process.env.QUARTET_API_URL,
});

export default instance;