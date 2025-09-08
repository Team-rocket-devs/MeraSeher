import 'package:flutter/material.dart';

class Basicdetails extends StatefulWidget {
  const Basicdetails({super.key});
  @override
  State createState() => _Basicdetails();
}

class _Basicdetails extends State {
  TextEditingController phoneNumber = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return (Container(
      decoration: BoxDecoration(
        image: DecorationImage(
          image: AssetImage('assets/background.jpeg'),
          fit: BoxFit.cover,
        ),
      ),
      child: Scaffold(
        backgroundColor: Colors.transparent,
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                "Enter OTP",
                style: TextStyle(
                    color: const Color.fromARGB(255, 75, 75, 75),
                    fontSize: 30,
                    fontWeight: FontWeight.bold),
              ),
              Container(
                margin: const EdgeInsets.only(left: 15, right: 15, bottom: 25),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: List.generate(4, (index) {
                    return SizedBox(
                      width: 50,
                      child: TextField(
                        keyboardType: TextInputType.number,
                        textAlign: TextAlign.center,
                        maxLength: 1,
                        style:
                            const TextStyle(fontSize: 24, color: Colors.black),
                        decoration: const InputDecoration(
                          counterText: "",
                          filled: true,
                          fillColor: Color.fromARGB(255, 234, 234, 234),
                          border: OutlineInputBorder(
                              borderRadius: BorderRadius.all(
                            Radius.circular(10),
                          )),
                        ),
                        onChanged: (value) {
                          if (value.isNotEmpty && index < 3) {
                            FocusScope.of(context).nextFocus();
                          } else if (value.isEmpty && index > 0) {
                            FocusScope.of(context).previousFocus();
                          }
                        },
                      ),
                    );
                  }),
                ),
              ),
              Container(
                margin: EdgeInsets.only(left: 15, right: 15),
                width: double.infinity,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Text("Continue",
                        style: TextStyle(
                            color: const Color.fromARGB(255, 75, 75, 75),
                            fontSize: 25,
                            fontWeight: FontWeight.bold)),
                    SizedBox(
                      width: 100,
                      child: IconButton(
                        icon: Icon(Icons.arrow_forward),
                        style: IconButton.styleFrom(
                            backgroundColor: Color.fromARGB(255, 0, 79, 115),
                            shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(10))),
                        onPressed: () => {},
                        color: Colors.white,
                        iconSize: 30,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    ));
  }
}
