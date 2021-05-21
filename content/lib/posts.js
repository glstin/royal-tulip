import GhostContentAPI from "@tryghost/content-api";

import GhostContentAPI from "@tryghost/content-api";
import { getPosts } from '../lib/posts';
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

  export async function getStaticProps(context) {
    const posts = await getPosts()
  
    if (!posts) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { posts }
    }
  }

  export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug
      })
      .catch(err => {
        console.error(err);
      });
  }
