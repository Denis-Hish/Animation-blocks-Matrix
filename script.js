const lessonBox = document.querySelector('.lesson-box');
const button = document.querySelector('.toggle-class');

button.addEventListener('click', () => {
   lessonBox.classList.toggle('hide');

   setTimeout(() => {
      const buttonText = lessonBox.classList.contains('hide') ? 'Show' : 'Hide';
      button.textContent = buttonText;
   }, 2000);
});
