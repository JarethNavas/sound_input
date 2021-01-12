console.log("Sound Level" + input.soundLevel())
while (true) {
    if (input.soundLevel() <= 20) {
        light.setAll(light.rgb(255, 0, 255))
    } else if (input.soundLevel() <= 30) {
        light.setAll(light.rgb(255, 255, 0))
    }
    
}
