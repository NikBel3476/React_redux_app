import React, {FC} from 'react';
import {useGetAllPostsQuery} from "../../store/reducers/postApi";
import {Post} from "../../types/Post";
import PostCard from "../../components/PostCard/PostCard";
import styles from './PostPage.module.scss';

const PostsPage: FC = () => {
  const { data: posts, error, isLoading } = useGetAllPostsQuery({ page: 1, limit: 10 });

  return (
      <div>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error on posts loading</h1>}
        {posts && posts.map((post: Post) =>
          <PostCard className={styles.post_card} post={post} key={post.id} />
        )}
      </div>
  );
}

export default PostsPage;
