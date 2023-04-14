import PropTypes from "prop-types";
function Menu({ children }) {
  return <nav style={{ marginTop: 20 }}>{children}</nav>;
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Menu;
