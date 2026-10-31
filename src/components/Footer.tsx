import { useState } from 'react';

const email = 'siannicole@proton.me';

const Footer = () => {
    const [copyStatus, setCopyStatus] = useState('');

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopyStatus('Email address copied.');
        } catch {
            setCopyStatus('Please select and copy the email address above.');
        }
    };

    return (
        <footer className="site-footer" id="contact" aria-labelledby="contact-title">
            <div className="footer-top">
                <div>
                    <p className="eyebrow">CONTACT</p>
                    <h2 id="contact-title">Get in touch</h2>
                    <p className="contact-email">{email}</p>
                    <div className="contact-actions">
                        <button className="button secondary" type="button" onClick={copyEmail}>Copy email address</button>
                        <a className="text-link" href={`mailto:${email}`}>Email me</a>
                    </div>
                    <p className="contact-status" role="status">{copyStatus}</p>
                </div>
                <div className="social-links">
                    <a href="https://github.com/sian-codes">GitHub</a>
                    <a href="https://www.linkedin.com/in/sian-kearley/">LinkedIn</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Siân Kearley</p>
                <p>Built with React & TypeScript.</p>
                <a href="#main">Back to top</a>
            </div>
        </footer>
    );
};
export default Footer;
