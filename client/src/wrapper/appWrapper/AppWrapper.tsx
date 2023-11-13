import { ReactNode } from 'react';
import './AppWrapper.scss';

interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <div className='app-wrapper'>
      <div className='children-container'>{children}</div>
    </div>
  );
};

export default AppWrapper;
