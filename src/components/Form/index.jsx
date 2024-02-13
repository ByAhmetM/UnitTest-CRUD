const Form = ({ addUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData.entries());

    addUser(newUser);
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="my-5 ">
      <div>
        <label htmlFor="">İsim: </label>
        <input
          type="text"
          name="name"
          placeholder="ör: Mustafa"
          className="form-control "
        />
      </div>

      <div className="my-4 ">
        <label htmlFor="">Email: </label>
        <input
          type="email"
          name="email"
          placeholder="ör: Mustafa@gmail.com"
          className="form-control "
        />
      </div>

      <div className="my-4 ">
        <label htmlFor="">Yaş: </label>
        <input
          type="number"
          name="age"
          placeholder="ör: 18"
          className="form-control "
        />
      </div>

      <button>Kullanıcı Ekle</button>
    </form>
  );
};

export default Form;
