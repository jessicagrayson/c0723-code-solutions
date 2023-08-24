// export default function CustomButton(){
//   return <button></button>

// }

export default function CustomButton(props) {
  const buttonStyle = { backgroundColor: props.color };
  return <button style={buttonStyle}>{props.text}</button>;
}
