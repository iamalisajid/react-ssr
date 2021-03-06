import React from 'react';
import { object, func, bool } from 'prop-types';
import { HEADER_TITILE } from '../../../utils/copies';
import { APP_ROUTES, BTN_ACTIONS } from '../../../utils/constants';
import { LightBulb, Hidden } from '../../../globalStyles';
import { AppHeader, AppTitle, LogoutButton } from './styles';

const Header = ({ location, themeValue, toggleTheme, handleDelete }) => (
  <AppHeader>
    <AppTitle>{HEADER_TITILE}</AppTitle>
    <LightBulb lightOn={themeValue}>
      <Hidden type="checkbox" onChange={toggleTheme} value={themeValue} checked={themeValue} />
    </LightBulb>
    {location.pathname !== APP_ROUTES.BASE && location.pathname !== APP_ROUTES.LOGIN && (
      <div>
        <LogoutButton variant="danger" onClick={handleDelete}>
          <span className="fa fa-sign-out" />
          {BTN_ACTIONS.LOGOUT}
        </LogoutButton>
      </div>
    )}
  </AppHeader>
);

Header.propTypes = {
  location: object.isRequired,
  toggleTheme: func.isRequired,
  themeValue: bool.isRequired,
  handleDelete: func.isRequired,
};

export default Header;
