
//Dos arrays de datos que he creado para poder dar el formato necesario en las funciones siguientes.
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

//-------------------------------------DATES DATA FORMATERS-------------------------------------//
// RESTRICCION FECHA MAXIMA A LA FECHA ACTUAL.
// el formato que acepta el parametro max del input type date es diferente al que nos da el objecto Date() por defecto
// es por ese motivo que creo una función para reformatear su valor.

export function maxDateFormater(date){
    //Creo una fecha nueva, le asgino la fecha actual y la convierto a formato dd/mm/yy
    let formatedDate=date.toLocaleDateString().slice(0,10)
    //Obtengo dia, mes y hora, para pasarlo al formato necesario.
    let day=formatedDate.split('/')[0]
    let month=formatedDate.split('/')[1]
    let year=formatedDate.split('/')[2]
    //Reformateo para usar como valor max en el input, y que no se puedan seleccionar fechas futuras.
    //añado un cero a los dias 0-9 del mes y los meses 0-9 del año para complir el formato.
    day=(day.length === 1? `0${day}`: day);
    month=(month.length === 1? `0${month}`: month );
    //asigno el valor formateado a una nueva variable.
    let maxDate=`${year}-${month}-${day}`
    return maxDate
}

//Esta función genera los datos necesarios para hacer el display de la fecha seleccionada con el formato deseado.


export function displayDateFormater(selectedDate){
    //obtengo los valores numericos del dia, mes y año de la hora seleccionada.
    //IMPORTANTE! el dia que devuelve getDay() es el de la semana (valores de 0:lunes a 6:domingo)
    let selectedDay = new Date(selectedDate).getDay();
    let selectedMonth = new Date(selectedDate).getMonth();
    let selecetdYear = new Date(selectedDate).getFullYear();
    //Obtengo el valor del dia del mes, el nombre del dia de la semana y el nombre del mes.
    let dayDisplayNumb = selectedDate.toString().slice(8,10).split('/')[0]
    let dayDisplayTxt = days[selectedDay-1]
    let monthDisplay = months[selectedMonth]
    //devuelvo los datos formateados necesarios para el display adecuado de la fecha.
    return {dayDisplayTxt,monthDisplay,selecetdYear,dayDisplayNumb}
}


//-------------------------------------PLOT DATA FORMATERS-------------------------------------//
//Devuelve un trozo de los datos tanto de los meses como de los valores asociados.
export function dataChunker(month,dataSet){
    //Por si acaso paso el valor de month a type number.
    let  m=parseInt(month);
    let i=m-2;
    //Declaro los arrays donde guardare los datos que quiero obtener
    let dataArr=[];
    let monthsArr=[];
      //Un viejo amigo, el bucle for con el que obtengo los datos de forma que
      // me devuelva datos para los dos meses anteriores y 3 posteriores al mes
      //seleccionado, y en caso de ser enero, febrero, octubre, noviembre o diciembre
      //me devuelve los datos de forma correcta.
      //Como los datos son falsos no necesito añadir o quitar un año en los datos, pero sería sencillo dentro de esta función.
      for(i;i<=m+3;i++){
        let x=i
        if(i<=0){x=i+12}
        if(i>12){x=i-12}
        //asigno un valor a set, es el valor para cada uno de los meses a mostrar.
        let set=(Object.values(dataSet['MONTHLY-AVRG']))[(x-1).toString()]
        // para cada valor de set, añado el mes correspondiente y el valor de set a sus arrays.
        monthsArr.push(months[x-1])
        dataArr.push(set)
      };
  //Devuelvo los datos para los intervalos que se muestran en la gráfica.
  return {dataArr,monthsArr}
}



