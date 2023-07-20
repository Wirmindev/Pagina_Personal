import React from "react";
import { Button } from "../Button/Button.component";

interface CardButtonProps {
    title?: string,
    img?: string,
    internalNavigation?: boolean;
    onClick?: () => void;
    href?: string
}

export const CardButton: React.FC<CardButtonProps> = ({ title, img, internalNavigation = false, onClick, href = '' }) => {
    return (
        <div className='flex flex-row items-center justify-between'>
            <img src={img} className='w-12 m-2'></img>
            {internalNavigation ?
                <Button text={title} onClick={onClick} />
                :
                <a href={href} target='_blank'><Button text={title} /></a>
            }
        </div>
    )
}