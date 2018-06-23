var jwt = require('jsonwebtoken');

function buildJwt(payload, config, secretOrPrivateKey) {
    return jwt.sign(payload, secretOrPrivateKey, config);
}
hexo.extend.helper.register('encrypt', function (payload, jwt, secretOrPrivateKey) {
    return buildJwt(payload, jwt, secretOrPrivateKey);
})