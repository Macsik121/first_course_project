import React from 'react'
import { signIn, signUp } from '../apis/server-related_apis/server_operations';

export default function SignInAndUpForm() {
  async function submitSignIn(e) {
    // stop refreshing the page on the default behaviour
    e.preventDefault();
    // get the field's value from the form
    const form = document.getElementsByName("sign_in_form")[0];
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;
    // console.log('values:', email, password);
    // make the request to the server to get the JWT token
    // const data = 
    await signIn(email, password);
  }
  async function submitSignUp(e) {
    e.preventDefault();
    // get the data to send query to the server
    const form = document.getElementsByName('sign_up_form')[0];
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;
    const repPassword = form.elements['repPassword'].value;
    // console.log('email pass:', email, password);
    // data responded from the server
    // const data = 
    await signUp(email, password, repPassword);
    // console.log(data);
  }
  return (
    <main className="auth-forms">
      <section className="auth-forms-section page-section">
        <form className="auth-form sign-in" name="sign_in_form" onSubmit={submitSignIn}>
          <h3 className="auth-form-title text-14">Войти в свой аккаунт</h3>
          <div className="auth-form-inputs">
            <div className="input-error-holder auth-form-input">
              <input name="email" type="text" placeholder="Ваша почта..." />
            </div>
            <div className="input-copy-holder auth-form-input">
              <input name="password" type="password" placeholder='Пароль...' />
            </div>
          </div>
          <div className="auth-form-bottom-part">
            <button type="submit" className='default-4 default-4-light'>Войти</button>
          </div>
        </form>
        <div className="auth-forms-border-vertical border-line border-line-vertical" />
        <div className="auth-forms-border-horizontal border-line border-line-horizontal" />
        <form className="auth-form sign-up" name="sign_up_form" onSubmit={submitSignUp}>
          <h3 className="auth-form-title text-14">Регистрация</h3>
          <div className="auth-form-inputs">
            <div className="input-error-holder auth-form-input">
              <input name="email" type="text" placeholder="Ваша почта..." />
            </div>
            <div className="input-copy-holder auth-form-input">
              <input name="password" type="password" placeholder='Ваш пароль...' />
            </div>
            <div className="auth-form-input">
              <input name="repPassword" type="password" placeholder="Повторите пароль..." />
            </div>
          </div>
          <div className="auth-form-bottom-part">
            <button type="submit" className='default-4 default-4-light'>Зарегестрироваться</button>
          </div>
        </form>
      </section>
    </main>
  )
}
