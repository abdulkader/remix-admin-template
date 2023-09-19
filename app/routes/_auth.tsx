import { Outlet } from "@remix-run/react";

const AuthLayout = () => {
  return (
    <div>
      <h1>AuthLayout</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
