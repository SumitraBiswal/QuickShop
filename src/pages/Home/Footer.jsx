
import style from "./Footer.module.css"
export default function Footer(){
    return(
    <footer className={style.footer}>
        <div className={style.container}>
<div className={style.about }>
<h3>QuickShop</h3>
<p>Welcome to QuickShop !  " Fresh groceries ,faster at your doorstep.
    Our mission is to simplify  your shopping exprience .
    Thanks a lot to visiting my QuickShop."</p>
</div>
<div className={style.links}>
    <h4>Quick Links</h4>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
         <li>
            <a href="/about">About Us</a>
        </li>
         <li>
            <a href="/contact">Contact Us</a>
        </li>
         <li>
            <a href="/terms">terms & conditions </a>
        </li>
    </ul>
    <div className={style.ContactInfo}>
<h4> ContactInfo</h4>
<p>Email:quickshop123@quick.com</p>
<p>Phone: 91+ 12345 56789</p>
<p> Address : 123 plot No,abc Village ,pin :3456781,India</p>
    </div>
</div>
<div className={style.bottomBar}>
<p>{new Date().getFullYear()}Quickshop . All rights reserved.</p>
</div>
        </div>

    </footer>
    );
}