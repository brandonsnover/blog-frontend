import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";
// import { UsersNew } from "./UsersNew";
import { Signup } from "./Signup";
import { Routes, Route } from "react-router-dom";
import { PostsShowPage } from "./PostsShowPage";

export function Content() {
  const [posts, setPosts] = useState([]);
  // const [users, setUsers] = useState([]);

  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      setCurrentPost(response.data);
      setIsPostsShowVisible(false);
    });
  };

  const handleDestroyPost = (post) => {
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      console.log(response);
      setPosts(posts.filter((p) => p.id !== post.id));
      handleClose();
    });
  };

  // const handleCreateUser = (params) => {
  //   axios.post("http://localhost:3000/users.json", params).then((response) => {
  //     setUsers([...users, response.data]);
  //   });
  // };

  console.log("currentPost =", currentPost);

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<PostsIndex posts={posts} onShowPost={handleShowPost} />} />
        <Route path="/posts/new" element={<PostsNew onCreatePost={handleCreatePost} />} />
        <Route path="/posts/:id" element={<PostsShowPage />} />
      </Routes>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>
    </div>
  );
}
