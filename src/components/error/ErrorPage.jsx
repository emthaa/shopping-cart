import { Link } from "react-router-dom"

/* eslint-disable react/no-unescaped-entities */
function ErrorPage(){
    return(
        <>
        <p>That wasn't supposed to happen...</p>
        <Link to="/">Back to Home</Link>
        </>
    )
}

export default ErrorPage