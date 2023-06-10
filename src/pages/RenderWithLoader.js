const RenderWithLoader = (wrappedComponent) => {
    return(props) => {
        const {loading , error} = props;
        console.log("loading in loader:", loading);
    
    return (
        loading?
        (<div> loading......</div>)
        :
        error?
        (<div>{error.message}</div>)
        :
        (<wrappedComponent{...props}/>)
    )
}
}
export default RenderWithLoader;