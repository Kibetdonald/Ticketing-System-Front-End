import React from 'react'
import '../assets/Style/Dashboard.scss'
import { BsSearch, BsBell, BsPower, BsListStars, BsBriefcase } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { RiDashboardFill } from 'react-icons/ri';
import { TbUsers } from 'react-icons/tb';




export default function Dashboard() {
  return (
    <div>
      <input type="checkbox" id="menu-toggle"/>
    <div class="sidebar">
        <div class="side-header">
            <h4>Resolve<span>Now</span></h4>
        </div>
        
        <div class="side-content">
            <div class="profile">
        {/* profile info here */}
            </div>

            <div class="side-menu">
                <ul>
                    <li>
                       <a href="" class="active">
                            <span><RiDashboardFill style={{color: "#fff", fontSize: "14px"}}/></span>
                            <small>Dashboard</small>
                        </a>
                    </li>
                    <li>
                       <a href="">
                            <span><BsListStars style={{color: "#fff", fontSize: "14px"}}/></span>
                            <small>Tickets</small>
                        </a>
                    </li>
                    <li>
                       <a href="">
                            <span><TbUsers style={{color: "#fff", fontSize: "14px"}}/></span>
                            <small>Users</small>
                        </a>
                    </li>
                    <li>
                       <a href="">
                       <span><TbUsers style={{color: "#fff", fontSize: "14px"}}/></span>
                            <small>Teams</small>
                        </a>
                    </li>
                    <li>
                       <a href="">
                            <span><BsBriefcase style={{color: "#fff", fontSize: "14px"}}/></span>
                            <small>SLA</small>
                        </a>
                    </li>
                    <li>
                       <a href="">
                            <span class="las la-tasks"></span>
                            <small>System Logs</small>
                        </a>
                    </li>
                    <li>
                       <a href="">
                            <span class="las la-clipboard-list"></span>
                            <small>Reports</small>
                        </a>
                    </li>
                    <li>
                       <a href="">
                            <span class="las la-shopping-cart"></span>
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
        
        
        <main>
            
            <div class="page-header">
                <h1>Dashboard</h1>
                <small>Home / Dashboard</small>
            </div>
            
            <div class="page-content">
            
                <div class="analytics">

                    <div class="card">
                        <div class="card-head">
                            <h2>4</h2>
                            <span class="las la-user-friends"></span>
                        </div>
                        <div class="card-progress">
                            <small>Unresolved</small>
                            <div class="card-indicator">
                                <div class="indicator one" style={{width:"20%"}}></div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-head">
                            <h2>3</h2>
                            <span class="las la-eye"></span>
                        </div>
                        <div class="card-progress">
                            <small>Overdue</small>
                            <div class="card-indicator">
                                <div class="indicator two" style={{width: "10%"}}></div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-head">
                            <h2>4</h2>
                            <span class="las la-shopping-cart"></span>
                        </div>
                        <div class="card-progress">
                            <small>Open</small>
                            <div class="card-indicator">
                                <div class="indicator three" style={{width: "65%"}}></div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-head">
                            <h2>2</h2>
                            <span class="las la-envelope"></span>
                        </div>
                        <div class="card-progress">
                            <small>Unassigned</small>
                            <div class="card-indicator">
                                <div class="indicator four" style={{width:"10%"}}></div>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="records table-responsive">

                    <div class="record-header">
                        <div class="add">
                            <span>Entries</span>
                            <select name="" id="">
                                <option value="">ID</option>
                            </select>
                            <button>Add record</button>
                        </div>

                        <div class="browse">
                           <input type="search" placeholder="Search" class="record-search"/>
                            <select name="" id="">
                                <option value="">Status</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th><span class="las la-sort"></span> CLIENT</th>
                                    <th><span class="las la-sort"></span> TOTAL</th>
                                    <th><span class="las la-sort"></span> ISSUED DATE</th>
                                    <th><span class="las la-sort"></span> BALANCE</th>
                                    <th><span class="las la-sort"></span> ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client">
                                           {/* <div class="client-img bg-img" style="background-image: url(img/3.jpeg)"></div> */}
                                            <div class="client-info">
                                                <h4>Andrew Bruno</h4>
                                                <small>bruno@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        -$205
                                    </td>
                                    <td>
                                        <div class="actions">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client">
                                           {/* <div class="client-img bg-img" style="background-image: url(img/1.jpeg)"></div> */}
                                            <div class="client-info">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        -$205
                                    </td>
                                    <td>
                                        <div class="actions">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client">
                                           {/* <div class="client-img bg-img" style="background-image: url(img/1.jpeg)"></div> */}
                                            <div class="client-info">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $2171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        <span class="paid">Paid</span>
                                    </td>
                                    <td>
                                        <div class="actions">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client">
                                           {/* <div class="client-img bg-img" style="background-image: url(img/3.jpeg)"></div> */}
                                            <div class="client-info">
                                                <h4>Andrew Bruno</h4>
                                                <small>bruno@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        -$205
                                    </td>
                                    <td>
                                        <div class="actions">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client">
                                           {/* <div class="client-img bg-img" style="background-image: url(img/1.jpeg)"></div> */}
                                            <div class="client-info">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        <span class="paid">Paid</span>
                                    </td>
                                    <td>
                                        <div class="actions">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client">
                                           {/* <div class="client-img bg-img" style="background-image: url(img/1.jpeg)"></div> */}
                                            <div class="client-info">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $2171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        <span class="paid">Paid</span>
                                    </td>
                                    <td>
                                        <div class="actions">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client">
                                           {/* <div class="client-img bg-img" style="background-image: url(img/3.jpeg)"></div> */}
                                            <div class="client-info">
                                                <h4>Andrew Bruno</h4>
                                                <small>bruno@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        -$205
                                    </td>
                                    <td>
                                        <div class="actions">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client">
                                           {/* <div class="client-img bg-img" style="background-image: url(img/1.jpeg)"></div> */}
                                            <div class="client-info">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        -$205
                                    </td>
                                    <td>
                                        <div class="actions">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client">
                                           {/* <div class="client-img bg-img" style="background-image: url(img/1.jpeg)"></div> */}
                                            <div class="client-info">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $2171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        <span class="paid">Paid</span>
                                    </td>
                                    <td>
                                        <div class="actions">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>

                </div>
            
            </div>
            
        </main>
        
    </div>
    </div>
  )
}
