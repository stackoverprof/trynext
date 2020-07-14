import Layout from '../components/Layout'
import Prices from '../components/Prices'

import Fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to NetCoins</h1>
            <div className="row justify-content-center mt-4 mb-4">
                <h4 id="titled">Bitcoins currency checker</h4   >
                <button className="ml-3" onClick={() => movered()}>movered</button>
            </div>
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
