import '../../styles/styles.css';

function stringToJson(element: string) {
  try {
    console.log(JSON.parse(element));
  } catch (error) {
    console.log(error.message);
  }
}

function watchJson(element: any) {
  stringToJson(element.target.value);
}

export default function Charge() {
  const jota = document.getElementById('article-body-json');
  jota.addEventListener('input', watchJson);
  jota.addEventListener('change', watchJson);
}
