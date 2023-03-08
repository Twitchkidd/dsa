# Data Structures and Algorithms

## typescript setup

[Helpful guide](https://basarat.gitbook.io/typescript/nodejs)

`yarn add -D typescript @types/node ts-node nodemon`

`npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true`

`{`
`  "watch": ["src"],`
`  "ext": ".ts,.js",`
`  "ignore": [],`
`  "exec": "npx ts-node ./src/index.ts"`
`}`

## typescript perf

There's an option to use swc (speedy web compiler) to speed up the typescript compilation, then there's installing typescript and ts-node globally, then there's a drop-in replacement for ts-node called sucrase-node. [stack overflow](https://stackoverflow.com/questions/58544811/is-there-any-option-to-compile-and-run-a-ts-code-faster-using-tsc-or-ts-node-or)
