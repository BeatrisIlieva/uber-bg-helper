const phrases = [
    {
        Translation: 'Добро Утро',
        Bulgarian: 'Гууд Морнинг',
        English: 'Good Morning'
    },
    {
        Translation: 'Добър ден',
        Bulgarian: 'Гууд Афтърнуун',
        English: 'Good Afternoon'
    },
    {
        Translation: 'Добър вечер',
        Bulgarian: 'Гууд Ивнинг',
        English: 'Good Evening'
    },
    {
        Translation: 'Как сте днес?',
        Bulgarian: 'Хау ар ю тъдай?',
        English: 'How are you today?'
    },
    {
        Translation: 'Мога да взема само четирима пътници',
        Bulgarian: 'Ай кен тейк фор песинджърс',
        English: 'I can take 4 passengers'
    },
    {
        Translation: 'Къде да Ви закарам?',
        Bulgarian: 'Уеър кен ай тейк ю?',
        English: 'Where can I take you?'
    },
    {
        Translation: 'Къде отивате?',
        Bulgarian: 'Уеър ар ю гоинг?',
        English: 'Where are you going'
    },
    {
        Translation: 'Не знам къде е това място. Имате ли карта?',
        Bulgarian: "Ай дон'т кноу дат плейс. Ду ю хав а мап?",
        English: "I don't know that place. Do you have a map?"
    },
    {
        Translation: 'Можете ли да ми покажете на тази карта?',
        Bulgarian: 'Кен ю шоу ми он дис мап?',
        English: 'Can you show me on this map?'
    },
    {
        Translation: 'Бързате ли?',
        Bulgarian: 'Ар ю ин ъ хъри?',
        English: 'Are you in a hurry?'
    },
    {
        Translation: 'Много е близо.',
        Bulgarian: 'Ит ис вери клоуз.',
        English: 'It is very close.'
    },
    {
        Translation: 'Доста е далеч.',
        Bulgarian: 'Ит ис прити фар ауей.',
        English: 'It is pretty far away.'
    },
    {
        Translation: 'Ще стигнем за около 15 мин.',
        Bulgarian: 'Ит уил тейк абоут 15 минитс.',
        English: 'It will take about 15 minutes.'
    },
    {
        Translation: 'Ще отнеме около час да стигнем дотам.',
        Bulgarian: 'Ит тейкс абоут уан ауър то гоу деър.',
        English: 'It takes about one hour to go there.'
    },
    {
        Translation:
            'За извънградски превози се заплаща винетна такса.',
        Bulgarian: 'Фор оут ъф таун трипс, а виньет фий ис рикуаърд.',
        English: 'For out-of-town trips, a vignette fee is required.'
    },
    {
        Translation: 'Говорете по-бавно моля',
        Bulgarian: 'Спийк слоули, плийс.',
        English: 'Speak slowly, please.'
    },
    {
        Translation: 'Извинете, не Ви разбирам.',
        Bulgarian: "Сори, ай дон'т. ъндърстанд.",
        English: "Sorry, I don't understand."
    },
    {
        Translation: 'Да, разбирам. Ще Ви закарам там.',
        Bulgarian: "Йес, ай ъндърстанд. А'л тейк ю деър",
        English: "Yes, I understand. I'll take you there."
    },
    {
        Translation: 'Ще сложа багажа Ви в багажника.',
        Bulgarian: "Ай'л път йор лагидж ин дъ трънк.",
        English: "I'll put your luggage in the trunk."
    },
    {
        Translation: 'Сложете си колана.',
        Bulgarian: 'Пут он йор сийт белт, плийс.',
        English: 'Put on your seat belt, please.'
    },
    {
        Translation: 'Имате ли против да отворя прозореца?',
        Bulgarian: 'Из ит окей иф ай оупън ъ уиндоу?',
        English: 'Is it okay if I open a window?'
    },
    {
        Translation: 'Добре ли е климатикът?',
        Bulgarian: 'Из ди еър-къндишънинг окей?',
        English: 'Is the air-conditioning okay?'
    },
    {
        Translation: 'Моля не се хранете в колата.',
        Bulgarian: "Плийс дон'т ийт ин дъ кар.",
        English: "Please don't eat in the car."
    },
    {
        Translation: 'Моля не пушете в колата.',
        Bulgarian: 'Но смоукийнг, плийс.',
        English: 'No smoking, please.'
    },
    {
        Translation: 'Изкате ли да Ви изчакам?',
        Bulgarian: 'Ду ю уонт ми то уейт?',
        English: 'Do you want me to wait?'
    },
    {
        Translation: 'Трябва да заредя колата.',
        Bulgarian: 'Ай хав то чардж дъ кар.',
        English: 'I have to charge the car.'
    },
    {
        Translation: 'Има задръстване.',
        Bulgarian: "Ит'с ръш ауър.",
        English: "It's rush hour."
    },
    {
        Translation:
            'Там има голям трафик. Ще стигнем по-бързо ако минем оттук.',
        Bulgarian:
            "Дъ трафик ис бад оувър деър. Уи'л гет деър фастер иф уи го фром хиър.",
        English:
            "The traffic is bad over there. We'll get there faster if we go from here."
    },
    {
        Translation: 'Мисля че има катастрофа.',
        Bulgarian: "Ай тинк деър'с бийн ън аксидънт.",
        English: "I think there's been an accident."
    },
    {
        Translation: 'Ще опитам по друг път.',
        Bulgarian: "Ай'л трай ъ диффърънт уей.",
        English: "I'll try a different way."
    },
    {
        Translation: 'Цената е 30лв.',
        Bulgarian: 'Дъ тотал прайс ис търти лев.',
        English: 'The total price is 30lv.'
    },
    {
        Translation: 'Благодаря за бакшиша.',
        Bulgarian: 'Тенк ю фор дъ тип.',
        English: 'Thank you for the tip.'
    },
    {
        Translation: 'Имате ли по-дребни?',
        Bulgarian: 'Ду ю хав смолър ноутс?',
        English: 'Do you have smaller notes?'
    },
    {
        Translation: 'Не мога да Ви върна ресто.',
        Bulgarian: "Ай дон'т хав ени чейндж.",
        English: "I don't have any change."
    },
    {
        Translation: 'Не забравяйте вещите си.',
        Bulgarian: "Дон'т фъргет йор тинкс.",
        English: "Don't forget your things."
    },
    {
        Translation: 'Беше ми приатно да си поговорим.',
        Bulgarian: "Ит'с бийн найс чатинг уит ю.",
        English: "It's been nice chatting with you."
    },
    {
        Translation: 'Приятно прекарване в София.',
        Bulgarian: 'Инждой йор стей ин Софиа.',
        English: 'Enjoy your stay in Sofia.'
    },
    {
        Translation: 'Моля, пак заповядайте.',
        Bulgarian: 'Ю ар уелкъм.',
        English: "You're welcome."
    },
    {
        Translation:
            'Не мога да отида там. Ще трябва да се върна без такса.',
        Bulgarian:
            "Ай кан'т гоу деър. Ай уд хав ту към бак уитаут а феър.",
        English:
            "I can't go there. I would have to come back without a fare."
    },
    {
        Translation: 'Би ли ли сте тук и преди?',
        Bulgarian: 'Хав ю бийн хиер бифор?',
        English: 'Have you been here before?'
    },
    {
        Translation: 'Харесва ли ви Софиа?',
        Bulgarian: 'Хау ду ю лайк Софиа?',
        English: 'How do you like Sofia?'
    },
    {
        Translation: 'По работа ли сте тук?',
        Bulgarian: 'Ар ю хиър он бизнес?',
        English: 'Are you here on business?'
    },
    {
        Translation: 'Дълго ли ще останете?',
        Bulgarian: 'Ар ю стейнг лонг?',
        English: 'Are you staying long?'
    },
    {
        Translation: 'Приятен ден!',
        Bulgarian: 'Хав а найс дей!',
        English: 'Have a nice day!'
    },
    {
        Translation: 'Благодаря и на Вас!',
        Bulgarian: 'Тенк ю, ю ту!',
        English: 'Thank you to you too!'
    },
    {
        Translation: 'Приятен ден!',
        Bulgarian: 'Хав ъ найс дей!',
        English: 'Have a nice day!'
    },
    {
        Translation: 'Приятна вечер!',
        Bulgarian: 'Хав ъ найс ивнинг!',
        English: 'Have a nice evening!'
    },
    {
        Translation: 'Надявам се, че сте добре днес.',
        Bulgarian: 'Ай хоуп юър дуинг уел тъдей.',
        English: "I hope you're doing well today."
    },
    {
        Translation:
            'Как бихте сравнили този град с града, в който живеете?',
        Bulgarian: 'Хау даз дис сити къмпеър ту йор хоум таун?',
        English: 'How does this city compare to your home town?'
    },
    {
        Translation: 'Опитвали ли сте вече някое тукашно ястие?',
        Bulgarian: 'Хав ю чрайд ени лоукал дишис хиър йет?',
        English: 'Have you tried any local dishes here yet?'
    },
    {
        Translation:
            'Наслаждавате ли се на прекараното досега време в София?',
        Bulgarian: 'Ар ю инджоийнг йор тайм ин Софиа соу фар?',
        English: 'Are you enjoying your time in Sofia so far?'
    },
    {
        Translation:
            'Надявам се да се насладите на останалата част от деня.',
        Bulgarian: 'Ай хоуп ю инждой дъ рест ъф йор дей.',
        English: 'I hope you enjoy the rest of your day.'
    },
    {
        Translation: 'Току-що пристигнах на мястото. Не бързайте.',
        Bulgarian:
            'Айв джъст арайвд ат дъ пикъп пойнт. Плийс, тейк йор тайм.',
        English:
            "I've just arrived at the pickup point. Please, take your time."
    },
    {
        Translation:
            'Моля, потвърдете дали това е мястото от където трябва да Ви Взема.',

        Bulgarian:
            'Плийс лет ми ноу иф дис ис дъ райт лоукейшън фор пик ъп.',
        English:
            'Please let me know if this is the right location for pickup.'
    },
    {
        Translation:
            'Това място за слизане удобно ли е за Вас, или предпочитате друго място?',

        Bulgarian:
            'Из дис джроп-оф лоукейшън кънвиниънт фор ю, ор уд ю прифър ъ дифрънт спот?',
        English:
            'Is this drop-off location convenient for you, or would you prefer a different spot?'
    },
    {
        Translation: 'Имате ли нужда от помощ с багажа?',
        Bulgarian: 'Ду ю нийд ени асистънс уит йор лагидж?',
        English: 'Do you need any assistance with your luggage?'
    },
    {
        Translation:
            'Ще спра колата колкото се може по-близо до вашето местоназначение.',
        Bulgarian:
            'Ай уил пул оувър ес клоуз ту йор дестънейшън ес посъбъл.',
        English:
            'I will pull over as close to your destination as possible.'
    },
    {
        Translation:
            'Може ли да потвърдите адреса, който сте предоставили. Просто искам да бъда сигурен, че е правилен.',
        Bulgarian:
            'Кен ю кънфърм ди аджрес ю пръвайдед? Ай джъст уонт ту би шуър итс кърект.',
        English:
            "Can you confirm the address you provided? I just want to be sure it's correct."
    },
    {
        Translation:
            'Ще се опитам да намеря безопасно и удобно място, на което да Ви оставя.',
        Bulgarian:
            'Айл чрай ту файнд ъ сейф анд  кънвиниънт плейс ту джроп ю оф.',
        English:
            "I'll try to find a safe and convenient place to drop you off."
    },
    {
        Translation:
            'Позволете ми да Ви помогна да изнесете вещите си от колата.',
        Bulgarian:
            'Лет ми ассист ю ин тейкинг йор бълонгингс аут ъф дъ кар.',
        English:
            'Let me assist you in taking your belongings out of the car.'
    },
    {
        Translation: 'Желаете ли да променя градусите на климатика?',
        Bulgarian: 'Уд ю лайк ми ту аджуст ди еър-къндишънинг?',
        English: 'Would you like me to adjust the air-conditioning?'
    },
    {
        Translation:
            'Харесва ли Ви музиката или бихте искали да я промяна?',
        Bulgarian:
            'Из дис мюзик окей фор ю ор уд ю лайк ми то чейндж ит?',
        English:
            'Is this music okay for you or would you like me to change it?'
    },
    {
        Translation:
            'В момента следвам GPS, но ако знаете по-добър път, моля напътствайте ме.',
        Bulgarian:
            'Ай ем кърънтли фолоуинг дъ GPS бът иф ю ноу ъ бетър раут, плийс гайд ми.',
        English:
            'I am currently following the GPS but if you know a better route, please guide me.'
    },
    {
        Translation: 'Бихте ли искали да мина по най-бързия път?',
        Bulgarian: 'Уд ю лайк ми то тейк дъ куикест раут?',
        English: 'Would you like me to take the quickest route?'
    },
    {
        Translation:
            'Има задръстване напред, желаете ли да поема по алтернативен маршрут?',
        Bulgarian:
            'Деърс чрафик ахед, уд ю лайк ми то тейк ън алтърнатив раут?',
        English:
            "Threre's traffic ahead, would you like me to take an alternative route?"
    },
    {
        Translation:
            'Да мина ли по прекия път, за да ни спестя време?',
        Bulgarian: 'Шуд ай тейк дъ шорткът ту сейв ъс съм тайм?',
        English: 'Should I take the shortcut to save us some time?'
    },
    {
        Translation: 'Този път обикновено е най-бързият.',
        Bulgarian: 'Дис раут ис южуали дъ фастест.',
        English: 'This route is usually the fastest.'
    },
    {
        Translation:
            'Има пътни ремонти напред, но ще намеря по-добър маршрут, ако е възможно.',
        Bulgarian:
            'Деър ар съм роудуъркс ахед бът айл файнд ъ бетър раут иф посъбъл.',
        English:
            "There are some roadworks ahead, but I'll find a better route if possible."
    },
    {
        Translation:
            'За съжаление, инцидент напред причинява забавяне.',
        Bulgarian:
            'Ънфорчънатли, ън аксидент ъп ахед ис козинг ъ дилей.',
        English:
            'Unfortunately, an accident up ahead is causing a delay.'
    },
    {
        Translation:
            'Преценявам, че ще пристигнем на вашата дестинация след около 20 минути.',
        Bulgarian:
            'Ай естимейт дат уил арайв ат йор дестинейшън ин абаут туенти минитс.',
        English:
            "I estimate that we'll arrive at your destination in about 20 minutes."
    },
    {
        Translation:
            'Пътен полицай ни насочва да поемем по друг маршрут.',
        Bulgarian:
            'Ъ чрафик офисър ис дайректинг ъс ту тейк ъ дифрънт раут.',
        English:
            'A traffic officer is directing us to take a different route.'
    },
    {
        Translation:
            'Моля, не бързайте при излизане, за да избегнете риск от нараняване.',
        Bulgarian:
            'Плийс тейк йор тайм уен егзитинг ту авойд ени риск ъф инджъри.',
        English:
            'Please, take your time when exiting to avoid any risk of injury.'
    },
    {
        Translation:
            'Приложението автоматично ще изчисли цената накрая.',
        Bulgarian:
            'Ди ап уйл аутоматикали калкюлейт ди феър ат ди енд.',
        English:
            'The app will automatically calculate the fare at the end.'
    },
    {
        Translation:
            'Можете да платите в брой, с карта или чрез приложението.',
        Bulgarian: 'Ю кен пей юзинг каш, кард, ор тру ди ап.',
        English: 'You can pay using cash, card, or through the app.'
    },
    {
        Translation: 'Бихте ли искали касова бележка за таксата?',
        Bulgarian: 'Уд ю лайк ъ рисит фор дъ феър?',
        English: 'Would you like a receipt for the fare?'
    },
    {
        Translation: 'Здрасти, аз съм Стефан. А ти?',
        Bulgarian: 'Хай! Ай ем Стивън. Анд ю?',
        English: 'Hi! I am Stephen. And you?'
    },
    {
        Translation: 'Приятно ми е да се запознаем.',
        Bulgarian: 'Найс ту мийт ю.',
        English: 'Nice to meet you.'
    },
    {
        Translation: 'На мен също ми е приятно да се запознаем.',
        Bulgarian: 'Найс ту мийт ю ту.',
        English: 'Nice to meet you too.'
    },
    {
        Translation: 'Откъде сте?',
        Bulgarian: 'Уеър ар ю фром?',
        English: 'Where are you from?'
    },
    {
        Translation: 'Аз съм от София.',
        Bulgarian: 'Ай ем фром Софиа.',
        English: 'I am from Sofia.'
    },
    {
        Translation: 'Какво работите?',
        Bulgarian: 'Уот ду ю ду?',
        English: 'What do you do?'
    },
    {
        Translation:
            'Какво обичате да правите през свободното си време?',
        Bulgarian: 'Уот ду ю лайк ту ду ин йор фрий тайм?',
        English: 'What do you like to do in your free time?'
    },
    {
        Translation: 'Много благодаря!',
        Bulgarian: 'Тенкс соу мъч.',
        English: 'Thanks so much!'
    },
    {
        Translation: 'Извинете ме.',
        Bulgarian: 'Екскюзми.',
        English: 'Excuse me.'
    },
    {
        Translation: 'Съжалявам.',
        Bulgarian: 'Ай ем сори.',
        English: 'I am sorry.'
    },
    {
        Translation: 'Какво мислите?',
        Bulgarian: 'Уот ду ю тинк?',
        English: 'What do you think?'
    },
    {
        Translation: 'Как Ви звучи това?',
        Bulgarian: 'Хау даз дад саунд',
        English: 'How does that sound?'
    },
    {
        Translation: 'Това звучи чудесно.',
        Bulgarian: 'Дат саундс грейт.',
        English: 'That sounds great.'
    },
    {
        Translation: 'Понастоящем уча английски.',
        Bulgarian: 'Ай ем лърнинг Инглиш.',
        English: 'I am learning English.'
    },
    {
        Translation: 'Може ли да повторите това отново?',
        Bulgarian: 'Кудж ю рипийт дат плийс?',
        English: 'Could you repeat that please?'
    },
    {
        Translation: 'Може ли да говорите по-бавно?',
        Bulgarian: 'Кудж ю плийс толк слоуър?',
        English: 'Could you please talk slower?'
    },
    {
        Translation: 'Какво означава това?',
        Bulgarian: 'Уот даз дат мийн?',
        English: 'What does that mean?'
    },
    {
        Translation: 'Какво имате предвид?',
        Bulgarian: 'Уот ду ю мийн?',
        English: 'What do you mean?'
    },
    {
        Translation: 'Колко струва това?',
        Bulgarian: 'Хау мъч даз дис кост?',
        English: 'How much does this cost?'
    },
    {
        Translation: 'Всичко е наред.',
        Bulgarian: 'Датс окей.',
        English: "That's okay."
    },
    {
        Translation: 'Извинете, говорите ли английски?',
        Bulgarian: 'Екскюзми, ду ю спийк Инглиш?',
        English: 'Excuse me, do you speak English?'
    },
    {
        Translation: 'Прибирам се.',
        Bulgarian: 'Айм хеадинг хоум.',
        English: "I'm heading home."
    },
    {
        Translation: 'Имате ли против да пуша?',
        Bulgarian: 'До ю майнд иф Ай смоук?',
        English: 'Do you mind if I smoke?'
    },
    {
        Translation: 'Наистина го оценявам.',
        Bulgarian: 'Ай рийли апрешиейт ит.',
        English: 'I really appreciate it.'
    },
    {
        Translation: 'Това наистина е мило от Ваша страна!',
        Bulgarian: 'Датс рийли найс ъф ю!',
        English: "That's really nice of you!"
    },
    {
        Translation: 'Съжалявам да чуя това.',
        Bulgarian: 'Айм сори ту хиър дат.',
        English: "I'm sorry to hear that."
    },
    {
        Translation: 'Моля, напишете го.',
        Bulgarian: 'Плийс райт ит даун.',
        English: 'Please write it down.'
    },
    {
        Translation: 'Имайте приятен уикенд!',
        Bulgarian: 'Хав ъ гууд уикенд!',
        English: 'Have a good weekend!'
    },
    {
        Translation: 'Не се притеснявайте за това.',
        Bulgarian: 'Донт уори абоут ит.',
        English: "Don't worry about it."
    },
    {
        Translation: 'Добре съм, благодаря. Ами Вие?',
        Bulgarian: 'Айм файн, тенкс. Хау абоут ю?',
        English: "I'm fine, thanks. How about you?"
    },
    {
        Translation: 'Доста добре.',
        Bulgarian: 'Прити гуд.',
        English: 'Pretty good.'
    },
    {
        Translation: 'Не толкова добре.',
        Bulgarian: 'Нот соу гууд.',
        English: 'Not so good.'
    },
    {
        Translation: 'Може да е по-добре.',
        Bulgarian: 'Куд би бетър.',
        English: 'Could be better.'
    },
    {
        Translation: 'Не мога да се оплача.',
        Bulgarian: 'Кант къмплейн.',
        English: "Can't complain."
    },
    {
        Translation: 'Удоволствието е мое.',
        Bulgarian: 'Май плежър.',
        English: 'My pleasure.'
    },
    {
        Translation: 'Трябва да тръгвам.',
        Bulgarian: 'Ай шуд гет гоинг.',
        English: 'I should get going.'
    },
    {
        Translation: 'Нямам идея.',
        Bulgarian: 'Ай хав ноу айдиа.',
        English: 'I have no idea.'
    },
    {
        Translation: 'Не съм наистина сигурен.',
        Bulgarian: 'Ам нот рийли шуър.',
        English: "I'm not really sure."
    },
    {
        Translation: 'Кое време е?',
        Bulgarian: 'Уот тайм из ит?',
        English: 'What time is it?'
    },
    {
        Translation:
            'Времето днес изглежда перфекто за разглеждане на забележителности.',
        Bulgarian: 'Тъдейс уедър сиймс пърфект фор сайтсийнг.',
        English: "Today's wheather seems perfect for sightseeing."
    },
    {
        Translation:
            'Ако се чудите какво да правите, паркът наблизо е доста красив.',
        Bulgarian:
            'Иф ю аре лукинг фор съмтинг ту ду, дъ парк ниърбай ис куайт бютифъл.',
        English:
            'If you are looking for something to do, the park nearby is quite beautiful.'
    },
    {
        Translation:
            'Този квартал е известен с чудесните си ресторанти, планирате ли да опитате някой?',
        Bulgarian:
            'Дис нейбърхуд ис ноун фор итс грейт рестаурантс, ар ю планинг то чрай ени?',
        English:
            'This neighbordhood is known for its great restaurants, are you planning to try any?'
    },
    {
        Translation:
            'Ако се интересувате от тукашни кафенета, има някои добри близо до Вашата дестинация.',
        Bulgarian:
            'Иф ю ар интрестид ин лоукал кофи шопс, деър ар съм гуд уанс ниър йор дестънейшън.',
        English:
            'If you are interested in local coffee shops, there are some good ones near your destination.'
    },
    {
        Translation:
            'Бихте ли искали да Ви препоръчам някакви атракции близо до Вашата дестинация?',
        Bulgarian:
            'Удж ю лайк ми ту рикъменд ени атракшънс араунд йор дестънейшън?',
        English:
            'Would you like me to recommend any attractions around your destination?'
    },
    {
        Translation:
            'Тази предстояща улица е известна с магазините си и си заслужава да я посетите, ако имате време.',
        Bulgarian:
            'Дис ъпкъминг стрийт ис феймъс фор итс шопинг, уърф ъ визит иф ю хав тайм.',
        English:
            'This upcoming street is famous for its shopping, worth a visit if you have time.'
    },
    {
        Translation: 'Може ли да ме закарате?',
        Bulgarian: 'Кен ай гет ъ райд?',
        English: 'Can I get a ride?'
    },
    {
        Translation: 'Колко човека може да поберете?',
        Bulgarian: 'Хау мени пийпъл кен ю фит?',
        English: 'How many people can you fit?'
    },
    {
        Translation: 'Колко време ще отнеме?',
        Bulgarian: 'Хау лонг уил ит тейк?',
        English: 'How long will it take?'
    },
    {
        Translation: 'Моля, изчакайте ме.',
        Bulgarian: 'Плийс уейт фор ми.',
        English: 'Please wait for me.'
    },
    {
        Translation: 'Може да оставите апарата да работи.',
        Bulgarian: 'Ю кен кийп дъ митър рънинг.',
        English: 'You can keep the meter running.'
    },
    {
        Translation: 'Имате ли фиксирана цена до летището?',
        Bulgarian: 'Ду ю хав ъ флат фий ту ди еърпорт?',
        English: 'Do you have a flat fee to the airport?'
    },
    {
        Translation: 'Малко бързам.',
        Bulgarian: 'Айм ин ъ бит ъф ъ ръш.',
        English: "I'm in a bit of a rush."
    },
    {
        Translation: 'Може ли да стигнем там до 10 часа?',
        Bulgarian: 'Кен уи гет деър бай тен ъклок?',
        English: "Can we get there by 10 o'clock?"
    },
    {
        Translation: 'Може ли да намалите, моля?',
        Bulgarian: 'Кудж ю слоу даун, плийс?',
        English: 'Could you slow down, please?'
    },
    {
        Translation: 'Това най-бързият път ли е?',
        Bulgarian: 'Из дис дъ куикест уей?',
        English: 'Is this the quickest way?'
    },
    {
        Translation: 'Приемате ли кредитни карти?',
        Bulgarian: 'Ду ю тейк кредит кардс?',
        English: 'Do you take credit cards?'
    },
    {
        Translation: 'Имате ли дребни?',
        Bulgarian: 'Ду ю хав чейндж?',
        English: 'Do you have change?'
    },
    {
        Translation: 'Запазете рестото.',
        Bulgarian: 'Кийп дъ чейндж?',
        English: 'Keep the change.'
    },
    {
        Translation: 'Благодаря за превоза.',
        Bulgarian: 'Тенкс фор дъ райд.',
        English: 'Thanks for the ride.'
    },
    {
        Translation: 'Благодаря за превоза.',
        Bulgarian: 'Тенкс фор дъ лифт.',
        English: 'Thanks for the lift.'
    }
];

