import { useNavigate } from "react-router-dom";
import { useEntryContext } from "../hooks/useEntryContext";
import { useAuthContext } from "../hooks/useAuthContext";

// Date fns
// import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { format } from "date-fns"

function EntryDetails({ entry }) {
  const { dispatch } = useEntryContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleEditClick = async () => {
    navigate(`/edit/${entry._id}`);
  };

  const handleDeleteClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(`/api/entry/${entry._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_ENTRY", payload: json });
    }
  };

  return (
    <div className="entry-details">
      <h4>{format(new Date(entry.createdAt), 'MM/dd/yyyy')}</h4>
      <p>
        <strong>Place: </strong>
        {entry.place}
      </p>
      <span
        className="edit material-symbols-outlined"
        onClick={handleEditClick}
      >
        edit
      </span>
      <span
        className="delete material-symbols-outlined"
        onClick={handleDeleteClick}
      >
        delete
      </span>
    </div>
  );
}

export default EntryDetails;
