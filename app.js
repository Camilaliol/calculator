function append(caractere) {
  const $input = document.getElementById("input");

  if (
    $input.value == "Error" ||
    ($input.value == "0" && !"+/*".includes(caractere))
  ) {
    $input.value = caractere;
  } else {
    $input.value = $input.value + caractere;
  }
}

function calculate() {
  const $input = document.getElementById("input");

  try {
    $input.value = eval($input.value);
  } catch (error) {
    console.error(error);
    $input.value = "Error";
  }
}

function reset() {
  const $input = document.getElementById("input");
  $input.value = "0";
}

function clear_one() {
  const $input = document.getElementById("input");

  if ($input.value != "0") {
    if ($input.value.length == 1) {
      $input.value = "0";
    } else {
      $input.value = $input.value.slice(0, -1);
    }
  }
}
