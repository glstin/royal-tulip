import GhostContentAPI from "@tryghost/content-api";

import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://krvbsblog.herokuapp.com/',
  key: '21e36497261bc564c576e78443',
  version: "v3"
});

export async function getPosts() {
    return await api.posts
      .browse({
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
  }