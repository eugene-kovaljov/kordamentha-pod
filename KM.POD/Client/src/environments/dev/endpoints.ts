export function getApiEndpoints(BACKEND_URL) {
  return {
    CREATE_ACCOUNT: `${BACKEND_URL}/api/account/register`,
    RESEND_VERIFICATION_CODE: `${BACKEND_URL}/api/account/resendPhoneConfirmation`,
    CONFIRM_PHONE: `${BACKEND_URL}/api/account/confirmPhone`,
    SET_PASSWORD: `${BACKEND_URL}/api/account/setPassword`
  };
}
