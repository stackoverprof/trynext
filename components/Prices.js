class Prices extends React.Component{
    state = {
        currency: 'USD'
    }
    render(){
        return(
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        Bitcoin rate for {this.props.currency.bpi.IDR.description}
                        :<span className="badge badge-primary ml-2 mr-2">{this.props.currency.bpi.IDR.code}</span>
                        <strong>{this.props.currency.bpi.IDR.rate}</strong>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Prices