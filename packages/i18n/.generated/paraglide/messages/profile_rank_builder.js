/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Rank_BuilderInputs */

const en_profile_rank_builder = /** @type {(inputs: Profile_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builder`)
};

const es_profile_rank_builder = /** @type {(inputs: Profile_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Constructor`)
};

const de_profile_rank_builder = /** @type {(inputs: Profile_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baumeister`)
};

const fr_profile_rank_builder = /** @type {(inputs: Profile_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bâtisseur`)
};

const it_profile_rank_builder = /** @type {(inputs: Profile_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Costruttore`)
};

const nl_profile_rank_builder = /** @type {(inputs: Profile_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bouwer`)
};

const pl_profile_rank_builder = /** @type {(inputs: Profile_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Budowniczy`)
};

const pt_profile_rank_builder = /** @type {(inputs: Profile_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Construtor`)
};

const ru_profile_rank_builder = /** @type {(inputs: Profile_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Строитель`)
};

const sv_profile_rank_builder = /** @type {(inputs: Profile_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggare`)
};

const tr_profile_rank_builder = /** @type {(inputs: Profile_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnşaatçı`)
};

const zh_profile_rank_builder = /** @type {(inputs: Profile_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建造者`)
};

const ja_profile_rank_builder = /** @type {(inputs: Profile_Rank_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築家`)
};

/**
* | output |
* | --- |
* | "Builder" |
*
* @param {Profile_Rank_BuilderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_rank_builder = /** @type {((inputs?: Profile_Rank_BuilderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Rank_BuilderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_rank_builder(inputs)
	if (locale === "de") return de_profile_rank_builder(inputs)
	if (locale === "fr") return fr_profile_rank_builder(inputs)
	if (locale === "it") return it_profile_rank_builder(inputs)
	if (locale === "nl") return nl_profile_rank_builder(inputs)
	if (locale === "pl") return pl_profile_rank_builder(inputs)
	if (locale === "pt") return pt_profile_rank_builder(inputs)
	if (locale === "ru") return ru_profile_rank_builder(inputs)
	if (locale === "sv") return sv_profile_rank_builder(inputs)
	if (locale === "tr") return tr_profile_rank_builder(inputs)
	if (locale === "zh") return zh_profile_rank_builder(inputs)
	if (locale === "ja") return ja_profile_rank_builder(inputs)
	return en_profile_rank_builder(inputs)
});
