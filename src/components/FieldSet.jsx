import styles from "../styles/FieldSet.module.css";
import PropTypes from 'prop-types';

function FieldSet({ title, children }) {
    return <fieldset className={styles.fieldset}>
        <legend>{title}</legend>
        {children}
    </fieldset>
}

FieldSet.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default FieldSet;