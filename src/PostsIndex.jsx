import { useState } from "react";
import { Link } from "react-router-dom";
export function PostsIndex(props) {
  console.log(props);

  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="posts-index" className="container text-center">
      <h1>All Posts</h1>
      Search filter:{" "}
      <input list="titles" type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      <datalist id="titles">
        {searchFilter === "" ? (
          <option></option>
        ) : (
          props.posts.map((post) => <option key={post.id}>{post.title}</option>)
        )}
      </datalist>
      <div className="row row-cols-3" style={{ width: "60rem" }}>
        {props.posts
          .filter(
            (post) =>
              post.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
              post.body.toLowerCase().includes(searchFilter.toLowerCase())
          )
          .map((post) => (
            <div key={post.id} className="col">
              <div className="card justify-content-center">
                <img src={post.image} className="card-img-top" alt="..." />
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => props.onShowPost(post)}
                >
                  More info
                </button>
                <Link to={`/posts/${post.id}`}>Go to Page</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

// <div id="posts-index">
//   <h1>All posts</h1>
//   <div className="cards">
//     {props.posts.map((post) => (
//       <div key={post.id} className="card">
//         <h2>{post.title}</h2>
//         <p>{post.body}</p>
//         <img src={post.image} alt="image" />
//         <div>
//           <button onClick={() => props.onShowPost(post)}>More Info</button>
//         </div>
//       </div>
//     ))}
//   </div>
//   <p>
//     <button onClick={props.onShowPost}>Another Button</button>
//   </p>
// </div>
