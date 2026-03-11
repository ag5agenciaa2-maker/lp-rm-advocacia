// ========================================
// MENU MOBILE
// ========================================
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
  body.classList.toggle('menu-open');
});

// Fechar ao clicar em link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    body.classList.remove('menu-open');
  });
});

// Fechar ao clicar fora
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    body.classList.remove('menu-open');
  }
});

// ========================================
// HEADER SCROLL EFFECT (SMART SCROLL)
// ========================================
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Adiciona fundo/sombra ao rolar
  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Lógica de Esconder/Mostrar baseada na direção
  // Só esconde se rolar para baixo E já tiver passado do topo (100px)
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add('header-hidden');
  } else {
    // Mostra se rolar para cima OU estiver no topo
    header.classList.remove('header-hidden');
  }

  // Esconder scroll indicator
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    if (currentScroll > 100) {
      scrollIndicator.style.opacity = '0';
    } else {
      scrollIndicator.style.opacity = '1';
    }
  }

  lastScroll = currentScroll;
});

// ========================================
// FAQ ACCORDION
// ========================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    // Fechar todos
    faqItems.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-answer').style.maxHeight = null;
    });

    // Abrir clicado (se estava fechado)
    if (!isOpen) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ========================================
// SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ========================================
// SCROLL REVEAL (Animação de Entrada)
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

// ========================================
// LAZY LOADING DE IMAGENS
// ========================================
const lazyImages = document.querySelectorAll('img.lazy');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => {
  imageObserver.observe(img);
});

// ========================================
// FORM VALIDATION E ENVIO
// ========================================
document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  // Validação básica
  if (!data.name || !data.email || !data.phone || !data.area) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  // Validação de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    alert('Por favor, insira um e-mail válido.');
    return;
  }

  // Feedback visual
  const submitBtn = this.querySelector('.btn-submit');
  const originalHTML = submitBtn.innerHTML;
  submitBtn.innerHTML = '<span>Enviando...</span>';
  submitBtn.disabled = true;

  try {
    // Integração com FormSubmit.co (gratuito)
    const response = await fetch('https://formsubmit.co/ajax/smadvocaciabr@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        area: data.area,
        message: data.message || 'Não informado',
        _subject: `Novo contato - ${data.area}`,
        _template: 'table'
      })
    });

    if (response.ok) {
      submitBtn.innerHTML = '<span>✓ Enviado com sucesso!</span>';
      submitBtn.style.background = '#10b981';

      // Reset após 2s e redirecionar para WhatsApp
      setTimeout(() => {
        this.reset();
        window.open(`https://wa.me/5521969747399?text=Olá! Acabei de enviar o formulário sobre ${data.area}. Aguardo retorno.`, '_blank');
        submitBtn.innerHTML = originalHTML;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 2000);

    } else {
      throw new Error('Erro no envio');
    }

  } catch (error) {
    alert('Ops! Algo deu errado. Por favor, entre em contato pelo WhatsApp.');
    submitBtn.innerHTML = originalHTML;
    submitBtn.disabled = false;
  }
});

// ========================================
// MÁSCARA DE TELEFONE
// ========================================
document.querySelector('input[name="phone"]').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length > 11) value = value.slice(0, 11);

  if (value.length > 10) {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (value.length > 6) {
    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  } else if (value.length > 2) {
    value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
  }

  e.target.value = value;
});

// ========================================
// ANIMAÇÃO ESCALONADA DOS BENEFITS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  const benefitItems = document.querySelectorAll('.benefit-item');

  benefitItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 200 * index);
  });
});

// ========================================
// PREVENÇÃO DE SPAM NO FORMULÁRIO
// ========================================
let formSubmitted = false;

document.getElementById('contactForm').addEventListener('submit', function (e) {
  if (formSubmitted) {
    e.preventDefault();
    alert('Aguarde um momento antes de enviar novamente.');
    return false;
  }
  formSubmitted = true;

  // Reset após 30 segundos
  setTimeout(() => {
    formSubmitted = false;
  }, 30000);
});
