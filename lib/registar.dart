import 'package:flutter/material.dart';
import './basicDetails.dart';

class Registar extends StatefulWidget {
  const Registar({super.key});
  @override
  State createState() => _Registar();
}

class _Registar extends State {
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
              Container(
                margin: EdgeInsets.only(left: 15, right: 15, bottom: 25),
                child: TextField(
                  keyboardType: TextInputType.number,
                  style: TextStyle(color: Colors.black),
                  decoration: InputDecoration(
                      prefixIcon: Icon(Icons.phone, color: Colors.black),
                      hintText: "Phone Number",
                      filled: true,
                      fillColor: Color.fromARGB(255, 234, 234, 234),
                      border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(10))),
                ),
              ),
              Container(
                margin: EdgeInsets.only(left: 15, right: 15),
                width: double.infinity,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Text("Get OTP",
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
                        onPressed: () => {
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => Basicdetails())),
                        },
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
