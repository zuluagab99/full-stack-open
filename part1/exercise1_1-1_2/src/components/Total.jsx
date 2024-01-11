const Total = ({...props}) => {
    
    return (
        <>
            <p> Number of exercises { props.args.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)}</p>
        </>
    )
}

export default Total