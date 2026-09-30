/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Forgot_Sent_SpamInputs */

const en_auth_forgot_sent_spam = /** @type {(inputs: Auth_Forgot_Sent_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing after a few minutes? Check your spam folder or try again.`)
};

const es_auth_forgot_sent_spam = /** @type {(inputs: Auth_Forgot_Sent_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿No llega en unos minutos? Mira en la carpeta de spam o vuelve a intentarlo.`)
};

const de_auth_forgot_sent_spam = /** @type {(inputs: Auth_Forgot_Sent_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach ein paar Minuten nichts da? Schau im Spam-Ordner nach oder versuch es erneut.`)
};

const fr_auth_forgot_sent_spam = /** @type {(inputs: Auth_Forgot_Sent_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien après quelques minutes ? Regardez dans vos spams ou réessayez.`)
};

const it_auth_forgot_sent_spam = /** @type {(inputs: Auth_Forgot_Sent_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non arriva niente dopo qualche minuto? Controlla lo spam o riprova.`)
};

const nl_auth_forgot_sent_spam = /** @type {(inputs: Auth_Forgot_Sent_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na een paar minuten nog niets? Kijk in je spammap of probeer het opnieuw.`)
};

const pl_auth_forgot_sent_spam = /** @type {(inputs: Auth_Forgot_Sent_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nic nie przyszło po kilku minutach? Zajrzyj do spamu lub spróbuj ponownie.`)
};

const pt_auth_forgot_sent_spam = /** @type {(inputs: Auth_Forgot_Sent_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada depois de alguns minutos? Confira a pasta de spam ou tente de novo.`)
};

const ru_auth_forgot_sent_spam = /** @type {(inputs: Auth_Forgot_Sent_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ничего не пришло за несколько минут? Проверьте папку «Спам» или попробуйте снова.`)
};

const sv_auth_forgot_sent_spam = /** @type {(inputs: Auth_Forgot_Sent_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget efter några minuter? Kolla skräpposten eller försök igen.`)
};

const tr_auth_forgot_sent_spam = /** @type {(inputs: Auth_Forgot_Sent_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Birkaç dakika sonra hâlâ gelmedi mi? Spam klasörüne bak veya tekrar dene.`)
};

const zh_auth_forgot_sent_spam = /** @type {(inputs: Auth_Forgot_Sent_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`几分钟后还没收到？请查看垃圾邮件文件夹或重试。`)
};

const ja_auth_forgot_sent_spam = /** @type {(inputs: Auth_Forgot_Sent_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`数分たっても届かない場合は、迷惑メールフォルダを確認するか、もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Nothing after a few minutes? Check your spam folder or try again." |
*
* @param {Auth_Forgot_Sent_SpamInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_forgot_sent_spam = /** @type {((inputs?: Auth_Forgot_Sent_SpamInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Forgot_Sent_SpamInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_forgot_sent_spam(inputs)
	if (locale === "de") return de_auth_forgot_sent_spam(inputs)
	if (locale === "fr") return fr_auth_forgot_sent_spam(inputs)
	if (locale === "it") return it_auth_forgot_sent_spam(inputs)
	if (locale === "nl") return nl_auth_forgot_sent_spam(inputs)
	if (locale === "pl") return pl_auth_forgot_sent_spam(inputs)
	if (locale === "pt") return pt_auth_forgot_sent_spam(inputs)
	if (locale === "ru") return ru_auth_forgot_sent_spam(inputs)
	if (locale === "sv") return sv_auth_forgot_sent_spam(inputs)
	if (locale === "tr") return tr_auth_forgot_sent_spam(inputs)
	if (locale === "zh") return zh_auth_forgot_sent_spam(inputs)
	if (locale === "ja") return ja_auth_forgot_sent_spam(inputs)
	return en_auth_forgot_sent_spam(inputs)
});
