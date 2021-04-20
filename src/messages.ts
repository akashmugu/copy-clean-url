export type Msg = {
  code: string;
  message: string;
};

export const err_tabUrl = {
  code: `E1`,
  message: `could not get current tab's URL. does it have a valid URL?`,
};
export const err_getConfig = {
  code: `E2`,
  message: `could not get config from storage API`,
};
export const err_invalidConfig = {
  code: `E3`,
  message: `invalid config found`,
};

export const load_tabUrl = {
  code: `L1`,
  message: `getting URL of the current tab`,
};
export const load_getConfig = {
  code: `L2`,
  message: `getting config from storage API`,
};
