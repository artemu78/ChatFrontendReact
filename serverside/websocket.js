const WebSocket = require("ws");
const PORT = 8080;

const random = (base) => Math.floor(Math.random() * base) + 1;
const wss = new WebSocket.Server({ port: PORT });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);

    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        //client.send("привет!");
      }
    });
  });
  setInterval(() => {
    const sendobj = {
      type: "chat_message",
      message: quotes[random(22)],
      author_id: random(3),
      id: random(10000000),
      date: (new Date()).toISOString()
    };
    ws.send(JSON.stringify(sendobj));
  }, 4000);
});

wss.on("open", function open() {
  console.log("connected");
  wss.send(Date.now());
});

wss.on("close", function close() {
  console.log("disconnected");
});

const quotes = [
  "Недостаточно овладеть премудростью, нужно также уметь пользоваться ею. Цицерон",
  "Тем, кто хочет учиться, часто вредит авторитет тех, кто учит. Цицерон",
  "Подумай, как трудно изменить себя самого, и ты поймешь, сколь ничтожны твои возможности изменить других. Вольтер",
  "Невежество — ночь ума, ночь безлунная и беззвездная. Цицерон",
  "Есть только одно благо — знание, и только одно зло — невежество. Сократ",
  "Блаженство тела состоит в здоровье, блаженство ума — в знании. Фалес Милетский",
  "Познавший самого себя — собственный палач. Фридрих Ницше	",
  "Благородный муж думает о должном. Низкий человек думает о том, что выгодно. Конфуций",
  "Речь истины проста. Платон",
  "Единственным критерием истины является опыт. Леонардо да Винчи",
  "Весёлое выражение лица постепенно отражается и на внутреннем мире. Иммануил Кант",
  "Образование создаёт разницу между людьми. Джон Локк",
  "Что легко? — Давать советы другим. Фалес Милетский",
  "Понимание — начало согласия. Спиноза, Бенедикт",
  "Мы намерены следовать за этими авторами, когда их свидетельства совпадают, но, если они между собою расходятся, будем передавать приводимые ими сведения под их именами. Публий Корнелий Тацит",
  "Память - это медная доска, покрытая буквами, которые время незаметно сглаживает, если порой не возобновлять их резцом. Джон Локк",
  "Философия и медицина сделали человека самым разумным из животных, гадание и астрология — самым безумным, суеверие и деспотизм — самым несчастным. Диоген Синопский",
  "Знание — настолько ценная вещь, что его не зазорно добывать из любого источника. Фома Аквинский",
  "В числе глупцов есть некая секта, называемая лицемерами, которые беспрерывно учатся обманывать себя и других, но больше других, чем себя, а в действительности обманывают больше самих себя, чем других. Леонардо да Винчи",
  "Имей мужество пользоваться собственным умом. Кант, Иммануил",
  "Всякое учение истинно в том, что оно утверждает, и ложно в том, что оно отрицает или исключает. Лейбниц"
];
