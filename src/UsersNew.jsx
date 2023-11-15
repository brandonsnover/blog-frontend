export function UsersNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onCreateUser(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <h1>Create New User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input name="name" type="text" className="form-control" id="floatingInput" />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input name="email" className="form-control" id="floatingPassword" />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input name="password" className="form-control" id="floatingPassword" />
          <label htmlFor="floatingInput">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input name="password_confirmation" className="form-control" id="floatingPassword" />
          <label htmlFor="floatingInput">Confirm Password</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Create User
        </button>
      </form>
    </div>
  );
}