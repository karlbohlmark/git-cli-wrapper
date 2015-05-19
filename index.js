var exec = require('child_process').exec

module.exports.clone = clone

function clone (repo, toDir) {
    toDir = toDir || ""
    return new Promise(function (resolve, reject) {
        exec(`git clone ${repo} ${toDir}`, function (e, out, err) {
            if (e) {
                return reject(e)
            }
            resolve()
        })
    })
}

if (!module.parent) {
    clone("git@github.com:karlbohlmark/reduce-readable.git").then(function (r) {
        console.log("success", r)
    }).catch(function (e) {
        console.log("Failed", e.message)
    })
}