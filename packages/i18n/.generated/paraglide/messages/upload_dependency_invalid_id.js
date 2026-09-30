/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dependency_Invalid_IdInputs */

const en_upload_dependency_invalid_id = /** @type {(inputs: Upload_Dependency_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A manifest id uses letters, digits, “.”, “_” and “-” only.`)
};

const es_upload_dependency_invalid_id = /** @type {(inputs: Upload_Dependency_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un id de manifest solo usa letras, dígitos, «.», «_» y «-».`)
};

const de_upload_dependency_invalid_id = /** @type {(inputs: Upload_Dependency_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine Manifest-ID besteht nur aus Buchstaben, Ziffern, „.“, „_“ und „-“.`)
};

const fr_upload_dependency_invalid_id = /** @type {(inputs: Upload_Dependency_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un id de manifest ne contient que des lettres, des chiffres, « . », « _ » et « - ».`)
};

const it_upload_dependency_invalid_id = /** @type {(inputs: Upload_Dependency_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un id del manifest usa solo lettere, cifre, “.”, “_” e “-”.`)
};

const nl_upload_dependency_invalid_id = /** @type {(inputs: Upload_Dependency_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een manifest-id bestaat alleen uit letters, cijfers, ‘.’, ‘_’ en ‘-’.`)
};

const pl_upload_dependency_invalid_id = /** @type {(inputs: Upload_Dependency_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identyfikator manifestu zawiera tylko litery, cyfry, „.”, „_” i „-”.`)
};

const pt_upload_dependency_invalid_id = /** @type {(inputs: Upload_Dependency_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um id de manifest usa só letras, dígitos, “.”, “_” e “-”.`)
};

const ru_upload_dependency_invalid_id = /** @type {(inputs: Upload_Dependency_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Id в манифесте состоит только из букв, цифр, «.», «_» и «-».`)
};

const sv_upload_dependency_invalid_id = /** @type {(inputs: Upload_Dependency_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ett manifest-id består bara av bokstäver, siffror, ”.”, ”_” och ”-”.`)
};

const tr_upload_dependency_invalid_id = /** @type {(inputs: Upload_Dependency_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest kimliği yalnızca harf, rakam, “.”, “_” ve “-” içerir.`)
};

const zh_upload_dependency_invalid_id = /** @type {(inputs: Upload_Dependency_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清单 ID 只能包含字母、数字、“.”、“_”和“-”。`)
};

const ja_upload_dependency_invalid_id = /** @type {(inputs: Upload_Dependency_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マニフェストIDに使えるのは英数字、「.」「_」「-」だけです。`)
};

/**
* | output |
* | --- |
* | "A manifest id uses letters, digits, “.”, “_” and “-” only." |
*
* @param {Upload_Dependency_Invalid_IdInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependency_invalid_id = /** @type {((inputs?: Upload_Dependency_Invalid_IdInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependency_Invalid_IdInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependency_invalid_id(inputs)
	if (locale === "de") return de_upload_dependency_invalid_id(inputs)
	if (locale === "fr") return fr_upload_dependency_invalid_id(inputs)
	if (locale === "it") return it_upload_dependency_invalid_id(inputs)
	if (locale === "nl") return nl_upload_dependency_invalid_id(inputs)
	if (locale === "pl") return pl_upload_dependency_invalid_id(inputs)
	if (locale === "pt") return pt_upload_dependency_invalid_id(inputs)
	if (locale === "ru") return ru_upload_dependency_invalid_id(inputs)
	if (locale === "sv") return sv_upload_dependency_invalid_id(inputs)
	if (locale === "tr") return tr_upload_dependency_invalid_id(inputs)
	if (locale === "zh") return zh_upload_dependency_invalid_id(inputs)
	if (locale === "ja") return ja_upload_dependency_invalid_id(inputs)
	return en_upload_dependency_invalid_id(inputs)
});
