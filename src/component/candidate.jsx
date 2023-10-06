import { Block } from "./component";
import { useState ,memo , useCallback , useRef, useEffect} from "react";
import peopleData from "../data";

export function Candidate() {

    const [data, setData] = useState(['--請點選地圖檢視各地區候選人--'])
    const [location , setLocation] = useState('');
    const clickEvent = useRef(null);

    const locationList = {
        'taipei': '台北',
        'keelung': '基隆',
        'yilan': '宜蘭',
        'newtaipei': '新北',
        'taichung': '台中',
        'changhua': '彰化',
        'chiayi': '嘉義',
        'kaohsiung': '高雄',
        'hsinchu': '新竹'
    }

    const click = useCallback((e) => {
          const match = e.target.id ;
          match !== '' ? setData(peopleData[match]) : null
          match !== '' ? setLocation(locationList[match]):null
          setTimeout(()=>{clickEvent.current.classList.add('show');},100) 

    },[])

    useEffect(()=>{clickEvent.current.classList.add('show');},[])

    return (<>
        <Block title="認證候選人" anchor="candidate">
            <div className="bg-gray-300 rounded shadow p-16 d-flex justify-content-center align-items-center row gy-16">
                <div className="col-12 col-lg-6">
                    <Twsvg click={click} />
                </div>
                <div className="col-12 col-lg-6 text-start fade" ref={clickEvent} key={location}>
                    <h3  className="text-linear-gradient d-inline">{location}</h3>
                    <ul>
                        { data[0] === '--請點選地圖檢視各地區候選人--' ? <p className="text-gray-600 text-center">{data}</p> : data.map((item, index) => {
                            return (<li key={index} className="d-flex bg-gray-100 rounded shadow-sm my-16 py-8 px-16 text-start " >
                                <a href={item.link} className="d-block w-100">
                                    <div className=" d-flex align-items-center">
                                        <img src={item.img} alt="people" className="rounded-circle" width="60px" height="60px" />
                                        <div className="ms-16">   
                                            <h3 className="fs-5">{item.name}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </a></li>)
                        })}
                    </ul>
                </div>
            </div>
        </Block>
    </>)
}



