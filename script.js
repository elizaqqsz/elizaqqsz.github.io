const pages = [
    {
        t: 'Im glad you agree 🙂‍↕️',
        d: 'Can I show you my little letter for you?',
        g: 'images/ready.gif',
        b: `<button onclick="next()">Yes ❤️</button><button onclick="noPg()">Hell nah bro</button>`
    },
    {
        t: 'You deserve everything in this world ❤️',
        d: 'So before that i just want to remind u how much i love you and wish i could give u some actual cool gifts 😔',
        g: 'images/gift.gif',
        b: `<button onclick="next()">Open my letterrrrrrr</button>`
    },
    {
        t: 'Hi again, my love 💌',
        d: `Jeez, 4 months.. 4 MONTHS? With YOUU? I must be the luckiest person on earth. Thank u so much for this time, baby. I truly feel like I did something right in life to deserve you here.
You're such an amazing person and u always brighten my dark days when I have them, which unfortunately happened a lot this month.
And I almost did something stupid by thinking I can't be with you. Can u imagine? Yeahh, that was really bad and I'm sorry, baby.
I want to be with you more than anything, it's just my thoughts take over me sometimes and then it's bad.
I love you so much, Krista, and I really want this to work out and be there with you at the end. I'll do my best for it to happen so we can have our little family with our dogs and cats.
I always imagine what a peaceful and cute life we can have, so many things I want to do with you and especially FOR you. I hope we'll have this, my love.
Thank u for being with me.
Thank u for taking care of me even like this.
And most importantly, thank u for loving me even at the times when I don't love myself.
It means a lot and I appreciate everything you do.
Stay with me and let's see what life will bring to us in our future.
I love you.
Я тебя люблю.
Es tevi mīlu, Krista ❤️`,
        g: 'images/love.gif',
        b: `<button onclick="next()">One last thing...</button>`
    },
    {
        t: ' I have a question...',
        d: 'Will you stay with me for many more months? ❤️',
        g: 'final.gif',
        b: `<button onclick="celebrate()">Always ❤️ (u have no choice again)</button>`
    }
];

let i = 0;

function draw() {
    gif.src = pages[i].g;
    title.textContent = pages[i].t;
    // FIXED: Use innerHTML instead of textContent to render HTML tags
    text.innerHTML = pages[i].d;
    buttons.innerHTML = pages[i].b;
    
    document.querySelector('.card').style.animation = 'none';
    setTimeout(() => {
        document.querySelector('.card').style.animation = 'pop .5s';
    }, 10);
}

function start() {
    i = 0;
    draw();
}

function next() {
    if (i < pages.length - 1) {
        i++;
        draw();
    }
}

function noPg() {
    gif.src = 'images/sad.gif';
    title.textContent = 'I knew u hate me..';
    text.textContent = 'You can try again tho ❤️';
    buttons.innerHTML = '<button onclick="draw()">Uhh alr 😒</button>';
}

function celebrate() {
    gif.src = 'images/celebrate.gif';
    title.textContent = 'Forever & Always ❤️';
    text.innerHTML = 'Happy 4 Months to my Favourite Person! (ITS YOU 🫵🫵🫵)<br><br>I LOVE YOU THE MOST ❤️';
    buttons.innerHTML = '';
    
    setInterval(() => {
        let h = document.createElement('div');
        h.className = 'heart';
        h.innerHTML = '❤';
        h.style.left = Math.random() * 100 + 'vw';
        h.style.fontSize = (35 + Math.random() * 35) + 'px';
        document.body.appendChild(h);
        
        setTimeout(() => {
            h.remove();
        }, 6000);
    }, 120);
}
