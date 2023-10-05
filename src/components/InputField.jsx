import styles from "../styles/InputField.module.css";
import PropTypes from 'prop-types';

function InputField({ label, type = "text", name, value, onChange }) {
    return <>
        <div className={styles["input-field"]}>
            <label>{label}</label>
            <input type={type} id={name} name={name} className={styles.input} value={value} onChange={onChange} />
        </div>
    </>
}

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
}

export default InputField;