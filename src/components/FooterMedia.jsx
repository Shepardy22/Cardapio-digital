import footerBanner from '../img/banners/footerBanner.png';

export default function FooterMedia(){
    return(
        <div className="flex flex-col">
            <h2 className="text-2xl text-primaryRed-100 font-medium mx-auto ">Mídias</h2>

        

            <div className="relative ">
                <div className='flex justify-center items-center '>
                    <img src={footerBanner} alt="" />
                    
                        
                </div>
               
            </div>
       
        </div>
        
    );
}