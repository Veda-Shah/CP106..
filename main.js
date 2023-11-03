<script src="https://teachablemachine.withgoogle.com/models/lHe7rEGqo/"></script>
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('cat.jpeg') 
    img1 = document.getElementById('cow.jpeg')
    img2 = document.getElementById('dog.jpeg')
    img3 = document.getElementById('lion.jpeg')

    if (results[0].label == "moo") {
      img.src = 'cow.jpeg';
      img1.src = 'dog.jpeg';
      img2.src = 'cat.jpeg';
      img3.src = 'lion.jpeg';
    } else if (results[0].label == "ruff") {
      img.src = 'cow.jpeg';
      img1.src = 'dog.jpeg';
      img2.src = 'cat.jpeg';
      img3.src = 'lion.jpeg';
    } else if (results[0].label == "meow") {
      img.src = 'cow.jpeg';
      img1.src = 'dog.jpeg';
      img2.src = 'cat.jpeg';
      img3.src = 'lion.jpeg';
    }else{
      img.src = 'cow.jpeg';
      img1.src = 'dog.jpeg';
      img2.src = 'cat.jpeg';
      img3.src = 'lion.jpeg';
    }
  }
}
