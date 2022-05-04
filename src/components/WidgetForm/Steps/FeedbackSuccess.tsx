import { CloseButton } from "../../CloseButton";
import successSentFeedbackImg from '../../../images/success.svg';

interface FeedbackSuccessProps {
  onFeedbackRestartRequest: () => void;
}

export function FeedbackSuccess({
  onFeedbackRestartRequest
}: FeedbackSuccessProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successSentFeedbackImg} alt="Feedback enviado com sucesso" />

        <span className="text-xl mt-2">Agradecemos seu feedback!</span>

        <button
          onClick={onFeedbackRestartRequest}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
          Quero enviar outro
        </button>
      </div>
    </>
  );
}