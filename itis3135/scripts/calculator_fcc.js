window.onload = function () {
    const calculate = (n1, operator, n2) => {
        let result = ''
        if (operator === 'add') {
            result = parseFloat(n1) + parseFloat(n2)
        } else if (operator === 'subtract') {
            result = parseFloat(n1) - parseFloat(n2)
        } else if (operator === 'multiply') {
            result = parseFloat(n1) * parseFloat(n2)
        } else if (operator === 'divide') {
            result = parseFloat(n1) / parseFloat(n2)
        }
        else if (operator === 'power') {
            result = Math.pow(parseFloat(n1), 2)
        }
        else if (operator === 'squareroot') {
            result = Math.sqrt(parseFloat(n1))
        }
        else if (operator === 'Exponent') {
            result = Math.pow(parseFloat(n1), parseFloat(n2))
        }
        else if (operator === 'increment') {
            result = parseFloat(n1)++;
        }
        else if (operator === 'floor') {

            result == Math.floor(parseFloat(n1));
        }
        return result
    }
    const calculator = document.querySelector('.calculator')
    const display = calculator.querySelector('.calculator__display')
    const keys = calculator.querySelector('.calculator__keys')

    keys.addEventListener('click', function (e) {
        if (e.target.matches('button')) {
            const key = e.target
            const action = key.dataset.action
            const keyContent = key.textContent
            const displayedNum = display.textContent
            const previousKeyType = calculator.dataset.previousKeyType

            Array.from(key.parentNode.children)
                .forEach(k => k.classList.remove('is-depressed'))

            if (!action) {
                if (displayedNum === '0' || previousKeyType === 'operator') {
                    display.textContent = keyContent
                } else {
                    display.textContent = displayedNum + keyContent
                }
            }

            if (action === 'decimal') {
                display.textContent = displayedNum + '.'
            }

            if (
                action === 'add' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'divide' ||
                action === 'power' ||
                action === 'squareroot' ||
                action === 'Exponent' ||
                action === 'increment' ||
                action === 'floor'

            ) {
                key.classList.add('is-depressed')
                calculator.dataset.previousKeyType = 'operator'
                calculator.dataset.firstValue = displayedNum
                calculator.dataset.operator = action
            }

            if (action === 'clear') {
                console.log('clear key!')
            }

            if (action === 'calculate') {
                const firstValue = calculator.dataset.firstValue
                const operator = calculator.dataset.operator
                const secondValue = displayedNum

                display.textContent = calculate(firstValue, operator, secondValue)
            }
        }
    })
}