const sentences = phrases.map(obj => obj.English);
// console.log(sentences);
const allWords = [];

for (const sentence of sentences) {
    let words = sentence.split(' ');

    words.forEach(word => {
        word = word.replace('?', '');
        word = word.replace('!', '');
        word = word.replace('.', '');
        word = word.replace(',', '');

        allWords.push(word);
    });
}

// console.log(allWords);

const uniqueWords = new Set(allWords);
console.log(uniqueWords);

const wordsDictionary = {};
uniqueWords.forEach(word => {
    if (isNaN(Number(word))) {
        wordsDictionary[word.toLowerCase()] = '';
    }
});

console.log(wordsDictionary);

const dictionary = {
    good: 'добре',
    morning: 'сутрин',
    afternoon: 'следобед',
    evening: 'вечер',
    how: 'как',
    are: 'си/сме/сте/са',
    you: 'ти',
    today: 'днес',
    i: 'аз',
    can: 'мога',
    take: 'вземам',
    passengers: 'пътници',
    where: 'къде',
    going: 'текущо време на глогола отивам',
    "don't": "съкратена форма на 'do not'",
    know: 'знам',
    that: 'това/онова',
    place: 'място',
    do: 'правя',
    have: 'имам',
    a: "неопределителен член -> 'I saw a cat.(Видях котка.)'",
    map: 'карта',
    show: 'показвам',
    me: 'ми/ме',
    on: 'на/върху',
    this: 'това',
    in: 'във',
    hurry: 'бързам',
    it: 'то',
    is: 'е',
    very: 'много',
    close: 'близо',
    pretty: 'доста/красиво',
    far: 'далеч',
    away: 'далеч',
    will: 'ще',
    about: 'за',
    minutes: 'минути',
    takes: 'взема/отнема',
    one: 'едно',
    hour: 'час',
    to: 'към',
    go: 'отивам',
    there: 'там',
    for: 'за',
    'out-of-town': 'извън града',
    trips: 'пътуване',
    vignette: 'винетка',
    fee: 'такса',
    required: 'задължителен',
    speak: 'говоря',
    slowly: 'бавно',
    please: 'моля',
    sorry: 'съжалявам',
    understand: 'разбирам',
    yes: 'да',
    "i'll": "съкратена форма на 'I will' (Аз ще)",
    put: 'слагам',
    your: 'твоят/твое/твоята/твоето',
    luggage: 'багаж',
    the: "определителен член -> 'I saw the cat to ruin the curtains.(Видях котката да съсипва пердетата.)'",
    trunk: 'багажник',
    seat: 'седалка',
    belt: 'колан',
    okay: 'добре',
    if: 'ако',
    open: 'отворен/отворена/отворено/отворени',
    window: 'прозорец',
    'air-conditioning': 'климатик',
    eat: 'ям',
    car: 'кола',
    no: 'не',
    smoking: 'пушене',
    want: 'искам',
    wait: 'чакам',
    charge: 'зареждам',
    "it's": "съкратена форма на 'it is' (то е)",
    rush: 'бързам/бързо',
    traffic: 'трафик',
    bad: 'лошо',
    over: 'по/през/за',
    "we'll": "съкратена форма на 'we will' (ние ще)",
    get: 'вземам',
    faster: 'по-бързо',
    we: 'ние',
    from: 'от',
    here: 'тук',
    think: 'мисля',
    "there's": "съкратена форма на 'there is' (там има)",
    been: 'минало време на глагола съм',
    an: 'неопределителен член за думи започващи с гласна',
    accident: 'инцидент',
    try: 'опитвам',
    different: 'различен',
    way: 'начин/път',
    total: 'общо',
    price: 'цема',
    thank: 'резеовоар',
    tip: 'багшиш',
    smaller: 'по-малък',
    notes: 'банкноти',
    any: 'някой/някакъв',
    change: 'ресто',
    forget: 'забравям',
    things: 'неща',
    nice: 'приятно',
    chatting: 'бъбря',
    with: 'със',
    enjoy: 'забавлявам се',
    stay: 'оставам/стоя',
    "you're": "съкратена форма на 'you are' (ти си)",
    welcome: 'моля/добре дошъл',
    "can't": "съкратена форма на 'cannot' (немога)",
    would: 'бих',
    come: 'идвам',
    back: 'отзад/назад',
    without: 'без',
    fare: 'такса',
    before: 'преди',
    like: 'харесвам',
    business: 'бизнес',
    staying: 'сегашно продължително време на глагола стоя',
    long: 'дълъг/дълга/дълго/дълги',
    day: 'ден',
    too: 'също',
    hope: 'надявам се',
    doing: 'сегашно продължително време на глагола правя',
    well: 'добре',
    does: 'правя (He does/Той прави; She does/Тя прави; It does/То прави)',
    city: 'град',
    compare: 'сравнявам',
    home: 'вкъщи',
    town: 'град',
    tried: 'опитах',
    local: 'тукашен',
    dishes: 'ястия',
    yet: 'все още',
    enjoying: 'забавлявайки',
    time: 'време',
    so: 'така/толкова',
    rest: 'останал/останала/останало',
    of: 'на (принадлежи на)',
    "i've": "съкратена форма на 'I have' (Аз имам)",
    just: 'точно',
    arrived: 'пристигнах',
    at: 'на (на летището)',
    pickup: 'място за вземане (pickup location)',
    point: 'точка',
    let: 'нека',
    right: 'дясно/прав/права/право/прави',
    location: 'локация',
    'drop-off': 'оставям',
    convenient: 'удобно',
    or: 'или',
    prefer: 'предпочитам',
    spot: 'място',
    need: 'нужда',
    assistance: 'съдействие',
    pull: 'дърпам',
    as: 'като',
    destination: 'дестинация',
    possible: 'възможно',
    confirm: 'потвърждавам',
    address: 'адрес',
    provided: 'предоставен',
    be: 'глагола съм',
    sure: 'сигурен/разбира се',
    correct: 'правилен',
    find: 'намирам',
    safe: 'безопасен',
    and: 'и',
    assist: 'помагам',
    taking: 'вземайки',
    belongings: 'принадлежности',
    out: 'навън',
    adjust: 'нагласям',
    music: 'музика',
    am: "съм (за първо лице 'I am' -> Аз съм)",
    currently: 'в момента',
    following: 'следвайки',
    but: 'но',
    better: 'по-добре',
    route: 'маршрут',
    guide: 'напътствам/напътствие',
    quickest: 'най-бързият',
    "threre's": "съкратена форма на 'there is' (там има)",
    ahead: 'напред',
    alternative: 'алтернативен',
    should: 'трябва',
    shortcut: 'пряк път',
    save: 'запазвам',
    us: 'нас/ни',
    some: 'някакъв/няколко/малко',
    usually: 'оникновено',
    fastest: 'най-бързият',
    roadworks: 'пътни строежи/ремонти',
    unfortunately: 'за нещастие',
    up: 'нагоре',
    causing: 'причиняващ/причинявайки',
    delay: 'закъснение',
    estimate: 'преценявам',
    arrive: 'пристигам',
    officer: 'полицай',
    directing: 'насочвам в посока',
    when: 'когато',
    exiting: 'излизайки',
    avoid: 'избягвам',
    risk: 'риск',
    injury: 'нараняване',
    app: 'приложение',
    automatically: 'автоматично',
    calculate: 'калкулирам',
    end: 'край',
    pay: 'плащам',
    using: 'използвайки',
    cash: 'в брой',
    card: 'карта',
    through: 'през',
    receipt: 'касова бележка',
    hi: 'здрасти',
    meet: 'срещам',
    what: 'какво',
    free: 'безплатно',
    thanks: 'благодаря',
    much: 'много',
    excuse: 'извинете',
    sound: 'звук',
    sounds: 'звуча',
    great: 'чудесно',
    learning: 'учейки',
    could: 'могъл/могли/могла',
    repeat: 'повтарям',
    talk: 'говоря',
    slower: 'по-бавно',
    mean: 'имам предвид',
    cost: 'разход/цена',
    "that's": "съкратена форма на 'that is' (това е)",
    "i'm": "съкратена форма на 'I am' (Аз съм)",
    heading: 'посока/направление',
    mind: 'мнение/ум',
    smoke: 'пуша',
    really: 'наистина',
    appreciate: 'оценявам',
    hear: 'чувам',
    write: 'пиша',
    down: 'долу',
    weekend: 'уикенд',
    worry: 'тревожа се',
    fine: 'добре',
    not: 'не',
    complain: 'оплаквам се',
    my: 'моят',
    pleasure: 'удоволствие',
    idea: 'идея',
    drop: 'падам'
};

