/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Scout_Error_TitleInputs */

const en_cmdk_scout_error_title = /** @type {(inputs: Cmdk_Scout_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout couldn’t answer.`)
};

const es_cmdk_scout_error_title = /** @type {(inputs: Cmdk_Scout_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout no ha podido responder.`)
};

const de_cmdk_scout_error_title = /** @type {(inputs: Cmdk_Scout_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout konnte nicht antworten.`)
};

const fr_cmdk_scout_error_title = /** @type {(inputs: Cmdk_Scout_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout n’a pas pu répondre.`)
};

const it_cmdk_scout_error_title = /** @type {(inputs: Cmdk_Scout_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout non è riuscito a rispondere.`)
};

const nl_cmdk_scout_error_title = /** @type {(inputs: Cmdk_Scout_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout kon niet antwoorden.`)
};

const pl_cmdk_scout_error_title = /** @type {(inputs: Cmdk_Scout_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout nie mógł odpowiedzieć.`)
};

const pt_cmdk_scout_error_title = /** @type {(inputs: Cmdk_Scout_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O Scout não conseguiu responder.`)
};

const ru_cmdk_scout_error_title = /** @type {(inputs: Cmdk_Scout_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout не смог ответить.`)
};

const sv_cmdk_scout_error_title = /** @type {(inputs: Cmdk_Scout_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout kunde inte svara.`)
};

const tr_cmdk_scout_error_title = /** @type {(inputs: Cmdk_Scout_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout yanıt veremedi.`)
};

const zh_cmdk_scout_error_title = /** @type {(inputs: Cmdk_Scout_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout 无法回答。`)
};

const ja_cmdk_scout_error_title = /** @type {(inputs: Cmdk_Scout_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scoutが回答できませんでした。`)
};

/**
* | output |
* | --- |
* | "Scout couldn’t answer." |
*
* @param {Cmdk_Scout_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scout_error_title = /** @type {((inputs?: Cmdk_Scout_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scout_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scout_error_title(inputs)
	if (locale === "de") return de_cmdk_scout_error_title(inputs)
	if (locale === "fr") return fr_cmdk_scout_error_title(inputs)
	if (locale === "it") return it_cmdk_scout_error_title(inputs)
	if (locale === "nl") return nl_cmdk_scout_error_title(inputs)
	if (locale === "pl") return pl_cmdk_scout_error_title(inputs)
	if (locale === "pt") return pt_cmdk_scout_error_title(inputs)
	if (locale === "ru") return ru_cmdk_scout_error_title(inputs)
	if (locale === "sv") return sv_cmdk_scout_error_title(inputs)
	if (locale === "tr") return tr_cmdk_scout_error_title(inputs)
	if (locale === "zh") return zh_cmdk_scout_error_title(inputs)
	if (locale === "ja") return ja_cmdk_scout_error_title(inputs)
	return en_cmdk_scout_error_title(inputs)
});
