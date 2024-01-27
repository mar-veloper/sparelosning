'use client'
import { parseAsInteger, useQueryState } from 'nuqs'
import { Case, Switch } from 'react-if'
import AgeFilter from './components/filters/AgeFilter'
import EntryFeeFilter from './components/filters/EntryFeeFilter'
import StatusFilter from './components/filters/StatusFilter'
import ButtonsContainer from './home/ButtonsContainer'
import StepsContainer from './home/StepsContainer'
import TrapTypeFilter from './components/filters/TrapTypeFilter'
import MonthlySavingFilter from './components/filters/MonthlySavingFilter'
import KeywordsFilter from './components/filters/KeywordsFilter'

export default function Home() {
  const defaultStep = parseAsInteger.withDefault(1)
  const [step] = useQueryState('step', defaultStep)

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="font-semibold w-1/3 text-center text-2xl text-neutral mt-5 font-sans letter">
        La oss hjelpe deg å finne spareløsningen som passer best for deg.
      </h1>
      <StepsContainer />
      <div className="relative artboard artboard-horizontal bg-base-200 phone-4 rounded-lg flex items-center justify-center flex-col px-8">
        <form
          className="w-full grid grid-cols-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <Switch>
            <Case condition={step === 1}>
              <StatusFilter />
              <TrapTypeFilter />
            </Case>
            <Case condition={step === 2}>
              <EntryFeeFilter />
              <AgeFilter />
              <MonthlySavingFilter />
            </Case>
            <Case condition={step === 3}>
              <KeywordsFilter />
            </Case>
          </Switch>
        </form>
      </div>
      <ButtonsContainer />
    </div>
  )
}
