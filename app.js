let budget = 999; // Початковий баланс грошей гравця
let defcon = 4;
let minister_defense = "Сергій Соколов";
let minister_industry = "Ніколай Рыжков";
let minister_agriculture = "Василь Стародубцев";
let minister_foreign_affairs = "Андрій Громико";
let minister_kgb = "Віктор Чебряков";
let army_budget = 0;
let industry_budget = 0;
let science_budget = 0;
let special_services_budget = 0;
let corruption_budget = 0;
let atomic_budget = 0;

function start_game() {
  console.log("Вітаю! Ви зіграли роль Михайла Горбачова, генсека СРСР у 1985 році.");
  console.log("Ситуація у світі на 1985 рік: Холодна війна між США та СРСР продовжується, світ перебуває у напруженості.");
  console.log("У СРСР сталися зміни у політичному лідерстві, померло декілька генсеків.");
  console.log("Ви маєте приймати рішення, які впливатимуть на долю СРСР.");
  console.log("Використовуйте команди або числа для здійснення дій у грі.");
  console.log("Команди:");
  console.log("y - перейти в розділ Міністри");
  console.log("t - ввійти в розділ Бюджет");
  console.log("w - продовжити гру");
  console.log("m - міжнародна дипломатія");
  game_loop();
}

function game_loop() {
  while (true) {
    const command = prompt("Введіть команду: ");

    if (command.toLowerCase() === "exit") {
      console.log("Гра закінчена.");
      break;
    } else if (command.toLowerCase() === "w") {
      world_situation();
    } else if (command.toLowerCase() === "t") {
      budget_section();
    } else if (command.toLowerCase() === "y") {
      ministers_section();
    } else if (command.toLowerCase() === "m") {
      international_diplomacy_section();
    } else {
      console.log("Невідома команда. Спробуйте ще раз.");
    }
  }
}

function world_situation() {
  console.log("Ситуація у світі на 1985 рік:");
  console.log("Холодна війна між США та СРСР продовжується, світ перебуває у напруженості.");
  console.log("У СРСР сталися зміни у політичному лідерстві, померло декілька генсеків.");
  console.log("Померли генсеки Леонід Брежнєв, Юрій Андропов, Константин Черненко.");
  console.log("У 1985 році на посаду генсека СРСР прийшов Михайло Горбачов.");
  console.log("Рівень DEFCON: ", defcon);
}

function budget_section() {
  console.log("Ви у розділі бюджету.");
  console.log("Поточний баланс грошей: ", budget, "млрд рублів");
  console.log("Доступні розділи:");
  console.log("1. Армія");
  console.log("2. Промисловість");
  console.log("3. Наука");
  console.log("4. Спецслужби");
  console.log("5. Боротьба з корупцією")
  console.log("6. Атомані технології")
  console.log("Або введіть esc щоб залишити меню")

  const section = prompt("Введіть команду, щоб виконати відповідну дію: ");

    if (section === "1") {
      console.log("Ви обрали розділ Армія.");
      console.log('Виділений бюджет для розділу Армія:' + army_budget)
      const budget_input = prompt("Вкажіть бюджет для розділу Армія: ");
      if (budget_input > budget) {
      console.log('Виділений бюджет перевищує бюджет країни');
      } else {
      budget += parseInt(army_budget);
      army_budget = budget_input
      budget -= parseInt(army_budget);
      console.log("Бюджет розділу Армія: ", budget_input, "млрд рублів");
    }
    } else if (section === "2") {
      console.log("Ви обрали розділ Промисловість.");
      console.log('Виділений бюджет для розділу Промисловість:' + industry_budget)
      const budget_input = prompt("Вкажіть бюджет для розділу Промисловість: ");
      if (budget_input > budget) {
      console.log('Виділений бюджет перевищує бюджет країни');
      } else {
      budget += parseInt(industry_budget);
      industry_budget = budget_input
      budget -= parseInt(industry_budget);
      console.log("Бюджет розділу Промисловість: ", budget_input, "млрід рублів");
    }
    } else if (section === "3") {
      console.log("Ви обрали розділ Наука.");
      console.log('Виділений бюджет для розділу Наука:' + science_budget)
      const budget_input = prompt("Вкажіть бюджет для розділу Наука: ");
      if (budget_input > budget) {
      console.log('Виділений бюджет перевищує бюджет країни');
      } else {
      budget += parseInt(science_budget);
      science_budget = budget_input
      budget -= parseInt(science_budget);
      console.log("Бюджет розділу Наука: ", budget_input, "млрд рублів");
      }
    } else if (section === "4") {
      console.log("Ви обрали розділ Спецслужби.");
      console.log('Виділений бюджет для розділу Спецслужби:' + special_services_budget)
      const budget_input = prompt("Вкажіть бюджет для розділу Спецслужби: ");
      if (budget_input > budget) {
      console.log('Виділений бюджет перевищує бюджет країни');
      } else {
      budget += parseInt(special_services_budget);
      special_services_budget = budget_input
      budget -= parseInt(special_services_budget);
      console.log("Бюджет розділу Спецслужби: ", budget_input, "млрд рублів");
      }
    } else if (section === '5') {
      console.log("Ви обрали розділ Боротьба з корупцією.");
      console.log('Виділений бюджет для розділу Боротьба з корупцією:' + corruption_budget)
      const budget_input = prompt("Вкажіть бюджет для розділу Боротьба з корупцією: ");
      if (budget_input > budget) {
      console.log('Виділений бюджет перевищує бюджет країни');
      } else {
      budget += parseInt(corruption_budget);
      corruption_budget = budget_input
      budget -= parseInt(corruption_budget);
      console.log("Бюджет розділу Боротьба з корупцією: ", budget_input, "млрд рублів");
      }
    } else if (section === '6') {
      console.log("Ви обрали розділ Атомні технології.");
      console.log('Виділений бюджет для розділу Атомні технології:' + atomic_budget)
      const budget_input = prompt("Вкажіть бюджет для розділу Атомні технології: ");
      if (budget_input > budget) {
      console.log('Виділений бюджет перевищує бюджет країни');
      } else {
      budget += parseInt(atomic_budget);
      atomic_budget = budget_input
      budget -= parseInt(atomic_budget);
      console.log("Бюджет розділу Атомні технології: ", budget_input, "млрд рублів");
      }
    } else if (section === 'esc') {
      return;
    } else {
    console.log("Невідомий розділ. Спробуйте ще раз.");
    }
  budget_section()
    
}

