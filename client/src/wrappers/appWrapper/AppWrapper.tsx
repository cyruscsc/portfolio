import { ReactNode } from 'react';
import './AppWrapper.scss';

interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  return <div className='app__wrapper'>{children}</div>;
};

export default AppWrapper;
