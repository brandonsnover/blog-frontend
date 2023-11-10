import axios from "axios";

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then((response) => {
      console.log(response);
      event.target.reset();
    });
  };

  return (
    <div id="posts-show">
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" defaultValue={props.post.title} />
        </div>
        <div>
          Body:
          <input name="body" type="text" defaultValue={props.post.body} />
        </div>
        <div>
          Image Url:
          <input name="image" type="text" defaultValue={props.post.image} />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
}
