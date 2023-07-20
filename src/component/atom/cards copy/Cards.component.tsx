import React from "react";
import { Button } from "../Button/Button.component";

interface CardsProps {
    title?: string,
    img?: string,
    internalNavigation?: boolean;
    onClick?: () => void;
    href?: string
}

export const Cards: React.FC<CardsProps> = ({ title, img, internalNavigation = false, onClick, href = '' }) => {
    return (
        <div className='bg-[#6553b0] w-auto h-auto rounded-lg m-5 mr-10 text-center p-5'>
            <b className="text-[#ea66a1] text-3xl p-2">{title}</b>
            <div className='flex flex-row items-center justify-between'>
                <img src={img} className='w-12 m-2'></img>
                {internalNavigation ?
                    <Button text='Github' onClick={onClick}></Button>
                    :
                    <a href={href} target='_blank'><Button text='Github'></Button></a>
                }
            </div>
        </div>
    )
}