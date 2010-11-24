{
    baseUrl: "./lib",
    dir: "build",

    //- "closure": uses Google's Closure Compiler in simple optimization
    //mode to minify the code.
    //- "closure.keepLines": Same as closure option, but keeps line returns
    //in the minified files.
    //- "none": no minification will be done.
    optimize: "closure.keepLines",
    inlineText: true,
    useStrict: false,

    pragmas: {
        jquery: false,
        requireExcludeModify: true,
        requireExcludePlugin: false,
        requireExcludePageLoad: false
    },

    skipPragmas: false,
    execModules: false,
    skipModuleInsertion: false,

    modules: [
        {
            name: "ace/editor",
            include: [
                "ace/document",
                "ace/undomanager",
                "ace/virtual_renderer",
                
                "ace/mode/javascript",
                "ace/theme/textmate"
            ],
            includeRequire: true
        },
        
        { 
            name: "ace/theme/eclipse", 
            exclude: [
                "ace/lib/lang",
                "ace/lib/dom",
                "ace/lib/oop"
            ]
        },
        { 
            name: "ace/mode/xml",
            exclude: [
                "ace/lib/oop",
                "ace/tokenizer",
                "ace/mode/text"      
            ]
        },
        { 
            name: "ace/mode/css",
            exclude: [
                "ace/lib/oop",
                "ace/lib/lang",
                "ace/tokenizer",
                "ace/range",
                "ace/mode/text"      
            ]
        },
        { 
            name: "ace/mode/html",
            exclude: [
                "ace/lib/oop",
                "ace/lib/lang",
                "ace/tokenizer",
                "ace/range",
                "ace/mode/text",
                "ace/mode/javascript",
                "ace/mode/css",
            ]
        }
    ]
}