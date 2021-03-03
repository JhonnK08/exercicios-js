const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 3', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds)
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 20000)

const regra1 = new schedule.RecurrenceRule()
regra1.dayOfWeek = [new schedule.Range(1,5)]
regra1.hour = 17
regra1.second = 30

const tarefa = schedule.scheduleJob(regra1, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})