![Превью](assets/docs/elements/input-select/img/default.png)

# Превью в Figma

[Ссылка](https://www.figma.com/file/JRV5n4jR2VxeM59A3BZPZl/%F0%9F%A4%96-MYRTA-UI-Kit-%7C-%D0%9C%D0%A4%D0%93%D0%9F?type=design&node-id=17279%3A28280&mode=design&t=AT4oADiHCSRe2AIg-1)

# Варианты

| Свойство | Значения |
| --- | --- |
| type | type = 'variant’<br>default, multi-long, multi-short |
| state | type = 'variant’<br>default, hover, focused, invalid, filled, not-filled, placeholder, disabled, readonly |
| checkinvalid | type = 'variant’<br>true, false, null |
| size | type = 'variant’<br>large, medium |
| show input value | type = 'boolean’ |
| input value | type = 'text’ |
| if state = invalid Invalid message text | type = 'text’ |

# Использование

Выпадающий список используется для выбора значения в форме из заранее определенных вариантов.

Мультиселект позволяет выбрать несколько значений в форме. Выбранные элементы могут дублироваться вверху списка.

# Описание работы

## Плейсхолдер

По умолчанию используется текст плейсхолдера — **Выберите значение**

Плейсхолдер исчезает сразу же после того, как поле оказывается в фокусе.

Цвет плейсхолдера — **@neutral-text-tertiary**. При вводе текстового значения, цвет текста имеет значение **@neutral-text-primary**.

### Плейсхолдер

![Плейсхолдер](assets/docs/elements/input-select/img/placeholder.png)

### При вводе текстового значения

![При вводе текстового значения](assets/docs/elements/input-select/img/default.png)


Используйте плейсхолдер, чтобы показать пример заполнения данных. Например, пример ввода email. 

Плейсхолдер **не должен**:

1. Содержать подсказки, т.к. когда пользователь начнет вводить значение, подсказка исчезнет.
2. Показывать конкретное значение.
3. Дублировать текст заголовка поля.
4. Использоваться для указания названия полей вместо заголовка поля. Помещать название поля в плейсхолдер можно в исключительных случаях: когда нужно сэкономить место, или предназначение поля очевидно.

## Варианты селектов

### Селект

- Для выбора одного варианта из списка

![Селект](assets/docs/elements/input-select/img/default.png)

### Длинный мультиселект

Позволяет выбрать несколько значений в форме из заранее определенных вариантов

![Длинный мультиселект](assets/docs/elements/input-select/img/multi-long.png)

### Короткий мультиселект

- Позволяет выбрать несколько значений в форме из заранее определенных вариантов
- Используется в местах, которые не позволяют использовать полную версию

![Короткий мультиселект](assets/docs/elements/input-select/img/multi-short.png)

## Длинный мультиселект с поиском значений и очисткой поля

- с поиском значений
- выбранные значения подтягиваются наверх списка

### Начальное состояние

![Начальное состояние](assets/docs/elements/input-select/img/multi-long-placeholder.png)

### Выбор значения (ничего не введено)

- после выбора значения список сворачивается
- при наведении пункт списка подсвечивается цветом **@bg-tertiary-hover**

![Выбор значения](assets/docs/elements/input-select/img/multi-long-selection.png)

### Ввод текста

- после выбора значения список сворачивается
- при наведении пункт списка подсвечивается цветом **@bg-tertiary-hover**

![Ввод текста](assets/docs/elements/input-select/img/multi-long-text-input.png)

### Значение выбрано

- при нажатии на крестик значение очищается

![Значение выбрано](assets/docs/elements/input-select/img/multi-long-value-selected.png)

### Повторное нажатие на строку

- после выбора значения список сворачивается
- при наведении пункт списка подсвечивается цветом @**bg-tertiary-hover**
- выбранные значения отображаются наверху
- при нажатии на выбранное значения, оно удаляется

![Повторное нажатие на строку](assets/docs/elements/input-select/img/multi-long-repeated.png)

### Нет совпадений

![Нет совпадений](assets/docs/elements/input-select/img/multi-long-no-matches.png)

### Более одного значения выбрано

![Более одного значения выбрано](assets/docs/elements/input-select/img/multi-long-many-meanings.png)

## Короткий мультиселект с поиском значений и очисткой поля

- используется в местах, которые не позволяют использовать полную версию
- выбранные значения подтягиваются наверх списка

### Начальное состояние

![Начальное состояние](assets/docs/elements/input-select/img/multi-short-placeholder.png)

### Выбор значения 
(ничего не введено)

- после выбора значения список сворачивается
- при наведении пункт списка подсвечивается цветом **@bg-tertiary-hover**

![Выбор значения](assets/docs/elements/input-select/img/multi-short-selection.png)

### Ввод текста

![Ввод текста](assets/docs/elements/input-select/img/multi-short-text-input.png)

### Значение выбрано

- при нажатии на крестик значение очищается

![Значение выбрано](assets/docs/elements/input-select/img/multi-short-value-selected.png)

### Повторное нажатие на строку

- после выбора значения список сворачивается
- при наведении пункт списка подсвечивается цветом **@bg-tertiary-hover**
- выбранные значения отображаются наверху
- при нажатии на выбранное значения, оно удаляется

![Повторное нажатие на строку](assets/docs/elements/input-select/img/multi-short-repeated.png)

### Нет совпадений

![Нет совпадений](assets/docs/elements/input-select/img/multi-short-no-matches.png)

### Более одного значения выбрано

![Более одного значения выбрано](assets/docs/elements/input-select/img/multi-short-many-meanings.png)

# Заголовок поля

Работа подробно описана на странице [Заголовок поля]().

- Пишется с большой буквы
- Должно быть именем существительным, которое точно и кратко информирует пользователя о значении, которое оно запрашивает. Если необходимы дополнительные пояснения или требования к заполнению, они должны размещаться в подсказке.
- **Не используйте** двоеточие после названия, это вызывает лишний визуальный шум.
- **Не используйте** лишние слова «Ваш», «Введите», «Выберите» и др. в тестовых формах, это только усложняет их.
- Использовать наименование поля в виде призыва к действию уместно только в том случае, когда не является частью формы и размещено одно на странице. Это связано с тем, что нет окружающего контекста, и использование имени существительного может привести к путанице.
- Общие слова несколь­ких свя­зан­ных по смыслу элементов стоит выне­сти за скобку — в заго­ло­вок группы, всей формы или на кнопку.

# Фокус и работа с клавиатурой

> 📢 Раздел будет дополнен

# Размер и расположение

Поля могут быть двух разных размеров. 

| large | @sizing-12 |
| --- | --- |
| medium | @sizing-10 |

Наиболее часто используется размер large, т.к. он имеет оптимальный размер для применения в текстовых формах. Medium применяется крайне редко в тех местах где мало места для применения размера large, например, фильтр в кастомных таблицах.

## Ширина поля

- Зависит от вида принимаемых данных. Например, поле для фамилии будет короче, чем поле для ввода названия проекта.
- Определяется сеткой контейнера, в которых они находятся. Ширина не может быть произвольной.
- В рамках одной формы нужно выбрать 3-4 ширины для полей. Так форма выглядит проще и аккуратнее.

# Валидация

Если при валидации возникла ошибка, обводка поля изменяется на красную. Под полем появляется текст ошибки.

![Валидация](assets/docs/elements/input-select/img/invalid.png)

Важно проверять ввод только после того, как пользователь закончит взаимодействие с полем или при отправке формы. Подсвечивать поле красным до того, как пользователь начнет взаимодействовать с ним категорически неправильно. 

## Текст ошибок

Для стандартизации системы важно использовать одинаковый текст для одинаковых типов проверок

| Проверка | Текст |
| --- | --- |
| Если обязательное поле не заполнено | Поле обязательно для заполнения |
| Если введенное значение не соответствует формату поля | Некорректный формат |
| Системная ошибка | Произошел сбой, повторите попытку |

## Проверка обязательных полей

В формах с большим количеством полей присутствует кнопка проверки заполненности, которая подсвечивает заполненные или незаполненные поля. Если обязательное поле не заполнено, она окрашивается в красный цвет, если заполнено — в зеленый. 

### Обязательное поле не заполнено

![Обязательное поле не заполнено](assets/docs/elements/input-select/img/not-filled.png)

### Обязательное поле заполнено

![Обязательное поле заполнено](assets/docs/elements/input-select/img/filled.png)

# Анимация

> 📢 Раздел будет дополнен

# Ссылки на связанные компоненты

[Заголовок поля]()