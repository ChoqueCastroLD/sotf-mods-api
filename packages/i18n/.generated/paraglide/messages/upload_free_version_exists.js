/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Free_Version_ExistsInputs */

const en_upload_free_version_exists = /** @type {(inputs: Upload_Free_Version_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This version already exists for this mod.`)
};

const es_upload_free_version_exists = /** @type {(inputs: Upload_Free_Version_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta versión ya existe para este mod.`)
};

const de_upload_free_version_exists = /** @type {(inputs: Upload_Free_Version_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Version gibt es für diese Mod schon.`)
};

const fr_upload_free_version_exists = /** @type {(inputs: Upload_Free_Version_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette version existe déjà pour ce mod.`)
};

const it_upload_free_version_exists = /** @type {(inputs: Upload_Free_Version_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa versione esiste già per questa mod.`)
};

const nl_upload_free_version_exists = /** @type {(inputs: Upload_Free_Version_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze versie bestaat al voor deze mod.`)
};

const pl_upload_free_version_exists = /** @type {(inputs: Upload_Free_Version_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta wersja już istnieje dla tego moda.`)
};

const pt_upload_free_version_exists = /** @type {(inputs: Upload_Free_Version_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta versão já existe para este mod.`)
};

const ru_upload_free_version_exists = /** @type {(inputs: Upload_Free_Version_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Такая версия у этого мода уже есть.`)
};

const sv_upload_free_version_exists = /** @type {(inputs: Upload_Free_Version_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här versionen finns redan för modden.`)
};

const tr_upload_free_version_exists = /** @type {(inputs: Upload_Free_Version_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sürüm bu mod için zaten var.`)
};

const zh_upload_free_version_exists = /** @type {(inputs: Upload_Free_Version_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该模组已有此版本。`)
};

const ja_upload_free_version_exists = /** @type {(inputs: Upload_Free_Version_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このバージョンはすでに存在します。`)
};

/**
* | output |
* | --- |
* | "This version already exists for this mod." |
*
* @param {Upload_Free_Version_ExistsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_free_version_exists = /** @type {((inputs?: Upload_Free_Version_ExistsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Free_Version_ExistsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_free_version_exists(inputs)
	if (locale === "de") return de_upload_free_version_exists(inputs)
	if (locale === "fr") return fr_upload_free_version_exists(inputs)
	if (locale === "it") return it_upload_free_version_exists(inputs)
	if (locale === "nl") return nl_upload_free_version_exists(inputs)
	if (locale === "pl") return pl_upload_free_version_exists(inputs)
	if (locale === "pt") return pt_upload_free_version_exists(inputs)
	if (locale === "ru") return ru_upload_free_version_exists(inputs)
	if (locale === "sv") return sv_upload_free_version_exists(inputs)
	if (locale === "tr") return tr_upload_free_version_exists(inputs)
	if (locale === "zh") return zh_upload_free_version_exists(inputs)
	if (locale === "ja") return ja_upload_free_version_exists(inputs)
	return en_upload_free_version_exists(inputs)
});
