const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="brand">Pizzería Mamma Mia!</span>

        <button>🍕 Home</button>

        {token ? (
          <>
            <button>🔓 Profile</button>
            <button>🔒 Logout</button>
          </>
        ) : (
          <>
            <button>🔐 Login</button>
            <button>🔐 Register</button>
          </>
        )}
      </div>

      <button>🛒 Total: ${total.toLocaleString("es-CL")}</button>
    </nav>
  );
};

export default Navbar;