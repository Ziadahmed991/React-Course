// Header Component
const Header = (props) => {
  return <h1>{props.title}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part_num} {props.exercises_num}
    </p>
  );
};

// Content Component
const Content = (props) => {
  return (
    <div>
      <Part part_num={props.part1} exercises_num={props.exercises1} />
      <Part part_num={props.part2} exercises_num={props.exercises2} />
      <Part part_num={props.part3} exercises_num={props.exercises3} />
    </div>
  );
};

// Total Component
const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

// Main App
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header title={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </>
  );
};

// To export App to main for rendering
export default App;
