import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HydraAdmin from 'api-platform-admin/lib/hydra/HydraAdmin';

class App extends Component {
  render() {
    return <HydraAdmin entrypoint="https://api---master-7rqtwti-kpfnplkpyfk2k.eu.platform.sh"/> // Replace with your own API entrypoint
  }
}

export default App;