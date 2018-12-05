import React from 'react';
import { Navbar } from 'reactstrap';
import UserBadge from '../UserBadge/UserBadge';
import Logo from '../Logo/Logo';
import Target from '../Target/Target';
import './TopBar.css';

function TopBar() {
  return (
    <div className="header-main">
      <Navbar light>
        <UserBadge
          imageSrc="//placekitten.com/100/100"
          userName="Marjolein"
          scorePoints={183}
        />
        <Logo
          logoSrc="//www.protacon.com/wp-content/uploads/2016/03/logo_rexel.jpg"
          logoTitle="Rexel Logo"
        />
        <Target targetScore={15} />
      </Navbar>
    </div>
  );
}

export default TopBar;
