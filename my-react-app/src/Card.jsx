import profilePic from "./assets/gibi.jpg";

function Card() {
  return (
    <div className="card">
      <img className="picture" src={profilePic} alt="profile-picture"></img>
      <h2 className="card-title">Gibbi</h2>
      <p className="card-text">Corba mercimek cocurkec amk yaa</p>
    </div>
  );
}

export default Card;
