/** @jsx jsx */
import emailjs from '@emailjs/browser';
import TextFeature from 'components/text-feature';
import { jsx ,Container, Box, Label, Button, Textarea,} from 'theme-ui';

export default function ContactComponent(
    src,
    altText = 'deafult alt text',
    title,
    text,
) {
     return (
    <section>
        <Container mb={3}>
            <Box as="form" onSubmit={(e) =>
                 e.preventDefault()}> 
            <Label htmlFor="name">Name</Label>
                <Textarea 
                     type="name" 
                     placeholder="Name" 
                     className="name" 
                     name="name" 
                     id="name" 
                 />
            <Label htmlFor="email">Email</Label>
                <Textarea 
                    type="email" 
                    placeholder="Email" 
                    className="email" 
                    name="email" 
                    id="email" 
                    mb={3} 
                />
            <Label htmlFor="message">Message</Label>
                <Textarea 
                    name="message" 
                    placeholder="Message...." 
                    id="message" 
                    row={6} mb={3} 
                />
            <Button type="submit" className="send">Send</Button>
            </Box>
        </Container>
    </section>
    );
}

const styles = {
    containerBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: ['wrap', null, null, 'nowrap'],
        pb: [0, 7, 0, null, 7],
        pt: 11,
      },
      contentBox: {
        flexShrink: 0,
        px: [0, null, '30px', 0],
        textAlign: ['center', null, null, 'left'],
        width: ['100%', '80%', null, 340, 400, 430, null, 485],
        pb: ['50px', '60px', null, 0],
        mx: ['auto', null, null, 0],
        '.description': {
          pr: [0, null, 6, 7, 6],
        },
        shapeBox: {
            position: 'absolute',
            bottom: -65,
            right: -165,
            zIndex: -1,
            display: ['none', 'inline-block', 'none', null, 'inline-block'],
          },
          subTitle: {
            fontSize: 1,
            fontWeight: 400,
            lineHeight: '1.9',
          },
    },
  };