//배열 안에 학생 이름,점수 객체 생성
let students = [
  { 이름: '전수현', 국어: 85, 영어: 95, 수학: 80 },
  { 이름: '변백현', 국어: 70, 영어: 80, 수학: 90 },
  { 이름: '배주현', 국어: 60, 영어: 90, 수학: 75 }
];

$(document).ready(function(){
  console.log(students);
  //제목 생성
  $('#exam_score').append(`<div>이름\t국어\t영어\t수학\t합계\t평균</div>`);
  //객체를 돌면서 합계,평균 계산 
  for(const score of students) {
    let get_sum = score.국어 + score.영어 + score.수학;
    score.합계 = get_sum;
    let get_avg = Number((get_sum / 3).toFixed(2));
    score.평균 = get_avg;
    //html 요소 안에 객체 값 넣기
    $(`#exam_score`).append(`<div>${score.이름}\t${score.국어}\t${score.영어}\t${score.수학}\t${score.합계}\t${score.평균}</div>`);
  }
});


