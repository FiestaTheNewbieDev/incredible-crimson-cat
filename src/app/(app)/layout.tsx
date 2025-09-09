import { SidebarProvider } from '@components/ui/sidebar';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

export default Layout;
