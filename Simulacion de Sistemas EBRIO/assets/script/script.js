//Esta función se ejecuta cuando el contenido de la página carga en su totalidad.
document.addEventListener('DOMContentLoaded', () => {
    const simulationsInput = document.getElementById('simulations');
    const simulationValue = document.getElementById('simulationValue');
    const calculateButton = document.getElementById('calculateButton');
    const resultDiv = document.getElementById('result');
    const probabilityResult = document.getElementById('probabilityResult');
  
  //Con esto estableci el valor inicial de la barra deslizadora en 0
    simulationsInput.value = 0;
    simulationValue.innerText = '0';
  
  //Con esto se actualiza el texto que muestra el valor de la barra cuando se cambia.
    simulationsInput.addEventListener('input', () => {
      simulationValue.innerText = simulationsInput.value;
    });
  //Con este eventListener se maneja el evento de clic en el botón de cálculo.
    calculateButton.addEventListener('click', () => {
      const numSimulations = simulationsInput.value;
      const probability = calculateProbability(numSimulations);
      resultDiv.style.display = 'block';
      probabilityResult.innerText = probability.toFixed(2) + '%';
    });
  });
  
  //Con esta funcion calculo la probabilidad de que el ebrio termine a dos calles de distancia.
  function calculateProbability(numSimulations) {
    let count = 0;
  
  //Con este "for" se realizan las simulaciones y se cuenta cuántas terminan a dos calles de distancia.
    for (let i = 0; i < numSimulations; i++) {
      const finalPosition = simulateWalk();
      if (Math.abs(finalPosition) === 2) {
        count++;
      }
    }
  
    return (count / numSimulations) * 100;
  }

  //con esta funcion pude simular la caminata del Ebrio por las calles
  function simulateWalk() {
    let position = 0;
  
  //Y por ultimo con esto el ebrio realiza 10 pasos aleatorios en direcciones Norte, Sur, Este u Oeste.
    for (let i = 0; i < 10; i++) {
      const direction = Math.floor(Math.random() * 4); // 0: Norte, 1: Sur, 2: Este, 3: Oeste
      if (direction === 0) {
        position++;
      } else if (direction === 1) {
        position--;
      } else if (direction === 2) {
        position += 2;
      } else {
        position -= 2;
      }
    }
  
    return position;
  }
  