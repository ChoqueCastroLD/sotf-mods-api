/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Link_TextInputs */

const en_oauth_link_text = /** @type {(inputs: Oauth_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An account with the email of your Discord profile already exists. Enter its password to link Discord and sign in.`)
};

const es_oauth_link_text = /** @type {(inputs: Oauth_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya existe una cuenta con el correo de tu perfil de Discord. Introduce su contraseña para vincular Discord e iniciar sesión.`)
};

const de_oauth_link_text = /** @type {(inputs: Oauth_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit der E-Mail-Adresse deines Discord-Profils existiert bereits ein Konto. Gib dessen Passwort ein, um Discord zu verknüpfen und dich anzumelden.`)
};

const fr_oauth_link_text = /** @type {(inputs: Oauth_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un compte avec l’e-mail de votre profil Discord existe déjà. Saisissez son mot de passe pour lier Discord et vous connecter.`)
};

const it_oauth_link_text = /** @type {(inputs: Oauth_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esiste già un account con l’email del tuo profilo Discord. Inserisci la sua password per collegare Discord e accedere.`)
};

const nl_oauth_link_text = /** @type {(inputs: Oauth_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er bestaat al een account met het e-mailadres van je Discord-profiel. Voer het wachtwoord in om Discord te koppelen en in te loggen.`)
};

const pl_oauth_link_text = /** @type {(inputs: Oauth_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konto z adresem e-mail Twojego profilu Discord już istnieje. Podaj jego hasło, aby połączyć Discord i się zalogować.`)
};

const pt_oauth_link_text = /** @type {(inputs: Oauth_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Já existe uma conta com o e-mail do seu perfil do Discord. Digite a senha dela para vincular o Discord e entrar.`)
};

const ru_oauth_link_text = /** @type {(inputs: Oauth_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Аккаунт с адресом почты вашего профиля Discord уже существует. Введите его пароль, чтобы привязать Discord и войти.`)
};

const sv_oauth_link_text = /** @type {(inputs: Oauth_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det finns redan ett konto med e-postadressen i din Discord-profil. Ange dess lösenord för att koppla Discord och logga in.`)
};

const tr_oauth_link_text = /** @type {(inputs: Oauth_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord profilindeki e-postayla zaten bir hesap var. Discord’u bağlayıp giriş yapmak için parolasını gir.`)
};

const zh_oauth_link_text = /** @type {(inputs: Oauth_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已存在使用你 Discord 资料邮箱的账号。输入该账号的密码即可关联 Discord 并登录。`)
};

const ja_oauth_link_text = /** @type {(inputs: Oauth_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord プロフィールのメールアドレスで登録済みのアカウントがあります。そのパスワードを入力して Discord を連携し、サインインしてください。`)
};

/**
* | output |
* | --- |
* | "An account with the email of your Discord profile already exists. Enter its password to link Discord and sign in." |
*
* @param {Oauth_Link_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_link_text = /** @type {((inputs?: Oauth_Link_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Link_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_link_text(inputs)
	if (locale === "de") return de_oauth_link_text(inputs)
	if (locale === "fr") return fr_oauth_link_text(inputs)
	if (locale === "it") return it_oauth_link_text(inputs)
	if (locale === "nl") return nl_oauth_link_text(inputs)
	if (locale === "pl") return pl_oauth_link_text(inputs)
	if (locale === "pt") return pt_oauth_link_text(inputs)
	if (locale === "ru") return ru_oauth_link_text(inputs)
	if (locale === "sv") return sv_oauth_link_text(inputs)
	if (locale === "tr") return tr_oauth_link_text(inputs)
	if (locale === "zh") return zh_oauth_link_text(inputs)
	if (locale === "ja") return ja_oauth_link_text(inputs)
	return en_oauth_link_text(inputs)
});
