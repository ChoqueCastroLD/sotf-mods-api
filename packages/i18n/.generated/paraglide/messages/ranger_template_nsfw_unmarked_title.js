/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_Nsfw_Unmarked_TitleInputs */

const en_ranger_template_nsfw_unmarked_title = /** @type {(inputs: Ranger_Template_Nsfw_Unmarked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW not marked`)
};

const es_ranger_template_nsfw_unmarked_title = /** @type {(inputs: Ranger_Template_Nsfw_Unmarked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW sin marcar`)
};

const de_ranger_template_nsfw_unmarked_title = /** @type {(inputs: Ranger_Template_Nsfw_Unmarked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW nicht markiert`)
};

const fr_ranger_template_nsfw_unmarked_title = /** @type {(inputs: Ranger_Template_Nsfw_Unmarked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW non signalé`)
};

const it_ranger_template_nsfw_unmarked_title = /** @type {(inputs: Ranger_Template_Nsfw_Unmarked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW non segnalato`)
};

const nl_ranger_template_nsfw_unmarked_title = /** @type {(inputs: Ranger_Template_Nsfw_Unmarked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW niet gemarkeerd`)
};

const pl_ranger_template_nsfw_unmarked_title = /** @type {(inputs: Ranger_Template_Nsfw_Unmarked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieoznaczone NSFW`)
};

const pt_ranger_template_nsfw_unmarked_title = /** @type {(inputs: Ranger_Template_Nsfw_Unmarked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW sem marcação`)
};

const ru_ranger_template_nsfw_unmarked_title = /** @type {(inputs: Ranger_Template_Nsfw_Unmarked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW без пометки`)
};

const sv_ranger_template_nsfw_unmarked_title = /** @type {(inputs: Ranger_Template_Nsfw_Unmarked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW inte markerat`)
};

const tr_ranger_template_nsfw_unmarked_title = /** @type {(inputs: Ranger_Template_Nsfw_Unmarked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW işaretlenmemiş`)
};

const zh_ranger_template_nsfw_unmarked_title = /** @type {(inputs: Ranger_Template_Nsfw_Unmarked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未标记 NSFW`)
};

const ja_ranger_template_nsfw_unmarked_title = /** @type {(inputs: Ranger_Template_Nsfw_Unmarked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW 未表示`)
};

/**
* | output |
* | --- |
* | "NSFW not marked" |
*
* @param {Ranger_Template_Nsfw_Unmarked_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_nsfw_unmarked_title = /** @type {((inputs?: Ranger_Template_Nsfw_Unmarked_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Nsfw_Unmarked_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_nsfw_unmarked_title(inputs)
	if (locale === "de") return de_ranger_template_nsfw_unmarked_title(inputs)
	if (locale === "fr") return fr_ranger_template_nsfw_unmarked_title(inputs)
	if (locale === "it") return it_ranger_template_nsfw_unmarked_title(inputs)
	if (locale === "nl") return nl_ranger_template_nsfw_unmarked_title(inputs)
	if (locale === "pl") return pl_ranger_template_nsfw_unmarked_title(inputs)
	if (locale === "pt") return pt_ranger_template_nsfw_unmarked_title(inputs)
	if (locale === "ru") return ru_ranger_template_nsfw_unmarked_title(inputs)
	if (locale === "sv") return sv_ranger_template_nsfw_unmarked_title(inputs)
	if (locale === "tr") return tr_ranger_template_nsfw_unmarked_title(inputs)
	if (locale === "zh") return zh_ranger_template_nsfw_unmarked_title(inputs)
	if (locale === "ja") return ja_ranger_template_nsfw_unmarked_title(inputs)
	return en_ranger_template_nsfw_unmarked_title(inputs)
});
