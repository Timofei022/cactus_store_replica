export function isEqual(object1, object2) {
    const props1 = Object.getOwnPropertyNames(object1);
    const props2 = Object.getOwnPropertyNames(object2);
  
    if (props1.length !== props2.length) {
      return false;
    }
  
    for (let i = 0; i < props1.length; i += 1) {
      const prop = props1[i];
      const bothAreObjects = typeof(object1[prop]) === 'object' && typeof(object2[prop]) === 'object';
  
      if ((!bothAreObjects && (object1[prop] !== object2[prop]))
      || (bothAreObjects && !isEqual(object1[prop], object2[prop]))) {
        return false;
      }
    }
  
    return true;
  }

      //Функция для сохранения картинок!!!!
export async function saveImg (arr) {
        for (const item of arr) {
            await fetch(`https://www.cactus.md/i.ashx?i=/i/category/${item.ID}.png`)
            .then(  respObj => respObj.blob())
            .then(  blobObj => {
                let link = document.createElement("a");
                link.setAttribute("href", URL.createObjectURL(blobObj));
                link.setAttribute("download", `${item.ID}`);
                link.click();
            })
        }
    }
