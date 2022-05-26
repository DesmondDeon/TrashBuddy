/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Label, Button, Textarea } from 'theme-ui';
import { ContactComponent } from 'components/contactComponent/ContactComponent';

const data = {
    subTitle: 'Submit For A Quote',
    title: 'Contact Us',
    btnName: 'Sumbit',
    btnURL: '#',
  };

export default function Contact() {
    return (
        <section>
            <Container>
                <TextFeature 
                    subTitle={data.subTitle}
                    title={data.title}
                    />
            </Container>
        </section>
    )
}