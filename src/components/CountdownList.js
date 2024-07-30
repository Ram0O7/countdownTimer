import CountdownTimer from "./CountdownTimer";

const CountdownList = ({ countdowns, delCountdowns }) => {
  const deleteCountdown = (label) => {
    delCountdowns(label);
  };

  return countdowns.length !== 0 ? (
    <ul>
      {countdowns.map((countdown, index) => (
        <li key={index}>
          <CountdownTimer label={countdown.label} targetDate={countdown.date} />
          <button onClick={() => deleteCountdown(countdown.label)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p style={{ fontSize: 15, textAlign: "center", fontWeight: "bold" }}>
      No countdowns to show! Add countdowns to see here.
    </p>
  );
};

export default CountdownList;
