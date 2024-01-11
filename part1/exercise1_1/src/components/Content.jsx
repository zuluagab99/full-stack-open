import Part from "./Parts"

const Content = (...props) => {
    
    const data = props[0].args

    return(
        <>
            <Part part={data.part1} exercise={data.exercise1} />
            <Part part={data.part2} exercise={data.exercise2} />
            <Part part={data.part3} exercise={data.exercise3} />
        </>
    )
} 

export default Content