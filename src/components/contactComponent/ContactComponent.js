/** @jsx jsx */
import emailjs from '@emailjs/browser';
import TextFeature from 'components/text-feature';
import { t } from 'prettier';
import { useRef } from 'react';
import { jsx ,Container, Box, Label, Input, Button, Textarea,} from 'theme-ui';

const data = {
    subTitle: 'Submit For A Quote',
    title: 'Contact Us',
    btnName: 'Sumbit',
    btnURL: '#',
  };

export default function ContactComponent() {

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('contact_service', 'contact_form', form.current, 'P84fI0LQ9J2HSi8ZS')
          .then((result) => {
              console.log(result.text);
              alert('Your message has been sent. I will contact you soon');
          }, (error) => {
              console.log(error.text);
              alert('Please try again later');
          });

      };
    
    
    return (
    <section>
        <Container className="container" mb={1} pt={8} >
            <Box className="row">
                <TextFeature 
                    subTitle={data.subTitle}
                    title={data.title}
                    />
            </Box>
            <Box sx={styles.forms} ref={form} as="form" onSubmit={sendEmail}> 
            <Label htmlFor="name">Name</Label>
                <Input 
                    sx={styles.input}
                    type="text"
                    name="fullName" 
                    id="name" 
                    placeholder="Name" 
                    autofillBackgroundColor="highlight" 
                    />
            <Label htmlFor="email">Email</Label>
                <Input 
                    sx={styles.input}
                    type="email"
                    name="email" 
                    id="email" 
                    placeholder="Email" 
                    autofillBackgroundColor="highlight" 
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
    forms: {
        label: {
            fontSize: 3,
            FontWeight: 'bold',
            pt: 2,
        },
        input:{
            borderColor: 'grey',
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
                outline: 'none'
            },
        },
        select: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
                outline: 'none',
            },
        },
        textarea: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                fontSizes: [14],
                boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
                outline: 'none',
            },
        },
    }
  };