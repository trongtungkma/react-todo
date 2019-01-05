module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import",
        "jest",
        "jsx-a11y",
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "react/jsx-filename-extension": [
            "error",
            {
              "extensions": [".js", ".jsx"]
            }
        ],
        "react/jsx-indent": [
            "error", 4
        ],
        "react/jsx-indent-props": [
            "error", 4
        ],
        "indent": [
            "error", 4
        ],
        "import/prefer-default-export": "off",
    }
};