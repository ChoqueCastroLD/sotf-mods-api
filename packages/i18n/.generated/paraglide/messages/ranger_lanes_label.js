/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lanes_LabelInputs */

const en_ranger_lanes_label = /** @type {(inputs: Ranger_Lanes_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Queues`)
};

const es_ranger_lanes_label = /** @type {(inputs: Ranger_Lanes_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Colas`)
};

const de_ranger_lanes_label = /** @type {(inputs: Ranger_Lanes_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warteschlangen`)
};

const fr_ranger_lanes_label = /** @type {(inputs: Ranger_Lanes_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Files`)
};

const it_ranger_lanes_label = /** @type {(inputs: Ranger_Lanes_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code`)
};

const nl_ranger_lanes_label = /** @type {(inputs: Ranger_Lanes_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtrijen`)
};

const pl_ranger_lanes_label = /** @type {(inputs: Ranger_Lanes_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolejki`)
};

const pt_ranger_lanes_label = /** @type {(inputs: Ranger_Lanes_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filas`)
};

const ru_ranger_lanes_label = /** @type {(inputs: Ranger_Lanes_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очереди`)
};

const sv_ranger_lanes_label = /** @type {(inputs: Ranger_Lanes_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Köer`)
};

const tr_ranger_lanes_label = /** @type {(inputs: Ranger_Lanes_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kuyruklar`)
};

const zh_ranger_lanes_label = /** @type {(inputs: Ranger_Lanes_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`队列`)
};

const ja_ranger_lanes_label = /** @type {(inputs: Ranger_Lanes_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キュー`)
};

/**
* | output |
* | --- |
* | "Queues" |
*
* @param {Ranger_Lanes_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lanes_label = /** @type {((inputs?: Ranger_Lanes_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lanes_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lanes_label(inputs)
	if (locale === "de") return de_ranger_lanes_label(inputs)
	if (locale === "fr") return fr_ranger_lanes_label(inputs)
	if (locale === "it") return it_ranger_lanes_label(inputs)
	if (locale === "nl") return nl_ranger_lanes_label(inputs)
	if (locale === "pl") return pl_ranger_lanes_label(inputs)
	if (locale === "pt") return pt_ranger_lanes_label(inputs)
	if (locale === "ru") return ru_ranger_lanes_label(inputs)
	if (locale === "sv") return sv_ranger_lanes_label(inputs)
	if (locale === "tr") return tr_ranger_lanes_label(inputs)
	if (locale === "zh") return zh_ranger_lanes_label(inputs)
	if (locale === "ja") return ja_ranger_lanes_label(inputs)
	return en_ranger_lanes_label(inputs)
});
