function main() {
  const input = document.getElementById('autocomplete')!;
  const autocomplete = new google.maps.places.Autocomplete(input as HTMLInputElement);
  google.maps.event.addListener(autocomplete, 'place_changed', function () {
    const myLocation = autocomplete.getPlace();
    console.log("myLocation", myLocation);
  })
}

main();
