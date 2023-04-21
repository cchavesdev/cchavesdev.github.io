import {Link} from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
  <Link to="/" className='navbar-brand nav-link'>Devspace</Link>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         {/*<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            React
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" onClick={()=> { navigate('/react/basics')}}>Basics</a></li>           
            <li><a class="dropdown-item" onClick={()=> { navigate('/react/typescript')}}>Typescript</a></li>
            <li><a class="dropdown-item" onClick={()=> { navigate('/react/secret-values')}}>Secret Keys</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Net 6
          </a>
          <ul class="dropdown-menu">
          <li><a class="dropdown-item" onClick={()=> { navigate('/dotnet/cors')}}>CORS</a></li>        
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
         <li class="nav-item">
          <Link to="/docs" className='nav-link'>Docs</Link>
        
        </li>
        <li class="nav-item">
        <Link to="/portfolio" className='nav-link'>Portfolio</Link>        
        </li>
       
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}
