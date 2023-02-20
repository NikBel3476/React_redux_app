import React, {FC, useState} from 'react';
import {useGetAllPostsQuery} from "../../store/api/postApi";
import {Post} from "../../types/Post";
import PostCard from "../../components/PostCard/PostCard";
import styles from './PostPage.module.scss';

const PostsPage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const { data: posts, error, isLoading } = useGetAllPostsQuery({ page, limit });

  return (
      <div>
        {isLoading && <h1>Loading...</h1>}
        {Boolean(error) && <h1>Error on posts loading</h1>}
        {posts?.length && posts.map((post: Post) =>
          <PostCard className={styles.postCard} post={post} key={post.id} />
        )}
      </div>
  );
}

export default PostsPage;