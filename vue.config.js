module.exports={
    devServe:{
        open:true,
        // port:
    },
    configureWebpack:{
        resolve:{
            alias:{
                "com":"@/components",
                "util":"@/util",
                "views":"@/views",
                "api":"@/api",
                "mixin":"@/mixin",
            }
        }
    },
    lintOnSave:false,
}