function ministers_section() {
  console.log("Ви у розділі Міністри.");
  console.log("Поточні міністри:");
  console.log("1. Міністр оборони -", minister_defense);
  console.log("2. Міністр промисловості -", minister_industry);
  console.log("3. Міністр сільського господарства -", minister_agriculture);
  console.log("4. Міністр закордонних справ -", minister_foreign_affairs);
  console.log("5. Голова КГБ -", minister_kgb);
  console.log("6. Назад");

  const section = prompt("Введіть номер розділу: ");

  if (section === "1") {
    console.log("Ви обрали розділ Міністр оборони.");
    console.log(`${minister_defense} є Міністром оборони.`);
  } else if (section === "2") {
    console.log("Ви обрали розділ Міністр промисловості.");
    console.log(`${minister_industry} є Міністром промисловості.`);
  } else if (section === "3") {
    console.log("Ви обрали розділ Міністр сільського господарства.");
    console.log(`${minister_agriculture} є Міністром сільського господарства.`);
  } else if (section === "4") {
    console.log(`${minister_foreign_affairs} є Міністром закордонних справ.`);
    console.log("1. Олег Трояновський - Дружба з Китаєм");
    console.log("2. Едуард Шеварнадзе - Дружба з Заходом");
    console.log("3. Залишити поточного міністра");
    const candidate = prompt("Виберіть кандидата для посади Міністра закордонних справ: ");
    if (candidate === "1") {
      minister_foreign_affairs = "Олег Трояновський";
      console.log(`${minister_foreign_affairs} є Міністром закордонних справ.`);
    } else if (candidate === "2") {
      minister_foreign_affairs = "Едуард Шеварнадзе";
      console.log(`${minister_foreign_affairs} є Міністром закордонних справ.`);
    } else if (candidate === "3") {
      console.log(`${minister_foreign_affairs} є Міністром закордонних справ.`);
    } else {
      console.log("Невірний вибір.");
    }
  } else if (section === "5") {
    console.log("Ви обрали розділ Голова КГБ.");
    console.log(`${minister_kgb} є Головою КГБ.`);
  } else if (section === "6") {
    console.log("Повернення до основного меню.");
  } else {
    console.log("Невідомий розділ. Спробуйте ще раз.");
  }
}

function international_diplomacy_section() {
  console.log("Ви у розділі Міжнародна дипломатія.");
  console.log("Поточні дії:");
  console.log("1. Підписати договір про нерозповсюдження ядерної зброї");
  console.log("2. Переговори з президентом США");
  console.log("3. Переговори з президентом Китаю");
  console.log("4. Встановити дипломатичні відносини зі Заходом");

  const action = prompt("Введіть номер дії: ");

  if (action === "1") {
    console.log("Ви підписали договір про нерозповсюдження ядерної зброї.");
    defcon = 3;
  } else if (action === "2") {
    console.log("Ви плануєте переговори з президентом США.");
  } else if (action === "3") {
    console.log("Ви плануєте переговори з президентом Китаю.");
  } else if (action === "4") {
    console.log("Ви встановлюєте дипломатичні відносини зі Заходом.");
  } else {
    console.log("Невідома дія. Спробуйте ще раз.");
  }
}

start_game();