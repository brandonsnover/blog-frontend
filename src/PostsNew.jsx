export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" placeholder="Title" />
        </div>
        <div id="bodyline">
          Body: <input type="text" placeholder="Body" />
        </div>
        <div>
          Image: <input type="text" placeholder="Image" />
        </div>
        <button>Add new post</button>
      </form>
    </div>
  );
}
