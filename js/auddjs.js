const auddjs = document.querySelector("#auddjs span:first-child")
const author = document.querySelector("#auddjs span:last-child")

const auddjsList = [
    {
        auddjs : "그들이 저급하게 행동해도 우리는 품위를 갖추자.",
        author : "Barack Obama"
    },
    {
        auddjs : "병원은 아프러 가는 곳이 아니다.",
        author : "Samuel Goldwyn"
    },
    {
        auddjs : "평화로 가는 길은 없다. 평화가 길이다.",
        author : "Mahatma Gandhi"
    },
    {
        auddjs : "처음에 성공하지 못할 것 같으면, 실패자가 뭐라도 얻는지 알아보라.",
        author : "Bill Lyon"
    },
    {
        auddjs : "나는 온세상을 나의 조국으로 간주한다. 그래서 모든 전쟁은 나에게 가족 불화의 공포를 준다.",
        author : "Helen Keller"
    },
    {
        auddjs : "영광이란 수면에 퍼지는 파문과 같은 것, 점점 넓게 퍼져 사라질 때까지 계속 커지지.",
        author : "William Shakespeare"
    },
    {
        auddjs : "최고의 증거는 단연 경험이다.",
        author : "Sir Francis Bacon"
    }
]

const todaysAuddjs = auddjsList[Math.floor(Math.random() * auddjsList.length)]

auddjs.innerText = todaysAuddjs.auddjs;
author.innerText = todaysAuddjs.author;

