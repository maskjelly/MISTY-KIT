'use client'
import React, { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Which of the following is a critical research area of biotechnology?',
    options: [
      'Providing the best catalyst in the form of improved organisms.',
      'Creating optimal conditions for a catalyst to act.',
      'Downstream processing technologies.',
      'All of the above.',
    ],
    correctAnswer: 'All of the above.',
    explanation: 'These are the three core areas that drive progress in biotechnology research and application.',
  },
  {
    id: 2,
    question: 'The Green Revolution primarily succeeded due to:',
    options: [
      'Exclusive use of genetically engineered crops.',
      'Primarily organic agricultural practices.',
      'Use of improved crop varieties, better management practices, and agrochemicals.',
      'A decrease in the human population.',
    ],
    correctAnswer:
      'Use of improved crop varieties, better management practices, and agrochemicals.',
    explanation:
      'The Green Revolution significantly increased food production through a combination of these factors.',
  },
  {
    id: 3,
    question: 'The capacity of a plant cell/explant to generate a whole plant is called:',
    options: ['Micro-propagation', 'Somatic hybridization', 'Totipotency', 'Explantation'],
    correctAnswer: 'Totipotency',
    explanation: 'Totipotency is the inherent ability of a plant cell to differentiate into any other cell type, enabling regeneration.',
  },
  {
    id: 4,
    question:
      'Plants produced through micro-propagation are genetically identical to the original plant. These are known as:',
    options: ['Somatic hybrids', 'Transgenic plants', 'Somaclones', 'Genetically modified organisms'],
    correctAnswer: 'Somaclones',
    explanation: 'Somaclones are genetically uniform plants produced from a single plant through tissue culture.',
  },
  {
    id: 5,
    question: 'Virus-free plants can be obtained through tissue culture by using:',
    options: ['Root tips', 'Apical and axillary meristems', 'Mature leaves', 'Any part of the infected plant'],
    correctAnswer: 'Apical and axillary meristems',
    explanation: 'Meristematic tissues are often virus-free, making them suitable for obtaining healthy plants.',
  },
  {
    id: 6,
    question:
      'The fusion of protoplasts from two different varieties of plants to obtain a hybrid is known as:',
    options: ['Micro-propagation', 'Somatic hybridization', 'Genetic engineering', 'Tissue culture'],
    correctAnswer: 'Somatic hybridization',
    explanation: 'Somatic hybridization involves fusing protoplasts to combine the genetic material of different plants.',
  },
  {
    id: 7,
    question: 'Which of the following is an advantage of using genetically modified (GM) crops?',
    options: [
      'Increased reliance on chemical pesticides.',
      'Decreased tolerance to abiotic stresses.',
      'Reduced post-harvest losses.',
      'Decreased efficiency of mineral usage.',
    ],
    correctAnswer: 'Reduced post-harvest losses.',
    explanation: 'GM crops can be engineered for better storage and resistance to spoilage, reducing losses.',
  },
  {
    id: 8,
    question: 'Bt toxin is produced by which of the following bacteria?',
    options: [
      'Escherichia coli',
      'Agrobacterium tumefaciens',
      'Bacillus thuringiensis',
      'Rhizobium leguminosarum',
    ],
    correctAnswer: 'Bacillus thuringiensis',
    explanation: 'Bacillus thuringiensis is a bacterium known for producing insecticidal proteins.',
  },
  {
    id: 9,
    question: 'The insecticidal protein produced by Bacillus thuringiensis is initially in an inactive form called:',
    options: ['Toxin', 'Protoxin', 'Endotoxin', 'Exotoxin'],
    correctAnswer: 'Protoxin',
    explanation: 'The Bt toxin is synthesized as an inactive protoxin and is activated in the insect gut.',
  },
  {
    id: 10,
    question: 'The activation of Bt toxin in the gut of insects involves:',
    options: ['Acidic pH', 'Neutral pH', 'Alkaline pH', 'Any pH'],
    correctAnswer: 'Alkaline pH',
    explanation: 'The alkaline pH in the insect gut facilitates the activation of the Bt protoxin.',
  },
  {
    id: 11,
    question: 'RNA interference (RNAi) involves silencing of specific mRNA due to:',
    options: ['Single-stranded RNA', 'Double-stranded RNA', 'Transfer RNA', 'Messenger RNA'],
    correctAnswer: 'Double-stranded RNA',
    explanation: 'dsRNA triggers the RNAi pathway, leading to the degradation of target mRNA.',
  },
  {
    id: 12,
    question: 'The first clinical gene therapy was given for the treatment of:',
    options: ['Cancer', 'Diabetes', 'Adenosine deaminase (ADA) deficiency', 'Cystic fibrosis'],
    correctAnswer: 'Adenosine deaminase (ADA) deficiency',
    explanation: 'The first successful gene therapy targeted ADA deficiency, a genetic disorder affecting the immune system.',
  },
  {
    id: 13,
    question: 'Genetically engineered insulin is produced by inserting the human insulin gene into:',
    options: ['Animal cells', 'Plant cells', 'Bacteria', 'Fungal cells'],
    correctAnswer: 'Bacteria',
    explanation: 'Bacteria, like E. coli, are commonly used as bioreactors to produce recombinant proteins like insulin.',
  },
  {
    id: 14,
    question: 'The C-peptide is:',
    options: [
      'Part of the mature insulin molecule.',
      'Present in proinsulin but removed during maturation.',
      'Responsible for the activity of insulin.',
      'A chain linked to chain A in insulin.',
    ],
    correctAnswer: 'Present in proinsulin but removed during maturation.',
    explanation: 'C-peptide connects the A and B chains in proinsulin and is cleaved off to form mature insulin.',
  },
  {
    id: 15,
    question: 'Early detection of pathogens can be done by:',
    options: [
      'Observing disease symptoms only.',
      'Recombinant DNA technology, PCR, and ELISA.',
      'Traditional serum and urine analysis only.',
      'Culturing the pathogen only.',
    ],
    correctAnswer: 'Recombinant DNA technology, PCR, and ELISA.',
    explanation:
      'These techniques allow for the detection of pathogens at very low concentrations, before symptoms appear.',
  },
  {
    id: 16,
    question:
      'Animals that have had their DNA manipulated to possess and express an extra gene are known as:',
    options: ['Hybrid animals', 'Cloned animals', 'Transgenic animals', 'Mutated animals'],
    correctAnswer: 'Transgenic animals',
    explanation: 'Transgenic animals carry foreign genes introduced through genetic engineering.',
  },
  {
    id: 17,
    question: 'Which of the following is an example of a transgenic animal being used for biological products?',
    options: [
      'Transgenic mice used to study cancer.',
      'Transgenic cows producing human protein-enriched milk.',
      'Transgenic sheep used for vaccine safety testing.',
      'Transgenic pigs used for organ transplantation research.',
    ],
    correctAnswer: 'Transgenic cows producing human protein-enriched milk.',
    explanation:
      'Transgenic animals can be engineered to produce valuable proteins in their milk or other body fluids.',
  },
  {
    id: 18,
    question: 'GEAC, an organization in India, deals with:',
    options: [
      'Environmental protection.',
      'Regulating the safety of genetically modified organisms.',
      'Promoting organic farming.',
      'Wildlife conservation.',
    ],
    correctAnswer: 'Regulating the safety of genetically modified organisms.',
    explanation: 'The Genetic Engineering Appraisal Committee (GEAC) assesses the safety of GM research and applications.',
  },
  {
    id: 19,
    question: 'The term "biopiracy" refers to:',
    options: [
      'Illegal hunting of endangered species.',
      'Using bio-resources without proper authorization and compensatory payment.',
      'Introduction of exotic species into a new environment.',
      'Destruction of natural habitats for agricultural purposes.',
    ],
    correctAnswer: 'Using bio-resources without proper authorization and compensatory payment.',
    explanation: 'Biopiracy involves the exploitation of biological resources and traditional knowledge without fair compensation.',
  },
  {
    id: 20,
    question: 'Golden rice is an example of a genetically modified crop with enhanced:',
    options: [
      'Pest resistance',
      'Herbicide tolerance',
      'Vitamin A content',
      'Shelf life',
    ],
    correctAnswer: 'Vitamin A content',
    explanation: 'Golden rice is engineered to produce beta-carotene, a precursor to Vitamin A.',
  },
];

const BiotechnologyQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionClick = (option: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = option;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        newScore += 4;
      } else if (selectedAnswers[index] !== '') {
        newScore -= 1;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI generated BIOTECH APP qpa v-0.0.01</h1>
      {!submitted ? (
        <div className="mb-4">
          <p className="mb-2">
            {currentQuestion + 1}. {questions[currentQuestion].question}
          </p>
          <div className="grid grid-cols-1 gap-2">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className={`p-2 rounded border ${
                  selectedAnswers[currentQuestion] === option ? 'bg-blue-100 border-blue-500' : 'border-gray-300'
                } hover:bg-gray-100 focus:outline-none`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={currentQuestion === questions.length - 1}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-4">Quiz Results</h2>
          <p className="mb-4">Your Score: {score}</p>
          {questions.map((question, index) => (
            <div key={question.id} className="mb-6 p-4 border rounded">
              <p className="font-bold">{index + 1}. {question.question}</p>
              <p>
                Your Answer:{' '}
                <span
                  className={`${
                    selectedAnswers[index] === question.correctAnswer
                      ? 'text-green-500'
                      : selectedAnswers[index] !== ''
                      ? 'text-red-500'
                      : 'text-gray-500'
                  }`}
                >
                  {selectedAnswers[index] || 'Not Answered'}
                </span>
              </p>
              <p>
                Correct Answer: <span className="text-green-500">{question.correctAnswer}</span>
              </p>
              <p>
                Explanation: <span className="text-gray-700">{question.explanation}</span>
              </p>
            </div>
          ))}
        </div>
      )}

      {!submitted && (
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default BiotechnologyQuiz;