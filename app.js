function append(caractere) {
  const $input = document.getElementById("input");

  if (
    $input.value == "Error" ||
    ($input.value == "0" && !"+/.%*".includes(caractere))
  ) {
    $input.value = caractere;
  } else {
    // Determina se o usuário digitou um símbolo
    const typed_symbol = "+/*-.%".includes(caractere);
    // Determina se o último caractere digitado é um símbolo
    const last_character_is_symbol = "+/*.%-".includes($input.value.slice(-1));

    if (typed_symbol && last_character_is_symbol) {
      // Remover o último caractere da string
      $input.value = $input.value.slice(0, -1);
    }
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

/**
 * is_valid vefifica se o numero digitado esta entre 0 a 9 ou é um simbolo matematico
 */
function validate(e) {
  const is_valid = /^[0-9]|\+|\-|\/|\%|\*|\.$/.test(e.key);

  if (!is_valid) {
    e.preventDefault();
  }
}

function clear_one() {
  const $input = document.getElementById("input");

  ped;
  if ($input.value.length == 1) {
    $input.value = "0";
  } else {
    $input.value = $input.value.slice(0, -1);
  }
}
