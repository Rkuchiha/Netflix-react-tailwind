const key = '387a43cf094599d581f368d0796ea76f'
const Url = 'https://api.themoviedb.org/3/movie/'
const requests ={
    RequestMovies:`${Url}now_playing?api_key=${key}&language=en-US&page=1`,
    RequestPopular:`${Url}popular?api_key=${key}&language=en-US&page=1`,
    RequestTopRated:`${Url}top_rated?api_key=${key}&language=en-US`,
    RequestUpcoming:`${Url}upcoming?api_key=${key}&language=en-US&page=1`,
    RequestNowPlaying:`${Url}?api_key=${key}&language=en-US&page=1`
};

export default requests 