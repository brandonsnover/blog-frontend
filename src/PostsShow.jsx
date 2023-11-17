import { Link } from "react-router-dom";
export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div id="posts-show">
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input required name="title" type="text" defaultValue={props.post.title} />
        </div>
        <div>
          Body:
          <input required name="body" type="text" defaultValue={props.post.body} />
        </div>
        <div>
          Image Url:
          <input required name="image" type="text" defaultValue={props.post.image} />
        </div>
        <button data-bs-dismiss="modal" type="submit">
          Update Post
        </button>
      </form>
      <button data-bs-dismiss="modal" onClick={handleClick}>
        Delete Post
      </button>
      <Link to={`/posts/${props.post.id}`}>Go to Page</Link>
    </div>
  );
}
