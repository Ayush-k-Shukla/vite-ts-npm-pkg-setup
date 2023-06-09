import mySercrets from './store/redux';

export interface IProps {
    activationSecret: string;
    emailId?: string;
}

export default function initViteTst({ activationSecret, emailId }: IProps) {
    console.log(`record received :`, activationSecret);
    mySercrets.activationSecret = activationSecret;
    mySercrets.emailId = emailId;
}
