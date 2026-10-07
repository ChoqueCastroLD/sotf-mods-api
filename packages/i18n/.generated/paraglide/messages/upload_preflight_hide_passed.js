/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Hide_PassedInputs */

const en_upload_preflight_hide_passed = /** @type {(inputs: Upload_Preflight_Hide_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide passed checks`)
};

const es_upload_preflight_hide_passed = /** @type {(inputs: Upload_Preflight_Hide_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar comprobaciones superadas`)
};

const de_upload_preflight_hide_passed = /** @type {(inputs: Upload_Preflight_Hide_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestandene Prüfungen ausblenden`)
};

const fr_upload_preflight_hide_passed = /** @type {(inputs: Upload_Preflight_Hide_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masquer les contrôles réussis`)
};

const it_upload_preflight_hide_passed = /** @type {(inputs: Upload_Preflight_Hide_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascondi i controlli superati`)
};

const nl_upload_preflight_hide_passed = /** @type {(inputs: Upload_Preflight_Hide_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geslaagde controles verbergen`)
};

const pl_upload_preflight_hide_passed = /** @type {(inputs: Upload_Preflight_Hide_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryj zaliczone sprawdzenia`)
};

const pt_upload_preflight_hide_passed = /** @type {(inputs: Upload_Preflight_Hide_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar verificações aprovadas`)
};

const ru_upload_preflight_hide_passed = /** @type {(inputs: Upload_Preflight_Hide_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыть пройденные проверки`)
};

const sv_upload_preflight_hide_passed = /** @type {(inputs: Upload_Preflight_Hide_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dölj godkända kontroller`)
};

const tr_upload_preflight_hide_passed = /** @type {(inputs: Upload_Preflight_Hide_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçen kontrolleri gizle`)
};

const zh_upload_preflight_hide_passed = /** @type {(inputs: Upload_Preflight_Hide_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏已通过的检查`)
};

const ja_upload_preflight_hide_passed = /** @type {(inputs: Upload_Preflight_Hide_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`合格したチェックを隠す`)
};

/**
* | output |
* | --- |
* | "Hide passed checks" |
*
* @param {Upload_Preflight_Hide_PassedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_hide_passed = /** @type {((inputs?: Upload_Preflight_Hide_PassedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Hide_PassedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_hide_passed(inputs)
	if (locale === "de") return de_upload_preflight_hide_passed(inputs)
	if (locale === "fr") return fr_upload_preflight_hide_passed(inputs)
	if (locale === "it") return it_upload_preflight_hide_passed(inputs)
	if (locale === "nl") return nl_upload_preflight_hide_passed(inputs)
	if (locale === "pl") return pl_upload_preflight_hide_passed(inputs)
	if (locale === "pt") return pt_upload_preflight_hide_passed(inputs)
	if (locale === "ru") return ru_upload_preflight_hide_passed(inputs)
	if (locale === "sv") return sv_upload_preflight_hide_passed(inputs)
	if (locale === "tr") return tr_upload_preflight_hide_passed(inputs)
	if (locale === "zh") return zh_upload_preflight_hide_passed(inputs)
	if (locale === "ja") return ja_upload_preflight_hide_passed(inputs)
	return en_upload_preflight_hide_passed(inputs)
});
