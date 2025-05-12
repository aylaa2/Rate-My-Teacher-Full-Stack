import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Optionally pass search as a query param
    navigate(`/teachers?search=${encodeURIComponent(search)}`);
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1571260899304-425eee4c7efc")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
        Find and Rate Your Favorite Teachers
      </h1>

      <div style={{ marginTop: '1.5rem' }}>
        <input
          type="text"
          placeholder="Search by name or subject"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            borderRadius: '8px',
            border: 'none',
            width: '300px',
            marginRight: '1rem'
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '0.5rem 1.5rem',
            fontSize: '1rem',
            borderRadius: '8px',
            backgroundColor: '#61dafb',
            color: '#000',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={() => navigate('/teachers')}
          style={{
            margin: '0.5rem',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            borderRadius: '8px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          View Teachers
        </button>

        <button
          onClick={() => navigate('/rate')}
          style={{
            margin: '0.5rem',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            borderRadius: '8px',
            backgroundColor: '#2196f3',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Rate a Teacher
        </button>
      </div>
    </div>
  );
};

export default HomePage;
