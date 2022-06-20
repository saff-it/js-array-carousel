/**
 * aggancio il contenitore delle immagini dall'html
 * creo un elemento con tag img da inserire nell'html nel contenitore appena agganciato
 * aggiungo a questo elemento img le classi necessarie
 * aggiungo a questo elemento img gli attributi necessari ed il realtivo link di 1 immagine dell'array 
 * appendo al contenitore il tag img creato
 * 
 * 
 * 
 * inserisco immagini dell'arrey
 * creo i div da appendere al contenitore in html
 * fornisco la classe appear
 */


images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];

const imgContainer = document.querySelector('div.ms_carou-img-cont');
let activeIndex = 1;

console.log(imgContainer);

for ( let index = 0; index < images.length ; index++ ) {
    console.log(images[index]);

    const imgLandscape = document.createElement('img');
    imgLandscape.classList.add('w-100');
    imgLandscape.setAttribute('src', images[index]);
        
    imgContainer.append(imgLandscape);      
    
    imgLandscape[activeIndex].classList.add('d-block');

}

