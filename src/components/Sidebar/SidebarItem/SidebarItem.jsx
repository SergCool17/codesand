import React from 'react';

const SidebarItem =(props)=> {

    return(
    <div>
         {props.title +`-`+ props.viewesCount}
        </div>
    )
}
export default SidebarItem;