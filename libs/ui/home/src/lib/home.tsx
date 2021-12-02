import { useMemo } from 'react';
import HomeCard from './home-card/home-card';
import HomeLink from './home-link/home-link';
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
          buttonText: <HomeLink to="/login">Sign in</HomeLink>,
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
        buttonText: <HomeLink to="/markdown">Explore</HomeLink>,
      },
    ];

    if (props.isAdmin) {
      availableTiers.push(
        {
          title: 'User',
          description: ['Add users', 'Administrate roles', 'Restrict access'],
          buttonText: <HomeLink to="/user">Administrate</HomeLink>,
        },
        {
          title: 'Events',
          description: ['Monitor events', 'Explore history', 'Show changes'],
          buttonText: <HomeLink to="/event">Monitor</HomeLink>,
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
