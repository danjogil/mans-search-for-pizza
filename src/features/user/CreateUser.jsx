import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  return (
    <div className="flex flex-col items-center justify-center gap-3 px-4">
      <p className="mb-1 text-sm md:text-base">
        Get started by typing in your name:
      </p>
      <input
        type="text"
        placeholder="Your name here..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-5 w-72 rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-orange-400 md:py-3"
      />

      {username && (
        <Button to="/menu" type="primary">
          Start ordering
        </Button>
      )}
    </div>
  );
}

export default CreateUser;