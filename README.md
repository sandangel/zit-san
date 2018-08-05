# Project overview

![Project Overview](images/overview.png 'Project Overview')

## Work Breakdown

- [x] Build a simple server for sending email.
- [x] Design a simple Payment page.
- [x] Build UI of Payment page.
- [x] Add Stripe integration on front-end.
- [x] Add Stripe integration on back-end.

Optional:

- [x] Extract reusable components.
- [ ] Add PWA

## Project structure

Client-side code is place in web-client folder.

- apps: contains applications for projects
- libs: contains reusable libraries that can be extracted from different apps.

Server-side code is place in server folder.

## Toolings

### Conventional Commit

We could automatically generate changelog by using standardized commit message.
For more information please read this [link](https://conventionalcommits.org/).

Quick start: instead of `git commit`, use `npm run cz` or `yarn cz`

There are 3 scopes in commit message:

- 'payment-page': Payment page user interface.
- 'zit-server': ZIT server side app.
- '' (blank): overall the project.

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

### Stripe

Used for payment methods.

#### Vue app:

Place a .env.local file in `web-client/apps/<app-name>/.env.local` which specifies the `VUE_APP_STRIPE_PUBLISHABLE_KEY` to add Stripe publishable key to your Vue app. This file won't be added to `git`.
For more information please read: [vue-cli-guide](https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code).

#### Server app:

Place a .env.local file in `server/zit` which specifies the `SERVER_APP_SECRET` for json web token secret and `STRIPE_SECRET_KEY` using Stripe secret key to create charge on the server.
This file won't be added to `git` too.
