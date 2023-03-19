# Getting Started

The Phoenix Component Library is a shared library of React components using `MUI` and `tss-react` for out-of-the-box advanced component features and theming/styling capabilities.

## Available Shortcut Scripts

To quickly view the existing components (by default on localhost port 6006), use `Storybook`:

### `yarn storybook`

The project uses `rollup` for managing the library output. To build using `rollup`:

### `yarn build`

To enable easy development and testing across repos, the project uses `yalc`.

### Steps to set up `yalc` for testing with a separate project:

1. From the root directory, publish to `yalc`:
#### `yalc publish --private`

2. From the root directory of the project you want to test the component library with:

#### `yalc add @crittelmeyer/components --link`

3. After this, you are linked and should be able to import from @crittelmeyer/components in your test project. To build and push new updates to all linked remote directories:

#### `yarn build`
#### `yalc push --private`


To watch for any changes to source code and automatically run `yarn build`, then run `yalc push --private` once a new build is detected:

### `yarn dev`

## Publishing

Publishing and version bumping occurs automatically upon merging a feature branch into main. Version bumping relies on the [`standard-version`](https://github.com/conventional-changelog/standard-version) lib and thus relies on proper [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) formatting to drive proper versioning.

If a manual publish/version bump is required for some reason, follow these steps:

1. Make changes and commit to feature branch
2. Push changes and create PR
3. After PR approval, merge branch into main
4. Pull down latest main locally (now with your changes)
5. Build the main branch content, yarn build
6. Run yarn release or yarn release:[major|minor|patch] to automatically update the CHANGELOG, bump the version, and create the proper git tag
7. Run git push --follow-tags origin main && yarn publish --no-git-tag-version
8. When asked for a “New version”, enter the same version listed as the “Current version”. This is because of how yarn publish works and the fact that we are using the standard-version lib for our version tagging (rather than yarn publish's built-in version tagging - hence the --no-git-tag-version flag).

Note: Running yarn publish without --no-git-tag-version will automatically tack on an extra git tag, which is not ideal.

## Other Available Tools & Scripts

### hygen
We use `hygen` to generate code scaffolding for common boilerplate code:
#### `yarn component`

Prompts the developer to select component's category and a name. When confirmed, creates the component folder accordingly with selected component category. It will contain a component template file and component story file for documentation (verificable running `yarn storybook`).

This command uses [`Hygen`](https://www.hygen.io/docs/quick-start/) templates and generators. We should create new templates under `/.hygen` folder, following the linked documentation.

### eslint/prettier
We use eslint with prettier to manage code style and to avoid common mistakes/bugs
#### `yarn lint`

Runs our configured lint rules against the codebase and logs out and warnings and errors.

#### `yarn lint:fix`

Runs our configured lint rules against the codebase and attempts to fix all warnings and errors.

### husky
We use husky to aid in adding/managing git hooks
#### `yarn prepare`

Will install husky. This only needs to be done once when a new project is created. We have included it here for posterity.

When committing new code, Husky will run pre-commit hooks and will fail to commit if any of the hooks fail. Sometimes, bypassing pre-commit hooks to save time is ideal. To bypass the hooks, you can add the `--no-verify` flag to the commit command. To simplify this command, it is common to create aliases:

`alias gcmsg=git commit -m`

`alias _gcmsg=git commit --no-verify -m`

#### `yarn storybook:build`

Creates a production build of storybook for publication.

## Extended Types
The component library expands on various default MUI types including Typography variants, Button variants, Button colors, and the standard Palette. To use the expanded MUI theme values in your consuming project and avoid Typescript errors, we need to reference the exported ambient modules from the component library by doing the following:
1. Create a file called `phoenix-env.d.ts` in the root of your project directory.
2. Populate it with this line of code: `/// <reference types="@crittelmeyer/components/dist/styles/theme/expanded" />`
3. Update the "include" array of `tsconfig.json` with `"phoenix-env.d.ts"`


## Event Tracking

Besides providing Phoenix-themed display components, this project also provides tools for making event tracking easier. Using these tools requires some setup in the consuming project.
### Setup Providers

To enable event tracking in a project, you must wrap any components that intend to use the provided functions with two components - one for Google Analytics tracking and one for custom Phoenix tracking. Typically, these wrappers are initiated in the root React component (i.e. App.tsx).
1. The `AnalyticsProvider` component is needed for Google Analytics, and requires a single prop `analyticsId` which represents the Google Analytics ID.
2. The `EventTrackingProvider` component accepts 4 props:
  - `trackingServiceUrl` - Required, the URL for the tracking service endpoint.
  - `initialCategory` - Optional, the default tracking "category" (which can be overridden downstream before making tracking calls).
  - `initialAction` - Optional, the default tracking "action" (which can be overridden downstream before making tracking calls).
  - `initialLabel` - Optional, the default tracking "label" (which can be overridden downstream before making tracking calls).

_Note_: Although at least one instance of these wrapper components are required before making any tracking calls, you are able to nest multiple instances of these components, useful for overriding parent prop values.

```jsx
import { AnalyticsProvider, EventTrackingProvider } from '@crittelmeyer/components'

// ...

<AnalyticsProvider analyticsId="UA-XXXXX-X">
  <EventTrackingProvider initialCategory="Initial category" trackingServiceUrl="https://myservice.com/track">
    {/* ... */}
  </EventTrackingProvider>
</AnalyticsProvider>
```

### Hook Usage

The `EventTrackingProvider` exposes a hook `useEventTracking` that contains a method `track` with which an event may be tracked.

```js
const { track } = useEventTracking({
  category: 'my category', // optional, overrides `initialCategory` prop specified in EventTrackingProvider
  action: 'my action', // optional, overrides `initialAction` prop specified in EventTrackingProvider
  label: 'my label' // optional, overrides `initialLabel` prop specified in EventTrackingProvider
})

// ...
track({
  category: 'my other category', // optional, overrides `category` field supplied in `useEventTracking` call and/or overrides `initialCategory` prop
  action: 'my other action', // optional, overrides `action` field supplied in `useEventTracking` call and/or overrides `initialAction` prop
  label: 'my other label' // optional, overrides `label` field supplied in `useEventTracking` call and/or overrides `initialLabel` prop
})
// ...
```

_Note_: Though `category`, `action`, and `label` are all marked "optional" in the examples above, each of these values MUST be specified at some level - either via the `initialCategory` prop (in the case of the `category` value), or at the `useEventTracking` level or the `track` level. If any of these three values are missing by the time the `track` function is called, an error is thrown.

This cascading series of overrides allows for flexible tracking designs.

For example, you may have a root `App` component with a default category specified:
```jsx
import { AnalyticsProvider, EventTrackingProvider } from '@crittelmeyer/components'

const App = () => (
  <AnalyticsProvider analyticsId="UA-XXXXX-X">
    <EventTrackingProvider initialCategory="My App" trackingServiceUrl="https://myservice.com/track">
      {/* ... */}
    </EventTrackingProvider>
  </AnalyticsProvider>
)
```

And for many pages, the "My App" category might suffice.
```jsx
const Page1 = () => {
  const { track } = useTracking()

  // No need to specify category here, will use "My App"
  track({
    action: 'visit',
    label: 'Page 1'
  })
  
  return (
    {/* ... */}
  )
}
```



But suppose you want all the tracking calls for a collection of pages to share a category that's different from "My App". Rather than specifying the same category value over and over in each of those files, you could create a layout component and wrap it with a `EventTrackingProvider`, overriding the values of the root-level `EventTrackingProvider`:
```jsx
import { EventTrackingProvider } from '@crittelmeyer/components'

const Section = ({ children }) => (
  <EventTrackingProvider initialCategory="My Section" trackingServiceUrl="https://myservice.com/track">
    {children}
  </EventTrackingProvider>
)

```

```jsx
import { Section } from 'components/layout'

const Page2 = () => {
  const { track } = useTracking()

  // No need to specify category here, will use "My Section" (and not "My App"!)
  track({
    action: 'visit',
    label: 'Page 2'
  })
  
  return (
    <Section>
      {/* ... */}
    </Section>
  )
}
```

```jsx
import { useEffect } from 'react'
import { Section } from 'components/layout'

const Page3 = () => {
  const { track } = useTracking()

  // This one also uses "My Section" and not "My App"
  useEffect(() => {
    track({
      action: 'visit',
      label: 'page 3'
    })
  })
  
  return (
    <Section>
      {/* ... */}
    </Section>
  )
}
```

Now, suppose you have multiple `track` calls in a file that all share the same `action`. Rather than calling `track` and specifying the same action over and over, you can set the action when you initialize `track` by calling `useTracking`:
```jsx
import { useEffect } from 'react'
import { Section } from 'components/layout'

const Page4 = () => {
  const { track } = useTracking({ action: 'click' })

  const handleButton1Click = () => {
    track({ label: 'page 4 button 1' }) // Uses category "My Section" and action "click"
  }
  const handleButton2Click = () => {
    track({ label: 'page 4 button 2' }) // Uses category "My Section" and action "click"
  }

  useEffect(() => {
    track({ action: 'visit', label: 'page 4' }) // Uses category "My Section" and overrides "click" action to use "visit" instead
  })

  const handleButton3Hover = () => {
    track({ action: 'hover', label: 'page 4 button 3', category: 'Something random' }) // Overrides category AND action for some reason... just showing off!
  }
  
  return (
    <Section>
      <button onClick={handleButton1Click}>{'Button 1'}</button>
      <button onClick={handleButton2Click}>{'Button 2'}</button>
      <button onMouseEnter={handleButton3Hover}>{'Button 3'}</button>
    </Section>
  )
}
```

So as you can see, this level of flexibility allows for many different permutations, all with the goal of helping your event tracking code remain DRY.

### Component Integrations
We have integrated the event tracking functions with some components from our library, making common tracking behaviors even easier to implement with less code.

The `Button`, `LoadingButton`, and `Link` components all support a `tracking` prop which expects an object specifying an optional `category` field and a required `label` field. For example:
```jsx
import { Button, Link } from '@crittelmeyer/components'

const MyComponent = () => (
  <Button tracking={{ label: 'my button' }} /* ... */>{'My Button'}</Button>
  <Link tracking={{ label: 'my link', category: 'diff category' }} /* ... */>{'My Link'}</Link>
)
```


### Tracking Metrics

To capture web vitals in a NEXT.js app there is also an exported method `postMetrics` that can be imported outside of the `useEventTracking` hook to be used in the `export function reportWebVitals(metric)` method in `_app.jsx` file.

Call this method like so:

```js
import { postMetrics } from '@crittelmeyer/components'

// ...
postMetrics(
  metric, // object parameter passed to reportWebVitals
  'override label value here',
  'override action value here',
  'override category value here'
)
// ...
```