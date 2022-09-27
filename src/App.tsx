import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {compose} from "redux";
import DialogsComposeComponent from './components/Dialogs/DialogsContainer'
import UsersComposeComponent from './components/Users/UsersContainer'
import HeaderContainerApi from "./components/Header/HeaderContainerApi";
import Login from "./components/Login/Login";
import ProfileComposeComponent from './components/Profile/ProfileContainer'
import {connect} from "react-redux";
import {initializationMeThunkCreator} from "./redux/appReducer";
import {StateType} from "./redux/reduxStore";
import {Loading} from "./components/common/Loading";

type AppPropsType = mapDispatchToPropsType & mapStateToPropsType

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializationMeThunkCreator()
    }

    render() {
        return (
            !this.props.initialValue ?
                <Loading/>
                :
                <div className='app-wrapper'>
                    <HeaderContainerApi/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path={'/login'} render={() => <Login/>}/>
                        <Route path={'/profile/:userId?'} render={
                            () => <ProfileComposeComponent/>}/>
                        <Route path={'/dialogs/*'} render={
                            () => <DialogsComposeComponent/>}/>
                        <Route path={'/users/*'} render={
                            () => <UsersComposeComponent/>
                        }/>
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
