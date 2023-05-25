import React from 'react'
import { BsSearch, BsBell, BsPower, BsListStars, BsBriefcase, BsGraphUp } from 'react-icons/bs';
import { CiMail, CiSettings } from 'react-icons/ci';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { RiDashboardFill } from 'react-icons/ri';
import { TbUsers } from 'react-icons/tb';

export default function DashboardSideBar() {
  return (
    <div> <input type="checkbox" id="menu-toggle"/>
    <div class="sidebar">
        <div class="side-header">
            <h4>R<span>N</span></h4>
        </div>
        
        <div class="side-content">
            <div class="profile">
        {/* profile info here */}
            </div>

            <div class="side-menu">
                <ul>
                    <li>
                       <a href="" class="active">
                            <span><RiDashboardFill style={{color: "#fff", fontSize: "20px"}}/></span>
                            &nbsp;
                            <small>Dashboard</small>
                        </a>
                    </li>
                    <li>
                       <a href="/tickets">
                            <span><BsListStars style={{color: "#fff", fontSize: "20px"}}/></span>
                            &nbsp;
                            <small>Tickets</small>
                        </a>
                    </li>
                    <li>
                       <a href="/users">
                            <span><TbUsers style={{color: "#fff", fontSize: "20px"}}/></span>
                            &nbsp;
                            <small>Users</small>
                        </a>
                    </li>
                    <li>
                       <a href="/teams">
                       <span><TbUsers style={{color: "#fff", fontSize: "20px"}}/></span>
                       &nbsp;
                            <small>Teams</small>
                        </a>
                    </li>
                    <li>
                       <a href="/sla">
                            <span><BsBriefcase style={{color: "#fff", fontSize: "20px"}}/></span>
                            &nbsp;
                            <small>SLA</small>
                        </a>
                    </li>
                    <li>
                       <a href="/logs">
                       <span><BsListStars style={{color: "#fff", fontSize: "20px"}}/></span>
                       &nbsp;
                            <small>System Logs</small>
                        </a>
                    </li>
                    <li>
                       <a href="/reports">
                       <span><BsGraphUp style={{color: "#fff", fontSize: "20px"}}/></span>
                       &nbsp;
                            <small>Reports</small>
                        </a>
                    </li>
                    <li>
                       <a href="/settings">
                       <span><CiSettings style={{color: "#fff", fontSize: "20px"}}/></span>
                       &nbsp;
                            <small>Settings</small>
                        </a>
                    </li>
                 

                </ul>
            </div>
        </div>
    </div>
    
    <div class="main-content">
        
        <header>
            <div class="header-content">
                <label for="menu-toggle">
                    <span><AiOutlineMenuUnfold/></span>
                </label>
                
                <div class="header-menu">
                    <label for="">
                        <span><BsSearch style={{fontSize: "16px"}}/></span>
                    </label>
                    
                    <div class="notify-icon">
                        <span><CiMail style={{fontSize: "16px"}}/></span>
                        <span class="notify">4</span>
                    </div>
                    
                    <div class="notify-icon">
                        <span><BsBell style={{fontSize: "16px"}}/></span>
                        <span class="notify">3</span>
                    </div>
                    
                    <div class="user">
                        {/* <div class="bg-img" style="background-image: url(img/1.jpeg)"></div> */}
                        
                        <span><BsPower/></span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </header>
        </div>
    </div>
  )
}
