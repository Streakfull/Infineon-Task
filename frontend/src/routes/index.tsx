import { Navigate, Route, Routes } from "react-router-dom";
import paths from "./paths";

const Router = () => {
  const renderRoutes = () => {
    return Object.values(paths).map(page => {
      const { Component } = page;
      const element = <Component />;
      return <Route key={page.path} path={page.path} element={element} />;
    });
  };

  return (
    <Routes>
      {renderRoutes()}
      <Route key='fallack' path='*' element={<Navigate to={paths.home.path} />} />
    </Routes>
  );
};

export default Router;
