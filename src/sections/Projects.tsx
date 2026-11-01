import instagramScreenshot from '../assets/instadupe.png';
import androidPoster from '../assets/android101-poster.jpg';

const demoFiles = import.meta.glob('../assets/android101-demo.mp4', {
    eager: true,
    query: '?url',
    import: 'default',
});
const androidDemo = Object.values(demoFiles)[0] as string | undefined;

const professionalProjects = [
    {
        title: 'Access Checkout Android',
        description: 'A payment SDK that helps developers integrate checkout into native Android applications.',
        contribution: 'I’ve helped maintain the Android SDK since joining Worldpay, now Global Payments.',
        tags: ['Android', 'Mobile SDK', 'Payments'],
        documentation: 'https://docs.worldpay.com/access/products/checkout/android',
    },
    {
        title: 'Access Checkout React Native',
        description: 'A payment SDK for adding checkout to React Native apps.',
        contribution: 'I helped set up the React Native SDK with bridges to the existing iOS and Android SDKs. I also help maintain it.',
        tags: ['React Native', 'Native bridges', 'iOS & Android'],
        documentation: 'https://docs.worldpay.com/access/products/checkout/react-native',
    },
];

const Projects = () => (
    <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="work-heading">
            <div><p className="eyebrow">PORTFOLIO</p><h2 id="work-title">Projects</h2></div>
            <a className="text-link" href="https://github.com/sian-codes">View GitHub</a>
        </div>
        <h3 className="work-group-title">Professional work</h3>
        <p className="work-context">Team projects at Worldpay, now Global Payments.</p>
        <div className="work-projects">
            {professionalProjects.map(project => (
                <article className="project-card work-project" key={project.title}>
                    <div className="project-copy">
                        <p className="eyebrow">PAYMENTS / MOBILE SDK</p>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <h4 className="contribution-title">My contribution</h4>
                        <p>{project.contribution}</p>
                        <ul className="project-tags">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                        <a className="text-link" href={project.documentation}>View documentation</a>
                    </div>
                </article>
            ))}
        </div>
        <h3 className="work-group-title personal-work-title">Personal work</h3>
        <article className={`project-card android-project${androidDemo ? '' : ' work-project'}`}>
            {androidDemo && (
                <div className="project-video">
                    <video controls playsInline preload="none" poster={androidPoster} aria-label="Android 101 app demonstration">
                        <source src={androidDemo} type="video/mp4" />
                        Your browser does not support this video. <a href={androidDemo}>Download the demo</a>.
                    </video>
                </div>
            )}
            <div className="project-copy">
                <p className="eyebrow">ANDROID APP</p>
                <h3>Android 101</h3>
                <p>A guide to Android development with short lessons, code examples and quizzes. I built it with Kotlin and Jetpack Compose, with offline content, saved progress and a reference section for common Android mistakes.</p>
                <ul className="project-tags"><li>Kotlin</li><li>Jetpack Compose</li><li>Material 3</li><li>Light & dark themes</li></ul>
                <a className="text-link" href="https://github.com/sian-codes/android101">View source code</a>
            </div>
        </article>
        <article className="project-card">
            <div className="project-image"><img src={instagramScreenshot} alt="Instagram interface clone showing its feed and navigation" loading="lazy" /></div>
            <div className="project-copy">
                <p className="eyebrow">REACT PROJECT</p>
                <h3>Instagram UI Clone</h3>
                <p>I recreated Instagram’s feed, profiles, navigation and stories in React to practise CSS layouts and reusable components.</p>
                <ul className="project-tags"><li>React</li><li>UI development</li><li>CSS</li></ul>
                <a className="text-link" href="https://github.com/sian-codes?tab=repositories">Browse my repositories</a>
            </div>
        </article>
    </section>
);
export default Projects;
