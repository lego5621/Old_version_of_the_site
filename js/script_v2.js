window.onload = function(){ 

    // let arr = document.getElementsByClassName('anim');
    // for (let ani of arr) {
    //     ani.onclick = shov_menu;
    // }

    let home = document.getElementById('home');
    home.onclick = shov_image;

    let projects = document.getElementById('projects');
    projects.onclick = shov_projects;

    let skills = document.getElementById('skills');
    skills.onclick = shov_skills;

    let info = document.getElementById('info');
    info.onclick = shov_info;

    let mob_menu = document.getElementsByClassName('mob_menu');
    for (let menu of mob_menu) {
        menu.onclick = shov_image;
    }





    function hide_imege(){

        event.stopPropagation();
        let wrap1_svg = document.getElementById('wrap1_svg');
        let menu = document.getElementById('menu');
        
        wrap1_svg.classList.add("wrap1_svg_activ");
        menu.classList.add("menu_activ"); 

    }

    function shov_projects (){
        hide_imege();
        let wrap1_projects = document.getElementById('wrap1_projects');
        let wrap1_skills = document.getElementById('wrap1_skills');
        let wrap1_info = document.getElementById('wrap1_info');

        wrap1_projects.classList.add("activ");
        wrap1_skills.classList.remove("activ");
        wrap1_info.classList.remove("activ");
    }

    function shov_skills (){
        hide_imege();
        let wrap1_projects = document.getElementById('wrap1_projects');
        let wrap1_skills = document.getElementById('wrap1_skills');
        let wrap1_info = document.getElementById('wrap1_info');

        wrap1_projects.classList.remove("activ");
        wrap1_skills.classList.add("activ");
        wrap1_info.classList.remove("activ");
    }

    function shov_info (){
        hide_imege();
        let wrap1_projects = document.getElementById('wrap1_projects');
        let wrap1_skills = document.getElementById('wrap1_skills');
        let wrap1_info = document.getElementById('wrap1_info');

        wrap1_projects.classList.remove("activ");
        wrap1_skills.classList.remove("activ");
        wrap1_info.classList.add("activ");
    }

    function shov_image(){
        event.stopPropagation();
        let wrap1_projects = document.getElementById('wrap1_projects');
        let wrap1_skills = document.getElementById('wrap1_skills');
        let wrap1_info = document.getElementById('wrap1_info');

        wrap1_projects.classList.remove("activ");
        wrap1_skills.classList.remove("activ");
        wrap1_info.classList.remove("activ");

        let wrap1_svg = document.getElementById('wrap1_svg');
        let menu = document.getElementById('menu');
        
        wrap1_svg.classList.remove("wrap1_svg_activ");
        menu.classList.remove("menu_activ"); 

    }
    

}
