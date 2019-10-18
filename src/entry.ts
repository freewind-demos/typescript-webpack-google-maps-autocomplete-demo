const input = document.getElementById('autocomplete')! as HTMLInputElement;

function setupAutoComplete(): google.maps.places.Autocomplete {

  const autocomplete = new google.maps.places.Autocomplete(input as HTMLInputElement);
  autocomplete.addListener('place_changed', function () {
    const myLocation = autocomplete.getPlace();
    console.log("myLocation", myLocation);
  });

  input.addEventListener('blur', (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    if (value.trim() === '') {
      autocomplete.set('place', undefined);
    }
  });

  return autocomplete;
}

function setupClear(autoComplete: google.maps.places.Autocomplete): void {
  const button = document.getElementById('clear')!;
  button.addEventListener('click', () => {
    input.value = '';
    input.focus();
    input.blur();
  })
}

function setupPrintPlace(autoComplete: google.maps.places.Autocomplete) {
  const button = document.getElementById('printPlace')!;
  button.addEventListener('click', () => {
    console.log("current place", autoComplete.getPlace());
  });
}

function main() {
  const autoComplete = setupAutoComplete();
  setupClear(autoComplete);
  setupPrintPlace(autoComplete);
}

main();

