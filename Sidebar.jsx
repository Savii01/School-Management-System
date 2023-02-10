import React from 'react'
import "./sidebar.scss"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
//import items from './SidebarData.json'


function Sidebar() {
    const [isOpen, setIsOpen] =  useState(true)
    const [subNavOpen, setSubNavOpen] =  useState(false)
    const showSubNav = () => setSubNavOpen(!subNavOpen)
    const items= 
[
  {
        title: 'Dashboard',
         path: '/dashboard',
        icon: <AiIcons.AiOutlineDashboard/>,
        iconClosed: <BsIcons.BsChevronDown/>,
        iconOpen: <BsIcons.BsChevronUp/>,
        sub:true,
        subNav:[
            {
                title: 'Admin',
                path: '/dashboard'
            },
            {
                title: 'Students',
                path: '/Student-dashboard'
            },
            {
                title: 'Teacher',
                path: '/Teacher-dashboard'
            },
            {
                title: 'Parent',
                path: '/Parent-dashboard'
            },

        ]
    },
    {
        title: 'Students',
        path: '/students',
        icon: <FaIcons.FaUserGraduate/>,
        iconClosed: <BsIcons.BsChevronDown/>,
        iconOpen: <BsIcons.BsChevronUp/>,
        sub:true,
        subNav:[
            {
                title: 'All Students',
                path: '/student/allstudents',
                // icon: <BsIcons.BsChevronDown/>,
            },
            {
                title: 'Student Details',
                path: '/students/studentdetails',
                // icon: <BsIcons.BsChevronDown/>,
            },
            {
                title: 'Admission Form',
                path: '/students/admissionform',
                // icon: <BsIcons.BsChevronDown/>,
            },
            {
                title: 'Student Promotion',
                path: '/students/studentpromotion',
                // icon: <BsIcons.BsChevronDown/>,
            },
        ]
    },
    {
        title: 'Teachers',
        path: '/teachers',
        icon: <FaIcons.FaChalkboardTeacher/>,
        iconClosed: <BsIcons.BsChevronDown/>,
        iconOpen: <BsIcons.BsChevronUp/>,
        sub:true,
        subNav:[
            {
                title: 'All teachers',
                path: '/student/allteachers',
                // icon: <BsIcons.BsChevronDown/>,
            },
            {
                title: 'Teacher Details',
                path: '/teachers/studentdetails',
                // icon: <BsIcons.BsChevronDown/>,
            },
            {
                title: 'Add Teachers',
                path: '/teachers/addteachers',
                // icon: <BsIcons.BsChevronDown/>,
            },
            
                    ]
    },    
    {
        title: 'parents',
        path: '/parents',
        icon: <RiIcons.RiParentLine/>,
        iconClosed: <BsIcons.BsChevronDown/>,
        iconOpen: <BsIcons.BsChevronUp/>,
        sub:true,
        subNav:[
            {
                title: 'All parents',
                path: '/student/allparents',
                // icon: <BsIcons.BsChevronDown/>,
            },
            {
                title: 'Parent Details',
                path: '/parents/parentdetails',
                // icon: <BsIcons.BsChevronDown/>,
            },
            {
                title: "Add Parent",
                path: '/parents/addparent',
                // icon: <BsIcons.BsChevronDown/>,
            },
            
        ]
    },
]
        
  return (
            <div className="">

         
          <div className={`bg-midnightblue border-#000 h-full p-2 pt-6 ${isOpen ? 'w-48': 'w-20'} duration-300 relative`}>
            <BsIcons.BsArrowLeftShort className={`bg-white text-midnightblue text-3xl rounded-full 
            absolute -right-3 border shadow-xl cursor-pointer ${!isOpen && 'rotate-180' }`} onClick={()=>setIsOpen(!isOpen)}/>
            <div className="inline-flex mb-2 flex gap-2 cursor-pointer">
                <BsIcons.BsBriefcaseFill className={`bg-white text-midnightblue rounded-md p-2 text-6xl  ${!isOpen && 'rotate-[360deg] duration-700'}`} />
                <div className={`flex flex-col ${!isOpen && 'scale-0'}`}>
                    <span className='text-2xl text-white uppercase font-bold px-2'> School </span>
                    <span className='text-sm text-white font-bold px-2 mb-2'> Management System </span>
                </div>
            </div>
            <ul className='pt-2'>
                {items.map((menu,index)=>(
                <div>
                    <Link to = {menu.path} key={index} onClick={menu.subNav  && showSubNav}>
                        <li 
                        className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2  active:bg-gray-400 rounded-md mt-2"
                        >
                            <span className={`text-2xl block float-left`}>{menu.icon}</span>
                            <span className={`text-base font-medium flex-1 ${!isOpen && 'hidden '}`}>{menu.title}</span>
                           <div>
                            {menu.sub && isOpen && (
                            // && subNavOpen  
                            // ? menu.iconOpen
                            // : menu.sub
                            // ? menu.iconClosed
                            // :null
                            <BsIcons.BsChevronDown className={`${subNavOpen && 'rotate-180'}`} />
                            )}
                           </div>
                        </li>
                    </Link>
                        {menu.sub  && isOpen && (
                        <ul>
                            { subNavOpen && menu.subNav.map((subnav, index) =>{
                                return(
                                            <Link to = {subnav.path}>
                                                <li key={index} className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-md mt-2 px-5 hover:border-x-4" >
                                                    <span className={`border-l-3`}>{subnav.title}</span>
                                                </li>
                                            </Link>
                            )})}
                        </ul>
                        )}

                </div>
                ))}
            </ul>
             </div>
          </div>
      
  )
}

