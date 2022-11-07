import {SOFT_GREY} from './abstracts/variables';

enum VisualIdentityKey {
  PRIMARY_COLOR = 'REACT_APP_MY_COMPONENT_PRIMARY_COLOR',
  SECONDARY_COLOR = 'REACT_APP_MY_COMPONENT_SECONDARY_COLOR',
}

export type VisualIdentity = {
  primaryColor: string;
  secondaryColor: string;
};

export const InitialVisualIdentity = (
  props?: VisualIdentity
): VisualIdentity => ({
  primaryColor:
    props?.primaryColor ||
    process.env[VisualIdentityKey.PRIMARY_COLOR] ||
    SOFT_GREY,
  secondaryColor:
    props?.secondaryColor ||
    process.env[VisualIdentityKey.SECONDARY_COLOR] ||
    SOFT_GREY,
});
