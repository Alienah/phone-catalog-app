import React from "react";

class PhoneDetailComponent extends React.Component {
    render() {
        console.log(this.props.phone[0])
        return(
            <div>
                <p>{this.props.phone[0].title}</p>
            </div>
        )
    }
}

export default PhoneDetailComponent;