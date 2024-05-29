import Student from "./Students.jsx";

function App() {
  return (
    <>
      <Student name="Spongebob" age={22} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Planktin" age={32} isStudent={false} />
      <Student />
    </>
  );
}

export default App;
