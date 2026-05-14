
function step1(callback)
{
    console.log("Step1 completed")
    callback()
}

function step2(callback)
{
    console.log("Step2 completed")
    callback()
}

function step3(callback)
{
    console.log("Step3 completed")
    callback()
}

//callback hell

step1(function(){
    step2(function(){
        step3(function(){
            console.log("All steps are completed")
        })
    })
})