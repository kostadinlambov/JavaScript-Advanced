function validateRequest(inputObj) {

    let methodRegex = /^(GET|POST|DELETE|CONNECT)$/;
    let uriRegex = /^([\w+.]+|\*)$/;
    let versionRegex = /^(HTTP\/0\.9|HTTP\/1\.0|HTTP\/1.1|HTTP\/2\.0)$/;
    let messageRegex = /([<>\\&'"])/;

    let methodMatch = methodRegex.test(inputObj.method);
    let uriMatch = uriRegex.test(inputObj.uri);
    let versionMatch = versionRegex.test(inputObj.version);
    let messageMatch = messageRegex.test(inputObj.message);

    if (!inputObj.hasOwnProperty('method') || !methodMatch) {
        throw new Error('Invalid request header: Invalid Method')
    } else if (!inputObj.hasOwnProperty('uri') || !uriMatch) {
        throw new Error('Invalid request header: Invalid URI')
    } else if (!inputObj.hasOwnProperty('version') || !versionMatch) {
        throw new Error('Invalid request header: Invalid Version')
    } else if (!inputObj.hasOwnProperty('message') || messageMatch) {
        throw new Error('Invalid request header: Invalid Message')
    } else {
        return inputObj
    }
}

console.log(validateRequest({
    method: 'GET',
     uri: 'svn.public.catalog',
    // version: 'HTTP/1.1',
    // message: ''

}));
;

//
// validateRequest({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// });
//
// validateRequest({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// });
//
// validateRequest({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// });


