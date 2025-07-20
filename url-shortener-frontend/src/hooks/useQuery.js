  import { useQuery } from "@tanstack/react-query";
  import api from "../api/api";

  export const useFetchMyShortUrls = ({ token, onError }) => {
    return useQuery({
      queryKey: ["url-totalclick"],
      queryFn: async () => {
        const response = await api.get(
          "/api/urls/myurls ",
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        return response;
      },
      select: (data) => {
        // // Convert { "2025-06-16": 1 } to [{ clickDate, count }]
        // return Object.keys(data.data).map((key) => ({
        //   clickDate: key,
        //   count: data.data[key],
        // }));
        const convertToArray = data.data.sort(
          (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
        )
        return convertToArray;
      },
      onError,
      staleTime: 5000,
    });
  };

  export const useFetchTotalClicks = ({ token, onError }) => {
  return useQuery({
    queryKey: ["total-clicks"],
    queryFn: async () => {
      const startDate = "2025-06-01";
      const endDate = "2025-06-30";

      const response = await api.get(
        `/api/urls/totalClicks?startDate=${startDate}&endDate=${endDate}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    },
    select: (data) => {
      return Object.entries(data.data).map(([date, count]) => ({
        clickDate: date,
        count,
      }));
    },
    onError,
    enabled: !!token,
    staleTime: 5000,
  });
};


//  import { useQuery } from "@tanstack/react-query";
// // import { useQuery } from "react-query";
// import api from "../api/api";

// export const useFetchTotalClicks = ({ token, onError }) => {
//   return useQuery({
//     queryKey: ["url-totalclick"],
//     queryFn: async () => {
//       const response = await api.get(
//         "/api/urls/totalClicks?startDate=2024-12-01&endDate=2024-12-31",
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             Authorization: "Bearer " + token,
//           },
//         }
//       );
//       return response;
//     },
//     select: (data) => {
//       return Object.keys(data.data).map((key) => ({
//         clickDate: key,
//         count: data.data[key],
//       }));
//     },
//     onError,
//     staleTime: 5000,
//   });
// };
