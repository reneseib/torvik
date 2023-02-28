// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    if (req.method === 'POST') {
        let data = req.body;

        // POST DATA TO CALC API HERE

        let res = fetch("http://46.101.191.192:8000/gastro")
        console.log(res);

        res.status(200).json({ status: 'OK', result: "20" })
    } else {
        res.status(500).json({ status: 'Error' })
    }

}
