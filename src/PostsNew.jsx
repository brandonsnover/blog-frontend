export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form className="inputfields">
        <div>
          <input type="text" placeholder="Title" />
        </div>
        <div id="bodyline">
          <textarea type="text" placeholder="Body" />
        </div>
        <div>
          <input type="text" placeholder="Image" />
        </div>
        <button>Add new post</button>
      </form>
    </div>
  );
}
