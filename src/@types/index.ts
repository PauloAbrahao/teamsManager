import {ButtonTypeStyleProps} from "@components/Button/styles";
import {TextInput, TextInputProps, TouchableOpacityProps} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import { ButtonIconTypeStyleProps } from "@components/ButtonIcon/styles";
import { FilterStyleProps } from "@components/Filter/styles";

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export type FilterProps = TouchableOpacityProps & FilterStyleProps & {
  title: string;
}

export type GroupCardProps = TouchableOpacityProps & {
  title: string;
};

export type HeaderProps = {
  showBackButton?: boolean;
};

export type HighLightProps = {
  title: string;
  subtitle: string;
};

export type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export type ListEmptyProps = {
  message: string;
};

export type PlayerCardProps = {
  name: string;
  onRemove: () => void;
};

export type PlayersRouteParams = {
  group: string;
};

export type PlayerStorageDTO = {
  name: string;
  team: string;
};
