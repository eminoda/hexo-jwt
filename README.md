# hexo-jwt
encrypt something by JWT, if you want to someone can read your blog when he is authed; 

# 中文说明
[链接](./README_CN.md)

# how to use
install npm module
````
npm install hexo-jwt -S
````

setting your hexo config.yml
````
jwt:
  header:
    typ: JWT,
    alg: HS256
    expiresIn: 1h

secretOrPrivateKey: hexo
````

use it where you need it
````
{{ encrypt(your payload,config.jwt,config.secretOrPrivateKey) }}
````

# more
1. [learn more JWT config](https://www.npmjs.com/package/jsonwebtoken)
2. [how to setting hexo plugins](https://hexo.io/docs/plugins.html)