/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Details_TitleInputs */

const en_mod_details_title = /** @type {(inputs: Mod_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const es_mod_details_title = /** @type {(inputs: Mod_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalles`)
};

const de_mod_details_title = /** @type {(inputs: Mod_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const fr_mod_details_title = /** @type {(inputs: Mod_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Détails`)
};

const it_mod_details_title = /** @type {(inputs: Mod_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dettagli`)
};

const nl_mod_details_title = /** @type {(inputs: Mod_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details`)
};

const pl_mod_details_title = /** @type {(inputs: Mod_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szczegóły`)
};

const pt_mod_details_title = /** @type {(inputs: Mod_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalhes`)
};

const ru_mod_details_title = /** @type {(inputs: Mod_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сведения`)
};

const sv_mod_details_title = /** @type {(inputs: Mod_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detaljer`)
};

const tr_mod_details_title = /** @type {(inputs: Mod_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayrıntılar`)
};

const zh_mod_details_title = /** @type {(inputs: Mod_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`详情`)
};

const ja_mod_details_title = /** @type {(inputs: Mod_Details_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細`)
};

/**
* | output |
* | --- |
* | "Details" |
*
* @param {Mod_Details_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_details_title = /** @type {((inputs?: Mod_Details_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Details_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_details_title(inputs)
	if (locale === "de") return de_mod_details_title(inputs)
	if (locale === "fr") return fr_mod_details_title(inputs)
	if (locale === "it") return it_mod_details_title(inputs)
	if (locale === "nl") return nl_mod_details_title(inputs)
	if (locale === "pl") return pl_mod_details_title(inputs)
	if (locale === "pt") return pt_mod_details_title(inputs)
	if (locale === "ru") return ru_mod_details_title(inputs)
	if (locale === "sv") return sv_mod_details_title(inputs)
	if (locale === "tr") return tr_mod_details_title(inputs)
	if (locale === "zh") return zh_mod_details_title(inputs)
	if (locale === "ja") return ja_mod_details_title(inputs)
	return en_mod_details_title(inputs)
});
