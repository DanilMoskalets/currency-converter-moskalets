import {FC} from 'react';
import './App.css';
import TabBox from './TabBox/TabBox';

const App: FC = () => {

    return (
        <div className='App'>
            <div className='container'>
                <TabBox/>
            </div>
        </div>
    );
};

export default App;
