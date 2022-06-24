const foto = 
[
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
      albumId: 1,
      id: 2,
      titl: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355"
    },
    {
      albumId: 1,
      id: 4,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      url: "https://via.placeholder.com/600/d32776",
      thumbnailUrl: "https://via.placeholder.com/150/d32776"
    },
    {
      albumId: 1,
      id: 5,
      title: "natus nisi omnis corporis facere molestiae rerum in",
      url: "https://via.placeholder.com/600/f66b97",
      thumbnailUrl: "https://via.placeholder.com/150/f66b97"
    },
    {
      albumId: 1,
      id: 6,
      title: "accusamus ea aliquid et amet sequi nemo",
      url: "https://via.placeholder.com/600/56a8c2",
      thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
    },
    {
      albumId: 1,
      id: 7,
      title: "officia delectus consequatur vero aut veniam explicabo molestias",
      url: "https://via.placeholder.com/600/b0f7cc",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
    },
    {
      albumId: 1,
      id: 8,
      title: "aut porro officiis laborum odit ea laudantium corporis",
      url: "https://via.placeholder.com/600/54176f",
      thumbnailUrl: "https://via.placeholder.com/150/54176f"
    },
    {
      albumId: 1,
      id: 9,
      title: "qui eius qui autem sed",
      url: "https://via.placeholder.com/600/51aa97",
      thumbnailUrl: "https://via.placeholder.com/150/51aa97"
    },
]



const AddOllFoto = document.getElementById('fotoBuster')
function AddFoto () {
  const nweDivFoto1 = document.createElement('div')
  const nweH1Foto1 = document.createElement('h1')
  const nweImgFoto1= document.createElement('img')
  const nweDivFoto2 = document.createElement('div')
  const nweH1Foto2 = document.createElement('h1')
  const nweImgFoto2 = document.createElement('img')
  const nweDivFoto3 = document.createElement('div')
  const nweH1Foto3 = document.createElement('h1')
  const nweImgFoto3 = document.createElement('img')
  const nweDivFoto4 = document.createElement('div')
  const nweH1Foto4 = document.createElement('h1')
  const nweImgFoto4 = document.createElement('img')
  const nweDivFoto5 = document.createElement('div')
  const nweH1Foto5 = document.createElement('h1')
  const nweImgFoto5 = document.createElement('img')
  const nweDivFoto6 = document.createElement('div')
  const nweH1Foto6 = document.createElement('h1')
  const nweImgFoto6 = document.createElement('img')
  const nweDivFoto7 = document.createElement('div')
  const nweH1Foto7 = document.createElement('h1')
  const nweImgFoto7 = document.createElement('img')
  const nweDivFoto8 = document.createElement('div')
  const nweH1Foto8 = document.createElement('h1')
  const nweImgFoto8 = document.createElement('img')
  const nweDivFoto9 = document.createElement('div')
  const nweH1Foto9 = document.createElement('h1')
  const nweImgFoto9= document.createElement('img')
  
  const divClass = document.getElementById('foto')
  divClass.classList.add('proba')

  nweH1Foto1.innerText = ('accusamus beatae ad facilis cum similique qui sunt')
  nweH1Foto2.innerText = ('reprehenderit est deserunt velit ipsam')
  nweH1Foto3.innerText = ('officia porro iure quia iusto qui ipsa ut modi')
  nweH1Foto4.innerText = ('culpa odio esse rerum omnis laboriosam voluptate repudiandae')
  nweH1Foto5.innerText = ('natus nisi omnis corporis facere molestiae rerum in')
  nweH1Foto6.innerText = ('accusamus ea aliquid et amet sequi nemo')
  nweH1Foto7.innerText = ('officia delectus consequatur vero aut veniam explicabo molestias')
  nweH1Foto8.innerText = ('aut porro officiis laborum odit ea laudantium corporis')
  nweH1Foto9.innerText = ('qui eius qui autem sed')

  nweImgFoto1.src = 'https://via.placeholder.com/150/92c952'
  nweImgFoto2.src = 'https://via.placeholder.com/150/771796'
  nweImgFoto3.src = 'https://via.placeholder.com/150/24f355'
  nweImgFoto4.src = 'https://via.placeholder.com/150/d32776'
  nweImgFoto5.src = 'https://via.placeholder.com/150/f66b97'
  nweImgFoto6.src = 'https://via.placeholder.com/150/56a8c2'
  nweImgFoto7.src = 'https://via.placeholder.com/150/b0f7cc'
  nweImgFoto8.src = 'https://via.placeholder.com/150/54176f'
  nweImgFoto9.src = 'https://via.placeholder.com/150/51aa97'

nweDivFoto1.appendChild(nweH1Foto1)
nweDivFoto2.appendChild(nweH1Foto2)
nweDivFoto3.appendChild(nweH1Foto3)
nweDivFoto4.appendChild(nweH1Foto4)
nweDivFoto5.appendChild(nweH1Foto5)
nweDivFoto6.appendChild(nweH1Foto6)
nweDivFoto7.appendChild(nweH1Foto7)
nweDivFoto8.appendChild(nweH1Foto8)
nweDivFoto9.appendChild(nweH1Foto9)

nweDivFoto1.appendChild(nweImgFoto1)
nweDivFoto2.appendChild(nweImgFoto2)
nweDivFoto3.appendChild(nweImgFoto3)
nweDivFoto4.appendChild(nweImgFoto4)
nweDivFoto5.appendChild(nweImgFoto5)
nweDivFoto6.appendChild(nweImgFoto6)
nweDivFoto7.appendChild(nweImgFoto7)
nweDivFoto8.appendChild(nweImgFoto8)
nweDivFoto9.appendChild(nweImgFoto9)

const addOllTagWDiv = document.getElementById('foto')

addOllTagWDiv.appendChild(nweDivFoto1)
addOllTagWDiv.appendChild(nweDivFoto2)
addOllTagWDiv.appendChild(nweDivFoto3)
addOllTagWDiv.appendChild(nweDivFoto4)
addOllTagWDiv.appendChild(nweDivFoto5)
addOllTagWDiv.appendChild(nweDivFoto6)
addOllTagWDiv.appendChild(nweDivFoto7)
addOllTagWDiv.appendChild(nweDivFoto8)
addOllTagWDiv.appendChild(nweDivFoto9)

}

AddOllFoto.addEventListener('click', AddFoto )