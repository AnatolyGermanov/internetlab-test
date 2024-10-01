import { configureStore } from '@reduxjs/toolkit';

import ReviewsReducer from './slices/reviews.slice';
import FAQsReducer from './slices/FAQs.slice';
import PollFindingsReducer from './slices/pollFindings.slice';

export const store = configureStore({
    reducer: {
        reviews: ReviewsReducer,
        FAQs: FAQsReducer,
        pollFindings: PollFindingsReducer,
    },
});

export type IStoreState = ReturnType<typeof store.getState>;
