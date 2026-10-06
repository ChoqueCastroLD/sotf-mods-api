/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Unapproved_BackInputs */

const en_explore_catalog_unapproved_back = /** @type {(inputs: Explore_Catalog_Unapproved_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to all mods`)
};

const es_explore_catalog_unapproved_back = /** @type {(inputs: Explore_Catalog_Unapproved_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver a todos los mods`)
};

const de_explore_catalog_unapproved_back = /** @type {(inputs: Explore_Catalog_Unapproved_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zu allen Mods`)
};

const fr_explore_catalog_unapproved_back = /** @type {(inputs: Explore_Catalog_Unapproved_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour à tous les mods`)
};

const it_explore_catalog_unapproved_back = /** @type {(inputs: Explore_Catalog_Unapproved_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna a tutti i mod`)
};

const nl_explore_catalog_unapproved_back = /** @type {(inputs: Explore_Catalog_Unapproved_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar alle mods`)
};

const pl_explore_catalog_unapproved_back = /** @type {(inputs: Explore_Catalog_Unapproved_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do wszystkich modów`)
};

const pt_explore_catalog_unapproved_back = /** @type {(inputs: Explore_Catalog_Unapproved_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar para todos os mods`)
};

const ru_explore_catalog_unapproved_back = /** @type {(inputs: Explore_Catalog_Unapproved_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назад ко всем модам`)
};

const sv_explore_catalog_unapproved_back = /** @type {(inputs: Explore_Catalog_Unapproved_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till alla mods`)
};

const tr_explore_catalog_unapproved_back = /** @type {(inputs: Explore_Catalog_Unapproved_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm modlara dön`)
};

const zh_explore_catalog_unapproved_back = /** @type {(inputs: Explore_Catalog_Unapproved_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回所有模组`)
};

const ja_explore_catalog_unapproved_back = /** @type {(inputs: Explore_Catalog_Unapproved_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのMODに戻る`)
};

/**
* | output |
* | --- |
* | "Back to all mods" |
*
* @param {Explore_Catalog_Unapproved_BackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_unapproved_back = /** @type {((inputs?: Explore_Catalog_Unapproved_BackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Unapproved_BackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_unapproved_back(inputs)
	if (locale === "de") return de_explore_catalog_unapproved_back(inputs)
	if (locale === "fr") return fr_explore_catalog_unapproved_back(inputs)
	if (locale === "it") return it_explore_catalog_unapproved_back(inputs)
	if (locale === "nl") return nl_explore_catalog_unapproved_back(inputs)
	if (locale === "pl") return pl_explore_catalog_unapproved_back(inputs)
	if (locale === "pt") return pt_explore_catalog_unapproved_back(inputs)
	if (locale === "ru") return ru_explore_catalog_unapproved_back(inputs)
	if (locale === "sv") return sv_explore_catalog_unapproved_back(inputs)
	if (locale === "tr") return tr_explore_catalog_unapproved_back(inputs)
	if (locale === "zh") return zh_explore_catalog_unapproved_back(inputs)
	if (locale === "ja") return ja_explore_catalog_unapproved_back(inputs)
	return en_explore_catalog_unapproved_back(inputs)
});
