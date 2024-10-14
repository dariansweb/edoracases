const Breadcrumbs = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);
  
    return (
      <nav>
        {pathSegments.map((segment, index) => (
          <span key={index}>
            {segment.replace('-', ' ')}
            {index < pathSegments.length - 1 && ' > '}
          </span>
        ))}
      </nav>
    );
  };
  