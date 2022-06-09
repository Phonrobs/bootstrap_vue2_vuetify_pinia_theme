<template>
  <v-card>
    <v-card-title>แบบฟอร์มเบิกแอลกอฮอล์</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-form>
        <v-text-field label="ชื่อผู้เบิก" outlined dense></v-text-field>
        <v-text-field label="เบอร์โทรศัพท์" outlined dense></v-text-field>
        <v-select
          label="คณะ"
          outlined
          dense
          :items="faculties"
          item-text="facultyName"
          item-value="facultyId"
        ></v-select>
        <v-select label="จำนวนที่เบิก" outlined dense></v-select>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn outlined>ยกเลิก</v-btn>
      <v-btn color="primary">บันทึก</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { useFacultyStore } from "@/stores/faculty";

export default {
  name: "ReservationView",

  data() {
    return {
      faculties: [],
    };
  },

  mounted() {
    const faculty = useFacultyStore();
    faculty.getFaculties().then((result) => {
      for (let i = 0; i < result.length; i++) {
        const element = result[i];
        this.faculties.push(element);
      }
    });
  },
};
</script>

<style>
</style>