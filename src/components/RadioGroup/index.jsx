import React from "react";

import { useTheme } from "styled-components";
import _RadioGroup from "react-native-radio-buttons-group";

export function RadioGroup({ options, onChange, selected }) {
  // @ts-ignore
  const { FONT_FAMILY, COLORS } = useTheme();

  const radioButtons = options.map((item, index) => {
    return {
      id: String(index),
      label: item.label,
      value: item.value,
      color: COLORS.WHITE,
      selected: item.value === selected,
      labelStyle: {
        color: COLORS.WHITE,
        fontFamily: FONT_FAMILY.POPPINS_MEDIUM,
      },
    };
  });

  function onPressRadioButton(radioButtonsUpdated) {
    const selected = radioButtonsUpdated.find((e) => !!e.selected);
    onChange(selected ? selected.value : null);
  }

  return (
    <_RadioGroup
      containerStyle={{ alignItems: "flex-start", marginTop: 24, marginLeft: -8 }}
      radioButtons={radioButtons}
      onPress={onPressRadioButton}
    />
  );
}
