import { Question } from '../../interfaces/Question';

const questions: Question[] = [
    {
        id: '1',
        title: 'Question 1',
        subject: 'subject',
        description: 'Какой из этих языков не предназначен для программирования?',
        userId: '1',
        answers: [
            {
                id: '1',
                userId: '1',
                stars: 1,
                createdAt: new Date(),
                votes: 1
            }
        ]

    }
];