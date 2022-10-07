import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';


function Footer() {
  return (
    <div className="container   my-5  " id='foot'>


   

<hr />
<div className="row">

  <div className="col-md-6">

  {/* <a className="navbar-brand" href="#"><img src="assets/download.png" alt=" "width={200} /></a> */}
<div className='style9 '>© 2022 Quant Network Limited. All rights reserved</div>
  </div> 
  <div className="col-md-2">

    <h6>Privacy Policy</h6>
  </div>
  <div className="col-md-2">
  <h6>Term of use</h6>
  

  </div>
  <div className="col-md-1">
    <div>
<AiFillTwitterCircle size={30} color="blue" />

</div>

  </div>
  <div className="col-md-1">
    <div>
<AiFillLinkedin size={30} color="black"/>

</div>

  </div>


</div>
      </div>
    
  )
}

export default Footer
