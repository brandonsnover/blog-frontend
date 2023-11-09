export function PostsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index" className="container text-center">
      <h1>All Posts</h1>
      <div className="row row-cols-3" style={{ width: "60rem" }}>
        {props.posts.map((post) => (
          <div key={post.id} className="col">
            <div className="card">
              <img src={post.image} className="card-img-top" alt="..." />
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <a className="btn btn-primary" onClick={() => props.onShowPost(post)}>
                More info
              </a>
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
