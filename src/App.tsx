import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {compose} from "redux";
import DialogsComposeComponent from './components/Dialogs/DialogsContainer'
import UsersComposeComponent from './components/Users/UsersContainer'
import HeaderContainerApi from "./components/Header/HeaderContainerApi";
import ProfileComposeComponent from './components/Profile/ProfileContainer'
import {connect} from "react-redux";
import {initializationMeThunkCreator} from "./redux/appReducer";
import {StateType} from "./redux/reduxStore";
import Login2 from "./components/Login/Login2";
import {Spin} from "antd";

type AppPropsType = mapDispatchToPropsType & mapStateToPropsType

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializationMeThunkCreator()
    }

    render() {
        return (
            !this.props.initialValue ?
                <Spin style={{display:'flex',justifyContent:'center',marginTop:'50px'}} size={"large"}/>
                :
                <div className='container'>
                <div className='app-wrapper'>
                    <HeaderContainerApi/>
                    <div className="app-wrapper-content">
                    <Navbar/>
                        <div className="app-main-content">
                        <Route path={'/login'} render={() => <Login2/>}/>
                        <Route path={'/profile/:userId?'} render={
                            () => <ProfileComposeComponent/>}/>
                        <Route path={'/dialogs/*'} render={
                            () => <DialogsComposeComponent/>}/>
                        <Route path={'/users/*'} render={
                            () => <UsersComposeComponent/>
                        }/>
                        </div>
                    </div>
                </div>
    </div>
        );
    }
}

type mapStateToPropsType = {
    initialValue:boolean
}
type mapDispatchToPropsType = {
    initializationMeThunkCreator:()=>void
}


const mapStateToProps = (state: StateType):mapStateToPropsType => {
    return {
        initialValue: state.app.initializationValue
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializationMeThunkCreator}))
(App);
