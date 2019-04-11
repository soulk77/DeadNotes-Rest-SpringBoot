const logo = document.querySelector('.logo');


logo.addEventListener('mouseover', (e)=>{
    setTimeout(()=>{
    document.location.href = "/login";
    },1000);
})