import {configureStore} from '@reduxjs/toolkit';
import application from './reducers';

export default configureStore({

    reducer: {
        application,
    }
})