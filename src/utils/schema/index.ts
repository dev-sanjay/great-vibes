import * as yup from 'yup';
import strings from '@/locales/en.json';

const getTextErrorMessage = (
  field: string,
  characters: string,
  type: 'min' | 'max'
) => {
  const string =
    type === 'min' ? strings.minCharactersError : strings.maxCharactersError;

  return string
    .replace('{{field}}', field)
    .replace('{{characters}}', characters);
};

const getMinRangeValidation = () =>
  yup.number().min(0, strings.negativeNumberError);

const getMaxRangeValidation = (minKeyName: string) =>
  yup
    .number()
    .min(0, strings.negativeNumberError)
    .when(minKeyName, (minimum, schema) => {
      return schema.test({
        test: maximum => {
          return (
            minimum[0] === undefined ||
            maximum === undefined ||
            maximum >= minimum[0]
          );
        },
        message: strings.maximumShouldHigher,
      });
    });

export const createJobSchemaStep1 = yup.object().shape({
  jobTitle: yup
    .string()
    .min(5, getTextErrorMessage(strings.jobTitle, '5', 'min'))
    .required(strings.required),

  companyName: yup
    .string()
    .min(5, getTextErrorMessage(strings.companyName, '5', 'min'))
    .required(strings.required),

  industry: yup
    .string()
    .min(5, getTextErrorMessage(strings.jobTitle, '5', 'min'))
    .required(strings.required),

  location: yup
    .string()
    .min(5, getTextErrorMessage(strings.jobTitle, '5', 'min')),

  remoteType: yup
    .string()
    .min(5, getTextErrorMessage(strings.jobTitle, '5', 'min')),
});

export const createJobSchemaStep2 = yup.object().shape({
  minExperience: getMinRangeValidation(),
  maxExperience: getMaxRangeValidation('minExperience'),

  minSalary: getMinRangeValidation(),
  maxSalary: getMaxRangeValidation('minSalary'),

  employees: getMinRangeValidation(),
});
