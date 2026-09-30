/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Tier_TreehouseInputs */

const en_ui_domain_tier_treehouse = /** @type {(inputs: Ui_Domain_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Treehouse`)
};

const es_ui_domain_tier_treehouse = /** @type {(inputs: Ui_Domain_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Casa del árbol`)
};

const de_ui_domain_tier_treehouse = /** @type {(inputs: Ui_Domain_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baumhaus`)
};

const fr_ui_domain_tier_treehouse = /** @type {(inputs: Ui_Domain_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cabane dans les arbres`)
};

const it_ui_domain_tier_treehouse = /** @type {(inputs: Ui_Domain_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Casa sull’albero`)
};

const nl_ui_domain_tier_treehouse = /** @type {(inputs: Ui_Domain_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Boomhut`)
};

const pl_ui_domain_tier_treehouse = /** @type {(inputs: Ui_Domain_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domek na drzewie`)
};

const pt_ui_domain_tier_treehouse = /** @type {(inputs: Ui_Domain_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Casa na árvore`)
};

const ru_ui_domain_tier_treehouse = /** @type {(inputs: Ui_Domain_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дом на дереве`)
};

const sv_ui_domain_tier_treehouse = /** @type {(inputs: Ui_Domain_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trädkoja`)
};

const tr_ui_domain_tier_treehouse = /** @type {(inputs: Ui_Domain_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ağaç ev`)
};

const zh_ui_domain_tier_treehouse = /** @type {(inputs: Ui_Domain_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`树屋`)
};

const ja_ui_domain_tier_treehouse = /** @type {(inputs: Ui_Domain_Tier_TreehouseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ツリーハウス`)
};

/**
* | output |
* | --- |
* | "Treehouse" |
*
* @param {Ui_Domain_Tier_TreehouseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_tier_treehouse = /** @type {((inputs?: Ui_Domain_Tier_TreehouseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Tier_TreehouseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_tier_treehouse(inputs)
	if (locale === "de") return de_ui_domain_tier_treehouse(inputs)
	if (locale === "fr") return fr_ui_domain_tier_treehouse(inputs)
	if (locale === "it") return it_ui_domain_tier_treehouse(inputs)
	if (locale === "nl") return nl_ui_domain_tier_treehouse(inputs)
	if (locale === "pl") return pl_ui_domain_tier_treehouse(inputs)
	if (locale === "pt") return pt_ui_domain_tier_treehouse(inputs)
	if (locale === "ru") return ru_ui_domain_tier_treehouse(inputs)
	if (locale === "sv") return sv_ui_domain_tier_treehouse(inputs)
	if (locale === "tr") return tr_ui_domain_tier_treehouse(inputs)
	if (locale === "zh") return zh_ui_domain_tier_treehouse(inputs)
	if (locale === "ja") return ja_ui_domain_tier_treehouse(inputs)
	return en_ui_domain_tier_treehouse(inputs)
});
