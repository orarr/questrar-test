// @flow
import React, { Component } from 'react';
import  Request  from "components/Request";
import DeleteButton from './DeleteButton';

type Props = {

}

type State = {
  loading: boolean
}

/**
*
* @author Orar
* @date   9/29/18, 9:36 AM
*/
class ProfilePage extends Component<Props, State> {
    props: Props;
    state: State = { loading: true };

    id = 'user02932';
    subId = 'del_45332';

    _timeout = setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);

    render() {
      return (
        <div>
          <Request id='user02932' initialLoading={this.state.loading} >
            <div>
              <div>Profile</div>
              <div>
                <DeleteButton id={this.subId}/>
              </div>
            </div>
          </Request>
        </div>
        );
    }
}


export default ProfilePage;