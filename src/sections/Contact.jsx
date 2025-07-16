import { useState } from "react";
import emailjs from '@emailjs/browser'
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
        await emailjs.send('service_9t2zkwg', 'template_n4lzsxw', {
            from_name: formData.name,
            to_name: 'Eng. Melad Khnefes',
            from_email: formData.email,
            to_email: 'milad.khnefes.16@gmail.com',
            message: formData.message,
        }, "_bQ_mh4eCA616qPLx");

        setIsLoading(false);
        setFormData({
            name: "",
            email: "",
            message: "",
        });
        showAlertMessage('success', 'Your Message was sent Successfully!');
    } catch (error) {
        console.error(error);
        showAlertMessage('danger', 'Something went wrong :(');
        setIsLoading(false);
    } 
}

const [isLoading, setIsLoading] = useState(false);
const [showAlert, setShowAlert] = useState(false);
const [alertType, setAlertType] = useState('success');
const [alertMessage, setAlertMessage] = useState('');


  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles 
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh/>
      {showAlert && <Alert type={alertType} text={alertMessage}/>}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you wanted a consultation or sought a future collaboration, I'm all ears!
          </p>
        </div>
        <form action="" className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="field-input field-input-focus"
              placeholder="John Doe"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="field-input field-input-focus"
              placeholder="example@example.com"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              className="field-input field-input-focus"
              placeholder="Share Your thougts with me"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
