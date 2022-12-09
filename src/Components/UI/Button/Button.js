import classes from "./Button.module.css";
function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={props.className ? props.className : classes.button}
      type={props.type}
      style={props.style}
    >
      {props.text}
    </button>
  );
}
export default Button;
