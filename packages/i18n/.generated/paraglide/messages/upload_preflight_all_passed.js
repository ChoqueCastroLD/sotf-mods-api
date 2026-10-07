/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_All_PassedInputs */

const en_upload_preflight_all_passed = /** @type {(inputs: Upload_Preflight_All_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No errors or warnings.`)
};

const es_upload_preflight_all_passed = /** @type {(inputs: Upload_Preflight_All_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin errores ni avisos.`)
};

const de_upload_preflight_all_passed = /** @type {(inputs: Upload_Preflight_All_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Fehler oder Warnungen.`)
};

const fr_upload_preflight_all_passed = /** @type {(inputs: Upload_Preflight_All_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune erreur ni avertissement.`)
};

const it_upload_preflight_all_passed = /** @type {(inputs: Upload_Preflight_All_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun errore o avviso.`)
};

const nl_upload_preflight_all_passed = /** @type {(inputs: Upload_Preflight_All_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen fouten of waarschuwingen.`)
};

const pl_upload_preflight_all_passed = /** @type {(inputs: Upload_Preflight_All_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak błędów i ostrzeżeń.`)
};

const pt_upload_preflight_all_passed = /** @type {(inputs: Upload_Preflight_All_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem erros nem avisos.`)
};

const ru_upload_preflight_all_passed = /** @type {(inputs: Upload_Preflight_All_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ошибок и предупреждений нет.`)
};

const sv_upload_preflight_all_passed = /** @type {(inputs: Upload_Preflight_All_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga fel eller varningar.`)
};

const tr_upload_preflight_all_passed = /** @type {(inputs: Upload_Preflight_All_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hata veya uyarı yok.`)
};

const zh_upload_preflight_all_passed = /** @type {(inputs: Upload_Preflight_All_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有错误或警告。`)
};

const ja_upload_preflight_all_passed = /** @type {(inputs: Upload_Preflight_All_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エラーも警告もありません。`)
};

/**
* | output |
* | --- |
* | "No errors or warnings." |
*
* @param {Upload_Preflight_All_PassedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_all_passed = /** @type {((inputs?: Upload_Preflight_All_PassedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_All_PassedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_all_passed(inputs)
	if (locale === "de") return de_upload_preflight_all_passed(inputs)
	if (locale === "fr") return fr_upload_preflight_all_passed(inputs)
	if (locale === "it") return it_upload_preflight_all_passed(inputs)
	if (locale === "nl") return nl_upload_preflight_all_passed(inputs)
	if (locale === "pl") return pl_upload_preflight_all_passed(inputs)
	if (locale === "pt") return pt_upload_preflight_all_passed(inputs)
	if (locale === "ru") return ru_upload_preflight_all_passed(inputs)
	if (locale === "sv") return sv_upload_preflight_all_passed(inputs)
	if (locale === "tr") return tr_upload_preflight_all_passed(inputs)
	if (locale === "zh") return zh_upload_preflight_all_passed(inputs)
	if (locale === "ja") return ja_upload_preflight_all_passed(inputs)
	return en_upload_preflight_all_passed(inputs)
});
