import React from 'react';
import styles from '../styles/footer.module.css';
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter, SlSocialLinkedin, SlSocialYoutube } from 'react-icons/sl'

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.logo}>
                    <img src="/logo.png" alt="logo" style={{ height: '10em' }} />
                    <h1 className={styles.heading}>National Institute Of Technology Hamirpur</h1>
                    <p>(An Institute of National Importance)</p>
                </div>
                <div className={styles.contentBox}>
                    <div className={styles.content}>
                        <h1>Policies</h1>
                        <div className={styles.line}></div>
                        <div className={styles.links}><a href='#'>IIM Act and Rules</a></div>
                        <div className={styles.links}><a href='#'>Privacy Policy-T&C</a></div>
                        <div className={styles.links}><a href='#'>Whistleblower Policy</a></div>
                    </div>
                    <div className={styles.content}>
                        <h1>Useful Links</h1>
                        <div className={styles.line}></div>
                        <div className={styles.links}><a href='#'>ESS Portal</a></div>
                        <div className={styles.links}><a href='#'>IIMA Mail</a></div>
                        <div className={styles.links}><a href='#'>HR Policy (Staff)</a></div>
                        <div className={styles.links}><a href='#'>Sitemap</a></div>
                    </div>
                    <div className={styles.content}>
                        <h1>Get In Touch</h1>
                        <div className={styles.line}></div>
                        <div className={styles.links}><a href='#'>Connect with us</a></div>
                        <div className={styles.links}><a href='#'>Jobs</a></div>
                        <div className={styles.links}><a href='#'>Maps & Directions</a></div>
                    </div>
                </div>
                <div className={styles.icons} style={{ fontSize: '25px' }}>
                    <a href='#'><SlSocialFacebook /></a>
                    <a href='#'><SlSocialInstagram /></a>
                    <a href='#'><SlSocialTwitter /></a>
                    <a href='#'><SlSocialLinkedin /></a>
                    <a href='#'><SlSocialYoutube /></a>
                </div>
                <p className={styles.copyright}>© 2023 All Rights Reserved .National Institute of Technology Hamirpur</p>
            </footer>
        </>
    )
}

export default Footer
