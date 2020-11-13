const slugify = require('slugify')

module.exports = function (node) {
    return `/seed/${slugify(node.label)}`
}