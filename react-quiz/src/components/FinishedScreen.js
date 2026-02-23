function FinishedScreen({ maxPossiblePoints, points ,highscore}) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
    <p className="result">
      You score <strong>{points}</strong> out of {maxPossiblePoints}(
      {Math.ceil(percentage)})
    </p>
    <p className="highscore"> (HighScore {highscore}  Points)</p>
    </>
    
  );
}

export default FinishedScreen;
