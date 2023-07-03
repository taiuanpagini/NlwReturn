import { useState } from "react";

import bugImageUrl from '../../images/bug.svg';
import ideaImageUrl from '../../images/idea.svg';
import thoughtImageUrl from '../../images/thought.svg';
import { FeedbackContent } from "./Steps/FeedbackContent";
import { FeedbackSuccess } from "./Steps/FeedbackSuccess";
import { FeedbackTypes } from "./Steps/FeedbackTypes";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  }
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbaskSent, setFeedbaskSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbaskSent(false);
    setFeedbackType(null);
  }

  function showTypeScreen() {
    return (
      <>
        {!feedbackType ? (
          <FeedbackTypes onFeedbackTypeChanged={setFeedbackType} />
        ) : (
          <FeedbackContent
            feedbackType={feedbackType}
            onFeedbackRestartRequest={handleRestartFeedback}
            onFeedbackSent={() => setFeedbaskSent(true)}
          />
        )}
      </>
    );
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbaskSent ? (
        <FeedbackSuccess onFeedbackRestartRequest={handleRestartFeedback} />
      ) : showTypeScreen()}

      <footer className="text-xs text-neutral-400">
        Feito com ♥
      </footer>
    </div>
  );
}