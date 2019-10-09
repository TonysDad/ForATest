let Myheading = document.querySelector('h1');
Myheading.textContent = 'You Are My Destiny'
// document.querySelector('html').onclick = function()
// {
//     alert('Auch!')
// }
let myImg = document.querySelector('img');
let mySrc = myImg.getAttribute('src');
myImg.onclick = function()
{
    if(mySrc === 'b1.jpg')
    {
        myImg.setAttribute('src', 'b2.png')
    }
    else
    {
        myImg.setAttribute('src', 'b1.png')
    }
}

function setHeading(name)
{
    let Myhead = document.querySelector('h1');
    Myhead.textContent = "So cool! " + name;

}

document.querySelector('html').onclick = function()
{
    let myname = prompt('Input Your Name ');
    setHeading(myname);
}
