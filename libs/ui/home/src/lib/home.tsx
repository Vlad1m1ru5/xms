import { useMemo } from 'react';
import HomeCard from './home-card/home-card';
import HomeShowcase from './home-showcase/home-showcase';

export interface HomeProps {
  isAuth: boolean;
  isAdmin: boolean;
}

export function Home(props: HomeProps) {
  const tiers = useMemo(() => {
    if (!props.isAuth) {
      return [
        {
          title: 'User Account',
          description: [],
          buttonText: 'Sign in',
          buttonPath: '/login',
        },
      ];
    }

    const availableTiers = [
      {
        title: 'Markdown',
        description: [
          'Search markdowns',
          'Explore contents',
          'Upload documents',
        ],
        buttonText: 'Explore',
        buttonPath: '/markdown',
      },
    ];

    if (props.isAdmin) {
      availableTiers.push(
        {
          title: 'User',
          description: ['Add users', 'Administrate roles', 'Restrict access'],
          buttonText: 'Administrate',
          buttonPath: '/user',
        },
        {
          title: 'Events',
          description: ['Monitor events', 'Explore history', 'Show changes'],
          buttonText: 'Monitor',
          buttonPath: '/event',
        }
      );
    }

    return availableTiers;
  }, [props.isAuth, props.isAdmin]);

  return (
    <HomeShowcase>
      {tiers.map((tier, index) => (
        <HomeCard key={index} {...tier} />
      ))}
    </HomeShowcase>
  );
}

export default Home;
