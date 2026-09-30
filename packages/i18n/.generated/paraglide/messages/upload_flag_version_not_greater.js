/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flag_Version_Not_GreaterInputs */

const en_upload_flag_version_not_greater = /** @type {(inputs: Upload_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The version isn’t greater than the latest one.`)
};

const es_upload_flag_version_not_greater = /** @type {(inputs: Upload_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La versión no es mayor que la última.`)
};

const de_upload_flag_version_not_greater = /** @type {(inputs: Upload_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Version ist nicht größer als die neueste.`)
};

const fr_upload_flag_version_not_greater = /** @type {(inputs: Upload_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La version n’est pas supérieure à la dernière.`)
};

const it_upload_flag_version_not_greater = /** @type {(inputs: Upload_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La versione non è maggiore dell’ultima.`)
};

const nl_upload_flag_version_not_greater = /** @type {(inputs: Upload_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De versie is niet hoger dan de laatste.`)
};

const pl_upload_flag_version_not_greater = /** @type {(inputs: Upload_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja nie jest wyższa od najnowszej.`)
};

const pt_upload_flag_version_not_greater = /** @type {(inputs: Upload_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A versão não é maior que a mais recente.`)
};

const ru_upload_flag_version_not_greater = /** @type {(inputs: Upload_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия не выше последней.`)
};

const sv_upload_flag_version_not_greater = /** @type {(inputs: Upload_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen är inte högre än den senaste.`)
};

const tr_upload_flag_version_not_greater = /** @type {(inputs: Upload_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm en sonkinden büyük değil.`)
};

const zh_upload_flag_version_not_greater = /** @type {(inputs: Upload_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本不高于最新版本。`)
};

const ja_upload_flag_version_not_greater = /** @type {(inputs: Upload_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンが最新版より大きくありません。`)
};

/**
* | output |
* | --- |
* | "The version isn’t greater than the latest one." |
*
* @param {Upload_Flag_Version_Not_GreaterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flag_version_not_greater = /** @type {((inputs?: Upload_Flag_Version_Not_GreaterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Version_Not_GreaterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flag_version_not_greater(inputs)
	if (locale === "de") return de_upload_flag_version_not_greater(inputs)
	if (locale === "fr") return fr_upload_flag_version_not_greater(inputs)
	if (locale === "it") return it_upload_flag_version_not_greater(inputs)
	if (locale === "nl") return nl_upload_flag_version_not_greater(inputs)
	if (locale === "pl") return pl_upload_flag_version_not_greater(inputs)
	if (locale === "pt") return pt_upload_flag_version_not_greater(inputs)
	if (locale === "ru") return ru_upload_flag_version_not_greater(inputs)
	if (locale === "sv") return sv_upload_flag_version_not_greater(inputs)
	if (locale === "tr") return tr_upload_flag_version_not_greater(inputs)
	if (locale === "zh") return zh_upload_flag_version_not_greater(inputs)
	if (locale === "ja") return ja_upload_flag_version_not_greater(inputs)
	return en_upload_flag_version_not_greater(inputs)
});
