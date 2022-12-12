import { useEffect } from "react";
import { useEntryContext } from "../hooks/useEntryContext";
import { useAuthContext } from "../hooks/useAuthContext";

// Components
import EntryDetails from "../components/EntryDetails";
import EntryForm from "../components/EntryForm";
import BarMeter from "../components/BarMeter";

const Home = () => {
  const { entries, dispatch } = useEntryContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch("/api/entry", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_ENTRIES", payload: json });
      }
    };
    if (user) {
      fetchEntries();
    }
  }, [dispatch, user]);

  return (
    <>
      <BarMeter />
      <div className="home">
        <div className="entries">
          {entries &&
            entries.map((entry) => (
              <EntryDetails key={entry._id} entry={entry} />
            ))}
        </div>
        <EntryForm />

      </div>
    </>
  );
};

export default Home;
