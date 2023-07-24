import React, { ReactNode } from "react";

interface CardsProps {
    title?: string,
    children?: ReactNode | ReactNode[]
}

export const Cards: React.FC<CardsProps> = ({ title, children }) => {
    return (
        <div className='bg-[#6553b0] w-full flex-1 rounded-lg text-center p-5 h-full sm:max-w-xs'>
            <b className="text-[#ea66a1] text-3xl p-2">{title}</b>
            <div className="flex-grow bg-[#9676df] h-1 m-2 shadow-md shadow-gray-600"></div>
            
            {children}
        </div>
    )
}