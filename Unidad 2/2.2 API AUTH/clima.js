import axios from 'axios';

const api_key = '834d8e6f15c8e6093c61d95c4f40f5e8';
const ciudad = 'Cancun';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_key}&units=metric&lang=es`;

// Función principal con async/await
const obtenerClima = async () => {
  try {
    const { data } = await axios.get(url);
    
    console.log(`Clima en ${ciudad}:`);
    console.log(`   🌡️  Temperatura: ${data.main.temp}°C`);
    console.log(`   💨 Sensación térmica: ${data.main.feels_like}°C`);
    console.log(`   ☁️  Condición: ${data.weather[0].description}`);
    console.log(`   💧 Humedad: ${data.main.humidity}%`);
    
  } catch (error) {
    console.error('❌ Error:', error.response?.data?.message || error.message);
  }
};

// Ejecución
obtenerClima();