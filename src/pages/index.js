import React from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { getPosts } from '../lib/posts';

/**
 * In next.js we can't use `src/pages/[...slug].js` for root site page `/`.
 * Instead, we import and export the [...slug].js while overriding its getStaticProps.
 */

import Page from './[...slug]';


// export async function getStaticProps({ params }) {
//     console.log('Page [index] getStaticProps, params: ', params);
//     const props = await sourcebitDataClient.getStaticPropsForPageAtPath('/');
//     return { props };
// }

export default Page;

export async function getStaticProps(context) {
    const posts = await getPosts()
  
    if (!posts) {
      return {
        notFound: true,
      }
    }

    const IndexPage = (props) => (
        <ul>
          {props.posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      );