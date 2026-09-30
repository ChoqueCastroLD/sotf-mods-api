/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notifications_HintInputs */

const en_settings_notifications_hint = /** @type {(inputs: Settings_Notifications_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Which signals you get in the app and by email.`)
};

const es_settings_notifications_hint = /** @type {(inputs: Settings_Notifications_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué señales recibes en la app y por correo.`)
};

const de_settings_notifications_hint = /** @type {(inputs: Settings_Notifications_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welche Signale du in der App und per E-Mail bekommst.`)
};

const fr_settings_notifications_hint = /** @type {(inputs: Settings_Notifications_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les signaux reçus dans l’appli et par e-mail.`)
};

const it_settings_notifications_hint = /** @type {(inputs: Settings_Notifications_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quali segnali ricevi nell’app e via email.`)
};

const nl_settings_notifications_hint = /** @type {(inputs: Settings_Notifications_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welke signalen je in de app en per e-mail krijgt.`)
};

const pl_settings_notifications_hint = /** @type {(inputs: Settings_Notifications_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jakie sygnały dostajesz w aplikacji i e-mailem.`)
};

const pt_settings_notifications_hint = /** @type {(inputs: Settings_Notifications_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quais sinais você recebe no app e por e-mail.`)
};

const ru_settings_notifications_hint = /** @type {(inputs: Settings_Notifications_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Какие сигналы вы получаете в приложении и по почте.`)
};

const sv_settings_notifications_hint = /** @type {(inputs: Settings_Notifications_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vilka signaler du får i appen och via e-post.`)
};

const tr_settings_notifications_hint = /** @type {(inputs: Settings_Notifications_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uygulamada ve e-postayla hangi sinyalleri aldığın.`)
};

const zh_settings_notifications_hint = /** @type {(inputs: Settings_Notifications_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你在应用内和邮件中接收哪些信号。`)
};

const ja_settings_notifications_hint = /** @type {(inputs: Settings_Notifications_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アプリ内とメールで受け取るシグナル。`)
};

/**
* | output |
* | --- |
* | "Which signals you get in the app and by email." |
*
* @param {Settings_Notifications_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notifications_hint = /** @type {((inputs?: Settings_Notifications_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notifications_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notifications_hint(inputs)
	if (locale === "de") return de_settings_notifications_hint(inputs)
	if (locale === "fr") return fr_settings_notifications_hint(inputs)
	if (locale === "it") return it_settings_notifications_hint(inputs)
	if (locale === "nl") return nl_settings_notifications_hint(inputs)
	if (locale === "pl") return pl_settings_notifications_hint(inputs)
	if (locale === "pt") return pt_settings_notifications_hint(inputs)
	if (locale === "ru") return ru_settings_notifications_hint(inputs)
	if (locale === "sv") return sv_settings_notifications_hint(inputs)
	if (locale === "tr") return tr_settings_notifications_hint(inputs)
	if (locale === "zh") return zh_settings_notifications_hint(inputs)
	if (locale === "ja") return ja_settings_notifications_hint(inputs)
	return en_settings_notifications_hint(inputs)
});
