import withAuthSync from "../src/contexts/withAuthSync";

const Home = () => {
    return(
        <h1>Home</h1>
    )
}

export default withAuthSync(Home)(["admin", "business"]);