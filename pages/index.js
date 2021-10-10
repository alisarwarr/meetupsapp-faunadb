//COMPONENTS
import { MeetupList } from '../components';
//FAUNADB
var faunadb = require('faunadb'),
q = faunadb.query;


export default function({ meetups }) {
    return (
        <MeetupList
            meetups={meetups}
        />
    )
}


//  --  NEXTJS, looks for function which named as 'getStaticProps'
//  --  NEXTJS, first of call this function instead of calling component function
//  --  NEXTJS, waits for untill promise is to be resolved incase of asynchronous function
//  --  NEXTJS, will execute this function during build-process, or execute nor show on client-side
//  --  NEXTJS, you can use for connect database or connect server
export async function getStaticProps() {
//  --  NEXTJS, will deploy this function while build command


    /* fetch data from an API */
    /* code inside 'getStaticProps' function will never show on client so its hide forever */
//****************************************************************************************************************/
    var adminClient = new faunadb.Client({ secret: "fnAEVKY8zdACS_9rgfs9f_zc62Ym8GRjaGXVBP3K" }); 
    
    try {
        var result = await adminClient.query(
            q.Map(
                q.Paginate(q.Documents(q.Collection('meetups'))),
                q.Lambda(x => q.Get(x))
            )
        )
    }
    catch(err) {
        console.log(err);
    }
//****************************************************************************************************************/


    /* for getting id of FAUNADB with every particular data */
    const modifiedData = result.data.map(obj => {
        return {
            id: obj.ref.id,
             ...obj.data
        }
    });


    return {
        props:   /* always need to return an object here, object have property named as 'props' */
        {        /* 'props' represents props of component function */
            meetups: modifiedData
        },
        revalidate: 1
    };
}