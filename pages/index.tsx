import PageLayout from '../components/PageLayout'
import Links from '../components/Links'
import WorkCards from '../components/WorkCards'
import BlogPosts from '../components/BlogPosts'

export default function Home() {
  return (
    <PageLayout
      title="Lucas Menezes — Software Engineer"
      description="Hello, I'm a Software Engineer from Brazil, coding to help companies and people grow.">
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container home">
            <figure id="profile">
              <img
                alt="Profile picture of Lucas Menezes"
                src="https://avatars.githubusercontent.com/lucasm"
              />
            </figure>
            <h1>Hello 👋🏻 I'm a Software Engineer from Brazil</h1>
            <Links />
          </div>
        </div>
      </section>

      <section id="blog">
        <div className="container">
          <h2 className="subtitle">Latest posts</h2>

          <BlogPosts />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="subtitle">About me</h2>

          <div className="aboutContainer">
            <div>
              <h2>I love to code solutions to enable the best of companies and people</h2>
            </div>

            <div>
              <p>
                I have been coding digital products since 2017, such as web applications, PWAs,
                websites, e-commerce, and mobile apps that help organizations refine their online
                presence and grow.
              </p>

              <p>
                I specialize in Frontend development with a focus on web standards, UX, performance,
                accessibility, security, tests, and analytics. In the Backend, I work with cloud
                services, CI/CD, databases, and APIs integrations.
              </p>

              <p>
                I'm currently traveling a lot, creating tech content and mentoring developers. I am
                also support open source projects, like{' '}
                <a href="https://findto.app/?utm_source=lucasm.dev" target="_blank" rel="noopener">
                  Findto
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="container">
          <h2 className="subtitle">Selected work</h2>

          <WorkCards />
        </div>
      </section>

      <section id="contact">
        <div className="container contactContainer">
          <div>
            <h2>
              🤝🏻<br></br>
              Let's work together
            </h2>
            <p>
              I love partnering. Send a concise message and describe your project. Within 2 business
              days I will get back to you.
            </p>
          </div>
          <div>
            <p>
              <a href="mailto:hello@lucasm.dev">hello@lucasm.dev</a>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
