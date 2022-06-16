
import userl from './media/guri.jpg'
import { Avatar } from '@mui/material';
import commentUserscss from './commentbyuser.module.css';
import { useState } from 'react';
import { ThumbDown, ThumbDownAltOutlined, ThumbDownRounded, ThumbUpAltOutlined, ThumbUpRounded } from '@mui/icons-material';

export default function Commentbyuser(props){
    const [isCLiked,setCLiked] = useState(false);
    const [isCDisliked,setCDisliked] = useState(false);
    
    function CLiked(){
        setCLiked(true);
    }
    function CNLiked(){
        setCLiked(false);
    }
    function CDisliked(){
        setCDisliked(true);
    }
    function CNDisliked(){
        setCDisliked(false);
    }

    return (
        <div className={commentUserscss.container}>
            <div className={commentUserscss.channel_logo}>
                <Avatar src={userl}/>
            </div>
            <div className={commentUserscss.commentDes}>
                <h4>
                    {"AP dhillion"}
                </h4>
                <p>
                    {"this is the content of the comment done by user......"}
                </p>
                <div className={commentUserscss.btns}>
                    {/* Like functionality */}
                   <div className={commentUserscss.BTN}>
                        {!isCLiked && <ThumbUpAltOutlined onClick={CLiked} /> }
                        {isCLiked && <ThumbUpRounded onClick={CNLiked} /> }
                        {props.likes}
                    </div>
                    
                    {/* Dislike functionality */}
                    <div className={commentUserscss.BTN}>
                        {!isCDisliked && <ThumbDownAltOutlined onClick={CDisliked} />}
                        {isCDisliked && <ThumbDownRounded onClick={CNDisliked} /> }
                        {props.dislikes}
                        
                    </div>
                    <div className={commentUserscss.BTN}>
                        REPLY
                    </div>
                    

                </div>
            </div>


        </div>

    );
}