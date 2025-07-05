const typedText = document.getElementById('typed-text');
const phrases = ['Front End Developer', 'Web Developer', 'Financial Analysis Expert'];
let phraseIndex = 0;
let charIndex = 0;
let typing = true;

function type() {
  const currentPhrase = phrases[phraseIndex];
  if (typing) {
    if (charIndex < currentPhrase.length) {
      typedText.textContent += currentPhrase.charAt(charIndex);
      charIndex++;
      setTimeout(type, 30); // سرعة الكتابة
    } else {
      typing = false;
      setTimeout(type, 700); // توقف قبل الحذف
    }
  } else {
    if (charIndex > 0) {
      typedText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, 15); // سرعة الحذف
    } else {
      typing = true;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 300); // توقف قبل بداية كتابة الجملة الجديدة
    }
  }
}

document.addEventListener('DOMContentLoaded', type);
