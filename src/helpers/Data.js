export default function getRandomData(){

    let randomizer=function(){
        return ((Math.random()))
    }
    
    let rounder=function(input){
        return(Math.ceil(input))
    }
    
    let  data ={
    'TRR': rounder(randomizer()*1000),
    'RECOVERED': rounder(randomizer()*800),
    'MONTHLY-AVRG':
        {
            'Jan':rounder(randomizer()*5000),
            'Feb':rounder(randomizer()*5000),
            'Mar':rounder(randomizer()*5000),
            'Apr':rounder(randomizer()*5000),
            'May':rounder(randomizer()*5000),
            'Jun':rounder(randomizer()*5000),
            'Jul':rounder(randomizer()*5000),
            'Aug':rounder(randomizer()*5000),
            'Sep':rounder(randomizer()*5000),
            'Oct':rounder(randomizer()*5000),
            'Nov':rounder(randomizer()*5000),
            'Dec':rounder(randomizer()*5000)
        }
    };
    return data
}