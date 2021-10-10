import MainNavigation from './MainNavigation';
import styles from './Layout.module.css';
//NEXTJS-HEAD
import Head from 'next/head';


function Layout({ children }) {
    return (
        <>
            <Head>
                <title> Meetups App </title>
                {/* 'meta' tag with 'description' if your website picked up by searchengines to show description of your website worldwide */}
                <meta name="description" content="Meetups App using NextJS framework"/>
            </Head>
            <div>
                <MainNavigation/>
                <main className={styles.main}> {children} </main>
            </div>
        </>
    )
}

export default Layout;