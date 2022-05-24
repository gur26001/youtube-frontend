import { useRef } from 'react';
import classes from './Uploadvideoform.module.css';

export default function Uploadvideoform(props){
    const titleRef = useRef();
    const descRef = useRef();
    const capRef = useRef();
    const videoRef= useRef();


    function submithandler(event){
        // preventing default action of onsubmit
        event.preventDefault(); 

        // use refs  only for reading inputs
        // to change value use useState
        
        const enteredTitle = titleRef.current.value;  
        const enteredDesc=descRef.current.value;
        const enteredCap = capRef.current.value;
        const uploadedVideo = videoRef.current.value;
 
        const NewVideoData={
            title:enteredTitle,
            decription:enteredDesc,
            caption:enteredCap,
            videofile:uploadedVideo
        }
        props.onSub(NewVideoData);

    }


    return(
        <form className={classes.form} onSubmit={submithandler}>
            <h1>Details</h1>
            <div className={classes.details}>
                <div className={classes.inputfield}>
                    <div className={classes.textfield} >
                        <div className={classes.inputt}>
                                <label htmlFor='title' >Title</label>
                                <input type="text" required id='title' ref={titleRef} />
                            </div>
                            <div className={classes.inputt}>
                                <label htmlFor='description' >Description</label>
                                <textarea required id="description" rows={8} ref={descRef} />
                            </div>
                            <div className={classes.inputt}>
                                <label htmlFor='caption'>Caption</label>
                                <textarea required id="caption" rows={8} ref={capRef}/>
                            </div>
                    </div>
                    <div className={classes.mediafield}>                            
                            <input className={classes.uploadvideo} type="file" id="video" ref={videoRef} />
                    </div>
                </div>
                
                <div className={classes.actions}>
                    <button>
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
} 