export default Sidebar

/*
  <SideNav className= "sidebar" onSelect={selected => {
          console.log(selected)
          navigate('/'+ selected)
        }}
        style={{marginTop:"70px" , color: "white"} }>
            <SideNav.Toggle  />
            <SideNav.Nav defaultSelected="dashboard" className='nav'>
                  <NavItem className='nav-item' eventKey="dashboard">
                    <NavIcon className='nav-icon'><FontAwesomeIcon className="icon" icon={faTachometerAlt} style={{fontSize:"20px" }}/></NavIcon>
                    <NavText className='nav-text' style={{fontSize:"15px"}}>Dashboard</NavText>
                  </NavItem>
              <NavItem className='nav-item' eventKey="students">
                <NavIcon className='nav-icon'><FontAwesomeIcon className="icon" icon={faGraduationCap} style={{fontSize:"20px" }}/></NavIcon>
                <NavText className='nav-text' style={{fontSize:"15px"}}>Students</NavText>
                    <NavItem className='nav-item' eventKey="all-students">
                        <NavText className='nav-text' style={{fontSize:"15px" }}>All Student</NavText>
                    </NavItem>
                    <NavItem className='nav-item' eventKey="admission-form">
                        <NavText className='nav-text' style={{fontSize:"15px"}}>Admission Form</NavText>
                    </NavItem>
              </NavItem>
            </SideNav.Nav>
        </SideNav>
*/

/*
[
        {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiOutlineDashboard/>,
        iconClosed: <BsIcons.BsChevronDown/>,
        iconOpen: <BsIcons.BsChevronUp/>,
    },
    {
        title: 'Students',
        path: '/students',
        icon: <FaIcons.FaUserGraduate/>,
        iconClosed: <BsIcons.BsChevronDown/>,
        iconOpen: <BsIcons.BsChevronUp/>,
        subNav:[
            {
                title: 'All Students',
                path: '/student/allstudents',
                icon: <BsIcons.BsChevronDown/>,
            },
            {
                title: 'Student Details',
                path: '/students/studentdetails',
                icon: <BsIcons.BsChevronDown/>,
            },
            {
                title: 'Admission Form',
                path: '/students/admissionform',
                icon: <BsIcons.BsChevronDown/>,
            },
            {
                title: 'Student Promotion',
                path: '/students/studentpromotion',
                icon: <BsIcons.BsChevronDown/>,
            },
        ]
    },
    {
        title: 'Teachers',
        path: '/teachers',
        icon: <FaIcons.FaChalkboardTeacher/>,
        iconClosed: <BsIcons.BsChevronDown/>,
        iconOpen: <BsIcons.BsChevronUp/>,
        subNav:[
            {
                title: 'All teachers',
                path: '/student/allteachers',
                icon: <BsIcons.BsChevronDown/>,
            },
            {
                title: 'Parent Details',
                path: '/teachers/studentdetails',
                icon: <BsIcons.BsChevronDown/>,
            },
            {
                title: 'Add Teachers',
                path: '/teachers/addteachers',
                icon: <BsIcons.BsChevronDown/>,
            },
            
        ]
    },    
    {
        title: 'parents',
        path: '/parents',
        icon: <RiIcons.RiParentLine/>,
        iconClosed: <BsIcons.BsChevronDown/>,
        iconOpen: <BsIcons.BsChevronUp/>,
        subNav:[
            {
                title: 'All parents',
                path: '/student/allparents',
                icon: <BsIcons.BsChevronDown/>,
            },
            {
                title: 'Parent Details',
                path: '/parents/parentdetails',
                icon: <BsIcons.BsChevronDown/>,
            },
            {
                title: "Add Parent",
                path: '/parents/addparent',
                icon: <BsIcons.BsChevronDown/>,
            },
            
        ]
    },

]
*/