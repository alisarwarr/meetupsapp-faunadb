//COMPONENTS
import { NewMeetupForm } from '../../components';
//NEXTJS-ROUTER
import { useRouter } from 'next/router';


export default function() {
    const router = useRouter();

    const addMeetupHandler = async(enteredMeetupData) => {
        /* code outside 'getStaticProps'/'getServerSideProps'/'getStaticPaths' function will show to client so its not hide ever */
        /* so that's why using NEXTJS API routes for hide code from client, by making seperate folder for api and making each routes by filename */

                                   
                                   /* targeting 'api' folder file function */
        const response = await fetch(`/api/new-meetup/`,  {
            method  : "POST",
            body    : JSON.stringify(enteredMeetupData),
            headers : { 'Content-Type': 'application/json' }
        });

        /* consoling response */
        const data = await response.json();
        console.log(data);

        /* going back to home page */
        router.push('/');
    }


    return (
        <NewMeetupForm
            onAddMeetup={addMeetupHandler}
        />
    )
}