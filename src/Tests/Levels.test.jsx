import React from 'react';
import { render, fireEvent, getAllByAltText, screen } from '@testing-library/react';
import LevelOne from '../Levels/LevelOne';
import LevelTwo from '../Levels/LevelTwo';
import LevelThree from '../Levels/LevelThree';
import '@testing-library/jest-dom/extend-expect';
//import MainMenu from '../MainMenu/MainMenu';


jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

// test('render components Menu', () => {
//   const { getByText } = render(<MainMenu />);
// })

describe('test component LevelsOne, LevelTwo and LevelThree', () => {
  test('render component LevelOne and number of matches', () => {
    const { getAllByAltText } = render(<LevelOne />);

    // поиск спичек
    const NumberMatches = getAllByAltText('match').filter(
      (match) => match.getAttribute('draggable') === 'true'
    );

    expect(NumberMatches.length).toBe(9); // проверка, что спичек именно 9 на экране
    expect(screen.getByText("1 уровень")).toBeInTheDocument();
    expect(screen.getByText("Сделайте из этой фигуры пирамиду")).toBeInTheDocument();
  });

  test('render component LevelTwo and number of matches', () => {
    const { getAllByAltText } = render(<LevelTwo />);

    // поиск спичек
    const NumberMathces = getAllByAltText('match').filter(
      (match) => match.getAttribute('draggable') === 'true'
    );

    expect(NumberMathces.length).toBe(13); // проверка, что спичек именно 13 на экране
    expect(screen.getByText("2 уровень")).toBeInTheDocument();
    expect(screen.getByText("Сделайте из этой фигуры Ромб")).toBeInTheDocument();
  });

  test('render component LevelThree and number of matches', () => {
    const { getAllByAltText } = render(<LevelThree />);

    //поиск спичек
    const NumberMatches = getAllByAltText('match').filter(
      (match) => match.getAttribute('draggable') === 'true'
    );
    expect(NumberMatches.length).toBe(17); // проверка, что спичек именно 17 на экране
    expect(screen.getByText("3 уровень")).toBeInTheDocument();
    expect(screen.getByText("Сделайте фигуру, похожую на песочные часы"));
  });
});
  
