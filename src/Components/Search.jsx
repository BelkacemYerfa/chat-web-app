import { SearchForm } from '../Form/SearchForm';
import testImage from '../Images/photo-1511367461989-f85a21fda167.jpg'
export const Search = ()=>{

 return(
  <div className="SearchSection">
     <div className="Nav-Section">
       <h2 className="title">
        Search 
       </h2>
       <div className="AddBtn">
         <div className="Line"></div>
         <div className="Line Child"></div>
       </div>
     </div>
     <div className='SearchForm'>
       <SearchForm />
     </div>
     <div className='Nav-Section UserSection'>
      <div className='UserInfo'>
      <img src={testImage} className='UserProfileImage' alt="TestPic" height={100} width={70} />
       <h3 className='UserName'>
         Username
       </h3>
      </div>
       <div className="AddBtn UserDropDown">
         <div className="Line rotation"></div>
         <div className="Line rotation2"></div>
       </div>
     </div>
  </div>
 ) ; 
}