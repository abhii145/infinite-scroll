import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="flex items-center text-gray-500 text-sm">
      <Link to="/" className="text-blue-500 hover:underline">
        Home
      </Link>
      {pathnames.map((name, index) => {
        const breadcrumbPath = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={breadcrumbPath} className="ml-1"> / {name}</span>
        ) : (
          <span key={breadcrumbPath} className="ml-1">
            {' '}
            / <Link to={breadcrumbPath} className="text-blue-500 hover:underline">{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
