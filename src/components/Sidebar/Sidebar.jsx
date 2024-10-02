import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }));
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    render() {
        const { isOpened } = this.state;
        const containerClassnames = classnames('sidebar', { opened: isOpened });
        const animationName = isOpened ?  'appearAnimation' : 'disappearAnimation';
        const animationSetyles = {animationName: animationName, animationDuration:'0.2s', animationTimingFunction: 'linear', animationFillMode: 'forwards'}
        const navWidth = isOpened ? {width: '12em'} : {with: '6em', padding: '15px'};
        return (
            <div className={containerClassnames}>
                <div className='sidebar-top-elem'>
                    <div className='sidebar-header'>
                        <img
                            src={logo}
                            alt="TensorFlow logo"
                            className='logo'
                        />
                        <span className='logo-text' style={animationSetyles}>TensorFlow</span>
                        <button className='open-btn' onClick={this.toggleSidebar}>
                            <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
                        </button>
                    </div>

                    <div>
                        {
                            routes.map((route) => (
                                <div className='nav-link' style={navWidth} key={route.title} onClick={() => this.goToRoute(route.path)}>
                                    <FontAwesomeIcon icon={route.icon} />
                                    <span style={animationSetyles}>{route.title}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div>
                    {
                        bottomRoutes.map((route) => (
                            <div className='nav-link' style={navWidth} key={route.title} onClick={() => this.goToRoute(route.path)}>
                                <FontAwesomeIcon icon={route.icon} />
                                <span style={animationSetyles}>{route.title}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
