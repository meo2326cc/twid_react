import { Block } from './component';
import axios from 'axios';
import { useState , useEffect , useRef } from 'react';
import { Modal } from 'bootstrap';


export default function News(){



const [news , getNews] = useState({});
const [loadingStatus , setLoadingStatus] = useState(false);
const [click , listeningClick] = useState({});
const modalController =  useRef(null)


function handleClick(e){
    e.preventDefault();
    listeningClick(news.find( i => i.title === e.target.text))
    const openModal = new Modal(modalController.current);
    openModal.show()
}

useEffect( ()=>{
    (async ()=>{
        try{
           const writeData =  await axios.get('https://raw.githubusercontent.com/meo2326cc/twid_post/master/post.json');
           getNews( writeData.data.data )
            setLoadingStatus(true)
        }catch(err){
            console.log(err)
        }
    })()
} ,[] )

return(<>

<Block title="最新消息" anchor="news">
    <ul className='text-center'>
    { loadingStatus ? news.map( (item , index) => <li className=' bg-white rounded shadow-sm my-16' key={index}> <a href="#" className='d-block py-16' onClick={handleClick}>{item.title}</a></li> ): <li className='my-64'>載入中...</li> }
</ul>
</Block>
<MyModal modalController={modalController} click={click}/>
</>)

}


function MyModal( {modalController,click} ) {
    return(<>
<div className="modal fade" ref={modalController} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div className="modal-dialog modal-lg modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{click?.title}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {click?.content?.map( (item , index) => <p className='lh-base my-16' key={index}>{item}</p> )}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary px-16" data-bs-dismiss="modal">關閉</button>
      </div>
    </div>
  </div>
</div>
    </>)
}

