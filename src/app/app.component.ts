import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

const QUESTION_BLOCKS = [
  {
    question: '1)	Как бы вы изучали научную статью',
    answers: [
      {
        text: 'Прочитать',
        value: '1',
      },
      {
        text: 'Посмотреть показательные графики по исследованиям',
        value: '2',
      },
      {
        text: 'Прочитать текст, сопоставив его с графиками',
        value: '3',
      },
    ]
  },
  {
    question: '2)	Какой из представленных типов постов вам больше понравилось бы изучать?',
    answers: [
      {
        text: 'Только с наличием текста',
        value: '1',
      },
      {
        text: 'Только с наличием (инфо-)графического содержания',
        value: '2',
      },
      {
        text: 'С наличием и текста, и (инфо-)графики',
        value: '3',
      },
    ]
  },
  {
    question: '3)	Какой объём изучаемой информации для вас является предпочтительным?',
    answers: [
      {
        text: 'Тезисы',
        value: '1',
      },
      {
        text: 'Необходимая и достаточная информация',
        value: '2',
      },
      {
        text: 'Объемлющая информация с дополнительными интересными фактами',
        value: '3',
      },
    ]
  },
  {
    question: '4)	Если перед вами встанет задача изучения статьи, какой объём вы бы предпочли?',
    answers: [
      {
        text: '1 страницы',
        value: '1',
      },
      {
        text: '3-5 страниц',
        value: '2',
      },
      {
        text: 'От 5 страниц и более',
        value: '3',
      },
    ]
  },
  {
    question: '5)	Какой объём текста при изучении информации для вас является предпочтительным?',
    answers: [
      {
        text: 'Не люблю читать',
        value: '1',
      },
      {
        text: 'Тезисы',
        value: '2',
      },
      {
        text: 'Пару страниц текста',
        value: '3',
      },
      {
        text: 'несколько статей',
        value: '4',
      },
    ]
  },
  {
    question: '6)	Какой объём графической составляющей при изучении информации для вас является предпочтительным?',
    answers: [
      {
        text: 'Не рассматриваю графики и иллюстрации',
        value: '1',
      },
      {
        text: 'Одного показательного графика будет достаточно',
        value: '2',
      },
      {
        text: 'Каждая текстовая часть должна сопровождаться графиком',
        value: '3',
      },
      {
        text: 'Смотрю только на графики и иллюстрации',
        value: '4',
      },
    ]
  },
  {
    question: '7)	Какой объём текстографической составляющей при изучении информации для вас является предпочтительным?',
    answers: [
      {
        text: 'Не люблю смесь графиков и текста',
        value: '1',
      },
      {
        text: 'Интересно изучить текстовое оформление на 1 графике',
        value: '2',
      },
      {
        text: 'Большая текста должна быть представлена на графиках',
        value: '3',
      },
      {
        text: 'Изучаю только по сложным графикам, содержащим много текста',
        value: '4',
      },
    ]
  },
  {
    question: '8)	Какой объём числовой составляющей при изучении информации для вас является предпочтительным?',
    answers: [
      {
        text: 'Изучаю только качественную информацию',
        value: '1',
      },
      {
        text: 'Небольшое количество цифр в тексте',
        value: '2',
      },
      {
        text: 'Изучаю некоторые вопросы по численным показателям',
        value: '3',
      },
      {
        text: 'Смотрю только на цифры, ведь они несут максимум сути',
        value: '4',
      },
    ]
  },
  {
    question: '9)	Какой объём качественной составляющей при изучении информации для вас является предпочтительным?',
    answers: [
      {
        text: 'Изучаю только количественную информацию',
        value: '1',
      },
      {
        text: 'Интересно изучать выводы',
        value: '2',
      },
      {
        text: 'Немного читаю и изучаю выводы',
        value: '3',
      },
      {
        text: 'Анализирую всю представленную информацию, после чего сравниваю свою точку зрения с выводами',
        value: '4',
      },
    ]
  },
  {
    question: '10) Нравится ли вам изучать одну и ту же интересующую информацию в разных типах представления (например, сначала читать текстом, а потом смотреть графики)',
    answers: [
      {
        text: 'Да',
        value: '1',
      },
      {
        text: 'Нет',
        value: '2',
      },
    ]
  },
  {
    question: '11) Нравится ли вам изучать разнотипную информацию?',
    answers: [
      {
        text: 'Нет, лучше, чтобы информация была представлена одним типом',
        value: '1',
      },
      {
        text: 'Нравится, когда одна и та же информация представляется разными типами',
        value: '2',
      },
      {
        text: 'Нравится, когда одна и та же информация может быть представлена по-разному в одном типе',
        value: '3',
      },
      {
        text: 'Нравится, когда одна и та же информация представляется разными типами и может быть представлена по-разному в каждом типе',
        value: '4',
      },
    ]
  },
  {
    question: '12) Нравится ли вам изучать второстепенную информацию?',
    answers: [
      {
        text: 'Да',
        value: '1',
      },
      {
        text: 'Нет, она кажется лишней',
        value: '2',
      },
    ]
  },
  {
    question: '13) Нравится ли вам, когда информация подвергается обобществлению?',
    answers: [
      {
        text: 'Да',
        value: '1',
      },
      {
        text: 'Нет, она может потерять мелкие детали',
        value: '2',
      },
    ]
  },
  {
    question: '14) Хотелось бы вам, чтобы при изучении статей и иных материалов вы бы могли выбирать тип представления информации?',
    answers: [
      {
        text: 'Да',
        value: '1',
      },
      {
        text: 'Нет',
        value: '2',
      },
    ]
  },
  {
    question: '15) Какая информация для вас будет интереснее?',
    answers: [
      {
        text: 'Описывающая интересующую информацию за год',
        value: '1',
      },
      {
        text: 'Описывающая интересующую информацию за несколько месяцев',
        value: '2',
      },
      {
        text: 'Описывающая интересующую информацию за несколько недель',
        value: '3',
      },
      {
        text: 'Описывающая интересующую информацию в данный момент',
        value: '4',
      },
    ]
  },
  {
    question: '16) Нравится ли вам изучать информацию, у которой обозначена динамика во времени?',
    answers: [
      {
        text: 'Нравится изучать глобальные события, у которых есть отголоски в современном мире',
        value: '1',
      },
      {
        text: 'Нравится изучать события, которые не являются свежими, но всё ещё обсуждаются',
        value: '2',
      },
      {
        text: 'Нравится изучать недавние события с проекцией на настоящий момент',
        value: '3',
      },
      {
        text: 'Нет, люблю изучать информацию по конкретной ситуации',
        value: '4',
      },
    ]
  },
  {
    question: '17) Хотелось бы ли вам при изучении интересующей информации рассматривать только основные её аспекты, игнорируя остальное?',
    answers: [
      {
        text: 'Да',
        value: '1',
      },
      {
        text: 'Частично',
        value: '2',
      },
      {
        text: 'Нет',
        value: '3',
      },
    ]
  },
  {
    question: '18) Хотелось бы вам изучать только ту информацию, которая представлена в виде инфографики?',
    answers: [
      {
        text: 'Да',
        value: '1',
      },
      {
        text: 'Частично',
        value: '2',
      },
      {
        text: 'Нет',
        value: '3',
      },
    ]
  },
  {
    question: '19) Какой процент инфографики был бы для вас наиболее подходящим в тексте?',
    answers: [
      {
        text: '70%',
        value: '1',
      },
      {
        text: '30%',
        value: '2',
      },
      {
        text: '0%',
        value: '3',
      },
    ]
  },
  {
    question: '20) Хотелось бы вам перед изучением информации иметь возможность сжать её содержание?',
    answers: [
      {
        text: 'Нет',
        value: '1',
      },
      {
        text: 'Было бы удобно, если бы сжимали наиболее объёмные информационные части',
        value: '2',
      },
      {
        text: 'Да, хотелось бы всегда немного сжимать всю информацию',
        value: '3',
      },
      {
        text: 'Да, было бы удобно вдвое или более сжимать всю информацию',
        value: '4',
      },
    ]
  },
]

