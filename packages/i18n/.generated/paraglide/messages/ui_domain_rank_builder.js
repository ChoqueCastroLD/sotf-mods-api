/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Rank_BuilderInputs */

const en_ui_domain_rank_builder = /** @type {(inputs: Ui_Domain_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builder`)
};

const es_ui_domain_rank_builder = /** @type {(inputs: Ui_Domain_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Constructor`)
};

const de_ui_domain_rank_builder = /** @type {(inputs: Ui_Domain_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baumeister`)
};

const fr_ui_domain_rank_builder = /** @type {(inputs: Ui_Domain_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bâtisseur`)
};

const it_ui_domain_rank_builder = /** @type {(inputs: Ui_Domain_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Costruttore`)
};

const nl_ui_domain_rank_builder = /** @type {(inputs: Ui_Domain_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bouwer`)
};

const pl_ui_domain_rank_builder = /** @type {(inputs: Ui_Domain_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Budowniczy`)
};

const pt_ui_domain_rank_builder = /** @type {(inputs: Ui_Domain_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Construtor`)
};

const ru_ui_domain_rank_builder = /** @type {(inputs: Ui_Domain_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Строитель`)
};

const sv_ui_domain_rank_builder = /** @type {(inputs: Ui_Domain_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggare`)
};

const tr_ui_domain_rank_builder = /** @type {(inputs: Ui_Domain_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnşaatçı`)
};

const zh_ui_domain_rank_builder = /** @type {(inputs: Ui_Domain_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建造者`)
};

const ja_ui_domain_rank_builder = /** @type {(inputs: Ui_Domain_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築家`)
};

/**
* | output |
* | --- |
* | "Builder" |
*
* @param {Ui_Domain_Rank_BuilderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_rank_builder = /** @type {((inputs?: Ui_Domain_Rank_BuilderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Rank_BuilderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_rank_builder(inputs)
	if (locale === "de") return de_ui_domain_rank_builder(inputs)
	if (locale === "fr") return fr_ui_domain_rank_builder(inputs)
	if (locale === "it") return it_ui_domain_rank_builder(inputs)
	if (locale === "nl") return nl_ui_domain_rank_builder(inputs)
	if (locale === "pl") return pl_ui_domain_rank_builder(inputs)
	if (locale === "pt") return pt_ui_domain_rank_builder(inputs)
	if (locale === "ru") return ru_ui_domain_rank_builder(inputs)
	if (locale === "sv") return sv_ui_domain_rank_builder(inputs)
	if (locale === "tr") return tr_ui_domain_rank_builder(inputs)
	if (locale === "zh") return zh_ui_domain_rank_builder(inputs)
	if (locale === "ja") return ja_ui_domain_rank_builder(inputs)
	return en_ui_domain_rank_builder(inputs)
});
