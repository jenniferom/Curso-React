import { useState } from "react";

const NewPost = () => {
  const [title, setTitle] = useState("");
  return (
    <div>
      {title}
      <input
        type="text"
        placeholder="¡¿Qué está pasando?!"
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default NewPost;
