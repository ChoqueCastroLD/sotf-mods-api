/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Regions_HintInputs */

const en_landing_regions_hint = /** @type {(inputs: Landing_Regions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse the island by category`)
};

const es_landing_regions_hint = /** @type {(inputs: Landing_Regions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recorre la isla por categorías`)
};

const de_landing_regions_hint = /** @type {(inputs: Landing_Regions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erkunde die Insel nach Kategorien`)
};

const fr_landing_regions_hint = /** @type {(inputs: Landing_Regions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parcourez l’île par catégorie`)
};

const it_landing_regions_hint = /** @type {(inputs: Landing_Regions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esplora l’isola per categoria`)
};

const nl_landing_regions_hint = /** @type {(inputs: Landing_Regions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verken het eiland per categorie`)
};

const pl_landing_regions_hint = /** @type {(inputs: Landing_Regions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj wyspę według kategorii`)
};

const pt_landing_regions_hint = /** @type {(inputs: Landing_Regions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore a ilha por categoria`)
};

const ru_landing_regions_hint = /** @type {(inputs: Landing_Regions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исследуйте остров по категориям`)
};

const sv_landing_regions_hint = /** @type {(inputs: Landing_Regions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utforska ön per kategori`)
};

const tr_landing_regions_hint = /** @type {(inputs: Landing_Regions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adayı kategorilere göre gez`)
};

const zh_landing_regions_hint = /** @type {(inputs: Landing_Regions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按分类探索这座岛`)
};

const ja_landing_regions_hint = /** @type {(inputs: Landing_Regions_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリ別に島を探索`)
};

/**
* | output |
* | --- |
* | "Browse the island by category" |
*
* @param {Landing_Regions_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_regions_hint = /** @type {((inputs?: Landing_Regions_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Regions_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_regions_hint(inputs)
	if (locale === "de") return de_landing_regions_hint(inputs)
	if (locale === "fr") return fr_landing_regions_hint(inputs)
	if (locale === "it") return it_landing_regions_hint(inputs)
	if (locale === "nl") return nl_landing_regions_hint(inputs)
	if (locale === "pl") return pl_landing_regions_hint(inputs)
	if (locale === "pt") return pt_landing_regions_hint(inputs)
	if (locale === "ru") return ru_landing_regions_hint(inputs)
	if (locale === "sv") return sv_landing_regions_hint(inputs)
	if (locale === "tr") return tr_landing_regions_hint(inputs)
	if (locale === "zh") return zh_landing_regions_hint(inputs)
	if (locale === "ja") return ja_landing_regions_hint(inputs)
	return en_landing_regions_hint(inputs)
});
