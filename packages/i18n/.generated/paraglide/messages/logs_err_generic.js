/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Err_GenericInputs */

const en_logs_err_generic = /** @type {(inputs: Logs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong. Try again.`)
};

const es_logs_err_generic = /** @type {(inputs: Logs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo salió mal. Inténtalo de nuevo.`)
};

const de_logs_err_generic = /** @type {(inputs: Logs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etwas ist schiefgelaufen. Versuche es erneut.`)
};

const fr_logs_err_generic = /** @type {(inputs: Logs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une erreur s’est produite. Réessayez.`)
};

const it_logs_err_generic = /** @type {(inputs: Logs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcosa è andato storto. Riprova.`)
};

const nl_logs_err_generic = /** @type {(inputs: Logs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er ging iets mis. Probeer het opnieuw.`)
};

const pl_logs_err_generic = /** @type {(inputs: Logs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coś poszło nie tak. Spróbuj ponownie.`)
};

const pt_logs_err_generic = /** @type {(inputs: Logs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo correu mal. Tente de novo.`)
};

const ru_logs_err_generic = /** @type {(inputs: Logs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что-то пошло не так. Повторите попытку.`)
};

const sv_logs_err_generic = /** @type {(inputs: Logs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Något gick fel. Försök igen.`)
};

const tr_logs_err_generic = /** @type {(inputs: Logs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir şeyler ters gitti. Tekrar deneyin.`)
};

const zh_logs_err_generic = /** @type {(inputs: Logs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`出了点问题。请重试。`)
};

const ja_logs_err_generic = /** @type {(inputs: Logs_Err_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`問題が発生しました。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Something went wrong. Try again." |
*
* @param {Logs_Err_GenericInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_err_generic = /** @type {((inputs?: Logs_Err_GenericInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Err_GenericInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_err_generic(inputs)
	if (locale === "de") return de_logs_err_generic(inputs)
	if (locale === "fr") return fr_logs_err_generic(inputs)
	if (locale === "it") return it_logs_err_generic(inputs)
	if (locale === "nl") return nl_logs_err_generic(inputs)
	if (locale === "pl") return pl_logs_err_generic(inputs)
	if (locale === "pt") return pt_logs_err_generic(inputs)
	if (locale === "ru") return ru_logs_err_generic(inputs)
	if (locale === "sv") return sv_logs_err_generic(inputs)
	if (locale === "tr") return tr_logs_err_generic(inputs)
	if (locale === "zh") return zh_logs_err_generic(inputs)
	if (locale === "ja") return ja_logs_err_generic(inputs)
	return en_logs_err_generic(inputs)
});
