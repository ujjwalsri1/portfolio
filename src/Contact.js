import { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
function Contact() {
    const form =useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hqn8g1p', 'template_vhgqxb8', form.current, 'Xsc81sA9DWz9cjcfC')
          .then((result) => {
              console.log(result.text);
              alert("The message has been sent")
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    
    return (
        <>
        <div class="container">
          <div class="content">
            <div class="left-side">
              <div class="address details">
                <i class="fa fa-map-marker"></i>
                <div class="topic">Address</div>
                <div class="text-one">162/8 B.H.S </div>
                <div class="text-two">Allahpur Prayagraj</div>
              </div>
              <div class="phone details">
                <i class="fa fa-phone"></i>
                <div class="topic">Phone</div>
                <div class="text-one">+91-8932966597</div>
              </div>
              <div class="email details">
                <i class="fa fa-envelope-o"></i>
                <div class="topic">Email</div>
                <div class="text-one">ujjwalsri1@gmail.com</div>
              </div>
            </div>
            <div class="right-side">
              <div class="topic-text">Send us a message</div>
              <p>If you have any work from me or any types of quries related to my work, you can send me message from here. It's my pleasure to help you.</p>
            <form ref={form} onSubmit={sendEmail} className="--form-control --card" action="#">
              <div class="input-box">
                <input type="text" placeholder="Enter your name" name="user_name" required/>
              </div>
              <div class="input-box">
                <input type="email" placeholder="Enter your email" name="user_email" required/>
              </div>
              <div class="input-box">
                <input type="text" placeholder="Subject" name="subject" required/>
              </div>
              <div class="input-box message-box">
              <textarea name="message" placeholder="Enter message"></textarea>
              </div>
              <div class="button">
                <button type='submit' className='--btn--btn-primary'>Send message</button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </>
    
    
    
        );
};
export default Contact;