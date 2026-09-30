/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Manifest_IdenticalInputs */

const en_ranger_manifest_identical = /** @type {(inputs: Ranger_Manifest_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The manifest did not change.`)
};

const es_ranger_manifest_identical = /** @type {(inputs: Ranger_Manifest_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El manifest no ha cambiado.`)
};

const de_ranger_manifest_identical = /** @type {(inputs: Ranger_Manifest_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Manifest hat sich nicht geändert.`)
};

const fr_ranger_manifest_identical = /** @type {(inputs: Ranger_Manifest_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le manifest n’a pas changé.`)
};

const it_ranger_manifest_identical = /** @type {(inputs: Ranger_Manifest_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il manifest non è cambiato.`)
};

const nl_ranger_manifest_identical = /** @type {(inputs: Ranger_Manifest_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het manifest is niet veranderd.`)
};

const pl_ranger_manifest_identical = /** @type {(inputs: Ranger_Manifest_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest się nie zmienił.`)
};

const pt_ranger_manifest_identical = /** @type {(inputs: Ranger_Manifest_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O manifest não mudou.`)
};

const ru_ranger_manifest_identical = /** @type {(inputs: Ranger_Manifest_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Манифест не изменился.`)
};

const sv_ranger_manifest_identical = /** @type {(inputs: Ranger_Manifest_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifestet har inte ändrats.`)
};

const tr_ranger_manifest_identical = /** @type {(inputs: Ranger_Manifest_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest değişmedi.`)
};

const zh_ranger_manifest_identical = /** @type {(inputs: Ranger_Manifest_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清单没有变化。`)
};

const ja_ranger_manifest_identical = /** @type {(inputs: Ranger_Manifest_IdenticalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マニフェストに変更はありません。`)
};

/**
* | output |
* | --- |
* | "The manifest did not change." |
*
* @param {Ranger_Manifest_IdenticalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_manifest_identical = /** @type {((inputs?: Ranger_Manifest_IdenticalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Manifest_IdenticalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_manifest_identical(inputs)
	if (locale === "de") return de_ranger_manifest_identical(inputs)
	if (locale === "fr") return fr_ranger_manifest_identical(inputs)
	if (locale === "it") return it_ranger_manifest_identical(inputs)
	if (locale === "nl") return nl_ranger_manifest_identical(inputs)
	if (locale === "pl") return pl_ranger_manifest_identical(inputs)
	if (locale === "pt") return pt_ranger_manifest_identical(inputs)
	if (locale === "ru") return ru_ranger_manifest_identical(inputs)
	if (locale === "sv") return sv_ranger_manifest_identical(inputs)
	if (locale === "tr") return tr_ranger_manifest_identical(inputs)
	if (locale === "zh") return zh_ranger_manifest_identical(inputs)
	if (locale === "ja") return ja_ranger_manifest_identical(inputs)
	return en_ranger_manifest_identical(inputs)
});
