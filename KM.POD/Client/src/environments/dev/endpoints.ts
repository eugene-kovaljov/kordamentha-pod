export function getApiEndpoints(BACKEND_URL) {
  return {
    SIGN_IN: `${BACKEND_URL}api/account/login`,
    CREATE_ACCOUNT: `${BACKEND_URL}api/Account/Register`,
    RESEND_VERIFICATION_CODE: `${BACKEND_URL}api/account/resendPhoneConfirmation`,
    CONFIRM_PHONE: `${BACKEND_URL}api/account/confirmPhone`,
    SET_PASSWORD: `${BACKEND_URL}api/account/setPassword`,
    FORGOT_PASSWORD_EMAIL: `${BACKEND_URL}api/account/forgotPassword`,
    CHANGE_PASSWORD: `${BACKEND_URL}api/account/changePassword`
  };
}
