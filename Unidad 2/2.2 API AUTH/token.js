
import axios from 'axios';

//Configuración básica
const GITHUB_TOKEN = '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'; 
const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Authorization': `Bearer ${GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json'
  }
});

//Función para obtener datos del usuario
async function getUserData() {
  const response = await githubApi.get('/user');
  return response.data;
}

//Función para obtener repositorios recientes
async function getRecentRepos() {
  const response = await githubApi.get('/user/repos', {
    params: {
      sort: 'updated',
      per_page: 3
    }
  });
  return response.data;
}


async function main() {
  try {
    // Obtener datos
    const user = await getUserData();
    const repos = await getRecentRepos();
    
    // Mostrar resultados
    console.log('✅ Datos del usuario:');
    console.log(`- Nombre: ${user.name}`);
    console.log(`- Usuario: ${user.login}`);
    console.log(`- Repositorios públicos: ${user.public_repos}`);
    
    console.log('\n📦 Repositorios recientes:');
    repos.forEach(repo => {
      console.log(`- ${repo.name} (${repo.stargazers_count} ⭐) - ${repo.html_url}`);
    });
    
  } catch (error) {
    console.error('❌ Error:', error.response?.data?.message || error.message);
  }
}


main();