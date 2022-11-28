import { useState } from "react";

function Form() {
  const [form, setForm] = useState({ name: "", surname: "", gender: "female" });
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div>
        <div>Name</div>
        <input
          name="name"
          placeholder="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="surname"
          placeholder="surname"
          value={form.surname}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>Gender</div>
      <select name="gender" value={form.gender} onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <hr />
      <div>
        <strong>Full name:</strong> {form.name} {form.surname}
      </div>

      <div>
        <strong>Gender: </strong>
        {form.gender}
      </div>
    </div>
  );
}

export default Form;
