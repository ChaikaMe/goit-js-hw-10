import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const button = document.querySelector('button[type="submit"]');
button.addEventListener('click', promiseFunction);
const delay = document.querySelector('input[name="delay"]');

function promiseFunction(event) {
    event.preventDefault()
    const copyOfDelay = delay.value;
    setTimeout(() => {
        const promise = new Promise((resolve, reject) => {
            const radioStatus = document.querySelector('input[value="fulfilled"]');
            if (radioStatus.checked) {
                resolve(copyOfDelay)
            }
            else {
                reject(copyOfDelay)
            }
        });
    
        promise
            .then((timer) => {
                iziToast.success({
                    icon: '',
                    message: `✅ Fulfilled promise in ${timer} ms`,
                });
            })
            .catch((timer) => {
                iziToast.error({
                    icon: '',
                    message: `❌ Rejected promise in ${timer} ms`,
                });
            })
    }, copyOfDelay);
    delay.value = '';
}