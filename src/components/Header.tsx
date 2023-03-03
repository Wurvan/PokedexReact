import React from 'react';
//eslint-disable-next-line
import styles from './header.module.css'

type HeaderProps ={
    query: string;
    setQuery: (query:string)=> void;
}

const Header = ({query, setQuery}: HeaderProps) => {
    return (
        <header className={styles.header}>
            <input className={styles.input} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search a Pokemon' />
        </header>
    );
};

export default Header;