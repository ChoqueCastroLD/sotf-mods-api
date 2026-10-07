/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_BackInputs */

const en_basecamp_attention_back = /** @type {(inputs: Basecamp_Attention_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to open items`)
};

const es_basecamp_attention_back = /** @type {(inputs: Basecamp_Attention_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver a los pendientes`)
};

const de_basecamp_attention_back = /** @type {(inputs: Basecamp_Attention_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zu den offenen Einträgen`)
};

const fr_basecamp_attention_back = /** @type {(inputs: Basecamp_Attention_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour aux éléments en cours`)
};

const it_basecamp_attention_back = /** @type {(inputs: Basecamp_Attention_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna agli elementi aperti`)
};

const nl_basecamp_attention_back = /** @type {(inputs: Basecamp_Attention_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar open items`)
};

const pl_basecamp_attention_back = /** @type {(inputs: Basecamp_Attention_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do otwartych pozycji`)
};

const pt_basecamp_attention_back = /** @type {(inputs: Basecamp_Attention_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar aos itens em aberto`)
};

const ru_basecamp_attention_back = /** @type {(inputs: Basecamp_Attention_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назад к текущим пунктам`)
};

const sv_basecamp_attention_back = /** @type {(inputs: Basecamp_Attention_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till öppna punkter`)
};

const tr_basecamp_attention_back = /** @type {(inputs: Basecamp_Attention_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açık öğelere dön`)
};

const zh_basecamp_attention_back = /** @type {(inputs: Basecamp_Attention_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回待处理项目`)
};

const ja_basecamp_attention_back = /** @type {(inputs: Basecamp_Attention_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未対応の項目に戻る`)
};

/**
* | output |
* | --- |
* | "Back to open items" |
*
* @param {Basecamp_Attention_BackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_back = /** @type {((inputs?: Basecamp_Attention_BackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_BackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_back(inputs)
	if (locale === "de") return de_basecamp_attention_back(inputs)
	if (locale === "fr") return fr_basecamp_attention_back(inputs)
	if (locale === "it") return it_basecamp_attention_back(inputs)
	if (locale === "nl") return nl_basecamp_attention_back(inputs)
	if (locale === "pl") return pl_basecamp_attention_back(inputs)
	if (locale === "pt") return pt_basecamp_attention_back(inputs)
	if (locale === "ru") return ru_basecamp_attention_back(inputs)
	if (locale === "sv") return sv_basecamp_attention_back(inputs)
	if (locale === "tr") return tr_basecamp_attention_back(inputs)
	if (locale === "zh") return zh_basecamp_attention_back(inputs)
	if (locale === "ja") return ja_basecamp_attention_back(inputs)
	return en_basecamp_attention_back(inputs)
});
