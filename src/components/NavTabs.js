import React from 'react';

function NavTabs(props) {
  const tabs = ['About Me', 'Portfolio', 'Resume', 'Contact'];
  return (
    <ul className="nav nav-tabs">
        Helen Yi
        {tabs.map(tab => (
            <li className="nav-item" key={tab}>
            <a
                href={'#' + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                }
            >
                {tab}
            </a>
            </li>
        ))}
    </ul>
  );
}

export default NavTabs;