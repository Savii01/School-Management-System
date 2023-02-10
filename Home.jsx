import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'
import TopBar from '../TopBar/TopBar'
import Sidebar from '../Sidebars/Sidebar.jsx'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardHome from '../../Components/DashboardPages/DashboardHome/DashboardHome'
import StudentDashboard from '../../Components/DashboardPages/DashboardHome/studentDashboard'
import Student from '../../Components/DashboardPages/Students/AllStudents/Student'
import AdmissionForm from '../../Components/DashboardPages/Students/Admission Form/AdmissionForm'
import { useState } from 'react'
import StudentDetails from '../../Components/DashboardPages/Students/StudentDetails'


function Home() {
  


  return (
    <div className='home'>
      <Router>
        {/* <TopBar/> */}
        <div className="flex ">
        <Sidebar/>
        <div className="ml-10 mt-10">
          <Routes>
            <Route path="/dashboard" element={<DashboardHome />}/>
            <Route path="/Student-dashboard" element={<StudentDashboard />}/>
            <Route path="/student/allstudents" element={<Student />}/>
            <Route path="/students/studentdetails" element={<StudentDetails />}/>
            <Route path="/students/admissionform" element={<AdmissionForm />}/>
            <Route path="/students/admissionform" element={<AdmissionForm />}/>
            <Route path="/students/admissionform" element={<AdmissionForm />}/>
            <Route path="/students/admissionform" element={<AdmissionForm />}/>
            <Route path="/students/admissionform" element={<AdmissionForm />}/>
            <Route path="/students/admissionform" element={<AdmissionForm />}/>
          </Routes>  
        </div>
        </div>
        
      </Router>
    </div>
  )
}

export default Home

/*
  const Menu =[
        {
        title: 'Dashboard',
        icon: <AiIcons.AiOutlineDashboard/>,
    },
    {
        title: 'Students',
        // path: '/students',
        icon: <FaIcons.FaUserGraduate/>,
        // iconClosed: <AiIcons.AiOutlineArrowRight/>,
        // iconOpen: <AiIcons.AiOutlineArrowDown/>,
        sub:true,
        subNav:[
            {
                title: 'All Students',
                // path: '/student/allstudents',
                // icon: <AiIcons.AiOutlineArrowRight/>,
            },
            {
                title: 'Student Details',
                // path: '/students/studentdetails',
                // icon: <AiIcons.AiOutlineArrowRight/>,
            },
            {
                title: 'Admission Form',
                // path: '/students/admissionform',
                // icon: <AiIcons.AiOutlineArrowRight/>,
            },
            {
                title: 'Student Promotion',
                // path: '/students/studentpromotion',
                // icon: <AiIcons.AiOutlineArrowRight/>,
            },
        ]
    },
    {
        title: 'Teachers',
        // path: '/teachers',
        icon: <FaIcons.FaChalkboardTeacher/>,
        // iconClosed: <AiIcons.AiOutlineArrowRight/>,
        // iconOpen: <AiIcons.AiOutlineArrowDown/>,
        sub:true,
        subNav:[
            {
                title: 'All teachers',
                // path: '/student/allteachers',
                // icon: <AiIcons.AiOutlineArrowRight/>,
            },
            {
                title: 'Teacher Details',
                // path: '/teachers/studentdetails',
                // icon: <AiIcons.AiOutlineArrowRight/>,
            },
            {
                title: 'Add Teachers',
                // path: '/teachers/addteachers',
                // icon: <AiIcons.AiOutlineArrowRight/>,
            },
            
                    ]
                },    
                {
                    title: 'parents',
                    // path: '/parents',
                    icon: <RiIcons.RiParentLine/>,
                    // iconClosed: <AiIcons.AiOutlineArrowRight/>,
                    // iconOpen: <AiIcons.AiOutlineArrowDown/>,
                    sub:true,
                    subNav:[
                        {
                            title: 'All parents',
                            // path: '/student/allparents',
                            // icon: <AiIcons.AiOutlineArrowRight/>,
                        },
                        {
                            title: 'Parent Details',
                            // path: '/parents/parentdetails',
                            // icon: <AiIcons.AiOutlineArrowRight/>,
                        },
                        {
                            title: "Add Parent",
                            // path: '/parents/addparent',
                            // icon: <AiIcons.AiOutlineArrowRight/>,
                        },
                        
                    ]
                },

            ]
*/