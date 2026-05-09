import { Pairing } from "./Pairing";

export function PairingCompletedExample() {
  return (
    // Could add props to each component with either styling to make it all fit
    // or a layoutType="..." prop on Pairing,
    // or whatever, possibilites are endless!
    // Or if they dont really need to share state/behavior, just compose them, skip the compound part/the namespace part.
    <Pairing>
      <Pairing.Title>Pairing completed</Pairing.Title>
      <Pairing.Description>
        Wow, what an amazing process has finished
      </Pairing.Description>
      <Pairing.Buttons>
        <Pairing.Button>OK</Pairing.Button>
      </Pairing.Buttons>
    </Pairing>
  );
}
