import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const PatientInfoScreen = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.backButton}>←</Text>
      <Text style={styles.headerTitle}>Patient Name</Text>
    </View>

    <View style={styles.idStatusContainer}>
      <Text style={styles.patientId}>#T2EDK43578</Text>
      <Text style={styles.status}>Registered</Text>
    </View>

    <View style={styles.patientInfoContainer}>
      <View style={styles.infoRow}>
        <Text style={styles.avatarIcon}>👤</Text>
        <View style={styles.patientDetails}>
          <Text style={styles.patientName}>Abhi Rao</Text>
          <Text style={styles.patientInfo}>M (45)</Text>
          <Text style={styles.address}>
            1st Cross, abc layout, xyz nagar, raipur chhattisgarh
          </Text>
        </View>
        <Text style={styles.callIcon}>📞</Text>
      </View>
    </View>

    <View style={styles.mapPlaceholder}>
      <Text style={styles.mapText}>Map Placeholder</Text>
    </View>

    <View style={styles.additionalInfo}>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Patient Type:</Text>
        <Text style={styles.detailValue}>Regular</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Date of Birth:</Text>
        <Text style={styles.detailValue}>09-08-1998</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Mobile:</Text>
        <Text style={styles.detailValue}>90•••••••••</Text>
      </View>
    </View>

    <View style={styles.testDetails}>
      <Text style={styles.testTitle}>Test Details</Text>
      <Text style={styles.testName}>Complete Blood Count : CBC</Text>
      <Text style={styles.parameters}>26 Parameter(s) Covered</Text>
      <Text style={styles.seeMore}>See more details ⓘ</Text>
      <Text style={styles.labInfo}>🏥 Ahuja Lab</Text>
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.buttonText}>Cancel Booking</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rescheduleButton}>
        <Text style={styles.buttonText}>Reschedule Booking</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.proceedButton}>
      <Text style={styles.proceedText}>Proceed</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    fontSize: 24,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  idStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  patientId: {
    fontSize: 16,
  },
  status: {
    backgroundColor: '#d3eafc',
    color: '#007bff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  patientInfoContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarIcon: {
    fontSize: 40,
    marginRight: 10,
  },
  patientDetails: {
    flex: 1,
  },
  patientName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  patientInfo: {
    fontSize: 14,
    color: '#666',
  },
  address: {
    fontSize: 14,
    color: '#666',
  },
  callIcon: {
    fontSize: 24,
    color: '#00cc44',
  },
  mapPlaceholder: {
    backgroundColor: '#e1e1e1',
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  mapText: {
    color: '#888',
    fontSize: 16,
  },
  additionalInfo: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  testDetails: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  testTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  testName: {
    fontSize: 14,
    color: '#333',
  },
  parameters: {
    fontSize: 14,
    color: '#666',
  },
  seeMore: {
    fontSize: 14,
    color: '#007bff',
    marginTop: 8,
  },
  labInfo: {
    fontSize: 14,
    marginTop: 8,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: '#ff4d4d',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    marginRight: 5,
  },
  rescheduleButton: {
    backgroundColor: '#cccccc',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  proceedButton: {
    backgroundColor: '#00ccff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  proceedText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default PatientInfoScreen;
