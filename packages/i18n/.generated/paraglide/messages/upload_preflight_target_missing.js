/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Target_MissingInputs */

const en_upload_preflight_target_missing = /** @type {(inputs: Upload_Preflight_Target_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The mod of this version no longer exists.`)
};

const es_upload_preflight_target_missing = /** @type {(inputs: Upload_Preflight_Target_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El mod de esta versión ya no existe.`)
};

const de_upload_preflight_target_missing = /** @type {(inputs: Upload_Preflight_Target_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Mod dieser Version existiert nicht mehr.`)
};

const fr_upload_preflight_target_missing = /** @type {(inputs: Upload_Preflight_Target_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mod de cette version n’existe plus.`)
};

const it_upload_preflight_target_missing = /** @type {(inputs: Upload_Preflight_Target_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La mod di questa versione non esiste più.`)
};

const nl_upload_preflight_target_missing = /** @type {(inputs: Upload_Preflight_Target_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mod van deze versie bestaat niet meer.`)
};

const pl_upload_preflight_target_missing = /** @type {(inputs: Upload_Preflight_Target_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod tej wersji już nie istnieje.`)
};

const pt_upload_preflight_target_missing = /** @type {(inputs: Upload_Preflight_Target_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O mod desta versão não existe mais.`)
};

const ru_upload_preflight_target_missing = /** @type {(inputs: Upload_Preflight_Target_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мода для этой версии больше не существует.`)
};

const sv_upload_preflight_target_missing = /** @type {(inputs: Upload_Preflight_Target_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modden för den här versionen finns inte längre.`)
};

const tr_upload_preflight_target_missing = /** @type {(inputs: Upload_Preflight_Target_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sürümün modu artık yok.`)
};

const zh_upload_preflight_target_missing = /** @type {(inputs: Upload_Preflight_Target_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此版本对应的模组已不存在。`)
};

const ja_upload_preflight_target_missing = /** @type {(inputs: Upload_Preflight_Target_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このバージョンのMODはもう存在しません。`)
};

/**
* | output |
* | --- |
* | "The mod of this version no longer exists." |
*
* @param {Upload_Preflight_Target_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_target_missing = /** @type {((inputs?: Upload_Preflight_Target_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Target_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_target_missing(inputs)
	if (locale === "de") return de_upload_preflight_target_missing(inputs)
	if (locale === "fr") return fr_upload_preflight_target_missing(inputs)
	if (locale === "it") return it_upload_preflight_target_missing(inputs)
	if (locale === "nl") return nl_upload_preflight_target_missing(inputs)
	if (locale === "pl") return pl_upload_preflight_target_missing(inputs)
	if (locale === "pt") return pt_upload_preflight_target_missing(inputs)
	if (locale === "ru") return ru_upload_preflight_target_missing(inputs)
	if (locale === "sv") return sv_upload_preflight_target_missing(inputs)
	if (locale === "tr") return tr_upload_preflight_target_missing(inputs)
	if (locale === "zh") return zh_upload_preflight_target_missing(inputs)
	if (locale === "ja") return ja_upload_preflight_target_missing(inputs)
	return en_upload_preflight_target_missing(inputs)
});
