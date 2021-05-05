// prosty_program.cpp : Ten plik zawiera funkcję „main”. W nim rozpoczyna się i kończy wykonywanie programu.
//

#include <iostream>
#include <math.h>
#include <conio.h>

int main()
{
    int x;
    do {
        std::cout << "Witaj w kalkulatorze! Wybierz operacje jaką chciałbyś wykonać:!\n"
            << "1:Suma\n"
            << "2:Roznica\n"
            << "3:Iloczyn\n"
            << "4:Iloraz\n"
            << "5:Potega\n"
            << "6:Pierwiastek\n"
            << "7:Silnia\n";
        << "8:Wyjdz z programu\n"
            cin >> x;
        switch (x) {
        case 1:
            suma();
            break;
        case 2:
            roznica();
            break;
        case 3:
            iloczyn();
            break;
        case 4:
            iloraz();
            break;
        case 5:
            potega();
            break;
        case 6:
            pierwiastek();
            break;
        case 7:
            silnia();
            break;
        case 8:
            exit(0);
            break;
        default:
            std::cout << "Błąd!";
            break;
        }
    } while (x != 8);
        _getch();
}
void suma() {
    int sum = 0, number, value;
    std::cout << "Ile chcesz liczb zsumowac: ";
    std::cin >> number;
    std::cout << "\n Podaj liczby jedna po drugiej:\n";
    for (int i = 0; i < number; i++){
        std::cin >> value;
        sum += value;
    }
    std::cout << "\nSuma tych liczb jest rowna: " << sum;
}
void roznica() {
    int sub, nrFirst, nrSecond;
    std::cout << "Wpisz odjemna:";
    std::cin >> nrFirst;
    std::cout << "\n Wpisz odjemnik";
    std::cin >> nrSecond;
    sub = nrFirst - nrSecond;
    std::cout << "Roznica tych dwoch liczb wynosi: " << sub;
}

// Uruchomienie programu: Ctrl + F5 lub menu Debugowanie > Uruchom bez debugowania
// Debugowanie programu: F5 lub menu Debugowanie > Rozpocznij debugowanie

// Porady dotyczące rozpoczynania pracy:
//   1. Użyj okna Eksploratora rozwiązań, aby dodać pliki i zarządzać nimi
//   2. Użyj okna programu Team Explorer, aby nawiązać połączenie z kontrolą źródła
//   3. Użyj okna Dane wyjściowe, aby sprawdzić dane wyjściowe kompilacji i inne komunikaty
//   4. Użyj okna Lista błędów, aby zobaczyć błędy
//   5. Wybierz pozycję Projekt > Dodaj nowy element, aby utworzyć nowe pliki kodu, lub wybierz pozycję Projekt > Dodaj istniejący element, aby dodać istniejące pliku kodu do projektu
//   6. Aby w przyszłości ponownie otworzyć ten projekt, przejdź do pozycji Plik > Otwórz > Projekt i wybierz plik sln
