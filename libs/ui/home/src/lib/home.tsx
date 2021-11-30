import { useMemo } from 'react';
import HomeCard from './home-card/home-card';
import HomeLink from './home-link/home-link';
import HomeShowcase from './home-showcase/home-showcase';

export interface HomeProps {
  isAuth: boolean;
}

export function Home(props: HomeProps) {
  const tiers = useMemo(() => {
    return props.isAuth
      ? [
          {
            title: 'Markdown',
            description: [
              'Search markdowns',
              'Explore contents',
              'Upload documents',
            ],
            buttonText: <HomeLink to="/markdown">Explore</HomeLink>,
          },
          {
            title: 'User',
            description: ['Add users', 'Administrate roles', 'Restrict access'],
            buttonText: <HomeLink to="/user">Administrate</HomeLink>,
          },
          {
            title: 'Events',
            description: ['Monitor events', 'Explore history', 'Show changes'],
            buttonText: <HomeLink to="/event">Monitor</HomeLink>,
          },
        ]
      : [];
  }, [props.isAuth]);

  return (
    <HomeShowcase>
      {tiers.map((tier) => (
        <HomeCard {...tier} />
      ))}
    </HomeShowcase>
  );
}

export default Home;
