import { StyleSheet, SafeAreaView, View } from "react-native";
import { MultiSelect } from "@/components/multiSelect";
import { useCallback, useEffect, useState } from "react";

const initialPage = "https://rickandmortyapi.com/api/character";

const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [value, setValue] = useState<string>("");

  const fetchPage = async (url: string) => {
    if (loading) return;

    setLoading(true);
    const response = await fetch(url);
    const responseJson = await response.json();

    setItems(responseJson.results);

    setLoading(false);
  };

  const debouncedFetchPage = useCallback(
    debounce((url: string) => {
      fetchPage(url);
    }, 500),
    []
  );

  useEffect(() => {
    const newUrl = initialPage + "/?name=" + value;
    const fetchUrl = value ? newUrl : initialPage;
    debouncedFetchPage(fetchUrl);
  }, [value, debouncedFetchPage]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MultiSelect items={items} value={value} setValue={setValue} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: "100%",
  },
});
