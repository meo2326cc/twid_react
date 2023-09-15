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
<div className="modal" ref={modalController} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
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




/*
睽違了一年，經民連書局再次出版新書《揭開中資假面－經民連與泛中國政商集團的搏鬥》，新書預計於10月底出版，並於11月底上書商通路。凡是在今年10月20日以前捐款經民連滿2000元的支持者，就可以搶先在消費者之前，獲贈這本新書（辦法詳後）。

反服貿運動以降，經民連抵抗中資及中國政商集團滲透台灣，已超過十年。

這十年間，社會關注的南海控股投資雙子星案、清華海峽研究院違法設立新竹辦公室案、香港蘋果日報清盤案，經民連無役不與，每在關鍵時刻阻止中國勢力侵門踏戶。

當美中貿易戰、科技戰讓全球供應鏈一分為二之際，經民連關切台灣經濟安全、抵抗中資入侵的論述與行動更顯得重要，我們所守護的不只是關鍵產業的技術自主，更是捍衛台灣主權、經濟自主、民主自由，以及台灣立足世界的位置。

您或許會好奇，服貿已被擋下，為何「中資滲透」的案例仍層出不窮？

藉由此書，我們完整交待中資個案發展的來龍去脈，分析其中的中國滲透危機，與經民連行動後的實質影響，點出有待解決的結構問題；同時，我們也系統性的說明台灣投資法規之漏洞，以及其中複雜的政商人物關係，並比較美日兩國作法，希望台灣能從中學習與警惕。

這是一本十年磨劍而成的書，敘說台灣政治界、產業界、學術界與媒體界不願說的秘密，關心台灣主權與經濟自主的朋友，閱讀後您將可以更全面地了解我們面對的處境。

本書作者群👉
賴中強（經民連智庫召集人）
江旻諺（清大社會所碩士）
歐栩韶（經民連智庫研究員）
許冠澤（經民連智庫研究員）
天龍英（資深媒體人）

│經民連2023年舊雨新知捐款回饋方案│
凡自2023年4月1日起至12月31日止，累積捐款經民連滿2000元者，即可獲贈《揭開中資假面－經民連與泛中國政商集團的搏鬥》乙本，累積捐款經民連滿5000元者，即可獲贈同書兩本。10月20日前捐款滿2000元者，可優先於書商通路讀者獲贈搶閱新書。

【捐款方式】
▱ https://bit.ly/經民連線上單筆捐款
▱ http://bit.ly/經民連線上定期定額捐款
▱ 銀行捐款
806元大銀行古亭分行
帳號｜20362000026543
戶名｜社團法人台灣經濟民主連合
▱ 郵局劃撥
帳號｜5035-3211
戶名｜社團法人台灣經濟民主連合
▱捐款收據索取與徵信：
https://reurl.cc/LNabo4

*/