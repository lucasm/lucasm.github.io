import PageLayout from '../components/PageLayout';
import Cards from '../components/Cards';

export default function Home() {
  return (
    <PageLayout title="Lucas Menezes — Front End Software Engineer" description="Lucas Menezes is a Front End Software Engineer from Brazil creating websites, apps and open source projects.">
    
    <main>

        <section className="fullscreen">

            <div className="fullscreen-container">
                <div className="container home">

                    <figure id="profile">
                        <img src="//avatars.githubusercontent.com/lucasm" alt="Lucas Menezes profile photo"/>
                    </figure>

                    <h2>Lucas Menezes — Front End Software Engineer</h2>
                    <p className="description">I create websites, apps and open source projects.</p>

                    <div>
                        <a href="#work" className="button">View my work</a>
                    </div>

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

                    <h1>I build, deploy and refine.</h1>

                    <div className="col">
                        <div className="col-left">
                            <p>I’ve been working as consultant for startups and business, helping them to solve problems and establish their online presence with refined websites and apps.</p>
                                
                            <p>I build reactive front-end user interfaces, with strong focus on user experience, responsive design, accessibility, progressive enhancement and performance. Adjacent back-end too, with databases and APIs integrations.</p>
                        </div>
                        <div className="col-right">
                            <p>JavaScript, TypeScript, HTML, CSS, Node.js, React, Next.js, REST APIs, SQL, PHP, WordPress, Git, AWS, Microsoft Azure and Vercel are being my main development stack.</p>

                            <p>I’m also the creator of <a href="https://patreon.com/lucasm" target="_blank" rel="noopener">open source projects</a> backed by the community. Develop digital products that empower people is my passion.</p>

                            <p>Wanna to work together? Contact me to check my availability to discuss your project.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <section id="contact" className="bg-y">
            <div className="container left">

                <h3 className="subtitle">Get in touch</h3>

                <div className="special special-contact">

                    <h2><a href="mailto:hello@lucasm.dev?subject=Let's%20work%20together">hello@lucasm.dev</a></h2>

                    <div className="icons">
                        
                        <a href="https://twitter.com/lucasmezs" target="_blank" rel="noopener" title="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path  className="svg" d="M13.25,3.58a5,5,0,0,1,7,.23A10.54,10.54,0,0,0,23.39,2.6a5.28,5.28,0,0,1-2.16,2.74A9.55,9.55,0,0,0,24,4.55v0a10.07,10.07,0,0,1-2.45,2.55,14.35,14.35,0,0,1-6.61,12.63,13.92,13.92,0,0,1-7.66,2,13.72,13.72,0,0,1-5.13-1.06A17.48,17.48,0,0,1,0,19.58H0a3.94,3.94,0,0,1,.68,0A10,10,0,0,0,7.3,17.51a4.82,4.82,0,0,1-2.58-.78,5,5,0,0,1-2-2.65A4.72,4.72,0,0,0,4.89,14,4.94,4.94,0,0,1,1,9.12a5.28,5.28,0,0,0,2.22.62,5,5,0,0,1-1.5-6.6A14,14,0,0,0,11.83,8.31,5,5,0,0,1,13.25,3.58Z"/></svg>Twitter
                        </a>
                        <a href="https://instagram.com/lucasmezs" target="_blank" rel="noopener" title="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="svg" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>Instagram
                        </a>
                        <a href="https://github.com/lucasm" target="_blank" rel="noopener" title="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="svg" d="M12,.37A11.93,11.93,0,0,0,8.15,23.62c.59.08.81-.29.81-.58V21c-3.3.74-4-1.61-4-1.61A3,3,0,0,0,3.6,17.68c-1-.73.08-.73.08-.73A2.52,2.52,0,0,1,5.51,18.2a2.54,2.54,0,0,0,3.44,1H9a2.57,2.57,0,0,1,.74-1.61c-2.65-.3-5.43-1.33-5.43-6A4.51,4.51,0,0,1,5.51,8.44a4.17,4.17,0,0,1,.15-3.16S6.68,5,9,6.53a10.53,10.53,0,0,1,3-.37,13.33,13.33,0,0,1,3,.37c2.27-1.54,3.3-1.25,3.3-1.25a4.58,4.58,0,0,1,.14,3.16,4.71,4.71,0,0,1,1.25,3.23c0,4.62-2.79,5.57-5.43,5.86a2.84,2.84,0,0,1,.81,2.21V23c0,.29.22.66.81.58A12,12,0,0,0,24,12.25,12,12,0,0,0,12,.37Z"/></svg>GitHub
                        </a>
                        <a href="https://linkedin.com/in/lucasmezs" target="_blank" rel="noopener" title="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="svg" d="M1.6.06H22.35A1.81,1.81,0,0,1,24,1.83V22.06a1.82,1.82,0,0,1-1.62,1.88H1.62A1.76,1.76,0,0,1,0,22.35V1.66A1.75,1.75,0,0,1,1.6.06M4.84,3.39A2.07,2.07,0,0,0,3.29,5.74a2.07,2.07,0,0,0,4.09-.63A2.09,2.09,0,0,0,4.84,3.39m7.91,7.22c0-.54,0-1.07,0-1.61-1.14,0-2.28,0-3.41,0q0,5.73,0,11.44c1.18,0,2.37,0,3.55,0V14.89a3.93,3.93,0,0,1,.54-2.38,2.06,2.06,0,0,1,1.93-.63,1.46,1.46,0,0,1,1.16.77,4.56,4.56,0,0,1,.34,2.13v5.65c1.19,0,2.38,0,3.56,0V13.81a7.92,7.92,0,0,0-.51-3,3.14,3.14,0,0,0-1.53-1.64,5.23,5.23,0,0,0-2.68-.41,3.77,3.77,0,0,0-3,1.86M3.55,9q0,5.73,0,11.44c1.19,0,2.38,0,3.57,0V9Z"/></svg>LinkedIn
                        </a>
                        <a href="https://codepen.io/lucasm" target="_blank" rel="noopener" title="CodePen">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="svg" d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V7.79zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v4.82L2.89 15.69l3.618-2.417v-.004zm6.537 2.99l4.474-2.98 3.613 2.42-8.087 5.39v-4.82zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V2.97l8.085 5.39-3.612 2.415v.003z"/></svg>CodePen
                        </a>
                        <a href="https://dev.to/lucasm" target="_blank" rel="noopener" title="DEV Community">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path className="svg" d="M8.78,12.75H7.69v6.53H8.78a1.15,1.15,0,0,0,1.09-1.09V13.83A1.08,1.08,0,0,0,8.78,12.75Z"/><path className="svg" d="M27.2,0H4.8A4.8,4.8,0,0,0,0,4.8V27.2A4.8,4.8,0,0,0,4.8,32H27.2A4.8,4.8,0,0,0,32,27.2V4.8A4.8,4.8,0,0,0,27.2,0ZM8.62,21.15H5.72V10.81h3a2.86,2.86,0,0,1,3,3V18.2A2.85,2.85,0,0,1,8.62,21.15Zm8-6.09v1.85h-2v2.4h3.33v1.85H14a1.27,1.27,0,0,1-1.29-1.23V12.11A1.26,1.26,0,0,1,14,10.81h3.95v1.85H14.6v2.4Zm7.77,4.8c-.83,1.93-2.31,1.54-3,0l-2.41-9h2l1.86,7.11,1.85-7.11h2Z"/></svg>DEV
                        </a>
                        <a href="https://dribbble.com/lucasm" target="_blank" rel="noopener" title="Dribbble">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="svg" d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg>Dribbble
                        </a>
                        <a href="https://patreon.com/lucasm" target="_blank" rel="noopener" title="Patreon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle className="svg" cx="15.34" cy="9.11" r="8.66"/><rect className="svg" y="0.45" width="4.23" height="23.1"/></svg>Patreon
                        </a>
                        
                    </div>


                </div>

                

            </div>
        </section>

    </main>

    </PageLayout>)
}
