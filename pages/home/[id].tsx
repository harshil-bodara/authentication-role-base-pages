import withAuthSync from "../../src/contexts/withAuthSync";

const DynamicPage = () => {
    return(
        <h1>Dynamic Page</h1>
    )
}

export default withAuthSync(DynamicPage)(["admin", "business"]);