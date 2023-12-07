//Função para mudar nomes da div-desenvolvedores a partir de > 415px

window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);

function checkScreenWidth() {

    var emailJoao = document.getElementById('emailJoao');
    var linkedinJoao = document.getElementById('linkedinJoao');
    var gitJoao = document.getElementById('gitJoao');

    var emailLeonardo = document.getElementById('emailLeonardo');
    var linkedinLeonardo = document.getElementById('linkedinLeonardo');
    var gitLeonardo = document.getElementById('gitLeonardo');

    if (window.innerWidth < 415) {
        emailJoao.textContent = "E-mail";
        linkedinJoao.textContent = "LinkedIn";
        gitJoao.textContent = "GitHub";

        emailLeonardo.textContent = "E-mail";
        linkedinLeonardo.textContent = "LinkedIn";
        gitLeonardo.textContent = "GitHub";

    } else {
        emailJoao.textContent = "Joao.lc12@hotmail.com";
        linkedinJoao.textContent = "linkedin.com/in/JoaoLuisCardoso/";
        gitJoao.textContent = "github.com/joaoluisc";

        emailLeonardo.textContent = "paivaleo7@gmail.com";
        linkedinLeonardo.textContent = "linkedin.com/in/leonardopaiva12/";
        gitLeonardo.textContent = "github.com/leopaivap";
    }
}

