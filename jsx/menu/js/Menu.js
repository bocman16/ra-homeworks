const Menu = (props, opened = false) => {
  if (props.opened) {
    return (
      <div className="menu menu-open">
        <div className="menu-toggle">
          <span />
        </div>
        <nav>
          <ul>
            <li>
              {props.items.map(item => {
                return (
                  <li>
                    <a href={item.href}>{item.title}</a>
                  </li>
                );
              })}
            </li>
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="menu">
        <div className="menu-toggle">
          <span />
        </div>
      </div>
    );
  }
};
