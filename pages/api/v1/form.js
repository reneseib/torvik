// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

    console.log("USER IP", req.connection.remoteAddress)

    if (req.method === 'POST') {
        var data = req.body;

        // process data to types
        try {
            data["ip_address"] = req.socket.remoteAddress;
            data["mietflaeche"] = parseInt(data["mietflaeche"]);
            data["lebensmittel"] = parseInt(data["lebensmittel"]);
            data["stromverbrauch"] = parseInt(data["stromverbrauch"]);

            data["wenigerstrom"] = parseInt(data["wenigerstrom"]);
            data["erneuerbar"] = parseInt(data["erneuerbar"]);

            Object.keys(data).map((key) => {
                if (data[key] === true) {
                    data[key] = "yes"
                }
                if (data[key] === false) {
                    data[key] = "no"
                }
            })
        } catch (e) {
            console.error("ERROR HERE", e)
        }

        console.log("data", data);

        let resp = await fetch("http://46.101.191.192:8000/gastro", {
            // let resp = await fetch("http://127.0.0.1:8000/gastro", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(data),
        })
        let text = await resp.text();
        console.log(text);
        // let result = await resp.json()

        res.status(200).json({ status: 'OK', result: result })
    } else {
        res.status(500).json({ status: 'Error' })
    }

}
