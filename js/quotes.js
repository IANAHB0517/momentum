const quotes = [
    {
        quote: "Empirical Chemical Technical 그게 어떤 방향이든 간에 내 Verses is practical",
        author: "La.J",
    },
    {
        quote: "질척이는 Lyrics과 Feeling 리듬감 그린 다음 흘린 땀 배어든 것들을 뱉는다",
        author: "La.J",
    },
    {
        quote: "내 손에 쥔걸 놓지 않아 오늘도 나로 살아가 난",
        author: "La.J",
    },
    {
        quote: "Cool 하게 말해 Cool 하게 답해",
        author: "La.J",
    },
    {
        quote: "꿈을 꾸는 나인 딱 학교 입학 전까지 컨베이어 벨트위에서 뒤를 따르라 하지",
        author: "La.J",
    },
    {
        quote: "무엇이 옳고 또 무엇을 위해 살지 고심 따윈 없고 두 손 가득 욕심",
        author: "La.J",
    },
    {
        quote: "저기 웃고 있는 나는 속이 썩어 가는데",
        author: "La.J",
    },
    {
        quote: "빨리 리본 달고 더 예쁘게만 꾸며 제일 중요한 건 Price Tag 가격을 높여",
        author: "La.J",
    },
    {
        quote: "몇 봉지의 약을 털어 넣든 들키지 않게 숨겨 포장이면 돼 관심 없지 영혼의 무게",
        author: "La.J",
    },
    {
        quote: "나는 나로 살아 나는 나대로의 나로 살아",
        author: "La.J",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

