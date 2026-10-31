import '../styles/about.css';
import picture from '../assets/portrait.png';

// The button appears when the current CV is added to this asset path.
const cvFiles = import.meta.glob('../assets/Sian-Kearley-CV.pdf', {
    eager: true,
    query: '?url',
    import: 'default',
});
const cvUrl = Object.values(cvFiles)[0] as string | undefined;
const About = () => (
    <section className="hero" id="about" aria-labelledby="intro-title">
        <div className="hero-copy"><p className="eyebrow">ANDROID & MOBILE SDK ENGINEER</p>
            <h1 id="intro-title">Hi, I’m Siân.<br /><span>Software<br />Engineer.</span></h1>
            <p className="intro">I work on Android apps, payment SDKs, microservices and APIs.</p>
            <p className="bio">I’m a Senior Associate Software Engineer at Global Payments. I use Kotlin and Jetpack Compose for Android development and contribute to the Frontend Community of Practice (FE CoP).</p>
            <div className="hero-actions"><a className="button primary" href="#work">View my work</a>{cvUrl && <a className="button secondary" href={cvUrl} download="Sian-Kearley-CV.pdf">Download CV <span className="file-type">PDF</span></a>}<a className="text-link" href="#contact">Contact me</a></div>
        </div>
        <div className="portrait-wrap"><div className="portrait-frame"><img src={picture} alt="Siân" className="portrait" /></div><div className="portrait-note"><span className="status-dot" /> Android & mobile SDKs</div><span className="portrait-caption">ENGINEER / SCI-FI FAN / LEGO BUILDER</span></div>
        <div className="about-details"><div><p className="eyebrow">CURRENT ROLE</p><p>Senior Associate Software Engineer at <a href="https://www.globalpayments.com/">Global Payments</a></p></div><div><p className="eyebrow">WORKING WITH</p><p>Android · Kotlin · Jetpack Compose · Mobile SDKs</p></div><div><p className="eyebrow">OUTSIDE WORK</p><p>Science fiction, Xbox, Switch & a good LEGO build.</p></div></div>
    </section>
);
export default About;
