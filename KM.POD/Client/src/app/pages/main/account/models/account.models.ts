export interface ClientAccountData {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
}

export const deleteAccountDialogConfig = {
  autoFocus: false,
  panelClass: 'confirm-dialog-container',
  data: {
    title: "We're sorry to see you go!",
    content:
      'Know that you will not be able to recover your account, or any information on it once you go through with the deletion.',
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Delete account'
  }
};

export const leaveWithoutSavingDialogConfig = {
  autoFocus: false,
  panelClass: 'confirm-dialog-container',
  data: {
    title: "Don't leave this page without saving",
    content: 'All changes will be lost.',
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Leave this page'
  }
};
