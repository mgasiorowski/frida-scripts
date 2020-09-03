/*
 * crash-application-on-activity.js - Frida snippets for Android
 *
 * Frida.re JS script snippets for Android instrumentation.
 * See https://www.frida.re/, https://codeshare.frida.re/
 * for further information on this powerful tool.
 *
 * Example usage:
 * 
 * Change <activity> to the correct activity.
 * 
 * Frida:
 * # frida -U -f com.xxx.yyy -l crash-application-on-activity.js --no-pause
 * 
 * Objection:
 * # import crash-application-on-activity.js
 */

setTimeout(function() { // avoid java.lang.ClassNotFoundException
    console.log("\n Crash application on activity script started");
    Java.perform(function () {
        var Activity = Java.use('<activity>');
        var Exception = Java.use('java.lang.Exception');
        Activity.onCreate.implementation = function () {
          throw Exception.$new('Oh noes!');
        };
      });
}, 0);
