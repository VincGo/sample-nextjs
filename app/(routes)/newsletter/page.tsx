import Heading from "@/atoms/heading/Heading";
import Form from "@/molecules/form/Form";
import Input from "@/atoms/input/Input";
import './newsletter.scss';

const About = () => {
  return (
    <main className={'newsletter'}>
      <Heading level={'1'}>Inscritption newsletter</Heading>
      <Form formId={'newsletter__form'} successMessage={'Votre inscription a bien été prise en compte.'}>
        <Input type={'email'} placeholder={'Email'} required={true} name={'email'} />
        <Input type={'text'} placeholder={'Prénom'} required={false} name={'firstname'} />
      </Form>
    </main>
  )
}

export default About;