const finalDict = { ...wordsDictionary, ...dictionary };

console.log(finalDict);

const dict = {
    good: 'добре',
    morning: 'сутрин',
    afternoon: 'следобед',
    evening: 'вечер',
    how: 'как',
    are: 'си/сме/сте/са',
    you: 'ти',
    today: 'днес',
    i: 'аз',
    can: 'мога',
    take: 'вземам',
    passengers: 'пътници',
    where: 'къде',
    going: 'текущо време на глогола отивам',
    "don't": "съкратена форма на 'do not'",
    know: 'знам',
    that: 'това/онова',
    place: 'място',
    do: 'правя',
    have: 'имам',
    a: "неопределителен член -> 'I saw a cat.(Видях котка.)'",
    map: 'карта',
    show: 'показвам',
    me: 'ми/ме',
    on: 'на/върху',
    this: 'това',
    in: 'във',
    hurry: 'бързам',
    it: 'то',
    is: 'е',
    very: 'много',
    close: 'близо',
    pretty: 'доста/красиво',
    far: 'далеч',
    away: 'далеч',
    will: 'ще',
    about: 'за',
    minutes: 'минути',
    takes: 'взема/отнема',
    one: 'едно',
    hour: 'час',
    to: 'към',
    go: 'отивам',
    there: 'там',
    for: 'за',
    'out-of-town': 'извън града',
    trips: 'пътуване',
    vignette: 'винетка',
    fee: 'такса',
    required: 'задължителен',
    speak: 'говоря',
    slowly: 'бавно',
    please: 'моля',
    sorry: 'съжалявам',
    understand: 'разбирам',
    yes: 'да',
    "i'll": "съкратена форма на 'I will' (Аз ще)",
    put: 'слагам',
    your: 'твоят/твое/твоята/твоето',
    luggage: 'багаж',
    the: "определителен член -> 'I saw the cat to ruin the curtains.(Видях котката да съсипва пердетата.)'",
    trunk: 'багажник',
    seat: 'седалка',
    belt: 'колан',
    okay: 'добре',
    if: 'ако',
    open: 'отворен/отворена/отворено/отворени',
    window: 'прозорец',
    'air-conditioning': 'климатик',
    eat: 'ям',
    car: 'кола',
    no: 'не',
    smoking: 'пушене',
    want: 'искам',
    wait: 'чакам',
    charge: 'зареждам',
    "it's": "съкратена форма на 'it is' (то е)",
    rush: 'бързам/бързо',
    traffic: 'трафик',
    bad: 'лошо',
    over: 'по/през/за',
    "we'll": "съкратена форма на 'we will' (ние ще)",
    get: 'вземам',
    faster: 'по-бързо',
    we: 'ние',
    from: 'от',
    here: 'тук',
    think: 'мисля',
    "there's": "съкратена форма на 'there is' (там има)",
    been: 'минало време на глагола съм',
    an: 'неопределителен член за думи започващи с гласна',
    accident: 'инцидент',
    try: 'опитвам',
    different: 'различен',
    way: 'начин/път',
    total: 'общо',
    price: 'цема',
    thank: 'резеовоар',
    tip: 'багшиш',
    smaller: 'по-малък',
    notes: 'банкноти',
    any: 'някой/някакъв',
    change: 'ресто',
    forget: 'забравям',
    things: 'неща',
    nice: 'приятно',
    chatting: 'бъбря',
    with: 'със',
    enjoy: 'забавлявам се',
    stay: 'оставам/стоя',
    "you're": "съкратена форма на 'you are' (ти си)",
    welcome: 'моля/добре дошъл',
    "can't": "съкратена форма на 'cannot' (немога)",
    would: 'бих',
    come: 'идвам',
    back: 'отзад/назад',
    without: 'без',
    fare: 'такса',
    before: 'преди',
    like: 'харесвам',
    business: 'бизнес',
    staying: 'сегашно продължително време на глагола стоя',
    long: 'дълъг/дълга/дълго/дълги',
    day: 'ден',
    too: 'също',
    hope: 'надявам се',
    doing: 'сегашно продължително време на глагола правя',
    well: 'добре',
    does: 'правя (He does/Той прави; She does/Тя прави; It does/То прави)',
    city: 'град',
    compare: 'сравнявам',
    home: 'вкъщи',
    town: 'град',
    tried: 'опитах',
    local: 'тукашен',
    dishes: 'ястия',
    yet: 'все още',
    enjoying: 'забавлявайки',
    time: 'време',
    so: 'така/толкова',
    rest: 'останал/останала/останало',
    of: 'на (принадлежи на)',
    "i've": "съкратена форма на 'I have' (Аз имам)",
    just: 'точно',
    arrived: 'пристигнах',
    at: 'на (на летището)',
    pickup: 'място за вземане (pickup location)',
    point: 'точка',
    let: 'нека',
    right: 'дясно/прав/права/право/прави',
    location: 'локация',
    'drop-off': 'оставям',
    convenient: 'удобно',
    or: 'или',
    prefer: 'предпочитам',
    spot: 'място',
    need: 'нужда',
    assistance: 'съдействие',
    pull: 'дърпам',
    as: 'като',
    destination: 'дестинация',
    possible: 'възможно',
    confirm: 'потвърждавам',
    address: 'адрес',
    provided: 'предоставен',
    be: 'глагола съм',
    sure: 'сигурен/разбира се',
    correct: 'правилен',
    find: 'намирам',
    safe: 'безопасен',
    and: 'и',
    drop: 'падам',
    assist: 'помагам',
    taking: 'вземайки',
    belongings: 'принадлежности',
    out: 'навън',
    adjust: 'нагласям',
    music: 'музика',
    am: "съм (за първо лице 'I am' -> Аз съм)",
    currently: 'в момента',
    following: 'следвайки',
    but: 'но',
    better: 'по-добре',
    route: 'маршрут',
    guide: 'напътствам/напътствие',
    quickest: 'най-бързият',
    "threre's": "съкратена форма на 'there is' (там има)",
    ahead: 'напред',
    alternative: 'алтернативен',
    should: 'трябва',
    shortcut: 'пряк път',
    save: 'запазвам',
    us: 'нас/ни',
    some: 'някакъв/няколко/малко',
    usually: 'оникновено',
    fastest: 'най-бързият',
    roadworks: 'пътни строежи/ремонти',
    unfortunately: 'за нещастие',
    up: 'нагоре',
    causing: 'причиняващ/причинявайки',
    delay: 'закъснение',
    estimate: 'преценявам',
    arrive: 'пристигам',
    officer: 'полицай',
    directing: 'насочвам в посока',
    when: 'когато',
    exiting: 'излизайки',
    avoid: 'избягвам',
    risk: 'риск',
    injury: 'нараняване',
    app: 'приложение',
    automatically: 'автоматично',
    calculate: 'калкулирам',
    end: 'край',
    pay: 'плащам',
    using: 'използвайки',
    cash: 'в брой',
    card: 'карта',
    through: 'през',
    receipt: 'касова бележка',
    hi: 'здрасти',
    meet: 'срещам',
    what: 'какво',
    free: 'безплатно',
    thanks: 'благодаря',
    much: 'много',
    excuse: 'извинете',
    sound: 'звук',
    sounds: 'звуча',
    great: 'чудесно',
    learning: 'учейки',
    could: 'могъл/могли/могла',
    repeat: 'повтарям',
    talk: 'говоря',
    slower: 'по-бавно',
    mean: 'имам предвид',
    cost: 'разход/цена',
    "that's": "съкратена форма на 'that is' (това е)",
    "i'm": "съкратена форма на 'I am' (Аз съм)",
    heading: 'посока/направление',
    mind: 'мнение/ум',
    smoke: 'пуша',
    really: 'наистина',
    appreciate: 'оценявам',
    hear: 'чувам',
    write: 'пиша',
    down: 'долу',
    weekend: 'уикенд',
    worry: 'тревожа се',
    fine: 'добре',
    not: 'не',
    complain: 'оплаквам се',
    my: 'моят',
    pleasure: 'удоволствие',
    idea: 'идея',
    "today's": 'днешното (today -> днес, `s -> на; поставяйки апостроф след съществително оказваме принадлежност)',
    wheather: 'време (от синоптична гледна точка)',
    seems: 'изглежда',
    perfect: 'перфектно',
    sightseeing: 'забележителности',
    looking: 'изглеждайки',
    something: 'нещо',
    park: 'парк',
    nearby: 'наблизо',
    quite: 'доста',
    beautiful: 'красив/красива/красиво',
    neighbordhood: 'квартал',
    known: 'познат (минало време на глагола зная)',
    its: 'негово',
    restaurants: 'ресторанти',
    planning: 'планирайки',
    interested: 'заинтересован',
    coffee: 'кафе',
    shops: 'магазин',
    ones: 'такива',
    near: 'близо',
    recommend: 'препоръчвам',
    attractions: 'атракции',
    around: 'наоколо',
    upcoming: 'предстоящ',
    street: 'улица',
    famous: 'известен',
    shopping: 'пазаруване',
    worth: 'струвам/струва/струват',
    visit: 'посещавам',
    ride: 'карам',
    many: 'много',
    people: 'хора',
    fit: 'побирам се',
    keep: 'пазя',
    meter: 'метър/апарат',
    running: 'тичайки/работейки',
    flat: 'плосък',
    airport: 'летище',
    bit: 'малко',
    by: 'чрез, покрай',
    "o'clock": 'час (At 10 o`clock -> В 10 часа.)',
    slow: 'бавно',
    lift: 'превоз'
  }
