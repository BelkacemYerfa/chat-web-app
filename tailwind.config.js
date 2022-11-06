/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        UserComponentBg : '#333333' , 
        TitlesText : '#E0E0E0' , 
        ParagraphText : '#828282' , 
        MainSendBtn : '#2F80ED' , 
        MessagingBackground : '#252329' , 
        MenuColor : '#F2F2F2' ,
        HoverStateBg : '#3C393F' , 
        NavSectionBg : '#120F13' , 
        ChannelsNames : '#BDBDBD' , 
        BoxColor : 'rgba(0, 0, 0, 0.25)'
      } , 
      boxShadowColor :  {
        MainShadowColor : '0px 10px 10px rgba(0, 0, 0, 0.25)' ,
      }
    },
  },
  plugins: [],
}
