let _promise = function (param) {
    return new Promise(function (resolve,reject) {
        window.setTimeout(function () {
            if(param) {
                resolve("해결");
            }else{
                reject(Error("실패!"));
            }

        },3000);

    });

};
_promise(true)
    .then(function (text) {
        console.log(text);

    },function (error) {
        console.log(error);
    });
