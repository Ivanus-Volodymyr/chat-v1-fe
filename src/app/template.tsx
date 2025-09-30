"use client"
import { Provider as ReduxProvider } from 'react-redux';
import {Props} from "next/script";

import store from "../store/store";


export default function RootTemplate({ children }: Props) {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    );
}
