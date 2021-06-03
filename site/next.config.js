const debug = process.env.NODE_ENV !== "production";

module.exports = {
    basePath: debug ? '' : '',     /* e.g. /nrusch   (no trailing) */
    assetsPrefix: debug ? '' : ''  /* e.g. /nrusch/  (with trailing) */
}
