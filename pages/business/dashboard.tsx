import withAuthSync from "../../src/contexts/withAuthSync";

const Dashboard:React.FC = () => {
    return(
        <h1>
            Business Dashboard</h1>
    )
}

export default withAuthSync(Dashboard)(["business"]);