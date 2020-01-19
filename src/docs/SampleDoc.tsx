import React from 'react';
import { Jh1, Jh2, Jh3, Jh4, Jh5, Jh6 } from 'components/Heading';
import { Jstrong, Jem } from 'components/TextEffect';
import { Jbr, Jhr } from 'components/TextBreak';

const SampleDoc: React.FC = () => {

  return (
    <>
      <Jh1>Headings</Jh1>
      <Jhr />
      <section>
        <Jh1>Heading 1</Jh1>
        <Jh2>Heading 2</Jh2>
        <Jh3>Heading 3</Jh3>
        <Jh4>Heading 4</Jh4>
        <Jh5>Heading 5</Jh5>
        <Jh6>Heading 6</Jh6>
      </section>

      <Jh1>Text Effects</Jh1>
      <Jhr />
      <section>
        <Jstrong>strong</Jstrong>
        <Jbr />
        <Jem>emphasis</Jem>
      </section>

      <Jh1>Text Breaks</Jh1>
      <Jhr />
      <section>
        Break without slashes
        <Jbr />
        Break with slashes
        <Jbr useSlashes />
      </section>
    </>
  );
};

export default SampleDoc;
