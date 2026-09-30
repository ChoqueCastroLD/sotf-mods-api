/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Tokens_Revoked_ToastInputs */

const en_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Token “${i?.name}” revoked`)
};

const es_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Token «${i?.name}» revocado`)
};

const de_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Token „${i?.name}“ widerrufen`)
};

const fr_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jeton « ${i?.name} » révoqué`)
};

const it_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Token «${i?.name}» revocato`)
};

const nl_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Token ‘${i?.name}’ ingetrokken`)
};

const pl_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Unieważniono token „${i?.name}”`)
};

const pt_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Token “${i?.name}” revogado`)
};

const ru_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Токен «${i?.name}» отозван`)
};

const sv_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Token ”${i?.name}” återkallad`)
};

const tr_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” belirteci iptal edildi`)
};

const zh_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已撤销令牌“${i?.name}”`)
};

const ja_tokens_revoked_toast = /** @type {(inputs: Tokens_Revoked_ToastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`トークン「${i?.name}」を失効しました`)
};

/**
* | output |
* | --- |
* | "Token “{name}” revoked" |
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
