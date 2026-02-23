function Progress({ index, numQues, points, maxPossiblePoints,answer }) {
  return (
    <header className="progress">
<progress max={numQues} value={index + Number(answer !== null)} />      <p>
        Question <strong>{index + 1}/</strong>
        {numQues}
      </p>
      <p>
        {" "}
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
