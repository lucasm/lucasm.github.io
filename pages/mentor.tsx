import Button from '../components/Button'
import PageLayout from '../components/PageLayout'
import PatreonCheck from '../components/PatreonCheck'
import SvgAnimateMentorship from '../components/SvgAnimateMentorship'
import { IconArrowExternal } from '../components/Svgs'
import { ROUTES } from '../routes/routes'

export default function PageMentorship() {
  const title = ROUTES.MENTORSHIP.title
  const image = ROUTES.MENTORSHIP.image
  const description = ROUTES.MENTORSHIP.description

  return (
    <PageLayout title={title} description={description} image={image}>
      <section>
        <div className="page">
          <div className="container ">
            <h1>{title}</h1>

            <p className="description">
              Desde 2017, atuo com Engenharia de Software, Web e Frontend. Sou
              procurado por profissionais e estudantes que buscam orientação
              para evoluir na carreira de TI. O objetivo da mentoria é você
              atingir os seus objetivos.
            </p>
          </div>
        </div>
      </section>

      <section className="background-y color-b-fixed">
        <div className="container">
          <article>
            <SvgAnimateMentorship />

            <h1>
              "Primeiro, resolva o problema. Então, escreva o código." — John
              Johnson
            </h1>

            <h3>Como funciona?</h3>
            <p>
              A mentoria é realizada por videochamada. Durante a primeira sessão
              vamos conversar e entender o seu momento atual na TI. Quais as
              suas necessidades e desafios? Com base nisso, vamos definir metas
              e traçar um plano de ação de curto ou médio prazo para você
              alcançar os seus objetivos.
            </p>

            <h3>Quem pode participar?</h3>

            <p>
              Desenvolvedores, estudantes e profissionais de TI que buscam
              orientação e suporte para evoluir na carreira e estudos.
            </p>

            {/* <h3>O que você precisa?</h3>
            <p>
              - Estar disposto a aprender e evoluir
              <br />
              - Ser verdadeiro
              <br />- Ter comprometimento para executar o plano de ação
            </p> */}

            <h3>Benefícios:</h3>

            <p>
              - Orientação personalizada com plano de ação
              <br />
              - Aprendizado prático (hard skills)
              <br />
              - Desenvolvimento comportamental (soft skills)
              <br />
              - Feedback, onde falo o que você PRECISA ouvir para evoluir, não o
              que quer ouvir para agradar o ego
              <br />
              - Avaliação de resultados alcançados
              <br />- Independência, você no controle, sem precisar de mim
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          {/* <h2 className="subtitle">Contact</h2> */}

          <div className="aboutContainer">
            <div>
              <h3>Agende sua mentoria</h3>
            </div>

            <div>
              <p>
                <strong></strong>
                <br />
                Duração: 45 minutos
                <br />
                Formato: Videochamada + Anotações
                <br />
                Plataforma: Patreon
                <br />
                <br />
              </p>

              <Button url="https://patreon.com/lucasm">
                <>
                  Agendar
                  <IconArrowExternal />
                </>
              </Button>

              <PatreonCheck />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
