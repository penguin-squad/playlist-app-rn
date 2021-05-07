import {connect} from "react-redux";
import {LoginUser} from '../store/User/UserActions'
import { LogInScreen } from "../views/index";

  const mapDispatchToProps = (dispatch: any) => ({ //TODO: ADD TO LISTS
    Login: (username: string, password: string) => dispatch(LoginUser(username,password))
});
  const connectComponent = connect(null,mapDispatchToProps);
  export default connectComponent(LogInScreen);
  
