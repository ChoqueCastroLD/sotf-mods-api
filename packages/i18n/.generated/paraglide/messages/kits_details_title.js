/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Details_TitleInputs */

const en_kits_details_title = /** @type {(inputs: Kits_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const es_kits_details_title = /** @type {(inputs: Kits_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalles`)
};

const de_kits_details_title = /** @type {(inputs: Kits_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const fr_kits_details_title = /** @type {(inputs: Kits_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Détails`)
};

const it_kits_details_title = /** @type {(inputs: Kits_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dettagli`)
};

const nl_kits_details_title = /** @type {(inputs: Kits_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const pl_kits_details_title = /** @type {(inputs: Kits_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szczegóły`)
};

const pt_kits_details_title = /** @type {(inputs: Kits_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalhes`)
};

const ru_kits_details_title = /** @type {(inputs: Kits_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сведения`)
};

const sv_kits_details_title = /** @type {(inputs: Kits_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detaljer`)
};

const tr_kits_details_title = /** @type {(inputs: Kits_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayrıntılar`)
};

const zh_kits_details_title = /** @type {(inputs: Kits_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`详细信息`)
};

const ja_kits_details_title = /** @type {(inputs: Kits_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細`)
};

/**
* | output |
* | --- |
* | "Details" |
*
* @param {Kits_Details_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_details_title = /** @type {((inputs?: Kits_Details_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Details_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_details_title(inputs)
	if (locale === "de") return de_kits_details_title(inputs)
	if (locale === "fr") return fr_kits_details_title(inputs)
	if (locale === "it") return it_kits_details_title(inputs)
	if (locale === "nl") return nl_kits_details_title(inputs)
	if (locale === "pl") return pl_kits_details_title(inputs)
	if (locale === "pt") return pt_kits_details_title(inputs)
	if (locale === "ru") return ru_kits_details_title(inputs)
	if (locale === "sv") return sv_kits_details_title(inputs)
	if (locale === "tr") return tr_kits_details_title(inputs)
	if (locale === "zh") return zh_kits_details_title(inputs)
	if (locale === "ja") return ja_kits_details_title(inputs)
	return en_kits_details_title(inputs)
});
