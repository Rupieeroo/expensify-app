import { logIn, logOut } from '../../actions/auth';

test('should generate logIn action object', () => {
  const uid = 'abc123'
  const action = logIn(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid: 'abc123'
  });
});

test('should generate logOut action object', () => {
  const action = logOut();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
