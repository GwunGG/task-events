import { listenerCount } from 'process';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const myButton = document.createElement('button');
    myButton.innerHTML = 'Удали меня';
    document.body.append(myButton);
    myButton.addEventListener('click', () => myButton.remove());
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const myOwnUl = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        const myOwnLi = document.createElement('li');
        myOwnLi.innerHTML = arr[i];
        myOwnUl.append(myOwnLi);
    }
    document.body.append(myOwnUl);
    myOwnUl.addEventListener(
        'mouseover',
        (event) => {
            if (event.target && event.target.nodeName === 'LI') {
                event.target.setAttribute('title', `${event.target.innerHTML}`);
            }
        },
        true,
    );
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const myOwnA = document.createElement('a');
    myOwnA.innerHTML = 'tensor';
    myOwnA.setAttribute('href', 'https://tensor.ru/');
    myOwnA.addEventListener(
        'click',
        (event) => {
            event.preventDefault();
            const myOwnAtr = myOwnA.getAttribute('href');
            myOwnA.innerHTML = 'tensor' + ` ${myOwnAtr}`;
        },
        { once: true },
    );
    document.body.append(myOwnA);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const myOwnUl = document.createElement('ul');
    const myOwnLi = document.createElement('li');
    myOwnLi.innerHTML = 'Пункт';
    myOwnUl.append(myOwnLi);
    const myOwnButton = document.createElement('button');
    myOwnButton.innerHTML = 'Добавить пункт';
    document.body.append(myOwnUl, myOwnButton);
    myOwnUl.addEventListener('click', (event) => {
        if (event.target && event.target.nodeName === 'LI') {
            event.target.innerHTML = 'Пункт!';
        }
    });
    myOwnButton.addEventListener('click', () => {
        const myOwnLiEvent = document.createElement('li');
        myOwnLiEvent.innerHTML = 'Пункт';
        myOwnUl.append(myOwnLiEvent);
    });
}
