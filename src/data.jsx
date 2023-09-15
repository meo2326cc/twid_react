import tp from './people/tp.jpg'
import tp2 from './people/tp2.jpg'
import kee from './people/kee.jpg'
import yi from './people/yi.jpg'
import yi2 from './people/yi2.jpg'
import ntpc from './people/ntpc.jpg'
import chung from './people/chung.jpg'
import chung2 from './people/chung2.jpg'
import chung3 from './people/chung3.jpg'
import chung4 from './people/chung4.jpg'
import chung5 from './people/chung5.jpg'
import changhua from './people/changhua.jpg'
import cha from './people/cha.jpg'
import cha2 from './people/cha2.jpg'
import kao from './people/kao.jpg'
import hsin from './people/hsin.jpg'
import hsin2 from './people/hsin2.jpg'


const peopleData = {
    "taipei": [
        {
            "name": "時代力量：林穎孟",
            "link": "https://docs.google.com/forms/d/1zW-fp_pEtTq2Enf7na5yil72rU0zhgk2M-KQenXlU9g/edit",
            "description": "台北市議員（大安、文山）",
            "img": tp
        },
        {
            "name": "時代力量：劉仕傑",
            "link": "https://docs.google.com/forms/d/17nZ5BMg7m_lHwhhrPuYfHQa237XhzhvxnyKWPjnkG5w/edit",
            "description": "台北市議員（士林、北投）",
            "img": tp2
        }
    ],
    "keelung": [
        {
            "name": "時代力量：陳薇仲",
            "link": "https://docs.google.com/forms/d/e/1FAIpQLScTW_UPjc2pUxbgq5IulC5TfUltUGfU5oH0vig-hLYGfEKD7g/viewform",
            "description": "基隆市長",
            "img": kee
        }
    ],
    "yilan": [
        {
            "name": "基進黨：陳漢澤",
            "link": "https://docs.google.com/forms/d/e/1FAIpQLSeBCcgM1OGO8sAUrz1E0YDbCxZ3pQoCugGt-FG2pDkf72GVKw/viewform",
            "description": "宜蘭議員（選區：宜蘭市）",
            "img": yi
        },
        {
            "name": "基進黨：林意評",
            "link": "https://docs.google.com/forms/d/e/1FAIpQLSe1bg50aGvNG10_Cm881ZEMOQevbrig99Oon21yGxDYJXA7dQ/viewform",
            "description": "宜蘭議員(選區: 羅東鎮）",
            "img": yi2
        }
    ],
    "newtaipei": [
        {
            "name": "基進黨：董俊宏",
            "link": "https://docs.google.com/forms/d/1EZEhoZ9iDbJLWZFglN0qtIbSr9gI8frQ8IW7BzDZfO8/edit",
            "description": "新北市第二選區（五股、泰山、林口) 市議員",
            "img": ntpc
        }
    ],
    "taichung": [
        {
            "name": "時代力量：傅智恒",
            "link": "https://docs.google.com/forms/d/e/1FAIpQLSfmRYltAr4Yh81UNl-LSlyFMDtKI8hOFj_23SQXkjZAV_-7mg/viewform",
            "description": "台中市第四選區（后里豐原）",
            "img": chung
        },
        {
            "name": "時代力量：徐小媚",
            "link": "https://docs.google.com/forms/d/16LYL1n1eD3mbI0POFKeQRyNEk1Azfib1ieraMAHkUAA/viewform?edit_requested=true",
            "description": "台中市議員（選區：東南）",
            "img": chung2
        },
        {
            "name": "時代力量：鄭勁節",
            "link": "https://docs.google.com/forms/d/1WdMleth7OyfHhWCjwWt9vsAFFgXcshbD3cnkeQlrdMs/edit",
            "description": "台中市議員（選區：潭子、大雅、神岡）",
            "img": chung3
        },
        {
            "name": "時代力量：吳佩芸",
            "link": "https://docs.google.com/forms/d/13AWqV_DsfHKDh2mbr1XaQunLz1W1aT86Gc4cFAiGdXo/edit",
            "description": "台中市議員（選區：南屯）",
            "img": chung4
        },
        {
            "name": "時代力量：鄒明諺",
            "link": "https://docs.google.com/forms/d/e/1FAIpQLScu9SWFOCb3Vfu_JdOC5kA6J-d8CV5QhOrJvxlak78IijvFIw/viewform",
            "description": "台中市議員（ 選區：大里、霧峰)",
            "img": chung5
        }
    ],
    "changhua": [
        {
            "name": "時代力量：吳韋達",
            "link": "https://docs.google.com/forms/d/e/1FAIpQLSdvEGDEWtDc7dQn9ejyinQ5MSV4PIJwDw-GuyZP3iat-ofJ7Q/viewform",
            "description": "彰化縣議員（彰化、花壇、芬園）",
            "img": changhua
        }
    ],
    "chiayi": [
        {
            "name": "賴芳徵",
            "link": "https://docs.google.com/forms/d/e/1FAIpQLSc8LkEzWdXrXrsp3m5b0LqzmnCGrjao6tPwrvLvMgUnN_Yo9A/viewform",
            "description": "嘉義水上鄉鄉長",
            "img": cha
        },
        {
            "name": "基進黨：翁渙瑤",
            "link": "https://docs.google.com/forms/d/e/1FAIpQLSfo6buh1IUPmqB_B-SGumKZlxcgcThm5whAvi8sojySBmNL4w/viewform",
            "description": "嘉義市東區市議員",
            "img": cha2
        }
    ],
    "kaohsiung": [
        {
            "name": "時代力量：林于凱",
            "link": "https://docs.google.com/forms/d/e/1FAIpQLSff3LNXg4-VidcNbHm2GYEhxay5FbBYqS-lUu49FkuAf5k_hg/viewform",
            "description": "高雄市議員（三民區）",
            "img": kao
        }
    ],
    "hsinchu": [
        {
            "name": "時代力量：連郁婷",
            "link": "https://docs.google.com/forms/d/e/1FAIpQLSe9epZi-TIbaB6pE6c-P_mCNCQ65lsl8Jts1A_dp7iMxHYoWw/viewform",
            "description": "新竹縣議員（竹北）",
            "img": hsin
        },
        {
            "name": "時代力量：彭致豪",
            "link": "https://docs.google.com/forms/d/e/1FAIpQLScwsjnLvbezN-pOkncrT_GSpVMR72EIkGMRYV1Ad7l4J9uTsQ/viewform",
            "description": "新竹縣第八選區（竹東鎮、五峰鄉）縣議員",
            "img": hsin2
        }
    ]
}

export default peopleData;