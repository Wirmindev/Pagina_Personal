import React, { ReactNode } from "react";

interface CardsProps {
    title?: string,
    children?: ReactNode | ReactNode[]
}

export const Cards: React.FC<CardsProps> = ({ title, children }) => {
    return (
        <div className='bg-[#6553b0] w-auto h-auto rounded-lg m-5 mr-10 text-center p-5'>
            <b className="text-[#ea66a1] text-3xl p-2">{title}</b>
            {children}
        </div>
    )
}