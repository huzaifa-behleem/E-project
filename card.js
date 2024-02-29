var cards = [

    {
        img : 'images/samsung2.png',
        ttl : 'SAMSUNG',
        des : 'Welcome to the SAMSUNG Pakistan page where you can “like” us to engage with other SAMSUNG fans and get the latest info on products, promotions, events & more! This is the place to talk about it all!',
        prc : '5000',
        lin : 'samsung.html',
    },
    {
        img : 'images/oneplus2.png',
        ttl : 'ONE PLUS',
        des : 'Welcome to the ONE PLUS Pakistan page where you can “like” us to engage with other ONE PLUS fans and get the latest info on products, promotions, events & more! This is the place to talk about it all!',
        prc : '5000',
        lin : 'oneplus.html',
    },
    {
        img : 'images/haier2.png',
        ttl : 'HAIER',
        des : 'Welcome to the HAIER Pakistan page where you can “like” us to engage with other HAIER fans and get the latest info on products, promotions, events & more! This is the place to talk about it all!',
        prc : '5000',
        lin : 'haier.html',
    },
    {
        img : 'images/tcl2.png',
        ttl : 'TCL',
        des : 'Welcome to the TCL Pakistan page where you can “like” us to engage with other TCL fans and get the latest info on products, promotions, events & more! This is the place to talk about it all!',
        prc : '5000',
        lin : 'tcl.html',
    },
    {
        img : 'images/dawlance2.png',
        ttl : 'Dawlance',
        des : 'Welcome to the DAWLANCE Pakistan page where you can “like” us to engage with other DAWLANCE fans and get the latest info on products, promotions, events & more! This is the place to talk about it all!',
        prc : '5000',
        lin : 'dawlance.html',
    },
    {
        img : 'images/lg2.png',
        ttl : 'LG',
        des : 'Welcome to the LG Pakistan page where you can “like” us to engage with other LG fans and get the latest info on products, promotions, events & more! This is the place to talk about it all!',
        prc : '5000',
        lin : 'lg.html',
    },
    {
        img : 'images/hp2.png',
        ttl : 'HP',
        des : 'Welcome to the HP Pakistan page where you can “like” us to engage with other HP fans and get the latest info on products, promotions, events & more! This is the place to talk about it all!',
        prc : '5000',
        lin : 'hp.html',
    },
    {
        img : 'images/orient.png',
        ttl : 'ORIENT',
        des : 'Welcome to the ORIENT page where you can “like” us to engage with other ORIENT fans and get the latest info on products, promotions, events & more! This is the place to talk about it all!',
        prc : '5000',
        lin : 'orient.html',
    },


]

for (let i = 0; i < cards.length; i++) {
    document.querySelector(".crd").innerHTML += `
      <div class="card">
        <div class="card1">
            <img src="${cards[i].img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${cards[i].ttl}</h5>
              <p class="card-text">${cards[i].des}</p>
              <button class="card-button"><a href="${cards[i].lin}">More info</button></a>
            </div>
          </div>
    </div></div>
    `    
}












