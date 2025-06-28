import axios from 'axios';

const WP_API_BASE = 'https://tudominio.com/wp-json/wp/v2';

export const getPosts = () => axios.get(`${WP_API_BASE}/posts`).then(res => res.data);

export const getPageBySlug = (slug) =>
  axios.get(`${WP_API_BASE}/pages?slug=${slug}`).then(res => res.data[0]);