export function PostsShow(props) {
  return (
    <div id="posts-show">
      <h2>Title: {props.post.title}</h2>
      <p>Created At: {props.post.created_at}</p>
    </div>
  );
}
