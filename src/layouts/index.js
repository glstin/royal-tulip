import contact from './contact';
import home from './home';
import page from './page';
// import post from './post';
import { getPosts } from '../lib/posts';

export {
    contact,
    home,
    page,
    post
};

export default {
    contact,
    home,
    page,
    post
};
// exporting content from ghost

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

  const IndexPage = (props) => (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );