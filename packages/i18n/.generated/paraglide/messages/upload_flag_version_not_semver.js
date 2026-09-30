/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flag_Version_Not_SemverInputs */

const en_upload_flag_version_not_semver = /** @type {(inputs: Upload_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The version is not a semantic version (x.y.z).`)
};

const es_upload_flag_version_not_semver = /** @type {(inputs: Upload_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La versión no es una versión semántica (x.y.z).`)
};

const de_upload_flag_version_not_semver = /** @type {(inputs: Upload_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Version ist keine semantische Version (x.y.z).`)
};

const fr_upload_flag_version_not_semver = /** @type {(inputs: Upload_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La version n’est pas une version sémantique (x.y.z).`)
};

const it_upload_flag_version_not_semver = /** @type {(inputs: Upload_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La versione non è una versione semantica (x.y.z).`)
};

const nl_upload_flag_version_not_semver = /** @type {(inputs: Upload_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De versie is geen semantische versie (x.y.z).`)
};

const pl_upload_flag_version_not_semver = /** @type {(inputs: Upload_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja nie jest wersją semantyczną (x.y.z).`)
};

const pt_upload_flag_version_not_semver = /** @type {(inputs: Upload_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A versão não é uma versão semântica (x.y.z).`)
};

const ru_upload_flag_version_not_semver = /** @type {(inputs: Upload_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия не является семантической (x.y.z).`)
};

const sv_upload_flag_version_not_semver = /** @type {(inputs: Upload_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen är ingen semantisk version (x.y.z).`)
};

const tr_upload_flag_version_not_semver = /** @type {(inputs: Upload_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm anlamsal bir sürüm değil (x.y.z).`)
};

const zh_upload_flag_version_not_semver = /** @type {(inputs: Upload_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本不是语义化版本（x.y.z）。`)
};

const ja_upload_flag_version_not_semver = /** @type {(inputs: Upload_Flag_Version_Not_SemverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンがセマンティックバージョン（x.y.z）ではありません。`)
};

/**
* | output |
* | --- |
* | "The version is not a semantic version (x.y.z)." |
*
* @param {Upload_Flag_Version_Not_SemverInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flag_version_not_semver = /** @type {((inputs?: Upload_Flag_Version_Not_SemverInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Version_Not_SemverInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flag_version_not_semver(inputs)
	if (locale === "de") return de_upload_flag_version_not_semver(inputs)
	if (locale === "fr") return fr_upload_flag_version_not_semver(inputs)
	if (locale === "it") return it_upload_flag_version_not_semver(inputs)
	if (locale === "nl") return nl_upload_flag_version_not_semver(inputs)
	if (locale === "pl") return pl_upload_flag_version_not_semver(inputs)
	if (locale === "pt") return pt_upload_flag_version_not_semver(inputs)
	if (locale === "ru") return ru_upload_flag_version_not_semver(inputs)
	if (locale === "sv") return sv_upload_flag_version_not_semver(inputs)
	if (locale === "tr") return tr_upload_flag_version_not_semver(inputs)
	if (locale === "zh") return zh_upload_flag_version_not_semver(inputs)
	if (locale === "ja") return ja_upload_flag_version_not_semver(inputs)
	return en_upload_flag_version_not_semver(inputs)
});
