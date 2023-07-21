
 import videoFile from '../../../assets/vid/BG_Page.webm';

 export const BgVideo: React.FC = () => {
    return( 
        <div className='absolute top-0 bottom-0 h-full w-full -z-10 '>
            <video className=' object-center object-cover h-full' autoPlay loop muted src={videoFile}/>
        </div>
    )
}






