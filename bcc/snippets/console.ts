export function run() {
    // #region snippet
    // Inside ./snippets/console.ts
    console.log('Loading!');
    const h1 = document.querySelector('h1');
    if (h1 !== null) console.log(h1.textContent);
    console.assert(document.querySelector('h2'), 'h2 not found!');
    const artists = [
    {
        first: 'René',
        last: 'Magritte'
    },
    {
        first: 'Chaim',
        last: 'Soutine'
    },
    {
        first: 'Henri',
        last: 'Matisse'
    }
    ];
    console.table(artists);
    if (h1 !== null)  {
        setTimeout(() => {
            h1.textContent = 'Hello, Console!';
            console.log(h1.textContent);
        }, 3000);
    }
    // #endregion snippet
}
