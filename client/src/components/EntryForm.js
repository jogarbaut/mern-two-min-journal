import { useState } from "react";
import { useEntryContext } from "../hooks/useEntryContext";
import { useAuthContext } from "../hooks/useAuthContext";

const EntryForm = () => {
  const { dispatch } = useEntryContext();
  const { user } = useAuthContext();

  const [place, setPlace] = useState("");
  const [feel, setFeel] = useState("");
  const [feelWhy, setFeelWhy] = useState("");
  const [energizedHow, setEnergizedHow] = useState("");
  const [grateful, setGrateful] = useState("");
  const [gratefulWhy, setGratefulWhy] = useState("");
  const [topPriority, setTopPriority] = useState("");
  const [topPriorityWhy, setTopPriorityWhy] = useState("");
  const [topPriorityAction, setTopPriorityAction] = useState("");
  const [stopWorkingTime, setStopWorkingTime] = useState("");
  const [stopWorkingTimeAmPm, setStopWorkingTimeAmPm] = useState("");
  const [brainDump, setBrainDump] = useState("");
  const [morningPlan, setMorningPlan] = useState("");
  const [afternoonPlan, setAfternoonPlan] = useState("");
  const [eveningPlan, setEveningPlan] = useState("");
  const [sleepTime, setSleepTime] = useState("");
  const [sleepTimeAmPm, setSleepTimeAmPm] = useState("");
  const [seeds, setSeeds] = useState("");
  const [weeds, setWeeds] = useState("");

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const entry = { 
      place,
      feel,
      feelWhy,
      energizedHow,
      grateful,
      gratefulWhy,
      topPriority,
      topPriorityWhy,
      topPriorityAction,
      stopWorkingTime,
      stopWorkingTimeAmPm,
      brainDump,
      morningPlan,
      afternoonPlan,
      eveningPlan,
      sleepTime,
      sleepTimeAmPm,
      seeds,
      weeds,
    };
    const response = await fetch("/api/entry", {
      method: "POST",
      body: JSON.stringify(entry),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setPlace("");
      setFeel("");
      setFeelWhy("");
      setEnergizedHow("");
      setGrateful("");
      setGratefulWhy("");
      setTopPriority("");
      setTopPriorityWhy("");
      setTopPriorityAction("");
      setStopWorkingTime("");
      setStopWorkingTimeAmPm("");
      setBrainDump("");
      setMorningPlan("");
      setAfternoonPlan("");
      setEveningPlan("");
      setSleepTime("");
      setSleepTimeAmPm("");
      setSeeds("");
      setWeeds("");
      setError(null);
      setEmptyFields([]);
      console.log("New entry added", json);
      dispatch({ type: "CREATE_ENTRY", payload: json });
    }
  };

  return (
    <>
    <h1>Create a New Entry</h1>
    <form className="create" onSubmit={handleSubmit}>
        <label>Place: </label>
        <input
          type="text"
          onChange={(e) => setPlace(e.target.value)}
          value={place}
          className={emptyFields.includes("place") ? "error" : ""}
        />


      <label>How do you feel? </label>
      <input
        type="text"
        onChange={(e) => setFeel(e.target.value)}
        value={feel}
        className={emptyFields.includes("feel") ? "error" : ""}
      />

      <label>Why do you feel this way? </label>
      <input
        type="text"
        onChange={(e) => setFeelWhy(e.target.value)}
        value={feelWhy}
        className={emptyFields.includes("feelWhy") ? "error" : ""}
      />

      <label>What can make you feel more energized? </label>
      <input
        type="text"
        onChange={(e) => setEnergizedHow(e.target.value)}
        value={energizedHow}
        className={emptyFields.includes("energizedHow") ? "error" : ""}
      />

      <label>What is something you are grateful for? </label>
      <input
        type="text"
        onChange={(e) => setGrateful(e.target.value)}
        value={grateful}
        className={emptyFields.includes("grateful") ? "error" : ""}
      />

      <label>Why are you grateful for this? </label>
      <input
        type="text"
        onChange={(e) => setGratefulWhy(e.target.value)}
        value={gratefulWhy}
        className={emptyFields.includes("gratefulWhy") ? "error" : ""}
      />

      <label>What is your top priority? </label>
      <input
        type="text"
        onChange={(e) => setTopPriority(e.target.value)}
        value={topPriority}
        className={emptyFields.includes("topPriority") ? "error" : ""}
      />

      <label>Why is this your top priority? </label>
      <input
        type="text"
        onChange={(e) => setTopPriorityWhy(e.target.value)}
        value={topPriorityWhy}
        className={emptyFields.includes("topPriorityWhy") ? "error" : ""}
      />

      <label>What is an action you will take to achieve this priority? </label>
      <input
        type="text"
        onChange={(e) => setTopPriorityAction(e.target.value)}
        value={topPriorityAction}
        className={emptyFields.includes("topPriorityAction") ? "error" : ""}
      />

      <label>What time will you stop working? </label>
      <input
        type="number"
        onChange={(e) => setStopWorkingTime(e.target.value)}
        value={stopWorkingTime}
        className={emptyFields.includes("stopWorkingTime") ? "error" : ""}
      />

      <label>AM/PM </label>
      <input
        type="text"
        onChange={(e) => setStopWorkingTimeAmPm(e.target.value)}
        value={stopWorkingTimeAmPm}
        className={emptyFields.includes("stopWorkingTimeAmPm") ? "error" : ""}
      />

      <label>Brain Dump </label>
      <input
        type="text"
        onChange={(e) => setBrainDump(e.target.value)}
        value={brainDump}
        className={emptyFields.includes("brainDump") ? "error" : ""}
      />
      
      <label>Morning Plan </label>
      <input
        type="text"
        onChange={(e) => setMorningPlan(e.target.value)}
        value={morningPlan}
        className={emptyFields.includes("morningPlan") ? "error" : ""}
      />

      <label>Afternoon Plan </label>
      <input
        type="text"
        onChange={(e) => setAfternoonPlan(e.target.value)}
        value={afternoonPlan}
        className={emptyFields.includes("afternoonPlan") ? "error" : ""}
      />

      <label>Evening Plan </label>
      <input
        type="text"
        onChange={(e) => setEveningPlan(e.target.value)}
        value={eveningPlan}
        className={emptyFields.includes("eveningPlan") ? "error" : ""}
      />

      <label>What time will you sleep? </label>
      <input
        type="number"
        onChange={(e) => setSleepTime(e.target.value)}
        value={sleepTime}
        className={emptyFields.includes("sleepTime") ? "error" : ""}
      />

      <label>AM/PM </label>
      <input
        type="text"
        onChange={(e) => setSleepTimeAmPm(e.target.value)}
        value={sleepTimeAmPm}
        className={emptyFields.includes("sleepTimeAmPm") ? "error" : ""}
      />

      <label>Seeds </label>
      <input
        type="text"
        onChange={(e) => setSeeds(e.target.value)}
        value={seeds}
        className={emptyFields.includes("seeds") ? "error" : ""}
      />

      <label>Weeds </label>
      <input
        type="text"
        onChange={(e) => setWeeds(e.target.value)}
        value={weeds}
        className={emptyFields.includes("weeds") ? "error" : ""}
      />

      <button>Add Entry</button>
      {error && <div className="error">{error}</div>}
    </form>
    </>
  );
};

export default EntryForm;
