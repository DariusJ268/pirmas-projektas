import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ({ className, rounded, ...props }) => {
    return (
        <button onClick={() => alert("Wait a bit")}
            className={classNames(
                styles.button,
                rounded && styles.rounded,
                className
            )}
            {...props}
        />
    );
};

Button.PropTypes = {
    className: PropTypes.string,
    rounded: PropTypes.bool
}

export default Button;