/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Fact_Loader_VersionInputs */

const en_mod_fact_loader_version = /** @type {(inputs: Mod_Fact_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader declared`)
};

const es_mod_fact_loader_version = /** @type {(inputs: Mod_Fact_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader declarado`)
};

const de_mod_fact_loader_version = /** @type {(inputs: Mod_Fact_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Angegebener RedLoader`)
};

const fr_mod_fact_loader_version = /** @type {(inputs: Mod_Fact_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader déclaré`)
};

const it_mod_fact_loader_version = /** @type {(inputs: Mod_Fact_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader dichiarato`)
};

const nl_mod_fact_loader_version = /** @type {(inputs: Mod_Fact_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opgegeven RedLoader`)
};

const pl_mod_fact_loader_version = /** @type {(inputs: Mod_Fact_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deklarowany RedLoader`)
};

const pt_mod_fact_loader_version = /** @type {(inputs: Mod_Fact_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader declarado`)
};

const ru_mod_fact_loader_version = /** @type {(inputs: Mod_Fact_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заявленный RedLoader`)
};

const sv_mod_fact_loader_version = /** @type {(inputs: Mod_Fact_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Angiven RedLoader`)
};

const tr_mod_fact_loader_version = /** @type {(inputs: Mod_Fact_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belirtilen RedLoader`)
};

const zh_mod_fact_loader_version = /** @type {(inputs: Mod_Fact_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`声明的 RedLoader 版本`)
};

const ja_mod_fact_loader_version = /** @type {(inputs: Mod_Fact_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader（申告）`)
};

/**
* | output |
* | --- |
* | "RedLoader declared" |
*
* @param {Mod_Fact_Loader_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_fact_loader_version = /** @type {((inputs?: Mod_Fact_Loader_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Fact_Loader_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_fact_loader_version(inputs)
	if (locale === "de") return de_mod_fact_loader_version(inputs)
	if (locale === "fr") return fr_mod_fact_loader_version(inputs)
	if (locale === "it") return it_mod_fact_loader_version(inputs)
	if (locale === "nl") return nl_mod_fact_loader_version(inputs)
	if (locale === "pl") return pl_mod_fact_loader_version(inputs)
	if (locale === "pt") return pt_mod_fact_loader_version(inputs)
	if (locale === "ru") return ru_mod_fact_loader_version(inputs)
	if (locale === "sv") return sv_mod_fact_loader_version(inputs)
	if (locale === "tr") return tr_mod_fact_loader_version(inputs)
	if (locale === "zh") return zh_mod_fact_loader_version(inputs)
	if (locale === "ja") return ja_mod_fact_loader_version(inputs)
	return en_mod_fact_loader_version(inputs)
});
