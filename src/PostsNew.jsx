import axios from "axios";

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle submit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input name="title" type="text" className="form-control" id="floatingInput" />
          <label htmlFor="floatingInput">Title</label>
        </div>
        <div className="form-floating mb-3">
          <input name="body" className="form-control" id="floatingPassword" />
          <label htmlFor="floatingInput">Body</label>
        </div>
        <div className="form-floating mb-3">
          <input name="image" className="form-control" id="floatingPassword" />
          <label htmlFor="floatingInput">Image</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add new post
        </button>
      </form>
    </div>
  );
}

// <div id="posts-new">
//   <h1>New post</h1>
//   <form className="inputfields">
//     <div>
//       <input type="text" placeholder="Title" />
//     </div>
//     <div id="bodyline">
//       <textarea type="text" placeholder="Body" />
//     </div>
//     <div>
//       <input type="text" placeholder="Image" />
//     </div>
//     <button>Add new post</button>
//   </form>
// </div>
