# Course Notes

* Component functions have to be fast & pure (e.g. App)
* The React paradigm seems to not allow children alter state within parent components (https://frontendmasters.com/courses/complete-react-v7/components/ 10:45)
    * Data flows one way down, from top to bottom (parent -> children -> grandchildren etc)
    * Redux, context, seems to alleviate this
* `useEffect()` is basically `ngOnInit()` when no dependencies are passed in (i.e. `[]`)
    * This applies to `componentDidMount()` for class-based components too.
    * But it also acts as `ngOnChanges` when a dependency is passed on, running the hook whenever its state changes (e.g. `[animal]`)
    * It also seems to be `ngOnDestroy()` as you can return a function that is ran when the component is destroyed
        * e.g. `return () => modalRoot.removeChild(elRef.current)`
* Custom hooks encapsulate state behaviour into its own function. See: `useBreedList.js`
    * All should start with 'useX'
* As a guideline, start looking to break down components when they approach the 100-200 LOC mark
* Code in braces can only be an *expression*. That is, *not* a statement/assignment.
* props.X vs { x, x, x } is a stylistic choice. The latter looks more elegant imo.
* "Don't solve problems before you have them" (on performance and a general rule of thumb)
* Ternarys are common in React code for rendering despite being ugly and difficult to read
* `<Link to='xxx' />` is the same as `[routerLink]`
* Use `+` beside a value to convert it to a number (works for all JS). 
    * e.g. `{ foo: +bar }`
* Error Boundaries must be class components.
* Context API is used to share data (two ways) between components without having to pass them as props. 
    * Important for some use-cases such as a dark/light theme, user permissions, user logged in status.
    * "99% of the reasons we used to use redux for; context is a better choice"
* Reading context for class components vs functional components is different (see docs)
* Balance number of contexts that you use (redux-like store vs many tiny context)
    * Maybe a context per use-case 
        * e.g. one for theming, one for user permissions.

### Portals/useRef
* useRef references an exact unqiue element reference
* Portal allow us to inject any element in a specific place in the dom (see index.html #modal in the course)
    * We place it above the Application itself so the root element is always there but contains nothing
* In a useEffect we get the element to be injected to by using `getElementById` which we grab the ID of the element to be injected into (in the course this is `#modal`)
* We add the 'ngOnDestroy' method which is a function that is returned at the end of the useEffect that is called when a component is removed from the DOM
    * In the course this is: `return () => modalRoot.removeChild(elRef.current);`
* In the component that is to be a portal (e.g. Modal) we inject it into the element
    * In the course this is: `return createPortal(<div>{children}</div>, elRef.current);`
* Now when this component is created it will be injected in the specified component (`#modal` in the course)
* We also give the component props.children (ngContent) so we can render anything within the portal component (See Details.js in the cousre)
* In the component where the portal is used, we now have access to all of the state of the component the portal is called in.
* This completely removes the necessity to message between component as it is all contained within the one component's state.

## Open Questions
1. How do services tie in? Custom Hooks?
2. How do we manage child/grandchild to parent communication/mutation?
    * Context seems to handle this well. I guess redux too..

## Misc
* I'm a little bit iffy with portals/elrefs

----

# Intermediate React
## Context
* Contexts should only be used for *application level state* (users, themes, etc.)
* Something that is used (or can be used) across all the application, like a Netflix user. (which has account management, lists, profiles etc)
* Contexts can be hard to debug

## Migration
* When migrating to TS (or any other language), start with the 'leaf nodes' where components are not dependent on other components (i.e., a parent of any child component).

## Misc
* I don't understand how SSR is being done on the tutorial 'Server Side Rendering'
    * The package.json entries, the ClientApp & `hydrate()`, the url '/frontend' pm the index.js
* TypeScript with React seems far more complicated.
    * I need to look into Generics especially
* Don't really understand how redux works in the redux section (`mapStateToProps`, `ReduxWrappedDetails`)


## Open Questions
1. 