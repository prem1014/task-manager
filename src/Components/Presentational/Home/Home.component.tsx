import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const goToCreateTaskPage = (e: any) => {
        e.preventDefault();
        history.replace('/tasks')
    }

    return (
        <React.Fragment>
            <div className="row margin-top-20px">
                <div className="col-12">
                    <h4 className="text-center">Welcome To Task Management Web App</h4>
                    <h5 className="text-center">
                        <a href="#" onClick={(event) => goToCreateTaskPage(event)}>
                            Click Here To Go To Create Task Page
                        </a>
                    </h5>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;