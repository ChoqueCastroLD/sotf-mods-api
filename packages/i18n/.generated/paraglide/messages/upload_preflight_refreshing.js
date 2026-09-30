/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_RefreshingInputs */

const en_upload_preflight_refreshing = /** @type {(inputs: Upload_Preflight_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updating…`)
};

const es_upload_preflight_refreshing = /** @type {(inputs: Upload_Preflight_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizando…`)
};

const de_upload_preflight_refreshing = /** @type {(inputs: Upload_Preflight_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird aktualisiert…`)
};

const fr_upload_preflight_refreshing = /** @type {(inputs: Upload_Preflight_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mise à jour…`)
};

const it_upload_preflight_refreshing = /** @type {(inputs: Upload_Preflight_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornamento…`)
};

const nl_upload_preflight_refreshing = /** @type {(inputs: Upload_Preflight_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bijwerken…`)
};

const pl_upload_preflight_refreshing = /** @type {(inputs: Upload_Preflight_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualizowanie…`)
};

const pt_upload_preflight_refreshing = /** @type {(inputs: Upload_Preflight_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizando…`)
};

const ru_upload_preflight_refreshing = /** @type {(inputs: Upload_Preflight_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновляем…`)
};

const sv_upload_preflight_refreshing = /** @type {(inputs: Upload_Preflight_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdaterar…`)
};

const tr_upload_preflight_refreshing = /** @type {(inputs: Upload_Preflight_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncelleniyor…`)
};

const zh_upload_preflight_refreshing = /** @type {(inputs: Upload_Preflight_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在更新…`)
};

const ja_upload_preflight_refreshing = /** @type {(inputs: Upload_Preflight_RefreshingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新中…`)
};

/**
* | output |
* | --- |
* | "Updating…" |
*
* @param {Upload_Preflight_RefreshingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_refreshing = /** @type {((inputs?: Upload_Preflight_RefreshingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_RefreshingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_refreshing(inputs)
	if (locale === "de") return de_upload_preflight_refreshing(inputs)
	if (locale === "fr") return fr_upload_preflight_refreshing(inputs)
	if (locale === "it") return it_upload_preflight_refreshing(inputs)
	if (locale === "nl") return nl_upload_preflight_refreshing(inputs)
	if (locale === "pl") return pl_upload_preflight_refreshing(inputs)
	if (locale === "pt") return pt_upload_preflight_refreshing(inputs)
	if (locale === "ru") return ru_upload_preflight_refreshing(inputs)
	if (locale === "sv") return sv_upload_preflight_refreshing(inputs)
	if (locale === "tr") return tr_upload_preflight_refreshing(inputs)
	if (locale === "zh") return zh_upload_preflight_refreshing(inputs)
	if (locale === "ja") return ja_upload_preflight_refreshing(inputs)
	return en_upload_preflight_refreshing(inputs)
});
