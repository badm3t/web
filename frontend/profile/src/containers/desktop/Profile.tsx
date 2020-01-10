import { connect } from 'react-redux'
import { change, save } from '../../actions'
import Profile from '../../components/desktop/Profile'

export default connect(
  state => ({
    firstName: state.profile.firstName,
    lastName: state.profile.lastName
  }),
  dispatch => ({
    onSave: () => dispatch(save()),
    onChangeFirstName: value => dispatch(change('firstName', value)),
    onChangeLastName: value => dispatch(change('lastName', value)),
  })
)(Profile)
