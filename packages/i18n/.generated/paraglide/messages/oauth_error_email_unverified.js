/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Error_Email_UnverifiedInputs */

const en_oauth_error_email_unverified = /** @type {(inputs: Oauth_Error_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your Discord email isn’t verified. Verify it in Discord and try again.`)
};

const es_oauth_error_email_unverified = /** @type {(inputs: Oauth_Error_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu correo de Discord no está verificado. Verifícalo en Discord e inténtalo de nuevo.`)
};

const de_oauth_error_email_unverified = /** @type {(inputs: Oauth_Error_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Discord-E-Mail-Adresse ist nicht bestätigt. Bestätige sie in Discord und versuche es erneut.`)
};

const fr_oauth_error_email_unverified = /** @type {(inputs: Oauth_Error_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre e-mail Discord n’est pas vérifié. Vérifiez-le dans Discord puis réessayez.`)
};

const it_oauth_error_email_unverified = /** @type {(inputs: Oauth_Error_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua email di Discord non è verificata. Verificala su Discord e riprova.`)
};

const nl_oauth_error_email_unverified = /** @type {(inputs: Oauth_Error_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je Discord-e-mailadres is niet geverifieerd. Verifieer het in Discord en probeer het opnieuw.`)
};

const pl_oauth_error_email_unverified = /** @type {(inputs: Oauth_Error_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres e-mail w Discordzie nie jest zweryfikowany. Zweryfikuj go w Discordzie i spróbuj ponownie.`)
};

const pt_oauth_error_email_unverified = /** @type {(inputs: Oauth_Error_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O e-mail do seu Discord não está verificado. Verifique-o no Discord e tente novamente.`)
};

const ru_oauth_error_email_unverified = /** @type {(inputs: Oauth_Error_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Почта в Discord не подтверждена. Подтвердите её в Discord и повторите попытку.`)
};

const sv_oauth_error_email_unverified = /** @type {(inputs: Oauth_Error_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din Discord-e-post är inte verifierad. Verifiera den i Discord och försök igen.`)
};

const tr_oauth_error_email_unverified = /** @type {(inputs: Oauth_Error_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord e-postan doğrulanmamış. Discord’da doğrula ve tekrar dene.`)
};

const zh_oauth_error_email_unverified = /** @type {(inputs: Oauth_Error_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的 Discord 邮箱尚未验证。请先在 Discord 中验证后重试。`)
};

const ja_oauth_error_email_unverified = /** @type {(inputs: Oauth_Error_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord のメールアドレスが未確認です。Discord で確認してからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Your Discord email isn’t verified. Verify it in Discord and try again." |
*
* @param {Oauth_Error_Email_UnverifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_error_email_unverified = /** @type {((inputs?: Oauth_Error_Email_UnverifiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Error_Email_UnverifiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_error_email_unverified(inputs)
	if (locale === "de") return de_oauth_error_email_unverified(inputs)
	if (locale === "fr") return fr_oauth_error_email_unverified(inputs)
	if (locale === "it") return it_oauth_error_email_unverified(inputs)
	if (locale === "nl") return nl_oauth_error_email_unverified(inputs)
	if (locale === "pl") return pl_oauth_error_email_unverified(inputs)
	if (locale === "pt") return pt_oauth_error_email_unverified(inputs)
	if (locale === "ru") return ru_oauth_error_email_unverified(inputs)
	if (locale === "sv") return sv_oauth_error_email_unverified(inputs)
	if (locale === "tr") return tr_oauth_error_email_unverified(inputs)
	if (locale === "zh") return zh_oauth_error_email_unverified(inputs)
	if (locale === "ja") return ja_oauth_error_email_unverified(inputs)
	return en_oauth_error_email_unverified(inputs)
});
