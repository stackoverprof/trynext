import Layout from '../components/Layout'
import Prices from '../components/Prices'

import Fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to BitzPrice</h1>
            <Prices currency={props.currency}/>
        </div>
    </Layout>
);

Index.getInitialProps = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice/IDR.json');
    const data = await res.json();

    return{
        currency: data
    };
}

export default Index
