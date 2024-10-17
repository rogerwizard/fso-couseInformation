const Header = ({ course }) => {
  return <h2>{course}</h2>
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part part={part} key={part.id} />)}
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Total = ({ parts }) => {
  const totalExercises = parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  )

  return (
    <p>
      <strong>total of {totalExercises} exercieses</strong>
    </p>
  )
}

const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

export default Course