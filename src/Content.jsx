import { useState } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

export function Content() {
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  let posts = [
    {
      id: 1,
      title: "Day",
      body: "daytime blog text",
      image: "https://pngfre.com/wp-content/uploads/sun-50-1024x1024.png",
    },
    {
      id: 2,
      title: "Night",
      body: "nighttime blog text",
      image: "https://i.pinimg.com/originals/66/dc/a4/66dca49beb2de489397541e5fd414e40.png",
    },
    {
      id: 3,
      title: "Cooking",
      body: "cooking blog text",
      image:
        "https://cdn.sanity.io/images/fr9flhkd/main/1eea9ff1fdf31b038469fdf32bc4b0a1396926ef-1440x1440.jpg?fm=webp&q=75&w=1280",
    },
    {
      id: 4,
      title: "Day2",
      body: "daytime2 blog text",
      image: "https://pngfre.com/wp-content/uploads/sun-50-1024x1024.png",
    },
    {
      id: 5,
      title: "Night2",
      body: "nighttime2 blog text",
      image: "https://i.pinimg.com/originals/66/dc/a4/66dca49beb2de489397541e5fd414e40.png",
    },
    {
      id: 6,
      title: "Cooking2",
      body: "cooking2 blog text",
      image:
        "https://cdn.sanity.io/images/fr9flhkd/main/1eea9ff1fdf31b038469fdf32bc4b0a1396926ef-1440x1440.jpg?fm=webp&q=75&w=1280",
    },
  ];

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p>test</p>
      </Modal>
    </div>
  );
}
