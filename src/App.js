import CountdownList from "./components/CountdownList";
import { CountdownForm } from "./components/CountdownForm";
import { useState, useEffect } from "react";
import "./styles.css";

function getCountdowns() {
  const countdowns = localStorage.getItem("countdowns");
  return countdowns ? JSON.parse(countdowns) : [];
}

export default function App() {
  const [countdowns, setCountdowns] = useState(getCountdowns());
  const updateCountdowns = (label, date) => {
    setCountdowns([...countdowns, { label, date }]);
  };

  const deleteCountdown = (label) => {
    const updatedCountdown = countdowns.filter(
      (countdown) => countdown.label !== label
    );
    setCountdowns(updatedCountdown);
  };

  useEffect(() => {
    localStorage.setItem("countdowns", JSON.stringify(countdowns));
  }, [countdowns]);

  return (
    <main className="App">
      <CountdownForm addNewCountdown={updateCountdowns} />
      <CountdownList countdowns={countdowns} delCountdowns={deleteCountdown} />
    </main>
  );
}
