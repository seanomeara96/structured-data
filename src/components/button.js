export default function Button({ mod = "", children, clickHandler }) {
  return (
    <i onClick={clickHandler} className={`${mod} ui button`}>
      {children}
    </i>
  );
}
