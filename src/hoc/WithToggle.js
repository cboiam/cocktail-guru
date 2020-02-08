import React from "react";
import axios from "axios";

export const withToggle = (WrappedElement, ...features) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = { enabled: false }
        }

        getCookie = name => document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + name + "\\s*=\\s*([^;]*).*$)|^.*$"), "$1");

        componentDidMount() {
            const user = this.getCookie("user");

            const cachedFeatures = features.map(f => {
                const cookieValue = this.getCookie(f);

                return {
                    feature: f,
                    enabled: cookieValue === "true",
                    loaded: cookieValue !== ""
                };
            });

            if (!cachedFeatures.some(f => !f.loaded)) {
                this.setState({ enabled: !cachedFeatures.some(f => !f.enabled) });
                return;
            }

            const featurePromises = cachedFeatures.filter(f => !f.loaded)
                .map(f => axios.get(`https://localhost:5001/api/features/${f.feature}/environments/development/enabled`,
                    {
                        headers: { userName: user }
                    }));

            axios.all(featurePromises).then(response => {
                const expiration = new Date();
                expiration.setTime(expiration.getTime() + 1000 * 60 * 1);

                response.forEach(r => {
                    const feature = r.config.url.replace("https://localhost:5001/api/features/", "")
                        .replace("/environments/development/enabled", "");

                    document.cookie = `${feature}=${r.data.enabled}; expires=${expiration.toUTCString()}`;
                    cachedFeatures.find(f => f.feature === feature).enabled = r.data.enabled;
                });

                this.setState({ enabled: !cachedFeatures.some(f => !f.enabled) });
            });
        }

        render() {
            return this.state.enabled ? <WrappedElement {...this.props} /> : null;
        }
    }
}
