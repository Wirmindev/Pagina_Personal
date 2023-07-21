import React from "react";
import personalImage from '../../../assets/img/Mepic.webp';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
      {/*Imagen que corresponde al About*/}
      <img src={personalImage} className='w-[250px] sm:w-[375px] aspect-auto'></img>
      {/*Este div contendra todo el texto del About*/}
      <div className="flex text-center">
        <div>
          <b className=" text-[#ea66a1] text-[32px] sm:text-3xl p-2">Daniel López Cervera</b>
          <p className="text-white text-center p-2 text-[18.5px] sm:2xl">
            I am learning programming in HTML, CSS, JavaScript and SQL,
            I consider myself a hardworking and responsible person, eager to
            learn and join the working world. I do a dual training, where I develop
            different jobs creating and managing databases in SQL and Java, also
            creating web pages with HTML, CSS and JavaScript.</p>
        </div>
      </div>
    </div>
  )
}