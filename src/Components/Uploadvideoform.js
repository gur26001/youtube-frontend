import { useState,useRef } from 'react';
import classes from './Uploadvideoform.module.css';
import axios from 'axios';



var currentdate = new Date(); 


export default function Uploadvideoform(props){
    const titleRef = useRef();
    const descRef = useRef();
    const capRef = useRef();
    
    const [selectedimage,setselectedimage] = useState(null);
    const[selectedvideo,setselectedvideo] =  useState(null);

    
    function fileselectedImage(event){
        console.log(event.target.files[0]);
        setselectedimage(event.target.files[0]);
    }

    
    function fileselected(event){
        console.log(event.target.files[0]);
        setselectedvideo(event.target.files[0]);
    }

    function submithandler(event){
        // preventing default action of onsubmit
        // let Date = currentdate.getDate();
        


        event.preventDefault(); 

        // use refs  only for reading inputs
        // to change value use useState
        
        const enteredTitle = titleRef.current.value;  
        const enteredDesc=descRef.current.value;
        const enteredCap = capRef.current.value;
        
 
        // const NewVideoData={
        //     title:enteredTitle,
        //     decription:enteredDesc,
        //     caption:enteredCap,    
        //     channelIcon: channel_image,
        //     channel_name:"Bibblee",
        //     date: Date
        // }
        // props.onSub(NewVideoData);
        const fd= new FormData();
        
        
        fd.append('title', enteredTitle);
        fd.append('caption',enteredCap);
        fd.append('description',enteredDesc);

        fd.append('thumbnail',selectedimage, selectedimage.name);
        fd.append('video',selectedvideo,selectedvideo.name);
        fd.append('date',selectedvideo.lastModifiedDate);

        axios.post('https://front-491c9-default-rtdb.firebaseio.com/videos.json',fd);
    
    
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
                            <input className={classes.uploadvideo} type="file" id="video" onChange={fileselected} />
                            <input className={classes.uploadvideo} type="file" id="thumbnail" onChange={fileselectedImage} />
                    </div>
                </div>
                
                <div className={classes.actions}>
                    <button type='submit'>
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
} 