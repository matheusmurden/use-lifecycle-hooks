# @murden.dev/lifecycle-hooks

## React Class Components lifecycle methods written as React Hooks 

For those that are transitioning from React Class Components or maybe just want a little more legibility in their code.


### 1. Install package

```console
npm install @murden.dev/lifecycle-hooks
```

### 2. Import package and enjoy lifecycle-hooks :)

```js
import { useOnMount, useOnUnmount, useOnUpdate } from '@murden.dev/lifecycle-hooks'

const Component = () => {

    useOnMount(() => {
        // Function that runs only once, when Component is mounted
    })

    useOnUnmount(() => {
        // Function that runs only once, when Component is about to be unmounted
    })

    useOnUpdate(() => {
        // Function that runs on every Component re-render
    })

    // (...)
}
```