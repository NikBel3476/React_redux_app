import React, {FC} from 'react';
import {postApi, useGetAllPostsQuery} from "../store/reducers/postApi";
import {Post} from "../types/Post";

const PostsPage: FC = () => {
  const { data: posts, error, isLoading } = postApi.useGetAllPostsQuery({ page: 1, limit: 20});

  return (
      <div>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error on posts loading</h1>}
        {posts && posts.map((post: Post) =>
          <div
            key={post.id}
            style={{
              marginTop: '20px',
              border: '1px solid black',
              padding: '5px'
            }}
          >
            {post.body}
          </div>
        )}
      </div>
  );
};

export default PostsPage;
