import { useSetRecoilState } from 'recoil';
import { isDefined } from 'twenty-shared/utils';
import {
  CheckCustomDomainValidRecordsMutation,
  useCheckCustomDomainValidRecordsMutation,
} from '~/generated-metadata/graphql';
import { customDomainRecordsState } from '~/pages/settings/workspace/states/customDomainRecordsState';

export const useCheckCustomDomainValidRecords = () => {
  const [checkCustomDomainValidRecords] =
    useCheckCustomDomainValidRecordsMutation();

  const setCustomDomainRecords = useSetRecoilState(customDomainRecordsState);

  const checkCustomDomainRecords = () => {
    setCustomDomainRecords((currentState) => ({
      ...currentState,
      isLoading: true,
    }));
    checkCustomDomainValidRecords({
      onCompleted: (data: CheckCustomDomainValidRecordsMutation) => {
        if (isDefined(data.checkCustomDomainValidRecords)) {
          setCustomDomainRecords((currentState) => ({
            ...currentState,
            isLoading: false,
            records: data.checkCustomDomainValidRecords,
          }));
        }
      },
      onError: () => {
        setCustomDomainRecords((currentState) => ({
          ...currentState,
          isLoading: false,
        }));
      },
    });
  };

  return {
    checkCustomDomainRecords,
  };
};
