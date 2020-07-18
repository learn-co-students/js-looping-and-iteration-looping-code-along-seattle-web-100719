// Code your solutions in this file
function writeCards(nameArray, cardType)
{

    for (let i = 0; i < nameArray.length; i++)
    {
        nameArray.splice(i, 1, "Thank you, " + nameArray[i] + ", for the wonderful " + cardType + " gift!");

    }

    return nameArray;
}

function countDown(num)
{

    for (let i = num; i >= 0; i--)
    {
        console.log(i);
    }
}