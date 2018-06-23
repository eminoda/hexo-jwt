# hexo-jwt
使用JWT加密信息。打个比方，如果你希望用户授权后，通过一个标准的方式解密（如JWT）才能访问你的blog地址。

# 怎么使用
安装包
````
npm install hexo-jwt -S
````

配置 hexo config.yml
````
jwt:
  header:
    typ: JWT,
    alg: HS256
    expiresIn: 1h

secretOrPrivateKey: hexo
````

在你需要使用地方使用
````
{{ encrypt(your payload,config.jwt,config.secretOrPrivateKey) }}
````

# 更多
1. [学习 JWT config](https://www.npmjs.com/package/jsonwebtoken)
2. [怎么配置 hexo 插件](https://hexo.io/docs/plugins.html)