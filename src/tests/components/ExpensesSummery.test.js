import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummery } from '../../components/ExpensesSummery';

test('should correctly render expenses summery with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummery expenseCount={1} expensesTotal={235}/>);

  expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses summery with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummery expenseCount={23} expensesTotal={4829343885}/>);

  expect(wrapper).toMatchSnapshot();
});
