import axios from "axios";

const WP_API_BASE = "https://tudominio.com/wp-json/wp/v2";

// Mock data for demo purposes
const mockPages = {
  inicio: {
    title: { rendered: "Welcome to Our Platform" },
    content: {
      rendered:
        "<p>Experience the future of web development with our cutting-edge platform.</p>",
    },
  },
};

export const getPosts = async () => {
  try {
    const response = await axios.get(`${WP_API_BASE}/posts`);
    return response.data;
  } catch (error) {
    // Return empty array as fallback
    return [];
  }
};

export const getPageBySlug = async (slug) => {
  try {
    const response = await axios.get(`${WP_API_BASE}/pages?slug=${slug}`);
    return response.data[0];
  } catch (error) {
    // Return mock data as fallback
    return mockPages[slug] || null;
  }
};
