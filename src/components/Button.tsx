import React from 'react';

interface ButtonProps {
	text?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button className="bg-gold rounded-full px-2 py-1" onClick={onClick}>{text}</button>
    )
};

export default Button;