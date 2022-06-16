import recommendedvideo from './RecommendVideo.module.css';

export default function RecommendVideo(props){
    return (    
        <div className={recommendedvideo.card}>
            <div className={recommendedvideo.images} >
                <img src={props.data.img}/>
                
            </div>
            <div className={ recommendedvideo.desc}>
                <div  className={recommendedvideo.desc1} style={{color:"black",fontSize:"16px"}}>
                    {props.data.desc.title}
                </div>
                <div className={recommendedvideo.desc2}>
                    {props.data.desc.channel_name}
                </div>
                <div className={recommendedvideo.desc3}>
                    <span>
                    {props.data.desc.views}{props.data.desc.viewsUnit}
                    </span>•
                    <span>
                        {props.data.desc.uploadtime}
                    </span>
                </div>
            </div>
        </div>

    );
}