/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Tokens_Revoked_ToastInputs */

const en_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`API key “${i?.name}” revoked`)
};

const es_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Clave de API «${i?.name}» revocada`)
};

const de_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`API-Schlüssel „${i?.name}“ widerrufen`)
};

const fr_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Clé d’API « ${i?.name} » révoquée`)
};

const it_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Chiave API «${i?.name}» revocata`)
};

const nl_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`API-sleutel ‘${i?.name}’ ingetrokken`)
};

const pl_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Unieważniono klucz API „${i?.name}”`)
};

const pt_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Chave de API “${i?.name}” revogada`)
};

const ru_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`API-ключ «${i?.name}» отозван`)
};

const sv_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`API-nyckeln ”${i?.name}” återkallad`)
};

const tr_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” API anahtarı iptal edildi`)
};

const zh_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`API 密钥“${i?.name}”已撤销`)
};

const ja_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`API キー「${i?.name}」を取り消しました`)
};

/**
* | output |
* | --- |
* | "API key “{name}” revoked" |
*
* @param {Tokens_Revoked_ToastInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_revoked_toast = /** @type {((inputs: Tokens_Revoked_ToastInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Revoked_ToastInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_revoked_toast(inputs)
	if (locale === "de") return de_tokens_revoked_toast(inputs)
	if (locale === "fr") return fr_tokens_revoked_toast(inputs)
	if (locale === "it") return it_tokens_revoked_toast(inputs)
	if (locale === "nl") return nl_tokens_revoked_toast(inputs)
	if (locale === "pl") return pl_tokens_revoked_toast(inputs)
	if (locale === "pt") return pt_tokens_revoked_toast(inputs)
	if (locale === "ru") return ru_tokens_revoked_toast(inputs)
	if (locale === "sv") return sv_tokens_revoked_toast(inputs)
	if (locale === "tr") return tr_tokens_revoked_toast(inputs)
	if (locale === "zh") return zh_tokens_revoked_toast(inputs)
	if (locale === "ja") return ja_tokens_revoked_toast(inputs)
	return en_tokens_revoked_toast(inputs)
});
