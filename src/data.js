import { v4 as uuid } from "uuid";


const memeDB = {
  data: [
    {
      id: uuid(),
      name: "demo",
      imgSrc:
        "https://www.scrolldroll.com/wp-content/uploads/2021/01/Kya-karu-main-mar-jau-Viral-Indian-Meme-Templates-From-2020-01.jpg"
    },
    {
        id: uuid(),
        name: "demo",
        imgSrc:
          "https://user-images.githubusercontent.com/55450200/169446043-4a9a9dc9-bd38-427c-9e50-12f846de4c1c.jpg"
      },
        {
        id: uuid(),
        name: "demo",
        imgSrc:
          "https://user-images.githubusercontent.com/55450200/169446043-4a9a9dc9-bd38-427c-9e50-12f846de4c1c.jpg"
      },
  ]
};

export { memeDB };
