import React from "react";
import axios from "axios";

export const withToggle = (WrappedElement, feature) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = { enabled: false }
        }

        componentDidMount() {
            axios.get(`https://localhost:5001/api/features/${feature}/environments/development/enabled`).then(response => {
                this.setState({ enabled: response.data.enabled });
            });
        }

        render() {
            return this.state.enabled ? <WrappedElement {...this.props} /> : null;
        }
    }
}
