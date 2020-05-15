function validate(data) {
    const { 
        login, 
        password, 
        confirmPassword, 
        firstName, 
        gender, 
        license,
        // lastName, 
        // secondName, 
    } = data;

    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (login === "beeline" || login === "beeinterns" || login === "bee"){
        alert('Выбранный логин занят');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!firstName) {
        alert('Укажите Имя');
    // }  else if (!lastName) {
    //     alert('Укажите Фамилию');
    // } else if (!secondName) {
    //     alert('Укажите Отчество');
    } else if (!license) {
        alert('Необходимо согласие');
    } else {
        if (gender == 'male'){
            alert(`Уважаемый ${firstName}, заявка создана`);
        } else {
            alert(`Уважаемая ${firstName}, заявка создана`);
        }
    }
}