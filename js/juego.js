document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe por defecto
  
  const answers = [
      document.querySelector('input[name=q1]:checked').value,
      document.querySelector('input[name=q2]:checked').value
      // Puedes agregar más respuestas aquí
  ];

  const correctAnswers = ['Paris', 'Amazonas']; // Aquí deberías poner las respuestas correctas

  let score = 0;
  for (let i = 0; i < answers.length; i++) {
      if (answers[i] === correctAnswers[i]) {
          score++;
      }
  }

  const resultElement = document.getElementById('result');
  resultElement.innerText = `Tu puntuación es: ${score}/${correctAnswers.length}`;
});
