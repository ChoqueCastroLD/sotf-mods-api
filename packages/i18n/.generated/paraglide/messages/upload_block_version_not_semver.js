/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Upload_Block_Version_Not_SemverInputs */

const en_upload_block_version_not_semver = /** @type {(inputs: Upload_Block_Version_Not_SemverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} is not a semantic version (x.y.z).`)
};

const es_upload_block_version_not_semver = /** @type {(inputs: Upload_Block_Version_Not_SemverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La versión ${i?.version} no es una versión semántica (x.y.z).`)
};

const de_upload_block_version_not_semver = /** @type {(inputs: Upload_Block_Version_Not_SemverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} ist keine semantische Version (x.y.z).`)
};

const fr_upload_block_version_not_semver = /** @type {(inputs: Upload_Block_Version_Not_SemverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La version ${i?.version} n’est pas une version sémantique (x.y.z).`)
};

const it_upload_block_version_not_semver = /** @type {(inputs: Upload_Block_Version_Not_SemverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La versione ${i?.version} non è una versione semantica (x.y.z).`)
};

const nl_upload_block_version_not_semver = /** @type {(inputs: Upload_Block_Version_Not_SemverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versie ${i?.version} is geen semantische versie (x.y.z).`)
};

const pl_upload_block_version_not_semver = /** @type {(inputs: Upload_Block_Version_Not_SemverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wersja ${i?.version} nie jest wersją semantyczną (x.y.z).`)
};

const pt_upload_block_version_not_semver = /** @type {(inputs: Upload_Block_Version_Not_SemverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A versão ${i?.version} não é uma versão semântica (x.y.z).`)
};

const ru_upload_block_version_not_semver = /** @type {(inputs: Upload_Block_Version_Not_SemverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Версия ${i?.version} не является семантической версией (x.y.z).`)
};

const sv_upload_block_version_not_semver = /** @type {(inputs: Upload_Block_Version_Not_SemverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} är ingen semantisk version (x.y.z).`)
};

const tr_upload_block_version_not_semver = /** @type {(inputs: Upload_Block_Version_Not_SemverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version} sürümü anlamsal bir sürüm değil (x.y.z).`)
};

const zh_upload_block_version_not_semver = /** @type {(inputs: Upload_Block_Version_Not_SemverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`版本 ${i?.version} 不是语义化版本（x.y.z）。`)
};

const ja_upload_block_version_not_semver = /** @type {(inputs: Upload_Block_Version_Not_SemverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`バージョン ${i?.version} はセマンティックバージョン（x.y.z）ではありません。`)
};

/**
* | output |
* | --- |
* | "Version {version} is not a semantic version (x.y.z)." |
*
* @param {Upload_Block_Version_Not_SemverInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_block_version_not_semver = /** @type {((inputs: Upload_Block_Version_Not_SemverInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Block_Version_Not_SemverInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_block_version_not_semver(inputs)
	if (locale === "de") return de_upload_block_version_not_semver(inputs)
	if (locale === "fr") return fr_upload_block_version_not_semver(inputs)
	if (locale === "it") return it_upload_block_version_not_semver(inputs)
	if (locale === "nl") return nl_upload_block_version_not_semver(inputs)
	if (locale === "pl") return pl_upload_block_version_not_semver(inputs)
	if (locale === "pt") return pt_upload_block_version_not_semver(inputs)
	if (locale === "ru") return ru_upload_block_version_not_semver(inputs)
	if (locale === "sv") return sv_upload_block_version_not_semver(inputs)
	if (locale === "tr") return tr_upload_block_version_not_semver(inputs)
	if (locale === "zh") return zh_upload_block_version_not_semver(inputs)
	if (locale === "ja") return ja_upload_block_version_not_semver(inputs)
	return en_upload_block_version_not_semver(inputs)
});
