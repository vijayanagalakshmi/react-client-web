const NameWrapper = (NameComponent) => {
    return(props)=> {
        const {name} = props;
        const msg = "Hello";
        

        return (<NameComponent msg={msg} name={name}/>)
    }

    
}
export default NameWrapper;