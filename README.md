# Personalized Profile Page

A simple profile page created using React and the concept of props. 

## Features

- The profile component receives data such as `fullName`, `bio`, `profession` as props.
- The profile component also receives an image as children props.
- The `handleName` function as a prop sends an alert message with the name of the profile user.
- The default props for the Profile component are defined.
- The PropsType library is used to check the props passed to the component.
- Inline styles are used for styling.

## How to create the project

1. Create a project using `create-react-app`
2. Create a `profile` folder under `src`
3. Create a `Profile` component under `/profile`

## How to pass props to the component

1. In the `Profile` component, define the props as follows:
   - `fullName`: string
   - `bio`: string
   - `profession`: string
   - `handleName`: function
   - `children`: image
2. Pass the props to the `Profile` component when rendering it in the parent component.

## How to define the default props

1. In the `Profile` component, use the `defaultProps` property to set default values for the props if they are not passed.

## How to check the props with PropTypes

1. Install the `prop-types` library by running `npm install prop-types`
2. In the `Profile` component, import the `PropTypes` from the `prop-types` library.
3. Use `PropTypes` to specify the type of each prop and to add validation for the props.

## How to add inline styles

1. In the `Profile` component, add inline styles using the `style` property.

## Conclusion

In this project, I have learned how to create a personalized profile page using React and the concept of props. By using props, I am able to reuse the `Profile` component and pass data to it dynamically. Additionally, I have learned how to define default props, check props with PropTypes, and add inline styles to the component.
---
I would like to thank everyone who STARRED ⭐️ this REPOSITORY. Your help is greatly appreciated!
