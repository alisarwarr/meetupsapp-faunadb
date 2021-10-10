import styles from './MainNavigation.module.css';
//NEXTJS-LINK
import Link from 'next/link';
//NEXTJS-ROUTER
import { useRouter } from 'next/router';


function MainNavigation() {
    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={() => router.asPath !== '/' ? router.push('/') : null}> Meetups </div>
            <nav>
                <ul>
                    {
                        router.asPath === '/' && (
                            <li>
                                <Link href='/new-meetup'> New Meetup </Link>
                            </li>
                        )
                    }
                    {
                        router.asPath === '/new-meetup' && (
                            <li>
                                <Link href='/'> All Meetups </Link>
                            </li>
                        )
                    }
                 </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;
