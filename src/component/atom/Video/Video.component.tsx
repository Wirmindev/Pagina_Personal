
//  import videoFile from '../../../assets/vid/BG_Page.webm';
import gifFile from '../../../assets/vid/BG_Page.gif'

 export const BgVideo: React.FC = () => {
    return( 
        <div className='absolute top-0 bottom-0 left-0 right-0 h-full w-full -z-10'>
            {/* <video className='object-center object-cover h-full' autoPlay loop muted src={videoFile}/> */}
            <img src={gifFile} className='object-center object-cover h-full w-full'/>
        </div>
    )
}






