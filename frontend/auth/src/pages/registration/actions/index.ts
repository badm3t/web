import gql from 'graphql-tag'
import * as actions from '../constants'
import * as loginActions from '../../login/actions'
import * as loginConstants from '../../login/constants'

export const setError = (errors) => ({
  type: actions.setErrors,
  errors
})

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const register = () => async (dispatch, getState, client) => {
  try {
    const { email, password } = getState().auth.registration

    const { data } = await client.mutate({
      mutation: gql`
        mutation Register($input: RegisterUserInput!) {
          register(input: $input) {
            errors {
              email
              password
            }
          }
        }
      `,
      variables: {
        input: {
          email,
          password,
        },
      },
    })

    if (data.register.errors) {
      dispatch(setError(data.register.errors))
    } else {
      dispatch({
        type: loginConstants.change,
        field: 'email',
        email,
      })

      dispatch({
        type: loginConstants.change,
        field: 'password',
        email,
      })

      dispatch(loginActions.login())

      dispatch({
        type: actions.clear,
      })
    }
  } catch (error) {
    // console.log(Object.keys(error))
    const [email, password] = error.graphQLErrors[0].message.message
    const e = {
      email: email.constraints.isEmail,
      password: password.constraints.minLength
    }
    dispatch(setError(e))
  }

}

export const clear = () => ({
  type: actions.clear,
})
