import { useEffect, useState } from 'react';
import { fetchPosts, fetchUsers } from '../services/api';   // Esto IMPORTA las funciones que estan en aí.js

import PostList from '../components/PostList';      // Esto importa la lista de publiciones
import Pagination from '../components/Pagination';  // Importa componente de paginacion

import { useNavigate } from 'react-router-dom';     // Esto es un hook para navegar entre rutas

const POSTS_PER_PAGE = 3;                            // Indica cuantos posts se mostraran por pagina

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);         // allPosts -> variable de estado (contiene los posts); setAllPosts -> Setter
  const [users, setUsers] = useState([]);               // users -> variable de estado (contiene los usuatios); setUsers -> Setter
  const [searchTerm, setSearchTerm] = useState('');     // searchTerm -> Estado para guardar lo que el usuario escribe en la búsqueda; serSearchTerm -> Setter
  const [selectedUser, setSelectedUser] = useState(''); // selectedUser -> Estado con el userId del filtro de usuario; SetSelectedUser -> Setter
  const [currentPage, setCurrentPage] = useState(1);    // currentPage -> Estado para saber en qué página de la paginación está el usuario; setCurrentPage -> Setter.

  const navigate = useNavigate();     // función para navegar a otra ruta del sitio.

  useEffect(() => {                   // Hook que se ejecuta una sola vez al montar el componente (porque el array [] está vacío).
    const loadData = async () => {    // Funcion interna asincrona -> Se encarga de obtener los datos de:
      const [postRes, userRes] = await Promise.all([fetchPosts(), fetchUsers()]); // Promise.all([...]) -> espera a que ambas funciones terminen.
      setAllPosts(postRes.data);      // Actualiza el estado allPosts con los datos obtenidos.
      setUsers(userRes.data);         // Actualiza el estado users con los datos obtenidos.
    };
    loadData();                       // Llama a la funcion loadData cuando se monta el componente
  }, []);                             // Fin del useEffect. Al ser un array vacío [], se ejecuta solo una vez

  const filtered = allPosts.filter(post => {    // Variable que guarda los posts filtrados.
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.body.toLowerCase().includes(searchTerm.toLowerCase());    // Texto buscado
    const matchesUser = selectedUser ? post.userId === parseInt(selectedUser) : true;   // Esto es un condicional si es falso devuelve el TRUE
    return matchesSearch && matchesUser;    // Devuelve solo los posts que cumplen ambas condiciones.
  });

  // Lógica de paginación
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);   // Variable que calcula el numero total de paginas
  const currentPosts = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);    // Corta de cierta cantidad filtered.slice(inicio, fin)

  return (
    <div className='container'>
      <h2 className='text-center p-4'>Publicaciones</h2>
      <div className="container mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-md-6">
            <label htmlFor="searchInput" className="form-label">Buscar</label>
            <input type="text" id="searchInput" className="form-control" placeholder="Por título o contenido" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
          </div>

          <div className="col-md-6">
            <label htmlFor="userSelect" className="form-label">Filtrar por usuario</label>
            <select id="userSelect" className="form-select" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
              <option value="">Todos los usuarios</option>
              {users.map(user => ( <option key={user.id} value={user.id}>{user.name}</option> ))}
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
