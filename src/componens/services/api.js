import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const keyApi = '17937220-71b54ffff2854ec69c40144bd';

export const fetchGallery = ({ query = '', page = 1 }) => {
  return axios
    .get(
      `/?q=${query}&page=${page}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(data => data.data.hits);
};
