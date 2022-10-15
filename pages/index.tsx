import { GetStaticProps } from 'next';
import Head from 'next/head';
import styles from '../styles/Index.module.css';
import Badge, { BadgeProps } from '../components/badge';

export default function Index({ badges }: StaticProp) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Backes</title>
        <meta name="description" content="Daniel Backes Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h3>          
          Hi there, I'm Daniel Backes
        </h3>

        <ul>
          <li>
            👨‍🎓 Computing Scientist
          </li>
          <li>
            💻 Developing with PHP (Symfony Framework) and Javascript for many years (8+)
          </li>
          <li>
            📜 Currently studying NodeJS, React JS and React Native
          </li>
          <li>
            🔥 I'm also a Blockchain and Decentralized System enthusiast, technologies that will be my next study aim
          </li>
        </ul>        

        <h3>
          My badges
        </h3>
        { badges.map(({
            rightLabel,
            rightColor,
            logo,
            title
          }: BadgeProps) => (
            <Badge
              key={logo}
              rightLabel={rightLabel}
              rightColor={rightColor}
              logo={logo}
              title={title}
            />
          ))
        }
    </div>
  );
}

type StaticProp = {
  badges: Array<BadgeProps>;
};

export const getStaticProps: GetStaticProps<StaticProp> = async () => {
  const badges = [
    {
      rightLabel: 'PHP',
      rightColor: '777BB4',
      logo: 'php',
      title: "PHP",          
    },
    {
      rightLabel: 'Symfony',
      rightColor: '000000',
      logo: 'symfony',
      title: "Symfony",          
    }
  ];

  return {
    props: {
      badges
    },
  };
};