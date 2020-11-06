const slugify = require('slugify')

module.exports = function (title) {
    return `/seed/${slugify(title)}`
}