/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ code: NonNullable<unknown> }} Upload_Flag_UnknownInputs */

const en_upload_flag_unknown = /** @type {(inputs: Upload_Flag_UnknownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Check failed (${i?.code}).`)
};

const es_upload_flag_unknown = /** @type {(inputs: Upload_Flag_UnknownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Comprobación fallida (${i?.code}).`)
};

const de_upload_flag_unknown = /** @type {(inputs: Upload_Flag_UnknownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Check fehlgeschlagen (${i?.code}).`)
};

const fr_upload_flag_unknown = /** @type {(inputs: Upload_Flag_UnknownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vérification échouée (${i?.code}).`)
};

const it_upload_flag_unknown = /** @type {(inputs: Upload_Flag_UnknownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Controllo non riuscito (${i?.code}).`)
};

const nl_upload_flag_unknown = /** @type {(inputs: Upload_Flag_UnknownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Check mislukt (${i?.code}).`)
};

const pl_upload_flag_unknown = /** @type {(inputs: Upload_Flag_UnknownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kontrola nieudana (${i?.code}).`)
};

const pt_upload_flag_unknown = /** @type {(inputs: Upload_Flag_UnknownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verificação falhou (${i?.code}).`)
};

const ru_upload_flag_unknown = /** @type {(inputs: Upload_Flag_UnknownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Проверка не пройдена (${i?.code}).`)
};

const sv_upload_flag_unknown = /** @type {(inputs: Upload_Flag_UnknownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kontrollen misslyckades (${i?.code}).`)
};

const tr_upload_flag_unknown = /** @type {(inputs: Upload_Flag_UnknownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kontrol başarısız (${i?.code}).`)
};

const zh_upload_flag_unknown = /** @type {(inputs: Upload_Flag_UnknownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`检查失败（${i?.code}）。`)
};

const ja_upload_flag_unknown = /** @type {(inputs: Upload_Flag_UnknownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`チェックに失敗しました（${i?.code}）。`)
};

/**
* | output |
* | --- |
* | "Check failed ({code})." |
*
* @param {Upload_Flag_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flag_unknown = /** @type {((inputs: Upload_Flag_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flag_unknown(inputs)
	if (locale === "de") return de_upload_flag_unknown(inputs)
	if (locale === "fr") return fr_upload_flag_unknown(inputs)
	if (locale === "it") return it_upload_flag_unknown(inputs)
	if (locale === "nl") return nl_upload_flag_unknown(inputs)
	if (locale === "pl") return pl_upload_flag_unknown(inputs)
	if (locale === "pt") return pt_upload_flag_unknown(inputs)
	if (locale === "ru") return ru_upload_flag_unknown(inputs)
	if (locale === "sv") return sv_upload_flag_unknown(inputs)
	if (locale === "tr") return tr_upload_flag_unknown(inputs)
	if (locale === "zh") return zh_upload_flag_unknown(inputs)
	if (locale === "ja") return ja_upload_flag_unknown(inputs)
	return en_upload_flag_unknown(inputs)
});
