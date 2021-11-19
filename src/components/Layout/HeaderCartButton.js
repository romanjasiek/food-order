import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const HeaderCartButton = (props) => {
    return <button className="button">
        <span><FontAwesomeIcon className="icon" icon={faUtensils} size="2x" /></span>
        <span>Deine Mahlzeit(en)</span>
        <span className="badge">3</span>
    </button>
};

export default HeaderCartButton;