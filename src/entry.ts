const input = document.getElementById('autocomplete')! as HTMLInputElement;

function setupAutoComplete(): google.maps.places.Autocomplete {

  const autocomplete = new google.maps.places.Autocomplete(input as HTMLInputElement);
  google.maps.event.addListener(autocomplete, 'place_changed', function () {
    const myLocation = autocomplete.getPlace();
    console.log("myLocation", myLocation);
  });

  input.addEventListener('blur', (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    if (value.trim() === '') {
      autocomplete.set('place', null);
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

function main() {
  const autoComplete = setupAutoComplete();
  setupClear(autoComplete);
}

main();

