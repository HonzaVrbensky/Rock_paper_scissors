import React, { ReactNode } from 'react'
import styles from './Layout.module.css'

interface ILayoutProps {
    children: ReactNode;
    [x: string]: any;
  }

  export const Layout: React.FC<ILayoutProps> = ({children, ...rest}) => {
    return (
        <div className={styles.layout} {...rest}>
        {children}
        </div>
    );
}

export default Layout;