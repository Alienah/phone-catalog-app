import React from "react";
import { connect } from "react-redux";

class PhoneListContainer extends React.Component {
    render() {
        console.log(this)
        return (
            <div></div>
        )
    }
}

function mapStateToProps(state) {
    return {
        phones: state.clientFetch.phones
    }
}
// const mapDispatchToProps = {
//     getPhones
// }

export default connect(mapStateToProps)(PhoneListContainer);