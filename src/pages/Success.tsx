//// Success.tsx - update success page for profile updates
import Button from "../components/Button";
import '../stylesheets/success.css';

const Success = () => {
    return (
        <div className="success">
            <h1>Password Update Successful!</h1>

            <div>
                <p>For your safety, please log back in with your updated password.</p>
                <Button route={"/login"} name={"Log In"} />
            </div>
        </div>
    )
}

export default Success;