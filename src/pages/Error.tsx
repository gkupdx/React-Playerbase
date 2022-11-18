//// Error.tsx - the "404" error page for when a user tries to brute-force a URL endpoint
import Button from '../components/Button';
import '../stylesheets/error.css';

const Error = () => {
    return (
        <div className="error">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>
                The page you are looking for might have been removed,
                had its name changed, or is temporarily unavailable.
            </p>

            <Button route={'/'} name={'Landing Page'}/>
        </div>
    )
}

export default Error;