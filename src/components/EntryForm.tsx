import { useState } from "react";

type Props = {
  onEnter: () => void;
};

export default function EntryForm({ onEnter }: Props) {
  const [name, setName] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("username", name);
    onEnter();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Welcome 👋</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <button>Enter Portfolio</button>
      </form>
    </div>
  );
}
