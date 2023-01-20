import PropTypes from "prop-types";
let myStyle = { fontSize: 20, textAlign: "center", color: "Red" };
const Profile = (props) => {
  const { fullName, bio, profession, handle, age } = props;

  return (
    <div>
      <div>{props.children}</div>
      <h1 style={myStyle}>My name is {fullName}</h1>
      <p>Bio: {bio}</p>
      <p>Profession: {profession}</p>
      <p>Age: {age}</p>
      <button onClick={() => handle(fullName)}>See Name</button>
    </div>
  );
};
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handle: PropTypes.func,
};
Profile.defaultProps = {
  fullName: "Mohamed Amine",
  age: 25,
};
export default Profile;
