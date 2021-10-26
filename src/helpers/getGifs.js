
 export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&api_key=Y3h0vjouDCSgUbSpWHPtoDPT3R9PEjlk&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gif = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    });
    return gif;
}
