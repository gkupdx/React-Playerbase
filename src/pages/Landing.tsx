//// Landing.tsx - landing page 
import Button from '../components/Button';
import '../stylesheets/landing.css';

const Landing = () => { 
    return (
        <div className="landing">
            <h1>Welcome to Playerbase</h1>

            <div className='btnContainer'>
                <Button route={"/login"} name={"Login"}/>
                <Button route={"/register"} name={"Register"}/>
            </div>
        </div>
    )
}

export default Landing;