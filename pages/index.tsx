import { useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import styles from '../styles/Index.module.css';
import Badge, { BadgeProps } from '../components/badge';
import Icon, { IconProps } from '../components/icon';

export default function Index({ badges, icons }: StaticProp) {
  const [badge, setBadge] = useState(false);

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
          Skills
        </h3>

        { badge 
          ? 
          badges.map(({
            rightLabel,
            rightColor,
            logo, 
            width,
            height
          }: BadgeProps) => (
            <Badge
              key={logo}
              rightLabel={rightLabel}
              rightColor={rightColor}
              logo={logo}
              width={width}
              height={height}
            />
          ))
          :
          icons.map(({
            title,
            folder,
            file,
          }: IconProps) => (
            <Icon
              key={file}
              title={title}
              folder={folder}
              file={file}
            />
          ))
        }
    </div>
  );
}

type StaticProp = {
  badges: Array<BadgeProps>;
  icons: Array<IconProps>;
};


export const getStaticProps: GetStaticProps<StaticProp> = async () => {
  const badges: Array<BadgeProps> = [
    {
      rightLabel: 'PHP',
      rightColor: '777BB4',
      logo: 'php',
      width: 49,
      height: 20
    },
    {
      rightLabel: 'Symfony',
      rightColor: '000000',
      logo: 'symfony',
      width: 77,
      height: 20
    },
    {
      rightLabel: 'Composer',
      rightColor: '885630',
      logo: 'composer',
      width: 83,
      height: 20
    },
    {
      rightLabel: 'JavaScript',
      rightColor: 'F7DF1E',
      logo: 'javascript',
      width: 85,
      height: 20      
    },
    {
      rightLabel: 'TypeScript',
      rightColor: '007ACC',
      logo: 'typescript',
      width: 87,
      height: 20      
    },
    {
      rightLabel: 'NodeJS',
      rightColor: '43853D',
      logo: 'node.js',
      width: 69,
      height: 20            
    },
    {
      rightLabel: 'NPM',
      rightColor: 'CB3837',
      logo: 'NPM',
      width: 53,
      height: 20            
    },
    {
      rightLabel: 'Express',
      rightColor: '404D59',
      logo: 'express',
      width: 71,
      height: 20            
    },
    {
      rightLabel: 'HTML5',
      rightColor: 'E34F26',
      logo: 'html5',
      width: 65,
      height: 20            
    }, 
    {
      rightLabel: 'CSS3',
      rightColor: '1572B6',
      logo: 'css3',
      width: 57,
      height: 20            
    },
    {
      rightLabel: 'Saas',
      rightColor: 'CC6699',
      logo: 'sass',
      width: 55,
      height: 20            
    },    
    {
      rightLabel: 'React',
      rightColor: '23A9F2',
      logo: 'react',
      width: 59,
      height: 20            
    },        
    {
      rightLabel: 'NextJS',
      rightColor: '000000',
      logo: 'Next.js',
      width: 67,
      height: 20            
    },   
    {
      rightLabel: 'Bootstrap',
      rightColor: '563D7C',
      logo: 'bootstrap',
      width: 81,
      height: 20            
    },
    {
      rightLabel: 'WebPack',
      rightColor: '1C78C0',
      logo: 'WebPack',
      width: 77,
      height: 20         
    },   
    {
      rightLabel: 'Yarn',
      rightColor: '2C8EBB',
      logo: 'yarn',
      width: 53,
      height: 20            
    },        
    {
      rightLabel: 'VS_Code',
      rightColor: '0078D4',
      logo: 'visual%20studio%20code',
      width: 75,
      height: 20            
    },       
    {
      rightLabel: 'Nginx',
      rightColor: '269539',
      logo: 'nginx',
      width: 59,
      height: 20            
    },            
    {
      rightLabel: 'Linux',
      rightColor: 'FCC624',
      logo: 'linux',
      width: 57,
      height: 20            
    },            
    {
      rightLabel: 'Docker',
      rightColor: '2496ED',
      logo: 'docker',
      width: 67,
      height: 20            
    },  
    {
      rightLabel: 'MySQL',
      rightColor: '4479A1',
      logo: 'mysql',
      width: 67,
      height: 20            
    },            
    {
      rightLabel: 'Git',
      rightColor: 'F05032',
      logo: 'git',
      width: 43,
      height: 20            
    }, 
    {
      rightLabel: 'GitHub',
      rightColor: '181717',
      logo: 'GitHub',
      width: 65,
      height: 20            
    },             
    {
      rightLabel: 'GitLab',
      rightColor: 'D3D0CB',
      logo: 'GitLab',
      width: 63,
      height: 20      
    }                                          
  ];

  const icons: Array<IconProps> = [
    {
      title: 'PHP',
      folder: 'php',
      file: 'php-plain',
    },
    {
      title: 'Symfony',
      folder: 'symfony',
      file: 'symfony-original',
    },
    {
      title: 'Composer',
      folder: 'composer',
      file: 'composer-original',
    },
    {
      title: 'JavaScript',
      folder: 'javascript',
      file: 'javascript-original',
    },  
    {
      title: 'TypeScript',
      folder: 'typescript',
      file: 'typescript-original',
    }, 
    {
      title: 'NodeJS',
      folder: 'nodejs',
      file: 'nodejs-original',
    },
    {
      title: 'NPM',
      folder: 'npm',
      file: 'npm-original-wordmark',
    },    
    {
      title: 'Express',
      folder: 'express',
      file: 'express-original',
    },        
    {
      title: 'HTML5',
      folder: 'html5',
      file: 'html5-original',
    },    
    {
      title: 'CSS3',
      folder: 'css3',
      file: 'css3-original',
    },   
    {
      title: 'SASS',
      folder: 'sass',
      file: 'sass-original',
    },                    
    {
      title: 'React',
      folder: 'react',
      file: 'react-original',
    },    
    {
      title: 'NextJS',
      folder: 'nextjs',
      file: 'nextjs-original',
    },             
    {
      title: 'Bootstrap',
      folder: 'bootstrap',
      file: 'bootstrap-original',
    },         
    {
      title: 'Webpack',
      folder: 'webpack',
      file: 'webpack-original',
    },   
    {
      title: 'Yarn',
      folder: 'yarn',
      file: 'yarn-original',
    },      
    {
      title: 'VS Code',
      folder: 'vscode',
      file: 'vscode-original',
    },    
    {
      title: 'Nginx',
      folder: 'nginx',
      file: 'nginx-original',
    }, 
    {
      title: 'Linux',
      folder: 'linux',
      file: 'linux-original',
    },     
    {
      title: 'Docker',
      folder: 'docker',
      file: 'docker-original',
    },                        
    {
      title: 'MySQL',
      folder: 'mysql',
      file: 'mysql-original',
    },            
    {
      title: 'MongoDB',
      folder: 'mongodb',
      file: 'mongodb-original',
    },                                                                
    {
      title: 'Git',
      folder: 'git',
      file: 'git-original',
    },
    {
      title: 'GitHub',
      folder: 'github',
      file: 'github-original',
    },
    {
      title: 'GitLab',
      folder: 'gitlab',
      file: 'gitlab-original',
    },
  ];

  return {
    props: {
      badges,
      icons
    },
  };
};