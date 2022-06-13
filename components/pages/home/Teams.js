import JobAplication from '@/components/JobAplication'
import TeamMembers from '@/components/TeamMembers'
import TitleunderLine from '@/components/TitleunderLine'

const Teams = () => {
  return (
    <section id="our-team">
      <div className="container mx-auto space-y-8 py-14">
        <div className=" w-max mx-auto">
          <h3 className="font-aclonica text-3xl uppercase md:text-4xl">
            leadership
          </h3>
          <TitleunderLine />
        </div>
        <TeamMembers />
      </div>
      <JobAplication />
    </section>
  )
}

export default Teams
