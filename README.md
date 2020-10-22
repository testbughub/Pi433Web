## Description
Originally forked from [SmartPi](https://github.com/RonnyFalconeri/SmartPi),  
but because it was a while since it was updated, the module used for  
the 433MHz operations has become deprecated.  
So I decided to throw together my own repo, but with the updated module.  
I also made minor additions and changes, for example, I changed the webserver  
port from **8080** to **8043** because I use 8080 for another webserver.  
I also forked the RF_Sniffer, and changed it's port to **8042**

I can also recommend using *pm2* to autostart the webserver.
```
npm install pm2 -g
pm2 startup
pm2 start webserver.js
pm2 save
````

(Below is a (sort of) copy of [SmartPi's](https://github.com/RonnyFalconeri/SmartPi) README.)  

## Software
This is a project made with **Node.js** so you will need it installed on your Pi.


### How to install WiringPi:

To get the application running you will first need to install WiringPi. 

More infos: https://projects.drogon.net/raspberry-pi/wiringpi/

``` $ git clone git://git.drogon.net/wiringPi ```

``` $ cd wiringPi/wiringPi ```

``` $ sudo su ```

``` $ ./build ```

### Getting started

To clone this repository just simply run:

``` $ git clone https://github.com/testbughub/Pi433Web ```
  
To run the webserver open the Pi433Web directory and run:

``` $ node webserver.js ```

I recommend to set up a startscript which runs the server automaticly after booting. [Here](https://www.instructables.com/id/Nodejs-App-As-a-RPI-Service-boot-at-Startup/ "Title") is a link to a guide on how to do it.

Your wireless receiver you are looking forward to control may have different codes to be turned on. In this case you will need to sniff the code your remote control is sending in order to send it again with the Pi. [Here](https://www.princetronics.com/how-to-read-433-mhz-codes-w-raspberry-pi-433-mhz-receiver/ "Title") is a link on how to do it, **or** just use my other project [RF_Sniffer](https://github.com/testbughub/RF_Sniffer) which is an application just for sniffing 433MHz signals.

## Hardware
You don't necessarily need a Raspberry Pi for this but I recommend it because you will always find help on the internet by its big community.
You also need a 433MHz emitter. The data pin is wired to the physical pin 11 of the Pi. You can change this of course but make sure to also change the pin allocation in the code.


Have fun with the project and don't hesitate to improve it ;)
