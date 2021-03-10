import { Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import './Header.css'
import { useDataLayerValue } from './DataLayer'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

function Header({spotify}){
    const [{user}, dispatch] = useDataLayerValue()
    return (
        <div className="header">
            
            <div className="header__left">
                
                <ArrowBackIosRoundedIcon />

                    <SearchIcon />
                    <input
                    placeholder="Search for Artists, Songs, or Pod casts"
                    type="text"
                    />
                
                
            </div>
            <div className="header__right">
                <Avatar 
                    src={user?.images[0]?.url} 
                    alt={user?.display_name} />
                <h4>
                {user?.display_name}
                </h4>
            </div>
        </div>
    )
}

export default Header