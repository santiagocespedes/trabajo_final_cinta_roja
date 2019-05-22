const axios = require('axios')
const PORT = process.env.PORT || 4000
let idfinca = "5ce2f91f61dae02cbc689132"

function getFinca(){
    axios.get(`localhost:${PORT}/api/v1/get/finca/${idfinca}`).then((result) => {
        if(result.status === 200){
            console.log(result)
            document.write(result)
        }
        else{
            console.log("Not found");
        }
    }).catch((err) => {
        console.log(err);
    });
}