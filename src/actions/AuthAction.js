export const Login = () => {
  return (disptach) => {
    disptach({
      type: 'LOGIN_SUCCESSFULLY',
      payload: true
    });
  }
}
