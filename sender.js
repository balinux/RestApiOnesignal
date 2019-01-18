const sender = (data) => {
    var headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic YmRhMDQyMTMtMTQ2MC00MWMwLThmNmEtMThlODU4MDM2ZjUz"
    };

    var config = {
        url: "https://onesignal.com/api/v1/notifications",
        method: "POST",
        headers: headers,
        data: data
    };

    const axios = require('axios')
    return axios(config)
        .then((Response) => {
            return Response.data
        })
        .catch((error) => { console.log(error) })
}

module.exports = sender;