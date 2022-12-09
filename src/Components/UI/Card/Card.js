function Card(props) {
  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        backgroundColor: "white",
      }}
      className={props.className}
    >
      {props.children}
    </div>
  );
}
export default Card;
