/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Group_GoInputs */

const en_cmdk_group_go = /** @type {(inputs: Cmdk_Group_GoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to`)
};

const es_cmdk_group_go = /** @type {(inputs: Cmdk_Group_GoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir a`)
};

const de_cmdk_group_go = /** @type {(inputs: Cmdk_Group_GoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gehe zu`)
};

const fr_cmdk_group_go = /** @type {(inputs: Cmdk_Group_GoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aller à`)
};

const it_cmdk_group_go = /** @type {(inputs: Cmdk_Group_GoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vai a`)
};

const nl_cmdk_group_go = /** @type {(inputs: Cmdk_Group_GoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ga naar`)
};

const pl_cmdk_group_go = /** @type {(inputs: Cmdk_Group_GoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź do`)
};

const pt_cmdk_group_go = /** @type {(inputs: Cmdk_Group_GoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir para`)
};

const ru_cmdk_group_go = /** @type {(inputs: Cmdk_Group_GoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перейти`)
};

const sv_cmdk_group_go = /** @type {(inputs: Cmdk_Group_GoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gå till`)
};

const tr_cmdk_group_go = /** @type {(inputs: Cmdk_Group_GoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Git`)
};

const zh_cmdk_group_go = /** @type {(inputs: Cmdk_Group_GoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前往`)
};

const ja_cmdk_group_go = /** @type {(inputs: Cmdk_Group_GoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移動`)
};

/**
* | output |
* | --- |
* | "Go to" |
*
* @param {Cmdk_Group_GoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_group_go = /** @type {((inputs?: Cmdk_Group_GoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Group_GoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_group_go(inputs)
	if (locale === "de") return de_cmdk_group_go(inputs)
	if (locale === "fr") return fr_cmdk_group_go(inputs)
	if (locale === "it") return it_cmdk_group_go(inputs)
	if (locale === "nl") return nl_cmdk_group_go(inputs)
	if (locale === "pl") return pl_cmdk_group_go(inputs)
	if (locale === "pt") return pt_cmdk_group_go(inputs)
	if (locale === "ru") return ru_cmdk_group_go(inputs)
	if (locale === "sv") return sv_cmdk_group_go(inputs)
	if (locale === "tr") return tr_cmdk_group_go(inputs)
	if (locale === "zh") return zh_cmdk_group_go(inputs)
	if (locale === "ja") return ja_cmdk_group_go(inputs)
	return en_cmdk_group_go(inputs)
});
