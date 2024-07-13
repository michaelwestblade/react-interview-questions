import {Component} from "react";

interface withDataFetchingProps {
    dataSource: string;
}

const withDataFetching = (props: withDataFetchingProps) => (WrapperComponent: any) => {
    class WithDataFetching extends Component {
        state = {
            isLoading: true,
            error: null,
            data: []
        }

        componentDidMount() {
            this.fetchData();
        }

        render() {
            const {data, isLoading, error} = this.state;
            // @ts-ignore
            return <WrapperComponent data={data} isLoading={isLoading} error={error} {...props}></WrapperComponent>
        }

        async fetchData() {
            try {
                const data = await fetch(props.dataSource)
                const json = await data.json();

                this.setState({
                    isLoading: false,
                    data: json
                })
            } catch (error) {
                this.setState({
                    isLoading: false,
                    // @ts-ignore
                    error: error.message
                })
            }
        }
    }

    return WithDataFetching;
}

export default withDataFetching;