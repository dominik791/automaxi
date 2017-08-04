import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.stylesheet.css';
import ReactMarkdown from 'react-markdown'

const Description = ({ backgroundImg, heading, text, isDark, children, height = '110vh' }) =>
  <div
    className={`${styles.Description} ${styles[isDark ? 'color-white' : 'color-dark']}`}
    style={{ height }}
  >
    <div className={styles.background}
         style={{ background: `url(${backgroundImg}) center/cover fixed` }}
    />
    <div className={styles.contentWrapper}>
      {
        heading &&
          <span>
            <h3 className={`${styles.heading} ${styles[isDark ? 'color-white' : 'color-dark']}`}>{heading}</h3>
            <hr className={`${styles.underlining} ${styles[isDark ? 'underlining-yellow' : 'underlining-blue']}`} />
          </span>
      }
      {children}
      <div className={styles.text}><ReactMarkdown source={text} /></div>
    </div>
  </div>

Description.propTypes = {
  backgroundImg: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  isDark: PropTypes.bool,
  children: PropTypes.element,
  height: PropTypes.string
};

export default Description;
