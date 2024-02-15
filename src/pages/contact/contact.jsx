import React, { useEffect, useState } from "react";
import zeldaSound from "../../assets/zelda-secret-sound.mp3";
import codecCover from "../../assets/codec-cover.png"
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import "./contact.css";
import { useForm } from 'react-hook-form';


const wait = function (duration = 1000) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, duration)
    })
}

function Contact() {

    function playZeldaSound() {
        new Audio(zeldaSound).play();
    }
    
    const konamiSequence = "38384040373937396665";
    const [input, setInput] = useState("");
    
      useEffect(() => {
        const onKeyDown = (e) => {
          setInput((prevInput) => prevInput + e.keyCode);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
      }, []);
    
      useEffect(() => {
        if (input.endsWith(konamiSequence)) {
          // Do something when the Konami Code is entered
          
          document.querySelector(".contact-cover-image").style.background = "black url(" + codecCover + ") no-repeat center";
          playZeldaSound();
          
          
        }
      }, [input]);
    
    const { register, formState: { errors }, handleSubmit, isSubmitting } = useForm();

    const onSubmit = async (data, e) => {
        e.preventDefault();
        await wait(2000);
        emailjs.send("service_w6juuk2", "template_otp0qck", data, "m97t49Wzp6kIRe8GX").then(
          (result) => {
            console.log(result.text);
            // Display a pop-up message indicating that the email has been sent
            alert("Votre message a bien été envoyé !");
            // Reset the form
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
      };
      

    return (
      <>
        <div className="contact bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-100">
          <div className="contact-pageblock mx-0 w-full xl:w-3/4 flex flex-col xl:flex-row justify-between lg:mx-auto">
            <div className="contact-cover-image bg-ghgreen w-full xl:w-[800px] opacity-0">
                <svg className="email-icon opacity-0 w-14 xl:w-36 py-2 mx-auto" fill="#ffffff" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fill-rule="evenodd"></path> </g></svg>
                <svg className="arrow-icon opacity-0 w-14 xl:w-36 py-2 mb-1 lg:mb-6 mx-auto"fill="#ffffff" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" id="memory-arrow-down"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 17H10V16H9V15H8V14H7V13H6V11H8V12H9V13H10V4H12V13H13V12H14V11H16V13H15V14H14V15H13V16H12"></path></g></svg>
                <div className="relative w-64 mb-3 lg:mb-0 mx-auto">
                  <span className="gb-hello opacity-0 text-sm xl:text-xl text-white font-bold absolute inset-x-0 top-8 left-28 -mx-2 xl:right-36 xl:top-20" >Hello...</span>
                  <svg className="gameboy-icon opacity-0 w-28 xl:w-64 lg:mb-4 xl:mb-0 mx-auto" fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.64 473.64" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M189.105,344.04h-18.399v-18.399c0-5.039-4.075-9.113-9.114-9.113h-29.953c-5.039,0-9.114,4.074-9.114,9.113v18.399 h-18.399c-5.039,0-9.113,4.076-9.113,9.115v29.954c0,5.039,4.074,9.114,9.113,9.114h18.399v18.383c0,5.039,4.075,9.114,9.114,9.114 h29.953c5.039,0,9.114-4.076,9.114-9.114v-18.383h18.399c5.039,0,9.113-4.076,9.113-9.114v-29.954 C198.218,348.115,194.144,344.04,189.105,344.04z"></path> <path d="M384.711,0H88.929C57.685,0,32.272,25.413,32.272,56.658v360.324c0,31.245,25.413,56.658,56.658,56.658h192.932 c87.949,0,159.508-71.558,159.508-159.508V56.658C441.369,25.413,415.956,0,384.711,0z M409.517,314.133 c0,70.391-57.265,127.656-127.656,127.656H88.929c-13.671,0-24.806-11.135-24.806-24.806V56.658 c0-13.671,11.135-24.806,24.806-24.806h295.781c13.671,0,24.806,11.135,24.806,24.806V314.133z"></path> <path d="M378.661,51.603H94.98c-6.595,0-11.944,5.35-11.944,11.944v214.005c0,6.595,5.35,11.944,11.944,11.944h283.681 c6.595,0,11.944-5.349,11.944-11.944V63.548C390.605,56.953,385.255,51.603,378.661,51.603z M366.716,265.608H106.924V75.492 h259.792V265.608z"></path> <path d="M348.302,315.376c-14.574,0-26.378,11.804-26.378,26.378c0,14.572,11.804,26.376,26.378,26.376 c14.572,0,26.377-11.804,26.377-26.376C374.679,327.181,362.875,315.376,348.302,315.376z"></path> <path d="M295.548,368.131c-14.574,0-26.378,11.804-26.378,26.378c0,14.572,11.804,26.377,26.378,26.377 c14.572,0,26.376-11.804,26.376-26.377C321.924,379.935,310.12,368.131,295.548,368.131z"></path> </g> </g></svg>
                </div>
            </div>
            
            <div className="contactform-container w-11/12 mx-auto xl:mx-0 py-6 xl:w-2/3">
              <h2 className="text-5xl opacity-0 xl:mx-32 font-light mb-6">Co<span className="text-ghgreen font-bold">ntact</span></h2>
              <div className="flex flex-col items-center justify-center"></div>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-zinc-200 dark:bg-zinc-700 opacity-0 text-base md:text-xl lg:text-2xl font-light p-6 rounded-lg w-full xl:w-2/3 mx-auto">
                    <div className="name py-1 mb-6">
                        <label>Votre nom :</label><br/>
                        <input className="mt-4 bg-transparent border-b-2 border-zinc-500 dark:border-zinc-300" type="text" autoComplete="none" name="name" placeholder="Entrez votre nom" {...register("name", { required: true })} />
                        {errors.name && <p className="error-message">Veuillez entrer votre nom.</p>}<br/>
                    </div>
                    <div className="email py-1 mb-6">
                        <label>Votre adresse e-mail :</label><br/>
                        <input className="mt-4 bg-transparent border-b-2 border-zinc-500 dark:border-zinc-300" type="email" autoComplete="none" name="email" placeholder="Entrez votre adresse e-mail" {...register("email", { required: true })} />
                        {errors.email && <p className="error-message">Veuillez entrer votre adresse e-mail.</p>}
                    </div>
                    <div className="message-submit">
                    <label>Votre message :</label><br/>
                      <input
                        className="mt-4 h-24 text-base overflow-auto dark:bg-zinc-800 py-1 w-11/12 rounded-md mb-6"
                        type="text"
                        autoComplete="none"
                        name="message"
                        placeholder="Votre message"
                        {...register("message", { required: true })}
                      />
                      {errors.message && <p className="error-message">N'oubliez pas de laisser votre message !</p>}
                      </div>
                      <ReCAPTCHA className="mb-4" sitekey="6LdIdK4mAAAAAJ--fuC22qaC8062ikZicGd9kZoX" /> {/* Clé ReCAPTCHA */}
                      <div className="bg-ghgreen text-white w-28 mx-auto lg:mx-0 text-center rounded-md hover:bg-zinc-500 hover:font-semibold hover:scale-105 transition-all px-2 py-3">
                        <button disabled={isSubmitting}><span>Envoyer</span></button>
                      </div>

                </form>
            </div>
            </div>
        </div>
      </>  
    )
}

export default Contact
