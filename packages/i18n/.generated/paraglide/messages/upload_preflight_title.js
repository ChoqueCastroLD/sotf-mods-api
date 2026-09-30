/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_TitleInputs */

const en_upload_preflight_title = /** @type {(inputs: Upload_Preflight_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preflight`)
};

const es_upload_preflight_title = /** @type {(inputs: Upload_Preflight_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprobación previa`)
};

const de_upload_preflight_title = /** @type {(inputs: Upload_Preflight_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorabprüfung`)
};

const fr_upload_preflight_title = /** @type {(inputs: Upload_Preflight_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifications préalables`)
};

const it_upload_preflight_title = /** @type {(inputs: Upload_Preflight_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlli preliminari`)
};

const nl_upload_preflight_title = /** @type {(inputs: Upload_Preflight_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorcontrole`)
};

const pl_upload_preflight_title = /** @type {(inputs: Upload_Preflight_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrola przed wysyłką`)
};

const pt_upload_preflight_title = /** @type {(inputs: Upload_Preflight_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificação prévia`)
};

const ru_upload_preflight_title = /** @type {(inputs: Upload_Preflight_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предварительная проверка`)
};

const sv_upload_preflight_title = /** @type {(inputs: Upload_Preflight_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förhandskontroll`)
};

const tr_upload_preflight_title = /** @type {(inputs: Upload_Preflight_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ön kontrol`)
};

const zh_upload_preflight_title = /** @type {(inputs: Upload_Preflight_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`预检`)
};

const ja_upload_preflight_title = /** @type {(inputs: Upload_Preflight_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`事前チェック`)
};

/**
* | output |
* | --- |
* | "Preflight" |
*
* @param {Upload_Preflight_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_title = /** @type {((inputs?: Upload_Preflight_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_title(inputs)
	if (locale === "de") return de_upload_preflight_title(inputs)
	if (locale === "fr") return fr_upload_preflight_title(inputs)
	if (locale === "it") return it_upload_preflight_title(inputs)
	if (locale === "nl") return nl_upload_preflight_title(inputs)
	if (locale === "pl") return pl_upload_preflight_title(inputs)
	if (locale === "pt") return pt_upload_preflight_title(inputs)
	if (locale === "ru") return ru_upload_preflight_title(inputs)
	if (locale === "sv") return sv_upload_preflight_title(inputs)
	if (locale === "tr") return tr_upload_preflight_title(inputs)
	if (locale === "zh") return zh_upload_preflight_title(inputs)
	if (locale === "ja") return ja_upload_preflight_title(inputs)
	return en_upload_preflight_title(inputs)
});
