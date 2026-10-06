/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Featured_LabelInputs */

const en_landing_featured_label = /** @type {(inputs: Landing_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Featured mods of the week`)
};

const es_landing_featured_label = /** @type {(inputs: Landing_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods destacados de la semana`)
};

const de_landing_featured_label = /** @type {(inputs: Landing_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ausgewählte Mods der Woche`)
};

const fr_landing_featured_label = /** @type {(inputs: Landing_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods en vedette de la semaine`)
};

const it_landing_featured_label = /** @type {(inputs: Landing_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod in evidenza della settimana`)
};

const nl_landing_featured_label = /** @type {(inputs: Landing_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitgelichte mods van de week`)
};

const pl_landing_featured_label = /** @type {(inputs: Landing_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyróżnione mody tygodnia`)
};

const pt_landing_featured_label = /** @type {(inputs: Landing_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods em destaque da semana`)
};

const ru_landing_featured_label = /** @type {(inputs: Landing_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Избранные моды недели`)
};

const sv_landing_featured_label = /** @type {(inputs: Landing_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utvalda mods den här veckan`)
};

const tr_landing_featured_label = /** @type {(inputs: Landing_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haftanın öne çıkan modları`)
};

const zh_landing_featured_label = /** @type {(inputs: Landing_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本周精选模组`)
};

const ja_landing_featured_label = /** @type {(inputs: Landing_Featured_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週の注目MOD`)
};

/**
* | output |
* | --- |
* | "Featured mods of the week" |
*
* @param {Landing_Featured_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_featured_label = /** @type {((inputs?: Landing_Featured_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Featured_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_featured_label(inputs)
	if (locale === "de") return de_landing_featured_label(inputs)
	if (locale === "fr") return fr_landing_featured_label(inputs)
	if (locale === "it") return it_landing_featured_label(inputs)
	if (locale === "nl") return nl_landing_featured_label(inputs)
	if (locale === "pl") return pl_landing_featured_label(inputs)
	if (locale === "pt") return pt_landing_featured_label(inputs)
	if (locale === "ru") return ru_landing_featured_label(inputs)
	if (locale === "sv") return sv_landing_featured_label(inputs)
	if (locale === "tr") return tr_landing_featured_label(inputs)
	if (locale === "zh") return zh_landing_featured_label(inputs)
	if (locale === "ja") return ja_landing_featured_label(inputs)
	return en_landing_featured_label(inputs)
});
