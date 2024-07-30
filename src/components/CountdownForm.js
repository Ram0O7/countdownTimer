import { useState } from "react";

export function CountdownForm({ addNewCountdown }) {
  const [label, setLabel] = useState("");
  const [date, setDate] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addNewCountdown(label, date);
    setLabel("");
    setDate("");
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <form onSubmit={handleFormSubmit} className="countdown_form style_basic">
      <p>
        <input
          type="text"
          value={label}
          placeholder="add label"
          onChange={(e) => setLabel(e.target.value)}
          required
        />
      </p>
      <p>
        <input
          type="datetime-local"
          value={date}
          placeholder="date"
          onChange={(e) => setDate(e.target.value)}
          min={getCurrentDateTime()}
          required
        />
      </p>
      <button type="submit">Add Countdown</button>
    </form>
  );
}
