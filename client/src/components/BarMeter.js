import { useEffect, useState } from "react";

const BarMeter = (props) => {
  const { lastEntry } = props;

  const [barPercentage, setBarPercentage] = useState(0);

  const determineFeelScore = (feelResponse) => {
    let feelScore;
    if (feelResponse) {
      switch (feelResponse) {
        case "Exhausted":
          feelScore = 0;
          break;
        case "Meh":
          feelScore = 1;
          break;
        case "Fine":
          feelScore = 2;
          break;
        case "Good":
          feelScore = 3;
          break;
        case "Energized":
          feelScore = 4;
          break;
        default:
          feelScore = 0;
      }
      return (feelScore / 4) * 100;
    }
    return null;
  };

  useEffect(() => {
    if (lastEntry) {
      setBarPercentage(determineFeelScore(lastEntry.feel));
    }
  }, [lastEntry]);

  return (
    <div className="bar-meter-container">
      <div className="subtitle">
        {lastEntry && <h2>How You're Doing in Your Latest Entry</h2>}
        {!lastEntry && (
          <h3>Indicator will move after your first journal entry</h3>
        )}
      </div>
      <div className="bar-meter-flex-container">
        <div className="bar-meter">
          <div className="bar-value">
            <div
              className="bar-indicator"
              style={{ left: `${barPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="bar-labels-container">
        <div>Exhausted</div>
        <div>Meh</div>
        <div>Fine</div>
        <div>Good</div>
        <div>Energized</div>
      </div>
    </div>
  );
};

export default BarMeter;
