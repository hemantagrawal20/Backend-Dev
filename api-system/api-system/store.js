// store.js — In-memory data store + external fetch

const axios = require("axios");

const store = {
  posts: [],
  users: [],
  lastFetched: null,
};

async function fetchExternalData() {
  console.log("[STORE] Fetching external API data...");

  const [postsRes, usersRes] = await Promise.all([
    axios.get("https://jsonplaceholder.typicode.com/posts"),
    axios.get("https://jsonplaceholder.typicode.com/users"),
  ]);

  store.posts = postsRes.data;
  store.users = usersRes.data;
  store.lastFetched = new Date().toISOString();

  console.log(`[STORE] Cached ${store.posts.length} posts, ${store.users.length} users`);
}

module.exports = { store, fetchExternalData };
