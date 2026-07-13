import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import chair1 from "../../assets/images/chair1.jpg";
import chair2 from "../../assets/images/chair2.jpg";
import chair3 from "../../assets/images/chair3.jpg";

const COLORS = {
  primary: "#2563EB",
  primaryDark: "#1D4ED8",
  background: "#FFFFFF",
  surface: "#F8FAFC",
  border: "#E2E8F0",
  text: "#0F172A",
  textSecondary: "#64748B",
};

const products = [
  {
    id: "1",
    name: "chair 1",
    price: 99,
    category: "Chair",
    image: chair1,
  },
  {
    id: "2",
    name: "chair 2",
    price: 999,
    category: "Chair",
    image: chair2,
  },
  {
    id: "3",
    name: "chair 3",
    price: 699,
    category: "Chair",
    image: chair3,
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="menu" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Zitkaow</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color={COLORS.textSecondary} />
          <TextInput
            placeholder="ค้นหาสินค้า..."
            placeholderTextColor={COLORS.textSecondary}
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ เพิ่มสินค้า</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterRow}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>ตัวกรอง ▼ </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.brand}>{item.category}</Text>
            <Text style={styles.price}>{item.price.toLocaleString()} บาท</Text>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color={COLORS.textSecondary} />
          <Text style={styles.navText}>หน้าแรก</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="add-circle" size={30} color={COLORS.primary} />
          <Text
            style={[
              styles.navText,
              { color: COLORS.primary, fontWeight: "600" },
            ]}
          >
            เพิ่ม
          </Text>
        </TouchableOpacity>

        {/* บรรทัดที่เคยมีปัญหา แก้ไขให้ถูกต้องและเปลี่ยนข้อความเป็น สินค้า แล้วครับ */}
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cube" size={24} color={COLORS.primary} />
          <Text
            style={[
              styles.navText,
              { color: COLORS.primary, fontWeight: "600" },
            ]}
          >
            สินค้า
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="folder" size={24} color={COLORS.textSecondary} />
          <Text style={styles.navText}>หมวดหมู่</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.primary,
  },
  iconButton: {
    width: 36,
    alignItems: "center",
  },
  profileButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 12,
    height: 48,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    color: COLORS.text,
  },
  addButton: {
    marginLeft: 12,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 18,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    elevation: 2,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
  filterRow: {
    paddingHorizontal: 18,
    paddingTop: 15,
  },
  filterButton: {
    alignSelf: "flex-end",
  },
  filterText: {
    color: COLORS.primary,
    fontWeight: "600",
    fontSize: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "contain",
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
  },
  brand: {
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  price: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.primary,
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: COLORS.background,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingVertical: 12,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
  },
  navText: {
    marginTop: 4,
    fontSize: 12,
    color: COLORS.textSecondary,
  },
});
