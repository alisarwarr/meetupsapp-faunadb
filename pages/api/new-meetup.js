//FAUNADB
var faunadb = require('faunadb'),
q = faunadb.query;


//     *******.com/api/new-meetup



/* not define react component because not returning it */
/* define functions which contains serverside code */



/* whenever hits on *******.com/api/new-meetup url, then will trigger a function, which we will have to define */
async function handler(req, res) {
//  'req' object contains data about incoming request.
//  'res' object will be needed to send back the response.

    if(req.method === 'POST') {
        const data = req.body;   /* getting data */

        var adminClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });

        try {
            await adminClient.query(
                q.Create(
                    q.Collection('meetups'),
                    { data }
                )
            )
            res.status(201).json({ message: "Meetup Inserted!" });
        }
        catch(err) {
            res.status(500).json({ error: err.message })
        }
    }
}

export default handler;