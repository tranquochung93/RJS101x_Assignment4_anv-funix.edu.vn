import React from 'react';
import {BsFillTelephoneForwardFill} from 'react-icons/bs'
import {MdSmartphone,MdOutlineMailOutline} from'react-icons/md'
import logoGoogle from './image/logoGoogle.png'
import logoFacebook from './image/logoFacebook.png'
import logoTw from './image/logoTw.png'
import styles from './footer.module.css'
function Footer(props) {
    return (
        <div className={styles.footerContainer}>
           <div className={styles.footerBorder}>
                <div className={styles.container}>
                    {/* address */}
                        <div className={styles.footer}>
                            <div className={styles.footerAddress}>
                                    <h2 className={styles.ourAddress}>Our Address</h2>
                                    <h4 className={styles.address}>121, Clear Water Bay Roact</h4>
                                    <h4 className={styles.address}>Clear Water Bay, Kowioon</h4>
                                    <h2 className={styles.hongkong}>HONG KONG</h2>
                            </div>
                            <div className={styles.footerContact}>
                                    <span className={styles.contact}>
                                        <BsFillTelephoneForwardFill/>
                                        <span style={{marginLeft:'5px'}}>+852 1234 5678</span>
                                    </span>
                                    <span className={styles.contact}>
                                        <MdSmartphone/>
                                        <span style={{marginLeft:'5px'}}>+852 9876 5432</span>
                                    </span>
                                    <span className={styles.contact}>
                                        <MdOutlineMailOutline/>
                                        <a href='mailto:123@gmail.com' style={{marginLeft:'5px'}}>123@gmail.com</a>
                                    </span>
                            </div>
                        </div>
                        {/* icon social media */}
                        <div>
                            <img className={styles.IconContact} src={logoGoogle}/>
                            <img className={styles.IconContact} src={logoFacebook}/>
                            <img className={styles.IconContact} src={logoTw}/>
                        </div>
                </div>
                <div className={styles.copyRight}>
                    <h4>@CopyRight 2018 Ristorante Con Fusion</h4>
                </div>
           </div>
        </div>
    );
}

export default Footer;