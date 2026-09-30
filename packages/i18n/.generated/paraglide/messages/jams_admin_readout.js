/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_ReadoutInputs */

const en_jams_admin_readout = /** @type {(inputs: Jams_Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RANGER STATION`)
};

const es_jams_admin_readout = /** @type {(inputs: Jams_Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ESTACIÓN DE GUARDABOSQUES`)
};

const de_jams_admin_readout = /** @type {(inputs: Jams_Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RANGERSTATION`)
};

const fr_jams_admin_readout = /** @type {(inputs: Jams_Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`POSTE DE GARDE`)
};

const it_jams_admin_readout = /** @type {(inputs: Jams_Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`STAZIONE DEI RANGER`)
};

const nl_jams_admin_readout = /** @type {(inputs: Jams_Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RANGERPOST`)
};

const pl_jams_admin_readout = /** @type {(inputs: Jams_Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`POSTERUNEK STRAŻNIKÓW`)
};

const pt_jams_admin_readout = /** @type {(inputs: Jams_Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ESTAÇÃO DE GUARDA-FLORESTAIS`)
};

const ru_jams_admin_readout = /** @type {(inputs: Jams_Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ПОСТ РЕЙНДЖЕРОВ`)
};

const sv_jams_admin_readout = /** @type {(inputs: Jams_Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RANGERSTATION`)
};

const tr_jams_admin_readout = /** @type {(inputs: Jams_Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KORUCU İSTASYONU`)
};

const zh_jams_admin_readout = /** @type {(inputs: Jams_Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`护林站`)
};

const ja_jams_admin_readout = /** @type {(inputs: Jams_Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーステーション`)
};

/**
* | output |
* | --- |
* | "RANGER STATION" |
*
* @param {Jams_Admin_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_readout = /** @type {((inputs?: Jams_Admin_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_readout(inputs)
	if (locale === "de") return de_jams_admin_readout(inputs)
	if (locale === "fr") return fr_jams_admin_readout(inputs)
	if (locale === "it") return it_jams_admin_readout(inputs)
	if (locale === "nl") return nl_jams_admin_readout(inputs)
	if (locale === "pl") return pl_jams_admin_readout(inputs)
	if (locale === "pt") return pt_jams_admin_readout(inputs)
	if (locale === "ru") return ru_jams_admin_readout(inputs)
	if (locale === "sv") return sv_jams_admin_readout(inputs)
	if (locale === "tr") return tr_jams_admin_readout(inputs)
	if (locale === "zh") return zh_jams_admin_readout(inputs)
	if (locale === "ja") return ja_jams_admin_readout(inputs)
	return en_jams_admin_readout(inputs)
});
