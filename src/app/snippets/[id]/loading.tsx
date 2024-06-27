// export default function LoadingPage() {
//   return (
//     <div>
//       <ul className="list-desc pl-6 mt-4">
//         {[1, 2, 3, 4, 5].map((i) => (
//           <li key={i} className="text-lg">
//             <span
//               style={{
//                 animationDelay: `${i * 0.05}s`,
//                 animationDuration: "1s",
//               }}
//               className="animate-pulse"
//             >
//               Loading snippets...
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default function LoadingPage() {
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
}
