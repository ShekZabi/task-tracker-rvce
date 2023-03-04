const Button = ({color,text,onClick}) => {

  return <button onClick={onClick} style={{backgroundColour: color}} className="btn">
  {text}
</button>
}

export default Button
