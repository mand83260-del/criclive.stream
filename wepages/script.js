document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('open');
            hamburger.textContent = nav.classList.contains('open') ? '✕' : '☰';
        });
    }

    const wthBtn = document.getElementById('watch_ipl');
    if (wthBtn) wthBtn.addEventListener('click', () => { window.location.href = 'ipl_channels.html'; });

    const skyBtn = document.getElementById('sky');
    if(skyBtn){
        skyBtn.addEventListener('click',() => {
            window.location.href = 'iframe_skysports.html';
        });
    }

    const willowBtn = document.getElementById('willow');
    if(willowBtn){
        willowBtn.addEventListener('click',() => {
            window.location.href = 'iframe_willow.html';
        });
    }

    const starSportBtn = document.getElementById('star_sports');
    if(starSportBtn){
        starSportBtn.addEventListener('click',() => {
            window.location.href = 'iframe_starsports.html';
        });
    }

    const superSportsBtn = document.getElementById('supersports');
    if(superSportsBtn){
        superSportsBtn.addEventListener('click',() => {
            window.location.href = 'iframe_supersports.html';
        });
    }

// psl js code
     const watchPslBtn = document.getElementById('watch_psl');
     if(watchPslBtn){
        watchPslBtn.addEventListener('click' ,() =>{
            window.location.href ='psl_channel.html';
        })
     }


     const tenSportsBtn = document.getElementById('ten_sports');
     if(tenSportsBtn){
        tenSportsBtn.addEventListener('click',()=>{
            window.location.href ='iframe_tensports.html';
        })
     }

     const aSportsBtn = document.getElementById('a_sports');
     if(aSportsBtn){
        aSportsBtn.addEventListener('click',()=>{
            window.location.href ='iframe_asports.html';
        })
     }

     const geoSuperBtn = document.getElementById('geo_super');
     if(geoSuperBtn){
        geoSuperBtn.addEventListener('click',()=>{
            window.location.href ='iframe_geosuper.html';
        })
     }
//  dropdown menu header code

       const iplBtn = document.getElementById('i_p_l');
     if(iplBtn){
        iplBtn.addEventListener('click',()=>{
            window.location.href ='channels.html';
        })
     }

       const pslBtn = document.getElementById('p_s_l');
     if(pslBtn){
        pslBtn.addEventListener('click',()=>{
            window.location.href ='psl_channel.html';
        })
     }


        //  android download codes

        // animate feature items on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.feature-item, .step').forEach(el => observer.observe(el));

    // download button toast
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            showToast('⬇️ Download started! Check your Downloads folder.');
        });
    }

    function showToast(message) {
        let toast = document.getElementById('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
    }



    const topLeagues = document.getElementById('top_leagues');
    const topLeaguesDesk = document.getElementById('top_leagues_desk');
    const leagueBtns = document.querySelector('.league-btns');

    if (topLeagues && leagueBtns) {
        topLeagues.addEventListener('click', (e) => {
            e.preventDefault();
            leagueBtns.classList.toggle('active');
        });
    }

    document.addEventListener('click', (e) => {
        if (leagueBtns && !e.target.closest('#top_leagues') && !e.target.closest('.league-btns')) {
            leagueBtns.classList.remove('active');
        }
    });

});
