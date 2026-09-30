/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Unlink_TextInputs */

const en_oauth_unlink_text = /** @type {(inputs: Oauth_Unlink_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You will sign in with your email and password instead. Enter your password to confirm. If you created your account with Discord, set a password first with “Forgot password”.`)
};

const es_oauth_unlink_text = /** @type {(inputs: Oauth_Unlink_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iniciarás sesión con tu correo y contraseña. Introduce tu contraseña para confirmar. Si creaste tu cuenta con Discord, primero define una contraseña con «Olvidé mi contraseña».`)
};

const de_oauth_unlink_text = /** @type {(inputs: Oauth_Unlink_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du meldest dich dann mit E-Mail und Passwort an. Gib zur Bestätigung dein Passwort ein. Wenn du dein Konto mit Discord erstellt hast, lege zuerst über „Passwort vergessen“ ein Passwort fest.`)
};

const fr_oauth_unlink_text = /** @type {(inputs: Oauth_Unlink_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous vous connecterez alors avec votre e-mail et votre mot de passe. Saisissez votre mot de passe pour confirmer. Si vous avez créé votre compte avec Discord, définissez d’abord un mot de passe via « Mot de passe oublié ».`)
};

const it_oauth_unlink_text = /** @type {(inputs: Oauth_Unlink_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accederai con email e password. Inserisci la password per confermare. Se hai creato l’account con Discord, imposta prima una password con «Password dimenticata».`)
};

const nl_oauth_unlink_text = /** @type {(inputs: Oauth_Unlink_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je logt dan in met je e-mailadres en wachtwoord. Voer je wachtwoord in ter bevestiging. Heb je je account met Discord gemaakt, stel dan eerst een wachtwoord in via ‘Wachtwoord vergeten’.`)
};

const pl_oauth_unlink_text = /** @type {(inputs: Oauth_Unlink_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Będziesz się logować adresem e-mail i hasłem. Podaj hasło, aby potwierdzić. Jeśli konto utworzono przez Discord, najpierw ustaw hasło przez „Nie pamiętam hasła”.`)
};

const pt_oauth_unlink_text = /** @type {(inputs: Oauth_Unlink_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você entrará com e-mail e senha. Digite sua senha para confirmar. Se criou a conta com o Discord, defina antes uma senha em “Esqueci a senha”.`)
};

const ru_oauth_unlink_text = /** @type {(inputs: Oauth_Unlink_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы будете входить по почте и паролю. Введите пароль для подтверждения. Если аккаунт создан через Discord, сначала задайте пароль через «Забыли пароль».`)
};

const sv_oauth_unlink_text = /** @type {(inputs: Oauth_Unlink_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du loggar då in med e-post och lösenord. Ange ditt lösenord för att bekräfta. Om du skapade kontot med Discord, ange först ett lösenord via ”Glömt lösenord”.`)
};

const tr_oauth_unlink_text = /** @type {(inputs: Oauth_Unlink_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bunun yerine e-posta ve parolanla giriş yapacaksın. Onaylamak için parolanı gir. Hesabını Discord ile oluşturduysan önce “Parolamı unuttum” ile bir parola belirle.`)
};

const zh_oauth_unlink_text = /** @type {(inputs: Oauth_Unlink_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`之后你将使用邮箱和密码登录。请输入密码确认。如果账号是通过 Discord 创建的，请先通过“忘记密码”设置密码。`)
};

const ja_oauth_unlink_text = /** @type {(inputs: Oauth_Unlink_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今後はメールアドレスとパスワードでサインインします。確認のためパスワードを入力してください。Discord でアカウントを作成した場合は、先に「パスワードを忘れた場合」でパスワードを設定してください。`)
};

/**
* | output |
* | --- |
* | "You will sign in with your email and password instead. Enter your password to confirm. If you created your account with Discord, set a password first with “F..." |
*
* @param {Oauth_Unlink_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_unlink_text = /** @type {((inputs?: Oauth_Unlink_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Unlink_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_unlink_text(inputs)
	if (locale === "de") return de_oauth_unlink_text(inputs)
	if (locale === "fr") return fr_oauth_unlink_text(inputs)
	if (locale === "it") return it_oauth_unlink_text(inputs)
	if (locale === "nl") return nl_oauth_unlink_text(inputs)
	if (locale === "pl") return pl_oauth_unlink_text(inputs)
	if (locale === "pt") return pt_oauth_unlink_text(inputs)
	if (locale === "ru") return ru_oauth_unlink_text(inputs)
	if (locale === "sv") return sv_oauth_unlink_text(inputs)
	if (locale === "tr") return tr_oauth_unlink_text(inputs)
	if (locale === "zh") return zh_oauth_unlink_text(inputs)
	if (locale === "ja") return ja_oauth_unlink_text(inputs)
	return en_oauth_unlink_text(inputs)
});
