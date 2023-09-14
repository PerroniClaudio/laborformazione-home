import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import SimpleCard from "@/components/simpleCard";
import { BsFillShieldLockFill } from "react-icons/bs";
import RoundedCard from "@/components/roundedCard";
import CourseCard from "@/components/courses/courseCard";
import Footer from "@/components/footer";

type Props = {};

function page({}: Props) {
  return (
    <div className="p-8 flex flex-col gap-4">
      <Button>Bottone primario</Button>
      <Button variant="secondary">Bottone secondario</Button>
      <Navbar />

      <div className="grid grid-cols-3">
        <SimpleCard title="Area Privacy" url="/">
          <BsFillShieldLockFill className="text-9xl text-tertiary" />
        </SimpleCard>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <RoundedCard url="/" title="CORSI DI FORMAZIONE" variant="default">
          <p className="text-primary text-3xl font-semibold text-center">
            Sono corsi di alto livello in ambito di privacy, cybersecurity e
            compliance 231
          </p>
        </RoundedCard>
        <RoundedCard url="/" title="CORSI D’ECCELLENZA" variant="gulf">
          <p className="text-gulf-400 text-3xl font-semibold text-center ">
            Sono corsi specifici per DPO e professionisti con esperienza in data
            protection e cybersecurity con uno sguardo internazionale
          </p>
        </RoundedCard>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <CourseCard
          area="CORSI DI FORMAZIONE"
          title="CORSO DI FORMAZIONE PER DPO"
          url="/"
          price="€ 1.500,00"
          variant="default"
          imageUrl="https://picsum.photos/200/300">
          <p className="text-primary text-3xl font-semibold">panino</p>
        </CourseCard>

        <CourseCard
          area="CORSI DI FORMAZIONE"
          title="CORSO DI FORMAZIONE PER DPO"
          url="/"
          price="€ 1.500,00"
          variant="gulf"
          imageUrl="https://picsum.photos/200/300">
          <p className="text-primary text-3xl font-semibold">panino</p>
        </CourseCard>
      </div>

      <Footer />
    </div>
  );
}

export default page;
