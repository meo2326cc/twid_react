import AOS from "aos";
import 'aos/dist/aos.css';
AOS.init({duration:400,offset:200});



export function Block({children , title, anchor}){

    return(
<section id={anchor}>
        <div className="container p-64" data-aos="fade-in">
    <div className="text-center mb-32">
            <h2 className='text-linear-gradient d-inline fs-1'>{title}</h2>
    </div>
    {children}
    </div>
    </section>

    )
}

export function Intro() {
    
    return(<>
        <Block title="聯盟宗旨" anchor="intro">
            <p className="lh-lg">
            敬愛的台灣鄉親： 台海局勢緊張，中國宣稱台灣海峽是他們的內海，以內戰為名，待機侵略台灣。 國際友人－裴露西．龐沛爾都認同台灣是自由民主主權獨立的國家，唯台灣建國要台灣人自已多努力。 九合一選舉「2022台灣建國制憲正名選舉聯盟」邀請所有候選人清楚宣示他們對台灣主體意識的認同， 聯盟建議選民神聖的一票只投給參與台灣建國認証的候選人，也只有參與認証才配得選民的捐款與支持。 選舉聯盟已於 7/31 在台北正式公告成立服務處，服務受認証的候選人，以及一般的選民， 服務處將設立網頁，提供候選人訊息溝通，以及選民可以查証的機會；服務項目內容，逐日增進中。 請認明認証圖章，只有接受台灣建國認証的候選人才值得你神聖的一票也才值得你的捐款與祝福。
            </p>
        </Block>
        </>)

}

export function Banner(){
    return(
        <>
        <div className="container">
            <div className="banner rounded d-flex flex-column justify-content-center px-64 shadow">
                <h1 className="fs-big fw-bold">2022<br/>
                台灣建國選舉制憲正名<br/>
                選舉聯盟</h1>
                <h2 className="fs-5 lh-lg">台灣人民要建國、制憲、正名。</h2>
            </div>
        </div>
        </>
    )
}

export function Intro2(){
    return(<>
    <Block title="聯盟簡介" anchor="intro2">
        <p className="lh-lg text-center">各位台灣國的主人大家好：</p>
        <p className="lh-lg text-center">在這邊正式跟大家宣布，由一群海內外台灣人所支持的「2022台灣建國制憲正名選舉聯盟」在即日起成立， 我們之所以成立這一個選舉聯盟，是希望匯集台灣九合一選舉中認同台灣建國制憲正名的候選人們，讓台灣人民知道我們的力量與成員， 並希望有更多的候選人及選民認同我們的理念，並加入我們。 整合全球海內外各界精英社團，展示平生專業，相互傳承。 開放－公開之網路園地，作有系統之整合推廣，提供專業、善意、良性互動之資訊。 非營利事業機構，從事智庫及新知之資訊資源之廣泛應用。 認識台灣，深耕台灣，回饋台灣，助益改造台灣，優勢台灣，福祉台灣。 透過論壇、專欄、專著論述，啟發兩岸人士，朝民主政治，跨國產經合作，政治協商之共榮共識，促進地球村、世界大同之境界。 基於經營並自主經費，我們由簡就繁，從無而至完整，尚希各界不吝提攜指教，並參與工作。</p>

    </Block>
    </>)
}

export function Footer(){
    return<div className="bg-primary py-24 text-center"> <p className="fs-7">2022台灣建國選舉制憲正名聯盟</p> </div>
}