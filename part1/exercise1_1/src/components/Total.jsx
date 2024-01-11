const Total = (...args) => {
    console.log(args)
    return (
        <>
            <p>{args.reduce((a,b)=>{ a + b},0)}</p>
        </>
    )
}

export default Total