interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Game Developer'],
  customerRoles: [],
  tenantRoles: ['Game Developer'],
  tenantName: 'Organization',
  applicationName: 'tictactoe',
  addOns: ['notifications'],
};
