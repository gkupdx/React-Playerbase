//// Logout.tsx - log out page component
import Button from "../components/Button";
import "../stylesheets/logout.css";

const Logout = () => {
    return (
        <div className="logout">
            <h1>You Have Successfully<br />Logged Out!</h1>

            <div>
                <p>Not what you were looking for?</p>
                <Button route={"/login"} name={"Log In"} />
            </div>
        </div>
    )
}

export default Logout;