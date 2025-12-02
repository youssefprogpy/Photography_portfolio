window.addEventListener('scroll',() => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 40)
        navbar.classList.add('scrolled');
    else
        navbar.classList.remove('scrolled');
},{passive : true})

// Auto-highlight nav links based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY + 200; // +200 for early activation

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}, { passive: true });
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click',function(){
        if(this.classList.contains('zoomed')){
            this.classList.remove('zoomed');
            this.style.cssText = this.dataset.originalStyle || '';
            document.removeEventListener('keydown',handleEsc);
        }
        else{
            this.classList.add('zoomed');
            this.dataset.originalStyle = this.style.cssText;
            this.style.cssText = `
            position : fixed;
            top : 50%;
            left : 50%;
            width : 90vw;
            height: auto;
            max-height : 90vh;
            transform : translate(-50%,-50%) scale(1);
            z-index : 2000;
            box-shadow : 0px 10px 40px rgba(0,0,0,0.7);
            cursor : zoomed-out;
            transition : transform 0.3s ease;`;
            document.addEventListener('keydown',handleEsc);
        }
    })
});
function handleEsc(e){
    if(e.key === 'Escape')
    {
        const zoomed = document.querySelector('img.zoomed');
        if(zoomed)
            zoomed.click();
    }
}
// Select elements
const nameInput = document.querySelector('#name');
const nameError = document.querySelector('#name-error');

// Validation function
function validateName() {
  const nameValue = nameInput.value.trim();
  
  if (nameValue === '') {
    nameInput.classList.add('invalid');
    nameInput.classList.remove('valid');
    nameError.textContent = 'Name is required';
    nameError.classList.add('show');
  } 
  else if (nameValue.length < 2) {
    nameInput.classList.add('invalid');
    nameInput.classList.remove('valid');
    nameError.textContent = 'Name must be at least 2 characters';
    nameError.classList.add('show');
  } 
  else {
    nameInput.classList.remove('invalid');
    nameInput.classList.add('valid');
    nameError.classList.remove('show');
  }
  CheckAllFieldsValid();
}

// Clear error function
function clearNameError() {
  nameInput.classList.remove('invalid', 'valid');
  nameError.classList.remove('show');
  CheckAllFieldsValid();
}

// TWO event listeners on the same nameInput element
nameInput.addEventListener('blur', validateName);   // Validates when you leave the field
nameInput.addEventListener('focus', clearNameError); // Clears errors when you click in

const EmailInput = document.getElementById('email');
const EmailError = document.getElementById('email-error');
function ValidateEmail(){
  const EmailValue = EmailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(EmailValue === '' || !emailPattern.test(EmailValue)){
    EmailInput.classList.remove('valid');
    EmailInput.classList.add('invalid');
    EmailError.textContent = 'Invalid email format';
    EmailError.classList.add('show');
  }
  else{
    EmailInput.classList.remove('invalid');
    EmailInput.classList.add('valid');
    EmailError.classList.remove('show');
  }
  CheckAllFieldsValid();
}
function ClearEmailError(){
  EmailInput.classList.remove('invalid','valid');
  EmailError.classList.remove('show');
  CheckAllFieldsValid();
}
EmailInput.addEventListener('blur',ValidateEmail);
EmailInput.addEventListener('focus',ClearEmailError);

const messageInput = document.getElementById('message');
const messageError = document.getElementById('message-error');

function validateMessage() {
  const value = messageInput.value.trim();

  if (value === '') {
    messageInput.classList.add('invalid');
    messageInput.classList.remove('valid');

    messageError.textContent = 'empty message';
    messageError.classList.add('show');

    return false;
  }

  messageInput.classList.add('valid');
  messageInput.classList.remove('invalid');

  messageError.classList.remove('show');
  CheckAllFieldsValid();
  return true;
}

function clearMessageError() {
  messageInput.classList.remove('invalid', 'valid');
  messageError.classList.remove('show');
  CheckAllFieldsValid();
}

messageInput.addEventListener('blur', validateMessage);
messageInput.addEventListener('focus', clearMessageError);

const submitButton = document.getElementById('sub-btn'); // or whatever your button ID is

function CheckAllFieldsValid() {
  const nameInput = document.getElementById('name'); // adjust ID as needed
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  const allValid = 
    nameInput.classList.contains('valid') &&
    emailInput.classList.contains('valid') &&
    messageInput.classList.contains('valid');
  
  submitButton.disabled = !allValid;
}
