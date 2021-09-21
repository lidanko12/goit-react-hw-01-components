
import style from '../Statistics/Statistics.module.css'
import PropTypes from 'prop-types'

const Statistics = ({ title, stats }) => {
    return (
        <section className={style.statistics}>
            {title && <h2 className={style.title}>{title}</h2>}

            <ul className={style['stat-list']}>
                {stats.map(({ id, label, percentage }) => (
    <li key ={id} 
    className={style.item}
      style ={{ backgroundColor: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(
                255,
              )})`,

      }}
      >          
    <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}%</span>
          </li>
                ))}
  </ul>
</section>
    
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.oneOf(['.docx', '.pdf', '.mp3', '.psd']).isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}



export default Statistics
