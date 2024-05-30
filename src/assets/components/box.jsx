import React from "react";

const Box = () => {
  return (
    <div className="flex flex-row box">
      <div className="w-1/2 p-4 flex justify-center items-center box1 ">
        {/* Content for the first column */}
        <h2 className="text-lg font-bold color-red-300 intalics">
          Soft fleece
          <br /> Cat sweater
        </h2>

      {/* for star image */}
      <div className="starlife">
     <img src="./images/staricons.png" className="star"/>
      <img src="./images/staricons.png" className="star"/>
      <img src="./images/staricons.png" className="star"/>
      <img src="./images/staricons.png" className="star"/>
      <img src="./images/staricons.png" className="star"/>
      <p>345 ratings</p></div>
        <section className="section">
          <h2> Color</h2>
          <div className="color">
            <div className="color1"></div>
            <div className=" color2"></div>
            <div className=" color3"></div>
            <div className=" color4"></div>
            <div className=" color5"></div>
          </div>
        </section>

        <div className="section">
          <h2> Size</h2>
          <div className="sizespace">
            <div className="color1 p">S</div>
            <div className=" color ">M</div>
            <div className=" color3 p">L</div>
            <div className=" color4.">XL</div>

          </div>
        </div>
        <div>
          <h1 className="dollar"> $14.99</h1>
          <div className="buttonplate">
          <button className="btn0"> Order Now</button>
          <svg xmlns="http://www.w3.org/2000/svg" className="Love"
          width="49" height="49" viewBox="0 0 24 24" fill="black" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round" class="feather feather-heart">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 
            0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06
             1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
            </path></svg></div>
        </div>
      </div>
      {/* // for the second container       */}
      <div className="w-1/2 p-4 box2">
        <img src="/images/cat.png" className="cat" />
        <div>
          
          <p>
            <div className="color m "><svg xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            class="feather feather-chevron-left"><polyline 
            points="15 18 9 12 15 6"></polyline></svg>
              <div className="l v"></div>
              <div className="l"></div>
              <div className="l"></div>
              <div className="l"></div>
              <div className="l"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
                <polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Box;
