

const Menu = (items, opened = false)=>{
    if(items.opened){
        return (
        <div className="menu menu-open">
        <div className="menu-toggle"><span></span></div>
        <nav>
          <ul>
            <li><a href="#home">{items.items[0].title}</a></li>
            <li><a href="#about">{items.items[1].title}</a></li>
            <li><a href="#contact">{items.items[2].title}</a></li>
          </ul>
        </nav>
      </div> )
    }else{
        return (
        <div className="menu">
        <div className="menu-toggle"><span></span></div>
      </div>)
    }
  }  