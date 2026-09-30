/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Tokens_Revoke_TextInputs */

const en_tokens_revoke_text = /** @type {(inputs: Tokens_Revoke_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Anything using “${i?.name}” will stop working immediately.`)
};

const es_tokens_revoke_text = /** @type {(inputs: Tokens_Revoke_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Todo lo que use «${i?.name}» dejará de funcionar de inmediato.`)
};

const de_tokens_revoke_text = /** @type {(inputs: Tokens_Revoke_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alles, was „${i?.name}“ verwendet, funktioniert sofort nicht mehr.`)
};

const fr_tokens_revoke_text = /** @type {(inputs: Tokens_Revoke_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tout ce qui utilise « ${i?.name} » cessera de fonctionner immédiatement.`)
};

const it_tokens_revoke_text = /** @type {(inputs: Tokens_Revoke_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tutto ciò che usa «${i?.name}» smetterà subito di funzionare.`)
};

const nl_tokens_revoke_text = /** @type {(inputs: Tokens_Revoke_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alles wat ‘${i?.name}’ gebruikt, stopt meteen met werken.`)
};

const pl_tokens_revoke_text = /** @type {(inputs: Tokens_Revoke_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wszystko, co używa „${i?.name}”, natychmiast przestanie działać.`)
};

const pt_tokens_revoke_text = /** @type {(inputs: Tokens_Revoke_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tudo que usa “${i?.name}” deixará de funcionar imediatamente.`)
};

const ru_tokens_revoke_text = /** @type {(inputs: Tokens_Revoke_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Всё, что использует «${i?.name}», сразу перестанет работать.`)
};

const sv_tokens_revoke_text = /** @type {(inputs: Tokens_Revoke_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Allt som använder ”${i?.name}” slutar fungera direkt.`)
};

const tr_tokens_revoke_text = /** @type {(inputs: Tokens_Revoke_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” kullanan her şey hemen çalışmayı bırakır.`)
};

const zh_tokens_revoke_text = /** @type {(inputs: Tokens_Revoke_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`使用“${i?.name}”的所有内容将立即失效。`)
};

const ja_tokens_revoke_text = /** @type {(inputs: Tokens_Revoke_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.name}」を使っているものはすべて、すぐに動作しなくなります。`)
};

/**
* | output |
* | --- |
* | "Anything using “{name}” will stop working immediately." |
*
* @param {Tokens_Revoke_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_revoke_text = /** @type {((inputs: Tokens_Revoke_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Revoke_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_revoke_text(inputs)
	if (locale === "de") return de_tokens_revoke_text(inputs)
	if (locale === "fr") return fr_tokens_revoke_text(inputs)
	if (locale === "it") return it_tokens_revoke_text(inputs)
	if (locale === "nl") return nl_tokens_revoke_text(inputs)
	if (locale === "pl") return pl_tokens_revoke_text(inputs)
	if (locale === "pt") return pt_tokens_revoke_text(inputs)
	if (locale === "ru") return ru_tokens_revoke_text(inputs)
	if (locale === "sv") return sv_tokens_revoke_text(inputs)
	if (locale === "tr") return tr_tokens_revoke_text(inputs)
	if (locale === "zh") return zh_tokens_revoke_text(inputs)
	if (locale === "ja") return ja_tokens_revoke_text(inputs)
	return en_tokens_revoke_text(inputs)
});
