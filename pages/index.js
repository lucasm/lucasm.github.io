import PageLayout from '../components/PageLayout';
import Icons from '../components/Icons';
import Cards from '../components/Cards';

export default function Home() {
  return (
    <PageLayout title="Lucas Menezes — Software Engineer" description="Lucas Menezes is a Software Engineer from Brazil creating websites, apps and open source projects.">
    
    <main>

        <section className="fullscreen">

            <div className="fullscreen-container">

                <div className="container home">

                    <figure id="profile">
                        <img src="//avatars.githubusercontent.com/lucasm" alt="Lucas Menezes profile photo"/>
                    </figure>

                    <h2>Lucas Menezes — Software Engineer</h2>
                    <p className="description">Hi there! I develop websites, apps and open source projects.</p>

                    <a href="#work" className="button">See my work</a>
                    
                </div>

            </div>

        </section>


        <section id="work" className="gray">

            <div className="container">

            <div className="left">
                <h3 className="subtitle">Selected work</h3>
            </div>
            
            <Cards/>

            </div>

        </section>

        <section id="about" >
            <div className="container left">

                
                <h3 className="subtitle">About me</h3>
                
                <div className="special">

                    <h1>Building & refining digital products.</h1>

                    <div className="col">
                        <div className="col-left">
                            <p>I’ve been working as consultant for businesses and startups, helping them to solve problems and establish their online presence with websites and applications.</p>
                                
                            <p>I build reactive front-end with focus on user experience (UX), responsive design, accessibility, progressive enhancement and performance — and adjacent back-end, with  APIs integrations and databases.</p>
                        </div>
                        <div className="col-right">
                            <p>JavaScript, HTML, CSS, Node.js, React, Next.js, PostgreSQL, PHP, WordPress, Git, AWS, Microsoft Azure and Vercel are being my main development stack.</p>

                            <p>Developing digital products to empower people is my passion. So, I’m also creating open source projects backed by the community.</p>

                            <p>Want to work together? Contact me to check my current availability to discuss your project.</p>
                            
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <section id="contact" className="bg-y">
            <div className="container left">

                <h3 className="subtitle">Let’s talk</h3>

                <div className="special special-contact">
                    
                    <h2><a href="mailto:hello@lucasm.dev?subject=Let's%20work%20together">hello@lucasm.dev</a></h2>

                    <Icons/>

                </div>

            </div>
        </section>

    </main>

    </PageLayout>)
}
