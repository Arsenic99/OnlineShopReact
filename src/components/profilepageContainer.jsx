import { connect } from "react-redux"
import Profile from "./profile"

const mapStateToProps = (state) => {
    return {
        order: state.profile.order,
        isAuth: state.profile.isAuth
    }
}

export const ProfilePageContainer = connect(mapStateToProps)(Profile);