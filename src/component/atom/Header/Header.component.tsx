import React from "react";
import { Button } from "../../atom/button/Button.component";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {

    const navigate = useNavigate();

    return (
        <nav className="bg-[#6553b0] rounded-lg flex items-center justify-center shadow-md w-full shadow-gray-600">
            <Button text='Login' onClick={() => navigate('/login')}/>
            <Button text="Home" onClick={() => navigate('/')}/>
        </nav>
    )
}