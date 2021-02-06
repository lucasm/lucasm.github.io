import PageLayout from '../components/PageLayout';

export default function Home() {
  return (
    <PageLayout title="Home" description="Software Engineer building Web apps, sites and APIs for refined digital experiences.">
    
    <main>

        <section id="about" class="fullscreen">

            <div class="fullscreen-container">
                <div class="container home">

                    <img src="/images/lucas-menezes.jpg" id="photo" alt="Lucas Menezes"/>

                    <h2>Lucas Menezes</h2>
                    <p>Software Engineer</p>

                    <div class="icons">
                        <a href="https://twitter.com/lucasmezs" target="_blank" rel="noopener" title="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path  class="svg" d="M13.25,3.58a5,5,0,0,1,7,.23A10.54,10.54,0,0,0,23.39,2.6a5.28,5.28,0,0,1-2.16,2.74A9.55,9.55,0,0,0,24,4.55v0a10.07,10.07,0,0,1-2.45,2.55,14.35,14.35,0,0,1-6.61,12.63,13.92,13.92,0,0,1-7.66,2,13.72,13.72,0,0,1-5.13-1.06A17.48,17.48,0,0,1,0,19.58H0a3.94,3.94,0,0,1,.68,0A10,10,0,0,0,7.3,17.51a4.82,4.82,0,0,1-2.58-.78,5,5,0,0,1-2-2.65A4.72,4.72,0,0,0,4.89,14,4.94,4.94,0,0,1,1,9.12a5.28,5.28,0,0,0,2.22.62,5,5,0,0,1-1.5-6.6A14,14,0,0,0,11.83,8.31,5,5,0,0,1,13.25,3.58Z"/></svg>Twitter
                        </a>
                        <a href="https://instagram.com/lucasmezs" target="_blank" rel="noopener" title="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="svg" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>Instagram
                        </a>
                        <a href="https://linkedin.com/in/lucasmezs" target="_blank" rel="noopener" title="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="svg" d="M1.6.06H22.35A1.81,1.81,0,0,1,24,1.83V22.06a1.82,1.82,0,0,1-1.62,1.88H1.62A1.76,1.76,0,0,1,0,22.35V1.66A1.75,1.75,0,0,1,1.6.06M4.84,3.39A2.07,2.07,0,0,0,3.29,5.74a2.07,2.07,0,0,0,4.09-.63A2.09,2.09,0,0,0,4.84,3.39m7.91,7.22c0-.54,0-1.07,0-1.61-1.14,0-2.28,0-3.41,0q0,5.73,0,11.44c1.18,0,2.37,0,3.55,0V14.89a3.93,3.93,0,0,1,.54-2.38,2.06,2.06,0,0,1,1.93-.63,1.46,1.46,0,0,1,1.16.77,4.56,4.56,0,0,1,.34,2.13v5.65c1.19,0,2.38,0,3.56,0V13.81a7.92,7.92,0,0,0-.51-3,3.14,3.14,0,0,0-1.53-1.64,5.23,5.23,0,0,0-2.68-.41,3.77,3.77,0,0,0-3,1.86M3.55,9q0,5.73,0,11.44c1.19,0,2.38,0,3.57,0V9Z"/></svg>LinkedIn
                        </a>
                        <a href="https://github.com/lucasmezs" target="_blank" rel="noopener" title="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="svg" d="M12,.37A11.93,11.93,0,0,0,8.15,23.62c.59.08.81-.29.81-.58V21c-3.3.74-4-1.61-4-1.61A3,3,0,0,0,3.6,17.68c-1-.73.08-.73.08-.73A2.52,2.52,0,0,1,5.51,18.2a2.54,2.54,0,0,0,3.44,1H9a2.57,2.57,0,0,1,.74-1.61c-2.65-.3-5.43-1.33-5.43-6A4.51,4.51,0,0,1,5.51,8.44a4.17,4.17,0,0,1,.15-3.16S6.68,5,9,6.53a10.53,10.53,0,0,1,3-.37,13.33,13.33,0,0,1,3,.37c2.27-1.54,3.3-1.25,3.3-1.25a4.58,4.58,0,0,1,.14,3.16,4.71,4.71,0,0,1,1.25,3.23c0,4.62-2.79,5.57-5.43,5.86a2.84,2.84,0,0,1,.81,2.21V23c0,.29.22.66.81.58A12,12,0,0,0,24,12.25,12,12,0,0,0,12,.37Z"/></svg>Open source projects
                        </a>
                        <a href="https://dev.to/lucasm" target="_blank" rel="noopener" title="DEV">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path class="svg" d="M8.78,12.75H7.69v6.53H8.78a1.15,1.15,0,0,0,1.09-1.09V13.83A1.08,1.08,0,0,0,8.78,12.75Z"/><path class="svg" d="M27.2,0H4.8A4.8,4.8,0,0,0,0,4.8V27.2A4.8,4.8,0,0,0,4.8,32H27.2A4.8,4.8,0,0,0,32,27.2V4.8A4.8,4.8,0,0,0,27.2,0ZM8.62,21.15H5.72V10.81h3a2.86,2.86,0,0,1,3,3V18.2A2.85,2.85,0,0,1,8.62,21.15Zm8-6.09v1.85h-2v2.4h3.33v1.85H14a1.27,1.27,0,0,1-1.29-1.23V12.11A1.26,1.26,0,0,1,14,10.81h3.95v1.85H14.6v2.4Zm7.77,4.8c-.83,1.93-2.31,1.54-3,0l-2.41-9h2l1.86,7.11,1.85-7.11h2Z"/></svg>Dev blog
                        </a>
                        <a href="https://codepen.io/lucasm" target="_blank" rel="noopener" title="CodePen">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path class="svg" d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V7.79zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v4.82L2.89 15.69l3.618-2.417v-.004zm6.537 2.99l4.474-2.98 3.613 2.42-8.087 5.39v-4.82zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V2.97l8.085 5.39-3.612 2.415v.003z"/></svg>Code demos
                        </a>
                        <a href="https://dribbble.com/lucasm" target="_blank" rel="noopener" title="Dribbble">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path class="svg" d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg>Design shots
                        </a>
                    </div>

                </div>
            </div>

        </section>

        <section id="work">

            <div class="container">

                <div class="flex-container">

                    <h2>Selected work</h2>

                    {/* <p class="description"> I build digital products with <code>code</code>.</p> */}

                    <div class="grid">

                        <a href="#" class="card">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>Findto</title><path class="svg" d="M15.21,10a5.17,5.17,0,1,0,3.62,8.84l0,0,0,0A5.16,5.16,0,0,0,15.21,10Z"/><path class="svg" d="M16,0H16A16,16,0,0,0,0,16V16A16,16,0,0,0,16,32H16A16,16,0,0,0,32,16V16A16,16,0,0,0,16,0Zm8,24a1.2,1.2,0,0,1-.84.35,1.18,1.18,0,0,1-.84-.35l-2.68-2.68a7.47,7.47,0,0,1-4.42,1.44,7.55,7.55,0,1,1,7.54-7.54,7.44,7.44,0,0,1-1.44,4.42L24,22.31A1.18,1.18,0,0,1,24,24Z"/></svg>
                            </figure>
                            <h3>Findto</h3>
                            <p>Web search app with multiple engines, sources and privacy.</p>
                        </a>

                        <a href="#" class="card">
                            <figure>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path class="svg" d="M98,60a21.23,21.23,0,0,0-2-1c-7.43-3.26-14.83-6.57-22.31-9.72a6.62,6.62,0,0,1-3.95-4.56c-2.27-8.16-4.36-16.37-6.55-24.55C62.31,17,61.51,14,60.47,11c-0.81-2.34-2.22-3-4.41-2.57-6.75,1.4-13.51,2.79-20.26,4.22Q19.65,16.07,3.51,19.54c-2.84.6-4,2.5-3.3,5.31C3.77,38.49,7.3,52.14,10.92,65.77c0.94,3.54,2,7,5.53,9.15,7.58,4.73,15,9.75,22.47,14.62,2,1.29,4.07,2.36,6.8,2.13a6.93,6.93,0,0,0,3.35-1.09l48.48-24.1A3.89,3.89,0,0,0,100,63.14,3.33,3.33,0,0,0,98,60Zm-80,.4a1.71,1.71,0,0,1-2.27-1.2L7.58,28A1.83,1.83,0,0,1,9,25.75L54.46,15.65a2,2,0,0,1,2.37,1.42l6.84,24.77a2.1,2.1,0,0,1-1.28,2.48ZM63.81,79.45L58.06,76.6l12-5.69,5.74,2.36Z"></path></svg>
                            </figure>
                            <h3>Lutec Infomática</h3>
                            <p>Ecommerce for a virtual store and home computing technical assistance.</p>
                        </a>

                        <a href="#" class="card">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path class="svg" d="M9.67,31.71H5.76V19.91H0V16.29H15.44v3.62H9.68Z"/><path class="svg" d="M48,31.71H43.78V23.84l-4.14,4.54h-.39L35.16,23.9v7.81H31V16.29h3.38l5.12,6.07,5.12-6.07H48Z"/><path class="svg" d="M27.23,26.29l-.22.2a5.25,5.25,0,0,1-3.66,1.62,3.88,3.88,0,0,1-2.87-1.19A4.27,4.27,0,0,1,19.34,24V24a4.15,4.15,0,0,1,1.14-2.89,3.86,3.86,0,0,1,2.82-1.22,4.68,4.68,0,0,1,2.49.72l.1.07,2.22-3h0l-.29-.18a8.74,8.74,0,0,0-4.56-1.09,8.12,8.12,0,0,0-5.76,2.28,7.43,7.43,0,0,0-2.14,5.4v.06a7.35,7.35,0,0,0,2.3,5.34,8,8,0,0,0,5.56,2.14h.09a8.11,8.11,0,0,0,6.25-2.67l.22-.24Z"/><circle class="svg" cx="23.46" cy="24.02" r="2"/></svg>
                            </figure>
                            <h3>TCM-PA</h3>
                            <p>Court of accounts public content and services portal, with accessibility and intranet.</p>
                        </a>

                        <a href="#" class="card">
                            <figure class="color-headlyne">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path class="svg" d="M157.9,47.37l4.67-42.1H17.74L.2,163.15c-1.94,17.44,10.63,31.58,28.07,31.58h134.3c11.63,0,22.1-9.42,23.39-21L200,47.37ZM116.28,141.8H95.17V111.22H65V141.8H43.74V59.21H65V91.09H95.17V59.21h21.11Zm49.8,21.35a12.06,12.06,0,0,1-11.69,10.53A9.24,9.24,0,0,1,145,163.15l10.53-94.73h21.05Z"/></svg>
                            </figure>
                            <h3>Headlyne</h3>
                            <p>News reader for the critial sense. Headlines from trusted media and fact-checking.</p>
                        </a>

                        <a href="#" class="card">
                            <figure class="color-vydeon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path class="svg" d="M38.12,5.42a6,6,0,0,0-5.2-3H15a6.1,6.1,0,0,0-5.2,3L.79,21a6.05,6.05,0,0,0,0,6l9,15.6a6,6,0,0,0,5.2,3H32.93a6.09,6.09,0,0,0,5.2-3L47.21,27a6.05,6.05,0,0,0,0-6ZM36.18,24.94,18.54,35.23c-.72.38-1.76.11-1.76-.72v-21c0-.83,1-1.1,1.76-.72l17.59,10.3a1.05,1.05,0,0,1,0,1.87Z"/></svg>
                            </figure>
                            <h3>Streon</h3>
                            <p>Stories-like videos powered by creators, channels and streaming services.</p>
                        </a>

                        <a href="#" class="card">
                            <figure class="color-zeyt">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><polygon class="svg" points="60 90 0 90 0 30 120 30 120 90 180 90 180 150 60 150 60 90"/></svg>
                            </figure>
                            <h3>Zeta</h3>
                            <p>Personal finance app, with datasets, graphs and comparative tools.</p>
                        </a>

                        <a href="#" class="card">
                                <div>
                                    <figure class="color-educolab">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path class="svg" d="M23.26,6.47a5.94,5.94,0,0,1,4.93,1.71,6.21,6.21,0,0,1,1.71,5A6.07,6.07,0,0,1,25,18.39a5.85,5.85,0,0,1-4.9-1.45,6.19,6.19,0,0,1-2-3.77A6,6,0,0,1,23.26,6.47Z"/><path class="svg" d="M11.22,13.75a3.65,3.65,0,0,1,2.92.85,3.79,3.79,0,0,1,.35,5.33,3.58,3.58,0,0,1-.68.61,3.63,3.63,0,0,1-4,.05,3.78,3.78,0,0,1-1.62-3.93A3.73,3.73,0,0,1,11.22,13.75Z"/><path class="svg" d="M35.74,13.75a3.71,3.71,0,0,1,4.11,2.86,3.82,3.82,0,0,1-1.62,4,3.66,3.66,0,0,1-3.17.37,3.74,3.74,0,0,1,.68-7.22Z"/><path class="svg" d="M15.43,21A4.7,4.7,0,0,1,18.48,20H29.35a4.8,4.8,0,0,1,3.31,1.13A7.76,7.76,0,0,1,34,22.7l8.35,11.63a3.49,3.49,0,0,1,.49,3.17,3.37,3.37,0,0,1-3.06,2.33c-1.63,0-3.25,0-4.87,0A4.9,4.9,0,0,1,34.79,41a1,1,0,0,1-1,.52H14.27a1,1,0,0,1-1-.42,3.33,3.33,0,0,1-.14-1.29H8.92a4.49,4.49,0,0,1-1.74-.26,3.44,3.44,0,0,1-2.13-2.85,3.53,3.53,0,0,1,.66-2.41L13.86,23a9.26,9.26,0,0,1,1.6-2m-2.32,5.79v13H34.87V27a1.43,1.43,0,0,0-.27-1,1.31,1.31,0,0,0-1-.35H15.23a5.06,5.06,0,0,0-1.45.09A1.08,1.08,0,0,0,13.14,26.81Z"/><path class="svg" d="M5.91,23.32A2.9,2.9,0,0,1,8.25,22.1h4.6l-2.5,3.5H5.67a.66.66,0,0,0-.66.64s0,.08,0,.12v6.17c.07.75-.64,1.24-.9,1.91-1.08-.08-2.27.25-3.24-.39a2.17,2.17,0,0,1-.46-3h0C2.23,28.43,4.09,25.91,5.91,23.32Z"/><path class="svg" d="M35.16,22.1h4.59A2.82,2.82,0,0,1,42,23.23c1.87,2.63,3.78,5.22,5.63,7.86a2.15,2.15,0,0,1-.61,3,1.74,1.74,0,0,1-.33.18,10.3,10.3,0,0,1-2.83.16A11.6,11.6,0,0,0,43,33V26.33a.65.65,0,0,0-.58-.72h-.08c-1.56,0-3.12,0-4.68,0C36.83,24.42,36,23.26,35.16,22.1Z"/><path class="svg" d="M23.43,30.67a2.28,2.28,0,0,1,2.78,1.65,1.86,1.86,0,0,1,.06.34,2.31,2.31,0,0,1-2.06,2.54h-.05a2.32,2.32,0,0,1-.73-4.54Z"/></svg>
                                    </figure>
                                    <h3>Educolab</h3>
                                    <p>Collaborative directory for share free learning resources and online courses.</p>
                                </div>
                            </a>

                        <a href="#" class="card">
                            <figure class="color-cacba">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path class="svg" d="M24,0A24,24,0,1,0,48,24,24,24,0,0,0,24,0Zm5.65,16.36v-.68l0-.33,0-.31,0-.32,0-.3,0-.29.05-.27.05-.28.06-.26.07-.25.07-.24.08-.24.07-.21.09-.23.09-.2.08-.21.1-.19.1-.2.09-.18.11-.18.12-.18.1-.17.12-.17.13-.16.13-.17.12-.14.12-.15.15-.15.13-.14.15-.13.15-.15.15-.12L32.67,9l.16-.13L33,8.77l.18-.11.17-.12.19-.11.18-.11.2-.11.19-.11L34.3,8l.2-.1.22-.08.19-.09.22-.08.2-.07.21-.06.2-.06.2,0,.19-.07.2,0,.17,0,.18,0,.15,0,.15,0,.15,0,.14,0,.14,0,.12,0,.12,0,.11,0,.12,0,.12,0,.1,0,.12,0,.1,0,.11,0,.11,0-.06.48-.08.48-.08.48-.09.46L38.14,9l-.1.42-.09.4-.09.39-.11.32-.1.33-.09.29-.1.28-.11.24-.09.24-.11.22-.09.21-.11.18-.11.2-.1.18-.1.17-.11.16-.11.16-.11.15-.12.14-.12.16L36,14l-.11.14-.13.13-.12.12-.13.12-.14.13-.14.12-.15.11-.15.11-.15.11-.16.12-.16.1-.16.11-.18.1-.18.11-.2.09-.19.11-.22.1-.21.09-.23.1-.22.1-.26.08-.26.1-.27.08-.29.08-.3.1-.3.08-.31.08-.32.07L30,17l-.33.07v-.68Zm-8.8-7.51v-.7l0-.18,0-.2,0-.19,0-.19.05-.2,0-.21.06-.22.07-.24.07-.24.1-.27.13-.28.13-.31.17-.34L22,4.72l.23-.41.23-.41.27-.42L23,3l.28-.46.31-.45.32-.44.25.41.26.43.25.41.22.42.23.39.19.38.2.37.16.34.15.32.13.3.1.25.1.25.08.25.07.2.06.22.05.19,0,.19,0,.19,0,.18,0,.18,0,.16,0,.17V9.18l0,.16,0,.17,0,.16,0,.16,0,.16,0,.17-.05.18-.05.18-.06.18-.06.18-.08.2-.08.19-.08.21-.09.2-.12.23-.11.23-.12.24-.14.25-.15.26-.15.27-.18.29-.18.28-.19.29-.19.3-.21.31-.2.28-.24-.22-.23-.22-.24-.22L23,14l-.22-.24-.19-.22-.19-.24-.15-.21-.16-.24-.14-.2-.12-.22-.12-.2L21.65,12l-.1-.19-.07-.2-.1-.18-.06-.2-.07-.17-.05-.19-.06-.18-.05-.17,0-.17,0-.17L21,10l0-.17,0-.18,0-.16,0-.17V8.85Zm-11.78-2h.18l.11,0,.12,0,.13,0,.15,0,.17,0,.19,0,.22,0,.23.07.25.07.25.08.27.09.28.11.28.09.26.11.28.13.27.14.27.13.26.13.25.14.24.14.22.15.22.13.2.14.19.14.19.13.17.14.16.14.15.14.15.15.15.13.13.14.12.14.13.14.11.14.12.16.12.14.1.15.1.16.1.16.1.17.09.16.09.17.08.18.1.19.08.2.08.19.07.22.07.21.07.25.08.25.06.25.06.29.06.3.05.32.06.32,0,.36,0,.36,0,.37,0,.39,0,.38,0,.38,0,0v0h-.09l-.17,0-.31-.08-.22-.06L16.87,17l-.3-.09-.32-.1-.33-.09-.34-.12-.33-.11-.32-.12-.29-.11-.28-.12L14.11,16l-.23-.1-.23-.13-.2-.11-.2-.12-.18-.11-.19-.11-.16-.11-.17-.13L12.4,15l-.15-.11-.14-.12L12,14.61l-.13-.13-.13-.13-.12-.11-.11-.14L11.35,14l-.11-.13-.1-.13L11,13.56l-.11-.13-.1-.16-.09-.15-.1-.16-.1-.17-.1-.16-.08-.18-.09-.19-.1-.19-.08-.2L10,11.65l-.08-.21-.09-.25-.08-.26-.08-.26-.08-.3-.07-.32L9.43,9.7l-.08-.36L9.27,9l-.06-.39-.07-.41-.06-.42L9,7.3,9,6.87Zm-5,15.89-.29-.22-.32-.24L3.14,22l-.35-.29-.35-.29-.36-.33-.36-.32-.36-.34.16-.11.15-.1.17-.11L2,20,2.15,20l.17-.09.16-.1.17-.09.17-.09L3,19.5l.18-.07.17-.09.19-.07.16-.07.19-.06.18-.06.18,0L4.41,19l.17,0,.19-.05.37-.08.36-.07.36-.06.37,0,.34-.06.36,0,.34,0H8l.32,0,.3,0,.3,0,.14,0,.14,0,.13,0,.14,0,.12,0,.12,0,.11,0,.13,0,.22.09.22.1.22.1.21.11.21.12.22.13.23.12.21.14.24.14.21.14.23.16.21.13.21.14.19.15.18.12.16.12.16.12.14.11.12.12.13.1.1.1.1.09.16.17.15.15.06.08.06.07.05.07.05.08.06.08,0,.07,0,.08,0,.07,0,.08,0,.07,0,.1,0,.08-.27.13-.27.14-.28.13-.27.11-.26.11-.27.12-.25.11-.26.09-.25.08-.24.1L12,24l-.23.07-.24.07-.23.06-.23.07-.24.05-.25.07-.24,0-.24.05-.25.05-.24,0-.24,0-.23,0H8.49l-.18,0-.2,0-.18,0-.19,0-.17-.05-.18,0-.18-.06L7,24.25l-.19-.06-.17-.07-.18-.05L6.31,24l-.19-.07-.18-.08-.2-.09-.19-.1-.22-.1-.21-.11-.24-.14-.23-.15L4.38,23ZM15.53,30.3l-.15.2-.15.23-.17.25-.21.29-.22.3-.25.31-.26.34-.25.33-.3.35-.28.33-.16.15-.18.14-.18.14-.18.13-.17.14-.17.12-.18.11-.16.12-.17.1-.16.09-.16.09-.17.09-.15.07-.16.08-.16.07-.15.06-.17.06-.17.07-.17.06-.18.05-.21,0-.21.05-.26,0-.27,0-.29,0-.32,0-.33,0-.34,0-.34,0H7.05l-.32,0H5.3l-.11,0H5.1l-.15,0H4.78l-.06,0H4.65l-.08,0-.07,0H4.43v-.18l0-.19,0-.19,0-.22,0-.1,0-.11,0-.11,0-.13L4.82,34l.06-.13.06-.15L5,33.57l.08-.15.09-.17.1-.17.12-.18.12-.19.13-.2.16-.2L6,32.08l.18-.22.2-.25.21-.24.23-.24L7,30.9l.22-.22.23-.22.22-.2.12-.09.1-.09L8,30l.11-.08.21-.15.21-.12.21-.11.2-.1.22-.11.2-.09.22-.08.22-.09.24-.09.27-.08.13,0,.16,0,.15,0,.16,0,.37-.05.41-.07.22,0,.24,0,.25,0,.25,0,.27,0,.28,0,.29,0,.29,0h.91l.32,0h1.27l0,.12,0,.13,0,.12,0,.12,0,.14,0,.12-.05.13-.05.12,0,.13-.07.13-.07.14-.09.16-.09.16ZM22,37.12v.56l0,.18,0,.16,0,.15,0,.16,0,.15,0,.16,0,.15-.05.14,0,.15,0,.15-.05.15-.05.14,0,.14-.07.16-.07.14-.06.14-.08.15-.07.15-.08.15L21,40.7l-.1.16-.1.16-.09.15-.11.15-.13.18-.12.16-.13.19-.15.17-.15.2-.17.18-.18.19-.19.21-.21.21-.22.2-.22.22-.23.19-.23.21-.21.18-.19.17-.19.15-.27.24-.22.18-.16.12-.13.08-.1.08-.11.06-.12.06-.1,0L16.39,45l-.09-.18-.08-.19-.09-.21,0-.11,0-.12,0-.12L16,44l0-.15,0-.15,0-.15,0-.18,0-.17,0-.2,0-.18,0-.22,0-.21,0-.23V40l0-.29,0-.29,0-.29,0-.29,0-.27.05-.26,0-.26.05-.26,0-.12,0-.11,0-.11,0-.13,0-.1,0-.1.05-.11,0-.1.1-.19.1-.18.13-.18.12-.19L16.9,36l.15-.19.15-.18.16-.2.18-.19L17.7,35l.19-.2.17-.18.18-.19.17-.17.17-.16.18-.16.16-.16.17-.13.15-.13.15-.12.15-.11.13-.1.14-.1.12-.07.11-.09.12-.06.2-.11.19-.1.17-.06.15-.08.16,0,.14,0,.11.46.11.46.12.44.09.45.08.42.08.4.07.38.05.35.05.3,0,.29,0,.27v.44Zm2-4.94A8.17,8.17,0,1,1,32.16,24,8.18,8.18,0,0,1,24,32.18Zm8.79,8.16,0,.38,0,.42-.05.45-.07.46-.06.47-.07.45-.07.44-.06.37-.06.33-.08.44,0,.24,0,.09h0l-.36-.26-.38-.26L31,44.1l-.32-.26-.33-.27L30,43.31l-.29-.23-.27-.25-.25-.22L29,42.39l-.21-.2-.19-.2-.16-.18-.15-.18-.15-.17L28,41.28l-.12-.17-.13-.17-.1-.16-.1-.15-.1-.16-.09-.16-.09-.16L27.19,40l-.08-.15L27,39.68,27,39.53l-.06-.15-.06-.16-.05-.16-.05-.16,0-.16-.05-.18,0-.17,0-.17,0-.19,0-.16,0-.2,0-.2v-.2l0-.21v-.69l0-.27v-.25l0-.3,0-.31,0-.33.06-.35.07-.35.06-.39.08-.38.08-.39.1-.4.09-.39h.17l.08,0,.12,0,.11.06.13.08.16.08.18.13.2.13.23.16.24.19.27.2.25.21.26.21.25.22.27.23.24.21.23.23.22.21.2.21.19.21.19.22.19.22.18.21.07.14.1.15.07.15.08.14.06.15.07.16.07.15.06.16.06.16.05.17,0,.16,0,.18.05.18,0,.17.05.19,0,.19,0,.2,0,.2,0,.23,0,.25v.91Zm10.85-5.25-.26,0h-.25l-.24,0-.22,0h-.58l-.26,0h-1.4l-.2,0H40l-.24,0-.24,0-.24,0-.24,0-.25,0-.24,0-.23,0-.21,0-.21-.05-.2-.06-.18-.05-.19,0-.17-.06L37,34.54l-.16-.07-.15,0-.15-.08-.15-.07-.15-.06-.15-.08L36,34,35.81,34l-.14-.09-.13-.09-.13-.1-.13-.09-.13-.09L35,33.38l-.14-.1-.13-.12L34.62,33l-.14-.14-.14-.14-.15-.17L34,32.41l-.16-.2L33.7,32l-.17-.26-.2-.28-.21-.31-.2-.33-.22-.36-.22-.37-.22-.39-.23-.4-.2-.4.13-.07.14-.06.14-.05.14-.06.14-.07.15,0,.14-.05.15,0,.16,0,.15,0,.15,0,.16,0,.15,0h.32l.17,0h1.33l.17,0,.17,0,.17,0,.17,0,.17,0,.17,0,.18.05.18.05.18,0,.16.06.17.07.18.05.16.06.18.06.16.07.18.07.16.08.17.07.16.09.16.07.16.1.16.08.16.1.15.08.14.09.16.12L40,30l.14.1.15.12.13.1.13.1.15.11.26.23.25.23.25.25.22.25.24.25.21.27.22.26.19.25.19.26.17.26.17.24.14.24.12.21.12.22.1.18.08.2.08.19.05.19.07.17,0,.19ZM45.9,20.4l-.3.29-.29.27-.28.27-.29.26-.27.23-.26.23-.25.19-.24.19-.23.16-.22.15-.21.13-.21.12-.18.12-.2.1-.19.1-.2.1-.16.08-.2.09-.18.07-.19.08-.17.06-.19.06-.18.06-.18.06-.2.06-.18,0-.2.05-.19,0-.19,0-.2,0-.2,0-.19,0-.18,0-.19,0h-.9l-.18,0-.17,0-.17,0-.16,0L37,24,36.8,24l-.17,0-.19,0-.18-.06-.19-.07-.19-.05-.21-.07-.21-.07-.23-.08L35,23.43l-.25-.11-.25-.1-.24-.11L34,23l-.27-.12-.25-.13-.28-.13-.27-.15.18-.23.18-.24.19-.23.19-.22.18-.22.18-.2.2-.2.18-.19.17-.18.18-.17.17-.14.18-.16.17-.13.17-.13.17-.13.16-.12.16-.1.15-.11.17-.09.16-.1.15-.08.17-.08.15-.09.17-.07.16-.06.16-.07.17-.06.16-.07.17-.05.16-.05.18,0,.17-.05.17,0,.19,0,.18,0,.19,0,.19,0,.2,0h1.12l.26,0,.28,0,.31,0,.32.06.37.05.38.08.43.1.45.1.46.11.46.14.49.14.49.15.5.16.66.38-.29.31Z"/><path class="svg" d="M29.9,27l.05-.13.06-.14.06-.12,0-.13.05-.13.05-.13,0-.14,0-.13,0-.13,0-.2,0-.18v-.2l0-.17V23.78l0-.18,0-.18,0-.19,0-.18,0-.18,0-.15-.05-.16-.06-.14,0-.06,1.11-.81H29.71l-.08-.11-.08-.14-.08-.13-.11-.11-.09-.14-.1-.11-.11-.11-.13-.12-.11-.12-.13-.12-.14-.1-.12-.11-.14-.1-.15-.1L28,19.86l-.14-.1-.15-.08-.15-.08-.15-.06-.16-.07-.16,0-.16-.06-.15-.05-.19,0-.19,0-.18,0-.19,0-.19,0-.19,0h-.73l-.9-2.8-1.12,3.5,0,0-.12.09-.11.1-.12.11-.1.11-.11.12-.11.11-.09.14-.09.12-.08.13-.1.15-.08.14-.08.15-.07.15,0,.07H18.66l0-.08.08-.27.08-.28.09-.25.11-.26.09-.26.12-.26.11-.26.07-.14.09-.15.07-.15.1-.13.09-.15.1-.13.1-.13.1-.14.09-.11.09-.1.1-.1.09-.11.2-.18.21-.19.11-.1.12-.09.12-.09.11-.1.12-.08.12-.09.12-.08.13-.08.13-.08.13-.08.12-.08.14-.06.13-.08.13-.07.14-.06.15-.06.21-.07.21-.07.2,0,.18-.05.16,0,.12,0,.08,0h-.87l-.1,0-.11,0-.23.07-.24.07-.22.07-.24.08-.22.09-.23.1-.1,0-.11.06-.11.06-.1.05-.22.14-.21.15-.21.15-.19.17-.19.17-.19.19-.18.18-.17.19-.18.24-.18.25-.17.25-.17.25-.08.13-.07.13-.07.13-.07.13-.07.14-.06.14-.06.13-.05.15-.06.16-.06.17-.06.16-.05.17-.05.17,0,.18,0,.17,0,.08H16.85l1,.74v.06l0,.17v1.22l0,.18,0,.16,0,.18,0,.17,0,.16,0,.18.05.16,0,.18.06.16.05.17.06.16.07.15.06.18.08.17.07.17.09.17.07.17.09.16.09.15.1.15.1.15.09.16.11.14.11.15.12.14.11.13.12.12.15.13.13.13.09.08L19.58,30,21,29h0l.17.1.17.08.18.09.18.09.18.09.18.07.19.07.19.06.17.07.18.05.17,0,.18.05.18,0,.18,0,.17,0,.19,0L24,30h.18l.19,0H25.6l.13,0h.15L26,30l.13,0,.13,0,.12,0,.13,0,.13-.05.13,0,.13-.05.12-.06.12,0,.12-.06.11-.06.13-.06.09-.06.85.62-.31-1h0l.13-.1.12-.09.12-.1.11-.09.11-.11.12-.1.1-.11.11-.11.11-.12.09-.12.09-.11.1-.11.07-.12.09-.11.07-.13.07-.11.07-.12Zm-4.63-7.23h.63l.16,0,.15,0,.16,0,.14,0,.16,0,.14.05.13,0,.15.06.14.07.13.07.15.08.14.1.14.1.14.11.13.12.12.12.14.13.11.12.13.13.12.13.1.15v0H25.71l-.57-1.75Zm-2.92,1.67,0-.1v0l-.07.2h0Zm-2.06,6.18-.16-.16L20,27.32l-.14-.17L19.7,27l-.13-.18-.12-.18-.12-.2-.1-.2-.1-.21-.08-.21L19,25.57l-.08-.21-.06-.22-.08-.22,0-.19,0-.2-.06-.18,0-.21,0-.19,0-.2,0-.2,0-.2v-.63l2.83,2.06-1,2.92ZM27,29,26.9,29l-.12,0-.11.05-.12.05-.12,0-.11,0-.13,0-.12,0-.13,0-.15,0-.12,0-.14,0h-.15l-.13,0H24.4l-.29,0-.27,0h-.13l-.12,0-.13,0-.14,0-.24-.06-.26-.1-.25-.1-.24-.09-.25-.11-.25-.1-.16-.09-.09,0L24,26.76l3,2.18Zm2.77-4.29v.44l0,.15,0,.14,0,.15,0,.14,0,.15,0,.14,0,.14,0,.14,0,.14,0,.13-.08.14-.05.13-.07.12-.06.13-.07.1-.07.11-.09.11-.08.11-.09.1-.08.11-.11.09-.09.1-.09.1-.11.09-.21.19-.15.12-1-2.94.05-.09.06-.1.05-.12.06-.13,0-.12,0-.12,0-.13,0-.13,0-.13,2.18-1.58v0l0,.13,0,.14,0,.13,0,.14,0,.14,0,.14,0,.14,0,.16v.73Z"/></svg>
                        </figure>
                            <h3>ONG Margarida</h3>
                            <p>Hacked website recovered and redesigned for a non-profit social organization.</p>
                        </a>

                        <a href="#" class="card">
                            <figure class="color-nufen">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path class="svg" d="M22.61,48c-1-.51-2-1-3-1.55a14.85,14.85,0,0,1-2.16-1.62,1.17,1.17,0,0,1-.37-.94c0-.17.54-.36.84-.39a16.36,16.36,0,0,1,2,0c.92.05,1.09-.07,1.06-1-.15-3.71-.32-7.43-.49-11.14,0-.91-.12-1.81-.13-2.71a6.8,6.8,0,0,0-1.21-3.79,17.54,17.54,0,0,0-10.33-7.5A9.17,9.17,0,0,1,7.54,17c-.19-.09-.3-.37-.45-.56.21-.11.45-.34.64-.3a47.43,47.43,0,0,1,5.69,1.31,23.58,23.58,0,0,1,7.51,4.05c.37.3.71.37,1-.08,3.15-5.22,8.36-6.92,13.87-8.11.9-.19,1.83-.32,2.75-.46.21,0,.5-.1.63,0a1.78,1.78,0,0,1,.6.79c0,.11-.37.45-.62.52-2,.58-4.13,1-6.13,1.71a16.61,16.61,0,0,0-7.84,5.82,5.46,5.46,0,0,0-.94,3.82c0,.15.18.4.3.42a15.74,15.74,0,0,0,2.79.39,2,2,0,0,0,1.2-.75,9.16,9.16,0,0,1,6.32-3.46c1.22-.11,2.43-.2,3.65-.27.45,0,.93,0,1,.62s-.38.68-.8.77c-.78.18-1.57.39-2.37.5-3.79.5-7.14,4.48-7.35,8s-.37,6.84-.49,10.26c0,1.4.19,1.52,1.59,1.49a6.77,6.77,0,0,1,1.74.18c.7.17.81.66.31,1.19a1.84,1.84,0,0,1-.51.41c-1.43.8-2.85,1.63-4.31,2.36-1.29.64-1.88.24-1.87-1.22,0-5.14.08-10.28.12-15.41a3.11,3.11,0,0,0-.15-1.15c-.1-.24-.43-.39-.66-.58a4.43,4.43,0,0,0-.58.73,2.18,2.18,0,0,0,0,.73C24,35.82,24,41,23.88,46.09c0,.71,0,1.44-.69,1.91Z"/><path class="svg" d="M48,20.26c-3.45,2.88-8.8,1.92-11.93-.86a7.31,7.31,0,0,1-1.23-1.53.87.87,0,0,1,.41-1.4,16.62,16.62,0,0,1,2.56-.83c4.23-.92,7.51.62,10.07,4a.29.29,0,0,0,.12.07Z"/><path class="svg" d="M0,20.55c1.9-2.24,4-2.86,6.56-1.9,1,.37,1.06.64.45,1.47A5.19,5.19,0,0,1,0,21Z"/><path class="svg" d="M21.72,0a5,5,0,0,1,1.55,4.91,7,7,0,0,1-.87,2c-.55.93-.88.93-1.57.13a5.2,5.2,0,0,1,.75-7Z"/><path class="svg" d="M2.87,32.88c-2.22,0-2.71-.71-1.82-2.74a14.58,14.58,0,0,1,3.51-4.93,10.42,10.42,0,0,1,5.77-2.31,14.54,14.54,0,0,1,2.47-.06.69.69,0,0,1,.72.89,11.63,11.63,0,0,1-.46,2.14A11.63,11.63,0,0,1,2.87,32.88Z"/><path class="svg" d="M16.31,14.56a8,8,0,0,1-5.2-2,9.21,9.21,0,0,1-3.46-7c0-1.54.58-2,2.11-1.78A12.07,12.07,0,0,1,15.17,6c1.72,1.28,2.34,3.2,2.86,5.15a9.18,9.18,0,0,1,.28,1.88c.06,1.1-.2,1.37-1.32,1.47Z"/><path class="svg" d="M35.37,4.77a8.44,8.44,0,0,1-1.76,4.65A10.08,10.08,0,0,1,27,13.62a3.16,3.16,0,0,1-.87,0c-.78-.08-1.17-.41-1.1-1.18a17.21,17.21,0,0,1,.53-3c1.07-4.06,4-6.12,7.86-7C35,2.05,35.37,2.46,35.37,4.77Z"/><path class="svg" d="M39.29,10.86c-1.93,0-2.16-.37-1.41-1.78a5.6,5.6,0,0,1,5.24-2.72c1.07.15,1.29.53.77,1.46C42.8,9.74,41.28,11,39.29,10.86Z"/><path class="svg" d="M16,30.71a5.51,5.51,0,0,1-3.45,4.85c-1,.33-1.35.08-1.31-.94a5.31,5.31,0,0,1,3.33-5.15c1-.45,1.34-.28,1.43.88C16,30.47,16,30.59,16,30.71Z"/><path class="svg" d="M40.53,31.61a5.61,5.61,0,0,1-4.85-3.46c-.35-1-.11-1.33.92-1.31a5.24,5.24,0,0,1,5.15,3.31c.47,1.07.32,1.33-.85,1.44Z"/><path class="svg" d="M23.11,17.15c-.05,1.68-.95,3-2.06,3a3.13,3.13,0,0,1-2.78-2.92A2.66,2.66,0,0,1,20.9,14.9,2.22,2.22,0,0,1,23.11,17.15Z"/><path class="svg" d="M25.26,23.5c0-1.22.57-1.91,1.61-1.92a1.83,1.83,0,0,1,1.74,2,1.91,1.91,0,0,1-1.81,2.14C25.84,25.68,25.27,24.88,25.26,23.5Z"/></svg>
                            </figure>
                            <h3>Nufen</h3>
                            <p>Psychotherapy online service with ecommerce capabilities.</p>
                        </a>

                        <a href="#" class="card">
                            <figure class="color-nacuia">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path class="svg" d="M47.13,17.41c-.14.62-.27,1.2-.42,1.77A48.25,48.25,0,0,1,43.61,28a30.11,30.11,0,0,1-5,7.66,19.49,19.49,0,0,1-7.87,5.29l-1,.31-1,.28c-.56-.75-1.15-1.47-1.66-2.24s-.42-.76.35-1.08a34.87,34.87,0,0,0,5.94-3,27.48,27.48,0,0,0,3.33-2.75,29.68,29.68,0,0,0,4.15-4.73,18.45,18.45,0,0,0,2.36-4.64c.18-.51.39-1,.53-1.53a1.71,1.71,0,0,0-.18-1.24,1.9,1.9,0,0,0-.56,1,17.45,17.45,0,0,1-2.67,5.79A25.87,25.87,0,0,1,30.66,36c-1.23.67-2.52,1.22-3.79,1.83a.35.35,0,0,1-.38,0,4.67,4.67,0,0,1-1.87-2.22c-.12-.25-.23-.51-.36-.8a23.31,23.31,0,0,0,13.68-14,.91.91,0,0,0-1,.51,21.79,21.79,0,0,1-4.52,7.07A26.8,26.8,0,0,1,25,33.78a5.08,5.08,0,0,1-.85.31.89.89,0,0,1-1-.41c-.46-.74-.9-1.49-1.36-2.26l.26-.14a24,24,0,0,0,6-4.39,17.15,17.15,0,0,0,3.85-6c0-.06,0-.11.05-.16a1.23,1.23,0,0,0-1.15.87,15.3,15.3,0,0,1-5.81,7c-.83.59-1.71,1.11-2.57,1.66a1.84,1.84,0,0,1-.57.2.93.93,0,0,1-.92-.42c-.38-.48-.73-1-1.09-1.47-.13-.18-.27-.34-.4-.52a.45.45,0,0,1,.15-.74,1.62,1.62,0,0,1,.35-.17,8.94,8.94,0,0,0,3.76-2.65c.5-.56,1-1.14,1.43-1.75a2.82,2.82,0,0,0,.53-2c-.27.26-.6.36-.72.75a6.42,6.42,0,0,1-2,2.85,18.77,18.77,0,0,1-2.84,2.1c-.83.51-1.16.46-1.83-.25a12.55,12.55,0,0,1-.93-1.12c-.36-.47-.31-.73.19-1s1.05-.59,1.56-.93a3.14,3.14,0,0,0,1.4-1.81c0-.12.05-.25.07-.37a.68.68,0,0,0,0-.15l-.73.69a10.65,10.65,0,0,1-2.09,1.7,3.79,3.79,0,0,1-.74.33,1,1,0,0,1-1.16-.4c-.16-.22-.29-.47-.44-.71A4.54,4.54,0,0,0,14,20.9l-.31-.2c-.09.39-.16.76-.25,1.12a15.1,15.1,0,0,1-1.51,3.59C11,27,10.17,28.54,9.24,30.06c-.53.87-1.18,1.67-1.81,2.54-.11-.16-.2-.27-.27-.38-.69-1.2-1.39-2.4-2.09-3.59a.32.32,0,0,1,0-.36c.55-.95,1.08-1.91,1.61-2.87.37-.67.73-1.35,1.06-2a2.69,2.69,0,0,0,.08-2.29l-.1.22c-.43,1.1-.83,2.2-1.28,3.29a11.67,11.67,0,0,1-.74,1.34c-.35.57-.72,1.14-1.11,1.75A53.35,53.35,0,0,1,1,17.43H6.62l0-.06-3.24-3L1.75,16.44h.9l1.16,0A.76.76,0,0,0,4,16.32a.51.51,0,0,0-.16-.09L2.63,16l.8-1.14L5.66,17,4.53,17l-3.44.07C1,17.07.94,17,.94,17s0-.28,0-.37c.25-.36.53-.7.81-1l1.51-1.93L7.57,17l4.26-4.77H3.18l4,3.17L9.31,13.2H8.85l-2.16.09a1.54,1.54,0,0,0-.19.08c.07,0,.13.09.2.09H8.47L7.24,14.83l-3-2.21h6.63L7.57,16.49,3.23,13.1.76,16.23c-.09-.38-.17-.71-.22-1.05,0-.07.07-.18.13-.25.75-.83,1.49-1.66,2.23-2.5l.23-.26H.21c-.15,0-.25,0-.19-.22H48c0,.14,0,.14-.67.24a4.72,4.72,0,0,0,.47.37.29.29,0,0,1,.12.32c0,.18-.06.36-.09.58l-.47-.37L44,17.41Zm-8.54-3.74L42.88,17l4.25-4.77H38.48l4,3.18,2.11-2.19-.8,0c-.62,0-1.24,0-1.86.08-.05,0-.1,0-.16.08s.11.08.16.08l1,0h.89l-1.27,1.4-3-2.21h6.62l-3.29,3.87L38.53,13.1l-3.39,4.3H42L38.7,14.33l-1.65,2.11h.15l1.91,0a.87.87,0,0,0,.17-.07l-.16-.11a.5.5,0,0,0-.12,0L37.94,16c.28-.4.53-.76.8-1.13L41,17l-5,.11Zm-21.1,3.72h6.83l-3.27-3.06-1.63,2.08h2c.07,0,.13-.05.2-.07a.52.52,0,0,0-.19-.11L20.28,16l.81-1.14L23.32,17l-5.05.11,2.67-3.41L25.23,17c1.42-1.59,2.82-3.17,4.25-4.76H20.84l4,3.17L27,13.18l-.78,0-1.83.07a.66.66,0,0,0-.19.09l.2.08s0,0,.07,0h1.71l-1.25,1.38-3-2.2h6.62c-1.12,1.3-2.2,2.58-3.29,3.86L20.88,13.1C19.74,14.54,18.63,16,17.49,17.39Zm-4.43-4.76h6.62L16.4,16.49,12.05,13.1,8.67,17.4H15.5l-3.27-3.07-1.65,2.11h.72l1.37,0a.5.5,0,0,0,.14-.08l-.12-.09a.76.76,0,0,0-.16,0L11.46,16l.8-1.14L14.5,17l-5.05.11,2.66-3.41L16.4,17l4.25-4.76H12l4,3.14,2.17-2.16-2.73.12s-.08,0-.12.08a.42.42,0,0,0,.12.08.92.92,0,0,0,.16,0H17.3l-1.24,1.38Zm24.28,0L34,16.49,29.71,13.1l-3.4,4.3h6.85l-3.28-3.07-1.63,2.08h2a1.13,1.13,0,0,0,.24-.08l-.23-.11h-.07L29.11,16c.27-.4.53-.76.8-1.14L32.15,17l-5,.11c.91-1.16,1.78-2.27,2.66-3.41L34.05,17,38.3,12.2H29.66l4,3.16L35.8,13.2h0l-2.67.1a.77.77,0,0,0-.16.07v.07h2l-1.26,1.4-3-2.21Z"/><path class="svg" d="M14.19,22.12c.42.52.85,1,1.22,1.51,1.47,2.05,2.92,4.12,4.37,6.19.86,1.21,1.7,2.44,2.53,3.67.34.49.63,1,1,1.5s.83,1,1.23,1.58.85,1.16,1.27,1.75c.17.24.3.51.47.76l1.62,2.44.11.17c-.45.07-.87.16-1.3.19-1,.07-2,.11-3,.16a.31.31,0,0,1-.3-.15c-2.34-3.16-4.7-6.3-7-9.47-1.24-1.68-2.41-3.42-3.61-5.13l-.13-.2a1.23,1.23,0,0,1-.07-1.38c.55-1.08,1-2.2,1.53-3.31Z"/><path class="svg" d="M11.88,27.32c.2,0,.28.18.38.34a18.81,18.81,0,0,0,1.11,1.77c1.85,2.55,3.73,5.07,5.57,7.62,1.12,1.54,2.19,3.12,3.28,4.68l.16.26c-.46-.05-.87-.09-1.28-.15A17.66,17.66,0,0,1,15.45,40a1.07,1.07,0,0,1-.31-.29c-1.23-1.71-2.45-3.43-3.69-5.13-.63-.87-1.31-1.7-2-2.53a.4.4,0,0,1-.09-.4,8.66,8.66,0,0,1,1.3-2.55Z"/><path class="svg" d="M13.82,39a22.05,22.05,0,0,1-6-5.86L8,32.92l.79-.84C10.46,34.4,12.14,36.7,13.82,39Z"/><path class="svg" d="M45.88,16.44H47.3s0,0,0,0c-.08.52-.08.53-.6.55l-1.75,0h-.2l2.63-3.37c.4.18.41.2.3.68-.09,0-.2,0-.24,0Z"/><path class="svg" d="M.43,14.64c-.07-.34-.13-.64-.18-1,0,0,.07-.13.11-.18s.19-.18.33-.31H.16c0-.21,0-.39-.08-.58H2.15Z"/><path class="svg" d="M47.61,14.92c-.07.4-.14.79-.22,1.2L46.76,16l.78-1.11Z"/></svg>
                            </figure>
                            <h3>Na Cuia</h3>
                            <p>Cultural magazine website with mobile-friendly reader.</p>
                        </a>

                        <a href="#" class="card">
                            <figure class="color-radioufpa">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path class="svg" d="M12.78,45.2A7.72,7.72,0,0,0,15,40.81a8.12,8.12,0,0,0-6.8-9.2,7.82,7.82,0,0,0-6.39,1.6,8.11,8.11,0,0,1,4.39-.4,8.63,8.63,0,0,1,7.4,9.79,12.94,12.94,0,0,1-.8,2.6Zm28-1.8a26.4,26.4,0,0,0,2.4-8A27.66,27.66,0,0,0,19.77,4.23,28.23,28.23,0,0,0,6.18,5.83,25.43,25.43,0,0,1,25.77.24a25.75,25.75,0,0,1,15,43.16Zm-10,4.4a26.43,26.43,0,0,0,2.19-7,23.88,23.88,0,0,0-20.38-27A23.22,23.22,0,0,0,.79,15.23a21.39,21.39,0,0,1,17-4.6,22.43,22.43,0,0,1,19,25.18,22.18,22.18,0,0,1-6,12Zm-9.2.2a20.87,20.87,0,0,0,1.6-5A17.12,17.12,0,0,0,8.58,23.62a16.83,16.83,0,0,0-8.39,1,16.31,16.31,0,0,1,12.19-3.4A16,16,0,0,1,26,39.21,19.31,19.31,0,0,1,21.57,48Z"/></svg>
                            </figure>
                            <h3>Rádio Web UFPA</h3>
                            <p>Radio website, live audio player, multimedia web-documentary and hotsites.</p>
                        </a>

                    </div>

                </div>

            </div>

        </section>

        <section id="contact" class="gray">
            <div class="container left special">

                <h1>Building refined Web apps, sites and APIs.</h1>

                <div class="col">
                    <div class="col-left">
                        <p>I’ve been developing Web applications, websites and APIs for startups and organizations of all sizes, helping them to establish a refined digital presence.</p>
                    </div>
                    <div class="col-right">
                        <p>I build user-first digital products with strong focus on progressive enhancement, responsive design, accessibility and performance.</p>
                    </div>
                    
                </div>

            </div>
        </section>

        <section class="black">
            <div class="container special-contact">

                <h2>Let’s talk  — <a href="mailto:hello@lucasm.dev">hello@lucasm.dev</a></h2>

            </div>
        </section>

    </main>

    </PageLayout>)
}
