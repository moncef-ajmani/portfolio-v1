import React from 'react'

export default function Navbar({ categoryList, filterItem }) {
    return (
        <div className='nav__category'>
            {categoryList.map((el,i)=>{
                return(
                    <div key={i} className='nav__category-item' onClick={(e)=>{filterItem(el)}}>{el}</div>
                )
            })}
        </div>
    )
}
