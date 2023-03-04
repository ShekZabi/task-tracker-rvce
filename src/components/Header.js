import Button from './Button'
const header = ({title,onAdd, showAdd}) => {
 
  return (
    <header className="header">
     <h1>{title}</h1>
     <Button color ={showAdd ? 'red' : 'green'} text = {showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
   

    </header>
  )
}

export default header
