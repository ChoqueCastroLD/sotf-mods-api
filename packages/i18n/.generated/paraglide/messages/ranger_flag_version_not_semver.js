/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Flag_Version_Not_SemverInputs */

const en_ranger_flag_version_not_semver = /** @type {(inputs: Ranger_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version is not semantic (x.y.z)`)
};

const es_ranger_flag_version_not_semver = /** @type {(inputs: Ranger_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La versión no es semántica (x.y.z)`)
};

const de_ranger_flag_version_not_semver = /** @type {(inputs: Ranger_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version ist nicht semantisch (x.y.z)`)
};

const fr_ranger_flag_version_not_semver = /** @type {(inputs: Ranger_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version non sémantique (x.y.z)`)
};

const it_ranger_flag_version_not_semver = /** @type {(inputs: Ranger_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La versione non è semantica (x.y.z)`)
};

const nl_ranger_flag_version_not_semver = /** @type {(inputs: Ranger_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versie is niet semantisch (x.y.z)`)
};

const pl_ranger_flag_version_not_semver = /** @type {(inputs: Ranger_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja nie jest semantyczna (x.y.z)`)
};

const pt_ranger_flag_version_not_semver = /** @type {(inputs: Ranger_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A versão não é semântica (x.y.z)`)
};

const ru_ranger_flag_version_not_semver = /** @type {(inputs: Ranger_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия не семантическая (x.y.z)`)
};

const sv_ranger_flag_version_not_semver = /** @type {(inputs: Ranger_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen är inte semantisk (x.y.z)`)
};

const tr_ranger_flag_version_not_semver = /** @type {(inputs: Ranger_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm anlamsal değil (x.y.z)`)
};

const zh_ranger_flag_version_not_semver = /** @type {(inputs: Ranger_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本号不符合语义化格式（x.y.z）`)
};

const ja_ranger_flag_version_not_semver = /** @type {(inputs: Ranger_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンがセマンティック形式（x.y.z）ではありません`)
};

/**
* | output |
* | --- |
* | "Version is not semantic (x.y.z)" |
*
* @param {Ranger_Flag_Version_Not_SemverInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_flag_version_not_semver = /** @type {((inputs?: Ranger_Flag_Version_Not_SemverInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Version_Not_SemverInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_flag_version_not_semver(inputs)
	if (locale === "de") return de_ranger_flag_version_not_semver(inputs)
	if (locale === "fr") return fr_ranger_flag_version_not_semver(inputs)
	if (locale === "it") return it_ranger_flag_version_not_semver(inputs)
	if (locale === "nl") return nl_ranger_flag_version_not_semver(inputs)
	if (locale === "pl") return pl_ranger_flag_version_not_semver(inputs)
	if (locale === "pt") return pt_ranger_flag_version_not_semver(inputs)
	if (locale === "ru") return ru_ranger_flag_version_not_semver(inputs)
	if (locale === "sv") return sv_ranger_flag_version_not_semver(inputs)
	if (locale === "tr") return tr_ranger_flag_version_not_semver(inputs)
	if (locale === "zh") return zh_ranger_flag_version_not_semver(inputs)
	if (locale === "ja") return ja_ranger_flag_version_not_semver(inputs)
	return en_ranger_flag_version_not_semver(inputs)
});
