import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import {LinearGradient} from "expo-linear-gradient"
import {StatusBar} from "expo-status-bar"

import beatchImage from '@/assets/meditation-images/beach.webp'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'expo-router'
import AppGradient from '@/components/AppGradient'

const App = () => {
  const router = useRouter();
  return (
    <View className='flex-1'>
      <ImageBackground source={beatchImage} resizeMode='cover' className='flex-1'>
        <AppGradient colors={["rgba(0 ,0 ,0 ,0.4)","rgba(0, 0, 0, 0.8)"]}>
            <SafeAreaView className='flex-1 justify-between'>
              <View>
                <Text className='text-center text-white font-bold text-4xl'>Simple Meditation</Text>
                <Text className='text-center text-white text-regular text-2xl mt-3'>Simplifying Meditation for Everyone</Text>

              </View>
              <View>
                <CustomButton onPress={()=>router.push('/nature-meditate')} title='Get Started'></CustomButton>
              </View>  
              <StatusBar style="light"/>
            </SafeAreaView>
        </AppGradient>
        
      </ImageBackground>
      
    </View>
  )
}

export default App