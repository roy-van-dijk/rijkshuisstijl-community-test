Wanneer je tests runt in deze configuratie krijg je de volgende error:
```typescript
  ● Test suite failed to run
                                                                                                                                                                                                                                                                                                           
    Cannot find module '@nl-design-system-candidate/link-react' from 'node_modules/@rijkshuisstijl-community/components-react/dist/index.cjs.js'

    Require stack:
      node_modules/@rijkshuisstijl-community/components-react/dist/index.cjs.js
      src/TestComponent.tsx
      src/TestComponent.test.tsx

    > 1 | import { Button } from '@rijkshuisstijl-community/components-react';
        | ^
      2 |
      3 | export function TestComponent() 
```

Dit komt door deze twee peer dependencies van rijkshuisstijl-community:
- @nl-design-system-candidate/link-react
- @nl-design-system-candidate/skip-link-react

Er gaat iets niet goed in de module resolution. In de ```fix``` branch van deze repo is dit opgelost (zie PR om gemakkelijk te vergelijken), maar het is wenselijk om dit in de library op te lossen.
