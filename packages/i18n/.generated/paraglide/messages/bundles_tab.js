/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_TabInputs */

const en_bundles_tab = /** @type {(inputs: Bundles_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bundles`)
};

const es_bundles_tab = /** @type {(inputs: Bundles_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paquetes`)
};

const de_bundles_tab = /** @type {(inputs: Bundles_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pakete`)
};

const fr_bundles_tab = /** @type {(inputs: Bundles_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Packs`)
};

const it_bundles_tab = /** @type {(inputs: Bundles_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pacchetti`)
};

const nl_bundles_tab = /** @type {(inputs: Bundles_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pakketten`)
};

const pl_bundles_tab = /** @type {(inputs: Bundles_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pakiety`)
};

const pt_bundles_tab = /** @type {(inputs: Bundles_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pacotes`)
};

const ru_bundles_tab = /** @type {(inputs: Bundles_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наборы`)
};

const sv_bundles_tab = /** @type {(inputs: Bundles_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paket`)
};

const tr_bundles_tab = /** @type {(inputs: Bundles_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paketler`)
};

const zh_bundles_tab = /** @type {(inputs: Bundles_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`整合包`)
};

const ja_bundles_tab = /** @type {(inputs: Bundles_TabInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バンドル`)
};

/**
* | output |
* | --- |
* | "Bundles" |
*
* @param {Bundles_TabInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_tab = /** @type {((inputs?: Bundles_TabInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_TabInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_tab(inputs)
	if (locale === "de") return de_bundles_tab(inputs)
	if (locale === "fr") return fr_bundles_tab(inputs)
	if (locale === "it") return it_bundles_tab(inputs)
	if (locale === "nl") return nl_bundles_tab(inputs)
	if (locale === "pl") return pl_bundles_tab(inputs)
	if (locale === "pt") return pt_bundles_tab(inputs)
	if (locale === "ru") return ru_bundles_tab(inputs)
	if (locale === "sv") return sv_bundles_tab(inputs)
	if (locale === "tr") return tr_bundles_tab(inputs)
	if (locale === "zh") return zh_bundles_tab(inputs)
	if (locale === "ja") return ja_bundles_tab(inputs)
	return en_bundles_tab(inputs)
});
