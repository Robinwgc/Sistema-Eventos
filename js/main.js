document.addEventListener('DOMContentLoaded', () => {
    console.log('Página de Eventos Villa Prada cargada correctamente.');

    const btnWhatsapp = document.querySelector('.btn-whatsapp');
    btnWhatsapp.addEventListener('click', (e) => {
      console.log('El usuario quiere contactar por WhatsApp');
    });
});