//Beden kutle indeksi kutlenin hundurluyun kvadratina olan nisbetidir.


//Nihad ve Nailin cekilerini deyisende saxla!
//Onlarin BKI ni hesabla!
//Nihadin BKi Nailden boyukdurmu? Bunu booleanda saxla!

//Data 1
//Nihad 78kq 1.69sm
//Nail 85kq 1.95sm


//Data 2
//Nihad 95 kq 1.88sm
//Nail 85kq 1.76sm
        //Data 1-in helli
        let Nailinboyu1 = 1.95;
        let Nailceki1 = 85;
        let Nihadinboyu1 = 1.69;
        let  Nihadceki1 = 78;

        Nail1 = Nailceki /  ( Nailinboyu ** 2);
        Nihad1= Nihadceki / ( Nihadinboyu ** 2);

        if(Nihad1 > Nail1){
            console.log(true);
        }
        else{
            console.log(false);
        }        


        //Data 2-nin helli
        let NailBoy2 = 1.76;
        let NailCeki2 = 85;
        let NihadBoy2 = 1.88
        let NihadCeki2 = 95

        Nihad2 = Nihadceki2 / (Nihadinoyu2 ** 2);
        Nail2 = Nailceki2 / (Nailinboyu2 ** 2);

       if(Nail2  <  Nihad2){
    console.log(true);
    }
       else{
    console.log(false);
    }
        