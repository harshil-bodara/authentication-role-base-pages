import withAuthSync from "../src/contexts/withAuthSync";

const Dashboard:React.FC = () => {
    return(
        <h1>Admin Dashboard</h1>
    )
}

export default withAuthSync(Dashboard)(["admin", "business"]);