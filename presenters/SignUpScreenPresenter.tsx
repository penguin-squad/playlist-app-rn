import {connect} from "react-redux";
import {SignUpUser} from '../store/User/UserActions'
import { SignupView } from "../views/index";

  const mapDispatchToProps = (dispatch: any) => ({ //TODO: ADD TO LISTS
    SignUpUser: (username: string, password: string) => dispatch(SignUpUser(username,password))
});
  const connectComponent = connect(null,mapDispatchToProps);
  export default connectComponent(SignupView);
  
