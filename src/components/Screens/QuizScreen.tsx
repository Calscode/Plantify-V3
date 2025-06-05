// /components/Screens/QuizScreen.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'QuizScreen'>;

const questions: Array<{
  question_id: number;
  question: string;
  answer: string;
  options: string[];
}> = [
  {
    question_id: 1,
    question: 'What are the four basic things plants need to grow?',
    answer: 'Sunlight, water, air (carbon dioxide), and nutrients from soil',
    options: [
      'Sunlight, water, air (carbon dioxide), and nutrients from soil',
      'Only water and soil',
      'Air and fertilizer only',
      'Sunlight and temperature',
    ],
  },
  {
    question_id: 2,
    question: 'What is the best way to test the quality of your garden soil?',
    answer: 'By using a soil test kit to check pH and nutrient levels',
    options: [
      'By using a soil test kit to check pH and nutrient levels',
      'By smelling the soil',
      'By checking the color of the soil',
      'By watering the soil and seeing how fast it dries',
    ],
  },
  {
    question_id: 3,
    question: "What does 'well-drained soil' mean?",
    answer:
      'Soil that allows water to flow through it without pooling or becoming waterlogged',
    options: [
      'Soil that allows water to flow through it without pooling or becoming waterlogged',
      'Soil that holds water for days',
      'Soil that is very dry all the time',
      'Soil mixed with clay only',
    ],
  },
  {
    question_id: 4,
    question: 'Why is knowing your USDA Hardiness Zone important?',
    answer: 'It helps you choose plants that can survive your local winter temperatures',
    options: [
      'It helps you choose plants that can survive your local winter temperatures',
      'It tells you how much sunlight your garden gets',
      'It indicates the soil type you have',
      'It shows the best time to water your plants',
    ],
  },
  {
    question_id: 5,
    question: 'What is the difference between annual and perennial plants?',
    answer: 'Annuals live for one season; perennials return every year',
    options: [
      'Annuals live for one season; perennials return every year',
      'Annuals live for many years; perennials live one year',
      'Both live only one season',
      'Both live several years without dying',
    ],
  },
  {
    question_id: 6,
    question: 'How often should most garden plants be watered?',
    answer: 'Once or twice a week, deeply, depending on weather and soil type',
    options: [
      'Once or twice a week, deeply, depending on weather and soil type',
      'Every day with a light spray',
      'Once a month',
      'Only when leaves look dry',
    ],
  },
  {
    question_id: 7,
    question: 'What is compost and why is it useful in gardening?',
    answer:
      'Compost is decomposed organic matter that improves soil structure and adds nutrients',
    options: [
      'Compost is decomposed organic matter that improves soil structure and adds nutrients',
      'Compost is a type of fertilizer made from chemicals',
      'Compost is just soil mixed with water',
      'Compost is dried leaves only',
    ],
  },
  {
    question_id: 8,
    question: 'Why is full sun important for many vegetables and flowers?',
    answer: 'Because they need at least 6 hours of direct sunlight daily to thrive',
    options: [
      'Because they need at least 6 hours of direct sunlight daily to thrive',
      'Because sun dries out the soil faster',
      'Because they like shade more than sun',
      'Because sun reduces watering needs completely',
    ],
  },
  {
    question_id: 9,
    question: 'What is mulching and what does it help with?',
    answer:
      'Mulching covers the soil to retain moisture, suppress weeds, and regulate temperature',
    options: [
      'Mulching covers the soil to retain moisture, suppress weeds, and regulate temperature',
      'Mulching removes nutrients from the soil',
      'Mulching increases pest infestation',
      'Mulching is only decorative and has no real use',
    ],
  },
  {
    question_id: 10,
    question: 'How can you prevent overwatering your plants?',
    answer:
      'Check soil moisture before watering; water only when the top inch feels dry',
    options: [
      'Check soil moisture before watering; water only when the top inch feels dry',
      'Water plants every morning without checking soil',
      'Water only when leaves are wilting',
      'Always keep soil wet',
    ],
  },
  {
    question_id: 11,
    question: 'What is companion planting?',
    answer: 'Growing certain plants together to benefit each other and deter pests',
    options: [
      'Growing certain plants together to benefit each other and deter pests',
      'Planting only one species in a garden',
      'Growing plants that need lots of water next to drought-tolerant ones',
      'Planting trees around the garden only',
    ],
  },
  {
    question_id: 12,
    question: 'Why is crop rotation important in vegetable gardening?',
    answer: 'It prevents soil depletion and reduces the risk of pests and diseases',
    options: [
      'It prevents soil depletion and reduces the risk of pests and diseases',
      'It increases the number of weeds',
      'It keeps plants growing in the same spot every year',
      'It reduces the diversity of plants',
    ],
  },
  {
    question_id: 13,
    question: 'What are signs that a plant is not getting enough light?',
    answer: 'Leggy growth, pale leaves, and slow development',
    options: [
      'Leggy growth, pale leaves, and slow development',
      'Thick, dark green leaves',
      'Flowers blooming early',
      'Plant growing too quickly',
    ],
  },
  {
    question_id: 14,
    question: 'What tool is best for pruning small branches and stems?',
    answer: 'Hand pruners or secateurs',
    options: ['Hand pruners or secateurs', 'Shovel', 'Rake', 'Hoe'],
  },
  {
    question_id: 15,
    question: 'When is the best time to water plants during the day?',
    answer:
      'Early in the morning, to reduce evaporation and prevent fungal diseases',
    options: [
      'Early in the morning, to reduce evaporation and prevent fungal diseases',
      "At midday when it's hottest",
      'Late at night',
      'Only when it rains',
    ],
  },
  {
    question_id: 16,
    question: 'How can you naturally deter pests in your garden?',
    answer:
      'By encouraging beneficial insects, using neem oil, or planting pest-repellent herbs',
    options: [
      'By encouraging beneficial insects, using neem oil, or planting pest-repellent herbs',
      'By spraying chemical pesticides daily',
      'By covering plants with plastic',
      'By watering plants with sugar water',
    ],
  },
  {
    question_id: 17,
    question: 'Why is spacing important when planting?',
    answer: 'To ensure each plant gets enough light, air, and nutrients',
    options: [
      'To ensure each plant gets enough light, air, and nutrients',
      'To make the garden look crowded',
      'To keep plants from touching neighbors only',
      'Spacing is not important',
    ],
  },
  {
    question_id: 18,
    question: 'What is the function of fertilizer?',
    answer: 'To provide essential nutrients that support plant growth',
    options: [
      'To provide essential nutrients that support plant growth',
      'To make the soil dry',
      'To kill weeds',
      'To increase water retention only',
    ],
  },
  {
    question_id: 19,
    question: 'How can you tell if a plant is root-bound?',
    answer:
      'Roots are tightly packed and circling the pot, often visible through drainage holes',
    options: [
      'Roots are tightly packed and circling the pot, often visible through drainage holes',
      'Leaves are turning yellow',
      'The plant has no flowers',
      'Soil dries out too quickly',
    ],
  },
  {
    question_id: 20,
    question: 'What should you consider before planting a garden?',
    answer:
      'Sunlight, soil type, drainage, climate, space, and what plants you want to grow',
    options: [
      'Sunlight, soil type, drainage, climate, space, and what plants you want to grow',
      'Only the color of the flowers',
      'Only the soil texture',
      'Only how big the garden is',
    ],
  },
];

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((item) => ({ sort: Math.random(), value: item }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
}

export default function QuizScreen({ route, navigation }: Props) {
  // read groupIndex from route params
  const { groupIndex } = route.params as { groupIndex: number };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  // We only need to shuffle once per mount of QuizScreen.
  // And partition into four groups of five.
  const [groupedQuestions, setGroupedQuestions] = useState<string[][]>([]);
  useEffect(() => {
    const shuffled = shuffleArray(questions);
    const groups: Array<typeof questions> = [];
    for (let i = 0; i < shuffled.length; i += 5) {
      // Slice out five items and also shuffle each question's options
      const chunk = shuffled.slice(i, i + 5).map((q) => ({
        ...q,
        options: shuffleArray(q.options),
      }));
      groups.push(chunk);
    }
    setGroupedQuestions(groups);
  }, []);

  // If groupedQuestions is not ready yet, render nothing
  if (groupedQuestions.length === 0) return null;

  // Grab the one group that this screen should show:
  const currentGroup = groupedQuestions[groupIndex] || [];
  const currentQuestion = currentGroup[currentIndex];

  // If currentIndex goes past this group, we show the “completed round” screen
  if (!currentQuestion) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Round {groupIndex + 1} Completed!</Text>
        <Text style={styles.score}>
          You scored {score} out of {currentGroup.length}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // When the user taps “Back to Home,” pop back and user can press “Take Quiz” again
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function handleOptionClick(option: string) {
    if (showFeedback) return;
    setSelectedOption(option);
    setShowFeedback(true);
    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    if (currentIndex < currentGroup.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // If we finished all 5 questions in this group, clear selected and feedback,
      // and stepping currentIndex to an invalid index causes render of round-completed.
      setCurrentIndex(currentGroup.length);
    }
    setSelectedOption(null);
    setShowFeedback(false);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.questionCounter}>
        Round {groupIndex + 1} / 4 – Question {currentIndex + 1} of {currentGroup.length}
      </Text>
      <Text style={styles.questionText}>{currentQuestion.question}</Text>

      {currentQuestion.options.map((option, idx) => {
        let optionStyle = [styles.optionButton];
        if (showFeedback) {
          if (option === currentQuestion.answer) {
            optionStyle.push(styles.correctOption);
          } else if (option === selectedOption) {
            optionStyle.push(styles.incorrectOption);
          } else {
            optionStyle.push(styles.disabledOption);
          }
        } else if (option === selectedOption) {
          optionStyle.push(styles.selectedOption);
        }

        return (
          <TouchableOpacity
            key={idx}
            style={optionStyle}
            onPress={() => handleOptionClick(option)}
            disabled={showFeedback}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        );
      })}

      {showFeedback && (
        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>Next Question</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  questionCounter: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  selectedOption: {
    backgroundColor: '#bbdefb',
  },
  correctOption: {
    backgroundColor: '#c8e6c9',
    borderColor: '#388e3c',
  },
  incorrectOption: {
    backgroundColor: '#ffcdd2',
    borderColor: '#d32f2f',
  },
  disabledOption: {
    opacity: 0.7,
  },
  button: {
    backgroundColor: '#1976d2',
    padding: 12,
    borderRadius: 6,
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
    width: '50%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  score: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
});
