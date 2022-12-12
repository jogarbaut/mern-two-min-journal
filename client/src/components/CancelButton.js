import { useNavigate } from "react-router-dom";

const CancelButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button className="cancel-button" onClick={handleClick}>
      Cancel
    </button>
  );
};

export default CancelButton;
