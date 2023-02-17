import withoutAuthSync from "../src/contexts/withoutAuthSync";


const Login = () => {
    return(
        <h1>Login</h1>
    )
}

export default withoutAuthSync(Login)("admin");