const Header = ({ course }) => <h2>{course}</h2>;

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    ))}
  </div>
);

const Total = ({ sum }) => <h3>Number of exercises {sum}</h3>;

const Course = ({ course }) => {
  const { name, parts } = course;
  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total
        sum={parts.reduce((prev, current) => prev + current.exercises, 0)}
      />
    </div>
  );
};

export default Course;
