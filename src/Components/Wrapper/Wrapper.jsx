import React from 'react'
import "./Wrapper.css";
import image from "../IMG/TODO 2.svg";
import image2 from "../IMG/Combined-Shape.svg";
const Wrapper = () => {

    // const toggleBtn = document.querySelector('.moonToggle');

    // const switchColor = toggleBtn.addEventListener("click", () => {
    //     toggleBtn.classList.toggle("darkmode");
    //       document.body.style.backgroundColor = toggleBtn.classList.contains(
    //         "darkmode"
    //       )
    //         ? "#171823"
    //         : "white";
    // })

  return (
      <div className='wrapper'>
            <img src={image}></img>
            <img className="moonToggle" src={image2}></img>
    </div>
  )
}

export default Wrapper;