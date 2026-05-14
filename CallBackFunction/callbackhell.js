
function step1(callback)
{
    callback()
    console.log("Step1 completed")
}

function step2(callback)
{
    callback()
    console.log("Step2 completed")
}

function step3(callback)
{
    callback()
    console.log("Step3 completed")
}

//callback hell

step1(function(){
    step2(function(){
        step3(function(){
            console.log("All steps are completed")
        })
    })
})