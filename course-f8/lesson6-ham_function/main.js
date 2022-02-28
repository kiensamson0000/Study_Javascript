        // 1. Tham số
        //     - là giá trị truyền vào khi gọi hàm 
        //     - không bị giới hạn kiểu dữ liệu
        //     - tham số chỉ sử dụng được trong hàm

        // 2. Định nghĩa và truyền tham số
        //     - có thể định nghĩa ra nhiều tham số
        //     - mỗi tham só định nghĩa ra cách nhau bằng dấu phẩy
        //     - có thể chuyền vào nhiều tham số tương ứng với tham số đã định nghĩa
        //     - mỗi tham số truyền vào cách nhau bằng dấu phẩy

        function sayHi(abc, xyz) {   // tên của hàm là sayHi
            alert(abc)               // có hai tham số định nghĩa là abc và xyz
            alert(xyz)               // truyền vào hai tham số tương ứng là:
        }                            // Chào lần 1 và Chào lần 2
        sayHi('Chào lần 1', 'Chào lần 2')
            
    // - khi không truyền vào tham số thì tham số tự định nghĩa sẽ thành undefined

    // 3. Arguments ?
    //      - không gọi được bên ngoài function
    //      - có tính chất tương đương mảng (array)
    //      - dùng để truyền nhiều tham số mà không cần định nghĩa tham số
    //      - khi truyền vào tham số sẽ ở dạng mảng

        function writeLog() {
            console.log(arguments)
        }
        writeLog('alo', 1234, NaN)   //Arguments(3) ['alo', 1234, NaN]
