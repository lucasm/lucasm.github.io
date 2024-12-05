import PageLayout from '../components/PageLayout'
import Links from '../components/Links'
import BlogPosts from '../components/BlogPosts'
import CardsWork from '../components/CardsWork'
import ProfilePhoto from '../components/ProfilePhoto'
import Button from '../components/Button'
import { ROUTES } from '../routes/routes'

export default function Home() {
  return (
    <PageLayout title="Lucas Menezes" description={ROUTES.HOME.description}>
      <section className="fullscreen" id="home">
        <div className="fullscreen-container">
          <div className="container home">
            <div>
              <ProfilePhoto />

              <div>
                <h1>Hello, I'm a Senior Frontend Engineer from Brazil</h1>

                <Links />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="background-y">
        <div className="container">
          <h2 className="subtitle">{ROUTES.BLOG.title}</h2>

          <BlogPosts />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="subtitle">About</h2>

          <div className="aboutContainer">
            <div>
              <h3>Building positive impact</h3>

              <Button url={ROUTES.WORK.path}>{ROUTES.WORK.title}</Button>
            </div>

            <div>
              <p>
                Since 2017, I've been developing Web Applications, E-Commerces,
                Websites, and Mobile Apps that impact millions of users.
              </p>

              <p>
                I've been a collector of positive impacts on revenue, efficiency
                and expansion, in the companies I've worked with. I'm proud of
                my achievements. And I love new challenges.
              </p>

              <p>
                As a Frontend specialist, my focus is on Web standards, UX,
                performance, accessibility, security, PWA, analytics, and
                observability. Additionally, APIs, cloud services, CI/CD, and AI
                experiments.
              </p>

              <p>
                I love açaí, traveling, deep conversations, bodybuilding and the
                open source ecosystem.
              </p>
            </div>
          </div>

          <CardsWork />
        </div>
      </section>
    </PageLayout>
  )
}
