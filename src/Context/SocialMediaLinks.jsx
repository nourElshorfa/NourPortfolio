import { createContext } from "react";

export let SocialContext = createContext()


export default function SocialMediaLinksProvider(props){


    function getLinkedin(){
       
        window.open('https://www.linkedin.com/in/nour-elshorafa-374b29221/', '_blank')
    }
    function getGithub(){
     
       window.open('https://github.com/nourelshorfa', '_blank')
    }

    function getWhatsapp() {
        window.open("https://wa.me/01014665575");
      }

      function getGmail() {
        window.open("mailto:nourelshorafa20@gmail.com");
      }

    return <SocialContext.Provider value={{getLinkedin , getGithub , getWhatsapp , getGmail }}>
        {props.children}
        </SocialContext.Provider>
}
