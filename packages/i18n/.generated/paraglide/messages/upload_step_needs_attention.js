/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Step_Needs_AttentionInputs */

const en_upload_step_needs_attention = /** @type {(inputs: Upload_Step_Needs_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`needs attention`)
};

const es_upload_step_needs_attention = /** @type {(inputs: Upload_Step_Needs_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`requiere atención`)
};

const de_upload_step_needs_attention = /** @type {(inputs: Upload_Step_Needs_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`braucht Aufmerksamkeit`)
};

const fr_upload_step_needs_attention = /** @type {(inputs: Upload_Step_Needs_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`à vérifier`)
};

const it_upload_step_needs_attention = /** @type {(inputs: Upload_Step_Needs_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`da controllare`)
};

const nl_upload_step_needs_attention = /** @type {(inputs: Upload_Step_Needs_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`vraagt aandacht`)
};

const pl_upload_step_needs_attention = /** @type {(inputs: Upload_Step_Needs_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`wymaga uwagi`)
};

const pt_upload_step_needs_attention = /** @type {(inputs: Upload_Step_Needs_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`precisa de atenção`)
};

const ru_upload_step_needs_attention = /** @type {(inputs: Upload_Step_Needs_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`требует внимания`)
};

const sv_upload_step_needs_attention = /** @type {(inputs: Upload_Step_Needs_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`behöver åtgärdas`)
};

const tr_upload_step_needs_attention = /** @type {(inputs: Upload_Step_Needs_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`dikkat gerekiyor`)
};

const zh_upload_step_needs_attention = /** @type {(inputs: Upload_Step_Needs_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需要处理`)
};

const ja_upload_step_needs_attention = /** @type {(inputs: Upload_Step_Needs_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要確認`)
};

/**
* | output |
* | --- |
* | "needs attention" |
*
* @param {Upload_Step_Needs_AttentionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_step_needs_attention = /** @type {((inputs?: Upload_Step_Needs_AttentionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Step_Needs_AttentionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_step_needs_attention(inputs)
	if (locale === "de") return de_upload_step_needs_attention(inputs)
	if (locale === "fr") return fr_upload_step_needs_attention(inputs)
	if (locale === "it") return it_upload_step_needs_attention(inputs)
	if (locale === "nl") return nl_upload_step_needs_attention(inputs)
	if (locale === "pl") return pl_upload_step_needs_attention(inputs)
	if (locale === "pt") return pt_upload_step_needs_attention(inputs)
	if (locale === "ru") return ru_upload_step_needs_attention(inputs)
	if (locale === "sv") return sv_upload_step_needs_attention(inputs)
	if (locale === "tr") return tr_upload_step_needs_attention(inputs)
	if (locale === "zh") return zh_upload_step_needs_attention(inputs)
	if (locale === "ja") return ja_upload_step_needs_attention(inputs)
	return en_upload_step_needs_attention(inputs)
});
