print("Sound Level"+ input.sound_level())
while True:
   
    if input.sound_level()<=20:
       light.set_all(light.rgb(255,0,255))
    elif input.sound_level()<=30:
        light.set_all(light.rgb(255,255,0))
    

