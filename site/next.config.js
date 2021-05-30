const debug = process.env.NODE_ENV !== "production";

module.exports = {
    basePath: debug ? '' : '/nrusch',
    assetsPrefix: debug ? '' :'/nrusch/'
}
