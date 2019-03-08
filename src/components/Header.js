import React from 'react';

/* If the class is supposed to have only render() method then go for 
    stateless functional components, it will be faster than class based components
*/
// Stateless functional components
const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            <h2 className="header__subtitle">{props.subtitle}</h2>
        </div>
    </div>
);


// Class based component
/*class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}*/

export default Header;