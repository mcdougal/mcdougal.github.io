module.exports = {
  env: {
    jest: true,
    es6: true,
    node: true,
  },
  parser: `babel-eslint`,
  extends: [`airbnb`, `prettier`],
  plugins: [`prettier`, `jsdoc`, `react-hooks`],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    // Airbnb's style guide allows braces to be omitted when possible. Their
    // reasoning is "Syntactic sugar." However, this codebase prefers braces
    // around all arrow functions.
    //
    // Firstly, omitting the braces is more likely to cause bugs. If the
    // developer forgets to add braces after adding an extra statement to a
    // function, the second statement would no longer be a part of the function.
    //
    // Secondly, having optional braces increases cognitive load. If braces are
    // optional, the developer must be careful that functions with a side effect
    // and no return include the braces, while functions without a side effect
    // and a return omit the braces.
    //
    // Thirdly, it is really annoying to go back and forth between braces and
    // no braces. It is common to add (or remove) a statement to a function,
    // which would require going to the beginning and end of the function to add
    // (or remove) the braces. This is especially annoying when you want to
    // temporarily add a console.log for debugging purposes.
    //
    // Requiring braces does make the logic a little more cluttered, but the
    // justifications above outweigh the downside of visual clutter.
    //
    'arrow-body-style': [`error`, `always`],

    // Airbnb's style guide allows parens to be dropped because it is "Less
    // visual clutter." However, it is more cognitive load to go back and
    // forth between the styles. Also, if you add a second argument then the
    // parens will already be there.
    'arrow-parens': [`error`, `always`],

    // It is often convenient in class-based React components to abstract some
    // rendering logic into a separate class method. While this could be a
    // function at the top of the module, it can be beneficial to group it
    // with similar class methods in order to better organize the code. Forcing
    // all class methods to be static or use `this` doesn't help all that much,
    // so the rule is more restrictive than it is worth.
    'class-methods-use-this': `off`,

    // Function declarations are hoisted, which means that it’s easy - too
    // easy - to reference the function before it is defined in the file. This
    // harms readability and maintainability.
    //
    'func-style': [`error`, `expression`, { allowArrowFunctions: true }],

    // Since imports are hoisted, keeping them all at the top prevents
    // surprising behavior.
    'import/first': `error`,

    // If this is not specified, `eslint --print-config` uses maxDepth=null,
    // which ends up throwing the following error: "Configuration for rule
    // "import/no-cycle" is invalid: Value null should be integer."
    'import/no-cycle': [
      `error`,
      {
        maxDepth: undefined,
      },
    ],

    // This plugin supports a --fix option, so we don't have to spend time
    // manually organizing imports. Organized imports make it a lot easier to
    // determine which modules are used at a glance.
    'import/order': [
      `error`,
      {
        'newlines-between': `always`,
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],

    // TODO: Disabling this rule until the following issue has been fixed:
    // https://github.com/babel/babel-eslint/issues/530
    // This is the most popular convention. Keeping indents small helps mitigate
    // long lines caused by deep callback nesting.
    // indent: [`error`, 2, { SwitchCase: 1 }],
    indent: `off`,

    // Our JSDocs are intended to be read by humans. Indentation can make docs
    // much easier to read.
    'jsdoc/check-indentation': `off`,

    // It's a bit too restrictive to require all of our descriptions to be
    // complete sentences. Ultimately, as long as it is understandable by the
    // reader, it can be written however we like.
    'jsdoc/require-description-complete-sentence': `off`,

    // Some functions are not worth documenting, so we don't want to require
    // JSDocs on everything
    'jsdoc/require-description': `off`,
    'jsdoc/require-example': `off`,
    'jsdoc/require-param': `off`,
    'jsdoc/require-returns': `off`,

    // These JSDoc rules will help us write correct, consistent and clear
    // documentation for our functions.
    'jsdoc/check-alignment': `error`,
    'jsdoc/check-examples': `error`,
    'jsdoc/check-param-names': `error`,
    'jsdoc/check-syntax': `error`,
    'jsdoc/check-tag-names': `error`,
    'jsdoc/check-types': `error`,
    'jsdoc/newline-after-description': `error`,
    'jsdoc/no-undefined-types': `error`,
    'jsdoc/require-hyphen-before-param-description': `error`,
    'jsdoc/require-param-description': `error`,
    'jsdoc/require-param-name': `error`,
    'jsdoc/require-param-type': `error`,
    'jsdoc/require-returns-check': `error`,
    'jsdoc/require-returns-description': `error`,
    'jsdoc/require-returns-type': `error`,
    'jsdoc/valid-types': `error`,

    // The NextJS pattern for creating links is as follows:
    //
    //    <Link href="/about">
    //      <a>About</a>
    //    </Link>
    //
    // The <a> tag will never have an href, so this rule will be unnecessarily
    // noisy.
    'jsx-a11y/anchor-is-valid': `off`,

    // This rule was deprecated:
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': `off`,

    // Many people say the value of 80 is just a holdover from the IBM 80 column
    // punch cards and isn't relevant in modern development environments.
    // However, displaying two files side-by-side with a reasonable font size on
    // Cedric's 13" laptop allows for 86 characters, so the 80 character limit
    // is still very much relevant when programming on smaller screens.
    'max-len': [
      `error`,
      {
        code: 80,
        // Prettier chooses not to wrap single-line default imports:
        // https://github.com/prettier/prettier/issues/576
        ignorePattern: `^import .*`,
        // Splitting up URLs makes them hard to copy/paste and breaks editors
        // allow you to click on URLs to open them in the browser
        ignoreUrls: true,
      },
    ],

    // Console statements should not accidentally find their way into prodution,
    // unless explicity acknowledged by putting an eslint-disable comment.
    'no-console': `error`,

    // The following code should not be on production:
    //
    //   if (false) {
    //     doSomethingUnfinished();
    //   }
    //
    'no-constant-condition': `off`,

    // It is considered good practice to only throw the Error object itself
    // or an object using the Error object as base objects for user-defined
    // exceptions. The fundamental benefit of Error objects is that they
    // automatically keep track of where they were built and originated.
    'no-throw-literal': `error`,

    // This is very much a personal preference. It's nice when code has room to
    // breath. Compact code can be sometimes be harder to read.
    'object-curly-spacing': [`error`, `always`],

    // This ensures that you can’t reassign your references, which can lead to
    // bugs and difficult to comprehend code.
    'prefer-const': `error`,

    // Forcing destructuring in simple cases can be an improvement, but when
    // you have multiple objects that share some keys and are deeply nested
    // with possible undefined values, destructuring starts to get pretty
    // awkward. In our system we encounter this a lot because of the structure
    // of Apollo queries and mutations.
    //
    // Since there is no resounding benefit to forcing destructuring, it is
    // proving to be more restrictive than it is worth.
    'prefer-destructuring': `off`,

    // These should match up with the equivalent ESLint rules. If there is no
    // way to make ESLint compatible, the ESLint rule should be disabled.
    // Automatic code formatting is extremely helpful in reducing the cognitive
    // load and time commitment involved with maintaining consistency on a team.
    'prettier/prettier': [
      `error`,
      {
        arrowParens: `always`,
        bracketSpacing: true,
        jsxBracketSameLine: true,
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: `es5`,
        useTabs: false,
      },
    ],

    // String interpolation is a very common thing. Instead of starting with a
    // single or double quote then having to change it when you want to inject
    // a variable, it's easier to get in the habit of always using backticks.
    quotes: [`error`, `backtick`],

    // Rules to help us write better React hooks
    'react-hooks/exhaustive-deps': `error`,
    'react-hooks/rules-of-hooks': `error`,

    // Material UI makes heavy use of Higher Order Components, which inject
    // props into the components they wrap. These props must be specified in
    // the PropTypes, but they are often objects of arbitrary shape, so there is
    // no easy way to provide a more specific rule than `PropTypes.object`.
    'react/forbid-prop-types': `off`,

    // This rule is intended to increase the scannability of the JSX markup.
    // It was chosen over the other options to avoid the floating ">" characters
    // that disrupt the visual nesting of the components. Aligning the closing
    // bracket after the props creates a very clear left edge to the markup,
    // making it easier to grok the nesting at a glance. The downside is that
    // the content of non-empty elements gets muddled with the opening tag.
    'react/jsx-closing-bracket-location': [
      'error',
      {
        selfClosing: 'tag-aligned',
        nonEmpty: 'after-props',
      },
    ],

    // There is no functional difference between using .js and .jsx, so instead
    // of having a mix of the two extensions it is easier to always use .js.
    'react/jsx-filename-extension': [
      `error`,
      {
        extensions: [`.js`],
      },
    ],

    // This was capturing the Material UI TextField, which has both `inputProps`
    // and `InputProps` in its available properties.
    'react/jsx-no-duplicate-props': [
      `error`,
      {
        ignoreCase: false,
      },
    ],

    // This conflicts with Prettier, which tries to cram as much as it can on
    // a single line as long as it's below the max line length.
    'react/jsx-one-expression-per-line': `off`,

    // This rule is configured to increase code readability.
    'react/jsx-wrap-multilines': [
      `error`,
      {
        declaration: `parens-new-line`,
        assignment: `parens-new-line`,
        return: `parens-new-line`,
        arrow: `parens-new-line`,
        condition: `parens-new-line`,
        // The "logical" and "ignore" syntax types are usually used inside a JSX
        // block, in which case the component is already visually distinguished
        // by the "{" and "}" characters
        logical: `ignore`,
        prop: `ignore`,
      },
    ],

    // This rule keeps misfiring and thinking class methods are stateless
    // functional components
    'react/no-this-in-sfc': `off`,

    // This treats any function that returns JSX as a Stateless Functional
    // Component. However, the render prop pattern triggers this warning a lot,
    // and in some cases it would be difficult or onerous to provide PropTypes
    // to the render function. A notable example is the prop called `render` in
    // the React Router `Route` component. It would be great to enfore PropTypes
    // on all components, but there are enough false positives that it is easier
    // to turn the rule off for now.
    'react/prop-types': `off`,

    // It can be helpful to enforce some basic ordering of methods and variables
    // in our React components so developers always know generally where to look
    // for certain things.
    'react/sort-comp': [
      `error`,
      {
        order: [
          `static-methods`,
          `instance-variables`,
          `lifecycle`,
          `everything-else`,
          `rendering`,
        ],
        groups: {
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],

    // When JavaScript encounters a line break without a semicolon, it uses a
    // set of rules called Automatic Semicolon Insertion to determine whether or
    // not it should regard that line break as the end of a statement, and (as
    // the name implies) place a semicolon into your code before the line break
    // if it thinks so. ASI contains a few eccentric behaviors, though, and your
    // code will break if JavaScript misinterprets your line break. These rules
    // will become more complicated as new features become a part of JavaScript.
    // Explicitly terminating your statements and configuring your linter to
    // catch missing semicolons will help prevent you from encountering issues.
    semi: `error`,
  },
};
