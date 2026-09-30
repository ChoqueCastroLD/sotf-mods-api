/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Toast_ErrorInputs */

const en_mod_toast_error = /** @type {(inputs: Mod_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That didn’t work. Try again in a moment.`)
};

const es_mod_toast_error = /** @type {(inputs: Mod_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No ha funcionado. Inténtalo de nuevo en un momento.`)
};

const de_mod_toast_error = /** @type {(inputs: Mod_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das hat nicht geklappt. Versuch es gleich noch einmal.`)
};

const fr_mod_toast_error = /** @type {(inputs: Mod_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ça n’a pas marché. Réessayez dans un instant.`)
};

const it_mod_toast_error = /** @type {(inputs: Mod_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ha funzionato. Riprova tra un momento.`)
};

const nl_mod_toast_error = /** @type {(inputs: Mod_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dat lukte niet. Probeer het zo opnieuw.`)
};

const pl_mod_toast_error = /** @type {(inputs: Mod_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się. Spróbuj ponownie za chwilę.`)
};

const pt_mod_toast_error = /** @type {(inputs: Mod_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não deu certo. Tente de novo daqui a pouco.`)
};

const ru_mod_toast_error = /** @type {(inputs: Mod_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не получилось. Попробуйте ещё раз чуть позже.`)
};

const sv_mod_toast_error = /** @type {(inputs: Mod_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte. Försök igen om en stund.`)
};

const tr_mod_toast_error = /** @type {(inputs: Mod_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olmadı. Birazdan tekrar dene.`)
};

const zh_mod_toast_error = /** @type {(inputs: Mod_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作失败，请稍后再试。`)
};

const ja_mod_toast_error = /** @type {(inputs: Mod_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`うまくいきませんでした。少し待ってからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "That didn’t work. Try again in a moment." |
*
* @param {Mod_Toast_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_toast_error = /** @type {((inputs?: Mod_Toast_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Toast_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_toast_error(inputs)
	if (locale === "de") return de_mod_toast_error(inputs)
	if (locale === "fr") return fr_mod_toast_error(inputs)
	if (locale === "it") return it_mod_toast_error(inputs)
	if (locale === "nl") return nl_mod_toast_error(inputs)
	if (locale === "pl") return pl_mod_toast_error(inputs)
	if (locale === "pt") return pt_mod_toast_error(inputs)
	if (locale === "ru") return ru_mod_toast_error(inputs)
	if (locale === "sv") return sv_mod_toast_error(inputs)
	if (locale === "tr") return tr_mod_toast_error(inputs)
	if (locale === "zh") return zh_mod_toast_error(inputs)
	if (locale === "ja") return ja_mod_toast_error(inputs)
	return en_mod_toast_error(inputs)
});
