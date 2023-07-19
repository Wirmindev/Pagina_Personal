import { useNavigate } from 'react-router-dom';
import personalImage from '../../assets/img/Mepic.webp';
import { Button } from '../../component/atom/button/Button.component';

export const Home = () => {

  const navigate = useNavigate();

  return (
    //Fondo de la pagina, almacenado en un div
    <div className="felx bg-[#27222c] w-screen h-screen">
      {/*Creación de un nav, con los botones creados en su interior*/}
      <nav className="bg-[#6553b0] rounded-lg flex items-center justify-center shadow-md shadow-gray-600">
        <Button text='Login' onClick={() => navigate('/login')}></Button>
      </nav>
      {/*Creacion de un div que contendra toda la información de About*/}
      <div className="flex flex-row items-center justify-center">
        {/*Imagen que corresponde al About*/}
        <img src={personalImage} className='w-[375px]'></img>
        {/*Este div contendra todo el texto del About*/}
        <div className=" flex pl-10 text-center">
          <div>
            <b className=" text-[#ea66a1] text-3xl p-2">Daniel López Cervera</b>
            <p className="text-white text-center p-2 text-2xl">
              I am learning programming in HTML, CSS, JavaScript and SQL,
              I consider myself a hardworking and responsible person, eager to
              learn and join the working world. I do a dual training, where I develop
              different jobs creating and managing databases in SQL and Java, also
              creating web pages with HTML, CSS and JavaScript.</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center'>
        {/*Div que contendra la parte de Projects*/}
        <div className='bg-[#6553b0] w-auto h-auto rounded-lg m-5 mr-10 text-center p-5'>
          <b className="text-[#ea66a1] text-3xl p-2">Proyects</b>
          <div className='flex flex-row items-center justify-center'>
            <img src='https://www.techspot.com/images2/downloads/topdownload/2021/04/2021-04-07-ts3_thumbs-8ba.png' className='w-12 m-2'></img>
            <a href='https://github.com/Wirmindev' target='_blank'><Button text='Github'></Button></a>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <img src='https://lh3.googleusercontent.com/1NWSffUULql2uPj0hT_WTwSTfmUv0yuXk0Rq0Q6tpcUZbMurPESyK8W2NBqpa8SRpA=w300' className='w-12 m-2'></img>
            <Button text='Weather application' onClick={() => navigate('/clima')}></Button>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <img src='https://cdn-icons-png.flaticon.com/512/189/189715.png' className='w-12 m-2'></img>
            <Button text='Convert Money' onClick={() => navigate('/convertmoney')}></Button>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <img src='https://cdn-icons-png.flaticon.com/512/603/603463.png' className='w-12 m-2'></img>
            <Button text='Convert Temperature' onClick={() => navigate('/converttemperature')}></Button>
          </div>
        </div>
        {/*Div que contendra la parte de Contact*/}
        <div className='bg-[#6553b0] w-auto h-auto rounded-lg m-5 ml-10 text-center p-5'>
          <b className=" text-[#ea66a1] text-3xl p-2">Contact</b>
          <div className='flex flex-row items-center justify-center'>
            <img src='https://img.freepik.com/iconos-gratis/linkedin_318-187585.jpg' className='w-12 m-2'></img>
            <a href='https://www.linkedin.com/in/daniellopezcervera/' target='_blank'><Button text='Linkeding'></Button></a>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <img src='https://thekreat0r.github.io/TheKreat0r/img/IMG%20contactos/artstation.png' className='w-12 m-2'></img>
            <a href='https://www.artstation.com/wirmin' target='_blank'><Button text='ArtStation'></Button></a>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <img src='https://freelogopng.com/images/all_img/1657906383gmail-icon-png.png' className='w-12 m-2'></img>
            <a href='mailto:dalocervera@gmail.com' target='_blank'><Button text='Gmail'></Button></a>
          </div>
        </div>
      </div>
      </div>
  )
}
