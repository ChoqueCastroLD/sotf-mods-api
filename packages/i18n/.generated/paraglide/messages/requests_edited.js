/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_EditedInputs */

const en_requests_edited = /** @type {(inputs: Requests_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`edited`)
};

const es_requests_edited = /** @type {(inputs: Requests_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`editada`)
};

const de_requests_edited = /** @type {(inputs: Requests_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bearbeitet`)
};

const fr_requests_edited = /** @type {(inputs: Requests_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`modifiée`)
};

const it_requests_edited = /** @type {(inputs: Requests_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`modificata`)
};

const nl_requests_edited = /** @type {(inputs: Requests_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bewerkt`)
};

const pl_requests_edited = /** @type {(inputs: Requests_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`edytowano`)
};

const pt_requests_edited = /** @type {(inputs: Requests_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`editado`)
};

const ru_requests_edited = /** @type {(inputs: Requests_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`изменено`)
};

const sv_requests_edited = /** @type {(inputs: Requests_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`redigerad`)
};

const tr_requests_edited = /** @type {(inputs: Requests_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`düzenlendi`)
};

const zh_requests_edited = /** @type {(inputs: Requests_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已编辑`)
};

const ja_requests_edited = /** @type {(inputs: Requests_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集済み`)
};

/**
* | output |
* | --- |
* | "edited" |
*
* @param {Requests_EditedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_edited = /** @type {((inputs?: Requests_EditedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_EditedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_edited(inputs)
	if (locale === "de") return de_requests_edited(inputs)
	if (locale === "fr") return fr_requests_edited(inputs)
	if (locale === "it") return it_requests_edited(inputs)
	if (locale === "nl") return nl_requests_edited(inputs)
	if (locale === "pl") return pl_requests_edited(inputs)
	if (locale === "pt") return pt_requests_edited(inputs)
	if (locale === "ru") return ru_requests_edited(inputs)
	if (locale === "sv") return sv_requests_edited(inputs)
	if (locale === "tr") return tr_requests_edited(inputs)
	if (locale === "zh") return zh_requests_edited(inputs)
	if (locale === "ja") return ja_requests_edited(inputs)
	return en_requests_edited(inputs)
});
