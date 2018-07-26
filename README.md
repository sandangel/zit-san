# Project overview

![Project Overview](images/overview.png 'Project Overview')

You can edit the image by opening ProjectOverview.xml in draw.io.

## Work Breakdown

- [ ] Build a simple server for sending email.
- [ ] Design a simple Payment page.
- [ ] Build UI of Payment page.
- [ ] Add Stripe integration on front-end.
- [ ] Add Stripe integration on back-end.

Optional:

- [ ] Extract reusable components.
- [ ] Add PWA

## Project structure

Leverage Monorepo [WIP] to maximize code reusability and unify CI/CD setup.

## Toolings

### Conventional Commit

We could automatically generate changelog by using standardized commit message.
For more information please read this [link](https://conventionalcommits.org/).

Quick start: instead of `git commit`, use `npm run cz` or `yarn cz`

### Typescript:

We should use interface of TS to ensure the type safety for JSON data.

Example:

```ts
interface ProUser {
  id: string;
}
```

Shorten import path in project using tsconfig 'paths' feature.

Example:

```ts
// client/apps/zit/Payment.tsx
import PayButton from '../../libs/z-comp/PayButton';
```

will become

```ts
// client/apps/zit/Payment.tsx
import PayButton from '@zehitomo/ui/PayButton';
```
