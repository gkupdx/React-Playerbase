//// Landing.tsx - landing page 
import { useNavigate } from 'react-router';
import Button from '../components/Button';
import '../stylesheets/landing.css';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="landing">
            <h1>Welcome to Playerbase</h1>

            <div className='btnContainer'>
                <Button onClick={() => navigate('/login')} name={"Login"}/>
                <Button onClick={() => navigate('/register')} name={"Register"}/>
            </div>
        </div>
    )
}

export default Landing;