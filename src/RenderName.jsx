import PropTypes from "prop-types";

const RenderName = (props) => {
    return <div>{props.name}</div>
};

RenderName.propTypes = {
    name: PropTypes.string.isRequired,
};

RenderName.defaultProps = {
    name: 'Brent',
}

export default RenderName;