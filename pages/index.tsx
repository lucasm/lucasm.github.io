import PageLayout from '../components/PageLayout'
import Image from 'next/image'
import Icons from '../components/Icons'
import WorkCards from '../components/WorkCards'
import BlogPosts from '../components/BlogPosts'

export default function Home() {
  return (
    <PageLayout
      title="Lucas Menezes — Software Engineer"
      description="Hello, I'm a Software Engineer from Brazil. I code to help businesses and people grow.">
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container home">
            <div>
              <h1>Hello, I’m a Software Engineer from Brazil</h1>
              <p className="description">I code to help businesses and people grow =)</p>

              <Icons />
            </div>

            <div>
              <figure id="profile">
                <Image
                  alt="Profile picture of Lucas Menezes"
                  src="https://avatars.githubusercontent.com/lucasm"
                  priority
                  fill={true}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="blog">
        <div className="container">
          <h2 className="subtitle">Latest posts</h2>

          <BlogPosts />
        </div>
      </section>

      <section id="work">
        <div className="container">
          <h2 className="subtitle">Selected work</h2>

          <WorkCards />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="subtitle">About me</h2>

          <div className="specialContainer">
            <div>
              <h2>“I code solutions to enable the best of businesses and people"</h2>
            </div>

            <div>
              <p>
                Since 2017, I have been coding digital products like Web applications, websites,
                e-commerces, PWAs, and mobile apps thats helps organizations to refine their online
                presence and grow.
              </p>

              <p>
                I specialize in Frontend development with focus on Web standards, UX, performance,
                accessibility, security, tests and analytics. Backend with cloud services, CI/CD,
                databases and APIs integrations.
              </p>

              <p>
                I'm also founder of open source project{' '}
                <a href="https://findto.app/?utm_source=lucasm.dev" target="_blank" rel="noopener">
                  Findto
                </a>{' '}
                and content creator for developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container contactContainer">
          <div>
            <h2>Let’s talk</h2>
            <p>Send me an email if you want to work together.</p>
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
