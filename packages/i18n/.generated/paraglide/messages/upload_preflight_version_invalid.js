/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Version_InvalidInputs */

const en_upload_preflight_version_invalid = /** @type {(inputs: Upload_Preflight_Version_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The version number can only use letters, numbers, dots and dashes.`)
};

const es_upload_preflight_version_invalid = /** @type {(inputs: Upload_Preflight_Version_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El número de versión solo puede tener letras, números, puntos y guiones.`)
};

const de_upload_preflight_version_invalid = /** @type {(inputs: Upload_Preflight_Version_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Versionsnummer darf nur Buchstaben, Zahlen, Punkte und Bindestriche enthalten.`)
};

const fr_upload_preflight_version_invalid = /** @type {(inputs: Upload_Preflight_Version_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le numéro de version ne peut contenir que des lettres, chiffres, points et tirets.`)
};

const it_upload_preflight_version_invalid = /** @type {(inputs: Upload_Preflight_Version_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il numero di versione può contenere solo lettere, numeri, punti e trattini.`)
};

const nl_upload_preflight_version_invalid = /** @type {(inputs: Upload_Preflight_Version_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het versienummer mag alleen letters, cijfers, punten en streepjes bevatten.`)
};

const pl_upload_preflight_version_invalid = /** @type {(inputs: Upload_Preflight_Version_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Numer wersji może zawierać tylko litery, cyfry, kropki i myślniki.`)
};

const pt_upload_preflight_version_invalid = /** @type {(inputs: Upload_Preflight_Version_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O número da versão só pode ter letras, números, pontos e hífens.`)
};

const ru_upload_preflight_version_invalid = /** @type {(inputs: Upload_Preflight_Version_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Номер версии может содержать только буквы, цифры, точки и дефисы.`)
};

const sv_upload_preflight_version_invalid = /** @type {(inputs: Upload_Preflight_Version_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionsnumret får bara innehålla bokstäver, siffror, punkter och bindestreck.`)
};

const tr_upload_preflight_version_invalid = /** @type {(inputs: Upload_Preflight_Version_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm numarası yalnızca harf, rakam, nokta ve tire içerebilir.`)
};

const zh_upload_preflight_version_invalid = /** @type {(inputs: Upload_Preflight_Version_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本号只能包含字母、数字、点和连字符。`)
};

const ja_upload_preflight_version_invalid = /** @type {(inputs: Upload_Preflight_Version_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン番号には英数字、ドット、ハイフンのみ使えます。`)
};

/**
* | output |
* | --- |
* | "The version number can only use letters, numbers, dots and dashes." |
*
* @param {Upload_Preflight_Version_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_version_invalid = /** @type {((inputs?: Upload_Preflight_Version_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Version_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_version_invalid(inputs)
	if (locale === "de") return de_upload_preflight_version_invalid(inputs)
	if (locale === "fr") return fr_upload_preflight_version_invalid(inputs)
	if (locale === "it") return it_upload_preflight_version_invalid(inputs)
	if (locale === "nl") return nl_upload_preflight_version_invalid(inputs)
	if (locale === "pl") return pl_upload_preflight_version_invalid(inputs)
	if (locale === "pt") return pt_upload_preflight_version_invalid(inputs)
	if (locale === "ru") return ru_upload_preflight_version_invalid(inputs)
	if (locale === "sv") return sv_upload_preflight_version_invalid(inputs)
	if (locale === "tr") return tr_upload_preflight_version_invalid(inputs)
	if (locale === "zh") return zh_upload_preflight_version_invalid(inputs)
	if (locale === "ja") return ja_upload_preflight_version_invalid(inputs)
	return en_upload_preflight_version_invalid(inputs)
});
