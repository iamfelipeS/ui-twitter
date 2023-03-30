import twitterLogo from '../assets/twitter-logo.png'
import { Link, NavLink } from 'react-router-dom';
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'

import './Sidebar.css';


export function Sidebar(){
  return(
    <aside className='sidebar'>
      <img className='twitterLogo' src={twitterLogo} alt="logo.png" />

        <nav className='main-navigation'>
          <NavLink to="/" >
            <House weight='fill'/>
            Home
          </NavLink>
          <a href="">
            <Hash />  
            Explore
          </a>
          <a href="">
            <Bell />
            Notifications
          </a>
          <a href="">
            <Envelope />
            Messages
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            Lists
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>
        <button className='new-tweet' type='button'>
          Tweet
        </button>
      </aside>
  )
}