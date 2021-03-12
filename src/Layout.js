import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Header, Sider } = Layout;

export const MyLayout = ({ children }) => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <img src="./logo.svg" height="25px" alt="logo" />
        </div>
      </Header>
      <Layout>
        <Sider width={175} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["post"]}
            defaultOpenKeys={["post"]}
            theme="dark"
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="post">
              <NavLink to="/post">Post</NavLink>
            </Menu.Item>
            <Menu.Item key="todo">
              <NavLink to="/todo">Todo</NavLink>
            </Menu.Item>
            <Menu.Item key="user">
              <NavLink to="/user">User</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <div style={{ width: "100%" }}>{children}</div>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
