import React from 'react';
import './Contuct.css'
// import header from'../../images/Mask Group 2.png'
const Contuct = () => {
    return (
     <>
     <section  class="psd-foter-foot-are">
     <div class="footer-foot">
     <div className="container">
     <div className="foter-foot-top">
			<h4>contact us</h4>
			<i>Proin iaculis purus consequat sem cure. </i>
		</div>
    <div className="row">
    <div className="col-md-6">
    <div className="foot-input">
    <input type="text" class="form-control" placeholder="your name"/>
    <input type="text"class="form-control"  placeholder="your E-mail"/>	
	<input type="text" class="form-control" placeholder="subject"/>
	</div>	
    </div>

    <div class="col-md-6">
				<div class="form-group">
			<textarea class="form-control"  cols="10" rows="6"placeholder="massage"></textarea>
				</div>
			</div>
    </div>
            <div className="footer-btn">
              <button className="btn-primary">send massage</button>
             </div>
    </div>
     </div>
     </section>
     </>

    );
};

export default Contuct;