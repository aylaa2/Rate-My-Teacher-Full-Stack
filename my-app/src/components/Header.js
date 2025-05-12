import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      padding: '1rem',
      backgroundColor: '#282c34',
      color: 'white',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
          📚 Rate My Teacher
        </h1>
        <nav>
          <Link to="/" style={{ margin: '0 1rem', color: 'white' }}>Home</Link>
          <Link to="/teachers" style={{ margin: '0 1rem', color: 'white' }}>View Teachers</Link>
          <Link to="/rate" style={{ margin: '0 1rem', color: 'white' }}>Rate</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
