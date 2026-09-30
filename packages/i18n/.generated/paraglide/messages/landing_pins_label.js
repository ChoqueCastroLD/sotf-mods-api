/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Pins_LabelInputs */

const en_landing_pins_label = /** @type {(inputs: Landing_Pins_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live on the island`)
};

const es_landing_pins_label = /** @type {(inputs: Landing_Pins_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En vivo en la isla`)
};

const de_landing_pins_label = /** @type {(inputs: Landing_Pins_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live auf der Insel`)
};

const fr_landing_pins_label = /** @type {(inputs: Landing_Pins_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En direct sur l’île`)
};

const it_landing_pins_label = /** @type {(inputs: Landing_Pins_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In diretta sull’isola`)
};

const nl_landing_pins_label = /** @type {(inputs: Landing_Pins_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live op het eiland`)
};

const pl_landing_pins_label = /** @type {(inputs: Landing_Pins_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na żywo na wyspie`)
};

const pt_landing_pins_label = /** @type {(inputs: Landing_Pins_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ao vivo na ilha`)
};

const ru_landing_pins_label = /** @type {(inputs: Landing_Pins_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сейчас на острове`)
};

const sv_landing_pins_label = /** @type {(inputs: Landing_Pins_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live på ön`)
};

const tr_landing_pins_label = /** @type {(inputs: Landing_Pins_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adada şu an`)
};

const zh_landing_pins_label = /** @type {(inputs: Landing_Pins_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`岛上实时动态`)
};

const ja_landing_pins_label = /** @type {(inputs: Landing_Pins_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島のライブ情報`)
};

/**
* | output |
* | --- |
* | "Live on the island" |
*
* @param {Landing_Pins_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_pins_label = /** @type {((inputs?: Landing_Pins_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Pins_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_pins_label(inputs)
	if (locale === "de") return de_landing_pins_label(inputs)
	if (locale === "fr") return fr_landing_pins_label(inputs)
	if (locale === "it") return it_landing_pins_label(inputs)
	if (locale === "nl") return nl_landing_pins_label(inputs)
	if (locale === "pl") return pl_landing_pins_label(inputs)
	if (locale === "pt") return pt_landing_pins_label(inputs)
	if (locale === "ru") return ru_landing_pins_label(inputs)
	if (locale === "sv") return sv_landing_pins_label(inputs)
	if (locale === "tr") return tr_landing_pins_label(inputs)
	if (locale === "zh") return zh_landing_pins_label(inputs)
	if (locale === "ja") return ja_landing_pins_label(inputs)
	return en_landing_pins_label(inputs)
});
