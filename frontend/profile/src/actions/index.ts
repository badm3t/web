import gql from 'graphql-tag'
import * as actions from '../constants'
import { init } from '@frontend/dashboard/src/actions/init'

export const setErrors = (errors) => ({
  type: actions.setErrors,
  errors,
})

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const save = () => async (dispatch, getState, client, history) => {
  try {
    const { firstName, lastName } = getState().profile
    const me = getState().me

    const { data } = await client.mutate({
      mutation: gql`
        mutation UpdateProfile($input: UpdateProfileInput!) {
          updateProfile(input: $input) {
            errors {
              firstName
              lastName
            }
          }
        }
      `,
      variables: {
        input: {
          firstName,
          lastName,
        },
      },
    })

    if (data.updateProfile.errors) {
      dispatch(setErrors(data.updateProfile.errors))
    } else {
      dispatch(init())
    }

  } catch (error) {
    // console.log(Object.keys(error))
    // const [firstName, lastName] = error.graphQLErrors[0].message.message
    // const e = {
    //   firstName: firstName.constraints.isEmail,
    //   lastName: lastName.constraints.minLength
    // }
    // dispatch(setError(e))
  }

}

export const clear = () => ({
  type: actions.clear,
})
