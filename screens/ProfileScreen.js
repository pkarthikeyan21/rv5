import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Share from 'react-native-share';

// import files from '../assets/filesBase64';

const ProfileScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
      <View style={{flexDirection:'row',marginTop:25, }}>
      <Avatar.Image size={100} source={require('../assets/karthi.jpeg')} />
      <View style={{marginLeft:20,marginTop:15, marginBottom:5}}>
      <Title style={styles.title}>Karthi</Title>
      <Caption style={styles.caption}>@karthi27</Caption>           
      </View>
      </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={25}/>
           <Text style={{color:"#777777", marginLeft:20,fontSize:15}}>Chennai</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={25}/>
           <Text style={{color:"#777777", marginLeft:20,fontSize:15}}>9025495807</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={25}/>
           <Text style={{color:"#777777", marginLeft:20,fontSize:15}}>karthi27042001@gmail.com</Text>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {''}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={30}/>
            <Text style={styles.menuItemText}>Your routine</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {''}}>
          <View style={styles.menuItem}>
            <Icon name="table" color="#FF6347" size={30}/>
            <Text style={styles.menuItemText}>Bmi Score</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {''}}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={30}/>
            <Text style={styles.menuItemText}>Tell your friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {'SupportScreen'}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={30}/>
            <Text style={styles.menuItemText}>support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {''}}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#FF6347" size={30}/>
            <Text style={styles.menuItemText}>settings</Text>
          </View>
        </TouchableRipple>
      </View>
      </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 26,
  },
});
