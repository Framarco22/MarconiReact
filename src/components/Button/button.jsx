const Button = (props) => {
    console.log(props)
    return <button onClick={props.clickeando}>{props.label}</button>
    /*   return <button onClick={() => console.log('Hice click en Home')} style= {{color: 'red'}}>{props.label}</button> */
}

export default Button