export function PostsShow(props) {
  return (
    <div>
      <h2>Title: {props.post.title}</h2>
      <p>Created At: {props.post.created_at}</p>
    </div>
  );
}
