function converter(source, input) {
  input = parseFloat(input);
  if (source == "celsius") {
    fahrenheit.value = ((input * 5 / 9) + 32);
    kelvin.value = input + 273.15;
  }
  if (source == "fahrenheit") {
    celsius.value = ((input - 32) * 5 / 9);
    kelvin.value = (((input - 32) * 5 / 9) + 273.15);
  }
  if (source == "kelvin") {
    fahrenheit.value = (((input - 273.15) * 5 / 9) + 32);
    celsius.value = input - 273.15;
  }
  if (source == "kilograms") {
    pounds.value = input * 2.2046;
    ounces.value = input * 0.035274 / 1000;
  }
  if (source == "pounds") {
    kilograms.value = input / 2.2046;
    ounces.value = input / 16;
  }
  if (source == "ounces") {
    pounds.value = input * 16;
    kilograms.value = input * 1000 / 0.035274;
  }
  if (source == "centimetres") {
    inches.value = input * 0.394;
    feet.value = input * 0.0328;
  }
  if (source == "inches") {
    centimetres.value = input / 0.394;
    feet.value = input / 12;
  }
  if (source == "feet") {
    inches.value = input * 12;
    centimetres.value = input / 0.0328;
  }
  if (source == "kilometres") {
    miles.value = input * 0.621;
    nauticalMiles.value = input * 0.54;
  }
  if (source == "miles") {
    kilometres.value = input / 0.621;
    nauticalMiles.value = input * 0.87;
  }
  if (source == "nauticalMiles") {
    miles.value = input / 0.87;
    kilometres.value = input / 0.54;
  }
  if (source == "joules") {
    kilocalories.value = input / 4148;
    watthour.value = input / 3600;
  }
  if (source == "kilocalories") {
    joules.value = input * 4148;
    watthour.value = input * 1.162;
  }
  if (source == "watthour") {
    kilocalories.value = input / 1.162;
    joules.value = input * 3600;
  }
}
