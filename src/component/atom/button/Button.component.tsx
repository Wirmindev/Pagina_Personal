interface ButtonProps
{
    text?: string
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({text,onClick}) =>
{
    let style = "bg-[#ea66a1] m-2 p-2 px-4 rounded-lg hover:bg-[#ea66a1da] hover:scale-110 text-white shadow-md shadow-gray-600";

    return(
        <button className={style} onClick={onClick}>{text}</button>
    )
}