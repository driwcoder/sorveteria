import Banner from "./Banner";
import Presentation from "./Presentation";
import "./style.css";

export default function Main() {
  return (
    <div className="Main">
      <div className="Main-content">
        <Banner />
        <Presentation />
      </div>
    </div>
  );
}
