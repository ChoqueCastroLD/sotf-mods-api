/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Invalid_Credentials_DetailInputs */

const en_errors_code_invalid_credentials_detail = /** @type {(inputs: Errors_Code_Invalid_Credentials_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That email, handle or password doesn’t match an account. Check them and try again.`)
};

const es_errors_code_invalid_credentials_detail = /** @type {(inputs: Errors_Code_Invalid_Credentials_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ese email, nombre de usuario o contraseña no coinciden con ninguna cuenta. Revísalos y vuelve a intentarlo.`)
};

const de_errors_code_invalid_credentials_detail = /** @type {(inputs: Errors_Code_Invalid_Credentials_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese E-Mail, dieser Handle oder dieses Passwort passt zu keinem Konto. Prüf deine Eingaben und versuch es noch einmal.`)
};

const fr_errors_code_invalid_credentials_detail = /** @type {(inputs: Errors_Code_Invalid_Credentials_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cet e-mail, cet identifiant ou ce mot de passe ne correspond à aucun compte. Vérifiez-les et réessayez.`)
};

const it_errors_code_invalid_credentials_detail = /** @type {(inputs: Errors_Code_Invalid_Credentials_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa email, questo handle o questa password non corrispondono a nessun account. Controllali e riprova.`)
};

const nl_errors_code_invalid_credentials_detail = /** @type {(inputs: Errors_Code_Invalid_Credentials_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit e-mailadres, deze handle of dit wachtwoord hoort bij geen enkel account. Controleer ze en probeer het opnieuw.`)
};

const pl_errors_code_invalid_credentials_detail = /** @type {(inputs: Errors_Code_Invalid_Credentials_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten e-mail, nazwa użytkownika lub hasło nie pasują do żadnego konta. Sprawdź je i spróbuj ponownie.`)
};

const pt_errors_code_invalid_credentials_detail = /** @type {(inputs: Errors_Code_Invalid_Credentials_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esse e-mail, nome de usuário ou senha não correspondem a nenhuma conta. Confira e tente de novo.`)
};

const ru_errors_code_invalid_credentials_detail = /** @type {(inputs: Errors_Code_Invalid_Credentials_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эти email, имя пользователя или пароль не подходят ни к одному аккаунту. Проверьте их и попробуйте ещё раз.`)
};

const sv_errors_code_invalid_credentials_detail = /** @type {(inputs: Errors_Code_Invalid_Credentials_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`E-postadressen, användarnamnet eller lösenordet matchar inget konto. Kontrollera dem och försök igen.`)
};

const tr_errors_code_invalid_credentials_detail = /** @type {(inputs: Errors_Code_Invalid_Credentials_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu e-posta, kullanıcı adı veya şifre hiçbir hesapla eşleşmiyor. Kontrol edip tekrar dene.`)
};

const zh_errors_code_invalid_credentials_detail = /** @type {(inputs: Errors_Code_Invalid_Credentials_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该邮箱、用户名或密码与任何账号都不匹配。请检查后重试。`)
};

const ja_errors_code_invalid_credentials_detail = /** @type {(inputs: Errors_Code_Invalid_Credentials_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このメールアドレス、ハンドル、またはパスワードに一致するアカウントがありません。確認してもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "That email, handle or password doesn’t match an account. Check them and try again." |
*
* @param {Errors_Code_Invalid_Credentials_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_invalid_credentials_detail = /** @type {((inputs?: Errors_Code_Invalid_Credentials_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Invalid_Credentials_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_invalid_credentials_detail(inputs)
	if (locale === "de") return de_errors_code_invalid_credentials_detail(inputs)
	if (locale === "fr") return fr_errors_code_invalid_credentials_detail(inputs)
	if (locale === "it") return it_errors_code_invalid_credentials_detail(inputs)
	if (locale === "nl") return nl_errors_code_invalid_credentials_detail(inputs)
	if (locale === "pl") return pl_errors_code_invalid_credentials_detail(inputs)
	if (locale === "pt") return pt_errors_code_invalid_credentials_detail(inputs)
	if (locale === "ru") return ru_errors_code_invalid_credentials_detail(inputs)
	if (locale === "sv") return sv_errors_code_invalid_credentials_detail(inputs)
	if (locale === "tr") return tr_errors_code_invalid_credentials_detail(inputs)
	if (locale === "zh") return zh_errors_code_invalid_credentials_detail(inputs)
	if (locale === "ja") return ja_errors_code_invalid_credentials_detail(inputs)
	return en_errors_code_invalid_credentials_detail(inputs)
});
