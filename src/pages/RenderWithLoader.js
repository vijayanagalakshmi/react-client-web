const RenderWithLoader = (WrappedComponent) => {
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
        (
            <WrappedComponent {...props}/>
            )
    )
}
}
export default RenderWithLoader;