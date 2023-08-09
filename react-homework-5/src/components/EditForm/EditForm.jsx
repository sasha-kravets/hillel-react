import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

const EditForm = (props) => {
  const { editedTodo, onUpdate } = props;

  const [updatedTitle, setUpdatedTitle] = useState(editedTodo.title || "");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...editedTodo, title: updatedTitle });
  };

  return (
    <form onSubmit={handleFormSubmit} className="form">
      <Input value={updatedTitle} onChange={setUpdatedTitle} />
      <Button text="Save" type="submit" />
    </form>
  );
};

export default EditForm;