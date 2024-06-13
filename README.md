# TUI React Component Library

[Install the package for npm here.](https://www.npmjs.com/package/@tryferos/tui)

[Source code on Github.](https://github.com/Tryferos/TUI)

This is a **react component library** delivering various **Editable Components** that you can use in your projects, which also adds **types** support using Typescript.

The project is build using **React, Typescript and Tailwindcss**. Tailwindcss is compiled into css, meaning you do not need it as a depedency.

All files are bundled into 3 seperate files for both cjs, esm and dts using the Rollup bundler. (commonjs, esmodules and declaration for ts types).

## :dart: Features

- :white_check_mark: Typescript support
- :white_check_mark: **FULLY** Customizable to your needs
- :white_check_mark: Light/dark mode toggle
- :white_check_mark: Animations option

## :electric_plug: Installation

##

Install @tryferos/dropdown using

```bash
  npm install @tryferos/tui@0.1.0
```

Remember that you need to have react and react-dom already installed

```bash
  npm install react@^18.2.0 react-dom@^18.2.0
```

This package is build using react 18, you can use with different versions of react at your own risk.

```bash
  npm install @tryferos/tui@0.1.0 --force
```

Import the components

```typescript
import { TUITooltip, TUIChip, TUIDropdown } from "@tryferos/tui";
import React from 'react'

export const MyAwesomeDropdown: React.FC = () => {
    return (
        <TUIDropdown
          hint: 'hint',
          items: ['leave','a','star', 'on','github'],
          rounded: 12,
          scrollable: true,
          sort: 'alphabetic',
          outline: 'full',
          order: 'asc',
          darkMode: false,
          animation: {
            enabled: true,
          },
          onItemSelect: (item: string | number) => window.location.href = `/${item}`,
        />
    )
}
```

## :information_source: Acknowledgements

- [Heroicons](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
