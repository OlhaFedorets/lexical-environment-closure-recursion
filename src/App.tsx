import './App.css'

function App() {
    //globalLE {} --> null

    // startEngine()
    //
    let car2 = 'bmw' //globalLE {car: 'bmw'} --> null

    const startEngine2 = function () {
        //startEngineLE {} --> globalLE
        //const car = 'kia' // startEngineLE {car: 'kia'} --> globalLE
        console.log(`Start ${car2}`)
    }

    startEngine2() //globalLE {startEngine: function} --> null
    car2 = 'bmw' //globalLE {car: 'bmw'} --> null

    startEngine2()
    car2 = 'audi' //globalLE {startEngine: function, car: 'audi'} --> null

    startEngine2()








    let car = 'bmw' //globalLE {car: 'bmw', startEngine: Func} --> null

    function startEngine() {
        //startEngineLE {car: accessDenied} --> globalLE
        console.log(`Start ${car}`)
        // startEngineLE {car: 'kia'} --> globalLE
        let car = 'kia'
    }

    startEngine() //выдаст ошиблку: Cannot access 'car' before initialization




    //Замыкание
    // Возможность функции использовать переменные из внешнего лексического окружения сама по себе —
    // это лексическая область видимости (lexical scoping), а замыкание возникает тогда,
    //     когда эта функция сохраняется и продолжает “удерживать” доступ к этим переменным
    // после завершения выполнения внешней функции.

    function startEngine1() {
        //startEngineLE {car: audi} --> globalLE
        let car1 = 'audi'

        const func = () => {
            //{} --> startEngineLE
            console.log(`Start ${car1}`)
        }
        return func
    }

    const resultFunc = startEngine1() //globalLE {resultFunc: Func}   Здесть создается ссылка на функцию путем присваивания ее переменной

    resultFunc()
    //здесь внешняя функция (startEngine1) завершилась после выполнения, но
    // LE (лексическое окружение) не может быть удалено, так как на него есть ссылка внутри функции func,
    //доступ к которой сохранен в переменной resultFunc.
    // обычная функция "умирает" после вызова и отработки, а при следующем вызове пересоздается
    //Здесь есть замыкание, так как мы сохранили во внешней переменной resultFunc доступ к внутренней функции func





    function startEngine3() {
        //startEngineLE {car: audi} --> globalLE
        let car3 = 'audi'

        const func3 = () => {
            //{} --> startEngineLE
            console.log(`Start ${car3}`)
        }
        return func3
    }

  startEngine3() //globalLE {resultFunc: Func}  здесь ссылки не создается, то есть функция просто вызывается,
    // создается ее лексическое окружение в виде объекта (для него выделяется ячейка в памяти), появляется ссылка на этот объект,
    // ф-ция отрабатывает и ссылка на LE теряется, она больше не нужна. Тогда garbage collector подчищает такие
    //бесполезные объекты, на которые нет ссылок. То есть после вызова и отработки функции на ее объект лексического окружения
    //никто не ссылается, соответственно такой объект умирает. При втором вызове создается новый объект LE и происходит то же самое.
    // То есть здесь замыкания нет, так как нет доступа к LE после завершения выполнения внешней функции



    return (
    <>

    </>
  )
}

export default App
