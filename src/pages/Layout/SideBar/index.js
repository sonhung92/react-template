import React, { useState } from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import menu from 'menu';
import PropTypes from 'prop-types';

const SidebarPage = ({ visible, setVisible }) => {
  const { t } = useTranslation();

  const [currentMenu, setCurrentMenu] = useState('');

  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      onHide={() => setVisible(false)}
      visible={visible}
      width="thin"
    >
      {menu.map((item) => (
        <Menu.Item as="div" key={item.href} active={currentMenu === item.label}>
          {item.href === '/icons' ? (
            <span>{t(`sidebar.${item.label}`)}</span>
          ) : (
            <Link
              to={item.href}
              onClick={() => {
                setVisible(false);
                setCurrentMenu(item.label);
              }}
            >
              {t(`sidebar.${item.label}`)}
            </Link>
          )}

          {item.subMenus &&
            item.subMenus.map((sub) => (
              <Menu.Menu key={sub.value}>
                <Menu.Item>
                  <Link
                    to={{
                      pathname: item.href,
                      state: {
                        activeFont: sub.value,
                      },
                    }}
                    onClick={() => setVisible(false)}
                  >
                    {sub.label}
                  </Link>
                </Menu.Item>
              </Menu.Menu>
            ))}
        </Menu.Item>
      ))}
    </Sidebar>
  );
};

SidebarPage.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default SidebarPage;
