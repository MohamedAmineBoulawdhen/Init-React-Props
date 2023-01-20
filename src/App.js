import Profile from "./profile/profile";
function App() {
  const handle = (name) => {
    alert(name);
  };
  return (
    <div className="App">
      <Profile
        fullName="Mohamed Amine Boulawdhen"
        bio="Nothing to mention go ahead *-*."
        profession="Developer"
        handle={handle}
      ></Profile>
    </div>
  );
}

export default App;
