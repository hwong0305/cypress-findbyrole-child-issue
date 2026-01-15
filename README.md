# Cypress Testing Library findByRole Reproduction

## Running React app

Run the React app with `npm run dev`. It will launch the React on Port 5173

## Testing with React Testing Library

It uses vitest with `npm run test`

## Testing with Cypress Testing Library

It uses Cypress with cypress-testing-library with `npm run cy:open`. You will have to start the react server before runing Cypress test since it visits `https://localhost:5173`

### Information

This repo is used as reproduction of an issue found when trying to run Cypress test with IBM's Carbon React library. We realize that `findByRole` does not work Carbon React buttons. I have isolated the issue to how the `Popover` component is used for `aria-labelledby` and it contains something other then pure text such as another span element. In this case, this is picked up by the browser and `react-testing-library` but it does not work for `cypress-testing-library` except when `aria-hidden` is false.

This seems to be a very unique edge case that causes problems with using findByRoles using Cypress. This causes the accessibility name of the component to be only found if the tooltip is visible.
