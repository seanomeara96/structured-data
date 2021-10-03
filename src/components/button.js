export default function Button({ children, clickHandler }) {
  return (
    <i onClick={clickHandler} className="ui button">
      {children}
    </i>
  );
}
