import React from "react";

const Main = ({ picture, name, email, phone, location, registered, getData }) => {
  return (
    <div className="cardWrapper">
      <div className="cardMain">
        <div className="cardHeader">
            <img src={picture?.large} alt="img"/>
            <h1>{name?.first} {name?.last}</h1>
          
        </div>
        <div className="cardMiddle">
                <h3>{ email }</h3>
                <h3>{ phone }</h3>
                <h3>{ location?.city } { location?.country}</h3>
            </div>
            <div className="cardFooter">
                <p>Age: { registered?.age}</p>
                <p>Date of birth: {new Date(registered?.date).toLocaleDateString()}</p>
            </div>
      </div>
      <button onClick={getData}>Get new user</button>
    </div>
  );
};
export default Main;
