


export const getImageBySearch = (searchInput) => {
    const requestParams = new URLSearchParams({
    key: '45240196-18d84f3cf70a1bfd2b8ad66bc',
    q: searchInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    })

      return fetch(`https://pixabay.com/api/?${requestParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}