import React from "react";
import "./PhoneListContainer.css";
import { connect } from "react-redux";
import { getPhones } from "../store/clientFetchReducer";
import { Link } from "react-router-dom";

class PhoneListContainer extends React.Component {

    componentDidMount() {
        this.props.getPhones()
    }

    renderPhones(phones) {
        return (
            <ul className="phone__list">{
                phones.map(
                    (phone, i) =>
                        this.renderPhoneItem(phone, i)
                )
            }
            </ul>);
    }

    renderPhoneItem(phone, i) {
        return (
            <li className="phone__item-list" key={`${phone.name}${i}`}>
                <div className="phone__container">
                    <div className="phone__image--container">
                        <Link className="item-link" to={`/details/${phone.id}`}>
                            <img className="phone__image" src={phone.urlImage} alt={phone.title} />
                        </Link>
                    </div>
                    <div className="phone__data">
                        <h2 className="phone__title-list">
                            <span className="phone__name">{phone.title}</span>
                        </h2>
                        <p className="phone__price">{phone.price} €</p>
                    </div>
                </div>
            </li>
        )
    }

    render() {
        console.log(this.props.phones)
        return (
            <div className="phone__list-container">
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