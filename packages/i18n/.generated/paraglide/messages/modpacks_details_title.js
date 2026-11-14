/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Details_TitleInputs */

const en_modpacks_details_title = /** @type {(inputs: Modpacks_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const es_modpacks_details_title = /** @type {(inputs: Modpacks_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalles`)
};

const de_modpacks_details_title = /** @type {(inputs: Modpacks_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const fr_modpacks_details_title = /** @type {(inputs: Modpacks_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Détails`)
};

const it_modpacks_details_title = /** @type {(inputs: Modpacks_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dettagli`)
};

const nl_modpacks_details_title = /** @type {(inputs: Modpacks_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const pl_modpacks_details_title = /** @type {(inputs: Modpacks_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szczegóły`)
};

const pt_modpacks_details_title = /** @type {(inputs: Modpacks_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalhes`)
};

const ru_modpacks_details_title = /** @type {(inputs: Modpacks_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подробности`)
};

const sv_modpacks_details_title = /** @type {(inputs: Modpacks_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detaljer`)
};

const tr_modpacks_details_title = /** @type {(inputs: Modpacks_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayrıntılar`)
};

const zh_modpacks_details_title = /** @type {(inputs: Modpacks_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`详情`)
};

const ja_modpacks_details_title = /** @type {(inputs: Modpacks_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細`)
};

/**
* | output |
* | --- |
* | "Details" |
*
* @param {Modpacks_Details_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_details_title = /** @type {((inputs?: Modpacks_Details_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Details_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_details_title(inputs)
	if (locale === "de") return de_modpacks_details_title(inputs)
	if (locale === "fr") return fr_modpacks_details_title(inputs)
	if (locale === "it") return it_modpacks_details_title(inputs)
	if (locale === "nl") return nl_modpacks_details_title(inputs)
	if (locale === "pl") return pl_modpacks_details_title(inputs)
	if (locale === "pt") return pt_modpacks_details_title(inputs)
	if (locale === "ru") return ru_modpacks_details_title(inputs)
	if (locale === "sv") return sv_modpacks_details_title(inputs)
	if (locale === "tr") return tr_modpacks_details_title(inputs)
	if (locale === "zh") return zh_modpacks_details_title(inputs)
	if (locale === "ja") return ja_modpacks_details_title(inputs)
	return en_modpacks_details_title(inputs)
});
