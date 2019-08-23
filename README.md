This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Future Additions

### AddLoan
* Eventually make this into a modal one question at a time.
* Add monthly payment slider
* TerminationDate should be calculated based on monthly payment and futureValue
* After submit alert with two buttons to stay and submit another loan or go back to dashboard

### ShowLoan
* Render payment history
* Render the loan clicked on from the dashboard already expanded and in a container
* Ability to delete a loan. No editing

### Dashboard
* D3 graph with all loans and transactions
* Bar graph multiple transactions
* Needs user defined time scaled x-axis
* Loans lent negative bar
* Payments received positive bar
* D3 line graph overlay with interest accrued

### API Async actions
* All actions
* Ability to send to 2 APIs, 1 Rails 1 Node -> Express

### MISC
* New favicon
* New title
* Reorganize file structure as if building models and individual actions
* Add OmniAuth facebook and or google to sign-up and login

### Header
* Account link needs to be a react router link
* Needs to include sign in, sign out, sign up, delete
* Email and notification history would be nice to have
