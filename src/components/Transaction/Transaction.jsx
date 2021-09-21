import PropTypes from 'prop-types'
import style from '../Transaction/Transaction.module.css'



const TransactionHistory = ({ items }) => {
    return (
        <table className={style['transaction-history']}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type = '-----', amount = '0', currency = '-----' }) =>
     (        
    <tr key = {id}>
      <td>{type.slice(0,1).toUpperCase()+type.slice(1)}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
          ))}
            </tbody>
        </table>
    )
    
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};


export default TransactionHistory;