/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        SignInBg : '#3C404C' , 
        UserComponentBg : '#333333' , 
        TitlesText : '#E0E0E0' , 
        ParagraphText : '#828282' , 
        MainSendBtn : '#2F80ED' , 
        MessagingBackground : '#252329' , 
        MenuColor : '#F2F2F2' ,
        HoverStateBg : '#3C393F' , 
        NavSectionBg : '#120F13' , 
        ChannelsNames : '#BDBDBD' , 
        BoxColor : 'rgba(0, 0, 0, 0.25)',
        overlayBg : 'rgba(18, 15, 19, 0.5)' , 
        errorBg : '#cc0000' , 
      } , 
      screens : {
        smdPC : '550px'
      } , 
      boxShadowColor :  {
        MainShadowColor : '0px 10px 10px rgba(0, 0, 0, 0.25)' ,
      } , 
      keyframes: {
        closeTab: {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      } , 
      animation: {
        closeTab: 'closeTab .35s 1s ease-in-out  ',
      }

    },
  },
  plugins: [],
}
