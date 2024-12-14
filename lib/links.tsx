import { Layers, AppWindow } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    href: '/new-rider',
    label: 'new rider',
    icon: <Layers />,
  },
  {
    href: '/riders',
    label: 'riders',
    icon: <AppWindow />,
  },
];

export default links;