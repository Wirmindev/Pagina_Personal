import React from "react";

interface TextinputProps 
{
    name?: string,
    text?: string,
    type?: string,
    placeholder?: string,
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Textinput: React.FC<TextinputProps> = ({text,type,placeholder,value,name,onChange}) =>
{

    let style = "m-2 rounded-lg placeholder-gray-500 placeholder-opacity-25 text-center";
    let style_text = "m-2 text-white text-center";

    return(
        <>
        <label className={style_text}>{text}</label>
        <input name={name} onChange={onChange} type={type} className={style} placeholder={placeholder} value={value}></input>
        </>
    )
}