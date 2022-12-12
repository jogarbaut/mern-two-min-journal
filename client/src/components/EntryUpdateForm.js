import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEntryContext } from "../hooks/useEntryContext";
import { useAuthContext } from "../hooks/useAuthContext";
import CancelButton from "./CancelButton";

const EntryUpdateForm = () => {
  const { dispatch } = useEntryContext();
  const { user } = useAuthContext();
  const { id } = useParams();

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

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntry = async () => {
      const response = await fetch(`/api/entry/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      setPlace(json.place);
      setFeel(json.feel);
      setFeelWhy(json.feelWhy);
      setEnergizedHow(json.energizedHow);
      setGrateful(json.grateful);
      setGratefulWhy(json.gratefulWhy);
      setTopPriority(json.topPriority);
      setTopPriorityWhy(json.topPriorityWhy);
      setTopPriorityAction(json.topPriorityAction);
      setStopWorkingTime(json.stopWorkingTime);
      setStopWorkingTimeAmPm(json.stopWorkingTimeAmPm);
      setBrainDump(json.brainDump);
      setMorningPlan(json.morningPlan);
      setAfternoonPlan(json.afternoonPlan);
      setEveningPlan(json.eveningPlan);
      setSleepTime(json.sleepTime);
      setSleepTimeAmPm(json.sleepTimeAmPm);
      setSeeds(json.seeds);
      setWeeds(json.weeds);
    };
    if (user) {
      fetchEntry();
    }
  }, [dispatch, user, id]);

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

    const response = await fetch(`/api/entry/${id}`, {
      method: "PATCH",
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
      setError(null);
      setEmptyFields([]);
      console.log("Entry updated", json);
      dispatch({ type: "UPDATE_ENTRY", payload: json });
      navigate("/")
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <div className="subtitle">
            <h2>Edit Entry</h2>
          </div>
        <div className="entry-grid">

          <div className="form-group-flex grid-col-span-2">
            <label>Place: </label>
            <input
              type="text"
              onChange={(e) => setPlace(e.target.value)}
              value={place}
              className={emptyFields.includes("place") ? "error" : ""}
            />
          </div>

          <div className="form-group-block grid-col-span-2">
            <label>Today I feel: </label>
            <select
              type="text"
              onChange={(e) => setFeel(e.target.value)}
              value={feel}
              className={
                emptyFields.includes("feel") ? "error" : ""
              }
            >
              <option value="Energized">Energized</option>
              <option value="Good">Good</option>
              <option value="Fine">Fine</option>
              <option value="Meh">Meh</option>
              <option value="Exhausted">Exhausted</option>
            </select>
          </div>

          <div className="form-group-block">
            <label>I feel this way because: </label>
            <input
              type="text"
              onChange={(e) => setFeelWhy(e.target.value)}
              value={feelWhy}
              className={emptyFields.includes("feelWhy") ? "error" : ""}
            />
          </div>

          <div className="form-group-block">
            <label>To feel more energized I can: </label>
            <input
              type="text"
              onChange={(e) => setEnergizedHow(e.target.value)}
              value={energizedHow}
              className={emptyFields.includes("energizedHow") ? "error" : ""}
            />
          </div>

          <div className="form-group-block">
            <label>Something or someone I am grateful for: </label>
            <input
              type="text"
              onChange={(e) => setGrateful(e.target.value)}
              value={grateful}
              className={emptyFields.includes("grateful") ? "error" : ""}
            />
          </div>

          <div className="form-group-block">
            <label>I am grateful because: </label>
            <input
              type="text"
              onChange={(e) => setGratefulWhy(e.target.value)}
              value={gratefulWhy}
              className={emptyFields.includes("gratefulWhy") ? "error" : ""}
            />
          </div>

          <div className="form-group-block">
            <label>Today my top priority is: </label>
            <input
              type="text"
              onChange={(e) => setTopPriority(e.target.value)}
              value={topPriority}
              className={emptyFields.includes("topPriority") ? "error" : ""}
            />
          </div>

          <div className="form-group-block">
            <label>This is my top priority because: </label>
            <input
              type="text"
              onChange={(e) => setTopPriorityWhy(e.target.value)}
              value={topPriorityWhy}
              className={emptyFields.includes("topPriorityWhy") ? "error" : ""}
            />
          </div>

          <div className="form-group-block">
            <label>One action I will take towards this priority: </label>
            <input
              type="text"
              onChange={(e) => setTopPriorityAction(e.target.value)}
              value={topPriorityAction}
              className={
                emptyFields.includes("topPriorityAction") ? "error" : ""
              }
            />
          </div>

          <div className="form-group-flex">
            <label>I will stop working at: </label>
            <input
              type="number"
              onChange={(e) => setStopWorkingTime(e.target.value)}
              value={stopWorkingTime}
              className={emptyFields.includes("stopWorkingTime") ? "error" : ""}
            />
            <select
              type="text"
              onChange={(e) => setStopWorkingTimeAmPm(e.target.value)}
              value={stopWorkingTimeAmPm}
              className={
                emptyFields.includes("stopWorkingTimeAmPm") ? "error" : ""
              }
            >
              <option value="PM">PM</option>
              <option value="AM">AM</option>
            </select>
          </div>

          <div className="form-group-block braindump">
            <label>Brain Dump: </label>
            <textarea
              type="text"
              onChange={(e) => setBrainDump(e.target.value)}
              value={brainDump}
              className={emptyFields.includes("brainDump") ? "error" : ""}
            />
          </div>
          <div className="form-group-block">
            <label>Morning Plan: </label>
            <input
              type="text"
              onChange={(e) => setMorningPlan(e.target.value)}
              value={morningPlan}
              className={emptyFields.includes("morningPlan") ? "error" : ""}
            />
          </div>

          <div className="form-group-block">
            <label>Afternoon Plan: </label>
            <input
              type="text"
              onChange={(e) => setAfternoonPlan(e.target.value)}
              value={afternoonPlan}
              className={emptyFields.includes("afternoonPlan") ? "error" : ""}
            />
          </div>

          <div className="form-group-block">
            <label>Evening Plan: </label>
            <input
              type="text"
              onChange={(e) => setEveningPlan(e.target.value)}
              value={eveningPlan}
              className={emptyFields.includes("eveningPlan") ? "error" : ""}
            />
          </div>

          <div className="form-group-flex">
            <label>I will sleep at: </label>
            <input
              type="number"
              onChange={(e) => setSleepTime(e.target.value)}
              value={sleepTime}
              className={emptyFields.includes("sleepTime") ? "error" : ""}
            />

            <select
              type="text"
              onChange={(e) => setSleepTimeAmPm(e.target.value)}
              value={sleepTimeAmPm}
              className={emptyFields.includes("sleepTimeAmPm") ? "error" : ""}
            >
              <option value="PM">PM</option>
              <option value="AM">AM</option>
            </select>
          </div>

          <div className="form-group-block">
            <label>Seeds: </label>
            <input
              type="text"
              onChange={(e) => setSeeds(e.target.value)}
              value={seeds}
              className={emptyFields.includes("seeds") ? "error" : ""}
            />
          </div>

          <div className="form-group-block">
            <label>Weeds: </label>
            <input
              type="text"
              onChange={(e) => setWeeds(e.target.value)}
              value={weeds}
              className={emptyFields.includes("weeds") ? "error" : ""}
            />
          </div>
        </div>

        <div className="form-group-block grid-col-span-2">
          <button>Save Entry</button>
          <CancelButton />
          {error && <div className="error">{error}</div>}
        </div>
    </form>
  );
};

export default EntryUpdateForm;
