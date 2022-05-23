import { Subject } from "src/app/interfaces/Subject";

const subjects: Subject = [
    {
        id: 1,
        name: 'Математика',
        description: 'Математика это наука о вычислениях и их применении в жизни и в производстве.',
        image: 'https://www.math.spbu.ru/images/math_logo.png'
    },
    {
        id: 2,
        name: 'Физика',
        description: 'Физика это наука о материальной системе и ее процессах.',
        image: 'https://www.phys.org/images/logo.png'
    },
    {
        id: 3,
        name: 'Информатика',
        description: 'Информатика это наука о программировании и его применении в жизни и в производстве.',
        image: 'https://www.inf.ru/images/logo.png'
    }
];

export default subjects;
