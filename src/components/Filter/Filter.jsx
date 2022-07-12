
import PropTypes from 'prop-types';

const Filter = ({ filterValue, onChangeFilter }) => (

    <label  > Find Contact by name
        <input
            type="text"
            value={filterValue}
            onChange={onChangeFilter}
        />
    </label >

);

Filter.prototype = {
    filterValue: PropTypes.string.isRequired,
};

export default Filter;