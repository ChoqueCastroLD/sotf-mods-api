/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Verified_CreatorInputs */

const en_ranger_verified_creator = /** @type {(inputs: Ranger_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trusted`)
};

const es_ranger_verified_creator = /** @type {(inputs: Ranger_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De confianza`)
};

const de_ranger_verified_creator = /** @type {(inputs: Ranger_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrauenswürdig`)
};

const fr_ranger_verified_creator = /** @type {(inputs: Ranger_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De confiance`)
};

const it_ranger_verified_creator = /** @type {(inputs: Ranger_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Affidabile`)
};

const nl_ranger_verified_creator = /** @type {(inputs: Ranger_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrouwd`)
};

const pl_ranger_verified_creator = /** @type {(inputs: Ranger_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaufany`)
};

const pt_ranger_verified_creator = /** @type {(inputs: Ranger_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confiável`)
};

const ru_ranger_verified_creator = /** @type {(inputs: Ranger_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверенный`)
};

const sv_ranger_verified_creator = /** @type {(inputs: Ranger_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betrodd`)
};

const tr_ranger_verified_creator = /** @type {(inputs: Ranger_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenilir`)
};

const zh_ranger_verified_creator = /** @type {(inputs: Ranger_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`受信任`)
};

const ja_ranger_verified_creator = /** @type {(inputs: Ranger_Verified_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信頼済み`)
};

/**
* | output |
* | --- |
* | "Trusted" |
*
* @param {Ranger_Verified_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_verified_creator = /** @type {((inputs?: Ranger_Verified_CreatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Verified_CreatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_verified_creator(inputs)
	if (locale === "de") return de_ranger_verified_creator(inputs)
	if (locale === "fr") return fr_ranger_verified_creator(inputs)
	if (locale === "it") return it_ranger_verified_creator(inputs)
	if (locale === "nl") return nl_ranger_verified_creator(inputs)
	if (locale === "pl") return pl_ranger_verified_creator(inputs)
	if (locale === "pt") return pt_ranger_verified_creator(inputs)
	if (locale === "ru") return ru_ranger_verified_creator(inputs)
	if (locale === "sv") return sv_ranger_verified_creator(inputs)
	if (locale === "tr") return tr_ranger_verified_creator(inputs)
	if (locale === "zh") return zh_ranger_verified_creator(inputs)
	if (locale === "ja") return ja_ranger_verified_creator(inputs)
	return en_ranger_verified_creator(inputs)
});
