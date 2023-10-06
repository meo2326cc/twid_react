import logo from '../img/logo.png'
export default function Nav() {


  function fontSizeCtrl(e) {
    //console.log(e.target.checked)
    const doc = document.querySelector('#root').style;
    e.target.checked ? doc.fontSize = "18px" : doc.fontSize = "16px";
  }

  
  const scroll = (e)=>{
  e.preventDefault()
const value = e.target.attributes.href.value.toString();
const pointer = document.querySelector(value);
pointer.scrollIntoView({
  behavior: 'smooth'
});

  }
  

  return (
    <nav className='navbar navbar-expand-lg bg-gray-200 shadow-sm sticky-top'>
      <div className="container-fluid">
        <div className="d-flex w-100 justify-content-between">
          <a href="#home">
            <div className="d-flex align-items-center">
              <img src={logo} alt="logo" width="48px" className='align-middle ms-16  ' />
              <h2 className='fs-6 ms-16 navbar-collapse collapse'>台灣建國選舉制憲正名聯盟</h2>
            </div>
          </a>

          <div className='d-flex '>
            <div className="bg-gray-100 sw">
              <span>字體：標準 &nbsp;</span>
              <label>
                <input type='checkbox' onChange={fontSizeCtrl} />
                <span>
                </span>
              </label> <span>&nbsp; 大</span>
            </div>
        
            

            <button className="navbar-toggler ms-16 my-8" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="material-icons">
                menu
              </span>
            </button>

          </div>
        </div>
        <ul className="collapse navbar-collapse" id="navbarNav">
              <li className='ms-24 '><a href="#news"  onClick={scroll} className='text-decoration-none text-nowrap'>最新消息</a></li>
              <li className='ms-24 '> <a href="#intro"  onClick={scroll} className='text-decoration-none text-nowrap'>聯盟宗旨</a> </li>
              <li className='ms-24 '> <a href="#candidate"  onClick={scroll} className='text-decoration-none text-nowrap'>認證候選人</a> </li>
              <li className='ms-24 me-16'> <a href="#intro2" onClick={scroll} className='text-decoration-none text-nowrap'>聯盟簡介</a> </li>
            </ul>
      </div>
    </nav>
  )
}