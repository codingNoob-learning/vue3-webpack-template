module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        // vue
        // 'plugin:vue/vue3-essential', // Lv1
        'plugin:vue/vue3-strongly-recommended', // Lv2
        // 'plugin:vue/vue3-recommended', // Lv3

        // js
        'eslint:recommended'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser'
        // https://velog.io/@c-jeongyyun/React-Eslint-%EA%B4%80%EB%A0%A8-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0 eslint parsing error: require() of ESModule
    },
    rules: {
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",      // never = 한 줄로 끝나는 태그에 대해서는 >를 줄바꿈 하지 않아도 됨, always = 무조건 >를 줄바꿈 해줘야 함
            "multiline": "never"        // never = 여러 속성으로 끝나는 태그에 대해서 >를 줄바꿈 하지 않아도 됨, always = 무조건 >를 줄바꿈 해줘야 함
        }],

        "vue/html-self-closing": ["error", {
            "html": {
              "void": "always",          // never = <img>, always = <img />
              "normal": "never",        // never = <div></div>, always = <div></div> 안에 내용이 없다면 <div />로 끝내야 함
              "component": "always"     // never = <component></component>, always = <component />
            },
            "svg": "always",
            "math": "always"
          }]
    }
}