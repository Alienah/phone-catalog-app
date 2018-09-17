import React from "react";
import { connect } from "react-redux";
import { getPhones } from "../store/clientFetchReducer";
import  PhoneDetailComponent  from "../components/PhoneDetailComponent";

class PhoneListContainer extends React.Component {
    
    componentDidMount() {
        this.props.getPhones()
    }

    renderPhones(phones) {
        return (
            <ul className="App-list">{
                phones.map(
                    (phone, i) => 
                        <li key={`${phone.name}${i}`}>
                            <PhoneDetailComponent
                                title={phone.title}
                                link={phone.image}
                                description={phone.description}
                                color={phone.color}
                                SO={phone.SO}
                            />
                        </li>)}
            </ul>);
    }


    render() {
        console.log(this.props.phones)
        return (
            <div>
            {this.renderPhones(this.props.phones)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isloading: state.clientFetch.loading,
        phones: state.clientFetch.phones
    }
}
const mapDispatchToProps = {
    getPhones
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer);