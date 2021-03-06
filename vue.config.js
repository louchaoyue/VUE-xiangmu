const path = require("path");

module.exports = {
    devServer:{
        proxy:{
            "/abc":{
                target:'http://novelapi.sm.cn',
                changeOrigin:true,
                pathRewrite:{
                    "^/abc":""
                }
            },
            "/abc":{
                target:'https://napi.uc.cn',
                changeOrigin:true,
                pathRewrite:{
                    "^/abc":""
                }
            },
            "/abc":{
                target:'http://content.shuqireader.com',
                changeOrigin:true,
                pathRewrite:{
                    "^/abc":""
                }
            },
            "/abc":{
                target:'https://comment.alwx.alibaba.com',
                changeOrigin:true,
                pathRewrite:{
                    "^/abc":""
                }
            },
            "/abc":{
                target:'http://bookapi.shuqiapi.com',
                changeOrigin:true,
                pathRewrite:{
                    "^/abc":""
                }
            },
            "/abc":{
                target:'http://read.xiaoshuo1-sm.com',
                changeOrigin:true,
                pathRewrite:{
                    "^/abc":""
                }
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                '@':path.resolve(__dirname,"./src/"),
                'api':path.resolve(__dirname,"./src/api"),
                'common':path.resolve(__dirname,"./src/common"),
                'components':path.resolve(__dirname,"./src/components"),
                'routre':path.resolve(__dirname,"./src/routre"),
                'store':path.resolve(__dirname,"./src/store"),
                'utils':path.resolve(__dirname,"./src/utils"),
                'views':path.resolve(__dirname,"./src/views"),
            }
        }
    }
}