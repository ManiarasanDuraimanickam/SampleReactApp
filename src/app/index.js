import React from "react";
import ReactDOM from "react-dom";
import RootApp from "./component/rootComponent";
import {store} from './action'
import {Provider}from 'react-redux'

ReactDOM.render(<Provider store={store}><RootApp headerName="AT&T AMT Board"/></Provider>
, document.getElementById('root-app'));