/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Menu_Resend_FailedInputs */

const en_auth_menu_resend_failed = /** @type {(inputs: Auth_Menu_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t send it. Try again in a moment.`)
};

const es_auth_menu_resend_failed = /** @type {(inputs: Auth_Menu_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo enviar. Inténtalo de nuevo en un momento.`)
};

const de_auth_menu_resend_failed = /** @type {(inputs: Auth_Menu_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senden fehlgeschlagen. Versuch es gleich noch einmal.`)
};

const fr_auth_menu_resend_failed = /** @type {(inputs: Auth_Menu_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de l’envoi. Réessayez dans un instant.`)
};

const it_auth_menu_resend_failed = /** @type {(inputs: Auth_Menu_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invio non riuscito. Riprova tra un attimo.`)
};

const nl_auth_menu_resend_failed = /** @type {(inputs: Auth_Menu_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versturen mislukt. Probeer het zo opnieuw.`)
};

const pl_auth_menu_resend_failed = /** @type {(inputs: Auth_Menu_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wysłać. Spróbuj ponownie za chwilę.`)
};

const pt_auth_menu_resend_failed = /** @type {(inputs: Auth_Menu_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível enviar. Tente de novo em instantes.`)
};

const ru_auth_menu_resend_failed = /** @type {(inputs: Auth_Menu_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось отправить. Попробуйте чуть позже.`)
};

const sv_auth_menu_resend_failed = /** @type {(inputs: Auth_Menu_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att skicka. Försök igen om en stund.`)
};

const tr_auth_menu_resend_failed = /** @type {(inputs: Auth_Menu_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gönderilemedi. Birazdan tekrar dene.`)
};

const zh_auth_menu_resend_failed = /** @type {(inputs: Auth_Menu_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发送失败，请稍后重试。`)
};

const ja_auth_menu_resend_failed = /** @type {(inputs: Auth_Menu_Resend_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`送信できませんでした。少し待ってからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Couldn’t send it. Try again in a moment." |
*
* @param {Auth_Menu_Resend_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_menu_resend_failed = /** @type {((inputs?: Auth_Menu_Resend_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Menu_Resend_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_menu_resend_failed(inputs)
	if (locale === "de") return de_auth_menu_resend_failed(inputs)
	if (locale === "fr") return fr_auth_menu_resend_failed(inputs)
	if (locale === "it") return it_auth_menu_resend_failed(inputs)
	if (locale === "nl") return nl_auth_menu_resend_failed(inputs)
	if (locale === "pl") return pl_auth_menu_resend_failed(inputs)
	if (locale === "pt") return pt_auth_menu_resend_failed(inputs)
	if (locale === "ru") return ru_auth_menu_resend_failed(inputs)
	if (locale === "sv") return sv_auth_menu_resend_failed(inputs)
	if (locale === "tr") return tr_auth_menu_resend_failed(inputs)
	if (locale === "zh") return zh_auth_menu_resend_failed(inputs)
	if (locale === "ja") return ja_auth_menu_resend_failed(inputs)
	return en_auth_menu_resend_failed(inputs)
});
