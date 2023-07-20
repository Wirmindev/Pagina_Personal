import { useNavigate } from 'react-router-dom';
import { Header } from '../../component/atom/Header/Header.component';
import { About } from '../../component/atom/about/About.component';
import { Cards } from '../../component/atom/Cards/Cards.component';
import { CardButton } from '../../component/atom/CardButton/CardButton.component';

export const Home = () => {

  const navigate = useNavigate();

  return (
    //Fondo de la pagina, almacenado en un div
    <div className="felx bg-[#27222c] w-screen h-screen">
      {/*Componente que contiene el nav*/}
      <Header />
      {/*Componente que contiene todo el about*/}
      <About />
      <div className='flex flex-row items-center justify-center'>
        {/*Componente que contendra la parte de Projects*/}
        <Cards title='Projects'>
          <CardButton title='Github' href='https://github.com/Wirmindev' img='https://www.techspot.com/images2/downloads/topdownload/2021/04/2021-04-07-ts3_thumbs-8ba.png' />
          <CardButton title='Weather application' internalNavigation onClick={() => navigate('/clima')} img='https://lh3.googleusercontent.com/1NWSffUULql2uPj0hT_WTwSTfmUv0yuXk0Rq0Q6tpcUZbMurPESyK8W2NBqpa8SRpA=w300' />
          <CardButton title='Convert Mone' internalNavigation onClick={() => navigate('/convertmoney')} img='https://cdn-icons-png.flaticon.com/512/189/189715.png' />
          <CardButton title='Convert Temperature' internalNavigation onClick={() => navigate('/converttemperature')} img='https://cdn-icons-png.flaticon.com/512/603/603463.png' />
        </Cards>
        {/*Componente que contendra la parte de Contact*/}
        <Cards title='Contact'>
          <CardButton title='Linkeding' href='https://www.linkedin.com/in/daniellopezcervera/' img='https://img.freepik.com/iconos-gratis/linkedin_318-187585.jpg'/>
          <CardButton title='ArtStation' href='https://www.artstation.com/wirmin' img='https://thekreat0r.github.io/TheKreat0r/img/IMG%20contactos/artstation.png'/>
          <CardButton title='Gmail' href='mailto:dalocervera@gmail.com' img='https://freelogopng.com/images/all_img/1657906383gmail-icon-png.png'/>
        </Cards>
      </div>
    </div>
  )
}
