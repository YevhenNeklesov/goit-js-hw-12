


import axios from 'axios';

export async function getImageBySearch({ searchInput, page, perPage }) {
    return (
        await axios.get('https://pixabay.com/api/', {
            params: {
                key: '45240196-18d84f3cf70a1bfd2b8ad66bc',
                q: searchInput,
                page: page,
                per_page: perPage,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
            }
        })
    ).data
}
