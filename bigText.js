import figlet from 'figlet';

export const renderBigText = (text, object) => {

  figlet.text(
    text, object,
    
    (err, data) => {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
      
    }

  );
}


// a function that lists all the figlet fonts.
const listFigletFonts = () => {
  figlet.fonts(function (err, fonts) {
    if (err) {
      console.log("something went wrong...");
      console.dir(err);
      return;
    }
    console.dir(fonts);
  });
}
