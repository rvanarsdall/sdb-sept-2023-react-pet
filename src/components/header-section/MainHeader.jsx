import logo from "../../assets/pet-logo.png";
import "./MainHeader.css";
const MainHeader = (props) => {
  return (
    <>
      <header className="d-flex justify-content-center align-items-center secondary-background">
        <div className="d-flex justify-content-center align-items-center primary-background header-stripe w-100">
          <img src={logo} alt="logo" className="App-logo" />
        </div>
      </header>
    </>
  );
};

export default MainHeader;
