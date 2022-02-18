// 명시적 함수
        // 함수를 호출하기 전에 선언문은 head의 script안에 작성
        // 미리 준비
        function hi(num) { //num : 매개변수로 사용
            document.write(`<p>${num} : hi</p>`);
        }
        function squr (num) { //num : 매개변수로 사용
            return num*num;  // 함수의 결과값을 되돌려줌
        }
        //인수를 몇 개 사용하는지 모를 때
        //여러 개의 인수가 들어올 때
        function add() {
            // 여러 개의 인수는 arguments에 배열로 저장
            let count = arguments.length;
            let sum =0;
            for ( num of arguments ) { // 배열이기 때문에 for ... of 사용가능
                sum += num;
            }
            document.write(`총 개수: ${count}, 합: ${sum}`);
        }

        //실습 함수
        function print (text) {
            document.write(`<h3>${text}</h3>`);
        }

        function multi(a, b) {
            return a * b;
        }

        function show (array) {
            let arrayNum = arguments;
            for (num2 of arguments) {
                document.write(num2);
            }
        }