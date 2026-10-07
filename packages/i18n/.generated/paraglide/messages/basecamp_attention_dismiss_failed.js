/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Dismiss_FailedInputs */

const en_basecamp_attention_dismiss_failed = /** @type {(inputs: Basecamp_Attention_Dismiss_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not dismiss this`)
};

const es_basecamp_attention_dismiss_failed = /** @type {(inputs: Basecamp_Attention_Dismiss_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo descartar`)
};

const de_basecamp_attention_dismiss_failed = /** @type {(inputs: Basecamp_Attention_Dismiss_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Ausblenden hat nicht geklappt`)
};

const fr_basecamp_attention_dismiss_failed = /** @type {(inputs: Basecamp_Attention_Dismiss_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de masquer cet élément`)
};

const it_basecamp_attention_dismiss_failed = /** @type {(inputs: Basecamp_Attention_Dismiss_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile nascondere`)
};

const nl_basecamp_attention_dismiss_failed = /** @type {(inputs: Basecamp_Attention_Dismiss_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbergen is niet gelukt`)
};

const pl_basecamp_attention_dismiss_failed = /** @type {(inputs: Basecamp_Attention_Dismiss_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się odrzucić`)
};

const pt_basecamp_attention_dismiss_failed = /** @type {(inputs: Basecamp_Attention_Dismiss_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível dispensar`)
};

const ru_basecamp_attention_dismiss_failed = /** @type {(inputs: Basecamp_Attention_Dismiss_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось скрыть`)
};

const sv_basecamp_attention_dismiss_failed = /** @type {(inputs: Basecamp_Attention_Dismiss_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att dölja`)
};

const tr_basecamp_attention_dismiss_failed = /** @type {(inputs: Basecamp_Attention_Dismiss_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizlenemedi`)
};

const zh_basecamp_attention_dismiss_failed = /** @type {(inputs: Basecamp_Attention_Dismiss_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法忽略此项`)
};

const ja_basecamp_attention_dismiss_failed = /** @type {(inputs: Basecamp_Attention_Dismiss_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非表示にできませんでした`)
};

/**
* | output |
* | --- |
* | "Could not dismiss this" |
*
* @param {Basecamp_Attention_Dismiss_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_dismiss_failed = /** @type {((inputs?: Basecamp_Attention_Dismiss_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Dismiss_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_dismiss_failed(inputs)
	if (locale === "de") return de_basecamp_attention_dismiss_failed(inputs)
	if (locale === "fr") return fr_basecamp_attention_dismiss_failed(inputs)
	if (locale === "it") return it_basecamp_attention_dismiss_failed(inputs)
	if (locale === "nl") return nl_basecamp_attention_dismiss_failed(inputs)
	if (locale === "pl") return pl_basecamp_attention_dismiss_failed(inputs)
	if (locale === "pt") return pt_basecamp_attention_dismiss_failed(inputs)
	if (locale === "ru") return ru_basecamp_attention_dismiss_failed(inputs)
	if (locale === "sv") return sv_basecamp_attention_dismiss_failed(inputs)
	if (locale === "tr") return tr_basecamp_attention_dismiss_failed(inputs)
	if (locale === "zh") return zh_basecamp_attention_dismiss_failed(inputs)
	if (locale === "ja") return ja_basecamp_attention_dismiss_failed(inputs)
	return en_basecamp_attention_dismiss_failed(inputs)
});
