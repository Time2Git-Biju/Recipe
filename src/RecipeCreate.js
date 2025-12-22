import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  // Update form fields
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  // On submit → add new recipe
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData(initialFormState); // reset
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </td>

            <td>
              <input
                name="cuisine"
                type="text"
                required
                value={formData.cuisine}
                onChange={handleChange}
              />
            </td>

            <td>
              <input
                name="photo"
                type="url"
                required
                value={formData.photo}
                onChange={handleChange}
              />
            </td>

            <td>
              <textarea
                name="ingredients"
                required
                value={formData.ingredients}
                onChange={handleChange}
              />
            </td>

            <td>
              <textarea
                name="preparation"
                required
                value={formData.preparation}
                onChange={handleChange}
              />
            </td>

            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
