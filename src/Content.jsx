import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {
  let posts = [
    {
      id: 1,
      title: "Title1",
      body: "body text 1",
      image: "https://pngfre.com/wp-content/uploads/sun-50-1024x1024.png",
    },
    {
      id: 2,
      title: "Title2",
      body: "body text 2",
      image: "https://i.pinimg.com/originals/66/dc/a4/66dca49beb2de489397541e5fd414e40.png",
    },
    {
      id: 3,
      title: "Title3",
      body: "body text 3",
      image:
        "https://cdn.sanity.io/images/fr9flhkd/main/1eea9ff1fdf31b038469fdf32bc4b0a1396926ef-1440x1440.jpg?fm=webp&q=75&w=1280",
    },
  ];

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
