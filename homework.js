// -------------------------- Home work 8 --------------------------
// -------------------------- Курочка Екатерина --------------------------

// 1. Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {
	width: 20, 
	height: 10, 
	getSquare: function() {return this.width * this.height}
};

rectangle.getSquare();

// 2. Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
	price: 10,
	discount: '15%',
	getPrice: function() {return this.price},
	getPriceWithDiscount: function() { 
		return (this.price - this.price * parseFloat(this.discount) / 100); 
	}
};

price.getPrice();
price.getPriceWithDiscount();

// 3. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту:
const higher = {
	height: 10,
	getHigher: function() {
		return this.height = this.height + 1;
	}
};

higher.getHigher();

// 4. Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”. Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
    value: 1,
    double: function () { this.value = this.value * 2; return this; },
    plusOne: function () { this.value = this.value + 1; return this; },
    minusOne: function () { this.value = this.value - 1; return this; },
};

// 5. Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)
const products = {
	price: 10,
	quantity: 4,
	getFullPrice: function () {
		return this.price * this.quantity;
	}
};

products.getFullPrice();

// 6. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы. Для этого “позаимствуйте” метод из предыдущего объекта.
const details = {
	price: 2,
	quantity: 9
};

const detailsPrice = products.getFullPrice.bind(details);

detailsPrice();

// 7. Не изменяя функцию или объект, получить результат функции
let sizes = {width: 5, height: 10},
	getSquare = function () {return this.width * this.height;};

getSquare.call(sizes);

// 8. Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);

getElementHeight();

//   Презентация 10 -------------------------------------------------------------
// 9. Создайте функцию
function minus(a) {
	a = a || 0;

	return function (b) {
		b = b || 0;

		return a - b;
	}
}

minus(2)(5); // -3

// 10. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker(x) {
	return 	function (y) {
		x = x * y;
		return x;
	}
}

const multiply = multiplyMaker(2);

multiply(2); // 4
multiply(1); // 4

// 11. Реализовать модуль, который работает со строкой и имеет методы:
const workWithStr = {
	str: '',

	setStr: function (myStr) {
		if (!myStr) {
			str = '';
		} else if (typeof(myStr) === 'number') {
			str = myStr + '';
		} else {
			str = myStr;
		}

		return str;
	},

	getStr: function () { return str; },

	getStrLength: function () { return str.length; },

	getReverseStr: function () { return str.split("").reverse().join(""); }
};

workWithStr.setStr('lkjsf');
workWithStr.getStr();
workWithStr.getStrLength();
workWithStr.getReverseStr();

// 12. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
const calc = {
	num: 0,

	setNum: function (myNum) {
		if (!myNum) {
			num = 0;
		} else if (typeof(myNum) != 'number') {
			alert('Введите число');
		} else {
			num = myNum;
		}

		// console.log(num); 

		return calc;
	},

	numPlus: function (plus) { 
		num += plus; 
		// console.log(num); 

		return calc; 
	},

	numMinus: function (minus) { 
		num -= minus; 
		// console.log(num); 

		return calc; 
	},

	numMultiply: function (mult) { 
		num *= mult; 
		// console.log(num); 

		return calc; 
	},

	numSplit: function (split) { 
		num /= split; 
		// console.log(num); 

		return calc; 
	},

	numToDegree: function (deg) { 
		num = Math.pow(num, deg); 
		// console.log(num); 

		return calc; 
	},

	getFinalNum: function () { 
		num = parseFloat(num.toFixed(2)); 
		console.log(num);

		return calc; 
	}

};

calc.setNum(20).numPlus(5).numMinus(15).numMultiply(3).numSplit(2).numToDegree(2).getFinalNum();  // 225


