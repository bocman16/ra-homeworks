"use strict";


/* Метод возвращает массив из 7 нарастающих дат, начиная со startDate */
const getWeekDates = startDate => {
  const dateArray = [];
  let currentDate = new Date(startDate.getTime());
  for (let i = 0; i < 7; i++) {
    dateArray.push(new Date(currentDate.getTime()));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateArray;
};

const getAllTr = needDate => {
  let startDate = new Date(needDate.date.getTime());
  startDate.setDate(1);

  /* Встаем на понедельник возможно предыдущего месяца */

  if (startDate.getDay() === 0) {
    startDate.setDate(startDate.getDate() - 7 + 1);
  } else {
    startDate.setDate(startDate.getDate() - startDate.getDay() + 1);
  }
  return startDate;
};


const GetTd = ({ someDate, needDate }) => {
  let needClass;
  if (needDate.date.getMonth() !== someDate.getMonth()) {
    needClass = "ui-datepicker-other-month";
  } else if (needDate.date.getDate() === someDate.getDate()) {
    needClass = "ui-datepicker-today";
  }

//  return needClass;
//console.log(needClass,someDate.getDate())
  return <td className={needClass}>{someDate.getDate()}</td>;
};


const Calendar = date => {
  const dateRus = date.date.toLocaleString("ru", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const month = date.date.toLocaleString("ru", { month: "long" });
  const dateArry = dateRus.split(" ");

  const startDate = getAllTr(date);
 // const needClass;
  const arr = [];

  do {
    arr.push(
      <tr key={startDate}>
        {getWeekDates(startDate).map(someDate => (

         // <td className={needClass}>{someDate.getDate()}</td>

         <GetTd key={someDate} someDate={someDate} needDate={date} />

        ))}
      </tr>
    );

    startDate.setDate(startDate.getDate() + 7);
  } while (startDate.getMonth() === date.date.getMonth());

  const calendares = (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">
          {dateArry[0].slice(0, -1)}
        </div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{dateArry[1]}</div>
          <div className="ui-datepicker-material-month">{dateArry[2]}</div>
          <div className="ui-datepicker-material-year">{dateArry[3]}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month}</span>&nbsp;
          <span className="ui-datepicker-year">{dateArry[1]}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">
              Пн
            </th>
            <th scope="col/" title="Вторник">
              Вт
            </th>
            <th scope="col/" title="Среда">
              Ср
            </th>
            <th scope="col/" title="Четверг">
              Чт
            </th>
            <th scope="col/" title="Пятница">
              Пт
            </th>
            <th scope="col/" title="Суббота">
              Сб
            </th>
            <th scope="col/" title="Воскресенье">
              Вс
            </th>
          </tr>
        </thead>
        <tbody>{arr}</tbody>
      </table>
    </div>
  );
  return calendares;
};
