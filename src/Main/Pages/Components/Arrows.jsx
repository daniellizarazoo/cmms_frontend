import './Arrow.css';
import leftArrow from '../icons/arrowLeftIcon.png';
import rightArrow from '../icons/arrowRightIcon.png';

const Arrows = ({actualPage,numberOfPages,leftArrowClicked,rightArrowClicked}) => (
    <span className='spanUser'>
        <img src={leftArrow} onClick={leftArrowClicked}/>
        Pg {actualPage} de {numberOfPages}
        <img src={rightArrow} onClick={rightArrowClicked}/>
    </span>
);

export default Arrows;