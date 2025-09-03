import React, { useRef} from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
const Registration = () => {
  const nameRef = useRef();
  const positionRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const contRef = useRef();
  const cityRef = useRef();
  const passRef = useRef();
  const confirmRef = useRef();
  const genRef = useRef();
  const handleForm = (e) => {
    e.preventDefault();
    alert("Registration Successfully")
    console.log(nameRef.current.value);
    console.log(positionRef.current.value);
    console.log(emailRef.current.value);
    console.log(phoneRef.current.value);
    console.log(contRef.current.value);
    console.log(cityRef.current.value);
    console.log(passRef.current.value);
    console.log(confirmRef.current.value);
    console.log(genRef.current.value);
    nameRef.current.value = "";
    emailRef.current.value = "";
    positionRef.current.value = "default";
    phoneRef.current.value = "";
    contRef.current.value = "";
    cityRef.current.value = "";
    passRef.current.value = "";
    confirmRef.current.value = "";
    genRef.current.value=""
  };

  return (
    <div className="register">
      <h2>Registration</h2>
      <form onSubmit={handleForm}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Please enter your name" ref={nameRef} />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position you are applying for</label>
            <select id="position" ref={positionRef}>
              <option value="default">-Please select-</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Java Developer">Java Developer</option>
              <option value="Python Developer">Python Developer</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Tester">Tester</option>
              <option value="Business Development Executive">Business Development Executive</option>
              <option value="Mern Stack Developer">Mern Stack Developer</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="email" id="Email" placeholder="Email" ref={emailRef} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="number" id="phone" placeholder="Phone number" ref={phoneRef} />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" placeholder="Please enter your country" ref={contRef} />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="Please enter your city" ref={cityRef} />
          </div>
          <div className="form-group">
            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" placeholder="Please enter your password" ref={passRef} />
          </div>
          <div className="form-group">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" id="confirm" placeholder="Please enter your password" ref={confirmRef} />
          </div>
        </div>

        <div className="gender-group">
          <label>Gender</label>
          <div className="gender-options">
            <label>
              <input type="radio" name="gender" value="male" ref={genRef} /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" ref={genRef} /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" ref={genRef} /> Other
            </label>
            <label>
              <input type="radio" name="gender" value="prefer" ref={genRef} /> Prefer not to say
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">
            <span>Submit</span>
            <FaArrowRightLong />
        </button>

        
      </form>
    </div>
  );
};

export default Registration;
