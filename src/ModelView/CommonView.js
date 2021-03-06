import React from 'react';
import ForceDirect from "./ForceDirect";
import DataFormat from "./DataFormat";

const { config, forceFormat } = DataFormat;

class CommonView extends React.Component {

    createGraph = () => {
        let defaultConfig = {...config, ...this.props.config};
        let data = forceFormat(this.props.data, defaultConfig);

        console.log(data);
        return <ForceDirect data={data} config={defaultConfig} />;
    };
    
    render() {
        return this.createGraph();
    }
}


export default CommonView;
