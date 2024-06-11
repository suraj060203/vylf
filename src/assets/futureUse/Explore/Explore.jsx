/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { arrow } from '../..'; // Assuming 'arrow' is your image import

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState({
    Events: false,
    Learning: false,
    WorkWithUs: false,
  });

  const toggleItem = (itemName) => {
    setExpandedItems({
      ...expandedItems,
      [itemName]: !expandedItems[itemName],
    });
  };

  return (
    <div css={styles.container}>
      <div css={styles.header} className=' border-b-4 border-b-cyan-600'></div>
      <div css={styles.sidebar}>
        <nav css={styles.nav} className='mt-15'>
          <a css={styles.navItem} onClick={() => toggleItem('Events')}>
            Events
            <img
              src={arrow}
              alt="arrow"
              css={styles.arrowIcon(expandedItems['Events'])}
              style={{ transform: expandedItems['Events'] ? 'rotate(90deg)' : 'rotate(0deg)' }}
            />
          </a>
          {expandedItems['Events'] && (
            <div css={styles.subMenu} >
              <a href="#" className='mb-4'>Upcoming</a>
              <a href="#" className='mb-4'>OnGoing</a>
              <a href="#" className='mb-4'>Recent</a>
              <a href="#" className='mb-4'>Glimpses</a>
            </div>
          )}

          <a  css={styles.navItem} onClick={() => toggleItem('Learning')}>
            Learning
            <img
              src={arrow}
              alt="arrow"
              css={styles.arrowIcon(expandedItems['Learning'])}
              style={{ transform: expandedItems['Learning'] ? 'rotate(90deg)' : 'rotate(0deg)' }}
            />
          </a>
          {expandedItems['Learning'] && (
            <div css={styles.subMenu}>
                    <a href="#" className='mb-4'>Upcoming</a>
              <a href="#" className='mb-4'>Game Dev</a>
              <a href="#" className='mb-4'>UI/UX</a>
              <a href="#" className='mb-4'>Competitive Dev</a>
              <a href="#" className='mb-4'>Arduino Dev</a>
            </div>
          )}

          <a css={styles.navItem} onClick={() => toggleItem('WorkWithUs')}>
            Work With Us
            <img
              src={arrow}
              alt="arrow"
              css={styles.arrowIcon(expandedItems['WorkWithUs'])}
              style={{ transform: expandedItems['WorkWithUs'] ? 'rotate(90deg)' : 'rotate(0deg)' }}
            />
          </a>
          {expandedItems['WorkWithUs'] && (
            <div css={styles.subMenu}>
              <a href="#" className='mb-4'>Game Dev</a>
              <a href="#" className='mb-4'>UI/UX</a>
              <a href="#" className='mb-4'>Competitive Dev</a>
              <a href="#" className='mb-4'>Arduino Dev</a>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

const styles = {
  container: css`
    display: flex;
    position: relative;
  `,
  header: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; /* Full width */
    height: 75px; /* Adjust height as needed */
    background-color: #264653; /* Replace with your desired color */
    z-index: -1; /* Ensure the color background is behind other content */
  `,
  sidebar: css`
    background-color: #f3f4f6;
    width: 220px;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
  `,
  nav: css`
    display: flex;
    flex-direction: column;
  `,
  navItem: css`
    padding: 10px 0;
    font-size: 16px;
    color: #1f2937;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
      color: #264653;
    }
    &:hover::after {
      content: '';
      position: absolute;
      left: calc(100% + 5px); /* Adjust as needed */
      top: 0;
      height: 100%;
      width: 4px; /* Adjust width as needed */
      background-color: transparent; /* Set to transparent to hide the border */
    }
  `,
  subMenu: css`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: #1f2937;
  a {
    color: #1f2937; /* Set default color */
    transition: color 0.3s ease; /* Add transition effect */
    &:hover {
      color: #38a3a5; /* Change color on hover */
    }
  }
`,  
  arrowIcon: (expanded) => css`
    width: 20px;
    height: 20px;
    margin-left: 5px;
    transition: transform 0.3s ease;
    filter: ${expanded ? 'invert(8%) sepia(82%) saturate(6011%) hue-rotate(175deg) brightness(88%) contrast(99%)' : 'none'};
  
  `,
};

export default Sidebar;
