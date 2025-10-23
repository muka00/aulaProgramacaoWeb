/*mobile*/
function toggleMenu(){
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

/*scroll leve*/
function scrollactive(sectionid){
    const section =document.getElementById(sectionid);

    if(!section) return;

    const headerHeight = 70
    const sectionPosition = section.offsetTop - headerHeight;

    window.scrollTo({top = sectionPosition, beharvior: "smooth"});

    const menu = document.getElementById('navMenu');
    menu.classList.remove('active');
}

/*cadastro*/
function handleSubmit(event){
    event.preventDefault();

    const form = getElementById('volunteerForm');
    const formData ={
        
    nome:form.nome.value,
    email:form.email.value,
    telefone:form.telefone.value,
    idade:form.idade.value,
    disponbilidade:form.disponbilidade.value,
    areainteresse:form.areainteresse.value,
    experiencia:form.experiencia.value,
    motivacao:form.motivacao.value,
    dataCadastro: new Date().toLocaleDateString()
    }

    let voluntarios = JSON.parse(localStorange.getItem('voluntarios') || [])
    voluntarios.push(formData);
    localStorage.setItem('voluntarios', JSON.stringify('voluntarios'));

    const sucessMesage = document.getElementById('sucessMessage');
    sucessMesage.classList.add('show');
    sucessMesage.scrollIntoView({beharvior: 'smooth', block:'center'});

    setTimeout(()=> form.reset(),2000);
    setTimeout(()=> sucessMesage.classList.remove('show'),3000);

    exibirVoluntarios();
}

function exibirVoluntarios(){
    const voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
    const tableContainer = document.getElementById('tableVoluntarios');

    if(!tableContainer) return

    if(voluntarios.leght === 0){
        tableContainer.innerHTML = '<p> Nenhum voluntario cadastro</p>'
    }
}