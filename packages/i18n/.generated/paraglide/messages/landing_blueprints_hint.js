/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Blueprints_HintInputs */

const en_landing_blueprints_hint = /** @type {(inputs: Landing_Blueprints_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fresh builds from the community`)
};

const es_landing_blueprints_hint = /** @type {(inputs: Landing_Blueprints_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds recién salidas de la comunidad`)
};

const de_landing_blueprints_hint = /** @type {(inputs: Landing_Blueprints_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frische Builds aus der Community`)
};

const fr_landing_blueprints_hint = /** @type {(inputs: Landing_Blueprints_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des builds tout frais de la communauté`)
};

const it_landing_blueprints_hint = /** @type {(inputs: Landing_Blueprints_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build fresche dalla community`)
};

const nl_landing_blueprints_hint = /** @type {(inputs: Landing_Blueprints_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verse builds uit de community`)
};

const pl_landing_blueprints_hint = /** @type {(inputs: Landing_Blueprints_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Świeże buildy od społeczności`)
};

const pt_landing_blueprints_hint = /** @type {(inputs: Landing_Blueprints_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds recém-saídas da comunidade`)
};

const ru_landing_blueprints_hint = /** @type {(inputs: Landing_Blueprints_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Свежие постройки от сообщества`)
};

const sv_landing_blueprints_hint = /** @type {(inputs: Landing_Blueprints_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Färska byggen från communityn`)
};

const tr_landing_blueprints_hint = /** @type {(inputs: Landing_Blueprints_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topluluktan yeni yapılar`)
};

const zh_landing_blueprints_hint = /** @type {(inputs: Landing_Blueprints_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`来自社区的新鲜建筑`)
};

const ja_landing_blueprints_hint = /** @type {(inputs: Landing_Blueprints_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コミュニティの最新の建築`)
};

/**
* | output |
* | --- |
* | "Fresh builds from the community" |
*
* @param {Landing_Blueprints_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_blueprints_hint = /** @type {((inputs?: Landing_Blueprints_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Blueprints_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_blueprints_hint(inputs)
	if (locale === "de") return de_landing_blueprints_hint(inputs)
	if (locale === "fr") return fr_landing_blueprints_hint(inputs)
	if (locale === "it") return it_landing_blueprints_hint(inputs)
	if (locale === "nl") return nl_landing_blueprints_hint(inputs)
	if (locale === "pl") return pl_landing_blueprints_hint(inputs)
	if (locale === "pt") return pt_landing_blueprints_hint(inputs)
	if (locale === "ru") return ru_landing_blueprints_hint(inputs)
	if (locale === "sv") return sv_landing_blueprints_hint(inputs)
	if (locale === "tr") return tr_landing_blueprints_hint(inputs)
	if (locale === "zh") return zh_landing_blueprints_hint(inputs)
	if (locale === "ja") return ja_landing_blueprints_hint(inputs)
	return en_landing_blueprints_hint(inputs)
});
