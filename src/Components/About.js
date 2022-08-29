import React, {useState} from 'react'

export default function (props) {
   /* const [myStyle, setmyStyle] = useState(
     { 
        color:'black',
        backgroundColor:'white'
    })*/

    let myStyle = {
      color: props.mode === 'dark'?'white':'black',
      backgroundColor: props.mode ==='dark'?'black':'white'
    }

  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
      <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      You need to always stay on point, ensuring your content stays within the limits of these relevant platforms… so that you don’t unwittingly end up having to reduce or increase your count words back and forth just to meet some requirements.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      You need to always stay on point, ensuring your content stays within the limits of these relevant platforms… so that you don’t unwittingly end up having to reduce or increase your count words back and forth just to meet some requirements.

      For that to happen, you need a text counter tool.

      But using a word calculator does more than helping you count social media post characters.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Privacy</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      It’s common for other online Letter Counter Tools to keep a record of your content in their servers when you use them, but we are different.

We do NOT keep or view your content when you use our tool, or any of our other SEO and content tools for that matter.
      </div>
    </div>
  </div>
</div>

</div>   
  )
}
