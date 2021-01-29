import React from 'react'
import SingleProfile from './SingleProfile'

export default function Profiles({currentProfiles}) {
    return (
        <div className="profiles grid_display"> 
         {currentProfiles.length > 0 && currentProfiles.map(eachProfile =>
             <SingleProfile key={eachProfile.CreditCardNumber} eachProfile={eachProfile} />
              )}
        </div>
    )
}
