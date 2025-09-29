import { useEffect, useState } from 'react';
import { fetchPosts, fetchUsers } from '../services/api';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';
import { useNavigate } from 'react-router-dom';

const POSTS_PER_PAGE = 6;

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const [postRes, userRes] = await Promise.all([fetchPosts(), fetchUsers()]);
      setAllPosts(postRes.data);
      setUsers(userRes.data);
    };
    loadData();
  }, []);

  const filtered = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.body.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUser = selectedUser ? post.userId === parseInt(selectedUser) : true;
    return matchesSearch && matchesUser;
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const currentPosts = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <div className='container'>
      <h2 className='text-center p-4'>Publicaciones</h2>

      {/* Aprovechando las utilidades de Bootstrap*/}
      <div className="container mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-md-6">
            <label htmlFor="searchInput" className="form-label">Buscar</label>
            <input
              type="text"
              id="searchInput"
              className="form-control"
              placeholder="Buscar por título o contenido"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="userSelect" className="form-label">Filtrar por usuario</label>
            <select
              id="userSelect"
              className="form-select"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              <option value="">Todos los usuarios</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>{user.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>


      <PostList posts={currentPosts} onSelectPost={(id) => navigate(`/post/${id}`)} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Home;
