import React, { useEffect, useState } from "react";
import zeldaSound from "../../assets/zelda-secret-sound.mp3";
import codecCover from "../../assets/codec-cover.png"
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

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
          
          document.querySelector(".cover").style.background = "black url(" + codecCover + ") no-repeat center";
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
        <div className="contact bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-100">
          <div className="contact-pageblock w-full lg:w-2/3 mx-auto">
            <div className="contact-coverimage">
                <div className="cover">
                    
                </div>
            </div>
            <div className="contactform-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="name-email">
                        <input type="text" autoComplete="none" name="name" placeholder="Entrez votre nom" {...register("name", { required: true })} />
                        {errors.name && <p className="error-message">Veuillez entrer votre nom.</p>}
                        <input type="email" autoComplete="none" name="email" placeholder="Entrez votre adresse e-mail" {...register("email", { required: true })} />
                        {errors.email && <p className="error-message">Veuillez entrer votre adresse e-mail.</p>}
                    </div>
                    <div className="message-submit">
                      <input
                        type="text"
                        autoComplete="none"
                        name="message"
                        placeholder="Votre message"
                        {...register("message", { required: true })}
                      />
                      {errors.message && <p className="error-message">N'oubliez pas de laisser votre message !</p>}
                      <ReCAPTCHA sitekey="6LdIdK4mAAAAAJ--fuC22qaC8062ikZicGd9kZoX" /> {/* Clé ReCAPTCHA */}
                      <button disabled={isSubmitting}>Envoyer</button>
                    </div>

                </form>
            </div>
            </div>
        </div>
      </>  
    )
}

export default Contact