const Twsvg = memo(({ click }) => {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 539.6 941.3" xmlSpace="preserve" onClick={click}>
            <g className="st0" >
                <path className="st1" d="M108.9,735.3l1.4-0.5c-0.8-1.5-1.4-2.3-1.5-3.9c-1.5-1.7-2.4-3.4-2.8-5.6c-0.8-4-0.2-5.1,2.8-8l0.1-3.6
           l0.5,0.5l0.3,2l0.7,0.3l0.5-0.8l-0.5-1l0.7-0.8l-0.4-0.8l0.4-0.9c-0.6-0.6-1.5-2.2-1.4-3.2l-0.5-0.5l-0.6,0.6l0.6,2.2l-0.7,1.3
           c-1.1-5.8-4.2-10.6-6.4-16c-1.6-4-3-8.1-4.6-12.1c-0.9-2.1-2-4.2-2.8-6.3c-0.6-1.7-1.1-3.5-1.6-5.2c-0.1-0.3-0.5-0.6-0.6-0.9
           c-1.3-5-2.3-10.2-4.6-14.9l0.3-1.4l-0.8-1.8c1-1.9-0.2-4.7-0.7-6.5c-1.6-5.7-3-8.7-7.1-12.9c-1-1.1-2.5-2.3-4-2.7l-0.8-2.2
           c-0.1,0.1-1.2,0.2-1.4,0.2c-2.4-1.6-4-4-6.3-5.7c-0.1-0.1-3.9-2.2-4.1-2.3c-1.4-0.6-3-0.3-4-1.5l1.6-2.1c2.2-0.8,7.5-2.3,8.7-4.1
           l0.2,0c0.7-3.9-1,1.5-7.8,1.8l0.2-4c0.1-0.9-0.3-1.8-0.2-2.6c0.2-1.8,1.6-3.7,1.2-5.6l1.1-1.1c0.9-0.1,1.8-0.2,2.8-0.4l1.6,0.7
           l0.1-2.4c-0.6-0.3-1.9-0.9-2.3-1.6c0-0.8-0.2-2.8-1-3.3h-0.8c-0.1-1.3-0.7-6-0.2-6.9l3.3-0.3l0.5-0.4c-0.2-1.4-0.5-3.7-1.7-4.6
           c1.9-1.4,1-5.5,2.2-7.6c0.3-0.5,6.2-1.1,7.1-1.2l-1.5-1.1l-5,0.3l-1-1c-0.2-0.5,1.1-3.6,1.4-4.2l0.8-0.2l1.5-1.5l-0.7-1.6l0.5-1.5
           l1.2-0.9l0.6-1.6l1.8-1.1l0.2-0.6l-0.8-1.7l0.2-0.8l0.6-0.5c-0.7-0.6-1.5-1.9-1.6-2.8l0.4-1.6l1.1-0.5l0.8-2l0.5-0.4l1.5,0.7
           l0.5-0.2l2.3,1.3l0.8-0.1c-2.3-1.4-3.7-4.2-5.6-6.2l-0.2-1.1c2.6-4.3,2.6-7.1,3-11.9l0.6-0.5l0.5,0.5l-0.9,6.2l2-0.4l0.7,0.7
           l0.5-0.3c-0.1-0.7,0.1-1.8,0.5-2.3l-0.1-0.5l1.3-3.9l-1-3.3l-1.3-0.1l-0.6-0.5l-0.2-1.3l0.4-0.8l-0.2-1.1l1.1-2l-1.1-0.4l-0.9-1.6
           l1.5-3c0.4,0,1.4-0.2,1.6-0.7l0.6,0.1l0.5-1.4l-1.7-0.8l-0.4,0.4l-1.8,0.2l-0.7-0.9c0.5-0.8,0.5-2.5,0.1-3.3l1.1-1.2l0.8-3.3
           l2.8-0.3l0.4-0.4c-2.4-0.3-5.1-3.5-4.7-6l5.1-0.8l-1.2-1.1l-3.1,0.2l-0.3-0.8l0.9-1.7l-1.1-1.1l-0.1-1.1l1.6,0.1l0.6-1.7l-1.4,0.4
           c-0.5-0.6-1.6-1-2.4-1l-0.5-1.2c1.3-4.5-0.3-10.4-0.9-15l-0.9,1.2l-0.5-0.5c4.1-8,4.4-17.9,11.1-24.4l0.9-0.1
           c0.5,0.5,0.3,1.9,0.3,2.6l1.4-1.2l1,1.6l1.5,0.4l1.2,1.3c0.1-1.1-3.1-4.3-3.8-5.2c-0.4-1.7,0.6-3,0.9-4.5c0.1-0.8-0.1-1.7,0-2.4
           c0.2-1.7,1-5.9,2.7-7.1l-0.1-0.7l-1.4,0.4l-0.5-0.4c1.3-2.6,5-8.6,7.8-9.5l-0.8-0.7c0-0.9,3.6-4.7,4.3-5.5l0.7-0.1
           c2.3-2.4,4-4.8,6-7.5l-0.3-1c0.6-4.9,4-4.7,4.9-7.1c0.3-0.8,0.4-2,0.8-2.8c0.6-1.1,1.7-2.1,2.2-3.3c0.9-1.8,1.5-3.9,2.3-5.7
           c0.3-0.7,0.7-1.5,1.3-1.9l0.9-0.7c0.9-2.3,1.8-4.6,2.8-6.8c1.3-2.7,4.3-6.7,4-9.9h1.1c0.3-3.9,3-5,4.3-8.4l1.2-0.1l0.9-2.1
           c1.6-0.2,3.8-1.9,4.8-3l1.1,0.5c0.7-2.5,2.5-6.2,4.6-7.9c0.8-0.6,2-0.8,2.7-1.6c-0.1-0.7,0.1-2.4,0.8-2.9l-0.2-0.5l-1.1,0.5
           c-0.4-1.2,1.2-5.6,1.6-6.9l-0.5-1.1l2.8-4.2l-0.2-0.6c1.6-3,7.2-7.8,10-10.8l2.1,0l2,1.7l1.2,0.1c0.6,0.2,1.5,2.4,1.7,3l0.6,0.1
           c-1.1-5.1-3.2-6.3-7.8-7.6l-0.2-0.6l3-5.2c0.1-0.2,1-0.7,1.1-0.9c0.9-1.4,1.4-3.2,2.2-4.6c1-1.8,1.9-2.7,2.7-5.1
           c-0.2-0.7-0.4-1.3-0.6-2l1.3-3.9l1.3,0.7c0.3-0.9,1.4-2.4,2.3-2.7c-0.3-3.5,0.7-8.9,3.4-11.3c-0.1-1.2,0.4-2.9,1-3.9
           c2.2-0.6,4.8-5.7,4.1-7.9c0.9-0.9,1.7-2.6,1.9-3.8c0.6-0.5,2.7-0.7,3.4-0.7c-0.9-1.7-1-3.5,0.3-4.9l1.2-0.1c0.8-0.8,2-2.8,1.8-4.1
           l0.8-0.2l1-1.2l0.9-0.1c1.4-3.3,3.7-3.7,5.4-5.9c0.3-0.3,1.2-3,1.6-3.6c0.8-1.3,2.1-2.4,3-3.7c0.1-0.2,1-4,1.1-4.4
           c0.6-1.7,1.7-3.4,2.2-5.1c0.5-1.7,0.3-3.7,0.9-5.4c0.9-2.5,2.5-5.3,3.7-7.7c0.2-0.4,0.2-1.6,0.4-2c0.9-2.2,2.5-4.2,3.8-6.1
           c0.4-0.6,2.1-0.3,2.7-0.4c1.3-0.2,2.9-1,4.2-1c1.3,0,2.9,0.8,4.1,0.1l-2-1.8l-0.5-1.6l-0.7,0l-0.3-1.1l1.7-3.7
           c2.3-0.3,3.4-2.2,4.3-4.2c2.5-1.6,8.6-2.1,11.4-1.7c0.1,0,3.1,1.6,3.4,1.7c0.1,0,4.3-0.1,4.6-0.1l0.6-1.1c-1.6-0.7-3.2-0.6-4.9-0.7
           l-0.7-1.2l-1.2,0.4l-0.7-1l-0.7,0.1c1.7-2.7,4-4.3,6-6.6c1.6-1.8,0.6-5.4,2.3-7.4c0.7-0.8,1.7-1.5,2.5-2.2c0.2-0.2,1.1-0.5,1.5-0.6
           l0.9,0.6c0.5-0.6,1.8-1.6,2.7-1.5c0.1-0.1,0.6-0.8,0.6-0.9c0.4-1.4,0.8-3,1.4-4.4c0.1-0.2,0.7-0.8,0.8-1c0.2-1.2,1.2-7.7,2.1-8.2
           l0.9-0.4c-0.5-1.5-1.1-4.3-0.8-5.9l-0.7-0.4l-0.3-0.9c0.3-1.3,1.4-3.1,2.4-4l0.9-0.1l1.1,0.8l1.4,0c0.3-0.5,0.2-1.5-0.1-2l1.4-0.3
           l0.7-1l-0.9-1.9c1-1.8,0.7-3.6,1.4-5.4c0.4-1,1-2,1.5-3c0-0.1,2.2-2.1,2.4-2.2l1.9,0.1l0.6-0.5c-0.3-0.6-2-1.1-2.6-1.2
           c0.8-2.9,2.2-5.5,5.1-6.7l-0.5-1l0.4-1.1c0.9-0.7,2.1-1.5,3-2.3c0.2-0.2,0.7-1.2,0.9-1.5c0.2-0.3,1.4-1.1,1.5-1.3
           c0.9-1.7,1.6-3.8,2.4-5.5l-0.3-0.6c0.6-1.6-0.5-2.9,0.5-4.5c1.5-2.8,3.5-5.1,5.6-7.4c1.1-1.3,5.1-2.5,6.6-3.3
           c1.8-1.1,3.2-2.7,5-3.8c1.4-0.9,3.2-1.3,4.7-2.2c0.3-0.2,0.5-0.4,0.9-0.5c1-0.4,2.4-0.2,3.5-0.5c1.8-0.5,3.9-1.3,5.6-2
           c1-0.4,2.1-1.6,3.2-1.6l0.5,0.4c0.3-0.3,3.1-2.8,3.2-2.9c1.4-0.8,3.6-1.1,5.1-1.8c0.7-0.3,1.4-1,2.1-1.3c2.1-0.9,4.7-2,6.9-2.6
           c2.8-0.8,5.3-0.2,8.1,0.4c0.6,0.1,1.7,0,2.3-0.1l1.9-1.7c2.9-1.1,6.8,0.5,9.8-0.6c1.4-0.5,2.9-1.8,4.3-2.4c1.6-0.7,3.4-1,4.9-1.8
           c2.2-1.1,9-6.5,9-8.9l-2.3-1.9l2.8-2.1l1.1-2.6c0.9-2.2,1.9-2.1,3.1-3.8c0.1-0.1,1.6-3.5,1.7-3.7c0.1-0.2-0.2-1-0.1-1.2
           c0.4-1.4,1.2-2.9,1.8-4.2l2.6,0.8c2.4-1.8,2.6-2.7,3.4-5.2c1.2-0.6,8.1-3.7,8.3-4.9l2.1,0.9c1.1-0.3,2.4-0.8,3.4-1.5l-0.2-0.8
           l0.3-0.8c0.5-0.4,3.4,1,4,1.2l0.9-0.5l1.7,0.3l2.4-1.4l1.4,0.1l1.4,1.2c0.9,0,2.2,0.3,3,0.6c1.5,2.6,2.9,2,4.1,2.9
           c4.6,3.5,4.8,6.3,5.9,11.5l1,1l2-0.4l0.5,0.6l-0.5,2L439,59c0.9,0.7,3.2,1.8,4.4,1.7l0.8-1.3l1.3,0c0.5-0.6,1.9-2.1,2.8-2.3
           l0.3,0.5l-2.1,2.7l0.4,1.1l-1.6,2.3c0.1,1.5,4,3.5,5.3,4.2l0.3,2.1l0.5,0.4l2.3-0.5l2.1,1.8l0.9-0.1l0.9,0.8l2,0.3l-0.3,1.8l1,1.2
           l-0.2,0.5l-1,0.5l-1.1-0.7l-0.3,3.1c0.8-1.2,3.1-2.3,4.5-2.6c0.2-0.8,0.9-2.4,1.7-2.9l-1-0.4l0-0.3l1.4-1.3l1.4,0.1l0.4,0.6
           l-0.3,0.9c2.2,0.1,3.4,3.3,4.7,3.4l0.5-0.2l0.2-1l1.3,0.2c0.1,0.7,0.7,2.3,1.5,2.6l2.7,0.1c0.3,0.9,0.5,1.8,0.7,2.7l1.7,0.2
           c1.3-3.3,6.4-2.2,8.2-0.1c1.7-0.7,4.9-0.3,6.4,0.8l5.3-0.6l0.9-1l0.8,0.2l-0.1,1.3l-1.1,1.2l0.5,0.8l1.3,0c0.1,0.9-0.1,2.6-0.8,3.2
           c0.6,1.3-0.8,3.5-0.6,4.3c0.4,1.9,1.5,4.7,3.2,5.8l-0.4,1.2c1,2.4,0.3,7.3,3.3,8.4l-1,1.1l1.1,0.4c1.3-0.7,2.3-0.7,3.6-0.9
           c2.9-0.6,3.9-1.7,6.5,0.3l1,2l0.6-0.1l0.9-0.8l1.9,1.3l0.2,1c-0.2,1-1.9,1.6-2.8,1.7c-0.9,1-1.8,2.3-2.8,3.1
           c-0.2,0.1-1,0.3-1.2,0.5c-0.8,0.5-1.5,1.5-2.4,1.9c-0.8,0.4-2.1,0.7-3,1c-4.4,1.4-7.1,2.6-8.5,7.1c-1.7,0.4-2.2,2-3.5,2.8
           c-3,1.9-2.7-0.6-4.2,3.8c-0.2,0.5-0.5,1.4-0.3,2c-1.5,2.4-3,4-5.1,5.8l-2.3,1.8c-0.2,0.3-1.2,2.4-1.5,2.9c-0.7,1.1-1.6,2-2.4,3
           c-2.5,3.7-5,20.4-4.6,25.9c0.3,3.9,1.6,7.5,2.9,11.2c0,0.1,0.1,0.9,0.1,1.1l-1.8,0.4l0.4,0.4l1.7,0.4l0.5,0.6l-0.2,1.2
           c0.1,0.2,0.8,1.3,0.8,1.4c0.4,3.5,0.7,7,1.2,10.5c0.5,3.2,3.7,10,6.1,12.4c1,0.9,2.7,1.2,4,1.6l0.2,0.4l-0.2,0.6l-4.7-0.8l-0.8,1.5
           c0,1.7,0.2,3,1.6,4l0.8-0.6l0.9,0.2l0.4,1l-0.9,0.7c-1.2,2.2,1.4,11.3-0.3,12.4c-2.2,0.2-4.8,1.2-6.8,2.3c-1.1,1-1,3.8-0.7,5.1
           c1.3,0.6,2.5,3,2.8,4.4l1.7,0.4l0.2,0.7l-0.5,0.5c-3,0-6.3,2.9-8.3,4.8c-0.4,4-3.9,5.2-4.8,7.4c-1.1,2.6-2.1,5-2.5,7.9
           c-0.2,1.6-0.1,3.2-0.4,4.8c-0.4,2.5-1.3,5.1-2.3,7.4l-1.7,4.2c-0.1,0.6,0,0.9,0,1.4l0.1,2.9c0,0.9-0.9,2.3-0.3,3.1
           c-0.2,0.7-0.6,2.5-1.2,3.1c-0.8,0.8-3.8,3.2-4,4.3c-0.3,1.6-0.5,4.2-1.1,5.7c-0.2,0.4-0.5,0.6-0.8,1c-1.6,1.9-2.6,3.6-5.4,3.4
           c-1,0.4-2.4,3.6-2.7,4.5c-1,0.6-6.1,3.6-6.3,3.9c-2.7,3.1-4.3,5.7-5.8,9.7c2.9,6.4,2.4,6.2,0.5,12.9c-0.5,1.7-6.3,5.6-7.6,7.4
           l-1.6,2.9c-0.5,0.8-1.2,2-1.2,3l0.2,2.5c0.1,0.8,0.1,1.9,0.5,2.7c2.6,5.2,2.2,5.4,6.3,9.3c0.9,0.8,1,3.7,0.6,4.8h-1.1l-0.9,1.7
           c-4.5,2.5-7.7,7.1-7.1,12.4l0.9,1.4l-0.3,0.5l0.5,0.4c-1.7,5-1.1,8-1.9,12.7c-0.5,2.5-0.8,5.2-1.4,7.7c-0.5,2-1.9,4.2-2.6,6.2
           c-0.5,1.4-0.8,2.9-1.2,4.3c-0.4,1.4-2.1,2.4-2.3,4.2c-0.2,2.1-0.3,4.8-0.2,6.9c0.1,1.3,0.6,2.7,0.7,4c0,0.8-0.8,2.7-1.1,3.2
           c-0.7,1.5-1.4,2.9-2.2,4.3c-2,3.3-3.2,4.6-1.5,8.3c-0.4,1.1-1,2.2-1.2,3.3c-0.5,2.6-0.6,5.4-1.2,7.9c-0.1,0.3-1,1.7-1.2,2.1
           c-0.8,2-1.3,5.1-1.5,7.2c-0.2,1.9,0.1,3.9-0.1,5.7c0,0.1-1.8,7.8-2,8.1c-0.7,1.5-1.9,3-2.5,4.5c-0.5,1.2-0.4,2.9-0.7,4.2
           c-0.3,0.8-1,1.7-1.3,2.5c-0.4,1.6,0,3.8,0.3,5.3c0.2,1.1,0.6,2.8,2,3.2l0,1l0.7,0.8c-3.4,3.8-3.8,5.4-4.4,10.6
           c-0.1,0.9,0,1.4-0.3,2.3c-0.4,1.6-1.6,3.7-2.3,5.3c-0.9,4.2-0.6,3.4-2.8,6.7c-0.1,2.6,0,5.5-0.4,8.1c-0.1,0.9-0.9,2-1,2.9
           c0,0.3,0.4,1.5,0.3,1.8c-0.3,2-1.2,4.1-1.7,6.1c0,0.1-0.5,0.7-0.5,0.8l-1.5,0.2c-1,0.6-5.4,6.4-5.5,7.2c-0.3,1.2-0.4,2.7-0.9,3.8
           c-0.1,0.3-1.1,1.5-1.2,1.7c-0.6,2.3-0.8,5-1.2,7.3l0.9,1.9c0.3,1.7-3.4,3.9-4.3,4.8c-2.2,2.3,0,8.9,1.4,11.1l-1.9,5.3
           c0.3,0.6,0.4,1.7,0.2,2.3l1.4,2.9l0.9,0.4l0.4,0.7l-2.1,2.1l-1.6-0.5c-0.6,1.3-1.9,3.9-2.9,5l-3-0.1c-1.1,0.7-3.7,3-4,4.4l0.5,1.3
           c-2.9,2.1-1.7,2.5-2.3,5.3c-0.4,2-1.1,4.1-1.7,6.1c-0.3,0.9-1.1,1.7-1.3,3l-1.1,0.8l-0.3,1.2c-1.9,0.8-1.2,4.3-1.5,5.2
           c-1.2,3.6-3.8,6.5-6.2,9.4l-1.7,0.3c-2.5,2.7-3.1,7.8-4.7,11.1c-1.1,2.3-3.4,5.8-5,7.8c-0.1,0.1-2.2,1.2-2.4,1.3
           c-0.1,0.7-0.5,2.3-1.2,2.7c-2.6-0.4-5.1,0.4-7.2,2.1l-1.8,1.5c-0.6,0.5-1.3,3.6-1.3,4.2c0.4,3.1,3.3,8.1,1.6,11.3l-0.9,0.1
           c-0.1,0.2-1.3,1.4-1.4,1.5c-0.4,0.9-0.5,2.2-0.8,3.2c-0.5,1.5-1.7,3.7-2.6,5.1c-0.1,0.1-1.2,0.5-1.3,0.6c-2.5,2.6-5.1,5.6-7.8,8
           c-1.4,1.2-3.7,2.3-5.2,3.2c-1.5,0.9-3.7,1.2-5.3,2c-2.1,1.1-3.7,3.5-5.6,4.9l-3.8,2.3c-1.2,0.7-1.5,0.9-1.7,1
           c-0.2,0.1-0.4,0.3-1,0.9l-1.6,1.5c-0.8,1.1-1.8,3.3-2.3,4.6c-1.7,4.3-1,12.2-3.5,15.1c-1.4,1.7-3.5,3-4.9,4.7
           c-0.1,0.1-1.9,3.7-2,3.9c-1,2.7-1.7,5.7-2.6,8.5c-0.7,2.2-1.8,4.5-2.4,6.7c-0.8,2.8-1.2,5.9-1.8,8.8l-0.4,0.3
           c-1.1,3.2-2.1,6.6-3.4,9.8c-0.4,1-1.4,1.9-1.7,2.9l-4.6,13.2c-0.1,0.3-1.1,1.4-1.2,1.7c-0.6,1.5-1.2,3.5-1.5,5.1
           c-1.7,7.1,0.2,19.2,1.3,26.4c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.3-0.8,2.4-0.8,2.6c-0.1,1,0.3,2.2,0.2,3.3c-0.1,1.3-1,2.9-0.9,4.2
           c0.1,1.4,0.5,3.2,0.7,4.6l-1,2.6c0.5,1.2,0.7,3.1,0.4,4.4l0.7,0.2l0.2,0.5c-6.2,4.8,0.3,8.6,0.5,10.9c-0.2,0.4-2.1,4.6-2.1,4.6
           c0.1,3.1-0.1,6.3,1,9.3c0.3,0.8,1.4,2.1,1.1,3c-1.5,0.8-3.4,3.4-3.5,5.2l-1.5,0.5l-0.4,0.9l0.2,1.3c-0.7,2.9-7.1,3.9-7.5,4.5
           c0.1,1.8-0.4,3.7-0.8,5.4c-1.1,5.5,1.5,8.3,4.2,12.6l-0.2,2.1l0.9,1.9l-0.2,0.7c-0.5,0.4-1.7,0.4-2.2,0.3l-0.9-0.6l-1.3-3.9
           l-1.7-0.2c-0.8-1.2-2.5-3.5-3.8-4.3l-2.2-0.3l-1.7-1.7l-0.5,1.1l-0.5,0.2l-0.7-1.6c-0.7-0.8-2.8-1-3.7-1l-4.3-3.2l-0.7,0.1
           l-3.2,3.3c-0.4,2.1-1,7.1-3.6,7.4l-1.3-0.5c-0.8-1-1.5-2-2.3-3l-1.1,0c-1.2-2.9,1.3-7.7,0.7-11.2c-0.7-4.2-3.4-5.1-5-7.6l-1-2.6
           c-1.3-3.6-1.2-4.6,2-7.1c-0.4-0.8-0.6-2.4-0.2-3.3c3.2-1.1,2.6-5.2,1-7.4l0.8-1.2c0.7-0.2,2.6-1,2.9-1.9c-0.5-1.7-1.9-9.2-3.7-9.8
           c-0.2-0.9-0.6-2.6-0.5-3.5l0.1-1c-1.6-5.2-4-10.9-4.1-16.4c-1.6-1.6-1.8-4.1-3.1-5.8c-0.1-0.1-3.5-3.1-3.9-3.4c0,0-0.4-1.1-0.5-1.2
           l0-0.2c-0.1-2-0.8-7.9-2.2-9.2l0-2.8c-0.9-1.5-4.1-6.8-5.4-7.8c-1.3-0.9-2.9-0.8-4.1-2.9c-0.9-1.6-0.9-3.6-1.9-5.3
           c-1-1.6-2.8-3.6-4.3-4.7c-1-0.7-2.4-1.2-3.5-1.9c-1.3-0.8-2.4-1.9-3.7-2.7c-1.5-1-3.3-1.7-4.9-2.6c-2.7-1.4-5.2-3.3-8-4.6
           c-2.7-1.2-6-2.4-7.8-4.9c1.1-0.4,5.4,2.4,6.5,3l0.8-0.2l0.5-0.9c0-1.2-3.3-3.6-4.4-4.1l-1.6,0.5l-1-0.4l-1.5,1.2l-0.9-0.2
           c-0.9-1.1-2.2-2.2-2.6-3.6l1.1-0.6l0.3-1.2l-1,0.2c-0.7-0.9-1.2-3.3-1.4-4.4l-0.6,1.3l-0.8-0.1l-0.5-2.2l-1,0.2
           c-0.5-0.4-1-1-1.3-1.4l0.3,2.7l-0.5,1.1c-0.8-0.1-2.8-4.4-3.4-5.4l-1.8-0.8l-0.2,0.4l0.6,3.6l3.2,2.1l0.5,1.1l-0.5,0.5
           c-4.8-2.2-6.6-5.3-10.7-7.7l-1.6,0.6c-0.4-0.5-0.4-1.5-0.2-2.1c-0.5-0.8-1-1.5-1.8-2.2c-1.5-1.2-3.4-2.5-4.6-3.9
           c-1.9-2-3.6-4.5-5.3-6.7c-0.3-0.4-1-0.8-1.3-1.2C115.4,743.6,112.4,737.1,108.9,735.3z"/>
                <path className="st2" d="M476.9,79.4L462,82l-2.3,2.3l1.1,3.4c1.1,1.8,0.6,3.3,1.5,5.2l2.2,3.8c-3.9,1.4-7.5,4.2-11.5,3l-6.5-4.2
           c-0.7-0.3-3.6-0.2-4.2-0.7c-0.1-0.1-4.9-5.3-5-5.4c-2.3-3.3-3.1-6.9-6.2-10.1c0.2-0.9,1.5-3.4,2.3-3.8l16.2-8.2"/>
                <path className="st2" d="M349.6,82.7c4.3,3.7,9.2,7.9,14.1,10.7c5,2.9,8.8,3.4,13.4,8.2c0.7,3,1,6.5,0.8,9.5c-1.1,1.8-2.4,4.7-3.8,6.2
           l-4.7,3c-1.8,0.7-4.7,0.5-6.7,0.9l-2.4,2.1c-0.2,2.1-1,4.9-2.3,6.6l1.4,3.2l-2.4,2.1l0,5c2.3,1.4,4.6,3.4,6.4,5.4l-0.4,4.5l2.3,4.1
           l1.9,0.5l3.7,1c3.2,0.1,3.9-0.8,8.2,0.7l3.1,3.7c2.4,2.8,4.8,3.1,5.1,6.8c0.1,0.8,0,3.2-0.3,3.9c-0.5,1-2.2,2.4-2.6,3.3
           c-1.1,2.6-0.5,6.5,0.9,8.9c1.5,2.3,6,6.7,8.1,8.9l0.9,6.3"/>
                <path className="st2" d="M394.2,198.4l6.5,0.2c4.9-1.8,8.3-6.1,11.4-10.1c0.5-0.1,5.2-1.4,5.3-1.5c1.6-0.9,4.5-4.3,5-6.2
           c-0.4-3-0.4-6.4,0-9.4c0.2-0.3,1.7-2.3,1.8-2.4c1.2-1,8.7-5.7,10.2-6.3c0.9-0.4,5.6-1.2,6.1-1.5c3.1-1.7,7.7-6.8,11.2-8.4
           c2.1-0.9,5-1,7-2.1c0.9-0.5,1.3-1,2.2-1.7l4.4-3.3c2.1-1.9,3.8-4.4,5.9-6.2c1.6-1.3,4.2-2,5.8-3.3c0,0,3.2,1,3.9-0.8s2.8-4,2.8-4
           s-1.8-0.8-2.8-1.8s-2.2-3.5-0.5-5.2s2.8-2.8,5.8-2.2s6,0,7.8-1.8s5-2,6.2-2.5s3.2-1.5,4.8-1.5s6.4,1.5,6.4,1.5"/>
                <path className="st2" d="M377.7,221.5c0,0-5,0-6.5-0.5s-1.8-1.5-3.5-3.2s-0.2-4,1-6s-2-4-2.2-6.2s0-4-3.2-6s-2.8-5.8-2.8-5.8
           s-5-0.2-4.3-2.1l0.3-4.4c0.1-0.9,0.3-1.4,0.1-2.2c0-0.1-2.4-6.8-2.4-6.9c-1.2-2.4-3.5-3.9-5.7-5.2l-5.9-3.4
           c-2.6-1.3-11.4-3.5-13.1-4.9c-1.7-1.4-3.3-4.2-4.9-5.9c-1.5-1.6-6.9-2.7-5.2-6s2.5-5,0.8-6.8s-2.2-2.5-3.8-1s-3.2,2.8-5.2,0.5
           s-2.5-3.8-2.5-3.8s-3,0.5-6,0.2s-8.8-1.2-6.8-4.2s3-3.2,1.2-5.2s-5.2-2.8-7-2.8s-4.8,0.2-4.8,0.2l-5.1,0"/>
                <path className="st2" d="M357.5,258.3c1.5-3.1,3.8-7,6.1-9.5c2.4-2.6,7.2-5.6,9.3-8.1c2.3-2.9,1.2-7.5,2.4-10.9c1.7-4.7,2-2.5,2.4-8.3"
                />
                <line className="st2" x1="344.7" y1="261.3" x2="357.5" y2="258.3" />
                <path className="st2" d="M254,181.1l5,5.1c2.9,1.4,8,1.4,11.1,1.2" />
                <path className="st2" d="M270.1,187.4l1.4,0.9l2.7,1.7c0.5,0.5,0.5,1,0.9,1.6l1.7,3.1c0.7,1.8,0.7,4.5,1.5,6.2c0.3,0.6,0.7,0.8,1.2,1.4
           c3.1,3.4,5.6,5,9.6,7.4c3.8,2.3,6.3,2.3,9.6,5.9c1,4.3-0.3,6.1-0.3,9.5c0,2.8,0.9,5.7,0.9,8.5c0,2.6-1.2,1.1-0.1,5.2l0.3,1.2
           c0.4,0.2,4.8,2.1,4.9,2.1c0.5,0.1,14.2-0.2,15.7-0.3c4.7-0.3,9.4-1.8,14.1-0.7c4.4,2.4,7.2,7.7,9.4,12c0.4,0.8,0.8,1.2,1.1,2.1
           c0,0.2,0.1,5.7,0.1,6.2"/>
                <path className="st2" d="M389.1,279.3l-4.1-4.7c-3.8-0.8-9.2,0-12.8,1.3l-4.9-2.3l-1.7-4.1l-4.4-0.5c-0.2-0.3-2.7-3.7-2.7-3.8
           c-0.7-1.9-0.8-5.1-1.1-7.1"/>
                <path className="st2" d="M389.1,279.3l2.2,1.3l4.5,2.5c0.8,0.3,1.3,0.1,2.2,0.1c3.4,0.2,6.6,0.5,9.7,1.9c2.6,1.2,5.6,3.6,7.9,5.3
           c0.5,0,5.8,0.5,5.9,0.5c1.5-0.2,8.3-3.9,9.9-5l-1.5-5c2,0.5,4.4,0.8,6.2,1.5c1.5,0.6,3,1.1,4.4,1.8c1.8,0.9,3.6,2.1,5.5,2.9
           c6,2.5,12.3,4.5,18.4,6.8"/>
                <path className="st2" d="M189.6,264.4c0.8,1.4,1.5,2.9,2.2,4.4c1.7,1,4.1,2,5.6,3.2l2.5,2.9c2.5,2.9,5,5.4,8.2,7.4
           c4.3,2.7,8.7,5.5,13.3,7.5c3.8,1.7,8.4,2.4,12,4.4c3.7,2.1,2.6,3.5,7.6,4.4c0.5,0.1,0.8,0.3,1.3,0.3c5-0.3,8.7-2.1,14.1-1.3
           l2.3-2.3c0.1-2.3,1.8-5.7,3.6-7.1l3.2-1.6c0.6-0.3,0.9-0.6,1.6-0.8l5.2-0.7c1-0.1,1.6-0.4,2.6-0.3c0.1,0,6,1.8,6.1,1.8
           c0.2,0.1,2.7,2.8,3.2,3.2c1.4,1.2,3.2,2.2,4.7,3.3l3.7,0.2c1.3-0.8,3.1-2.3,4.6-2.9c1.2-0.5,3-0.4,4.3-0.7c1.7-0.5,3.1-1.4,5-1.9
           l4-1c1.6-0.7,3.2-2.5,4.7-3.5c1.6-1,3.8-1.8,5.1-3c2.8-2.4,5.5-5.5,8.2-8.1l1.8,0.2l2.3,2.7c3.7-4.9,7.9-9.5,12.1-13.9"/>
                <path className="st2" d="M362.3,315.7c3.7-3.6,7.7-7.1,11.9-10c0.7-1.7,0.8-3.5,0.9-5.2c0-0.8,0.4-3.4,0.8-4.1c1.1-1.8,6.1-5.4,7.9-6.5
           c0.1-0.5,1.3-5.6,1.4-5.7c0.1-0.2,3.6-4.4,3.9-4.8"/>
                <path className="st2" d="M162.1,324.5l3.5,1.9c3.9,5.3,4.2,9.3,6.8,14.2c2.2,4.2,8.1,8.1,12.1,6.6s5.2-0.2,6.2,0.5s3,4,3.8,6
           s2,7.2,2,8.8s0.5,3.8,2,3.8s6.5,1.5,6.5,1.5l3.8,3"/>
                <path className="st2" d="M208.7,370.7l3,0.8c0,0,2.2,1.2,3.8,0.8s4.2,0.2,6.2,1s5,0.5,5.8-0.5s6.5-6.2,7.2-7.8s3-6,3-6s3-3,5-3
           s1.2-2.2,0.8-4.5s0.5-3.5,1.8-6.5s2.2-2.2,5.8-1.2s3.2,2,3.8,5s2.2,2.8,3.2,0.8s3-4,3-4s2.5,0,4,0.2s6.5-3.8,6.5-3.8s4.2,0.2,7-1.1
           c0.9-1.1,4.5-6.5,4.9-6.9c0.1-0.1,4.1-2.2,4.5-2.4l5.4,0.3c5-3.1,9.7-8.2,15.4-9.8c2-0.5,4.5-0.2,6.4-0.9c2.5-0.9,4.7-3,7.2-3.9
           l3.7-0.6c0.7-0.1,1.1-0.3,1.8-0.3c1.4,0,3.1,0.8,4.5,0.9c1.6,0.2,3.3,0.1,4.9,0.2l5.9-4.5c6.6-0.2,12.8,1.2,19.2,2.7"/>
                <path className="st2" d="M362.3,315.7c0.5,2-0.8,5.2-2.2,6.6c-4.1,1.8-6.1,2-9.4,5.1l-1.5,4.1c-0.1,1.9-0.5,6.1,1,7.2
           c2.8,2.2,3.9,2.2,6.8,5.1l0.9,4.4c-1.8,5.2-4,7-6.6,11.1c-1,1.6-1.6,3.6-2.5,5.3c-1.6,2.9-3.8,5.9-6,8.4c2.4,6.8,2.9,14.1,2.7,21.2
           l-0.1,2.9c-0.5,2-1.9,4.1-2.5,6c-2.4,6.8-4.6,13.6-6.9,20.5c-0.4,1.1-0.5,2.6-0.8,3.8c-1.8,1.6-4.1,4.2-4.9,6.6l1.1,2.7
           c2.1,0.8,5.2,4.1,6,6.2c0.8,2.2,1.5,11.7,1.1,13.8c-0.5,2.4-2.2,5.2-3,7.5c-1.2,3.5-2.3,7.8-2.2,11.6c-4.2,1.2-10.5,3.3-14.1,6
           c0,4.2-1.1,8.9-2.5,12.8l-2.6,2.1c-2.3,0.2-11.8,1.5-13.7,3l-3.2,3.3c-1.6,1.7-3.4,4.3-4.1,6.6l0.9,2.6c-0.4,2.6-4,6.1-6,7.5"/>
                <path className="st2" d="M76.5,549.6c5.2,2.6,10.6,5.1,16.1,7.1c2.8-0.6,3.9,0.3,5.6-0.6c1.8-1.1,2.8-4.9,4.2-6.8
           c2.8-3.7,4.5-5.7,7.8-8.1c2.2-1.6,4.2-3.9,6.4-5.4c2-1.4,6-4.3,8.2-5.2c3.9-1.6,5.9-2.2,9.6-4.8c3.6-0.2,7.3,1.9,9.1,2l6.5-1
           l3.2-0.5l5.6,2.3c0.7,3.1,2.2,3.9,3.6,6.2c1.3,2.1,2.1,5.1,3.2,7.4l4.9,3c0.7,3.7-1.4,5.3-2.2,8.3c-0.1,0.2-0.9,6.2-0.9,6.3
           c0,0.1,1.5,4.3,1.7,4.7c-2.3,4.6,1.7,9.9,5.4,12.3l4-0.4c1.7-1.5,3.7-2.9,5.7-4.1c1.8,0.5,4.4,1.6,6.1,1.8c1.8,0.2,4.6-0.4,6.4-0.6
           "/>
                <path className="st2" d="M146.5,765.8c0-0.6,0-7.5,0-7.6c0.7-3,6-13.2,7.2-16.2c-1.2-3.5-4.8-13.2-3.8-17l2.3-10.2
           c0.8-3,1.6-4.7,2.1-7.8c0.1-0.7-1.4-7.2-1.4-8.4c0-5,3.1-12.8,4.5-17.5c0.2-0.8,2.3-5.3,2.5-6.1c3,0.2,11,2.7,13.5,1.8
           c0,0,5.6-0.9,5.8-1c1.5-1.6,4.2-5,5.8-6.5c2.4-2.3,4.2-7.5,7.7-6.9c3.4,0.5,5.1,4.6,8.4,5.6c4.8,0.5,7.9-2.2,12.2-2.9
           c2,0.7,5,1.3,6.8,2.3c2,1.1,3.7,3.4,5.7,4.5l3.2,0.9l1.6,0.5c2.5-0.4,6.1-2.2,7.8-4.1c2.6-0.7,7.5,0.7,9.8,1.7"/>
                <path className="st2" d="M151.7,500c0,0-1,1.5-3,1.5s-3,1.2-5,1.5s-3.8,1.8-2.5,3.2s1.2,1.5,1.2,3.5s1.2,3.2,2.8,3.5s4.8,1.2,5.5,3.2
           s3,4,5.2,1s2.8-4.2,4-3.8s5.8,2.8,6.8-1s1.2-4-0.8-6s-3.2-4.2-4.2-5.5s-2,1.5-2.5,2.8s-2.8,0.8-2.8-1.2s-0.5-2-1.8-3.5
           S151.7,500,151.7,500z"/>
                <path className="st2" d="M85.6,498.9c0,0,3.6,1.1,4.8,2.1s3.8-2.5,6.2-0.8s9,2.8,9-1.5s-0.8-10.5,2.2-6.5s4,3.2,5,1s3.2-5,4-6
           s3.5-2.5,5-2.2s4.2-0.2,4.2-0.2s0.8-5,2-4.8c1.2,0.2,3.5,0.5,5.2-1.8s4.5-5,4.5-5s2.5-0.5,3.5-2s5.8-2,6.8-0.2s2.8,2,4,0.8
           s5.5-4,8.5-3.2c2.1,0.5,3.2,1.5,4.5,1.6l1.2,4.7l3.4,2.8c0,0,1.2,2.2,2.6,2.4s3.2,0.5,4,1.4s2.1,1.2,2.8,1.2s8.6,0.8,9.6,1.1
           s3.2-0.2,3.2-0.2l2.4-1.8l4.4-0.2l-0.4,3l1.1,2.5c0,0,1.9-1.5,3-1.8s1.8-0.2,2.4,0.4s3,1,4.6,0.4s3.5-0.6,4.1,0s3.2,1.2,3.9,1
           s1.2-1.6,1-3.6s-1.2-3.2-0.6-4.4s1.6-2.4,1.6-2.4l2.9-3.9"/>
                <path className="st2" d="M394.2,198.4c0,0-0.3,3.8-1.6,4.8s0.2,3.8,1.2,5.2s0.5,3-0.8,4s-3.2,2-3.2,3.5s0.8,1.2-1.5,2.5s-5,1.8-6,0.2
           s-1.5-2.8-2.8-1.5s-2.5,1.5-2,4.2"/>
                <path className="st2" d="M268.8,152.1c0,0,3.4,3.9,3.9,4.9s1.5,1.5,1.5,1.5l6.5,0.2c0,0,4.2,3.5,5.5,4.8s2.5,3.2,3.2,6.2s1.2,5,1,7.2
           s-1.2,2.2-2.5,1s-2.2-2-3.2-3.5s-2.5-1.8-3.5-0.8s-5,4.8-5,4.8l-2.2,2.8c0,0-2.2,0-3.2,0.2s-1,4.3-0.6,5.9"/>
                <path className="st2" d="M395.7,76c-3,1-3,1.8-3.8,3.5s-3.8,9,0.2,9.5s4.8,0,6,1s1.5,1.5,1.8,3.5s1,7,0.8,8s2.2,1.5-1.8,1.8
           s-3.5,1.5-3.5,3.5s0,4,1.5,5.5s2.8,1.2,3.2-1.2s2.2-2.8,3-1.2s3.8,3.5,3.8,5s1,2.5,2,3s3.8,1.8,4,4s0.8,2.2,4,2.5s4.8,0,6.8,0.2
           s3.5-1.2,1.5-2.8s-2.8-3-3-5.2s-0.5-6.5,3-6.5s5.2-0.2,6.2-1.2s1.2-2,0-3s-7-1.8-5.2-3.8s1.5-3.8,1.5-5.2s-0.5-2,0.8-3.2
           s0.8-2.2-0.5-3.5s-2.8-2.8-4-2.8s-3-1-1.5-2.5s2-4.5,0.2-5.8s-2.5-1.8-2.5-4.2s-1.5-5.5-1.5-7s0.8-2.8-2-3.5s-3.2-5.2-5.2-2.5
           s-1.8,3.8-4.2,4.2s-2.2,1.8-3.8,3.2s-3.8,3.8-3.8,3.8S398.7,75,395.7,76z"/>
                <path className="st2" d="M208.7,370.7c-0.8,1.8-5.2,1.8-8.2,2.2s-1,3.8,1,5.5s-0.5,3.2-1,5.2s-0.8,2.5-2.2,3.8s-0.2,3.8,0.2,5.5
           s1.5,2.2,0,5.5s-4.4,8.7-4,11.5c0.4,2.2,0.6,5.1,2.1,7c3.4,4.4,9.6,5.6,14,9.7c-4.2,0.6-10.4,4.3-13.8,6.6l-8.1-3.1l-8.3,1.4
           l-4.9-4.2l-14.4-3.6l-9.9-0.9l-8.6-4.6l-6.4-1.5l-10.4,2.7l-11.8,0.9l-3.2-0.1l-4.9-2.2"/>
                <path className="st2" d="M196.7,433.3c0,0,3.2,3.4,4.2,5.2s2.2,4.2-1.2,5.8s-0.5,7.8-0.5,7.8l0.5,6.8c0,0-0.8,4-2,5.8s-0.5,8.8-0.5,8.8
           s2.8-1.5,4-2.5s1.8,1.2,2.8,3.5s7.8-1.2,9-2s3.8-3,3.8-3s6.5,4,6.7,4c2.9,0.1,10.8,2.7,13.3,4.4c0.1,0.1,2.3,2.6,2.6,2.9
           c-0.3,1.9-0.4,4-0.9,5.9c-0.4,1.7-1.5,3.6-1.8,5.3c-0.7,4.5,2.2,9.9,2.1,14.6c0.4,0.3,4.5,3.2,4.7,3.3l7,1.8
           c2.5,0.2,5.3-0.9,7.8-0.9c2.6,0.1,5.7,0.8,8.2,1.2c4.2,0.9,9.4,2,13.8,1.5c2.8,1.5,5.7,4,7.7,6.5c0.8,2,1.1,5.5,0.4,7.7
           c-2,3.5-5.4,3.8-7.9,6.5c-0.2,2.3,0,5,0.6,7.2c3.9,3,8.7,4.2,12.3,7.5c0.8,2.1,0.2,5.8-0.9,7.7c1,2.1,2.3,4.2,3.1,6.3
           c0.9,2.2,1.4,4.9,2.4,7.1l2.1,2.3c5,2.9,10,6.1,15.1,8.8c2.5-0.5,5-0.9,7.5-1.2l1.3,1l2.5,1.9c2.4,2.9,3.7,7,5.9,10.1
           c0.1,0.2,2.4,2.9,2.5,3c1,0.9,2.5,1.6,3.6,2.4c3.1,2.3,6.1,4.9,9,7.5c2.2-0.4,8.7-1.7,10.6-3l0.6-1.6c1.9-4.9,0.7-3.4,0.9-7.9
           c0.1-2.3,1.3-7.8,2.1-9.9l6.6-17.7c1.3-3.4,1.8-5.5,3.3-8.8l3.6-5.1c1.3-1.9,3.6-4.9,4.3-7.1c1.3-3.7-0.1-8.5-1.8-11.9l0.3-1.5
           c0.9-3.6,1.2-3.7,3.7-6.2c2.6-2.7,6.9-7.6,11.2-7.1c1.8,1.2,4.1,5.9,5,7.7"/>
                <path className="st2" d="M266.4,511.7c-1.5,1.6-4.7,2.9-6.8,3l-3.2,4.2l-2,0.7l-4.1,1.5c-0.1,0-3.4,3.7-3.5,3.8
           c-1.3,2.3-2.2,5.5-3.2,7.9c-3.5,1.7-6.1,4.5-8.5,7.4c-0.7,0.8-0.9,1.4-1.7,2c-2.2,1.6-6,2-8.1,3.7l-3.7,4.6l-1.8,2.3
           c-2,0.3-4.3,0-6.2,0.4c-2.8,0.7-4.1,4.3-6.8,5.1c-2.4-0.5-5.5-2.5-7-4.4l-3.1,2.1c0.5,5.7,0.6,11.5,0.3,17.2
           c0.1,2.5-0.8,9.6-2.2,11.7c-1.3,2-4,3.5-5.5,5.4l-3.1,4.9c-4.4,6.9-7.3,14.7-12.8,21c-1.2,1.4-3.5,2.8-4.9,4.1
           c-2.2,1.9-4.3,3.9-6.4,5.7c-3.4,2.9-8.2,6.2-10.9,9.6c-0.6,0.8-0.8,1.3-1.3,2.2l-2.6,4.4c-0.8,1.9-1.1,4.2-1.8,6.2
           c-0.6,1.9-1.5,3.7-2.2,5.6c-2.9,1.9-4.4,0.8-6.8,1.3c-3,0.7-5.6,3.6-8.4,4.5c-0.6,0.2-1,0.1-1.6,0.1c-5.5,0.5-5.9-0.7-10.8-1.4
           l-3.6,0c-5.4,0-8.1,0.8-13.5-1.3l-5.1-2"/>
                <path className="st2" d="M292.4,556.3c-2.3,0.6-4.6,1.4-6.9,1.8c-2.1,0.4-4.7,0.2-6.7,0.7c-0.1,0-5.3,2.7-5.4,2.9
           c-1.8,1.3-4.4,4.4-6.3,6.1c-0.5,0.4-0.9,0.6-1.3,1.2c0,0.1-3.1,7-3.1,7.2c-0.7,1.9-0.6,4.3-1.3,6.2c-1.6,4.3-6.1,6.7-6.9,11.4
           c-0.6,3.8,1.3,10.9,1,12.9c0,0.1-2.9,8.3-3.1,8.9c-0.2,0.4-1.3,2.6-1.4,2.9c-0.4,2.2,0.2,5.2,0.2,7.5c-1.8,1.8-7.5,8.9-8.2,11
           c-0.2,0.4-1,7-1.2,8c-0.4,2.3-1,4.5-1.5,6.8c0.9,3.8,3.1,6.9,5.3,10c0.6,0.8,1.1,1.2,1.5,2.2l0.9,4.7l0.5,2.3
           c0.4,2.5,0.8,5.1,1.5,7.6c1.9,1.1,4.6,2.3,6.2,3.6c1.4,1.2,3.1,4.7,2.7,6.6l-2.6,3.5c-0.2,2.4,0.2,5.5,1.1,7.7
           c-0.7,2.9-5,5.2-7.4,6.3c-1.1,0.5-2.5,0.7-3.6,1.2c-0.5,0.2-2.4,1.9-2.7,2c-2.6,0.8-7.7,1-11.2,2c-2.8,2-2.4,6.1-3.9,8.8
           c-1.5,2.8-4.2,5.3-5.9,8c-0.7,1.2-1.3,3.2-1.8,4.5c-0.8,2-2.1,4.7-2.6,6.8c-0.7,3.3-0.6,8.8,0.6,12.1c0.9,2.5,3,5.3,3.6,7.9
           c0.2,0.6-0.1,9.2-0.2,10.7c2,3,4.1,5.9,6.3,8.6l0.3,2.3c-1.9,2.5-4.5,2.9-6,4.5l-1.7,2.7l-0.9,1.4c-0.2,1.9,0.3,4.7,1.2,6.3
           c1.9,1.9,4.7,3.8,7.2,4.8c4.2,5.2,2.6,14.4,4.4,20.8c2.4,3.5,7.6,4.8,11.5,5.9c0.7,1.1,3.6,4.3,5,4.5c1.2,0.2,2,0.2,3.2,0.3
           l6.4,0.6"/>
            </g>
            <g>
                <path className="st3" d="M380.1,599.4c-7.6,12.6-47.8,81-51.4,89.7c-4.3,10.2-30.7,25.5-38.3,33.2c-7.7,7.7-8.5,24.7-23,61.3
           c-5.3,13.5-7.6,30.5-8.5,46.6c-8.8-1.7-19-4.5-22.3-8.2c-6.1-7-7.8-38.3-7.8-38.3s-20-47-1.7-62.7c18.3-15.7,31.3-27,31.3-33.9
           c0-3.3-3.5-9.1-7.4-15.5c-4.3-7-9.1-14.7-10-20.2c-1.7-10.4,8.7-12.2,9.6-22.6c0.9-10.5,0-12.2,7-44.4
           c4.8-22.2,23.2-27.8,34.2-29.2c-0.2,3.7,0.8,8.6,5.9,13.3c10.1,9.3,24.4,12.6,24.4,12.6s16.8,28.6,30.3,25.3
           c13.5-3.4,10.1-33.7,16-44.6c5.9-10.9,12.6-17.7,12.6-17.7l-3.4-13.5l11.8-10.9l6.1,5C385.8,565.5,378.3,599.8,380.1,599.4z"/>
                <path id="kaohsiung" className="st4" d="M246,898.6c-3,6.1,3.5,17,4.9,19.2c-1.6-2.3-10.4-14.2-22.8-15c-6.1-0.4-9.3,2.9-10.8,6.1
           c-2.3-6.9-8.4-17.3-7.1-22.3c1.7-6.8,9.4-12.8-7.7-57.9c-11.8-31.4-38.9-48.8-54.3-56.4c2.2-15,5.7-45.2,1.2-59.9
           c-6.1-20,9.6-36.6,9.6-36.6s11.3,5.2,17.4,1.7c6.1-3.5,16.5-15.7,16.5-15.7s28.7,11.3,40,12.2c5.3,0.4,12.1-0.9,17.9-2.4
           c3.9,6.3,7.4,12.2,7.4,15.5c0,7-13,18.3-31.3,33.9c-18.3,15.7,1.7,62.7,1.7,62.7s1.7,31.3,7.8,38.3c3.3,3.7,13.5,6.5,22.3,8.2
           c-1.4,27.8,1.7,53,1.7,53S249.4,891.8,246,898.6z"/>
                <path className="st3" d="M293.3,549.1c0,0-1.4,2.5-1.7,6.1v0c-11,1.4-29.4,7.1-34.2,29.2c-7,32.2-6.1,34-7,44.4
           c-0.9,10.4-11.3,12.2-9.6,22.6c0.9,5.5,5.7,13.2,10,20.2c-5.8,1.5-12.6,2.8-17.9,2.4c-11.3-0.9-40-12.2-40-12.2
           s-10.5,12.2-16.5,15.7c-6.1,3.5-17.4-1.7-17.4-1.7s-15.7,16.5-9.6,36.6c4.5,14.7,1,44.9-1.2,59.9c-6.8-3.4-11.3-4.9-11.3-4.9
           s-39.2-33.2-31.5-44.3c7.7-11.1,2.5-23.9,2.5-23.9s-15.4-23.4-20.3-44.5c11.1,3.8,32.6,10.2,42.7,7.1c13.9-4.3,15.7-12.2,15.7-12.2
           s6.1-16.5,10.5-20.9c4.4-4.4,27-22.6,34.8-41.8c1.7-4.1,2.9-8,3.8-11.5c3.3-13,2.3-21.6,2.3-21.6l11.3,2.6c0,0,19.2-15.7,31.3-19.2
           c12.2-3.5,1.7-7,9.6-16.5c3.2-3.9,8.2-6.9,13.1-9.1h0c8.1,0.1,15.6,0.5,18,2.2c2.1,1.5,4.8,4.4,7.2,7.2c-0.3,0.7-0.5,1-0.5,1
           s2.5,8.4-6.7,15.2C271.4,544,293.3,549.1,293.3,549.1z"/>
                <path id="chiayi" className="st4" d="M195.1,575.5c-0.9,3.5-2.2,7.4-3.8,11.5c-7.8,19.2-30.5,37.4-34.8,41.8
           c-4.4,4.3-10.5,20.9-10.5,20.9s-1.7,7.8-15.7,12.2c-10.1,3.2-31.5-3.3-42.7-7.1v0c-0.4-1.7-0.7-3.3-1-5
           C83.3,627.7,60.3,620,60.3,620s12.8-49.4,17.9-70.7c0.1-0.5,0.2-1,0.3-1.5l21.3,9.6c0,0,31.3-37.4,51.4-30.5
           c20,7,16.5,18.3,16.5,18.3s-2.6,26.1,2.6,30.5c5.2,4.4,13.9-6.1,20-2.6C192,574,193.6,574.8,195.1,575.5z"/>
                <path className="st3" d="M262.7,511.7c-4.9,2.2-9.9,5.3-13.1,9.1c-7.8,9.6,2.6,13.1-9.6,16.5c-12.2,3.5-31.3,19.2-31.3,19.2l-11.3-2.6
           c0,0,1.1,8.6-2.3,21.6c-1.4-0.7-3-1.5-4.7-2.5c-6.1-3.5-14.8,7-20,2.6c-5.2-4.3-2.6-30.5-2.6-30.5s3.5-11.3-16.5-18.3
           c-20-7-51.4,30.5-51.4,30.5l-21.3-9.6c2.2-11.1,2.2-30,1.9-47.2c10.4,2.1,24.8,4.6,26.4,2.9c2.6-2.6-0.9-13.1-0.9-13.1l8.7,2.6
           c0,0,20-21.8,26.1-24.4c6.1-2.6,18.3,0,23.5,0.9c5.2,0.9,10.5,14.8,10.5,14.8s23.5,0,26.1,0.9s17.4,0.9,17.4,0.9l3.4-9.7
           c9.2,0.7,17.3,0.9,17.3,0.9s-7.9,32.4,0.7,33.8C244.2,511.8,253.8,511.6,262.7,511.7z"/>
                <path id="changhua" className="st4" d="M221.7,476.3l-3.4,9.7c0,0-14.8,0-17.4-0.9s-26.1-0.9-26.1-0.9s-5.2-13.9-10.5-14.8
           c-5.2-0.9-17.4-3.5-23.5-0.9c-6.1,2.6-26.1,24.4-26.1,24.4l-8.7-2.6c0,0,3.5,10.5,0.9,13.1c-1.6,1.6-16-0.8-26.4-2.9
           c-0.3-17.6-0.9-33.5,0.3-37.2c2.6-7.7,10.2-25.6,20.4-38.3c1-1.2,2.3-3.2,4-6c4.5,2.6,9.4,4.6,12.2,2.9c5.8-3.6,20.2-3.6,20.2-3.6
           s39.6,6.5,43.2,10.8c2.3,2.8,9.8,3.2,15.2,4.5c0.6,2.3,7.6,29.6,0.7,35.8C192.2,473.2,208.1,475.2,221.7,476.3z"/>
                <path className="st3" d="M195.8,433.3c0,0,0,0,0,0.1c-5.4-1.3-12.8-1.7-15.2-4.5c-3.6-4.3-43.2-10.8-43.2-10.8s-14.4,0-20.2,3.6
           c-2.7,1.7-7.7-0.3-12.2-2.9c11.1-17.7,36.3-64.2,53.1-95.9c4.3-1.5,8.9-2.2,10.9,0.1c4.3,5-1.4,22.3,10.1,23.8s19.4,15.1,25.9,24.5
           c0.2,0.3,0.5,0.7,0.8,1c-4.2,2.8-7.9,6.8-7.2,12c1.4,11.5-9.4,28.8-5,32.4c4.3,3.6,15.8,10.1,15.8,10.1L195.8,433.3z"/>
                <path className="st3" d="M462.2,292.9c-9.8,19.3-19.1,37.8-23.2,45.5c-10.1,19.1-6.8,36-11.2,52.9c-2.5,9.5-19.4,77.5-32.4,133.3
           l-6.1-5l-11.8,10.9l3.4,13.5c0,0-6.7,6.7-12.6,17.7c-5.9,11-2.5,41.3-16,44.6c-13.5,3.4-30.3-25.3-30.3-25.3s-14.3-3.4-24.4-12.6
           c-5.1-4.7-6.1-9.6-5.9-13.3v0c0.2-3.6,1.7-6.1,1.7-6.1s-21.9-5-12.6-11.8c9.3-6.7,6.7-15.2,6.7-15.2s0.2-0.4,0.5-1
           c2-4,9.8-18.2,21.4-22.5c13.5-5,7.6-14.3,7.6-14.3l16-6.7c0,0,2.5-4.2,5.1-21.9c2.5-17.7-7.6-20.2-7.6-20.2l15.2-35.4l-2.5-25.3
           c0,0,21.9-19.4,15.2-26.1c-6.7-6.7-9.3-20.2-9.3-20.2l14-11l13.8-10.9l-1.7-11.8l15.8-15.8c0.5,1.4,0.1,2.7,0.1,2.7
           s27.4,11.1,34.8,6.8c7.1-4.1,3.9-8.2,3.7-8.4L462.2,292.9z"/>
                <path id="taichung" className="st4" d="M375,294.8l1.7,11.8l-13.8,10.9c-6.9-1.2-15.4-2.8-21.7-4.2c-13-2.9-48.2,19.4-48.2,19.4
           s-5.8-7.2-9.4,0.7c-3.6,7.9-27.3,18.7-27.3,18.7s-7.2-17.3-10.8-8.6c-3.6,8.6-18,29.5-18,29.5s-14.7,7.3-21.5-0.5
           c-0.3-0.3-0.5-0.6-0.8-1c-6.5-9.4-14.4-23-25.9-24.5s-5.8-18.7-10.1-23.8c-2-2.3-6.5-1.6-10.9-0.1c8.5-16,14.8-28.2,16.1-31.1
           c2.6-5.7,9.6-14.2,16.4-23.1c14.8,9.8,41.4,26.9,49.6,28.4c11.5,2.2,18,0.7,18,0.7s-0.7-11.5,9.3-12.2c10.1-0.7,23,7.9,23,7.9
           s33.8-15.1,37.4-19.4c2-2.4,10.3-9.5,17-15.1c0.4,0.7,0.5,1.1,0.5,1.1l11.2-1.5c2.7,7.9,15.5,17.8,23.9,17c6.9-0.6,9.2,1.3,9.9,3.1
           L375,294.8z"/>
                <path className="st3" d="M290.7,173.3c-0.8,3.3-7.8,0.4-7.8,0.4l-13.1,9.4l-0.6,3.3c-4.1-2-9.4-4.3-13.4-6c4.2-7.7,8.7-17.2,12.7-26
           c3.2,1.7,6.2,4.2,6.2,4.2l7.8,0.4C282.5,159,291.5,170.1,290.7,173.3z"/>
                <path className="st3" d="M345.3,259.2c-6.8,5.6-15,12.7-17,15.1c-3.6,4.3-37.4,19.4-37.4,19.4s-13-8.6-23-7.9
           c-10.1,0.7-9.3,12.2-9.3,12.2s-6.5,1.4-18-0.7c-8.2-1.5-34.8-18.6-49.6-28.4c4.4-5.7,8.7-11.6,11.7-16.9
           c7.7-13.6,9.4-32.4,13.6-38.3c4.3-6,21.3-6.8,32.4-21.3c2.2-2.8,4.7-7,7.3-11.9c4,1.7,9.3,4,13.4,6c3.3,1.6,5.9,3.1,6.7,4
           c2.9,3.3,0.8,12.7,4.5,15.1c3.7,2.4,18.8,9.4,18.8,9.4l0.8,27c0,0,29-4.9,33.5-1.2C337.3,243.8,343.4,255.5,345.3,259.2z"/>
                <path id="hsinchu" className="st4" d="M376.9,222.4c-1.9,7.6-6.9,23.7-16.5,28.1c-3.8,1.8-4.6,4.8-3.4,8.3l-11.2,1.5
           c0,0-0.2-0.4-0.5-1.1c-1.8-3.7-7.9-15.4-11.7-18.5c-4.5-3.7-33.5,1.2-33.5,1.2l-0.8-27c0,0-15.1-6.9-18.8-9.4
           c-3.7-2.5-1.6-11.8-4.5-15.1c-0.8-0.9-3.4-2.4-6.7-4l0.6-3.3l13.1-9.4c0,0,7,2.9,7.8-0.4c0.8-3.3-8.2-14.3-8.2-14.3l-7.8-0.4
           c0,0-3-2.5-6.2-4.2c5.4-12,9.8-22.6,11.1-25.9c12.6,5,37.1,15.6,39.3,23c3,9.9,36.8,19.9,39.8,28.8c3,9,14.9,43.8,14.9,43.8
           S374.9,223.5,376.9,222.4z"/>
                <path id="yilan" className="st4" d="M476.2,163.9c-2.2,33.8,15.8,69.8,15.8,69.8s-15.3,30.5-29.7,59.2L429.4,280c0.2,0.2,3.4,4.3-3.7,8.4
           c-7.4,4.2-34.8-6.8-34.8-6.8s0.4-1.3-0.1-2.7c-0.7-1.8-3-3.7-9.9-3.1c-8.5,0.7-21.3-9.1-23.9-17c-1.2-3.4-0.4-6.5,3.4-8.3
           c9.5-4.4,14.6-20.5,16.5-28.1c5.1-2.8,14.5-8.3,16.7-11.2c1.4-1.8,2.1-7,2.5-11.9c3.7-2.5,23.9-16.3,27.2-27.4
           c3.6-12.2,17.5-9.3,33.1-19.9c15.6-10.6,26.5-17.9,26.5-17.9s-6.3-7.3-0.7-10.9c5.6-3.6,20.5-5,22.5-6.9c1.3-1.3,4.8,0.5,6.9,1.8
           C498.1,125.9,477.7,141.4,476.2,163.9z"/>
                <path className="st3" d="M396.1,199.3c-0.4,4.9-1.1,10-2.5,11.9c-2.2,2.9-11.6,8.4-16.7,11.2c-1.9,1.1-3.2,1.8-3.2,1.8
           s-11.9-34.8-14.9-43.8c-3-8.9-36.8-18.9-39.8-28.8c-2.2-7.4-26.7-18-39.3-23c0.3-0.6,0.4-1,0.4-1s10.2-31.5,56.2-40.9
           c5.9-1.2,11-2.6,15.6-4c10.1,6.3,32,21.5,25.7,31.7c-8.1,13.2-21.4,2-18.3,19.4c3,17.3,17.3,17.3,23.4,27.5s-4.1,24.4,3,29.5
           c7.1,5.1,9.7,8.9,9.7,8.9S395.7,199.6,396.1,199.3z"/>
                <path id="newtaipei" className="st4" d="M504.3,99.7c-5.6-14.6-5.6-22.5-5.6-22.5s-9.2,0.2-20.2-1.2L465,81.5l0.5,13.4l-10.1,6
           c0,0-23-19.8-22.6-23.5c0.3-2.5,10.8-7.4,17.8-10.4c-1.9-1.3-3.5-2.8-4.8-4.5c-12.4-15.8-15.5-23.5-35.4-27c0,0-17.9,1.7-21.3,11.9
           c-3,8.9-6,25-37.2,35.2c10.1,6.3,32,21.5,25.7,31.7c-8.1,13.2-21.4,2-18.3,19.4c3,17.3,17.3,17.3,23.4,27.5s-4.1,24.4,3,29.5
           c7.1,5.1,9.7,8.9,9.7,8.9s0.2-0.1,0.6-0.4c3.7-2.5,23.9-16.3,27.2-27.4c3.6-12.2,17.5-9.3,33.1-19.9c15.6-10.6,26.5-17.9,26.5-17.9
           s-6.3-7.3-0.7-10.9c5.6-3.6,20.5-5,22.5-6.9c1.3-1.3,4.8,0.5,6.9,1.8c0,0,0,0,0,0c6.5-3.8,11.4-5.8,11.8-6
           C522.7,112.2,509.8,113.9,504.3,99.7z M427.3,123.9l-13.3,0.5c0,0-12.9-8.3-14.3-21.2c-1.4-12.9-9.2-22.1-9.2-22.1l21.2-21.2
           l7.8,5.5c0,0-1.8,11.5,0,16.6c1.8,5.1,4.1-0.5,6.9,6c2.8,6.5-1.8,13.8-1.8,13.8l11,4.2c0,0-7.8,1.8-14.3,5.1
           C414.8,114.2,427.3,123.9,427.3,123.9z"/>
                <path id="keelung" className="st4" d="M465,81.5l0.5,13.4l-10.1,6c0,0-23-19.8-22.6-23.5c0.3-2.5,10.8-7.4,17.8-10.4
           c7.3,5.2,18.3,7.7,27.9,9L465,81.5z"/>
                <path id="taipei" className="st4" d="M427.3,123.9l-13.3,0.5c0,0-12.9-8.3-14.3-21.2c-1.4-12.9-9.2-22.1-9.2-22.1l21.2-21.2l7.8,5.5
           c0,0-1.8,11.5,0,16.6c1.8,5.1,4.1-0.5,6.9,6c2.8,6.5-1.8,13.8-1.8,13.8l11,4.2c0,0-7.8,1.8-14.3,5.1
           C414.8,114.2,427.3,123.9,427.3,123.9z"/>
                <line className="st3" x1="429.4" y1="280" x2="429.4" y2="280" />
                <path className="st3" d="M358.1,348.7c6.7,6.7-15.2,26.1-15.2,26.1l2.5,25.3l-15.2,35.4c0,0,10.1,2.5,7.6,20.2
           c-2.5,17.7-5.1,21.9-5.1,21.9l-16,6.7c0,0,5.9,9.3-7.6,14.3c-11.5,4.3-19.4,18.6-21.4,22.5c-2.4-2.8-5-5.6-7.2-7.2
           c-2.4-1.7-9.9-2.1-18-2.2h0c-8.9-0.1-18.5,0.1-23-0.6c-8.6-1.4-0.7-33.8-0.7-33.8s-8.1-0.2-17.3-0.9c-13.5-1-29.4-3.1-25.1-7
           c6.9-6.2-0.1-33.6-0.7-35.8c0-0.1,0-0.1,0-0.1l13.7-6.5c0,0-11.5-6.5-15.8-10.1c-4.3-3.6,6.5-20.9,5-32.4c-0.6-5.1,3-9.1,7.2-12
           c6.9,7.8,21.5,0.5,21.5,0.5s14.4-20.9,18-29.5c3.6-8.6,10.8,8.6,10.8,8.6s23.7-10.8,27.3-18.7c3.6-7.9,9.4-0.7,9.4-0.7
           s35.2-22.3,48.2-19.4c6.3,1.4,14.8,3,21.7,4.2l-14,11C348.9,328.5,351.4,341.9,358.1,348.7z"/>
            </g>
        </svg>
    )
}) 