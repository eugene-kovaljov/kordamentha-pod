export interface RegistrationStep {
  nextStep(): void;
  previousStep(): void;
}
