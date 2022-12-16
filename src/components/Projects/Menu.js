import React, { useState } from 'react'
// import { dataProjects } from '../../services/AppService'
import Navbar from './Navbar'
import Card from './Card'

const uniqueCategory = [
    
]

export default function Menu({projects,categories}){

    const [ProjectItem,setProjectItem] = useState(projects)
    const [categoryList] = useState(["All",...categories.map(el=>el.name)])
    const filterItem = (category) =>{
        if(category==="All"){
            setProjectItem(projects)
            return
        }
        const updatedList = projects.filter(el=>el.category===category)
        setProjectItem(updatedList)
    }
    return (
        <>
            <Navbar categoryList={categoryList} filterItem={filterItem} />
            <Card ProjectItem={ProjectItem} />
        </>
    )
}

