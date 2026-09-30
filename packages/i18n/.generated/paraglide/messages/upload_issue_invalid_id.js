/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Invalid_IdInputs */

const en_upload_issue_invalid_id = /** @type {(inputs: Upload_Issue_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The id may only use letters, digits, “.”, “_” and “-”.`)
};

const es_upload_issue_invalid_id = /** @type {(inputs: Upload_Issue_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El id solo puede usar letras, dígitos, «.», «_» y «-».`)
};

const de_upload_issue_invalid_id = /** @type {(inputs: Upload_Issue_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die ID darf nur Buchstaben, Ziffern, „.“, „_“ und „-“ enthalten.`)
};

const fr_upload_issue_invalid_id = /** @type {(inputs: Upload_Issue_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’id ne peut contenir que des lettres, des chiffres, « . », « _ » et « - ».`)
};

const it_upload_issue_invalid_id = /** @type {(inputs: Upload_Issue_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’id può usare solo lettere, cifre, “.”, “_” e “-”.`)
};

const nl_upload_issue_invalid_id = /** @type {(inputs: Upload_Issue_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het id mag alleen letters, cijfers, ‘.’, ‘_’ en ‘-’ bevatten.`)
};

const pl_upload_issue_invalid_id = /** @type {(inputs: Upload_Issue_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identyfikator może zawierać tylko litery, cyfry, „.”, „_” i „-”.`)
};

const pt_upload_issue_invalid_id = /** @type {(inputs: Upload_Issue_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O id só pode ter letras, dígitos, “.”, “_” e “-”.`)
};

const ru_upload_issue_invalid_id = /** @type {(inputs: Upload_Issue_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Id может содержать только буквы, цифры, «.», «_» и «-».`)
};

const sv_upload_issue_invalid_id = /** @type {(inputs: Upload_Issue_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Id får bara innehålla bokstäver, siffror, ”.”, ”_” och ”-”.`)
};

const tr_upload_issue_invalid_id = /** @type {(inputs: Upload_Issue_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kimlik yalnızca harf, rakam, “.”, “_” ve “-” içerebilir.`)
};

const zh_upload_issue_invalid_id = /** @type {(inputs: Upload_Issue_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`id 只能包含字母、数字、“.”、“_”和“-”。`)
};

const ja_upload_issue_invalid_id = /** @type {(inputs: Upload_Issue_Invalid_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`id に使えるのは英数字、「.」「_」「-」だけです。`)
};

/**
* | output |
* | --- |
* | "The id may only use letters, digits, “.”, “_” and “-”." |
*
* @param {Upload_Issue_Invalid_IdInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_invalid_id = /** @type {((inputs?: Upload_Issue_Invalid_IdInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_IdInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_invalid_id(inputs)
	if (locale === "de") return de_upload_issue_invalid_id(inputs)
	if (locale === "fr") return fr_upload_issue_invalid_id(inputs)
	if (locale === "it") return it_upload_issue_invalid_id(inputs)
	if (locale === "nl") return nl_upload_issue_invalid_id(inputs)
	if (locale === "pl") return pl_upload_issue_invalid_id(inputs)
	if (locale === "pt") return pt_upload_issue_invalid_id(inputs)
	if (locale === "ru") return ru_upload_issue_invalid_id(inputs)
	if (locale === "sv") return sv_upload_issue_invalid_id(inputs)
	if (locale === "tr") return tr_upload_issue_invalid_id(inputs)
	if (locale === "zh") return zh_upload_issue_invalid_id(inputs)
	if (locale === "ja") return ja_upload_issue_invalid_id(inputs)
	return en_upload_issue_invalid_id(inputs)
});
