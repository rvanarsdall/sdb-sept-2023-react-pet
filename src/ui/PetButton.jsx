// rsfc
import "./PetButton.css";
function PetButton(props) {
  return (
    <>
      <div className="pet-button" onClick={props.onClick}>
        {props.title}
      </div>
    </>
  );
}

export default PetButton;