const METHODS = [
  {
    name: 'Мозговой штурм',
    params: {
      p1: 1,
      p2: 2,
      p3: 3,
      p4: 1,
      p5: 1,
      p6: 2,
      p7: 4,
      p8: 2,
      p9: 3,
      p10: 1,
      p11: 1,
      p12: 1,
      p13: 4,
      p14: 3,
      p15: 2,
      p16: 3,
    },
    score: 0,
  },
  {
    name: 'Ситуационный-анализ',
    params: {
      p1: 1,
      p2: 2,
      p3: 3,
      p4: 1,
      p5: 1,
      p6: 1,
      p7: 4,
      p8: 1,
      p9: 4,
      p10: 1,
      p11: 1,
      p12: 2,
      p13: 1,
      p14: 2,
      p15: 2,
      p16: 2,
    },
    score: 0,
  },
  {
    name: 'Интент-анализ',
    params: {
      p1: 1,
      p2: 2,
      p3: 3,
      p4: 1,
      p5: 1,
      p6: 2,
      p7: 3,
      p8: 1,
      p9: 4,
      p10: 1,
      p11: 1,
      p12: 1,
      p13: 3,
      p14: 1,
      p15: 2,
      p16: 4,
    },
    score: 0,
  },
  {
    name: 'Контент-анализ',
    params: {
      p1: 1,
      p2: 2,
      p3: 3,
      p4: 1,
      p5: 1,
      p6: 3,
      p7: 2,
      p8: 1,
      p9: 3,
      p10: 2,
      p11: 1,
      p12: 2,
      p13: 2,
      p14: 2,
      p15: 2,
      p16: 4,
    },
    score: 0,
  },
  {
    name: 'Социальный опрос',
    params: {
      p1: 3,
      p2: 1,
      p3: 2,
      p4: 2,
      p5: 2,
      p6: 3,
      p7: 2,
      p8: 1,
      p9: 3,
      p10: 2,
      p11: 1,
      p12: 1,
      p13: 4,
      p14: 1,
      p15: 2,
      p16: 3,
    },
    score: 0,
  },
  {
    name: 'Экспертный опрос',
    params: {
      p1: 3,
      p2: 1,
      p3: 2,
      p4: 2,
      p5: 2,
      p6: 3,
      p7: 2,
      p8: 1,
      p9: 3,
      p10: 2,
      p11: 2,
      p12: 1,
      p13: 4,
      p14: 1,
      p15: 1,
      p16: 3,
    },
    score: 0,
  },
  {
    name: 'SWOT-анализ',
    params: {
      p1: 3,
      p2: 1,
      p3: 2,
      p4: 2,
      p5: 2,
      p6: 1,
      p7: 3,
      p8: 2,
      p9: 1,
      p10: 2,
      p11: 2,
      p12: 2,
      p13: 4,
      p14: 3,
      p15: 3,
      p16: 2,
    },
    score: 0,
  },
  {
    name: 'Моделирование',
    params: {
      p1: 1,
      p2: 3,
      p3: 4,
      p4: 1,
      p5: 1,
      p6: 1,
      p7: 4,
      p8: 1,
      p9: 4,
      p10: 1,
      p11: 1,
      p12: 1,
      p13: 2,
      p14: 3,
      p15: 3,
      p16: 2,
    },
    score: 0,
  },
  {
    name: 'Мониторинг',
    params: {
      p1: 3,
      p2: 2,
      p3: 3,
      p4: 2,
      p5: 2,
      p6: 3,
      p7: 2,
      p8: 1,
      p9: 3,
      p10: 2,
      p11: 1,
      p12: 1,
      p13: 3,
      p14: 1,
      p15: 2,
      p16: 3,
    },
    score: 0,
  },
  {
    name: 'Анализ документов',
    params: {
      p1: 1,
      p2: 2,
      p3: 3,
      p4: 1,
      p5: 1,
      p6: 1,
      p7: 4,
      p8: 1,
      p9: 4,
      p10: 1,
      p11: 1,
      p12: 2,
      p13: 2,
      p14: 2,
      p15: 3,
      p16: 2,
    },
    score: 0,
  },
  {
    name: 'Диаграмма Исикавы',
    params: {
      p1: 2,
      p2: 2,
      p3: 2,
      p4: 3,
      p5: 3,
      p6: 1,
      p7: 4,
      p8: 1,
      p9: 1,
      p10: 2,
      p11: 2,
      p12: 2,
      p13: 4,
      p14: 3,
      p15: 1,
      p16: 1,
    },
    score: 0,
  },
  {
    name: 'Метод экспертных оценок',
    params: {
      p1: 1,
      p2: 1,
      p3: 2,
      p4: 1,
      p5: 1,
      p6: 2,
      p7: 3,
      p8: 1,
      p9: 1,
      p10: 2,
      p11: 2,
      p12: 2,
      p13: 4,
      p14: 1,
      p15: 3,
      p16: 3,
    },
    score: 0,
  },
  {
    name: 'Корреляционный анализ',
    params: {
      p1: 3,
      p2: 3,
      p3: 4,
      p4: 2,
      p5: 2,
      p6: 3,
      p7: 4,
      p8: 1,
      p9: 4,
      p10: 1,
      p11: 1,
      p12: 1,
      p13: 4,
      p14: 1,
      p15: 2,
      p16: 3,
    },
    score: 0,
  },
  {
    name: 'Матрица Геллера',
    params: {
      p1: 3,
      p2: 1,
      p3: 1,
      p4: 2,
      p5: 3,
      p6: 1,
      p7: 3,
      p8: 2,
      p9: 1,
      p10: 2,
      p11: 2,
      p12: 2,
      p13: 4,
      p14: 3,
      p15: 3,
      p16: 1,
    },
    score: 0,
  },
  {
    name: 'Матрица Брайтмана',
    params: {
      p1: 3,
      p2: 1,
      p3: 1,
      p4: 2,
      p5: 1,
      p6: 1,
      p7: 3,
      p8: 2,
      p9: 1,
      p10: 1,
      p11: 1,
      p12: 2,
      p13: 4,
      p14: 2,
      p15: 3,
      p16: 2,
    },
    score: 0,
  },
  {
    name: 'Статистический анализ',
    params: {
      p1: 1,
      p2: 2,
      p3: 3,
      p4: 2,
      p5: 2,
      p6: 3,
      p7: 3,
      p8: 1,
      p9: 2,
      p10: 1,
      p11: 1,
      p12: 1,
      p13: 1,
      p14: 1,
      p15: 2,
      p16: 3,
    },
    score: 0,
  },
  {
    name: 'Метод Делфи',
    params: {
      p1: 3,
      p2: 1,
      p3: 2,
      p4: 2,
      p5: 2,
      p6: 1,
      p7: 3,
      p8: 2,
      p9: 1,
      p10: 2,
      p11: 2,
      p12: 2,
      p13: 4,
      p14: 3,
      p15: 3,
      p16: 1,
    },
    score: 0,
  },
  {
    name: 'Метод сценариев',
    params: {
      p1: 1,
      p2: 2,
      p3: 3,
      p4: 1,
      p5: 1,
      p6: 2,
      p7: 3,
      p8: 2,
      p9: 4,
      p10: 1,
      p11: 1,
      p12: 1,
      p13: 2,
      p14: 2,
      p15: 2,
      p16: 4,
    },
    score: 0,
  },
  {
    name: 'Метод рангов',
    params: {
      p1: 3,
      p2: 2,
      p3: 3,
      p4: 2,
      p5: 2,
      p6: 2,
      p7: 2,
      p8: 1,
      p9: 2,
      p10: 2,
      p11: 2,
      p12: 1,
      p13: 4,
      p14: 1,
      p15: 3,
      p16: 1,
    },
    score: 0,
  },
  {
    name: 'Метод синектики',
    params: {
      p1: 1,
      p2: 2,
      p3: 3,
      p4: 2,
      p5: 2,
      p6: 2,
      p7: 4,
      p8: 2,
      p9: 3,
      p10: 1,
      p11: 1,
      p12: 2,
      p13: 2,
      p14: 3,
      p15: 2,
      p16: 3,
    },
    score: 0,
  },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public constructor(
    private readonly fb: FormBuilder,
  ) {}

  public readonly form = this.fb.group({
    question1: ['', [Validators.required]],
    question2: ['', [Validators.required]],
    question3: ['', [Validators.required]],
    question4: ['', [Validators.required]],
    question5: ['', [Validators.required]],
    question6: ['', [Validators.required]],
    question7: ['', [Validators.required]],
    question8: ['', [Validators.required]],
    question9: ['', [Validators.required]],
    question10: ['', [Validators.required]],
    question11: ['', [Validators.required]],
    question12: ['', [Validators.required]],
    question13: ['', [Validators.required]],
    question14: ['', [Validators.required]],
    question15: ['', [Validators.required]],
    question16: ['', [Validators.required]],
    question17: ['', [Validators.required]],
    question18: ['', [Validators.required]],
    question19: ['', [Validators.required]],
    question20: ['', [Validators.required]],
  });

  public readonly questionBlocks = QUESTION_BLOCKS;

  public readonly methods = METHODS;

  public result: Array<string> = [];

  public submit() {
    if (this.form.valid) {
      for (let method of this.methods) {
        if (method.params.p1 === +this.form.value.question1!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p1 === +this.form.value.question2!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p2 === +this.form.value.question3!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p2 === +this.form.value.question4!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p3 === +this.form.value.question5!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p4 === +this.form.value.question6!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p5 === +this.form.value.question7!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p6 === +this.form.value.question8!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p7 === +this.form.value.question9!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p8 === +this.form.value.question10!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p9 === +this.form.value.question11!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p10 === +this.form.value.question12!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p11 === +this.form.value.question13!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p12 === +this.form.value.question14!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p13 === +this.form.value.question15!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p13 === +this.form.value.question16!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p14 === +this.form.value.question17!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p15 === +this.form.value.question18!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p15 === +this.form.value.question19!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
        if (method.params.p16 === +this.form.value.question20!) {
          this.methods[this.methods.indexOf(method)].score++;
        }
      }

      let bestScore = 0;
  
      for (let method of this.methods) {
        if (bestScore < method.score) {
          bestScore = method.score;
          this.result = [method.name];
        } else if (bestScore === method.score) {
          this.result.push(method.name);
        }
      }
    } else {
      alert('Вы ответили не на все вопросы (/</>----</>/)');
    }
  }
}
