//// Button.tsx - individual "button" component
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

interface BtnProps {
    route: string,
    name: string,
}

const Button: FC<BtnProps> = ({ route, name }) => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(route)} className='button'>{name}</button>
    )
}

export default Button;