const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'db0eae18e6d364aceaeed438c3348464',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}
export default apiConfig;