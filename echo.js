function echo(request) {
    let response = 
`${request.variables.request}

#uri_raw: ${request.variables.request_uri}

#uri_normalized: ${request.uri}
#args:
`
    for(const key in request.args) {
        const value = request.args[key]
        response += `${key}: ${value}\n`
    }

    response += '\n#headers:\n'

    for(const key in request.headersIn) {
        const value = request.headersIn[key]
        response += `${key}: ${value}\n`
    }

    response += `\n#body\n${request.variables.request_body ?? ''}`

    request.return(200, response)
}

export default { echo }