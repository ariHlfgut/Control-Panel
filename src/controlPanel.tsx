import React from "react";
import "./ControlPanel.css";
import { useNavigate } from "react-router-dom";
import choma from "./assets/choma.png";
import { Clock } from "./clock";

const ControlPanel: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="panel">
      <div className="control-panel">
        <h1>לוח בקרה - אום אני חומה</h1>
        <div className="section">
          <h2>דוחות</h2>
          <button
            className="button-control"
            onClick={() => window.open("http://bzz.to/v/b2dc260", "_blank")}
          >
            {" "}
            <img
              className="icons"
              src="https://liavazran.co.il/wp-content/uploads/2024/04/%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA-%D7%A0%D7%95%D7%A9%D7%90-%D7%9E%D7%90%D7%9E%D7%A8%D7%99%D7%9D.jpg"
              alt=""
            />
          </button>
          <button
            className="button-control"
            onClick={() => window.open("http://bzz.to/v/58fe110", "_blank")}
          >
            <img
              className="icons"
              src="https://trafficlawyer.co.il/wp-content/uploads/2020/03/httpstrafficlawyer.co_.il-%D7%9C%D7%A7%D7%98-%D7%9B%D7%AA%D7%91%D7%95%D7%AA-%D7%9E%D7%A9%D7%A4%D7%98%D7%99%D7%95%D7%AA.jpg"
              alt="a"
            />
          </button>
        </div>
        <div className="section">
          <h2>הדרכות</h2>
          <button
            className="button-control"
            onClick={() => navigate("/taskboard")}
          >
            <img
              className="icons"
              src="https://d-bur.com/wp-content/uploads/2016/05/%D7%90%D7%99%D7%99%D7%A7%D7%95%D7%9F-%D7%94%D7%93%D7%A8%D7%9B%D7%95%D7%AA.png"
              alt=""
            />
          </button>
        </div>
        <div className="section">
          <h2>עזרים</h2>
          <button
            className="button-control"
            onClick={() =>
              window.open(
                "https://cloud.phonecall.co/pbx/wallboard.php?id=2148&code=yakov&key=t3w4yPdDp5MsB5T9",
                "_blank"
              )
            }
          >
            <img
              className="icons"
              src="https://cloud.phonecall.co/pbx/images/gis-logo.jpg"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="more">
        <div className="clock">
          <Clock />
        </div>

        <div className="notifications">
          <h2>הודעות</h2>
          <div className="p">
            {" "}
            <p>שבוע מבורך וקיץ בריא </p>
            <p>חופשה נעימה לחופשים</p>
            <br />
            <p> נא לשים לב להדרכה !</p>
            <br />
          </div>
        </div>
        <img className="icon-footer" src={choma} alt="" />
      </div>
    </div>
  );
};

export default ControlPanel;
