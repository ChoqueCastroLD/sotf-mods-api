/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_Open_KitInputs */

const en_bundles_open_kit = /** @type {(inputs: Bundles_Open_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open kit`)
};

const es_bundles_open_kit = /** @type {(inputs: Bundles_Open_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir kit`)
};

const de_bundles_open_kit = /** @type {(inputs: Bundles_Open_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit öffnen`)
};

const fr_bundles_open_kit = /** @type {(inputs: Bundles_Open_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir le kit`)
};

const it_bundles_open_kit = /** @type {(inputs: Bundles_Open_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri il kit`)
};

const nl_bundles_open_kit = /** @type {(inputs: Bundles_Open_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit openen`)
};

const pl_bundles_open_kit = /** @type {(inputs: Bundles_Open_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz zestaw`)
};

const pt_bundles_open_kit = /** @type {(inputs: Bundles_Open_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir kit`)
};

const ru_bundles_open_kit = /** @type {(inputs: Bundles_Open_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть набор`)
};

const sv_bundles_open_kit = /** @type {(inputs: Bundles_Open_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna kit`)
};

const tr_bundles_open_kit = /** @type {(inputs: Bundles_Open_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kiti aç`)
};

const zh_bundles_open_kit = /** @type {(inputs: Bundles_Open_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开合集`)
};

const ja_bundles_open_kit = /** @type {(inputs: Bundles_Open_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを開く`)
};

/**
* | output |
* | --- |
* | "Open kit" |
*
* @param {Bundles_Open_KitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_open_kit = /** @type {((inputs?: Bundles_Open_KitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_Open_KitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_open_kit(inputs)
	if (locale === "de") return de_bundles_open_kit(inputs)
	if (locale === "fr") return fr_bundles_open_kit(inputs)
	if (locale === "it") return it_bundles_open_kit(inputs)
	if (locale === "nl") return nl_bundles_open_kit(inputs)
	if (locale === "pl") return pl_bundles_open_kit(inputs)
	if (locale === "pt") return pt_bundles_open_kit(inputs)
	if (locale === "ru") return ru_bundles_open_kit(inputs)
	if (locale === "sv") return sv_bundles_open_kit(inputs)
	if (locale === "tr") return tr_bundles_open_kit(inputs)
	if (locale === "zh") return zh_bundles_open_kit(inputs)
	if (locale === "ja") return ja_bundles_open_kit(inputs)
	return en_bundles_open_kit(inputs)
});
