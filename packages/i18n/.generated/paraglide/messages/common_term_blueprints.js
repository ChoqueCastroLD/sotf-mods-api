/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Term_BlueprintsInputs */

const en_common_term_blueprints = /** @type {(inputs: Common_Term_BlueprintsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blueprints`)
};

const es_common_term_blueprints = /** @type {(inputs: Common_Term_BlueprintsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planos`)
};

const de_common_term_blueprints = /** @type {(inputs: Common_Term_BlueprintsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baupläne`)
};

const fr_common_term_blueprints = /** @type {(inputs: Common_Term_BlueprintsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plans`)
};

const it_common_term_blueprints = /** @type {(inputs: Common_Term_BlueprintsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progetti`)
};

const nl_common_term_blueprints = /** @type {(inputs: Common_Term_BlueprintsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bouwtekeningen`)
};

const pl_common_term_blueprints = /** @type {(inputs: Common_Term_BlueprintsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plany`)
};

const pt_common_term_blueprints = /** @type {(inputs: Common_Term_BlueprintsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plantas`)
};

const ru_common_term_blueprints = /** @type {(inputs: Common_Term_BlueprintsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Чертежи`)
};

const sv_common_term_blueprints = /** @type {(inputs: Common_Term_BlueprintsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritningar`)
};

const tr_common_term_blueprints = /** @type {(inputs: Common_Term_BlueprintsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planlar`)
};

const zh_common_term_blueprints = /** @type {(inputs: Common_Term_BlueprintsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`蓝图`)
};

const ja_common_term_blueprints = /** @type {(inputs: Common_Term_BlueprintsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設計図`)
};

/**
* | output |
* | --- |
* | "Blueprints" |
*
* @param {Common_Term_BlueprintsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_term_blueprints = /** @type {((inputs?: Common_Term_BlueprintsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Term_BlueprintsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_term_blueprints(inputs)
	if (locale === "de") return de_common_term_blueprints(inputs)
	if (locale === "fr") return fr_common_term_blueprints(inputs)
	if (locale === "it") return it_common_term_blueprints(inputs)
	if (locale === "nl") return nl_common_term_blueprints(inputs)
	if (locale === "pl") return pl_common_term_blueprints(inputs)
	if (locale === "pt") return pt_common_term_blueprints(inputs)
	if (locale === "ru") return ru_common_term_blueprints(inputs)
	if (locale === "sv") return sv_common_term_blueprints(inputs)
	if (locale === "tr") return tr_common_term_blueprints(inputs)
	if (locale === "zh") return zh_common_term_blueprints(inputs)
	if (locale === "ja") return ja_common_term_blueprints(inputs)
	return en_common_term_blueprints(inputs)
});
