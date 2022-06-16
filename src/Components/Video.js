import { DownloadOutlined, LibraryAdd, ThumbDown, ThumbUp, ThumbUpAlt } from '@mui/icons-material';
import svideo from '../Components/media/Sample-Videos-Mp425.mp4';
import singlevideo from './video.module.css';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { useState } from 'react';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import { Avatar } from '@mui/material';
import channelLogo from './media/logo.png';
import userl from './media/guri.jpg'
import CommentsList from './CommentsList';

export default function Video(props){
    const [isLiked,setLiked] = useState(false);
    const [isDisliked,setDisliked] = useState(false);
    const [isSaved,setSaved] = useState(false);
    const [isSavedVal,setSavedVal] = useState("SAVE");
    function Liked(){
        // send data to the backend
        setLiked(true);
    }
    function notLiked(){
        // send data to the backend
        setLiked(false);
    }

    function Disliked(){
        setDisliked(true)
    }
    function notDisliked(){
        setDisliked(false)
    }

    function Saved(){
        setSavedVal("SAVED");
        setSaved(true);
    }
    function notSaved(){
        setSavedVal("SAVE");
        setSaved(false)
    }

    return (
        <section className={singlevideo.currentVid}>

        
                <video controls>
                    <source src={svideo} />
                </video>
                <div style={{padding:"10px"}} className={singlevideo.videoDesc}>
                    <div style={{width:"50%",}}>
                        <h2 style={{width:"100%",fontWeight:"lighter"}} className={singlevideo.videoDescUPPER} >
                            {"videodescription"}
                        </h2>
                        
                        <p style={{width:"100%",margin:"5px"} } className={singlevideo.videoDescLOWER}>
                            <p style={{color:"gray"}} >{114898898} views • {"FEB 24,2005"}   </p>
                        </p>
                    </div>
                    <div style={{width:"100%",marginUpper:'-4px',display:'flex',justifyContent:"flex-end"}}>
                        <div style={{width:"60%",display:'flex',marginUpper:'-4px',justifyContent:"space-around"}}>
                            <div className={singlevideo.btns}>
                                {!isLiked && <ThumbUpAltOutlinedIcon onClick={Liked}/>}
                                { isLiked && <ThumbUp onClick={notLiked} />} LIKE
                            </div>
                            <div className={singlevideo.btns}>
                                {!isDisliked && <ThumbDownAltOutlinedIcon  onClick={Disliked} /> }
                                { isDisliked && <ThumbDown  onClick={notDisliked} /> } DISLIKE
                            </div>
                            <div className={singlevideo.btns}>
                                <ReplyOutlinedIcon />
                                SHARE
                            </div>
                            <div className={singlevideo.btns}>
                                <DownloadOutlined/>
                                DOWNLOAD
                            </div>
                            <div className={singlevideo.btns}>
                                <div>{!isSaved && <LibraryAddOutlinedIcon onClick={Saved}/>}</div>
                                <div>{ isSaved && <LibraryAdd onClick={notSaved} />  }</div>
                                <div>{isSavedVal}</div>
                            </div>

                        </div>
                        
                    </div>

                </div>
                <hr/>
                <div className={singlevideo.channel} >
                    <div className={singlevideo.upperDes}>
                        <div className={singlevideo.channelDes}>
                            <Avatar src={channelLogo}/>
                            <div style={{margin:"10px"}} >
                                <h3>{"Team Fearless"}</h3>
                                <p>{"3.82"}{"M"} subscribers</p>
                            </div>
                        </div>
                        
                        <div className={singlevideo.Subcribe}>
                            <button className={singlevideo.SubcribeDes}>
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                    <div className={singlevideo.lowerDes}>
                            <p style={{wordWrap:'break-word'}}>
                                {
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."                                    
                                }
                            </p>
                            <p style={{color:'gray',fontSize:"13px",marginTop:"12px",marginBottom:"10px"}}>SHOW MORE</p>
                    </div>
                </div>
                <hr style={{marginBottom:"10px"}}/>
                <div className={singlevideo.comments} >
                     <div style={{width:"100%",display:'flex'}}>
                     <Avatar src={userl} />
                        <textarea className={singlevideo.addcomment} rows={1} cols={100} placeholder="Add comment" ></textarea>
                     </div>
                     <div className={singlevideo.commentsList}  >
                        <CommentsList/>
                     </div>
                     
                </div>
                
        </section>
    )
}