const form = document.querySelector('form');
const result = document.querySelector('.result');
let imageInput = document.querySelector('#image');
const topTxtInput = document.querySelector('#top-text');
const bottomTxtInput = document.querySelector('#bottom-text');
const btnSubmit = document.querySelector('button[type="submit"]');

btnSubmit.addEventListener('click', function (e) {
  e.preventDefault();

  // capture empty inputs:
  if (!imageInput.value.includes('http')) {
    alert('please enter valid url');
  } else if (topTxtInput.value === '' && bottomTxtInput.value === '') {
    alert('please provide at least one line of text');
  } else {
    // generate new meme:
    const newDiv = document.createElement('div');
    newDiv.classList.add('meme');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.setAttribute('src', `${imageInput.value}`);

    imgContainer.append(img);
    const textDivTop = document.createElement('div');
    textDivTop.classList.add('text-top');

    // text top
    const newTxt1 = document.createElement('h2');
    newTxt1.innerText = topTxtInput.value;
    textDivTop.append(newTxt1);
    const textDivBottom = document.createElement('div');
    textDivBottom.classList.add('text-bottom');

    // text bottom
    const newTxt2 = document.createElement('h2');
    newTxt2.innerText = bottomTxtInput.value;
    textDivBottom.append(newTxt2);

    imgContainer.append(textDivTop, textDivBottom);
    newDiv.append(imgContainer);

    // buttons
    const btnDiv = document.createElement('div');
    btnDiv.classList.add('btn-div');

    const btnShare = document.createElement('button');
    btnShare.classList.add('share');
    btnShare.innerText = 'share';
    btnShare.addEventListener('click', function () {
      document.hasFocus(imageInput);
    });

    const btnSave = document.createElement('button');
    btnSave.classList.add('save');
    btnSave.innerText = 'save';
    btnSave.addEventListener('click', function () {
      document.hasFocus(imageInput);
    });

    const btnAdd = document.createElement('button');
    btnAdd.classList.add('add');
    btnAdd.innerText = 'add new';

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('delete');
    btnDelete.innerText = 'delete';
    btnDelete.addEventListener('click', function () {
      let meme = document.querySelector('div');
      newDiv.remove();
    });

    // appends
    btnDiv.append(btnShare, btnSave, btnAdd, btnDelete);
    imgContainer.append(btnDiv);
    result.prepend(newDiv);

    // clear inputs:
    imageInput.value = '';
    topTxtInput.value = '';
    bottomTxtInput.value = '';
  }
});
