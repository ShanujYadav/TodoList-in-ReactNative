import React, { useState } from 'react'
import {View,StyleSheet, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Task from './components/Task';
import { Keyboard } from 'react-native';

export default function App() {
  const [task,setTask]=useState();
  const [taskitem,setTaskitem]=useState([]);

  const handleAddTask=()=>{
    Keyboard.dismiss()
    setTaskitem([...taskitem,task])
    setTask(null)
  }

  const deleteTask=(index)=>{
    let itemsCpy=[...taskitem]
    itemsCpy.splice(index,1)
    setTaskitem(itemsCpy)
  }
  return (
    <View style={styles.container}>
      {/* todays Task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Item List</Text>
        <View style={styles.items}>
          {
            taskitem.map((item,index)=>{
              return(
                <TouchableOpacity key={index} onPress={()=>deleteTask(index)}>
               <Task text={item} />
                </TouchableOpacity>
              )

            })
          }
        </View>
      </View>

      {/* write a task */}
      <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'} style={styles.writeTaskWrapper} >
        <TextInput style={styles.input} placeholder={'Add item Here'} onChangeText={text=>setTask(text)} value={task}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    width: 250,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#55BCF6'
  }

})