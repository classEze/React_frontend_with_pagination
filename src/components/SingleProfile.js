import React from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';
import Language from '@material-ui/icons/Language';

export default function SingleProfile({eachProfile}) {
    return (
        <section className = "single_profile grid_display">
            <div className="username">
             <AccountCircle className="user_icon"/>   
            <span> {eachProfile.FirstName} {eachProfile.LastName} </span>  
           </div>
           <div className="email_website_group grid_display">
            <div className="email flex_display">
            <Email className="email_icon"/>
             <span>{eachProfile.Email}</span>
           </div>
            <div className="website flex_display">
             <Language className="website_icon"/>  
             <span> {eachProfile.URL} </span>
           </div>
           </div>
        </section>
    )
}
